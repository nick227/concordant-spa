(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"4b09":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"river-width"},[s("h6",{staticClass:"q-mt-lg q-mb-lg q-pa-none text-center"},[t._v("Members")]),s("div",{staticClass:"row q-pl-lg q-pr-lg"},[s("q-separator"),t.users.length||t.done?t._e():s("h3",{staticClass:"q-ma-lg text-center"},[t._v("LOADING...")]),!t.users.length&&t.done?s("h3",{staticClass:"q-ma-lg text-center"},[t._v("No members found.")]):t._e(),t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"col col-shrink info-card q-mb-lg"},[s("q-card",{staticClass:"flex-break q-ma-lg"},[s("div",{staticClass:"card-image",style:"background-image:url("+e.avatar_url+")"}),s("q-card-section",[s("p",{staticClass:"caption"},[t._v(t._s(e.name))]),s("q-badge",{attrs:{outline:"",color:"orange",label:e.location.length>2?e.location:"Unknown"}})],1),s("q-card-section",{staticClass:"q-pt-none"},[s("q-btn",{staticClass:"full-width",attrs:{to:"/profile/"+e.id,color:"primary"}},[t._v("PROFILE")])],1)],1)],1)}))],2),t.done?t._e():s("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)])},n=[],a=s("c973"),r=s.n(a),l={meta(){return{title:"Members"}},name:"MemberListPage",data(){return{users:[],pointer:0,limit:9,done:!1,loadNum:0}},created(){this.getUsers()},methods:{onIntersection:function(t,e){this.loadNum>1&&(this.pointer=this.pointer+this.limit,this.getUsers()),this.loadNum++},getUsers:function(){var t=r()((function*(){const t=`http://localhost:3000/users?filter[limit]=${this.limit}&filter[skip]=${this.pointer}`,e=yield this.$axios.get(t);this.limit>e.data.length&&(this.done=!0),this.users=this.users.concat(e.data)}));return function(){return t.apply(this,arguments)}}()}},o=l,c=s("2877"),d=Object(c["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports}}]);