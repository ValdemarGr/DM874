package services

import akka.actor.{ActorSystem, Cancellable}
import akka.stream.scaladsl.{Source, SourceQueue}
import models.User

import scala.collection.concurrent.TrieMap
import scala.concurrent.ExecutionContext
import scala.concurrent.duration.Duration

object WebsocketManager {
  //SessionId : Queue
  val sockets = new TrieMap[String, SourceQueue[String]]()
  val sessionSuicide = new TrieMap[String, Cancellable]()

  def updateTTL(sessionId: String, ttl: Duration)(implicit ec: ExecutionContext, system: ActorSystem) = {
    sessionSuicide.remove(sessionId).map(_.cancel())

    sessionSuicide.update(sessionId, system.scheduler.scheduleOnce(ttl) {
      sockets.remove(sessionId)
      sessionSuicide.remove(sessionId)
    })
  }

  def addClient(sessionId: String, pub: SourceQueue[String], ttl: Duration)(implicit ec: ExecutionContext, system: ActorSystem) = {
    sockets.update(sessionId, pub)
    updateTTL(sessionId, ttl)
  }

  def removeClient(sessionId: String) = sockets.remove(sessionId)
}
