(this.webpackJsonpministagram=this.webpackJsonpministagram||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var i=n(8),r=n.n(i),c=n(50),a=n.n(c),o=(n(78),n(79),n(55)),s=n(56),l=n(49),u=n(69),d=n(33),j=n(5),b=n(97),p=n(96),g=n(28),x=n(48),f=(n(81),n(93),n(92),{apiKey:"AIzaSyCon_WShxZw5LA1eRyLttq0WO9QmUBDstA",authDomain:"ministagram-e9e63.firebaseapp.com",projectId:"ministagram-e9e63",storageBucket:"ministagram-e9e63.appspot.com",messagingSenderId:"168709879640",appId:"1:168709879640:web:a0139290c64489a3b6572d",measurementId:"G-3Q6Z59BWRX"});x.a.initializeApp(f);var h,O,m,_,E=f.apiKey,v=x.a.auth(),C=x.a.firestore(),w=x.a.storage(),y=n(37),k=(n(83),"LOG_OUT"),z="GET_USER",A="SET_USER",T=Object(b.a)(k,(function(e){return{user:e}})),F=(Object(b.a)(z,(function(e){return{user:e}})),Object(b.a)(A,(function(e){return{user:e}}))),S=Object(p.a)((h={},Object(j.a)(h,A,(function(e,t){return Object(g.b)(e,(function(e){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i=new Date;i.setTime(i.getTime()+24*n*1e3*60*60),document.cookie="".concat(e,"=").concat(t,"; expires=").concat(i.toUTCString())}("is_login","success"),e.user=t.payload.user,e.is_login=!0}))})),Object(j.a)(h,k,(function(e,t){return Object(g.b)(e,(function(e){!function(e){var t=new Date("2020-01-01").toUTCString();console.log(t),document.cookie=e+"=; expires="+t}("is_login"),e.user=null,e.is_login=!1}))})),Object(j.a)(h,z,(function(e,t){return Object(g.b)(e,(function(e){}))})),h),{user:null,is_login:!1}),D=function(e,t,n){return function(i,r,c){var a=c.history,o=Object(y.c)();Object(y.b)(o,e,t).then((function(t){var r=t.user;Object(y.f)(o.currentUser,{displayName:n}).then((function(){i(F({user_name:n,id:e,user_profile:"",uid:r.uid})),a.push("/")})).catch((function(e){console.log(e)}))})).catch((function(e){var t=e.code,n=e.message;console.log(t,n)}))}},B=function(e,t){return function(n,i,r){var c=r.history,a=Object(y.c)();Object(y.d)(a,y.a).then((function(i){Object(y.e)(a,e,t).then((function(t){var i=t.user;console.log(i),n(F({user_name:i.displayName,id:e,user_profile:"",uid:i.uid})),c.push("/")})).catch((function(e){var t=e.code,n=e.message;console.log(t,n)}))}))}},P=function(){return function(e,t,n){n.history;v.onAuthStateChanged((function(t){e(t?F({user_name:t.displayName,user_profile:"",id:t.email,uid:t.uid}):T())}))}},I=function(){return function(e,t,n){var i=n.history;v.signOut().then((function(){e(T()),i.replace("/")}))}},N=n(21),L=n(15),U=n(59),R=n(60),M=n.n(R),Y="UPLOADING",G="UPLOAD_IMAGE",Z="SET_PREVIEW",X=Object(b.a)(Y,(function(e){return{uploading:e}})),W=Object(b.a)(G,(function(e){return{image_url:e}})),V=Object(b.a)(Z,(function(e){return{preview:e}})),q=Object(p.a)((O={},Object(j.a)(O,G,(function(e,t){return Object(g.a)(e,(function(e){e.image_url=t.payload.image_url,e.uploading=!1}))})),Object(j.a)(O,Y,(function(e,t){return Object(g.a)(e,(function(e){e.uploading=t.payload.uploading}))})),Object(j.a)(O,Z,(function(e,t){return Object(g.a)(e,(function(e){e.preview=t.payload.preview}))})),O),{image_url:"",uploading:!1,preview:null}),H={uploadImage:W,uploadImageFB:function(e){return function(t,n,i){i.history;t(X(!0)),console.log("images/".concat((new Date).getTime(),"_").concat(e.name)),w.ref("images/".concat(e.name)).put(e).then((function(e){console.log(e),e.ref.getDownloadURL().then((function(e){t(W(e)),console.log(e)}))}))}},setPreview:V},J="BRING_POST",K="ADD_POST",Q="EDIT_POST",$="LOADING",ee=Object(b.a)(J,(function(e,t){return{post_list:e,paging:t}})),te=Object(b.a)(K,(function(e){return{post:e}})),ne=Object(b.a)(Q,(function(e,t){return{post_id:e,post:t}})),ie=Object(b.a)($,(function(e){return{is_loading:e}})),re={image_url:"https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",contents:"",comment_cnt:0,insert_dt:M()().format("YYYY-MM-DD hh:mm:ss")},ce=Object(p.a)((m={},Object(j.a)(m,J,(function(e,t){return Object(g.b)(e,(function(e){var n;(n=e.list).push.apply(n,Object(N.a)(t.payload.post_list)),e.paging=t.payload.paging,e.is_loading=!1}))})),Object(j.a)(m,K,(function(e,t){return Object(g.b)(e,(function(e){e.list.unshift(t.payload.post)}))})),Object(j.a)(m,Q,(function(e,t){return Object(g.b)(e,(function(e){var n=e.list.findIndex((function(e){return e.id===t.payload.post_id}));e.list[n]=Object(L.a)(Object(L.a)({},e.list[n]),t.payload.post)}))})),Object(j.a)(m,$,(function(e,t){return Object(g.b)(e,(function(e){e.is_loading=t.payload.is_loading}))})),m),{list:[],paging:{start:null,next:null,size:3},is_loading:!1}),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return function(n,i,r){r.history;var c=i().post.paging;if(!c.start||c.next){n(ie(!0));var a=C.collection("post").orderBy("insert_dt","desc");e&&(a=a.startAt(e)),a.limit(t+1).get().then((function(e){var i=[],r={start:e.docs[0],next:e.docs.length===t+1?e.docs[e.docs.length-1]:null,size:t};e.forEach((function(e){var t=e.data(),n=Object.keys(t).reduce((function(e,n){return-1!==n.indexOf("user_")?Object(L.a)(Object(L.a)({},e),{},{user_info:Object(L.a)(Object(L.a)({},e.user_info),{},Object(j.a)({},n,t[n]))}):Object(L.a)(Object(L.a)({},e),{},Object(j.a)({},n,t[n]))}),{id:e.id,user_info:{}});i.push(n)})),i.pop(),n(ee(i,r))}))}}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n,i){var r=i.history,c=n().user.user,a={user_name:c.user_name,user_id:c.uid,user_profile:c.user_profile},o=Object(L.a)(Object(L.a)({},re),{},{contents:e,insert_dt:M()().format("YYYY-MM-DD hh:mm:ss")}),s=n().image.preview;console.log(s),w.ref("images/".concat(a.user_id,"_").concat((new Date).getTime())).putString(s,"data_url").then((function(e){e.ref.getDownloadURL().then((function(e){return console.log(e),e})).then((function(e){var n=Object(U.a)(Object(U.b)(C,"post"),Object(L.a)(Object(L.a)(Object(L.a)({},a),o),{},{image_url:e})),i=Object(L.a)(Object(L.a)({user_info:a},o),{},{id:n.id,image_url:e});t(te(i)),r.replace("/"),t(H.setPreview(null))})).catch((function(e){window.alert("\uc557! \uac8c\uc2dc\uae00 \uc791\uc131\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc694!"),console.log("\uac8c\uc2dc\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud588\uc5b4\uc694!",e)}))})).catch((function(e){window.alert("\uc557! \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc694!"),console.log("\uc557! \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc694!",e)}))}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n,i,r){var c=r.history;if(e){var a=i().image.preview,o=i().post.list.findIndex((function(t){return t.id===e})),s=i().post.list[o];console.log(s);var l=C.collection("post");if(a!==s.image_url){var u=i().user.user.uid;w.ref("images/".concat(u,"_").concat((new Date).getTime())).putString(a,"data_url").then((function(i){i.ref.getDownloadURL().then((function(e){return console.log(e),e})).then((function(i){l.doc(e).update(Object(L.a)(Object(L.a)({},t),{},{image_url:i})).then((function(r){n(ne(e,Object(L.a)(Object(L.a)({},t),{},{image_url:i}))),c.replace("/")}))})).catch((function(e){window.alert("\uc557! \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc694!"),console.log("\uc557! \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc694!",e)}))}))}else l.doc(e).update(t).then((function(i){n(ne(e,Object(L.a)({},t))),c.replace("/")}))}else console.log("\uac8c\uc2dc\uae00 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694!")}},le=Object(d.a)(),ue=Object(l.b)({image:q,user:S,post:ce,router:Object(s.b)(le)}),de=[u.a.withExtraArgument({history:le})],je=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.c)(l.a.apply(void 0,de)),be=Object(l.d)(ue,je),pe=n(17),ge=n(25),xe=n(26),fe=n(6),he=function(e){var t=e.is_flex,n=e.width,i=e.margin,c=e.padding,a=e.bg,o=e.children,s=e.center,l=e._onClick,u={is_flex:t,margin:i,width:n,padding:c,bg:a,center:s};return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(ve,Object(L.a)(Object(L.a)({},u),{},{onClick:l,children:o}))})};he.defaultProps={children:null,is_flex:!1,width:"100%",padding:!1,margin:!1,bg:!1,center:!1,_onClick:function(){}};var Oe,me,_e,Ee,ve=xe.a.div(_||(_=Object(ge.a)(["\n    width : ",";\n    height: 100%;\n    box-sizing: border-box;\n    ","\n    ","\n    ","\n    ","\n    ","\n"])),(function(e){return e.width}),(function(e){return e.padding?"padding : ".concat(e.padding,";"):""}),(function(e){return e.margin?"margin : ".concat(e.margin,";"):""}),(function(e){return e.bg?"background-color: ".concat(e.bg,";"):""}),(function(e){return e.is_flex?"display: flex; align-items: center; justify-content: space-between;":""}),(function(e){return e.center?"text-align : center;":""})),Ce=he,we=function(e){var t=e.shape,n={src:e.src,size:e.size};return"circle"===t?Object(fe.jsx)(Te,Object(L.a)({},n)):"rectangle"===t?Object(fe.jsx)(ze,{children:Object(fe.jsx)(Ae,Object(L.a)({},n))}):Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(ke,Object(L.a)({},n))})};we.defaultProps={shape:"circle",src:"https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",size:36};var ye,ke=xe.a.div(Oe||(Oe=Object(ge.a)(["\n      --size : ",'px;\n    width : var(--size);\n    height : var(--size);\n    background-image: url("','");\n    background-size: cover;\n'])),(function(e){return e.size}),(function(e){return e.src})),ze=xe.a.div(me||(me=Object(ge.a)(["\n    width: 100%;\n    min-width: 250px;\n"]))),Ae=xe.a.div(_e||(_e=Object(ge.a)(['\n    position: relative;\n    padding-top: 75%;\n    overflow: hidden;\n    background-image: url("','");\n    background-size: cover;\n'])),(function(e){return e.src})),Te=xe.a.div(Ee||(Ee=Object(ge.a)(["\n    --size : ",'px;\n    width : var(--size);\n    height : var(--size);\n    border-radius: var(--size);\n\n    background-image: url("','");\n    background-size: cover;\n    margin: 4px;\n'])),(function(e){return e.size}),(function(e){return e.src})),Fe=we,Se=function(e){var t=e.bold,n=e.color,i=e.size,r=e.children,c={bold:t,color:n,size:i,margin:e.margin};return Object(fe.jsx)(Pe,Object(L.a)(Object(L.a)({},c),{},{children:r}))};Se.defaultProps={children:null,bold:!1,color:"#222831",size:"14px",margin:!1};var De,Be,Pe=xe.a.p(ye||(ye=Object(ge.a)(["\n    color : ",";\n    font-size : ",";\n    font-weight: ",";\n    ",";\n"])),(function(e){return e.color}),(function(e){return e.size}),(function(e){return e.bold?"600":"400"}),(function(e){return e.margin?"margin : ".concat(e.margin):""})),Ie=Se,Ne=function(e){var t=e.multiLine,n=e.label,i=e.placeholder,c=e._onChange,a=e.type,o=e.value;return t?Object(fe.jsxs)(Ce,{children:[n&&Object(fe.jsx)(Ie,{margin:"0px",children:n}),Object(fe.jsx)(Re,{rows:8,value:o,placeholder:i,onChange:c})]}):Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{children:[n&&Object(fe.jsx)(Ie,{margin:"0px",children:n}),Object(fe.jsx)(Me,{type:a,placeholder:i,onChange:c})]})})};Ne.defaultProps={multiLine:!1,label:!1,placeholder:"\ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",value:"",_onChange:function(){}};var Le,Ue,Re=xe.a.textarea(De||(De=Object(ge.a)(["\n  border: 1px solid #212121;\n  width: 100%;\n  padding: 12px 4px;\n  box-sizing: border-box;\n"]))),Me=xe.a.input(Be||(Be=Object(ge.a)(["\n  border: 1px solid #212121;\n  width: 100%;\n  padding: 12px 4px;\n  box-sizing: border-box;\n"]))),Ye=Ne,Ge=function(e){var t=e._disabled,n=e.text,i=e._onClick,c=e.color,a=e.bgcolor,o=e.is_float,s=e.children,l=e.margin,u=e.width,d=e.padding;if(o)return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ve,{onClick:i,children:[" ",n||s," "]})});var j={color:c,bgcolor:a,margin:l,width:u,padding:d};return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(We,Object(L.a)(Object(L.a)({},j),{},{disabled:t,onClick:i,children:n||s}))})};Ge.defaultProps={color:"#212121",bgcolor:!1,text:!1,_onClick:function(){},is_float:!1,children:null,margin:!1,width:"100%",padding:"12px 0px;",_disabled:!1};var Ze,Xe,We=xe.a.button(Le||(Le=Object(ge.a)(["\n  width: ",";\n  ",";\n  background-color: ",";\n  ",";\n  color: ",";\n  padding: ",";\n  box-sizing: border-box;\n  border: none;\n"])),(function(e){return e.width}),(function(e){return e.margin?"margin : ".concat(e.margin,";"):""}),(function(e){return e.disabled?"#cad4c9":"#d9edd8"}),(function(e){return e.bgcolor?"background-color : ".concat(e.bgcolor,";"):""}),(function(e){return e.color}),(function(e){return e.padding})),Ve=xe.a.button(Ue||(Ue=Object(ge.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: ",";\n  color: #212121;\n  box-sizing: border-box;\n  font-size: 36px;\n  font-weight: 800;\n  position: fixed;\n  bottom: 50px;\n  right: 16px;\n  text-align: center;\n  border: none;\n  border-radius: 50px;\n  vertical-align: middle;\n"])),(function(e){return e.disabled?"#cad4c9":"#d9edd8"})),qe=Ge,He=function(e){var t=e.type,n=e.size,i=e.is_dim;return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(Je,{type:t,is_dim:i,children:Object(fe.jsx)(Ke,{size:n})})})};He.defaultProps={type:"inline",is_dim:!1,size:60};var Je=xe.a.div(Ze||(Ze=Object(ge.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  ","\n  ","\n"])),(function(e){return"page"===e.type?"position: fixed;\n        height: 95vh;\n        top: 0;\n        left: 0;\n        padding: 0;\n        zIndex: 9999;":""}),(function(e){return e.is_dim?"\n     background: rgba(0,0,0,0.4); \n     height: 100vh;\n  ":""})),Ke=xe.a.div(Xe||(Xe=Object(ge.a)(["\n  --size: ","px;\n  width: var(--size);\n  height: var(--size);\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: none; display: block; shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.75s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.25s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='47' y='24' rx='3' ry='3.36' width='6' height='12' fill='%23222222'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");\n  background-size: var(--size);\n"])),(function(e){return e.size})),Qe=He,$e=function(e){return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{children:[Object(fe.jsxs)(Ce,{is_flex:!0,padding:"16px",children:[Object(fe.jsxs)(Ce,{is_flex:!0,width:"auto",children:[Object(fe.jsx)(Fe,{shape:"circle",src:e.src}),Object(fe.jsx)(Ie,{bold:!0,children:e.user_info.user_name})]}),Object(fe.jsxs)(Ce,{is_flex:!0,width:"auto",children:[Object(fe.jsx)(Ie,{children:e.insert_dt}),e.is_me&&Object(fe.jsx)(qe,{width:"auto",margin:"4px",padding:"4px",_onClick:function(){le.push("/write/".concat(e.id))},children:"\uc218\uc815"})]})]}),Object(fe.jsx)(Ce,{padding:"16px",children:Object(fe.jsxs)(Ie,{children:[" ",e.contents," "]})}),Object(fe.jsx)(Ce,{children:Object(fe.jsx)(Fe,{shape:"rectangle",src:e.image_url})}),Object(fe.jsx)(Ce,{padding:"16px",children:Object(fe.jsxs)(Ie,{margin:"0px",bold:!0,children:["\ub313\uae00",e.comment_cnt,"\uac1c"]})})]})})};$e.defaultProps={user_info:{user_name:"hae1",user_profile:"https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg"},image_url:"https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",contents:"\uc790 \uac00\ubcf4\uc790!",comment_cnt:10,insert_dt:"2021-11-29 21:00:00",is_me:!1};var et=$e,tt=n(47),nt=n.n(tt),it=function(e){e.children;var t=e.is_next,n=e.callNext,i=e.loading,c=nt.a.throttle((function(){if(!i){var e=window.innerHeight;document.body.scrollHeight-e-(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)<200&&n()}}),300),a=r.a.useCallback(c,[i]);return r.a.useEffect((function(){if(!i)return t?window.addEventListener("scroll",a):window.removeEventListener("scroll",a),window.addEventListener("scroll",(function(){})),function(){return window.removeEventListener("scroll",(function(){}))}}),[t,i]),Object(fe.jsxs)(r.a.Fragment,{children:[e.children,t&&Object(fe.jsx)(Qe,{})]})};it.defafaultProps={children:null,is_next:!1,callNext:function(){},loading:!1};var rt=it,ct=function(e){var t=Object(pe.d)(),n=Object(pe.e)((function(e){return e.post.list})),i=Object(pe.e)((function(e){return e.user.user})),c=Object(pe.e)((function(e){return e.post.is_loading})),a=Object(pe.e)((function(e){return e.post.paging})),o=e.history;return r.a.useEffect((function(){0===n.length&&t(ae())}),[]),Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(Ce,{bg:"#EFF6FF",padding:"20px 0px",children:Object(fe.jsx)(rt,{callNext:function(){t(ae(a.next))},is_next:!!a.next,loading:c,children:n.map((function(e,t){return e.user_info.user_id===(null===i||void 0===i?void 0:i.uid)?Object(fe.jsx)(Ce,{bg:"#ffffff",margin:"10px 0px",_onClick:function(){o.push("/post/".concat(e.id))},children:Object(fe.jsx)(et,Object(L.a)(Object(L.a)({},e),{},{is_me:!0}),e.id+"post_list")},e.id+"post_list"):Object(fe.jsx)(Ce,{_onClick:function(){o.push("/post/".concat(e.id))},children:Object(fe.jsx)(et,Object(L.a)({},e))},e.id+"post_list")}))})})})},at=n(16),ot=function(e){return/^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/.test(e)},st=function(e){var t=Object(pe.d)(),n=r.a.useState(""),i=Object(at.a)(n,2),c=i[0],a=i[1],o=r.a.useState(""),s=Object(at.a)(o,2),l=s[0],u=s[1];return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{padding:"16px",children:[Object(fe.jsx)(Ie,{size:"32px",bold:!0,children:"\ub85c\uadf8\uc778"}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\uc544\uc774\ub514",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",_onChange:function(e){a(e.target.value)}})}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\ud328\uc2a4\uc6cc\ub4dc",placeholder:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",type:"password",_onChange:function(e){u(e.target.value)}})}),Object(fe.jsx)(Ce,{children:Object(fe.jsx)(qe,{text:"\ub85c\uadf8\uc778\ud558\uae30",_onClick:function(){console.log("\ub85c\uadf8\uc778\ud588\uc5b4"),console.log(c),""!==c&&""!==l?ot(c)?t(B(c,l)):window.alert("\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):window.alert("\uc544\uc774\ub514 \ud639\uc740 \ube44\ubc00\ubc88\ud638\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4! \uc785\ub825\ud574\uc8fc\uc138\uc694! :)")}})})]})})},lt=function(e){var t=Object(pe.d)(),n=r.a.useState(""),i=Object(at.a)(n,2),c=i[0],a=i[1],o=r.a.useState(""),s=Object(at.a)(o,2),l=s[0],u=s[1],d=r.a.useState(""),j=Object(at.a)(d,2),b=j[0],p=j[1],g=r.a.useState(""),x=Object(at.a)(g,2),f=x[0],h=x[1];return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{padding:"16px",children:[Object(fe.jsx)(Ie,{size:"32px",bold:!0,children:"\ud68c\uc6d0\uac00\uc785"}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\uc544\uc774\ub514",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",_onChange:function(e){a(e.target.value)}})}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\ub2c9\ub124\uc784",placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694",_onChange:function(e){h(e.target.value)}})}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\ube44\ubc00\ubc88\ud638",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",type:"password",_onChange:function(e){u(e.target.value)}})}),Object(fe.jsx)(Ce,{padding:"16px 0px",children:Object(fe.jsx)(Ye,{label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694",type:"password",_onChange:function(e){p(e.target.value)}})}),Object(fe.jsx)(Ce,{children:Object(fe.jsx)(qe,{_disabled:""===c||""===l||""===f||""===b,text:"\ud68c\uc6d0\uac00\uc785\ud558\uae30",_onClick:function(){""!==c&&""!==l&&""!==f?ot(c)?l===b?t(D(c,l,f)):window.alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638 \ud655\uc778\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):window.alert("\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):window.alert("\uc544\uc774\ub514, \ube44\ubc00\ubc88\ud638, \ub2c9\ub124\uc784\uc744 \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694! :)")}})})]})})};lt.defaultProps={};var ut=lt,dt=function(e){var t=Object(pe.d)(),n=Object(pe.e)((function(e){return e.image.uploading})),i=r.a.useRef();return Object(fe.jsxs)(r.a.Fragment,{children:[Object(fe.jsx)("input",{type:"file",onChange:function(e){console.log(e),console.log(e.target),console.log(e.target.files[0]),console.log(i.current.files[0]);var n=new FileReader,r=e.target.files[0];n.readAsDataURL(r),n.onloadend=function(){console.log(n.result),t(H.setPreview(n.result))}},ref:i,disabled:n}),Object(fe.jsx)(qe,{_onClick:function(){if(i.current&&0!==i.current.files.length){var e=i.current.files[0];t(H.uploadImageFB(e))}else window.alert("\ud30c\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!")},children:"\uc5c5\ub85c\ub4dc\ud558\uae30"})]})},jt=function(e){var t=Object(pe.d)(),n=Object(pe.e)((function(e){return e.user.is_login})),i=Object(pe.e)((function(e){return e.image.preview})),c=Object(pe.e)((function(e){return e.post.list})),a=e.match.params.id,o=!!a,s=e.history,l=o?c.find((function(e){return e.id===a})):null,u=r.a.useState(l?l.contents:""),d=Object(at.a)(u,2),j=d[0],b=d[1];r.a.useEffect((function(){if(o&&!l)return console.log("\ud3ec\uc2a4\ud2b8 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694!"),void s.goBack();o&&t(H.setPreview(l.image_url))}),[]);return n?Object(fe.jsxs)(r.a.Fragment,{children:[Object(fe.jsxs)(Ce,{padding:"16px",children:[Object(fe.jsx)(Ie,{margin:"0px",size:"36px",bold:!0,children:o?"\uac8c\uc2dc\uae00 \uc218\uc815":"\uac8c\uc2dc\uae00 \uc791\uc131"}),Object(fe.jsx)(dt,{})]}),Object(fe.jsxs)(Ce,{children:[Object(fe.jsx)(Ce,{padding:"16px",children:Object(fe.jsx)(Ie,{margin:"0px",size:"24px",bold:!0,children:"\ubbf8\ub9ac\ubcf4\uae30"})}),Object(fe.jsx)(Fe,{shape:"rectangle",src:i||"https://yoloiscute.s3.ap-northeast-2.amazonaws.com/IMG_4571+2.jpg"})]}),Object(fe.jsx)(Ce,{padding:"16px",children:Object(fe.jsx)(Ye,{value:j,_onChange:function(e){b(e.target.value)},label:"\uac8c\uc2dc\uae00 \ub0b4\uc6a9",placeholder:"\uac8c\uc2dc\uae00 \uc791\uc131",multiLine:!0})}),Object(fe.jsx)(Ce,{padding:"16px",children:o?Object(fe.jsx)(qe,{_onClick:function(){t(se(a,{contents:j}))},text:"\uac8c\uc2dc\uae00 \uc218\uc815"}):Object(fe.jsx)(qe,{_onClick:function(){t(oe(j))},text:"\uac8c\uc2dc\uae00 \uc791\uc131"})})]}):Object(fe.jsxs)(Ce,{margin:"100px 0px",padding:"16px",center:!0,children:[Object(fe.jsx)(Ie,{size:"32px",bold:!0,children:"\uc557 \uc7a0\uae50!"}),Object(fe.jsx)(Ie,{size:"16px",children:"\ub85c\uadf8\uc778 \ud6c4\uc5d0\ub9cc \uae00\uc744 \uc4f8 \uc218 \uc788\uc5b4\uc694!"}),Object(fe.jsxs)(qe,{_onClick:function(){s.replace("/")},children:[" ","\ub85c\uadf8\uc778\ud558\ub7ec\uac00\uae30"]})]})},bt=function(){return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{padding:"16px",children:[Object(fe.jsx)(pt,{}),Object(fe.jsx)(pt,{}),Object(fe.jsx)(pt,{}),Object(fe.jsx)(pt,{}),Object(fe.jsx)(pt,{}),Object(fe.jsx)(pt,{})]})})},pt=function(e){e.user_profile;var t=e.user_name,n=(e.user_id,e.insert_dt),i=(e.post_id,e.contents);return Object(fe.jsxs)(Ce,{is_flex:!0,children:[Object(fe.jsxs)(Ce,{is_flex:!0,width:"auto",children:[Object(fe.jsx)(Fe,{shape:"circle"}),Object(fe.jsx)(Ie,{bold:!0,children:t})]}),Object(fe.jsxs)(Ce,{is_flex:!0,margin:"0px 4px",children:[Object(fe.jsx)(Ie,{margin:"0px 3px",children:i}),Object(fe.jsx)(Ie,{margin:"0px",children:n})]})]})};pt.defaultProps={user_profile:"",user_name:"hae1",user_id:"",post_id:1,contents:"\uadc0\uc5ec\uc6b4 \ub9c8\ube14\ub9ac\ub124\uc694!",insert_dt:"2021-12-02 08:00:00"};var gt=function(){return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{padding:"16px",is_flex:!0,children:[Object(fe.jsx)(Ye,{placeholder:"\ub313\uae00 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694 :)"}),Object(fe.jsx)(qe,{width:"50px",margin:"0px 2px 0px 8px",children:"\uc791\uc131"})]})})},xt=function(e){return Object(fe.jsxs)(r.a.Fragment,{children:[Object(fe.jsx)(et,{}),Object(fe.jsx)(gt,{}),Object(fe.jsx)(bt,{})]})},ft=function(){var e=r.a.useState(""),t=Object(at.a)(e,2),n=t[0],i=t[1],c=nt.a.debounce((function(e){console.log("debounce :::",e.target.value)}),1e3),a=(nt.a.throttle((function(e){console.log("throttle :::",e.target.value)}),1e3),r.a.useCallback(c,[]));return Object(fe.jsx)("div",{children:Object(fe.jsx)("input",{type:"text",onChange:function(e){i(e.target.value),a(e)},value:n})})},ht=function(e){var t=e.image_url,n=e.user_name;e.post_id;return Object(fe.jsxs)(Ce,{padding:"16px",is_flex:!0,bg:"#ffffff",margin:"8px 0px",children:[Object(fe.jsx)(Ce,{width:"auto",margin:"0px 8px 0px 0px",children:Object(fe.jsx)(Fe,{shape:"square",size:75,image_url:t})}),Object(fe.jsx)(Ce,{children:Object(fe.jsxs)(Ie,{children:[Object(fe.jsx)("b",{children:n})," \uc774 \uac8c\uc2dc\ubb3c\uc5d0 \ub313\uae00\uc744 \ub0a8\uacbc\uc2b5\ub2c8\ub2e4."]})})]})};ht.defaultProps={image_url:"",user_name:"",post_id:null};var Ot=ht,mt=function(e){return Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsx)(Ce,{padding:"16px",bg:"#c4d9c3",children:[{user_name:"hae1",post_id:"post1",image_url:""},{user_name:"hae1",post_id:"post2",image_url:""},{user_name:"hae1",post_id:"post3",image_url:""},{user_name:"hae1",post_id:"post4",image_url:""},{user_name:"hae1",post_id:"post5",image_url:""}].map((function(e){return Object(fe.jsx)(Ot,Object(L.a)({},e),e.post_id)}))})})},_t=function(e){var t,n=Object(pe.d)(),i=Object(pe.e)((function(e){return e.user.is_login})),c="firebase:authUser:".concat(E,":[DEFAULT]"),a=!!sessionStorage.getItem(c);return console.log(a),i&&a?Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{is_flex:!0,padding:"4px 16px",children:[Object(fe.jsx)(Ce,{children:Object(fe.jsx)(Ie,{size:"24px",bold:!0,margin:"0px",children:"Ministagram"})}),Object(fe.jsxs)(Ce,{is_flex:!0,children:[Object(fe.jsx)(qe,{bgcolor:"#b2cef7",color:"#212121",text:"\ub0b4\uc815\ubcf4"}),Object(fe.jsx)(qe,{_onClick:function(){le.push("/noti")},bgcolor:"#8dafe0",color:"#212121",text:"\uc54c\ub9bc"}),Object(fe.jsx)(qe,{bgcolor:"#6f98b0",color:"#212121",text:"\ub85c\uadf8\uc544\uc6c3",_onClick:function(){n(I())}})]})]})}):Object(fe.jsx)(r.a.Fragment,{children:Object(fe.jsxs)(Ce,{is_flex:!0,padding:"4px 16px",children:[Object(fe.jsx)(Ce,{children:Object(fe.jsx)(Ie,(t={size:"24px",bold:!0,margin:"0px"},Object(j.a)(t,"margin","0px"),Object(j.a)(t,"children","Ministagram"),t))}),Object(fe.jsxs)(Ce,{is_flex:!0,children:[Object(fe.jsx)(qe,{bgcolor:"#b2cef7",color:"#212121",text:"\ub85c\uadf8\uc778",_onClick:function(){le.push("/login")}}),Object(fe.jsx)(qe,{bgcolor:"#8dafe0",color:"#212121",text:"\ud68c\uc6d0\uac00\uc785",_onClick:function(){le.push("/signup")}})]})]})})};_t.defaultProps={};var Et=_t,vt=function(e){var t=Object(pe.e)((function(e){return e.user.is_login})),n="firebase:authUser:".concat(E,":[DEFAULT]");return!!sessionStorage.getItem(n)&&t?Object(fe.jsx)(r.a.Fragment,{children:e.children}):null};var Ct=function(){var e=Object(pe.d)(),t="firebase:authUser:".concat(E,":[DEFAULT]");return sessionStorage.getItem(t),r.a.useEffect((function(){t&&e(P())}),[]),Object(fe.jsxs)(r.a.Fragment,{children:[Object(fe.jsxs)(Ce,{children:[Object(fe.jsx)(Et,{}),Object(fe.jsxs)(s.a,{history:le,children:[Object(fe.jsx)(o.a,{path:"/",exact:!0,component:ct}),Object(fe.jsx)(o.a,{path:"/login",exact:!0,component:st}),Object(fe.jsx)(o.a,{path:"/signup",exact:!0,component:ut}),Object(fe.jsx)(o.a,{path:"/write",exact:!0,component:jt}),Object(fe.jsx)(o.a,{path:"/write/:id",exact:!0,component:jt}),Object(fe.jsx)(o.a,{path:"/post/:id",exact:!0,component:xt}),Object(fe.jsx)(o.a,{path:"/search",exact:!0,component:ft}),Object(fe.jsx)(o.a,{path:"/noti",exact:!0,component:mt})]})]}),Object(fe.jsx)(vt,{children:Object(fe.jsx)(qe,{is_float:!0,text:"+",_onClick:function(){le.push("/write")}})})]})},wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(fe.jsx)(pe.a,{store:be,children:Object(fe.jsx)(Ct,{})}),document.getElementById("root")),wt()}},[[91,1,2]]]);
//# sourceMappingURL=main.41c71c73.chunk.js.map