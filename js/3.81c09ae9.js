(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{4157:function(t,e,i){},"8b24":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"flex flex-center"},[i("HomePageAnimations")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"text-center q-pa-lg absolute-center",staticStyle:{"z-index":"2"}},[i("h1",{key:"title",staticClass:"text-white welcome"},[t._v("CONCORDANT.IO")]),i("h4",{key:"sub",staticClass:"q-mb-sm text-white"},[t._v("The treaty building platform")]),i("q-btn",{key:"btn",staticClass:"q-mb-sm",attrs:{to:"/get-started",color:"dark full-width"}},[t._v("GET STARTED")]),i("p",{key:"byline",staticClass:"text-center z-top text-white"},[t._v("Giving PEACE a chance.")])],1),i("canvas",{attrs:{id:"funbars"}}),t._m(0)])},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"home-credit"},[i("a",{staticClass:"text-white text-weight-bold",attrs:{href:"https://codepen.io/towc",target:"_blank"}},[t._v("Animation by Matei Copot")])])}],o=(i("a434"),i("5319"),{meta(){return{title:"The treaty building platform"}},name:"",components:{},data(){return{}},methods:{},mounted(){const t=document.getElementById("funbars");var e=t.width=window.innerWidth,i=t.height=window.innerHeight,n=t.getContext("2d"),s=10,a=30,h=10,o=100,r=4,l=5,c=[],d=0,u=0,w=[[0,1],[1,0],[0,-1],[-1,0],[.7,.7],[.7,-.7],[-.7,.7],[-.7,-.7]],v={x:e/2,y:i/2,vx:0,vy:0,width:h};function m(){c.length=0;for(var t=0;t<r;++t)c.push(new f(v));n.fillStyle="#222",n.fillRect(0,0,e,i)}function y(t){return"hsl( hue, 80%, 50% )".replace("hue",t/e*360+d)}function x(){window.requestAnimationFrame(x),++d,n.shadowBlur=0,n.fillStyle="rgba(0,0,0,.02)",n.fillRect(0,0,e,i),n.shadowBlur=.5;for(var t=0;t<c.length;++t)c[t].step()&&(c.splice(t,1),--t),u++;c.length<o&&u>10&&Math.random()<.5&&(u=0,c.push(new f(v)),n.fillStyle=n.shadowColor=y(v.x),n.beginPath(),n.arc(v.x,v.y,h,0,2*Math.PI),n.fill())}function f(t){this.x=0|t.x,this.y=0|t.y,this.width=t.width/1.25;do{var e=w[Math.random()*w.length|0];this.vx=e[0],this.vy=e[1]}while(this.vx===-t.vx&&this.vy===-t.vy||this.vx===t.vx&&this.vy===t.vy);this.vx*=l,this.vy*=l,this.dist=Math.random()*(a-s)+s}f.prototype.step=function(){var t=!1,h=this.x,r=this.y;if(this.x+=this.vx,this.y+=this.vy,--this.dist,(this.x<0||this.x>e||this.y<0||this.y>i)&&(t=!0),this.dist<=0&&this.width>1&&(this.dist=Math.random()*(a-s)+s,c.length<o&&c.push(new f(this)),c.length<o&&Math.random()<.5&&c.push(new f(this)),Math.random()<.2&&(t=!0)),n.strokeStyle=n.shadowColor=y(this.x),n.beginPath(),n.lineWidth=this.width,n.moveTo(this.x,this.y),n.lineTo(h,r),n.stroke(),t)return!0},m(),x(),window.addEventListener("resize",(function(){e=t.width=window.innerWidth,i=t.height=window.innerHeight,v.x=e/2,v.y=i/2,m()}))}}),r=o,l=(i("c8e5"),i("2877")),c=Object(l["a"])(r,a,h,!1,null,null,null),d=c.exports,u={meta(){return{title:"concordant.io",keywords:{name:"keywords",content:"Quasar website"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},name:"PageIndex",components:{HomePageAnimations:d}},w=u,v=Object(l["a"])(w,n,s,!1,null,null,null);e["default"]=v.exports},c8e5:function(t,e,i){"use strict";var n=i("4157"),s=i.n(n);s.a}}]);