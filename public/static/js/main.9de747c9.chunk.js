(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),l=t.n(o),i=(t(97),t(98),t(34)),c=t(35),s=t(41),m=t(36),u=t(42),d=t(165),p=t(175),g=t(170),h=t(164),b=t(173),E=t(167),f=t(166),w=t(4),v=t(161),y=t(47),j=t.n(y),C=t(28),S=t(39),O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).componentDidMount=function(){localStorage.getItem("dm874-jwt")},t.handleSubmit=function(e){j.a.post("/login",t.state).then(function(e){var a=e.data;a.startsWith("Token:")?(localStorage.setItem("dm874_jwt",a.slice("Token:".length)),t.setState({loggedIn:!0})):t.setState({loginError:a})})},t.state={username:null,password:null,loginError:null,loggedIn:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return this.state.loggedIn?r.a.createElement(C.a,{to:"/home"}):r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:a.papers},r.a.createElement("div",{className:a.form},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(a){return e.setState({username:a.target.value})}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement(h.a,{control:r.a.createElement(b.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(d.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:this.handleSubmit},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{component:S.b,to:"/register",variant:"body2"},"Don't have an account? Sign Up"))))))}}]),a}(r.a.Component),k=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},papers:{marginTop:e.spacing(8),display:"flex",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},{withTheme:!0})(O),I=function(){return null==localStorage.getItem("dm874-jwt")?r.a.createElement("div",null,r.a.createElement(k,null)):r.a.createElement("div",null,r.a.createElement("h1",null,"YOU ARE SIGNED IN!"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(174),T=t(168),W=t(169),D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleSubmit=function(e){j.a.post("/register",t.state).then(function(e){console.log(e)}).then(function(e){t.setState({showDialogue:!0})})},t.state={username:null,password:null,showDialogue:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:a.papers},r.a.createElement("div",{className:a.form},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(a){return e.setState({username:a.target.value})}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement(h.a,{control:r.a.createElement(b.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(d.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:this.handleSubmit},"Sign Up"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{component:S.b,to:"/signin",variant:"body2"},"Sign in")))))),r.a.createElement(x.a,{open:this.state.showDialogue,onClose:function(a){return e.setState({showDialogue:!1})},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(T.a,{id:"alert-dialog-title"},"You have successfully registered."),r.a.createElement(W.a,null,r.a.createElement(d.a,{onClick:function(a){return e.setState({showDialogue:!1})},color:"primary"},"Ok"))))}}]),a}(r.a.Component),N=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},papers:{marginTop:e.spacing(8),display:"flex",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},{withTheme:!0})(D),U=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement("h1",null,"Hey")}}]),a}(r.a.Component),q=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},papers:{marginTop:e.spacing(8),display:"flex",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},{withTheme:!0})(U),R=r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(C.b,{exact:!0,path:"/",component:I}),r.a.createElement(C.b,{exact:!0,path:"/signin",component:k}),r.a.createElement(C.b,{exact:!0,path:"/register",component:N}),r.a.createElement(C.b,{exact:!0,path:"/home",component:q})));l.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,a,t){e.exports=t(128)},97:function(e,a,t){},98:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.9de747c9.chunk.js.map