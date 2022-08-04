"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[969],{853:function(e,n,t){t.d(n,{DR:function(){return v},FZ:function(){return f},Zd:function(){return h},aA:function(){return x},gm:function(){return N},kt:function(){return j},zv:function(){return p}});var r,a=t(4165),s=t(5861),o=t(4569),c=t.n(o),i=t(8926),l=t(3893),u=t(4419),d=t(3912),m=t.n(d);c().defaults.baseURL="http://70.37.67.50/",c().defaults.headers.common["Access-Control-Allow-Origin"]="*",c().defaults.headers.common["Content-Type"]="application/json",c().defaults.headers.common.Authorization=localStorage.AUTH_TOKEN,c().interceptors.response.use((function(e){return e}),(function(e){var n,t;401===(null===(n=e.response)||void 0===n?void 0:n.status)?(i.Am.isActive(e.response.data.message)||i.Am.error(e.response.data.message,{toastId:e.response.data.message}),localStorage.AUTH_TOKEN&&(0,u.tb)()(l.Z.dispatch)):400===(null===(t=e.response)||void 0===t?void 0:t.status)&&(i.Am.isActive(e.response.data.message)||i.Am.error(e.response.data.message,{toastId:e.response.data.message}))}));var h=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r&&r.cancel("Operation canceled due to new request."),r=c().CancelToken.source(),e.next=4,c().get("api/users/search/"+n,{cancelToken:r.token}).then((function(e){return null===e||void 0===e?void 0:e.data})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=localStorage.fingerPrint?localStorage.fingerPrint:m().name+" "+m().os,f=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("api/users/current/info/"+g).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("api/users/current/edit/image",{image:n},{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return 200===e.status&&i.Am.success("New profile picture uploaded!")})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("api/users/current/edit/background/"+g,{image:n},{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return 200===e.status&&i.Am.success("New background uploaded!")})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().put("api/users/current/edit",{name:n,email:t,password:r}).then((function(e){return 204===e.status&&i.Am.success("Profile changes uploaded!")})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("/api/authorization/signIn",{userName:n,password:t}).then((function(e){localStorage.AUTH_TOKEN="Bearer "+e.data.jwtToken,localStorage.AUTH_TOKEN&&(c().defaults.headers.common.Authorization="Bearer "+e.data.jwtToken)})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),N=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t,r,s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("/api/authorization/signUp",{name:n,userName:t,email:r,password:s}).then((function(e){localStorage.AUTH_TOKEN="Bearer "+e.data.jwtToken,localStorage.AUTH_TOKEN&&(c().defaults.headers.common.Authorization="Bearer "+e.data.jwtToken)})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},6790:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(4165),a=t(5861),s=t(2791),o=t(4942),c=t(1413),i=t(885),l=t.p+"static/media/Default-Profile-Icon.5ab2e9ede4164e7ede76.png",u=t(6871),d=t(1763),m=t(7394),h=t(1747),g=t(1686),f=t(3395),p=t(9434),v=t(3973),x=t(184),j=function(e){var n=e.handleSubmit,t=e.handleScroll,r=e.messagesList,a=e.UserInfo,o=e.ScrollRef,c=e.setInput,i=e.input,u=e.Chat,j=e.scrollValues,N=e.changeScrollValues,C=e.CurrentChatMessages,I=(0,p.I0)(),k=(0,p.v9)(v.uZ),b=(0,s.useRef)(!1);return(0,s.useEffect)((function(){return C&&u&&(0!==C.length&&!b.current&&o.current?(b.current=!0,o.current.scrollTop=o.current.scrollHeight):0!==C.length&&!j.scrollButton&&o.current&&(o.current.scrollTop=o.current.scrollHeight)),function(){b.current=!1}}),[u,C]),(0,s.useEffect)((function(){return function(){I((0,d.Bj)(!1))}}),[]),(0,x.jsxs)("div",{className:"Messages-Content",children:[(0,x.jsx)("div",{className:"Messages-Header",children:(0,x.jsxs)("div",{className:"Messages-Header-Content",children:[(0,x.jsx)("div",{className:"Back-Button",onClick:function(){return I((0,d.Bj)(!k))},children:(0,x.jsx)(m.Z,{})}),(0,x.jsxs)("div",{className:"profile-info",children:[(0,x.jsx)("img",{src:u.otherProfileImage?u.otherProfileImage.url:l,alt:l,loading:"lazy"}),(0,x.jsx)("p",{children:u.otherName})]})]})}),(0,x.jsx)("div",{className:"Messages-Content-Scroll",onScroll:t,ref:o,style:(null===a||void 0===a?void 0:a.backgroundImage)&&{background:"url(".concat(a.backgroundImage.url,") no-repeat center center / cover")},children:(0,x.jsx)("ul",{className:"Messages-List",children:r})}),(0,x.jsxs)("div",{className:"Messages-Tools",children:[(0,x.jsx)(h.Z,{className:"Messages-Tools-Textarea",value:i,autoComplete:"off",maxRows:3,placeholder:"Type here...",onKeyDown:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),n())},onChange:function(e){return c(e.target.value)},onClick:function(){return console.log(o.current.clientHeight)}}),(0,x.jsx)("button",{className:"Messages-Tools-Button",onClick:n,children:(0,x.jsx)(g.Z,{})}),(0,x.jsx)("div",{className:"Messages-Tools-Downward-Button",style:j.scrollButton?{display:"flex"}:{display:"none"},onClick:function(){o.current.scrollTop=o.current.scrollHeight,N("scrollButton")(!1)},children:(0,x.jsx)(f.Z,{})})]})]})},N=s.memo(j),C=t(3590),I=function(e){var n=e.Chat,t=e.ChatsConnection,r=e.CurrentChatMessages,a=e.UserInfo,d=(0,p.I0)(),m=(0,s.useState)(""),h=(0,i.Z)(m,2),g=h[0],f=h[1],v=(0,s.useState)({scrollTop:!1,scrollButton:!1,scrollBottom:!1}),j=(0,i.Z)(v,2),I=j[0],k=j[1],b=(0,s.useRef)(null),w=(0,s.useCallback)((function(e){return function(n){k((0,c.Z)((0,c.Z)({},I),{},(0,o.Z)({},e,n)))}}),[I]),T=(0,s.useCallback)((function(){t&&g.trim()&&(w("scrollButton")(!1),b.current.scrollTop=b.current.scrollHeight,t.invoke("SendMessage",{text:g,RecipientUserName:n.otherUserName})),f("")}),[n,t,w,g]),Z=(0,s.useCallback)((function(e){I.scrollTop!==(0===e.currentTarget.scrollTop)&&w("scrollTop")(0===e.currentTarget.scrollTop),I.scrollButton!==e.currentTarget.scrollHeight-e.currentTarget.scrollTop>=2*e.currentTarget.clientHeight&&w("scrollButton")(e.currentTarget.scrollHeight-e.currentTarget.scrollTop>=2*e.currentTarget.clientHeight),I.scrollBottom!==(e.currentTarget.scrollHeight-e.currentTarget.scrollTop===e.currentTarget.clientHeight)&&w("scrollBottom")(e.currentTarget.scrollHeight-e.currentTarget.scrollTop===e.currentTarget.clientHeight)}),[w,I.scrollBottom,I.scrollButton,I.scrollTop]);(0,s.useEffect)((function(){return localStorage.AUTH_TOKEN&&n&&t.invoke("LoadMessages",n.otherUserName),function(){d((0,C.aT)([]))}}),[n]);var y=(0,s.useMemo)((function(){return r?0!==r.length&&r.map((function(e){var t;return e.senderUserName===a.userName?(0,x.jsx)("li",{className:"Messages-Item",style:{alignSelf:"flex-end"},children:(0,x.jsxs)("div",{className:"Messages-Item-Content",children:[(0,x.jsx)("img",{className:"Messages-Item-Image",src:a.profileImage?a.profileImage.url:l,alt:l}),(0,x.jsxs)("div",{className:"Messages-Item-Content-Wrapper",style:{backgroundColor:"#12569a",color:"white"},children:[(0,x.jsx)("span",{className:"Messages-Item-Text",children:e.text}),(0,x.jsx)("span",{className:"Messages-Item-Date",style:{color:"#a9a9a9"},children:new Date(e.sent).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})})]})]})},e.text+e.sent):(0,x.jsx)("li",{className:"Messages-Item",style:{alignSelf:"flex-start"},children:(0,x.jsxs)("div",{className:"Messages-Item-Content",children:[(0,x.jsx)("img",{className:"Messages-Item-Image",src:null!==n&&void 0!==n&&n.otherProfileImage?null===(t=n.otherProfileImage)||void 0===t?void 0:t.url:l,alt:l}),(0,x.jsxs)("div",{className:"Messages-Item-Content-Wrapper",children:[(0,x.jsx)("span",{className:"Messages-Item-Text",children:e.text}),(0,x.jsx)("span",{className:"Messages-Item-Date",children:new Date(e.sent).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})})]})]})},e.text+e.sent)})):null}),[n,r,a]);return(0,x.jsx)("div",{className:"Messages",style:(null===a||void 0===a?void 0:a.backgroundImage)&&{background:"url(".concat(a.backgroundImage.url,") no-repeat center center / cover")},children:(0,x.jsx)(u.Z5,{children:(0,x.jsx)(u.AW,{path:"/chat",element:n?(0,x.jsx)(N,{scrollValues:I,changeScrollValues:w,Chat:n,input:g,setInput:f,ScrollRef:b,UserInfo:a,messagesList:y,handleScroll:Z,handleSubmit:T,CurrentChatMessages:r}):(0,x.jsx)(u.Fg,{to:"/"})})})})},k=s.memo(I),b=t(3504),w=function(e){var n=e.ChatsList,t=e.UserInfo,r=(0,p.I0)(),a=(0,p.v9)(v.uZ),o=(0,s.useCallback)((function(e){r((0,d.Bj)(!a)),r((0,C.wv)(e))}),[a,r]),c=(0,s.useMemo)((function(){return n?0!==n.length&&n.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsxs)(b.rU,{to:"/chat",className:"Chat-Item",onClick:function(){return o({userName:t.userName,otherName:e.otherName,otherProfileImage:e.otherProfileImage,otherUserName:e.otherUserName})},children:[(0,x.jsx)("img",{src:e.otherProfileImage?e.otherProfileImage.url:l,alt:l,loading:"lazy"}),(0,x.jsxs)("div",{className:"Chat-Info",children:[(0,x.jsxs)("div",{className:"Chat-UserName",children:[(0,x.jsx)("p",{children:e.otherName}),(0,x.jsx)("p",{className:"Chat-Date",children:new Date(e.messageStamp).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})})]}),(0,x.jsx)("div",{className:"Chat-LastMessage",children:(0,x.jsx)("p",{children:e.lastMessage?e.lastMessage.length>20?e.lastMessage.substring(0,20)+"...":e.lastMessage:null})})]})]})},e.otherName)})):null}),[n,t,o]);return(0,x.jsx)("div",{children:c?(0,x.jsx)("ul",{children:c}):(0,x.jsx)("p",{style:{margin:10},children:"It's too empty..."})})},T=s.memo(w),Z=t(3239),y=function(e){var n=e.isLoading,t=e.usersList,r=e.UserInfo,a=(0,p.I0)(),o=(0,p.v9)(v.uZ),c=(0,s.useCallback)((function(e){a((0,d.Bj)(!o)),a((0,C.wv)(e))}),[o,a]),i=(0,s.useMemo)((function(){return t?0===t.length?(0,x.jsx)("li",{style:{margin:"10px"},children:"User is not found"}):t.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsxs)(b.rU,{to:"/chat",className:"User",onClick:function(){return c({userName:r.userName,otherName:e.name,otherProfileImage:e.profileImage,otherUserName:e.userName})},children:[(0,x.jsx)("img",{src:e.profileImage?e.profileImage.url:l,alt:l,loading:"lazy"}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsx)("div",{className:"Name",children:(0,x.jsx)("p",{children:e.name})}),(0,x.jsx)("div",{className:"UserName",children:(0,x.jsxs)("p",{children:["@",e.userName]})})]})]})},e.userName)})):null}),[r,c,t]);return(0,x.jsx)("div",{className:"Users",children:n?(0,x.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,x.jsx)(Z.Z,{})}):(0,x.jsx)("ul",{children:i})})},U=s.memo(y),S=function(e){var n=e.fetchSearch,t=e.SearchInput,r=e.setSearchInput,a=e.isActive,o=e.setActive;return(0,s.useEffect)((function(){t&&n({input:t})}),[t,n]),(0,x.jsxs)("div",{className:"SettingsBar",children:[(0,x.jsxs)("div",{className:a?"Burger-Settings open":"Burger-Settings",onClick:function(){return o(!a)},children:[(0,x.jsx)("span",{}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{}),(0,x.jsx)("span",{})]}),(0,x.jsx)("input",{className:"Search-Block",placeholder:"Search",onChange:function(e){r(e.target.value.trim()),o(!1)}})]})},M=s.memo(S),B=t(853),A=(t(6646),t(6151)),L=t(8096),P=t(9598),H=t(1440),E=t(2797),D=t(5705),R=t(4419),O=t(1933),F=t(498),_=t(1507),K=t(3616),z=t(8320),q=function(e){var n,t,r,a,u=e.refetchUserInfo,d=e.UserInfo,m=(0,p.I0)(),h=(0,s.useContext)(F.N),g=h.theme,f=h.changeTheme,v=(0,s.useState)({image:null,backgroundImage:null,changes:!1,backgroundImageIsDark:!1}),j=(0,i.Z)(v,2),N=j[0],C=j[1],I=(0,s.useCallback)((function(e){return function(n){C((0,c.Z)((0,c.Z)({},N),{},(0,o.Z)({},e,n)))}}),[N]),k=(0,s.useCallback)((function(e){(new z.Z).getColorAsync(e,{algorithm:"dominant"}).then((function(e){return I("backgroundImageIsDark")(e.isDark),console.log(e.isDark),e.isDark}))}),[]),b=(0,O.useMutation)((function(e){var n=e.image;return(0,B.zv)(n)}),{onSuccess:function(){u(),I("image")(null)}}),w=b.mutate,T=b.isLoading,y=(0,O.useMutation)((function(e){var n=e.name,t=e.email,r=e.password;return(0,B.aA)(n,t,r)}),{onSuccess:function(){u(),I("changes")(!1)}}),U=y.mutate,S=y.isLoading,M=(0,O.useMutation)((function(e){var n=e.backgroundImage;return(0,B.DR)(n)}),{onSuccess:function(){u(),I("backgroundImage")(null)}}),q=M.mutate,G=M.isLoading,V=E.Ry().shape({name:E.Z_("Invalid name format").required("Name is Required").max(20,"The length of the name should not exceed 20 characters!"),email:E.Z_("Invalid email format").email("Invalid email format").required("Email is Required"),password:E.Z_().min(8,"Invalid password length")}),W=(0,D.TA)({initialValues:{name:d?d.name:"",email:d?d.email:"",password:""},validationSchema:V,onSubmit:function(e){U({name:e.name,email:e.email,password:e.password})}});return(0,s.useEffect)((function(){var e;null!==d&&void 0!==d&&null!==(e=d.backgroundImage)&&void 0!==e&&e.url&&k(d.backgroundImage.url)}),[null===d||void 0===d||null===(n=d.backgroundImage)||void 0===n?void 0:n.url,k]),(0,x.jsxs)("div",{className:"SettingsPage",children:[d?(0,x.jsxs)("div",{className:"UserInfo",style:d.backgroundImage&&{background:"url(".concat(d.backgroundImage.url,") no-repeat center center / cover")},children:[(0,x.jsx)("img",{src:null!==d&&void 0!==d&&null!==(t=d.profileImage)&&void 0!==t&&t.url?d.profileImage.url:l,alt:l}),(0,x.jsxs)("div",{className:"UserInfo-Text",children:[(0,x.jsx)("div",{className:"Name",style:null!==d&&void 0!==d&&null!==(r=d.backgroundImage)&&void 0!==r&&r.url?N.backgroundImageIsDark?{color:"white"}:{color:"#000000"}:null,children:d.name}),(0,x.jsx)("div",{className:"UserName",style:null!==d&&void 0!==d&&null!==(a=d.backgroundImage)&&void 0!==a&&a.url?N.backgroundImageIsDark?{color:"darkgray"}:{color:"gray"}:null,children:"@"+d.userName})]})]}):(0,x.jsx)("div",{className:"UserInfo-Preloader",children:(0,x.jsx)(Z.Z,{})}),d?(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"Change-Buttons",children:[N.image?(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"Preview-Changes",children:[(0,x.jsx)("p",{children:"Profile changes preview:"}),(0,x.jsxs)("div",{className:"Preview-Changes-UserInfo",children:[(0,x.jsx)("img",{src:URL.createObjectURL(N.image),style:{objectPosition:"center center",objectFit:"cover",height:50,width:50,margin:"0 10px 0 0",borderRadius:"50%"},alt:l}),(0,x.jsxs)("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr"},children:[(0,x.jsx)("div",{children:d.name}),(0,x.jsx)("div",{style:{color:"darkgrey"},children:"@"+d.userName})]})]})]}),(0,x.jsxs)("div",{className:"Uploading-Tools",children:[(0,x.jsx)("div",{className:"item",children:(0,x.jsx)(A.Z,{variant:"contained",disabled:T,onClick:function(){w({image:N.image})},children:"Upload picture"})}),(0,x.jsx)("div",{className:"item",children:(0,x.jsx)(A.Z,{className:"Cancel-Button",variant:"contained",onClick:function(){return I("image")(null)},children:"Cancel"})})]})]}):(0,x.jsx)("div",{className:"item",children:(0,x.jsxs)(A.Z,{variant:"contained",component:"label",children:["Choose a new picture",(0,x.jsx)("input",{id:"inputImage",style:{display:"none"},type:"file",accept:"image/png, image/gif, image/jpeg",onChange:function(e){return I("image")(e.target.files[0])}})]})}),N.changes?(0,x.jsxs)("form",{className:"Profile-Changes-Preview",onSubmit:W.handleSubmit,children:[(0,x.jsx)("p",{className:"Profile-Changes-Preview-Header",children:"Changes preview"}),(0,x.jsx)(L.Z,{className:"item",sx:{width:250},children:(0,x.jsx)(P.Z,{className:"Custom-TextField",variant:"outlined",id:"name",name:"name",label:"Name",value:W.values.name,onChange:W.handleChange,error:W.touched.name&&Boolean(W.errors.name),helperText:W.touched.name&&W.errors.name})}),(0,x.jsx)(L.Z,{className:"item",sx:{width:250},children:(0,x.jsx)(P.Z,{className:"Custom-TextField",variant:"outlined",id:"email",name:"email",label:"Email",value:W.values.email,onChange:W.handleChange,error:W.touched.email&&Boolean(W.errors.email),helperText:W.touched.email&&W.errors.email})}),(0,x.jsx)(L.Z,{className:"item",sx:{width:250},children:(0,x.jsx)(P.Z,{className:"Custom-TextField",variant:"outlined",id:"password",label:"Password",type:"password",value:W.values.password,onChange:W.handleChange,error:W.touched.password&&Boolean(W.errors.password),helperText:W.touched.password&&W.errors.password})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(A.Z,{className:"item",variant:"contained",type:"submit",disabled:S,children:"Set changes"}),(0,x.jsx)(A.Z,{className:"Cancel-Button item",variant:"contained",onClick:function(){return I("changes")(!N.changes)},children:"Cancel"})]})]}):(0,x.jsx)("div",{className:"item",children:(0,x.jsx)(A.Z,{variant:"contained",onClick:function(){return I("changes")(!N.changes)},children:"Change profile info"})}),N.backgroundImage?(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"New-Background-Tools",children:[(0,x.jsx)("p",{children:"Background preview:"}),(0,x.jsx)("img",{className:"New-Background-Preview",src:URL.createObjectURL(N.backgroundImage),style:{objectPosition:"no-repeat center center",objectFit:"cover"},alt:"backgroundImage"}),(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[(0,x.jsx)("div",{className:"item",children:(0,x.jsx)(A.Z,{variant:"contained",disabled:G,onClick:function(){return q({backgroundImage:N.backgroundImage})},children:"Upload"})}),(0,x.jsx)("div",{className:"item",children:(0,x.jsx)(A.Z,{className:"Cancel-Button",variant:"contained",onClick:function(){return I("backgroundImage")(null)},children:"Cancel"})})]})]})}):(0,x.jsx)("div",{className:"item",children:(0,x.jsxs)(A.Z,{variant:"contained",component:"label",children:["Choose a new background",(0,x.jsx)("input",{id:"inputImage",style:{display:"none"},type:"file",accept:"image/png, image/gif, image/jpeg",onChange:function(e){return I("backgroundImage")(e.target.files[0])}})]})})]})}):null,(0,x.jsxs)("div",{className:"Theme-Switch",children:[(0,x.jsxs)("div",{className:"Theme-Switch-Icon",children:[" ","theme-dark"===g?(0,x.jsx)(_.Z,{}):(0,x.jsx)(K.Z,{})]}),(0,x.jsx)("div",{className:"Theme-Switch-Label",children:"Night mode"}),(0,x.jsx)(H.Z,{checked:"theme-dark"===g,onChange:function(){return f("theme-dark"===g?"theme-light":"theme-dark")}})]}),(0,x.jsx)("div",{children:(0,x.jsx)(A.Z,{className:"item",variant:"contained",onClick:function(){return m((0,R.tb)())},children:"Log Out"})})]})},G=s.memo(q),V=function(e){var n,t=e.UserInfo,r=e.AuthStatus,a=e.ChatsList,o=(0,s.useState)(!1),c=(0,i.Z)(o,2),l=c[0],u=c[1],d=(0,s.useState)(""),m=(0,i.Z)(d,2),h=m[0],g=m[1],f=(0,p.I0)(),v=(0,O.useMutation)((function(e){var n=e.input;return(0,B.Zd)(n)})),j=v.mutate,N=v.isLoading,C=v.data,I=(0,O.useQuery)("FetchCurrentUser",B.FZ,{enabled:!1}),k=I.data,b=I.refetch;return(0,s.useEffect)((function(){r&&(k!==t?f((0,R.yX)(k)):b())}),[r,t,f,k,b]),h&&!l||(n=(0,x.jsx)(T,{ChatsList:a,UserInfo:t})),h&&(n=(0,x.jsx)(U,{isLoading:N,usersList:C,UserInfo:t})),l&&(n=(0,x.jsx)(G,{refetchUserInfo:b,UserInfo:t})),(0,x.jsxs)("div",{className:"SideBar",children:[(0,x.jsx)(M,{fetchSearch:j,SearchInput:h,setSearchInput:g,isActive:l,setActive:u}),(0,x.jsx)("div",{className:"Scroll",children:n})]})},W=s.memo(V),X=t(2040),Q=t(1871),Y=function(e){return e.ChatsComponent.CurrentChat},J=function(e){return e.ChatsComponent.ChatsList},$=function(e){return e.ChatsComponent.CurrentChatMessages},ee=function(e){return e.SideBarComponent.UserInfo},ne=t(7831),te=t.n(ne),re=void 0,ae=function(){var e=(0,p.I0)(),n=(0,p.v9)(v.uZ),t=(0,p.v9)(v.TA),o=(0,p.v9)(J),c=(0,p.v9)(v.br),i=(0,p.v9)(Y),l=(0,p.v9)(ee),u=(0,p.v9)($);return(0,s.useLayoutEffect)((function(){var n;return(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.AUTH_TOKEN){t.next=8;break}return(n=(new X.s).withUrl("http://70.37.67.50/hubs/chat",{accessTokenFactory:function(){return localStorage.AUTH_TOKEN.split(" ")[1]}}).configureLogging(Q.i.Information).withAutomaticReconnect([1e3,3e3,5e3,null]).build()).on("GetMessages",(function(n){e((0,C.aT)(n)),console.log("GetMessages"),console.log(n)})),n.on("GetMessage",(function(n){e((0,C.AW)(n)),console.log("GetMessage"),console.log(n)})),n.on("GetChats",(function(n){e((0,C.cY)(n)),console.log("GetChats"),console.log(n)})),t.next=7,n.start();case 7:e((0,d.y2)(n));case 8:case"end":return t.stop()}}),t)})))(),function(){(0,a.Z)((0,r.Z)().mark((function t(){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(a=n)||void 0===a?void 0:a.stop();case 2:e((0,C.wv)(null));case 3:case"end":return t.stop()}}),t)})))()}}),[]),(0,s.useEffect)((function(){var n=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===l||void 0===l||!l.userName){e.next=11;break}if(!1!==document.hasFocus()){e.next=7;break}if((null===l||void 0===l?void 0:l.userName)===(null===n||void 0===n?void 0:n.senderUserName)){e.next=5;break}return e.next=5,te().create(n.otherUserName,{tag:n.lastMessage+n.otherUserName,body:n.lastMessage,icon:null===(t=n.otherProfileImage)||void 0===t?void 0:t.url,onClick:function(){window.focus(),re.close()}});case 5:e.next=11;break;case 7:if(!document.hasFocus()||!i||(null===i||void 0===i?void 0:i.otherUserName)===n.senderUserName){e.next=11;break}if((null===l||void 0===l?void 0:l.userName)===n.senderUserName){e.next=11;break}return e.next=11,te().create(n.otherUserName,{tag:n.lastMessage+n.otherUserName,body:n.lastMessage,icon:null===(a=n.otherProfileImage)||void 0===a?void 0:a.url,onClick:function(){window.focus(),re.close()}});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===c||void 0===c||c.on("UpdateChat",(function(t){e((0,C.Xb)(t)),e((0,C.q0)(t)),n(t),console.log("UpdateChat"),console.log(t)}));case 1:case"end":return t.stop()}}),t)})))()}),[i,c,l,e]),(0,x.jsxs)("div",{className:n?"Main active":"Main",children:[(0,x.jsx)(W,{UserInfo:l,ChatsList:o,AuthStatus:t}),(0,x.jsx)(k,{ChatsConnection:c,Chat:i,UserInfo:l,CurrentChatMessages:u})]})}},6646:function(){}}]);
//# sourceMappingURL=969.ff33075e.chunk.js.map