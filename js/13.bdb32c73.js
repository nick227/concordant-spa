(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0c9c":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"river-width",attrs:{padding:""}},[e("q-expansion-item",{attrs:{"switch-toggle-side":"","dense-toggle":"",label:"Create Organization"},model:{value:t.expanded,callback:function(i){t.expanded=i},expression:"expanded"}},[e("CreateOrganizationWidget",{attrs:{reload:t.reload}})],1),e("h6",{staticClass:"q-mb-sm text-center"},[t._v("Organizations")]),e("q-separator"),e("q-list",{staticClass:"row"},[t.organizations.length||t.done?t._e():e("h5",{staticClass:"q-ma-lg text-center"},[t._v("LOADING...")]),!t.organizations.length&&t.done?e("h5",{staticClass:"q-ma-lg text-center"},[t._v("No organizations found.")]):t._e(),t._l(t.organizations,(function(i){return e("div",{key:i.id,staticClass:"col col-shrink info-card q-mb-lg"},[e("q-card",{staticClass:"flex-break q-ma-lg"},[e("router-link",{attrs:{to:"/organization/"+i.id}},[e("div",{staticClass:"card-image",style:"background-image:url("+i.avatar_url+")"})]),e("q-card-section",[e("router-link",{attrs:{to:"/organization/"+i.id}},[e("div",{staticClass:"text-h6 cursor-pointer"},[t._v(t._s(i.name))])])],1),e("q-card-section",{staticClass:"q-pt-none"},[t._v("\n      "+t._s(i.description)+"\n    ")]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-btn",{staticClass:"full-width",attrs:{label:-1===t.joinedList.indexOf(i.id)?"Join":"Unjoin",color:-1===t.joinedList.indexOf(i.id)?"primary":"secondary",ripple:{center:!0}},on:{click:function(e){return t.joinBtn(i.id)}}})],1)],1)],1)})),t.done?t._e():e("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[e("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)],2)],1)},a=[],o=e("c973"),r=e.n(o),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("q-form",{staticClass:"q-pa-md bg-grey-4",attrs:{greedy:""},on:{submit:t.postForm}},[e("q-input",{attrs:{filled:"",required:"",label:"Name"},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}}),e("q-separator"),e("q-input",{attrs:{filled:"",required:"",label:"Description",autogrow:"",type:"textarea"},model:{value:t.description,callback:function(i){t.description=i},expression:"description"}}),e("q-separator"),e("q-input",{attrs:{filled:"",required:"",label:"Avatar URL"},model:{value:t.avatar_url,callback:function(i){t.avatar_url=i},expression:"avatar_url"}}),e("div",{staticClass:"text-right q-mt-lg"},[e("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)],1)],1)},l=[],c=(e("e01a"),{name:"CreateOrganizationWidget",props:["reload"],data(){return{name:"",description:"",avatar_url:"",organizations:[]}},methods:{postForm:function(){var t=r()((function*(){const t="https://concordant-api.herokuapp.com/organizations",i={creator_user_id:this.$store.state.user.uid,description:this.description,avatar_url:this.avatar_url,name:this.name};console.log(t),console.log(i),yield this.$axios.post(t,i,{headers:{Accept:"application/json"}}).then(t=>{this.clear(),this.reload(),this.$q.notify({type:"positive",message:"Create Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error creating: "+t})})}));return function(){return t.apply(this,arguments)}}(),clear:function(){this.description="",this.name="",this.avatar_url=""}}}),d=c,u=e("2877"),p=Object(u["a"])(d,s,l,!1,null,null,null),h=p.exports,g={meta(){return{title:"Organizations"}},components:{CreateOrganizationWidget:h},name:"OrganizationList",data(){return{joined:[],joinedList:[],organizations:[],expanded:!1,pointer:0,limit:6,done:!1,loadNum:0}},created(){var t=this;return r()((function*(){t.reload()}))()},methods:{goto:function(t){this.$router.push({path:t})},onIntersection:function(t,i){this.loadNum>1&&(this.pointer=this.pointer+this.limit,this.loadOrgs()),this.loadNum++},joinBtn:function(t){this.joinedList.includes(t)?this.unjoin(t):this.join(t)},join:function(){var t=r()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;const i="https://concordant-api.herokuapp.com/user-to-organizations",e={creator_user_id:this.$store.state.user.uid,organization_id:t};yield this.$axios.post(i,e,{headers:{Accept:"application/json"}}),this.joinedList=[],this.loadJoined()}));return function(i){return t.apply(this,arguments)}}(),unjoin:function(){var t=r()((function*(t){const i=this.joined.filter(i=>i.organization_id===t)[0].id,e="https://concordant-api.herokuapp.com/user-to-organizations/"+i;yield this.$axios.delete(e),this.joinedList=[],this.loadJoined()}));return function(i){return t.apply(this,arguments)}}(),reload:function(){this.done=!1,this.expanded=!1,this.joined=[],this.joinedList=[],this.organizations=[],this.loadJoined(),this.loadOrgs()},loadJoined:function(){var t=r()((function*(){if(!this.$store.state.user.uid)return!1;const t="https://concordant-api.herokuapp.com/user-to-organizations?filter[where][creator_user_id]="+this.$store.state.user.uid,i=yield this.$axios.get(t);this.joined=i.data,this.joinedList=i.data.map(t=>t.organization_id)}));return function(){return t.apply(this,arguments)}}(),loadOrgs:function(){var t=r()((function*(){const t=`https://concordant-api.herokuapp.com/organizations?filter[order]=create_date%20DESC&filter[limit]=${this.limit}&filter[skip]=${this.pointer}`,i=yield this.$axios.get(t);this.limit>i.data.length&&(this.done=!0),this.organizations=this.organizations.concat(i.data)}));return function(){return t.apply(this,arguments)}}()}},m=g,f=Object(u["a"])(m,n,a,!1,null,null,null);i["default"]=f.exports}}]);