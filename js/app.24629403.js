(function(e){function n(n){for(var r,o,i=n[0],c=n[1],l=n[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={2:0},a={2:0},u=[];function i(e){return c.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"b0c68949",3:"81c09ae9",4:"1005c5a6",5:"07c6db2e",6:"992b5692",7:"cbcbcc25",8:"daeac27a",9:"c8ee9962",10:"99b8651c",11:"0bf21708",12:"924eb4a6",13:"b440a3c6",14:"dd5219f7",15:"bb552db9",16:"314c5902"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={3:1,4:1,5:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"31d6cfe0",3:"25a95286",4:"69c2fcb8",5:"b5fa0b04",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),t(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;u.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"uid",(function(){return P})),t.d(r,"avatar",(function(){return C})),t.d(r,"unreadMsgCount",(function(){return j}));var o={};t.r(o),t.d(o,"updateUid",(function(){return O})),t.d(o,"updateAvatar",(function(){return E})),t.d(o,"updateName",(function(){return k})),t.d(o,"updateMsgCount",(function(){return x})),t.d(o,"default",(function(){return S}));t("5319");var a=t("c973"),u=t.n(a),i=(t("7d6e"),t("e54f"),t("4848"),t("64f7"),t("c382"),t("985d"),t("31cd"),t("2b0e")),c=t("1f91"),l=t("42d2"),s=t("b178");i["a"].use(s["c"],{config:{},lang:c["a"],iconSet:l["a"]});var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},f=[],p={name:"App"},h=p,m=t("2877"),b=Object(m["a"])(h,d,f,!1,null,null,null),g=b.exports,v=t("2f62"),y=t("0e44"),w=function(){return{uid:null,avatarUrl:null,name:null,organizations:[],location:null}};function P(e){return e.uid}function C(e){return e.avatarUrl}function j(e){return e.unreadMsgCount}const O=(e,n)=>{e.uid=n},E=(e,n)=>{e.avatarUrl=n},k=(e,n)=>{e.name=n},x=(e,n)=>{e.unreadMsgCount=n};var S=function(){return{uid:!0,avatarUrl:!0,name:null,organizations:[],location:null,unreadMsgCount:null}},_=t("439d"),M={namespaced:!0,state:w,getters:r,mutations:o,actions:_};i["a"].use(v["a"]);var A=function(){const e=new v["a"].Store({modules:{user:M},plugins:[Object(y["a"])()],strict:!1});return e},L=t("8c4f");t("e6cf");const T=[{path:"/",component:()=>t.e(6).then(t.bind(null,"713b")),children:[{path:"",component:()=>t.e(3).then(t.bind(null,"8b24"))},{path:"/conflicts",component:()=>Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,"dc2e"))},{path:"/conflict/:id",component:()=>Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,"6346"))},{path:"/organizations",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"0c9c"))},{path:"/organization/:id",component:()=>Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,"4750"))},{path:"/treaties",component:()=>Promise.all([t.e(0),t.e(1),t.e(15)]).then(t.bind(null,"d0ea"))},{path:"/treaty/:id",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"295b"))},{path:"/members",component:()=>t.e(12).then(t.bind(null,"4b09"))},{path:"/admin/",component:()=>t.e(9).then(t.bind(null,"5fe5"))},{path:"/profile/:id",component:()=>Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,"d705"))},{path:"/login",component:()=>t.e(8).then(t.bind(null,"62cc"))},{path:"/get-started",component:()=>t.e(16).then(t.bind(null,"f845"))},{path:"/activity",component:()=>t.e(1).then(t.bind(null,"8a18"))},{path:"/messages",component:()=>t.e(4).then(t.bind(null,"0b3a"))}]}];T.push({path:"*",component:()=>t.e(7).then(t.bind(null,"c159"))});var U=T;i["a"].use(L["a"]);var z=function(){const e=new L["a"]({scrollBehavior:()=>({x:0,y:0}),routes:U,mode:"history",base:"/"});return e},N=function(){return I.apply(this,arguments)};function I(){return I=u()((function*(){const e="function"===typeof A?yield A({Vue:i["a"]}):A,n="function"===typeof z?yield z({Vue:i["a"],store:e}):z;e.$router=n;const t={router:n,store:e,render:e=>e(g),el:"#q-app"};return{app:t,store:e,router:n}})),I.apply(this,arguments)}var V=t("bc3a"),$=t.n(V);i["a"].prototype.$axios=$.a;var q=t("616b"),B=t.n(q),D=({Vue:e})=>{B.a.init({facebook:"242471600360312"}),e.prototype.$hello=B.a};const H=A(),J={loginError:"Please login to continue",orgError:"You must join an organization"};var F=function(){var e=u()((function*({Vue:e}){const n={loggedInCheck:function(){return"number"===typeof H.state.user.uid||(s["a"].create({type:"negative",icon:"error",message:J.loginError}),!1)},isLoggedInUser:function(e){return e===H.state.user.uid},isLoggedIn:function(){return"number"===typeof H.state.user.uid},organizationCheck:function(e){return!!this.loggedInCheck()&&("number"===typeof e||(s["a"].create({type:"negative",icon:"error",message:J.orgError}),!1))}};e.prototype.$errorHandler=n}));return function(n){return e.apply(this,arguments)}}();const K="/";function Q(){return Y.apply(this,arguments)}function Y(){return Y=u()((function*(){const{app:e,store:n,router:t}=yield N();let r=!1;const o=e=>{r=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},a=window.location.href.replace(window.location.origin,""),u=[void 0,D,F];for(let l=0;!1===r&&l<u.length;l++)if("function"===typeof u[l])try{yield u[l]({app:e,router:t,store:n,Vue:i["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:K})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new i["a"](e)})),Y.apply(this,arguments)}Q()},"31cd":function(e,n,t){},"439d":function(e,n){}});