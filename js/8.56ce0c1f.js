(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"62cc":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("q-page",{staticClass:"river-width flex flex-center"},[n("div",{staticClass:"q-mt-xl"},[n("q-btn",{staticClass:"full-width",attrs:{color:"primary",push:"",icon:"facebook",label:"Login with Facebook",size:"md"},on:{click:function(o){return t.auth("facebook")}}}),t.isLocal()?n("q-btn",{staticClass:"full-width q-mt-sm text-black",attrs:{color:"white",push:"",icon:"login",label:"Login as Admin",size:"md"},on:{click:function(o){return t.adminlogin()}}}):t._e(),n("div",{staticClass:"text-caption text-center q-pa-lg"},[t._v("We collect no personal information!")])],1)])},i=[],s=(n("c975"),n("c973")),a=n.n(s),c={meta(){return{title:"Login"}},name:"Login",methods:{isLocal:function(){return window.location.href.indexOf("localhost")>-1},adminlogin:function(){const t={id:"10158432748220049"};this.checkUser(t)},auth:function(){var t=a()((function*(t){this.$hello(t).login().then(o=>{this.$hello(t).api("me").then(t=>{this.checkUser(t)})})}));return function(o){return t.apply(this,arguments)}}(),checkUser:function(){var t=a()((function*(t){console.log("check:"),console.log(t),console.log("^^^^^"),this.$q.loading.show({message:"Logging in"});const o="https://concordant-api.herokuapp.com/users?filter[where][facebook_uuid]="+t.id,n=yield this.$axios.get(o);console.log(o),console.log("----"),n.data.length?this.addStoreUser(n):this.addDbUser(t)}));return function(o){return t.apply(this,arguments)}}(),addDbUser:function(){var t=a()((function*(t){const o="https://concordant-api.herokuapp.com/users",n={name:t.name,avatar_url:t.picture,facebook_uuid:t.id};console.log(o),console.log(n);const e=this;this.$axios.post(o,n).then((function(t){e.addStoreUser(t)})).catch((function(t){e.$q.notify({type:"negative",icon:"error",message:"DB Error:"+t})}))}));return function(o){return t.apply(this,arguments)}}(),addStoreUser:function(){var t=a()((function*(t){console.log("res:"),console.log(t),this.$store.commit("user/updateName",t.data[0].name),this.$store.commit("user/updateUid",t.data[0].id),this.$store.commit("user/updateAvatar",t.data[0].avatar_url)}));return function(o){return t.apply(this,arguments)}}()}},r=c,l=n("2877"),u=Object(l["a"])(r,e,i,!1,null,null,null);o["default"]=u.exports}}]);