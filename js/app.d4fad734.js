(function(t){function e(e){for(var i,o,r=e[0],a=e[1],l=e[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(i=!1)}i&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},c=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/self-office/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1913:function(t,e,n){t.exports=n.p+"img/self-logo-black.b80bcad4.png"},1945:function(t,e,n){},2081:function(t,e,n){t.exports=n.p+"img/app-post.f542f522.png"},2620:function(t,e,n){},2942:function(t,e,n){},"2c31":function(t,e,n){t.exports=n.p+"img/app-relife.5991f8d2.png"},"2cce":function(t,e,n){},"34b2":function(t,e,n){"use strict";var i=n("a418"),s=n.n(i);s.a},3998:function(t,e,n){},"39d5":function(t,e,n){"use strict";var i=n("d6ec"),s=n.n(i);s.a},"3bcb":function(t,e,n){},"3e58":function(t,e,n){t.exports=n.p+"img/3d-2.7e9a3b00.jpg"},"44b5":function(t,e,n){"use strict";var i=n("1945"),s=n.n(i);s.a},"46be":function(t,e,n){t.exports=n.p+"img/Lego-A-3.ab86bd9a.jpg"},"50c3":function(t,e,n){"use strict";var i=n("60e7"),s=n.n(i);s.a},"546c":function(t,e,n){"use strict";var i=n("d2be"),s=n.n(i);s.a},"54bb":function(t,e,n){t.exports=n.p+"img/3d-1.b0ad241b.jpg"},"55e4":function(t,e,n){"use strict";var i=n("f3fc"),s=n.n(i);s.a},"566d":function(t,e,n){"use strict";var i=n("ada1"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],o=n("2877"),r={},a=Object(o["a"])(r,s,c,!1,null,null,null),l=a.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-header",{attrs:{content:t.menus[0]}}),n("router-view",{staticClass:"main-view bg-white"}),n("my-footer")],1)},d=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"topbar w-100 d-flex"},[i("div",{staticClass:"left-menu"},[i("div",{staticClass:"left-content d-flex flex-column",class:{"open-left":t.openLeft}},[i("div",{staticClass:"left-line"}),t._l(t.content.title,function(e,n){return i("div",{key:n,staticClass:"left-item px-4 py-3",on:{click:function(e){return t.scrollToID(n)}}},[t._v(t._s(e))])})],2)]),i("div",{staticClass:"middle-menu bg-white py-1 d-flex ai-center w-100"},[i("i",{staticClass:"middle-icon iconfont icon-menu pl-4 fs-xl",on:{click:function(e){t.openLeft=!0!==t.openLeft}}}),i("div",{staticClass:"middle-content d-flex ai-center jc-center w-100"},[i("a",{staticClass:"title d-flex jc-start ai-center mr-3 my-2",attrs:{title:"SELF 個人網站"}},[i("img",{attrs:{src:n("1913")},on:{click:function(e){return t.scrollTop(!0)}}})]),i("div",{staticClass:"nav d-flex ai-center jc-start ml-3"},[i("ul",{staticClass:"nav-menu p-0 d-flex my-3"},t._l(t.content.title,function(e,n){return i("li",{key:n,staticClass:"nav-menu-item mx-4",on:{click:function(e){return t.scrollToID(n)}}},[i("a",{class:{active:t.active===n}},[t._v(t._s(e))])])}),0)])])])])},m=[],h=(n("b54a"),{props:["content"],data:function(){return{active:5,scrollId:this.content.link,openLeft:!1,moveWhere:void 0,moveTopest:void 0,moveBottomest:void 0}},created:function(){this.scrollTop(!1)},mounted:function(){var t=this;window.addEventListener("resize",this.setOpenLeft),window.addEventListener("mousewheel",this.handleScroll),document.addEventListener("click",function(e){var n=e.target.contains(document.getElementsByClassName("middle-icon")[0]);n||(t.openLeft=!1)})},methods:{setOpenLeft:function(){window.innerWidth>1080&&(this.openLeft=!1)},handleScroll:function(){this.stopAll()},stop:function(t){t&&(window.cancelAnimationFrame(t),t=void 0)},stopAll:function(){this.stop(this.moveWhere),this.stop(this.moveTopest),this.stop(this.moveBottomest)},countAbsolute:function(t){var e=t.offsetTop,n=t.offsetParent;while(null!==n)e+=n.offsetTop+n.clientTop,n=n.offsetParent;return e},scrollBottom:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;return t+e===n},scrollToWhere:function(t,e){var n=this,i=function i(){(t.getBoundingClientRect().top>60||t.getBoundingClientRect().top<40)&&(n.moveWhere=window.requestAnimationFrame(i),window.scrollTo(0,window.pageYOffset+t.getBoundingClientRect().top/15-e))};i()},scrollToBottomest:function(){var t=this,e=function e(){var n=document.documentElement.scrollTop||document.body.scrollTop,i=document.body.scrollHeight-n;t.scrollBottom()||(t.moveBottomest=window.requestAnimationFrame(e),window.scrollTo(0,n+i/20))};e()},scrollToTopest:function(){var t=this,e=function e(){var n=document.documentElement.scrollTop||document.body.scrollTop;n>0&&(t.moveTopest=window.requestAnimationFrame(e),window.scrollTo(0,n-n/20))};e()},scrollToID:function(t){if(this.stopAll(),this.openLeft=!1,this.active=t,t!==this.scrollId.length-1){var e=document.getElementById(this.scrollId[t]);e.getBoundingClientRect().top>0?this.scrollToWhere(e,0):this.scrollToWhere(e,15)}else this.scrollToBottomest()},scrollTop:function(t){var e=this;this.stopAll(),this.active=this.content.title.length,t?this.scrollToTopest():setTimeout(function(){e.scrollToTopest()},1e3)}}}),x=h,g=(n("5952"),Object(o["a"])(x,p,m,!1,null,"6f8ee322",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container d-flex flex-column bg-dark-grey w-100"},[n("my-footer-top"),n("my-footer-bottom")],1)},C=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-top d-flex jc-center ai-center"},[n("my-left-connect"),n("my-right-comment",{attrs:{content:t.rightCommentContent}})],1)},w=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-connect d-flex flex-columm"},[n("div",{staticClass:"connect-container d-flex flex-column ai-start"},[n("P",{staticClass:"connect-title text-white fs-xxl m-0 my-3"},[t._v("My contacts")]),t._l(t.connectInfo,function(e,i){return n("div",{key:i,staticClass:"connect-info d-flex mt-4"},[n("i",{staticClass:"iconfont fs-lg text-white mr-2",class:"icon-"+e.icon}),n("p",{staticClass:"m-0 mx-2 fs-lgs text-white"},[t._v(t._s(e.text))])])})],2)])},j=[],T={data:function(){return{connectInfo:[{text:"暫不提供",icon:"phoneon"},{text:"暫不提供",icon:"font-publish--"},{text:"暫不提供",icon:"Fax"},{text:"a098400926@gmail.com",icon:"email"}]}}},A=T,E=(n("9e5a"),Object(o["a"])(A,_,j,!1,null,"b3460d76",null)),O=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-comment d-flex ml-9"},[n("div",{staticClass:"comment-container d-flex flex-column"},[n("p",{staticClass:"m-0 text-white fs-xxl my-3"},[t._v(t._s(t.content.title))]),n("div",{staticClass:"comment-info d-flex flex-column"},[t._l(t.content.commentList,function(t,e){return n("textarea",{key:e,staticClass:"my-1 bg-none fs-lg text-white py-1 px-2 text-top",attrs:{placeholder:t}})}),n("button",{staticClass:"bt-back-1 bt-nav-1 ripple fs-md py-2 my-2 fw-bold"},[t._v("發送")])],2)])])},k=[],P={props:["content"],data:function(){return{commentIntro:[{height:0,hint:"你的姓名"},{height:0,hint:"E-mail"},{height:0,hint:"主題"},{height:0,hint:"留言內容"}]}}},I=P,$=(n("34b2"),Object(o["a"])(I,S,k,!1,null,"44e1a57a",null)),L=$.exports,B={data:function(){return{rightCommentContent:{title:"Comment",commentList:["你的姓名","E-mail","主題","留言內容"]}}},components:{"my-left-connect":O,"my-right-comment":L}},N=B,D=(n("7095"),Object(o["a"])(N,y,w,!1,null,"a835bf26",null)),M=D.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-bottom d-flex jc-center"},[i("div",{staticClass:"bottom-container d-flex ai-center jc-between h-100"},[i("div",{staticClass:"logo-container "},[i("img",{attrs:{src:n("e59d")}})]),i("div",{staticClass:"intro-container d-flex text-white"},[t._v("© 2019 Self. All rights reserved.")])])])}],R={data:function(){return{}}},F=R,z=(n("c2fa"),Object(o["a"])(F,W,H,!1,null,"59bcf924",null)),V=z.exports,q={data:function(){return{}},components:{"my-footer-top":M,"my-footer-bottom":V}},G=q,U=(n("566d"),Object(o["a"])(G,b,C,!1,null,"b6dc6e12",null)),J=U.exports,Q={data:function(){return{menus:[{title:["About me","Expertise","APP","Photo","Contact me"],link:["home-about","home-talent","home-cllection","home-educate",""]}]}},components:{"my-header":v,"my-footer":J}},Y=Q,K=(n("44b5"),Object(o["a"])(Y,f,d,!1,null,"11d6f1ed",null)),X=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("home-swiper",{attrs:{contents:t.swipers}}),n("home-about"),n("home-ability"),n("home-auto"),n("home-expertise"),n("home-coll"),n("home-edu")],1)},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-swiper"},[n("swiper",{staticClass:"home-swiper-container",attrs:{options:t.swiperOption}},[t._l(t.contents,function(t,e){return n("swiper-slide",{key:e,staticClass:"swiper-slide-home d-flex ai-center"},[n("home-slide-content",{attrs:{text:t}})],1)}),n("div",{staticClass:"swiper-pagination pagination-home mb-3",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},nt=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-swiper swiper-container d-flex jc-center w-100 pb-5",staticStyle:{"z-index":"1"}},[n("div",{staticClass:"home-swiper-content swiper-content d-flex flex-column",staticStyle:{"margin-right":"25%"}},[n("div",{staticClass:"d-flex flex-column"},[n("div",{domProps:{innerHTML:t._s(t.text.templete)}}),n("p",{staticClass:"fs-lgs text-light-grey",staticStyle:{"font-weight":"100"},domProps:{innerHTML:t._s(t.text.content)}})]),t._m(0)])])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-bt d-flex"},[n("button",{staticClass:"bt-1 bt-back-1 bt-nav-1 ripple mr-5 py-2"},[t._v("Learn More")]),n("button",{staticClass:"bt-2 bt-back-2 bt-nav-2 ripple"},[t._v("Get in Touch")])])}],ct={props:["text"],data:function(){return{}}},ot=ct,rt=(n("a4d6"),Object(o["a"])(ot,it,st,!1,null,"df725f70",null)),at=rt.exports,lt={props:["contents"],data:function(){return{swiperOption:{spaceBetween:0,pagination:{el:".pagination-home",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},components:{"home-slide-content":at}},ut=lt,ft=(n("74b9"),Object(o["a"])(ut,et,nt,!1,null,null,null)),dt=ft.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me py-5",attrs:{id:"home-about"}},[n("div",{staticClass:"about-container d-flex flex-column my-2 mx-2"},[n("myTitle",{attrs:{content:t.titleContent}}),n("myIntro",{attrs:{content:t.introContent}})],1)])},mt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container d-flex flex-column ai-center jc-center"},[n("div",{staticClass:"title text-primary fs-xs my-3"},[t._v(t._s(t.content.text))]),n("h4",{staticClass:"text text-dark-grey fs-xxl fw-bold m-0"},[t._v(t._s(t.content.title))])])},xt=[],gt={props:["content"],data:function(){return{}},components:{}},vt=gt,bt=Object(o["a"])(vt,ht,xt,!1,null,"6e033835",null),Ct=bt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro d-flex jc-center ai-center fl-wrap mt-5"},t._l(t.content,function(e,i){return n("div",{key:i,staticClass:"intro-content d-flex flex-column ai-center mx-3 px-4 pt-3"},[n("div",{staticClass:"intro-bg w-100 h-100"}),n("div",{staticClass:"intro-icon d-flex ai-center jc-center"},[n("i",{staticClass:"iconfont fs-xxxl text-white",class:"icon-"+e.icon})]),n("div",{staticClass:"content"},[n("h4",{staticClass:"intro-title text-dark-grey fs-xl fw-bold my-3 text-center"},[t._v(t._s(e.title))]),n("p",{staticClass:"intro-text text-light-grey fs-lgs text-center my-0",domProps:{innerHTML:t._s(e.content)}})])])}),0)},wt=[],_t={props:["content"],data:function(){return{}}},jt=_t,Tt=(n("c868"),Object(o["a"])(jt,yt,wt,!1,null,null,null)),At=Tt.exports,Et={data:function(){return{titleContent:{title:"自我介紹",text:"WHO AM I"},introContent:[{title:"教育經驗",content:"在中正大學擔任過學系服務學習助教,這門課在資管系主要由助教規劃和帶領課程,那時候課程內容是去幼兒園做資訊基礎教學有設計過<strong class='text-primary'>網頁UI排版</strong>和<strong class='text-primary'>認識電腦硬體</strong>兩項課程",icon:"book"},{title:"程式旅程",content:"學過的程式語言有C#、JAVA、C,網頁的部分前端主要熟悉<strong class='text-primary'>Vue</strong>,後端則是Node.js資料庫的話,因為在做side project時都是用mongo所以對非關聯式資料庫比較了解",icon:"code"},{title:"網頁開發",content:"<a href='https://backsideadmin.herokuapp.com/' class='text-primary fw-bold'>後台管理平台</a>: 後端CRUD製作和前端串接API<br><a href='https://john87413.github.io/#/web' class='text-primary fw-bold'>履歷網站</a>:第一份專案,練習RWD<br><a href='/' class='text-primary fw-bold'>個人網站</a>: 主要為練習SEO優化<br>",icon:"web"}]}},components:{myTitle:Ct,myIntro:At}},Ot=Et,St=Object(o["a"])(Ot,pt,mt,!1,null,"2a3b580e",null),kt=St.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ability-container d-flex ai-center jc-center"},[n("left-circle",{attrs:{content:t.leftCircleContent}}),n("right-intro",{attrs:{intros:t.rightIntroContent}})],1)},It=[],$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-container d-flex jc-center mx-5"},[n("div",{staticClass:"circle-content d-flex ai-center"},[n("div",{staticClass:"circle-item-left bg-primary"}),n("div",{staticClass:"circle-item-right bg-white d-flex flex-column jc-center ai-center"},[n("p",{staticClass:"title m-4 text-primary",staticStyle:{"font-size":"7rem"}},[t._v(t._s(t.content.count))]),n("p",{staticClass:"text text-dark-grey fs-xl text-center",domProps:{innerHTML:t._s(t.content.description)}})])])])},Lt=[],Bt={props:["content"],data:function(){return{}}},Nt=Bt,Dt=(n("55e4"),Object(o["a"])(Nt,$t,Lt,!1,null,"17ef2aeb",null)),Mt=Dt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-intro-container d-flex mx-5"},[n("div",{staticClass:"right-intro-content d-flex flex-column"},t._l(t.intros,function(e,i){return n("div",{key:i,staticClass:"right-intro-content-item d-flex flex-column"},[n("p",{staticClass:"title text-primary fs-xxxl my-2",staticStyle:{"font-weight":"900"}},[t._v(t._s(e.count))]),n("p",{staticClass:"text text-dark-grey fs-xlx fw-bold"},[t._v(t._s(e.description))])])}),0)])},Ht=[],Rt={props:["intros"],data:function(){return{}}},Ft=Rt,zt=(n("39d5"),Object(o["a"])(Ft,Wt,Ht,!1,null,null,null)),Vt=zt.exports,qt={data:function(){return{rightIntroContent:[{count:"2",description:"Аpps Developed"},{count:"3",description:"Web Developed"},{count:"1",description:"case"}],leftCircleContent:{count:"3",description:"Years <br> Of Experience"}}},components:{"left-circle":Mt,"right-intro":Vt}},Gt=qt,Ut=(n("c6f7"),Object(o["a"])(Gt,Pt,It,!1,null,null,null)),Jt=Ut.exports,Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auto-container bg-light-grey-1 py-5"},[n("div",{staticClass:"auto-content d-flex jc-around ai-center"},[n("p",{staticClass:"title fs-xxl m-3"},[t._v("自傳與簡歷")]),n("button",{staticClass:"bt-1 bt-back-1 bt-nav-1 ripple fs-xl py-2 fw-bold"},[t._v("查看/下載(PDF)")])])])}],Kt={data:function(){return{}}},Xt=Kt,Zt=(n("ecd8"),Object(o["a"])(Xt,Qt,Yt,!1,null,"374ecab4",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talent",attrs:{id:"home-talent"}},[n("div",{staticClass:"talent-intro d-flex jc-center my-5"},[n("leftThreeCircle",{ref:"circle",attrs:{content:t.leftCircleContent},on:{parentChangeSlide:t.triggerChangeSlide}}),n("rightIntro",{ref:"Intro",attrs:{content:t.rightIntroContent},on:{parentChangeCircle:t.triggerChangeCircle}})],1)])},ne=[],ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"three-circle"},[n("div",{staticClass:"circle-container d-flex flex-column ai-end jc-center mt-4 py-2"},t._l(t.content,function(e,i){return n("div",{key:i,staticClass:"circle-item-1 bg-primary d-flex ai-center jc-center",class:{"circle-item-1-active":t.active===i},on:{click:function(e){return t.changeTalentSlide(i)}}},[n("i",{staticClass:"circle-icon iconfont text-white",class:"icon-"+e.icon})])}),0)])},se=[],ce={props:["content"],data:function(){return{active:0}},methods:{changeTalentSlide:function(t){this.active=t,this.$emit("parentChangeSlide",t)},changeCircle:function(t){this.active=t}}},oe=ce,re=(n("6d5b"),Object(o["a"])(oe,ie,se,!1,null,"1580ea98",null)),ae=re.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-swiper-intro d-flex flex-column ai-center px-2"},[n("mytitle",{staticClass:"talent-title my-4 ml-6",attrs:{content:t.titleContent}}),n("div",{staticClass:"mt-4 d-flex jc-center"},[n("i",{staticClass:"iconfont icon-quote text-primary fs-xlx mr-4 mt-3"}),n("swiper",{ref:"list",staticClass:"swiper-talent d-flex m-5 bg-light-grey-1",attrs:{options:t.swiperOption}},t._l(t.content,function(e,i){return n("swiper-slide",{key:i,staticClass:"swiper-slide-talent d-flex flex-column ai-center jc-center"},[n("p",{staticClass:"title fs-xxl text-dark-grey my-2"},[t._v(t._s(e.title))]),n("p",{staticClass:"text fs-lg text-light-grey my-2 px-4 text-center"},[t._v(t._s(e.text))])])}),1)],1)],1)},ue=[],fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container d-flex flex-column jc-center text-center"},[n("div",{staticClass:"title text-primary fs-lgs my-3 fl-nowrap"},[t._v(t._s(t.content.text))]),n("h4",{staticClass:"text text-dark-grey fs-xxxl fw-bold m-0"},[t._v(t._s(t.content.title))])])},de=[],pe={props:["content"],data:function(){return{}},components:{}},me=pe,he=(n("b7ef"),Object(o["a"])(me,fe,de,!1,null,"cdb0b830",null)),xe=he.exports,ge={props:["content"],data:function(){var t=this;return{titleContent:{title:"專長",text:"what do I expert in"},swiperOption:{on:{slideChange:function(){var e=t.$refs.list.swiper;t.$emit("parentChangeCircle",e.activeIndex)}}}}},methods:{changeSlide:function(t){this.$refs.list.swiper.slideTo(t)}},components:{mytitle:xe}},ve=ge,be=(n("a40e"),Object(o["a"])(ve,le,ue,!1,null,"4ed0abde",null)),Ce=be.exports,ye={data:function(){return{rightIntroContent:[{title:"教案設計",text:"個人教學經驗幾乎從大一到現在都一直有,從一開始的返鄉服務去國小教手語課,再來擔任助教設計課程並帶領大一完成服務學習,最後則是在未來科技教育中心擔任才藝老師,有教過3D列印和樂高,這些經驗都讓我一次一次瞭解到規劃一個國小課程需要兼顧內容深入淺出又有趣,課堂上的掌握度和細心度也是非常重要的"},{title:"網頁前端",text:"個人在整個網頁技術上比較多著墨的地方是前端設計,平時就會看一些codepen或是部落格等等的來增進自己的前端知識與見聞在side project裡幾乎很少用套件,最一開始製作靜態網站時,還自己刻了一個swiper,目前應該只有後台管理那份project是全用element。"},{title:"APP前端",text:"在製作APP這方面,在專題和之後跟同學接case裡,本身的職責都是前端功能與介面製作,所以在APP前端也是花比較多時間的,平常也都會看一些有趣的UI設計和套件來增進自己的實力與見聞"}],leftCircleContent:[{icon:"book"},{icon:"web"},{icon:"APP"}]}},methods:{triggerChangeSlide:function(t){this.$refs.Intro.changeSlide(t)},triggerChangeCircle:function(t){this.$refs.circle.changeCircle(t)}},components:{leftThreeCircle:ae,rightIntro:Ce}},we=ye,_e=(n("50c3"),Object(o["a"])(we,ee,ne,!1,null,"dd8237d4",null)),je=_e.exports,Te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection d-flex flex-column bg-light-grey-1 py-2",attrs:{id:"home-cllection"}},[n("myTitle",{attrs:{content:t.titleContent}}),n("display",{attrs:{bars:t.displayBars,content:t.displayContent}})],1)},Ae=[],Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display-collection d-flex flex-column ai-center"},[n("ul",{staticClass:"display-bar d-flex jc-center mt-5 p-2"},t._l(t.bars,function(e,i){return n("li",{key:i,staticClass:"bar-item mx-3",class:{"bar-item-active":t.active===i},on:{click:function(e){return t.changeDisplayContent(i)}}},[t._v(t._s(e))])}),0),n("div",{staticClass:"display-parent d-flex jc-center fl-wrap my-4"},[n("div",{staticClass:"display-container d-flex jc-start fl-wrap",style:t.containerChange},t._l(t.content,function(e,i){return n("div",{key:i,ref:"element",refInFor:!0,staticClass:"display-content mx-2 my-2",class:{"display-content-change":t.arrDisplayNone.indexOf(i)>-1,"display-none":t.tempNone.indexOf(i)>-1}},[n("div",{staticClass:"content-item content-item-front w-100 h-100"},[n("img",{staticClass:"front-img",attrs:{src:e.imgSrc}})]),n("div",{staticClass:"content-item content-item-back w-100 h-100 d-flex jc-center ai-center"},[n("div",{staticClass:"back-content d-flex flex-column jc-center ai-center"},[n("article",{staticClass:"text-content d-flex flex-column jc-center ai-center"},[n("h5",{staticClass:"title text-white fs-xl my-2 fw-bold"},[t._v(t._s(e.title))]),n("p",{staticClass:"text text-white text-center my-2"},[t._v(t._s(e.text))])]),n("div",{staticClass:"icon-content bg-white my-2 d-flex jc-center ai-center"},[n("i",{staticClass:"iconfont fs-lg text-primary",class:"icon-"+e.icon})])])])])}),0)])])},Oe=[],Se={props:{bars:{type:Array,required:!0},content:{type:Array,required:!0}},data:function(){return{tempNone:[],arrDisplayNone:[],arrDisplay:[0,1,2,3,4,5],active:0,displayContentHeight:23,displayContentCount:3}},created:function(){this.handleResize()},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{handleResize:function(){window.innerWidth<=355?(this.displayContentHeight=18,this.displayContentCount=1):window.innerWidth<=525?(this.displayContentHeight=15,this.displayContentCount=2):window.innerWidth<680?(this.displayContentHeight=27,this.displayContentCount=1):window.innerWidth<800?(this.displayContentHeight=23,this.displayContentCount=2):window.innerWidth<1080?(this.displayContentHeight=25,this.displayContentCount=2):(this.displayContentHeight=23,this.displayContentCount=3)},changeDisplayContent:function(t){if(this.active!==t)switch(this.active=t,t){case 0:this.displayAni([]);break;case 1:this.displayAni([0,1,2]);break;case 2:this.displayAni([3,4,5]);break;case 3:this.displayAni([0,3,4,5]);break;case 4:this.displayAni([0,1,2,4]);break}},delayTempNone:function(){var t=this;return new Promise(function(e){setTimeout(function(){e("我是傳下去的值"),t.tempNone=[]},300)})},displayAni:function(t){var e=this;this.arrDisplayNone=[0,1,2,3,4,5],this.arrDisplay=this.arrDisplayNone.filter(function(e){return-1==t.indexOf(e)}),this.delayTempNone().then(function(){setTimeout(function(){e.arrDisplayNone=t,e.tempNone=t},50)})}},computed:{containerChange:function(){return{height:"".concat(Math.ceil(this.arrDisplay.length/this.displayContentCount)*(this.displayContentHeight+1),"rem")}}}},ke=Se,Pe=(n("f47e"),Object(o["a"])(ke,Ee,Oe,!1,null,"57da8deb",null)),Ie=Pe.exports,$e=n("7b7c"),Le=n.n($e),Be=n("d53c"),Ne=n.n(Be),De=n("bfbf"),Me=n.n(De),We=n("e730"),He=n.n(We),Re=n("2081"),Fe=n.n(Re),ze=n("2c31"),Ve=n.n(ze),qe={data:function(){return{titleContent:{title:"Side Projects",text:"MY WORKS"},displayBars:["ALL","MOBILE_APPS","WEBPAGE","STATIC_WEBPAGE","APP_CASE"],displayContent:[{imgSrc:Le.a,title:"後台管理平台",text:"前端使用了Vue + ElementUI，後端則是MongoDB + Node.js，主要在練習如何串接API。",icon:"arrow-right",target:"QA & TESTING",isNone:!1},{imgSrc:Ne.a,title:"履歷網站-1",text:"這個履歷網站是我第一份side project,這是剛學習Vue框架時做得,主要在練習RWD製作",icon:"arrow-right",target:"QA & TESTING",isNone:!1},{imgSrc:Me.a,title:"履歷網站-2",text:"履歷網站的第二個頁面，當時正在學習vue-router的建置",icon:"arrow-right",target:"CUSTOM SOFTWARE",isNone:!1},{imgSrc:He.a,title:"長照資訊平台",text:"我自己的第一份校內APP CASE,製作一個當地資訊平台,讓長照人員可以快速了解當地資訊,並了解照護者需求。技術方面使用了JAVA + XML",icon:"arrow-right",target:"MOBILE APPS",isNone:!1},{imgSrc:Ve.a,title:"ReLife",text:"大三的專題,當時第一次接觸android app 製作,想做出一個改善生活習慣的APP,寒假自學了一段時間後就開始和同學分工進行,我主要是前端界面和功能。",icon:"arrow-right",target:"QA & TESTING",isNone:!1},{imgSrc:Fe.a,title:"長照資訊平台",text:"這個是長照資訊平台的貼文頁面,這個頁面花了蠻多時間討論和修改的,成果個人覺得也不錯",icon:"arrow-right",target:"MOBILE APPS",isNone:!1}]}},components:{myTitle:Ct,display:Ie}},Ge=qe,Ue=Object(o["a"])(Ge,Te,Ae,!1,null,"5f09fd95",null),Je=Ue.exports,Qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"educate pt-3 pb-4",attrs:{id:"home-educate"}},[n("div",{staticClass:"educate-container d-flex flex-column my-2"},[n("my-title",{attrs:{content:t.titleContent}}),n("my-bar",{attrs:{content:t.barContent},on:{parentChangeSlide:t.triggerChangeSlide}}),n("my-display",{ref:"display",attrs:{content:t.swiperContent}})],1)])},Ye=[],Ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"educate-bar"},[n("div",{staticClass:"bar-container d-flex jc-center ai-center"},[n("ul",{staticClass:"m-0 p-0 mt-5"},t._l(t.content,function(e,i){return n("li",{key:i,staticClass:"bar-item mx-3 fs-lg text-light-grey",class:{"bar-item-active":t.active===i},on:{click:function(e){return t.changeCard(i)}}},[t._v(t._s(e))])}),0)])])},Xe=[],Ze={props:["content"],data:function(){return{active:0}},methods:{changeCard:function(t){this.active=t,this.$emit("parentChangeSlide",t)}}},tn=Ze,en=(n("546c"),Object(o["a"])(tn,Ke,Xe,!1,null,"70f08e96",null)),nn=en.exports,sn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display-card my-3"},[n("div",{staticClass:"card-container d-flex jc-center ai-center"},[n("swiper",{ref:"list",staticClass:"swiper-educate d-flex m-5",attrs:{options:t.swiperOption}},t._l(t.content,function(e,i){return n("swiper-slide",{key:i,staticClass:"d-flex ai-center jc-center fl-wrap"},[n("div",{staticClass:"display-swiper-container d-flex ai-center jc-start fl-wrap"},t._l(e.swiperItem,function(e,i){return n("div",{key:i,staticClass:"card-content mx-3 my-3"},[n("img",{staticClass:"card-img w-100",attrs:{src:e.imgSrc}}),n("article",{staticClass:"card-intro"},[n("div",{staticClass:"intro-date fs-xxs bg-primary text-white py-1 px-2"},[t._v(t._s(e.date))]),n("div",{staticClass:"intro-title text-dark-grey fw-bold fs-lg mx-2 my-2 pt-3"},[t._v(t._s(e.title))]),n("div",[n("p",{staticClass:"intro-text text-light-grey m-0 mx-2 my-2"},[t._v(t._s(e.text))])])])])}),0)])}),1)],1)])},cn=[],on={props:["content"],data:function(){return{swiperOption:{spaceBetween:0,allowTouchMove:!1}}},methods:{changeSlide:function(t){this.$refs.list.swiper.slideTo(t)}}},rn=on,an=(n("ee41"),Object(o["a"])(rn,sn,cn,!1,null,"6b92563f",null)),ln=an.exports,un=n("54bb"),fn=n.n(un),dn=n("3e58"),pn=n.n(dn),mn=n("6d1c"),hn=n.n(mn),xn=n("b49c"),gn=n.n(xn),vn=n("95f4"),bn=n.n(vn),Cn=n("46be"),yn=n.n(Cn),wn=n("9a13"),_n=n.n(wn),jn=n("a3b9"),Tn=n.n(jn),An=n("9d13"),En=n.n(An),On={data:function(){return{titleContent:{title:"Educate",text:"MORE PHOTO ABOUT"},barContent:["樂高-A","樂高-B","樂高-C"],swiperContent:[{swiperItem:[{imgSrc:fn.a,date:"04/01/2019",title:"崇文國小-創意樂高",text:"高年級的小朋友做的一台手動車，這位同學非常認真而且有創意。"},{imgSrc:pn.a,date:"04/14/2019",title:"崇文國小-創意樂高",text:"很Q的小型挖土機，小朋友還會帶自己家裡的樂高來玩。"},{imgSrc:bn.a,date:"04/26/2019",title:"崇文國小-創意樂高",text:"小朋友做的一台升降車，非常厲害喔。"}]},{swiperItem:[{imgSrc:gn.a,date:"10/07/2019",title:"ABC多元教育中心_A",text:"這位小朋友蠻聰明也很有想法，但就是比較愛吵鬧"},{imgSrc:hn.a,date:"10/07/2019",title:"ABC多元教育中心_A",text:"可愛的2年級小朋友做的一台三輪車"},{imgSrc:yn.a,date:"14/07/2019",title:"ABC多元教育中心_A",text:"再教投石器之前先做一個簡單的翹翹板~"}]},{swiperItem:[{imgSrc:_n.a,date:"03/08/2019",title:"ABC多元教育中心_B",text:"裝有方向盤的四輪驅動車，小朋友都非常喜歡做車子呢。"},{imgSrc:Tn.a,date:"03/08/2019",title:"崇文國小-創意樂高",text:"伸縮夾課程!!小朋友學到了剛性與柔性結構也對連桿有基本認識。"},{imgSrc:En.a,date:"11/08/2019",title:"崇文國小-創意樂高",text:"一台很酷的風車，這堂課小朋友都特別聽話。"}]}]}},methods:{triggerChangeSlide:function(t){this.$refs.display.changeSlide(t)}},components:{"my-title":Ct,"my-bar":nn,"my-display":ln}},Sn=On,kn=Object(o["a"])(Sn,Qe,Ye,!1,null,"bc6f259e",null),Pn=kn.exports,In={data:function(){return{swipers:[{templete:"<h1 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>陳俊達<br>個人網站</h1>",content:"現在就讀中正大學資管系四年級<br>兼職未來科技教育中心的才藝老師<br>未來規劃是可以成立個人工作室接網頁case"},{templete:"<h2 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>Web<br>網頁開發</h2>",content:"目前上線過三個side project<br>分別是後台管理平台、履歷網站、個人網站<br>前端皆以Vue為主,後端則是node.js + mongo<br>對網頁製作有需求的朋友歡迎詢問<br>"},{templete:"<h2 class='fs-xxl text-dark-grey my-2' style='line-height: 3rem'>APP<br>JAVA 開發</h2>",content:"從大三專題開始學習android APP開發<br>並在專題做出了作息紀錄APP<br>後來跟同學在校內接了一個APP case<br>主要是幫助長照人員了解當地資訊的平台<br>"}]}},created:function(){},components:{"home-swiper":dt,"home-about":kt,"home-ability":Jt,"home-auto":te,"home-expertise":je,"home-coll":Je,"home-edu":Pn}},$n=In,Ln=Object(o["a"])($n,Z,tt,!1,null,"499a873e",null),Bn=Ln.exports;i["a"].use(u["a"]);var Nn=new u["a"]({routes:[{path:"/",component:X,children:[{path:"/",name:"home",component:Bn}]}]}),Dn=(n("9c65"),n("78a7"),n("7212")),Mn=n.n(Dn);n("dfa4");i["a"].config.productionTip=!1,i["a"].use(Mn.a),i["a"].use(Nn),new i["a"]({router:Nn,render:function(t){return t(l)}}).$mount("#app")},5952:function(t,e,n){"use strict";var i=n("2942"),s=n.n(i);s.a},6032:function(t,e,n){},"60e7":function(t,e,n){},"6d1c":function(t,e,n){t.exports=n.p+"img/3d-3.45052bb3.jpg"},"6d5b":function(t,e,n){"use strict";var i=n("6032"),s=n.n(i);s.a},7095:function(t,e,n){"use strict";var i=n("942b"),s=n.n(i);s.a},"74b9":function(t,e,n){"use strict";var i=n("e608"),s=n.n(i);s.a},"78a7":function(t,e,n){},"7a11":function(t,e,n){},"7b7c":function(t,e,n){t.exports=n.p+"img/web-back.9fc41854.png"},"942b":function(t,e,n){},"95f4":function(t,e,n){t.exports=n.p+"img/Lego-A-2.4cdeae36.jpg"},"9a13":function(t,e,n){t.exports=n.p+"img/Lego-B-1.2251ac7b.jpg"},"9c65":function(t,e,n){},"9d13":function(t,e,n){t.exports=n.p+"img/Lego-B-3.54bfd9f7.jpg"},"9e5a":function(t,e,n){"use strict";var i=n("b71b"),s=n.n(i);s.a},a149:function(t,e,n){},a3b9:function(t,e,n){t.exports=n.p+"img/Lego-B-2.15e16f73.jpg"},a40e:function(t,e,n){"use strict";var i=n("b0a7"),s=n.n(i);s.a},a418:function(t,e,n){},a4d6:function(t,e,n){"use strict";var i=n("a149"),s=n.n(i);s.a},ada1:function(t,e,n){},b0a7:function(t,e,n){},b49c:function(t,e,n){t.exports=n.p+"img/Lego-A-1.58b9060d.jpg"},b71b:function(t,e,n){},b7ef:function(t,e,n){"use strict";var i=n("e42c"),s=n.n(i);s.a},bfbf:function(t,e,n){t.exports=n.p+"img/web-static-2.818181cc.png"},c2fa:function(t,e,n){"use strict";var i=n("3998"),s=n.n(i);s.a},c6f7:function(t,e,n){"use strict";var i=n("2cce"),s=n.n(i);s.a},c868:function(t,e,n){"use strict";var i=n("7a11"),s=n.n(i);s.a},d2be:function(t,e,n){},d53c:function(t,e,n){t.exports=n.p+"img/web-static-1.5db7d27e.png"},d6ec:function(t,e,n){},e42c:function(t,e,n){},e59d:function(t,e,n){t.exports=n.p+"img/self-logo-white.635a694d.png"},e608:function(t,e,n){},e730:function(t,e,n){t.exports=n.p+"img/app-main.9c81ecc4.png"},ecd8:function(t,e,n){"use strict";var i=n("2620"),s=n.n(i);s.a},ee41:function(t,e,n){"use strict";var i=n("efc4"),s=n.n(i);s.a},efc4:function(t,e,n){},f3fc:function(t,e,n){},f47e:function(t,e,n){"use strict";var i=n("3bcb"),s=n.n(i);s.a}});
//# sourceMappingURL=app.d4fad734.js.map