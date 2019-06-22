package controllers

import javax.inject._
import models.{UnauthedUser, User}
import play.api._
import play.api.mvc._
import schema.{DBUser, UsersDAO}
import security.{JWTAuthentication, JWTService}

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global


/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(
                                cc: ControllerComponents,
                                jwtAuthentication: JWTAuthentication,
                                jwtService: JWTService,
                                usersDAO: UsersDAO
                              ) extends AbstractController(cc) {
  def greet() = Action { request =>
    Ok("Hello")
  }

  def register() = Action.async { implicit req =>
    import com.github.t3hnar.bcrypt._
    import io.circe.generic.auto._
    import io.circe.parser._

    req.body.asJson.map(_.toString()) match {
      case Some(s) => decode[UnauthedUser](s).toOption.map{ user =>
        val hashed = user.password.bcrypt
        usersDAO.insert(DBUser(None, user.username, hashed)).map(_ => Ok("Successfully registered user"))
      }.getOrElse(Future.successful(Ok("Failed to decode request")))
      case None => Future.successful(Ok("Failed to parse request"))
    }
  }

  def authedGreet() = jwtAuthentication { implicit req =>
    Ok("Authed successfully")
  }

  def login() = Action.async { implicit req =>
    import com.github.t3hnar.bcrypt._
    import io.circe.generic.auto._
    import io.circe.parser._
    import io.circe.syntax._

    req.body.asJson.map(_.toString()) match {
      case Some(s) => decode[UnauthedUser](s).toOption.map{ user =>
        usersDAO.get(user.username).map{
          case Some(dbUser) => {
            user.password.isBcryptedSafe(dbUser.password).toOption match {
              case Some(true) => {
                val newToken = jwtService.createToken(dbUser.asJson.noSpaces)
                Ok("Token:" + newToken)
              }
              case _ => Ok("Incorrect password")
            }
          }
          case None => Ok("Failed to find user")
        }
      }.getOrElse(Future.successful(Ok("Failed to decode request")))
      case None => Future.successful(Ok("Failed to parse request"))
    }
  }
}
