(this.webpackJsonpaiiwoe=this.webpackJsonpaiiwoe||[]).push([[0],{109:function(e,t,n){e.exports={"arrow-right":"ChatBox_arrow-right__2bSSk","arrow-left":"ChatBox_arrow-left__y7KiD"}},110:function(e,t,n){e.exports={circle:"ChatTable_circle__17_TH"}},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/black.ec640ce9.png"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cafe.ddb7ac5b.png"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cap.b5e88f08.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/decaf.7521de77.png"},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/espresso.1c8c2501.png"},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/latte.d99c1f52.png"},170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mocha.c1adc1f0.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rist.14fb25c5.png"},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),r=n(9),s=n.n(r),o=n(13),l=n(221),u=n.p+"static/media/logo.3b2d4623.png",d=n(223),j=n(230),b=n(224),p=n(231),h=n(40),f=n(2),x=Object(l.a)((function(e){return{buttonMain:{"& > *":{width:"100%",margin:e.spacing(1),backgroundColor:"rgb(186 167 156)"}},backDrop:{backgroundColor:"rgba(0,0,0,0.4)"},contentContainer:{zIndex:"2"},buttonHeader:{textTransform:"uppercase"},link:{width:"100%",textDecoration:"none",display:"block"},description:{fontSize:"2em"},logo:{maxWidth:"70%",width:"400px",height:"auto"}}})),g=function(e){Object(a.useEffect)((function(){e.clearUser()}),[]);var t=x();return Object(f.jsx)(d.a,{className:t.contentContainer,children:Object(f.jsxs)(j.a,{gridGap:"20px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"white",children:[Object(f.jsx)("img",{className:t.logo,src:u,alt:""}),Object(f.jsx)(b.a,{align:"center",className:t.description,children:"Experience the complicated side of love, together."}),Object(f.jsxs)(j.a,{className:t.buttonContainer,children:[Object(f.jsx)(b.a,{className:t.buttonHeader,align:"center",children:"Match me with a:"}),Object(f.jsxs)(j.a,{className:t.buttonMain,children:[Object(f.jsx)(h.b,{to:"/chat/group",className:t.link,children:Object(f.jsx)(p.a,{onClick:function(){e.setChatType("group")},fullWidth:!0,variant:"contained",children:"Group"})}),Object(f.jsx)(h.b,{to:"/chat/individual",className:t.link,children:Object(f.jsx)(p.a,{fullWidth:!0,variant:"contained",children:"Individual"})})]})]})]})})},O=n(37),m=n(226),y=n(73),w=n.n(y),I=(w()("localhost:5000"),n(64)),v=n(225),k=n(234),C=n(235),N=n(229),M=n(18),S=n(108),T=Math.random().toString(),U=function(e,t){if(!c){var n=e,a=new S.Realtime({key:"8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv",clientId:T}).channels.get(n);return a.attach((function(e){if(e)return console.error("Error attaching to the channel")})),c=a,a}return c},E=n(95),B=n(164),D=n(165),R=n(166),W=n(167),_=n(168),P=n(169),H=n(170),F=n(171),z={affogato:E,black:B,cafe:D,cap:R,decaf:W,espresso:_,latte:P,mocha:H,rist:F},G=[E,B,D,R,W,_,P,H,F].map((function(e){return e.name=e.default.match(/\/(\w+)\./)[1],e})),A=n(109),J=n.n(A),Z=Object(l.a)((function(e){return{chatBox:{background:"rgba(255, 255, 255, 0.5)",height:"100%"},cup:{width:"40px",height:"40px",objectFit:"contain"},mainInput:{backgroundColor:"rgba(255, 255, 255, 0.5)"},sendButton:{"&.MuiButton-contained.Mui-disabled":{background:"rgba(255, 255, 255, 0.2)"}}}})),q=function(e){var t=Object(M.a)(),n=Object(v.a)(t.breakpoints.up("sm")),c=Object(a.useMemo)((function(){return U()})),i=Object(a.useState)(""),r=Object(o.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)([]),d=Object(o.a)(u,2),b=d[0],h=d[1],x=Z();return Object(a.useEffect)((function(){c.subscribe((function(e){h((function(t){var n=Object(O.a)(t);return n.push(e),n}))}))}),[]),Object(f.jsxs)(j.a,{height:"100%",display:"flex",flexDirection:"column",width:"500px",alignItems:n?"space-between":"center",children:[Object(f.jsx)(j.a,{className:x.chatBox,width:"100%",position:"relative",height:"100%",children:Object(f.jsx)(j.a,{height:"100%",overflow:"auto",className:x.messageContainer,children:b.map((function(e,t){return Object(f.jsxs)(j.a,{gridGap:"5px",alignItems:"center",display:"flex",flexDirection:e.clientId===T?"row":"row-reverse",justifyContent:"start",className:e.clientId===T?x.messageOut:x.messageIn,padding:"5px 15px",children:[Object(f.jsx)("img",{className:x.cup,src:z[e.data.name].default,alt:""}),Object(f.jsxs)(j.a,{position:"relative",padding:"5px 15px",bgcolor:e.clientId===T?"white":"#c06c48",children:[Object(f.jsx)("li",{children:e.data.text}),Object(f.jsx)("div",{className:J.a[e.clientId===T?"arrow-right":"arrow-left"]})]})]},t)}))})}),Object(f.jsxs)(j.a,{display:"flex",justifyContent:"space-between",width:"100%",children:[Object(f.jsxs)(k.a,{variant:"filled",fullWidth:!0,children:[Object(f.jsx)(C.a,{style:{paddingLeft:"20px"},htmlFor:"outlined-adornment-amount",children:"Type Here..."}),Object(f.jsx)(N.a,{className:x.mainInput,value:s,variant:"filled",onChange:function(e){l(e.target.value)},id:"outlined-adornment-amount"})]}),Object(f.jsx)(p.a,{className:x.sendButton,disabled:0===s.length,onClick:function(){c.publish("message sent",Object(I.a)({text:s},e.currentUser)),l("")},variant:"contained",children:"Send"})]})]})},K=n(110),L=n.n(K),V=Object(l.a)((function(e){return{chatTable:{width:"400px",background:"rgba(80, 41, 0, 0.7)",borderRadius:"50%",position:"relative","&::before":{content:"''",display:"block",paddingBottom:"100%"}}}})),Q=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(M.a)(),s=Object(v.a)(r.breakpoints.up("sm")),l=[Math.PI/2,Math.PI/4,2*Math.PI,Math.PI/4*7,3*Math.PI/2,Math.PI/4*5,Math.PI/4*3,Math.PI],u=Object(a.useRef)(),d=V(),b=(Object(a.useMemo)((function(){})),Object(a.useRef)([]));function p(){i((function(){var t=u.current?parseInt(window.getComputedStyle(u.current).height.slice(0,-2)):0;b.current=[];for(var n=u.current.offsetWidth/2+20,c=b.current,a=0;a<e.users.length;a++){var i={style:{}};i.src=z[e.users[a].data].default,i.name=e.users[a].data,c.push(i),c[a].posx=Math.round(n*Math.cos(l[a]))+"px",c[a].posy=Math.round(n*Math.sin(l[a]))+"px",c[a].style.position="absolute",c[a].style.top=t/2-parseInt(c[a].posy.slice(0,-2))-40+"px",c[a].style.left=t/2+parseInt(c[a].posx.slice(0,-2))-20+"px"}return c}))}return Object(a.useEffect)((function(){p(),window.onresize=function(){p()}}),[e.users]),Object(f.jsx)(j.a,{paddingRight:"40px",children:Object(f.jsx)(j.a,{display:s?"flex":"none",justifyContent:"center",alignItems:"center",children:Object(f.jsx)(j.a,{ref:u,display:"flex",justifyContent:"center",className:d.chatTable,children:c.map((function(e){return Object(f.jsx)("img",{className:"".concat(L.a.circle),src:e.src,style:Object(I.a)({},e.style),alt:""},e.name)}))})})})},X=(n(95),n(111)),Y=n.n(X),$=n(12),ee=Object(l.a)((function(e){return{chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"},containerHeader:{color:"white",padding:"5px 15px"},cupImage:{width:"40px"}}})),te=function(e){var t=Object($.g)(),n=ee(),c=Object(a.useState)(),i=Object(o.a)(c,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){var e,n=t.pathname.split("/")[2];return Y.a.post("/token",{token:e,type:n}).then((function(e){U(e.data.token).presence.subscribe((function(t){U(e.data.token).presence.get((function(e,t){var n=t.reduce((function(e,t){return e[t.data]=t,e}),{});s(n)}))}))})),function(){U().unsubscribe(),s(null)}}),[]),Object(f.jsx)(j.a,{maxWidth:"600px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:Object(f.jsxs)(j.a,{width:"100%",children:[Object(f.jsxs)(j.a,{bgcolor:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(b.a,{variant:"caption",noWrap:!0,className:n.containerHeader,children:"Select an avatar"}),Object(f.jsxs)(b.a,{variant:"caption",noWrap:!0,className:n.containerHeader,children:["Users in Room : ",r?Object.keys(r).length:0]})]}),Object(f.jsx)(j.a,{padding:"15px 20px",alignItems:"center",bgcolor:"white",display:"flex",gridGap:"15px",overflow:"auto",children:G.map((function(t){return r&&r[t.name]?Object(f.jsx)("img",{style:{opacity:"60%",pointer:"none"},className:n.cupImage,src:t.default,alt:""},t.name):Object(f.jsx)("img",{onClick:function(){return e.selectUser(t)},className:n.cupImage,src:t.default,alt:""},t.name)}))})]})})},ne=Object(l.a)((function(e){return{cup:{width:"10%",flexShrink:"0.5"},chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"}}})),ce=function(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),c=(n[0],n[1],Object(M.a)()),r=Object(v.a)(c.breakpoints.up("sm"));Object(a.useEffect)((function(){}),[]);var s=ne();return Object(f.jsx)(j.a,{width:"100%",display:r?"none":"flex",gridGap:"15px",children:e.users.map((function(e){return Object(f.jsxs)(i.a.Fragment,{children:[Object(f.jsx)("img",{className:s.cup,src:z[e.data].default,alt:""}),Object(f.jsx)("img",{className:s.cup,src:z[e.data].default,alt:""})]},e.data)}))})},ae=Object(l.a)((function(e){return{chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"}}})),ie=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(),s=Object(o.a)(r,2);s[0],s[1];Object(a.useEffect)((function(){U().presence.enter(e.currentUser.name)}),[e.currentUser.name]),Object(a.useEffect)((function(){e.setChatType("group");var t=U();return t.presence.subscribe((function(e){console.log(e),t.presence.get((function(e,t){var n=Object(O.a)(c);n.push.apply(n,Object(O.a)(t)),i(n)}))})),function(){t.detach()}}),[]);ae();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"30px 15px",children:Object(f.jsxs)(m.a,{style:{height:"100%"},spacing:2,container:!0,alignItems:"center",children:[Object(f.jsxs)(m.a,{xs:12,sm:6,item:!0,children:[Object(f.jsx)(Q,{clientId:e.clientId,users:c}),Object(f.jsx)(ce,{users:c})]}),Object(f.jsx)(m.a,{container:!0,alignItems:"center",justifyContent:"center",style:{height:"80%"},xs:12,sm:6,item:!0,children:Object(f.jsx)(q,{clientId:e.clientId,currentUser:e.currentUser})})]})})})},re=n(232),se=Object(l.a)((function(e){return{cup:{width:"60px"}}})),oe=function(e){Object(a.useEffect)((function(){}),[]);var t=se();return Object(f.jsx)(j.a,{height:"100%",width:"100%",children:Object(f.jsx)(j.a,{display:"flex",flexDirection:"column",alignItems:"flex-start",bgcolor:"rgba(255, 255, 255, 0.5)",children:e.users.map((function(n,c){return Object(f.jsxs)(j.a,{color:"white",padding:"5px 15px",display:"flex",gridGap:"15px",width:"100%",alignItems:"center",borderBottom:c!==e.users.length-1?"1px solid black":"",children:[Object(f.jsx)("img",{className:t.cup,src:z[n.data].default,alt:""}),Object(f.jsx)(b.a,{children:n.data})]},n.data)}))})})},le=Object(l.a)((function(e){return{chatTable:{borderRadius:"50%",width:"200px",height:"200px",background:"red"}}})),ue=function(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),i=Object(o.a)(c,2),r=i[0],s=i[1];le();return Object(a.useEffect)((function(){U().presence.enter(e.currentUser.name)}),[e.currentUser.name]),Object(a.useEffect)((function(){e.setChatType("individual");var t=U();return t.presence.subscribe((function(e){t.presence.get((function(e,t){var n=Object(O.a)(r);n.push.apply(n,Object(O.a)(t)),s(n)}))})),function(){t.detach()}}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(m.a,{container:!0,width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",spacing:3,style:{padding:"30px 15px"},children:[Object(f.jsxs)(m.a,{justifyContent:"center",item:!0,style:{height:"80%"},container:!0,xs:12,sm:4,alignItems:"flex-start",children:[Object(f.jsx)(re.a,{xsDown:!0,children:Object(f.jsx)(j.a,{height:"100%",display:"flex",width:"100%",children:Object(f.jsx)(oe,{users:r})})}),Object(f.jsx)(ce,{users:r})]}),Object(f.jsx)(m.a,{container:!0,alignItems:"center",justifyContent:"center",style:{height:"80%"},item:!0,xs:12,sm:8,children:Object(f.jsx)(q,{clientId:e.clientId,currentUser:e.currentUser})})]})})},de=(n(190),n(112)),je=n(233),be=n(227),pe=n(228),he=n.p+"static/media/background.23f7c3b9.png",fe=n.p+"static/media/logo.76c5cc2c.png",xe=Object(l.a)((function(e){return{logo:{width:"100px",cursor:"pointer"}}})),ge=Object($.h)((function(){var e=Object($.f)(),t=xe();return Object(f.jsx)(j.a,{position:"absolute",top:"0",width:"100%",zIndex:"3",bgcolor:"#512905",padding:"5px 15px",children:Object(f.jsx)("img",{onClick:function(){e.push("/")},className:t.logo,src:fe,alt:""})})})),Oe=Object(l.a)((function(e){return{container:{backgroundImage:"url(".concat(he,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",height:"100vh"},buttonMain:{"& > *":{width:"100%",margin:e.spacing(1),backgroundColor:"rgb(186 167 156)"}},backDrop:{backgroundColor:"rgba(0,0,0,0.4)"}}})),me=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(o.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)(),d=Object(o.a)(u,2),b=d[0],p=d[1],x=Object(a.useState)([]),O=Object(o.a)(x,2),m=O[0],y=(O[1],function(e){c(e)}),w=function(){c()},I=function(e){l(e)},v=function(e){p(e)},k=Oe(),C=Object(de.a)({typography:{fontFamily:["Montserrat","sans-serif"].join(",")}});return C=Object(je.a)(C),Object(a.useEffect)((function(){}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(be.a,{theme:C,children:[Object(f.jsx)(ge,{}),Object(f.jsxs)(j.a,{paddingTop:"50.86px",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100vw",overflow:"hidden",className:k.container,children:[Object(f.jsx)(j.a,{position:"fixed",width:"100vw",height:"100vh",className:k.backDrop}),Object(f.jsxs)(j.a,{justifyContent:"center",display:"flex",zIndex:"2",maxWidth:"1200px",width:"100%",height:"100%",children:[Object(f.jsx)(pe.a,{}),Object(f.jsxs)($.c,{children:[Object(f.jsx)($.a,{exact:!0,path:"/",render:function(){return Object(f.jsx)(g,{clearUser:w,setChatType:I})}}),Object(f.jsx)($.a,{path:"/chat/group",children:n?Object(f.jsx)(ie,{setChatType:l,clientId:b,currentUser:n}):Object(f.jsx)(j.a,{display:"flex",justifyContent:"center",padding:"20px",width:"100%",children:Object(f.jsx)(te,{getClientId:v,currChannel:m,chatType:s,selectUser:y})})}),Object(f.jsx)($.a,{path:"/chat/individual",children:n?Object(f.jsx)(ue,{setChatType:l,clientId:b,currentUser:n}):Object(f.jsx)(j.a,{display:"flex",justifyContent:"center",padding:"20px",width:"100%",children:Object(f.jsx)(te,{getClientId:v,currChannel:m,chatType:s,selectUser:y})})})]})]})]})]})})})};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(me,{})}),document.getElementById("root"))},95:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/affogato.398ec518.png"}},[[191,1,2]]]);
//# sourceMappingURL=main.fd40cf21.chunk.js.map