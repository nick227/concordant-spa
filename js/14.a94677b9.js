(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{4750:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"river-width",attrs:{padding:""}},[t.isUser?e("div",{staticClass:"row relative-position",staticStyle:{"z-index":"3"}},[e("q-expansion-item",{staticClass:"dialog-width",staticStyle:{height:"40px"},attrs:{"switch-toggle-side":"","dense-toggle":"",label:"Edit Organization"},model:{value:t.expanded,callback:function(a){t.expanded=a},expression:"expanded"}},[e("EditOrganizationWidget",{attrs:{organization:t.org,reload:t.reload}})],1)],1):t._e(),e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("div",{staticClass:"text-center"},[e("h3",[t._v(t._s(t.org.name))]),e("h6",[t._v(t._s(t.org.description))])]),t.isMember?e("q-btn",{staticClass:"full-width q-mb-md text-black",attrs:{label:"Member Chat",icon:"login",color:"lightgrey",ripple:{center:!0}},on:{click:function(a){t.memberChat=!0}}}):t._e(),e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e("q-img",{staticClass:"full-width q-mt-none",attrs:{src:t.org.avatar_url}})],1)],1),e("q-btn",{staticClass:"full-width q-mb-md",attrs:{label:"Create Conflict",color:"accent",ripple:{center:!0}},on:{click:function(a){t.createConflict=!0}}}),e("q-btn",{staticClass:"full-width",attrs:{label:t.isMember?"Unjoin":"Join",color:t.isMember?"secondary":"primary",ripple:{center:!0}},on:{click:function(a){t.isMember?t.unjoin(t.org.id):t.join(t.org.id)}}}),t.members.length?e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("h6",[t._v("Members "+t._s(t.members.length))]),e("q-list",t._l(t.members,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,attrs:{clickable:"",to:"/profile/"+a.id}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{rounded:""}},[e("img",{attrs:{src:a.avatar_url}})])],1),e("q-item-section",{},[e("div",{},[t._v(t._s(a.name)),e("BR"),t._v(t._s(a.location))],1)])],1)})),1)],1):t._e(),e("q-separator"),t.conflicts.length?e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("h6",[t._v("Conflicts")]),e("q-list",t._l(t.conflicts,(function(a){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,attrs:{clickable:"",to:"/conflict/"+a.id}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{rounded:""}},[e("img",{attrs:{src:a.avatar_url}})])],1),e("q-item-section",{},[e("div",{},[t._v(t._s(a.name)),e("BR"),e("span",{staticClass:"ellipsis-2-lines"},[t._v(t._s(a.description))])],1)])],1)})),1)],1):t._e(),t.org.id?e("CommentsWidget",{attrs:{userOrganizationId:t.org.id,entityId:t.org.id,entityType:"organization"}}):t._e(),e("q-dialog",{staticClass:"z-max",model:{value:t.memberChat,callback:function(a){t.memberChat=a},expression:"memberChat"}},[e("OrganizationChatWidget",{staticClass:"z-max",attrs:{organization:t.org}})],1),e("q-dialog",{model:{value:t.createConflict,callback:function(a){t.createConflict=a},expression:"createConflict"}},[e("CreateConflictWidget",{attrs:{defaultOrgName:t.org.name}})],1)],1)},s=[],r=e("c973"),n=e.n(r),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticClass:"z-max relative-position bg-white full-height",attrs:{view:"Lhh lpR fff",container:""}},[e("q-header",{staticClass:"bg-grey"},[e("q-toolbar",[e("q-toolbar-title",{staticClass:"q-pl-lg text-center"},[t._v(t._s(t.organization.name)+" Chat")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),e("q-page-container",{},[e("q-page",{staticClass:"q-mt-lg",attrs:{padding:""}},[e("q-form",{staticClass:"row",on:{submit:t.addChat}},[e("div",{staticClass:"col col-11"},[e("q-input",{staticClass:"full-width",attrs:{filled:"",required:"",autogrow:"",type:"textarea"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addChat(a)}},model:{value:t.message,callback:function(a){t.message=a},expression:"message"}})],1),e("div",{staticClass:"col col-1 text-center"},[e("q-btn",{staticClass:"q-ml-sm full-height full-width",attrs:{label:"submit",type:"submit",color:"primary"}})],1)]),e("div",{staticClass:"q-pt-md q-mt-md q-pt-lg relative-position overflow-auto",staticStyle:{height:"70vh"}},[t.chats.length?t._e():e("h5",{staticClass:"q-pt-lg q-pl-sm"},[t._v("Be first to comment.")]),t._l(t.chats,(function(a){return e("div",{key:a.id,staticClass:"q-pt-md"},[e("div",{staticClass:"row q-pl-lg"},[e("div",{staticClass:"col col-1 text-center q-pt-sm"},[e("q-avatar",{staticClass:"q-mr-sm"},[e("img",{attrs:{src:a.creator.avatar_url}})])],1),e("div",{staticClass:"col col-11 q-pl-sm q-pr-sm"},[e("router-link",{attrs:{to:"/profile/"+a.creator.id}},[e("div",{},[e("span",{staticClass:"text-bold"},[t._v(t._s(a.creator.name))])])]),e("div",{},[e("span",{staticClass:"text-caption"},[t._v(t._s(t.readyDate(a.create_date)))])]),e("div",[t._v(t._s(a.message))])],1),e("q-separator",{staticClass:"q-mt-md"})],1)])})),t.done?t._e():e("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[e("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)],2)],1)],1)],1)},l=[],c=e("b178"),d={name:"OrganizationChatWidget",components:{},data(){return{pointer:0,limit:8,done:!1,message:"",chats:[]}},props:{organization:{type:Object,required:!0}},methods:{readyDate:function(t){const a=c["b"].getDateDiff(new Date,t,"seconds");return a<60?a+" seconds ago":a<3600?c["b"].getDateDiff(new Date,t,"minutes")+" minutes ago":a<43200?c["b"].getDateDiff(new Date,t,"hours")+" hours ago":c["b"].getDateDiff(new Date,t,"days")+" days ago"},onIntersection:function(t,a){this.pointer=this.pointer+this.limit,this.getChats()},addChat:function(){var t=n()((function*(){const t="https://concordant-api.herokuapp.com/organization-chats",a=this.message;this.message="";const e={message:a,creator_user_id:this.$store.state.user.uid,organization_id:this.organization.id},i=yield this.$axios.post(t,e,{headers:{Accept:"application/json"}}),s=`https://concordant-api.herokuapp.com/organization-chats/${i.data.id}?filter[include][0][relation]=creator`,r=yield this.$axios.get(s);this.chats.unshift(r.data)}));return function(){return t.apply(this,arguments)}}(),getChats:function(){var t=n()((function*(){const t=`https://concordant-api.herokuapp.com/organization-chats?filter[where][organization_id]=${this.organization.id}&filter[include][0][relation]=creator&filter[order]=create_date%20DESC&filter[limit]=${this.limit}&filter[skip]=${this.pointer}`;console.log(t);const a=yield this.$axios.get(t);this.limit>a.data.length&&(this.done=!0),this.chats=this.chats.concat(a.data)}));return function(){return t.apply(this,arguments)}}()},mounted(){this.getChats()}},p=d,u=e("2877"),h=Object(u["a"])(p,o,l,!1,null,null,null),m=h.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-grey-4"},[e("q-form",{staticClass:"q-pa-md bg-grey-4",attrs:{greedy:""},on:{submit:t.postForm}},[e("q-input",{attrs:{filled:"","stack-label":"",label:"Name"},on:{input:t.handleInput},model:{value:t.data_name,callback:function(a){t.data_name=a},expression:"data_name"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",label:"description",name:"description",type:"textarea",autogrow:""},on:{input:t.handleInput},model:{value:t.data_description,callback:function(a){t.data_description=a},expression:"data_description"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",name:"avatar_url",label:"Avatar URL",type:"url"},on:{input:t.handleInput},model:{value:t.data_avatar_url,callback:function(a){t.data_avatar_url=a},expression:"data_avatar_url"}}),e("div",{staticClass:"full-width  text-right q-mt-md"},[e("q-btn",{attrs:{label:"SUBMIT",type:"submit",color:"primary"}})],1)],1)],1)},f=[],v=(e("e01a"),{name:"EditOrganizationWidget",props:["organization","reload"],model:{prop:"name",event:"blur"},watch:{name(t){this.data_name=t},description(t){this.data_description=t},avatar_url(t){this.data_avatar_url=t}},data(){return{data_name:this.organization.name,data_description:this.organization.description,data_avatar_url:this.organization.avatar_url}},mounted(){this.$mount()},methods:{handleInput(t){this.$emit("msgChange",t)},postForm:function(){var t=n()((function*(t){const a={id:this.organization.id,name:this.data_name,description:this.data_description,avatar_url:this.data_avatar_url},e="https://concordant-api.herokuapp.com/organizations/"+this.organization.id;yield this.$axios.patch(e,a).then(t=>{this.reload(),this.$q.notify({type:"positive",message:"Update Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error updating: "+t})})}));return function(a){return t.apply(this,arguments)}}()}}),_=v,b=Object(u["a"])(_,g,f,!1,null,null,null),C=b.exports,q=e("156d"),y=e("9088"),x={meta(){return{title:this.org.name}},name:"Organization",components:{CommentsWidget:y["a"],CreateConflictWidget:q["a"],EditOrganizationWidget:C,OrganizationChatWidget:m},data(){return{memberChat:!1,isUser:!1,expanded:!1,org:{},members:[],conflicts:[],isMember:!1,createConflict:!1}},created(){this.reload()},methods:{reload:function(){var t=n()((function*(){this.expanded=!1,this.loadOrg(),this.loadMembers(),this.loadConflicts()}));return function(){return t.apply(this,arguments)}}(),join:function(){var t=n()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;const a="https://concordant-api.herokuapp.com/user-to-organizations",e={creator_user_id:this.$store.state.user.uid,organization_id:t};yield this.$axios.post(a,e,{headers:{Accept:"application/json"}}),this.reload()}));return function(a){return t.apply(this,arguments)}}(),unjoin:function(){var t=n()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;let a=`https://concordant-api.herokuapp.com/user-to-organizations?filter[where][and][0][creator_user_id]=${this.$store.state.user.uid}&filter[where][and][1][organization_id]=${this.org.id}&filter[fields][id]=true`;const e=yield this.$axios.get(a);a="https://concordant-api.herokuapp.com/user-to-organizations/"+e.data[0].id,yield this.$axios.delete(a),this.reload()}));return function(a){return t.apply(this,arguments)}}(),loadOrg:function(){var t=n()((function*(){const t="https://concordant-api.herokuapp.com/organizations/"+this.$route.params.id,a=yield this.$axios.get(t);this.org=a.data,this.isUser=this.$errorHandler.isLoggedInUser(this.org.creator_user_id)}));return function(){return t.apply(this,arguments)}}(),loadMembers:function(){var t=n()((function*(){const t=`https://concordant-api.herokuapp.com/organizations/${this.$route.params.id}/users`,a=yield this.$axios.get(t);this.members=a.data,this.isMember=this.members.filter(t=>t.id===this.$store.state.user.uid).length>0}));return function(){return t.apply(this,arguments)}}(),loadConflicts:function(){var t=n()((function*(){const t=`https://concordant-api.herokuapp.com/conflicts?filter[where][or][0][organization_a_id]=${this.$route.params.id}&filter[where][or][1][organization_b_id]=${this.$route.params.id}`,a=yield this.$axios.get(t);this.conflicts=a.data}));return function(){return t.apply(this,arguments)}}()}},z=x,k=Object(u["a"])(z,i,s,!1,null,null,null);a["default"]=k.exports}}]);