(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"713b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("TopToolbar"),s("q-page-container",[s("router-view")],1),s("q-ajax-bar",{ref:"bar",attrs:{position:"bottom",color:"accent",size:"10px","skip-hijack":""}})],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-header",{staticClass:"bg-black",attrs:{elevated:"",reveal:""}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),s("q-toolbar-title",{staticStyle:{overflow:"visible"}},[s("span",{staticClass:"cursor-pointer",on:{click:function(t){return e.$router.push("/")}}},[e._v("CONCORDANT.IO")]),e.profile.id?s("q-avatar",{staticClass:"q-ml-lg"},[s("img",{staticClass:"cursor-pointer",attrs:{src:e.profile.avatar_url},on:{click:function(t){return e.showProfile()}}})]):e._e(),e.newMessages?s("q-btn",{staticClass:"q-pa-none q-ml-md",attrs:{round:"",color:"dark",to:"/messages",icon:"email"}},[s("q-badge",{staticStyle:{"font-size":"0.70em"},attrs:{floating:"",color:"accent"}},[e._v("new "+e._s(e.newMessages))])],1):e._e(),e.profile.id?e._e():s("q-btn",{staticClass:"q-ml-lg",staticStyle:{color:"goldenrod"},attrs:{to:"/login",outline:"",label:"Login"}})],1)],1)],1),s("q-drawer",{attrs:{bordered:"",mini:e.miniState,width:200,"content-class":"bg-black text-white"},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[s("q-list",{staticClass:"q-pt-lg"},[s("MainNav",{staticClass:"q-mt-lg"})],1)],1)],1)},n=[],r=s("c973"),l=s.n(r),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-list",e._l(e.navItems,(function(t){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"show",rawName:"v-show",value:t.visible,expression:"item.visible"}],key:t.name,attrs:{clickable:"",tag:t.tagType,to:t.href?t.href:null},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0},click:function(e){t.fn&&t.fn()}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:t.iconName}})],1),s("q-item-section",[s("q-item-label",[e._v(e._s(t.text))])],1)],1)})),1)},u=[],h={name:"MainNav",data(){return{navItems:[{tagType:"a",iconName:"home",href:"/",fn:!1,text:"Home",visible:!0},{tagType:"a",iconName:"flash_on",href:"/conflicts",fn:!1,text:"Conflicts",visible:!0},{tagType:"a",iconName:"article",href:"/treaties",fn:!1,text:"Treaties",visible:!0},{tagType:"a",iconName:"public",href:"/organizations",fn:!1,text:"Organizations",visible:!0},{tagType:"a",iconName:"whatshot",href:"/conversation",fn:!1,text:"Conversation",visible:!0},{tagType:"a",iconName:"email",href:"/messages",fn:!1,text:"Messages",visible:!0},{tagType:"a",iconName:"login",href:"/login",fn:!1,text:"Login",visible:!this.$store.state.user.uid},{tagType:"a",iconName:"logout",fn:this.logout,text:"Logout",visible:this.$store.state.user.uid}],active:"Home"}},methods:{logout(){if(this.$store.commit("user/updateUid",null),this.$store.commit("user/updateAvatar",null),null==this.$hello.getAuthResponse("facebook"))return this.$router.push("/"),!1;this.$hello("facebook").logout().then((function(){window.location.href="/"}),(function(e){alert("Signed out error: "+e.error.message)}))},isLoggedIntoFb(){this.$hello("facebook").api("me").then(e=>{console.log(e)})}}},f=h,p=s("2877"),m=Object(p["a"])(f,c,u,!1,null,null,null),g=m.exports,d={name:"TopToolbar",mounted(){this.getProfile("facebook"),this.checkMessages()},created(){this.$store.subscribe((e,t)=>{"user/updateMsgCount"===e.type&&this.checkMessages()})},components:{MainNav:g},data(){return{profile:{},leftDrawerOpen:!1,miniState:!0,newMessages:!1}},methods:{showProfile:function(){this.$router.push({path:"/profile/"+this.$store.state.user.uid})},getProfile:function(e){if(null==this.$hello.getAuthResponse(e))return!1;this.profile.id=this.$store.state.user.uid,this.profile.avatar_url=this.$store.state.user.avatarUrl},checkMessages:function(){var e=l()((function*(){if(this.profile.id){const e=`https://concordant-api.herokuapp.com/user-messages?filter[where][and][0][user_id]=${this.$store.state.user.uid}&filter[where][and][1][status]=0`,t=yield this.$axios.get(e);this.newMessages=t.data.length,this.newMessages&&this.$store.commit("user/updateMsgCount",this.newMessages)}}));return function(){return e.apply(this,arguments)}}()}},v=d,b=Object(p["a"])(v,o,n,!1,null,null,null),w=b.exports,q={name:"MainLayout",components:{TopToolbar:w},data(){return{prevHeight:0}},methods:{beforeLeave(e){this.prevHeight=getComputedStyle(e).height},enter(e){const{height:t}=getComputedStyle(e);e.style.height=this.prevHeight,setTimeout(()=>{e.style.height=t})},afterEnter(e){e.style.height="auto"}}},y=q,k=Object(p["a"])(y,i,a,!1,null,null,null);t["default"]=k.exports}}]);