(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5fe5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"river-width",attrs:{padding:""}},[a("div",{staticClass:"self-center"},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"achievements",label:"achievements"}}),a("q-tab",{attrs:{name:"users",label:"Users"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"achievements"}},[a("AchievementAdminComponent")],1),a("q-tab-panel",{attrs:{name:"users"}},[a("div",{staticClass:"text-h6"},[t._v("Users")]),t._v("\n          Under Development\n        ")])],1)],1)],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"full-width",attrs:{padding:""}},[a("div",{staticClass:"self-center"},[a("q-form",{staticClass:"q-mb-lg q-pb-lg"},[a("q-input",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{type:"url",label:"Avatar URL"},model:{value:t.avatar_url,callback:function(e){t.avatar_url=e},expression:"avatar_url"}}),a("q-input",{attrs:{type:"number",label:"Point Value"},model:{value:t.point_value,callback:function(e){t.point_value=e},expression:"point_value"}}),a("div",{staticClass:"full-width text-right q-pt-sm q-pb-lg"},[a("q-btn",{staticClass:"q-mt-sm float-right",attrs:{color:"primary"},on:{click:t.postForm}},[t._v("Submit")])],1)],1),a("h6",[t._v("Achievement Types:")]),a("ul",{staticClass:"q-mt-sm",staticStyle:{"border-top":"1px solid lightgrey"}},t._l(t.achievement_types,(function(e){return a("li",{key:e,staticClass:"row q-mb-sm q-pt-sm q-pb-sm",staticStyle:{"border-bottom":"1px solid lightgrey"}},[a("div",{staticClass:"col col-2"},[a("img",{staticStyle:{height:"75px"},attrs:{src:e.avatar_url}})]),a("div",{staticClass:"col"},[t._v(t._s(e.name))]),a("div",{staticClass:"col"},[t._v(t._s(e.point_value))])])})),0)],1)])},r=[],l=a("c973"),c=a.n(l),o={meta(){return{}},name:"AchievementAdminComponent.vue",components:{},data(){return{achievement_types:[],name:"",avatar_url:"",point_value:""}},methods:{clear:function(){this.name="",this.avatar_url="",this.point_value=""},postForm:function(){var t=c()((function*(){const t="https://concordant-api.herokuapp.com/achievement-types",e={name:this.name,avatar_url:this.avatar_url,point_value:parseInt(this.point_value)};yield this.$axios.post(t,e,{headers:{Accept:"application/json"}}).then(t=>{this.clear(),this.getAchievementTypes(),this.$q.notify({type:"positive",message:"Create Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error creating: "+t})})}));return function(){return t.apply(this,arguments)}}(),getAchievementTypes:function(){var t=c()((function*(){const t="https://concordant-api.herokuapp.com/achievement-types?filter[order]=point_value%20DESC",e=yield this.$axios.get(t);this.achievement_types=e.data}));return function(){return t.apply(this,arguments)}}()},mounted(){this.getAchievementTypes()}},p=o,m=a("2877"),u=Object(m["a"])(p,i,r,!1,null,null,null),v=u.exports,h={meta(){return{}},name:"AdminPage",components:{AchievementAdminComponent:v},data(){return{tab:"achievements"}}},d=h,b=Object(m["a"])(d,s,n,!1,null,null,null);e["default"]=b.exports}}]);