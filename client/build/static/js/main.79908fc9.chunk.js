(this.webpackJsonpaiiwoe=this.webpackJsonpaiiwoe||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/affogato.398ec518.png"},114:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/black.ec640ce9.png"},115:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cafe.ddb7ac5b.png"},116:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cap.b5e88f08.png"},117:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/decaf.7521de77.png"},118:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/espresso.1c8c2501.png"},119:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/latte.d99c1f52.png"},120:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mocha.c1adc1f0.png"},121:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rist.14fb25c5.png"},164:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),s=n(9),r=n.n(s),o=n(14),l=n(197),u=n(203),d=n(201),j=n(194),b=n(17),p=n(99),f=n(206),h=n(200),x=n(39),g=n(12),O=(n(112),n(196)),m=n(113),y=n(114),w=n(115),v=n(116),k=n(117),I=n(118),C=n(119),N=n(120),U=n(121),M={affogato:m,black:y,cafe:w,cap:v,decaf:k,espresso:I,latte:C,mocha:N,rist:U},S=[m,y,w,v,k,I,C,N,U].map((function(e){return e.name=e.default.match(/\/(\w+)\./)[1],e})),B=n(70),T=n.n(B),E=T()("localhost:5000"),D=n(2),R=Object(j.a)((function(e){return{chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"},containerHeader:{color:"white",padding:"5px 15px"},cupImage:{width:"40px"}}})),W=function(e){var t=Object(g.g)(),n=R(),c=Object(a.useState)(),i=Object(o.a)(c,2),s=i[0],r=i[1],l=Object(a.useState)(),d=Object(o.a)(l,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){var e=t.pathname.split("/")[2];E.emit("getUsers",e,(function(e){var t=e.reduce((function(e,t){return e[t.name]=t,e}),{});r(t)}))}),[j]),Object(a.useEffect)((function(){return E.on("selectUsers",(function(e,t,n){e.length>=2&&b(t);var c=e.reduce((function(e,t){return e[t.name]=t,e}),{});r(c)})),E.on("leaveSelect",(function(e){var t=e.reduce((function(e,t){return e[t.name]=t,e}),{});r(t)})),function(){E.off("selectUsers"),E.off("join"),E.off("leave")}}),[]),Object(D.jsx)(u.a,{maxWidth:"600px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:Object(D.jsxs)(u.a,{width:"100%",children:[Object(D.jsxs)(u.a,{bgcolor:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(D.jsx)(O.a,{variant:"caption",noWrap:!0,className:n.containerHeader,children:"Select an avatar"}),Object(D.jsxs)(O.a,{variant:"caption",noWrap:!0,className:n.containerHeader,children:["Users in Room : ",s?Object.keys(s).length:0]})]}),Object(D.jsx)(u.a,{padding:"15px 20px",alignItems:"center",bgcolor:"white",display:"flex",gridGap:"15px",overflow:"auto",children:S.map((function(t){return s&&s[t.name]?Object(D.jsx)("img",{style:{opacity:"60%",pointer:"none"},className:n.cupImage,src:t.default,alt:""},t.name):Object(D.jsx)("img",{onClick:function(){return e.selectUser(t)},className:n.cupImage,src:t.default,alt:""},t.name)}))})]})})},_=n(198),P=n(100),F=n(207),H=n(208),z=n(202),G=n(204),J=n(97),K=n.n(J),L=Object(j.a)((function(e){return{chatBox:{background:"rgba(255, 255, 255, 0.5)",height:"100%"},cup:{width:"40px",height:"40px",objectFit:"contain"},mainInput:{display:"flex",backgroundColor:"rgba(255, 255, 255, 0.5)","& .MuiInputBase-root":{}},sendButton:{"&.MuiButton-contained.Mui-disabled":{background:"rgba(255, 255, 255, 0.2)"}}}})),q=!0,A=function(e){var t=Object(b.a)(),n=Object(l.a)(t.breakpoints.up("sm")),i=Object(a.useState)(""),s=Object(o.a)(i,2),r=s[0],d=s[1],j=Object(a.useState)([]),p=Object(o.a)(j,2),f=p[0],h=p[1],x=L(),g=function(){E.emit("sendMsg",{text:r,room:e.room,socketid:E.id,currentUser:e.currentUser}),d("")};return Object(a.useEffect)((function(){E.on("sendMsg",(function(e){h((function(t){return[].concat(Object(P.a)(t),[e])}))}))}),[]),Object(D.jsxs)(u.a,{height:"100%",display:"flex",flexDirection:"column",width:"500px",alignItems:n?"space-between":"center",children:[Object(D.jsx)(u.a,{className:x.chatBox,width:"100%",position:"relative",height:"100%",children:Object(D.jsx)(u.a,{height:"100%",overflow:"auto",className:x.messageContainer,children:f.map((function(e,t){return Object(D.jsxs)(u.a,{gridGap:"5px",alignItems:"center",display:"flex",flexDirection:e.socketid===E.id?"row":"row-reverse",justifyContent:"start",className:e.socketid===E.id?x.messageOut:x.messageIn,padding:"5px 15px",children:[Object(D.jsx)("img",{className:x.cup,src:M[e.currentUser.name].default,alt:""}),Object(D.jsxs)(u.a,{position:"relative",padding:"5px 15px",bgcolor:e.socketid===E.id?"white":"#c06c48",children:[Object(D.jsx)("li",{children:e.text}),Object(D.jsx)("div",{className:K.a[e.socketid===E.id?"arrow-right":"arrow-left"]})]})]},t)}))})}),Object(D.jsxs)(u.a,{display:"flex",justifyContent:"space-between",width:"100%",children:[Object(D.jsxs)(F.a,{variant:"filled",fullWidth:!0,children:[Object(D.jsx)(H.a,{style:{paddingLeft:"20px"},htmlFor:"outlined-adornment-amount",children:"Type Here..."}),Object(D.jsx)(z.a,{onKeyUp:function(e){"Enter"===e.code&&g()},className:x.mainInput,value:r,variant:"filled",onChange:function(t){q&&E.emit("typing",e.room,E.id),q=!1,clearTimeout(c),c=setTimeout((function(){q=!0,E.emit("finished typing",e.room)}),1e3),d(t.target.value)},id:"outlined-adornment-amount"})]}),Object(D.jsx)(G.a,{className:x.sendButton,disabled:0===r.length,onClick:g,variant:"contained",children:"Send"})]})]})},Q=n(28),V=n(98),X=n.n(V),Y=Object(j.a)((function(e){return{chatTable:{width:"400px",background:"rgba(80, 41, 0, 0.7)",borderRadius:"50%",position:"relative","&::before":{content:"''",display:"block",paddingBottom:"100%"}},typingBubble:Object(Q.a)({},e.typingBubble)}})),Z=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(b.a)(),r=Object(l.a)(s.breakpoints.up("sm")),d=[Math.PI/2,Math.PI/4,2*Math.PI,Math.PI/4*7,3*Math.PI/2,Math.PI/4*5,Math.PI/4*3,Math.PI],j=Object(a.useRef)(),p=Y(),f=Object(a.useRef)([]);function h(){i((function(){var t=j.current?parseInt(window.getComputedStyle(j.current).height.slice(0,-2)):0;f.current=[];for(var n=j.current.offsetWidth/2+40,c=f.current,a=0;a<e.users.length;a++){var i={style:{}};i.src=M[e.users[a].name].default,i.name=e.users[a].name,i.id=e.users[a].id,c.push(i),c[a].posx=Math.round(n*Math.cos(d[a]))+"px",c[a].posy=Math.round(n*Math.sin(d[a]))+"px",c[a].style.position="absolute",c[a].style.top=t/2-parseInt(c[a].posy.slice(0,-2))-20+"px",c[a].style.left=t/2+parseInt(c[a].posx.slice(0,-2))-20+"px"}return c}))}return Object(a.useEffect)((function(){h(),window.onresize=function(){h()}}),[e.users]),Object(D.jsx)(u.a,{paddingRight:"60px",children:Object(D.jsx)(u.a,{display:r?"flex":"none",justifyContent:"center",alignItems:"center",children:Object(D.jsx)(u.a,{ref:j,display:"flex",justifyContent:"center",className:p.chatTable,children:c.map((function(t){return Object(D.jsxs)(u.a,{style:Object(Q.a)({},t.style),children:[Object(D.jsxs)(u.a,{display:e.typingUsers[t.id]?"flex":"none",className:p.typingBubble,children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{}),Object(D.jsx)("div",{})]}),Object(D.jsx)("img",{className:"".concat(X.a.circle),src:t.src,alt:""},t.name)]},t.id)}))})})})},$=n(62),ee=function(e,t){var n=Object(a.useState)(),c=Object(o.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)(),l=Object(o.a)(r,2),u=(l[0],l[1]),d=Object(a.useState)([]),j=Object(o.a)(d,2),b=j[0],p=j[1];return Object(a.useEffect)((function(){E.on("leave",(function(e,t,n){p(e)})),E.on("join",(function(e,t,n){p(e)})),E.emit("join",e.currentUser,t,(function(e,t){s((function(){return e})),u(t)}))}),[]),Object(a.useEffect)((function(){return function(){i&&E.emit("leave",i,t)}}),[i]),{users:b,room:i}},te=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){E.on("finished typing",(function(){i({})}))}),[]),Object(a.useEffect)((function(){E.on("typing",(function(e){i((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object($.a)({},e,!0))}))}))}),[]),{typing:c}},ne=Object(j.a)((function(e){return{cup:{flexShrink:"0.5"},chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"},typingBubble:Object(Q.a)({},e.typingBubble)}})),ce=function(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),c=(n[0],n[1],Object(b.a)()),s=Object(l.a)(c.breakpoints.up("sm"));Object(a.useEffect)((function(){}),[]);var r=ne();return Object(D.jsx)(u.a,{width:"100%",display:s?"none":"flex",gridGap:"15px",children:e.users.map((function(t){return Object(D.jsx)(i.a.Fragment,{children:Object(D.jsxs)(u.a,{width:"10%",display:"flex",position:"relative",flexDirection:"column",children:[Object(D.jsxs)(u.a,{display:e.typingUsers[t.id]&&t.id!==E.id?"flex":"none",className:r.typingBubble,children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{}),Object(D.jsx)("div",{})]}),Object(D.jsx)("img",{className:r.cup,src:M[t.name].default,alt:""})]})},t.data)}))})},ae=Object(j.a)((function(e){return{chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"}}})),ie=function(e){var t=ee(e,"group"),n=t.users,c=t.room,a=te().typing,i=Object(b.a)(),s=Object(l.a)(i.breakpoints.up("sm"));ae();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"30px 15px",children:Object(D.jsxs)(_.a,{style:{height:"100%"},spacing:1,container:!0,alignItems:"center",children:[Object(D.jsxs)(_.a,{xs:12,sm:6,item:!0,children:[Object(D.jsx)(Z,{typingUsers:a,clientId:e.clientId,users:n}),Object(D.jsx)(ce,{typingUsers:a,users:n})]}),Object(D.jsx)(_.a,{container:!0,alignItems:s?"center":"flex-start",justifyContent:"center",style:{height:s?"80%":"100%"},xs:12,sm:6,item:!0,children:Object(D.jsx)(A,{room:c,clientId:e.clientId,currentUser:e.currentUser})})]})})})},se=n(199),re=n.p+"static/media/logo.3b2d4623.png",oe=Object(j.a)((function(e){return{buttonMain:{"& > *":{width:"100%",margin:e.spacing(1),backgroundColor:"rgb(186 167 156)"}},backDrop:{backgroundColor:"rgba(0,0,0,0.4)"},contentContainer:{zIndex:"2"},buttonHeader:{textTransform:"uppercase"},link:{width:"100%",textDecoration:"none",display:"block"},description:{fontSize:"2em"},logo:{maxWidth:"70%",width:"400px",height:"auto"}}})),le=function(e){Object(a.useEffect)((function(){e.clearUser()}),[]);var t=oe();return Object(D.jsx)(se.a,{className:t.contentContainer,children:Object(D.jsxs)(u.a,{gridGap:"20px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"white",children:[Object(D.jsx)("img",{className:t.logo,src:re,alt:""}),Object(D.jsx)(O.a,{align:"center",className:t.description,children:"Experience the complicated side of love, together."}),Object(D.jsxs)(u.a,{className:t.buttonContainer,children:[Object(D.jsx)(O.a,{className:t.buttonHeader,align:"center",children:"Match me with a:"}),Object(D.jsxs)(u.a,{className:t.buttonMain,children:[Object(D.jsx)(x.b,{to:"/chat/group",className:t.link,children:Object(D.jsx)(G.a,{onClick:function(){e.setChatType("group")},fullWidth:!0,variant:"contained",children:"Group"})}),Object(D.jsx)(x.b,{to:"/chat/individual",className:t.link,children:Object(D.jsx)(G.a,{fullWidth:!0,variant:"contained",children:"Individual"})})]})]})]})})},ue=n(205),de=Object(j.a)((function(e){return{cup:{width:"60px"},typingBubble:Object(Q.a)({},e.typingBubble)}})),je=function(e){Object(a.useEffect)((function(){}),[]);var t=de();return Object(D.jsx)(u.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",height:"100%",width:"100%",children:Object(D.jsx)(u.a,{bgcolor:"rgba(255, 255, 255, 0.5)",children:e.users.map((function(n,c){return Object(D.jsxs)(u.a,{color:"white",padding:"5px 15px",display:"flex",gridGap:"15px",width:"100%",alignItems:"center",borderBottom:c!==e.users.length-1?"1px solid black":"",children:[Object(D.jsxs)(u.a,{position:"relative",children:[Object(D.jsxs)(u.a,{display:e.typingUsers[n.id]?"flex":"none",className:t.typingBubble,children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{}),Object(D.jsx)("div",{})]}),Object(D.jsx)("img",{className:t.cup,src:M[n.name].default,alt:""},n.name)]},n.id),Object(D.jsx)(O.a,{children:n.name})]},n.id)}))})})},be=Object(j.a)((function(e){return{}})),pe=function(e){var t=ee(e,"individual"),n=t.users,c=t.room,a=te().typing,i=Object(b.a)(),s=(be(),Object(l.a)(i.breakpoints.up("sm")));return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(_.a,{container:!0,width:"100%",height:"100%",display:"flex",spacing:2,justifyContent:"space-between",alignItems:"center",style:{padding:"30px 15px"},children:[Object(D.jsxs)(_.a,{justifyContent:"center",item:!0,style:{height:s?"80%":""},container:!0,xs:12,sm:4,alignItems:"flex-start",children:[Object(D.jsx)(ue.a,{xsDown:!0,children:Object(D.jsx)(u.a,{display:"flex",width:"100%",children:Object(D.jsx)(je,{typingUsers:a,users:n})})}),Object(D.jsx)(ce,{typingUsers:a,users:n})]}),Object(D.jsx)(_.a,{container:!0,alignItems:s?"center":"flex-start",justifyContent:"center",style:{height:s?"80%":"100%"},item:!0,xs:12,sm:8,children:Object(D.jsx)(A,{room:c,currentUser:e.currentUser})})]})})},fe=n.p+"static/media/logo.76c5cc2c.png",he=Object(j.a)((function(e){return{logo:{width:"100px",cursor:"pointer"}}})),xe=Object(g.h)((function(){var e=Object(g.f)(),t=he();return Object(D.jsx)(u.a,{position:"absolute",top:"0",width:"100%",zIndex:"3",bgcolor:"#512905",padding:"5px 15px",children:Object(D.jsx)("img",{onClick:function(){e.push("/")},className:t.logo,src:fe,alt:""})})})),ge=n.p+"static/media/background.23f7c3b9.png",Oe=Object(j.a)((function(e){return{container:{backgroundImage:"url(".concat(ge,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",height:"100vh"},buttonMain:{"& > *":{width:"100%",margin:e.spacing(1),backgroundColor:"rgb(186 167 156)"}},backDrop:{backgroundColor:"rgba(0,0,0,0.4)"}}})),me=function(){var e=Object(b.a)(),t=Object(l.a)(e.breakpoints.up("sm")),n=Object(a.useState)(),c=Object(o.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)(),j=Object(o.a)(r,2),O=j[0],m=j[1],y=function(e){s(e)},w=function(){s()},v=function(e){m(e)},k=Oe(),I=Object(p.a)({typography:{fontFamily:["Montserrat","sans-serif"].join(",")},typingBubble:{width:"25px",height:"10px",position:"absolute",right:"-4px",top:"-5px",background:"white",borderRadius:"14px",alignItems:"center",justifyContent:"center",gap:"2px","& > *":{background:"black",borderRadius:"50%",width:"4px",height:"4px"}}});return I=Object(f.a)(I),Object(a.useEffect)((function(){}),[]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(x.a,{children:Object(D.jsxs)(h.a,{theme:I,children:[Object(D.jsx)(xe,{}),Object(D.jsxs)(u.a,{paddingTop:"50.86px",display:"flex",alignItems:t?"center":"flex-start",justifyContent:"center",maxWidth:"100vw",overflow:"hidden",className:k.container,children:[Object(D.jsx)(u.a,{position:"fixed",width:"100vw",height:"100vh",className:k.backDrop}),Object(D.jsxs)(u.a,{justifyContent:"center",display:"flex",zIndex:"2",maxWidth:"1200px",width:"100%",height:"80%",children:[Object(D.jsx)(d.a,{}),Object(D.jsxs)(g.c,{children:[Object(D.jsx)(g.a,{exact:!0,path:"/",render:function(){return Object(D.jsx)(le,{clearUser:w,setChatType:v})}}),Object(D.jsx)(g.a,{path:"/chat/group",children:i?Object(D.jsx)(ie,{setChatType:m,currentUser:i}):Object(D.jsx)(u.a,{display:"flex",justifyContent:"center",padding:"20px",width:"100%",children:Object(D.jsx)(W,{chatType:O,selectUser:y})})}),Object(D.jsx)(g.a,{path:"/chat/individual",children:i?Object(D.jsx)(pe,{setChatType:m,currentUser:i}):Object(D.jsx)(u.a,{display:"flex",justifyContent:"center",padding:"20px",width:"100%",children:Object(D.jsx)(W,{chatType:O,selectUser:y})})})]})]})]})]})})})};r.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(me,{})}),document.getElementById("root"))},97:function(e,t,n){e.exports={"arrow-right":"ChatBox_arrow-right__2bSSk","arrow-left":"ChatBox_arrow-left__y7KiD"}},98:function(e,t,n){e.exports={circle:"ChatTable_circle__17_TH"}}},[[164,1,2]]]);
//# sourceMappingURL=main.79908fc9.chunk.js.map