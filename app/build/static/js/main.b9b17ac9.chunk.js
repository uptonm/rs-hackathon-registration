(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/RocketBuildLogo.5b16baa4.png"},43:function(e,t,a){e.exports=a(80)},73:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",function(){return R}),a.d(n,"fetchUsers",function(){return x}),a.d(n,"putUser",function(){return U});var r=a(0),l=a.n(r),s=a(37),o=a.n(s),c=a(19),i=a(18),u=a(40),m=a(13),d=a(14),h=a(17),p=a(15),v=a(16),f=a(84),b=a(85),E=a(24),g=a.n(E),y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Welcome to ",l.a.createElement("code",null,"Rocket.Build Community")," login below"),l.a.createElement("a",{className:"App-link",href:"/auth/google",target:"_blank",rel:"noopener noreferrer"},"Login to Register")))},j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Thank you for signing in ",l.a.createElement("br",null),"Good luck at ",l.a.createElement("code",null,"Rocket.Build Community"))))},k=a(5),w=a(4),S=a.n(w),O=a(12),N=a(25),C=a.n(N),R=function(){return function(){var e=Object(O.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/current_user");case 2:a=e.sent,t({type:"FETCH_USER",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=Object(O.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/users/?key=".concat("lsadnlaskdnlknlk3no8847os8d9as8dya9s8das79yhdlnasjnd"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(O.a)(S.a.mark(function e(t,a){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("http://localhost:8000/api/users/".concat(t,"/?key=").concat("lsadnlaskdnlknlk3no8847os8d9as8dya9s8das79yhdlnasjnd"),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),H=function(e){var t=e.id,a=e.label,n=e.placeholder,r=e.value,s=e.onChange;return l.a.createElement("div",{key:t,className:"form-group"},l.a.createElement("label",{htmlFor:t},a),"dietaryRestrictions"===t?l.a.createElement("textarea",{type:"email"===t?"email":"text",className:"form-control",id:t,placeholder:n,value:r,onChange:s}):l.a.createElement("input",{type:"email"===t?"email":"text",className:"form-control",id:t,placeholder:n,value:r,onChange:s}),"email"===t?l.a.createElement("small",{id:"".concat(t,"-help"),className:"form-text text-muted"},"We'll never share your email with anyone else."):"")},F=function(e){var t=e.id,a=e.label,n=e.value,r=e.onChange;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",{className:"form-control",id:t,value:n,onChange:r},l.a.createElement("option",{value:""},"Select a School"),l.a.createElement("option",{value:"wit"},"Wentworth Institute of Technology"),l.a.createElement("option",{value:"northeastern"},"Northeastern University"),l.a.createElement("option",{value:"massart"},"MassArt"),l.a.createElement("option",{value:"mcphs"},"MCPHS"),l.a.createElement("option",{value:"simmons"},"Simmons University"),l.a.createElement("option",{value:"emmanuel"},"Emmanuel University"),l.a.createElement("option",{value:"tufts"},"Tufts University"),l.a.createElement("option",{value:"umass-boston"},"UMass Boston"),l.a.createElement("option",{value:"harvard"},"Harvard University"),l.a.createElement("option",{value:"other"},"Other")))},A=(a(71),a(73),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={first:{id:"first",label:"First Name",placeHolder:"Enter First Name",value:""},last:{id:"last",label:"Last Name",placeHolder:"Enter Last Name",value:""},email:{id:"email",label:"Email",placeHolder:"Enter Email",value:""},phone:{id:"phone",label:"Phone Number",placeHolder:"Enter Phone Number",value:""},school:{id:"school",label:"School",placeHolder:"Enter School",value:"",other:""},major:{id:"major",label:"Major",placeHolder:"Enter Major",value:""},dietaryRestrictions:{id:"dietaryRestrictions",label:"Dietary Restrictions",placeHolder:"Enter Dietary Restrictions",value:""},waiverSigned:{id:"waiver",label:"I agree to the terms listed in the ",value:!1},conductSigned:{id:"conduct",label:"I agree to the ",value:!1},errors:{email:"",phone:""},doOnce:0},a.onSubmit=function(){var e=Object(O.a)(S.a.mark(function e(t){var n,r,l,s,o,c,i,u,m,d,h;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.first,l=n.last,s=n.email,o=n.phone,c=n.school,i=n.major,u=n.dietaryRestrictions,m=n.waiverSigned,d=n.conductSigned,h={first:r.value,last:l.value,email:s.value,phone:o.value,school:"other"!==c.value?c.value:c.other,major:i.value,dietaryRestrictions:u.value,waiverSigned:m.value,conductSigned:d.value},e.next=5,U(a.props.auth._id,h);case 5:a.props.history.push("/post-sign-in");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentWillReceiveProps=function(){switch(a.props.auth){case null:case!1:break;default:a.renderContent()}},a.canSubmit=function(){var e={};return e.email=a.validateEmail(),e.phone=a.validatePhone(),e.major=a.validateMajor(),e.school=a.validateSchool(),e.first=a.validateFirst(),e.last=a.validateLast(),""!==e.email||""!==e.phone||""!==e.major||""!==e.school||""!==e.first||""!==e.last||!a.state.conductSigned.value||!a.state.waiverSigned.value},a.renderFields=function(){switch(a.props.auth){case null:return l.a.createElement("div",null,"Loading...");case!1:return l.a.createElement("div",null,"Logged Out");default:return 0===a.state.doOnce&&(a.renderContent(),a.setState({doOnce:a.state.doOnce+1})),l.a.createElement("div",null,l.a.createElement(H,{id:a.state.first.id,label:a.state.first.label,placeholder:a.state.first.placeHolder,value:a.state.first.value,onChange:function(e){return a.setState({first:Object(k.a)({},a.state.first,{value:e.target.value})})}}),l.a.createElement(H,{id:a.state.last.id,label:a.state.last.label,placeholder:a.state.last.placeHolder,value:a.state.last.value,onChange:function(e){return a.setState({last:Object(k.a)({},a.state.last,{value:e.target.value})})}}),l.a.createElement(H,{id:a.state.email.id,label:a.state.email.label,placeholder:a.state.email.placeHolder,value:a.state.email.value,onChange:function(e){return a.setState({email:Object(k.a)({},a.state.email,{value:e.target.value})})},error:a.state.errors.phone}),l.a.createElement(H,{id:a.state.phone.id,label:a.state.phone.label,placeholder:a.state.phone.placeHolder,value:a.state.phone.value,onChange:function(e){return a.setState({phone:Object(k.a)({},a.state.phone,{value:e.target.value})})},error:a.state.errors.phone}),l.a.createElement(F,{id:a.state.school.id,label:a.state.school.label,value:a.state.school.value,onChange:function(e){return a.setState({school:Object(k.a)({},a.state.school,{value:e.target.value})})}}),"other"===a.state.school.value?l.a.createElement(H,{id:a.state.school.id,label:a.state.school.label,placeholder:a.state.school.placeHolder,value:a.state.school.other,onChange:function(e){return a.setState({school:Object(k.a)({},a.state.school,{other:e.target.value})})}}):l.a.createElement("div",null),l.a.createElement(H,{id:a.state.major.id,label:a.state.major.label,placeholder:a.state.major.placeHolder,value:a.state.major.value,onChange:function(e){return a.setState({major:Object(k.a)({},a.state.major,{value:e.target.value})})}}),l.a.createElement(H,{id:a.state.dietaryRestrictions.id,label:a.state.dietaryRestrictions.label,placeholder:a.state.dietaryRestrictions.placeHolder,value:a.state.dietaryRestrictions.value,onChange:function(e){return a.setState({dietaryRestrictions:Object(k.a)({},a.state.dietaryRestrictions,{value:e.target.value})})}}),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:a.state.waiverSigned.id,className:"form-check-input",type:"checkbox",value:a.state.waiverSigned.value,onChange:function(e){return a.setState({waiverSigned:Object(k.a)({},a.state.waiverSigned,{value:e.target.checked})})}}),l.a.createElement("label",{className:"form-check-label",htmlFor:a.state.waiverSigned.id},a.state.waiverSigned.label," ",l.a.createElement("a",{href:"https://hackwit.us/liability-waiver/"},"HackWITus Liability Waiver"))),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:a.state.conductSigned.id,className:"form-check-input",type:"checkbox",value:a.state.conductSigned.value,onChange:function(e){return a.setState({conductSigned:Object(k.a)({},a.state.conductSigned,{value:e.target.checked})})}}),l.a.createElement("label",{className:"form-check-label",htmlFor:a.state.conductSigned.id},a.state.conductSigned.label," ",l.a.createElement("a",{href:"https://hackwit.us/code_of_conduct/"},"HackWITus Code of Conduct"))))}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"renderContent",value:function(){this.setState({first:Object(k.a)({},this.state.first,{value:this.props.auth.first}),last:Object(k.a)({},this.state.last,{value:this.props.auth.last}),email:Object(k.a)({},this.state.email,{value:this.props.auth.email}),school:Object(k.a)({},this.state.school,{value:"gmail"!==this.props.auth.school?this.props.auth.school:""})})}},{key:"validateEmail",value:function(){return this.state.email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?"":"Invalid Email"}},{key:"validatePhone",value:function(){return this.state.phone.value.match(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\/\s.]?[0-9]{4}$/)?"":"Invalid Phone Number"}},{key:"validateSchool",value:function(){var e=this.state.school.value;return"other"===e&&(e=this.state.school.other),e.length>0?"":"School is Required"}},{key:"validateMajor",value:function(){return this.state.major.value.length>0?"":"Major is required"}},{key:"validateFirst",value:function(){return this.state.first.value.length>0?"":"First Name is required"}},{key:"validateLast",value:function(){return this.state.last.value.length>0?"":"Last Name is required"}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center display-4"},"Registration Review"),l.a.createElement("form",{onSubmit:this.onSubmit},this.renderFields(),l.a.createElement("button",{type:"submit",className:"btn btn-lg ".concat(this.canSubmit()?"":"btn-success"," float-right"),disabled:this.canSubmit()},"Submit")))}}]),t}(r.Component));var _=Object(c.b)(function(e){return{auth:e.auth}})(A),L=a(20),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={users:{}},a.componentDidMount=function(){a.refreshUsers()},a.refreshUsers=Object(O.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:e.sent.forEach(function(e){a.state.users[e._id]||(a.state.users[e._id]=e,a.forceUpdate())});case 4:case"end":return e.stop()}},e,this)})),a.renderUsers=function(){return Object.keys(a.state.users).map(function(e){var t=a.state.users[e];return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.first),l.a.createElement("td",null,t.last),l.a.createElement("td",null,t.school),l.a.createElement("td",null,t.major),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,t.dietaryRestrictions),l.a.createElement("td",null,!1===a.state.users[e].swagRedeemed?l.a.createElement("button",{id:a._id,className:"btn btn-sm btn-primary",onClick:a.setSwag.bind(Object(L.a)(Object(L.a)(a)),t)},"Redeem"):l.a.createElement("span",null,"Swag Redeemed")))})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"setSwag",value:function(){var e=Object(O.a)(S.a.mark(function e(t){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t._id,n={swagRedeemed:!0},this.state.users[a].swagRedeemed=!0,this.forceUpdate(),e.next=6,U(a,n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderUserCount",value:function(){return l.a.createElement("button",{className:"btn btn-outline-secondary my-2 my-sm-0"},l.a.createElement("strong",null,Object.keys(this.state.users).length)," Users Signed-In")}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"Rocket.Build Hackers"),this.renderUserCount(),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("button",{onClick:this.refreshUsers,className:"btn btn-outline-secondary my-2 my-sm-0"},l.a.createElement("i",{className:"fas fa-sync",style:{marginRight:"0.5em"}}),"Refresh"))),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"First"),l.a.createElement("th",{scope:"col"},"Last"),l.a.createElement("th",{scope:"col"},"School"),l.a.createElement("th",{scope:"col"},"Major"),l.a.createElement("th",{scope:"col"},"Phone"),l.a.createElement("th",{scope:"col"},"Dietary"),l.a.createElement("th",{scope:"col"},"Swag"))),l.a.createElement("tbody",null,this.renderUsers())))}}]),t}(r.Component),I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-1 text-center"},"Unauthorized"))}}]),t}(r.Component),W=(a(75),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).isAuthorized=function(){switch(a.props.auth){case null:break;case!1:return I;default:return a.props.auth.organizer?M:I}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement("main",null,l.a.createElement(b.a,{exact:!0,path:"/",component:y}),l.a.createElement(b.a,{path:"/follow-up",component:_}),l.a.createElement(b.a,{path:"/post-sign-in",component:j}),l.a.createElement(b.a,{path:"/organizer",component:this.isAuthorized()}))))}}]),t}(r.Component));var P=Object(c.b)(function(e){return{auth:e.auth}},n)(W),B=(a(78),a(83)),T=Object(i.c)({form:B.a,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=Object(i.d)(T,{},Object(i.a)(u.a));o.a.render(l.a.createElement(c.a,{store:D},l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.b9b17ac9.chunk.js.map