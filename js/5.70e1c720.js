(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"106d":function(t,a,e){"use strict";var s=e("4168"),r=e.n(s);r.a},4168:function(t,a,e){},d705:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"justify-center profile-avatar",style:"background-image:url("+this.user.profile_background_url+"); flex-center;display:flex;"},[e("div",{staticClass:"river-width self-center"},[t.isUser?e("div",{staticClass:"row relative-position"},[e("q-expansion-item",{staticClass:"absolute-right z-top q-pr-lg q-mr-lg",attrs:{"switch-toggle-side":"","dense-toggle":"",label:"Edit Profile"},model:{value:t.expanded,callback:function(a){t.expanded=a},expression:"expanded"}},[e("EditProfileWidget",{attrs:{name:t.user.name,avatar_url:t.user.avatar_url,location:t.user.location,biography:t.user.biography,profile_background_url:t.user.profile_background_url,uid:t.user.id,reload:t.reload}})],1)],1):t._e(),e("q-card",{staticClass:"q-pa-lg full-width full-height  bg-semi-trans"},[e("q-card-section",{staticClass:"full-width"},[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e("q-avatar",{staticClass:"q-mr-md q-mb-lg items-start",staticStyle:{width:"100%",height:"400px"},attrs:{square:""}},[e("div",{staticClass:"avatar-image",style:"background-image:url("+t.user.avatar_url+")"})])],1),e("q-card-section",{staticClass:"q-pb-md q-pt-none"},[e("h2",[t._v(t._s(t.user.name))]),e("q-btn",{staticClass:"q-mb-md float-right",staticStyle:{height:"40px"},attrs:{square:"",color:"dark"},on:{click:t.openSendMessage}},[e("q-icon",{attrs:{left:"",size:"2em",name:"mail"}}),e("div",[t._v("Message")])],1),e("h6",{staticClass:"q-pa-none"},[t._v("Location: "+t._s(t.user.location))]),e("p",{staticClass:"q-pa-none",staticStyle:{"max-width":"98%"}},[t._v(t._s(t.user.biography))])],1)],1),e("q-separator"),e("h6",{staticClass:"q-mt-lg q-ml-lg"},[t._v("Treaties:")]),e("div",{staticClass:"row q-pa-lg justify-start content-start"},[t.treaties.length?t._e():e("p",[t._v("No Treaties")]),t._l(t.treaties,(function(a){return e("div",{key:a.id,staticClass:"col col-shrink q-ma-sm"},[e("q-card",{staticClass:"flex-break q-mr-md transparent"},[e("router-link",{attrs:{to:"/treaty/"+a.id}},[e("div",{staticClass:"card-image",style:"background-image:url("+a.avatar_url+")"})]),e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(a.name))])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-btn",{staticClass:"full-width",attrs:{to:"/treaty/"+a.id,color:"dark"}},[t._v("VISIT")])],1)],1)],1)}))],2),t.orgs.length?e("q-separator"):t._e(),e("h6",{staticClass:"q-mt-lg q-ml-lg"},[t._v("Member of:")]),e("div",{staticClass:"row q-pa-lg justify-start content-start"},[t.orgs.length?t._e():e("p",[t._v("No Organizations")]),t._l(t.orgs,(function(a){return e("div",{key:a.id,staticClass:"col col-shrink q-ma-sm"},[e("q-card",{staticClass:"flex-break q-mr-md transparent"},[e("router-link",{attrs:{to:"/organization/"+a.id}},[e("div",{staticClass:"card-image",style:"background-image:url("+a.avatar_url+")"})]),e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(a.name))])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-btn",{staticClass:"full-width",attrs:{to:"/organization/"+a.id,color:"dark"}},[t._v("VISIT")])],1)],1)],1)}))],2),e("q-separator"),t.user.id?e("CommentsWidget",{key:"comments"+t.counter,attrs:{entityId:t.user.id,entityType:"user"}}):t._e()],1),e("q-dialog",{model:{value:t.sendMessage,callback:function(a){t.sendMessage=a},expression:"sendMessage"}},[e("MessageWidget",{attrs:{senderUserId:t.visitorUserId,receiverUserId:t.user.id,receiverName:t.user.name,done:t.closeMsg}})],1)],1)])},r=[],i=e("c973"),n=e.n(i),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-card",{staticClass:"message-card"},[e("q-card-section",{staticClass:"q-pt-none"},[e("q-toolbar",{staticClass:"q-pa-none"},[e("q-toolbar-title",[t._v("Sending to "+t._s(t.receiverName)+":")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-input",{attrs:{label:"Message","lazy-rules":"",outlined:"",clearable:"",rows:"3",autofocus:"",required:"",type:"textarea"},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}})],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"CANCEL",color:"primary"}}),e("q-btn",{attrs:{label:"SEND",color:"primary"},on:{click:t.sendMessage}})],1)],1)],1)},l=[],c=e("7d84"),d={name:"MessageWidget",props:["senderUserId","receiverUserId","receiverName","done"],methods:{sendMessage:function(){var t=n()((function*(){const t="https://concordant-api.herokuapp.com/user-messages",a={text:Object(c["escape"])(this.text),creator_user_id:this.senderUserId,user_id:this.receiverUserId,status:0};yield this.$axios.post(t,a,{headers:{Accept:"application/json"}}).then(()=>{this.$q.notify({type:"positive",message:"Message Send"}),this.text="",this.done()}).catch(t=>{this.$q.notify({type:"negative",message:"Message Failed: "+t})})}));return function(){return t.apply(this,arguments)}}()},data(){return{text:""}}},u=d,p=e("2877"),g=Object(p["a"])(u,o,l,!1,null,null,null),h=g.exports,m=e("9088"),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dialog-width"},[e("q-form",{staticClass:"q-pa-md bg-grey-4",attrs:{greedy:""},on:{submit:t.postForm}},[e("q-input",{attrs:{filled:"","stack-label":"",label:"Name"},on:{input:t.handleInput},model:{value:t.data_name,callback:function(a){t.data_name=a},expression:"data_name"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",label:"Location",name:"location",autogrow:""},on:{input:t.handleInput},model:{value:t.data_location,callback:function(a){t.data_location=a},expression:"data_location"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",label:"Biography",name:"biography",type:"textarea",autogrow:""},on:{input:t.handleInput},model:{value:t.data_biography,callback:function(a){t.data_biography=a},expression:"data_biography"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",name:"avatar_url",label:"Avatar URL",type:"url"},on:{input:t.handleInput},model:{value:t.data_avatar_url,callback:function(a){t.data_avatar_url=a},expression:"data_avatar_url"}}),e("q-separator"),e("q-input",{attrs:{filled:"","stack-label":"",name:"profile_background_url",label:"Profile Background Image",type:"url"},on:{input:t.handleInput},model:{value:t.data_profile_background_url,callback:function(a){t.data_profile_background_url=a},expression:"data_profile_background_url"}}),e("div",{staticClass:"full-width  text-right q-mt-md"},[e("q-btn",{attrs:{label:"SUBMIT",type:"submit",color:"primary"}})],1)],1)],1)},f=[],v=(e("e01a"),{name:"EditProfileWidget",props:["name","biography","avatar_url","location","profile_background_url","uid","reload"],model:{prop:"name",event:"blur"},watch:{name(t){this.data_name=t},biography(t){this.data_biography=t},avatar_url(t){this.data_avatar_url=t},location(t){this.data_location=t},profile_background_url(t){this.data_profile_background_url=t}},data(){return{data_name:this.name,data_description:this.description,data_avatar_url:this.avatar_url,data_location:this.location,data_biography:this.biography,data_profile_background_url:this.profile_background_url}},mounted(){this.data_name=this.name,this.$mount()},methods:{handleInput(t){this.$emit("msgChange",t)},postForm:function(){var t=n()((function*(t){const a={id:this.uid,name:this.data_name,location:this.data_location,biography:this.data_biography,avatar_url:this.data_avatar_url,profile_background_url:this.data_profile_background_url},e="https://concordant-api.herokuapp.com/users/"+this.uid;yield this.$axios.patch(e,a).then(t=>{this.reload(),this.$q.notify({type:"positive",message:"Update Success"})}).catch(t=>{this.$q.notify({type:"negative",message:t})})}));return function(a){return t.apply(this,arguments)}}()}}),b=v,q=Object(p["a"])(b,_,f,!1,null,null,null),y=q.exports,k={meta(){return{title:this.user.name}},components:{EditProfileWidget:y,CommentsWidget:m["a"],MessageWidget:h},name:"Profile",data(){return{treaties:[],user:{},orgs:{},style:"",counter:0,expanded:!1,sendMessage:!1,visitorUserId:this.$store.state.user.uid,isUser:!1,testColor:"green"}},created(){var t=this;return n()((function*(){t.getProfile(),t.getOrganizations(),t.getTreaties()}))()},methods:{openSendMessage:function(){if(!this.$errorHandler.loggedInCheck())return!1;this.sendMessage=!0},closeMsg:function(){this.sendMessage=!1},reload:function(){var t=n()((function*(){this.expanded=!1,this.getProfile()}));return function(){return t.apply(this,arguments)}}(),getProfile:function(){var t=n()((function*(){const t="https://concordant-api.herokuapp.com/users/"+this.$route.params.id,a=yield this.$axios.get(t);this.user=a.data,this.isUser=this.$errorHandler.isLoggedInUser(this.user.id)}));return function(){return t.apply(this,arguments)}}(),getOrganizations:function(){var t=n()((function*(){const t=`https://concordant-api.herokuapp.com/users/${this.$route.params.id}/organizations`,a=yield this.$axios.get(t);this.orgs=a.data}));return function(){return t.apply(this,arguments)}}(),getTreaties:function(){var t=n()((function*(){const t=`https://concordant-api.herokuapp.com/users/${this.$route.params.id}/treaties`,a=yield this.$axios.get(t);this.treaties=a.data}));return function(){return t.apply(this,arguments)}}()}},x=k,C=(e("106d"),Object(p["a"])(x,s,r,!1,null,null,null));a["default"]=C.exports}}]);