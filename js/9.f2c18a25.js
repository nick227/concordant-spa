(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{dc2e:function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"river-width",attrs:{padding:""}},[e("q-expansion-item",{attrs:{"switch-toggle-side":"","dense-toggle":"",label:"Create Conflict"},on:{"before-show":t.userCheck},model:{value:t.expanded,callback:function(i){t.expanded=i},expression:"expanded"}},[e("CreateConflictWidget")],1),e("q-list",{attrs:{padding:""}},[e("q-separator"),t.conflicts.length||t.done?t._e():e("h3",{staticClass:"q-ma-lg text-center"},[t._v("LOADING...")]),!t.conflicts.length&&t.done?e("h3",{staticClass:"q-ma-lg text-center"},[t._v("No conflicts found.")]):t._e(),t._l(t.conflicts,(function(i){return e("div",{key:i.id},[e("div",{staticClass:"row q-pl-md q-pr-md"},[e("div",{staticClass:"col col-5"},[e("h6",[t._v(t._s(i.organization_a.name))])]),e("div",{staticClass:"col col-2 text-center"},[e("h6",[t._v("vs.")])]),e("div",{staticClass:"col col-5 text-right"},[e("h6",[t._v(t._s(i.organization_b.name))])])]),e("q-item",{staticClass:"full-width",attrs:{tag:"a",to:"/conflict/"+i.id}},[e("q-card",{staticClass:"full-width"},[e("q-img",{staticClass:"q-mt-none",attrs:{rounded:"",src:i.avatar_url}}),e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(i.name))])]),e("q-card-section",{staticClass:"q-pt-none"},[t._v("\n      "+t._s(i.description)+"\n    ")])],1)],1),e("q-separator")],1)})),t.done?t._e():e("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[e("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)],2)],1)},n=[],a=e("c973"),s=e.n(a),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h6",{staticClass:"q-mb-sm q-mt-lg"},[t._v("New Conflict")]),e("q-form",{staticClass:"q-pa-md bg-grey-4",attrs:{greedy:""},on:{submit:t.postForm}},[e("q-input",{attrs:{filled:"",required:"",placeholder:"Name"},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}}),e("q-separator"),e("q-input",{attrs:{filled:"",required:"",placeholder:"Description",autogrow:"",type:"textarea"},model:{value:t.description,callback:function(i){t.description=i},expression:"description"}}),e("q-separator"),e("q-input",{attrs:{filled:"",required:"",placeholder:"Avatar URL",type:"url"},model:{value:t.avatar_url,callback:function(i){t.avatar_url=i},expression:"avatar_url"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-5 float-left"},[e("q-select",{attrs:{filled:"",required:"",value:t.orgA,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu",options:t.optionsA,placeholder:"Party A"},on:{filter:t.filterFnA,"input-value":t.setModelA},scopedSlots:t._u([{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[t._v("\n            No results\n          ")])],1)]},proxy:!0}])})],1),e("div",{staticClass:"col col-2 text-center q-pt-md"},[t._v("vs.")]),e("div",{staticClass:"col col-5 float-right"},[e("q-select",{attrs:{filled:"",required:"",value:t.orgB,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu",options:t.optionsB,placeholder:"Party B"},on:{filter:t.filterFnB,"input-value":t.setModelB},scopedSlots:t._u([{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[t._v("\n            No results\n          ")])],1)]},proxy:!0}])})],1)]),e("div",{staticClass:"full-width row"},[e("div",{staticClass:"text-left col-8 col text-red q-mt-sm row"}),e("div",{staticClass:"text-right col col-4 q-mt-lg"},[e("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)])],1)],1)},l=[],c=(e("e01a"),e("c975"),{name:"ConflictList",data(){return{orgA:null,orgB:null,organizationsA:[],organizationsB:[],optionsA:[],optionsB:[],organizationsObj:[],name:"",description:"",avatar_url:""}},created(){var t=this;return s()((function*(){t.getOrgs(),t.optionsA=t.organizationsA,t.optionsB=t.organizationsB}))()},methods:{getOrgs:function(){var t=s()((function*(){const t="https://concordant-api.herokuapp.com/organizations?filter[order]=name%20ASC",i=yield this.$axios.get(t);this.organizationsA=this.organizationsB=i.data.map(t=>t.name);for(var e=0,o=i.data.length;e<o;e++)this.organizationsObj[i.data[e].name]=i.data[e].id}));return function(){return t.apply(this,arguments)}}(),filterFnA(t,i,e){i(""!==t?()=>{const i=t.toLocaleLowerCase();this.optionsA=this.organizationsA.filter(t=>t.toLocaleLowerCase().indexOf(i)>-1)}:()=>{this.optionsA=this.organizationsA})},filterFnB(t,i,e){i(""!==t?()=>{const i=t.toLocaleLowerCase();this.optionsB=this.organizationsB.filter(t=>t.toLocaleLowerCase().indexOf(i)>-1)}:()=>{this.optionsB=this.organizationsB})},setModelA(t){this.orgA=t},setModelB(t){this.orgB=t},postForm:function(){var t=s()((function*(){if(!this.$errorHandler.loggedInCheck())return!1;if(this.orgValidate()){const t="https://concordant-api.herokuapp.com/conflicts",i={creator_user_id:this.$store.state.user.uid,name:this.name,description:this.description,organization_a_id:this.organizationsObj[this.orgA],organization_b_id:this.organizationsObj[this.orgB],avatar_url:this.avatar_url},e=yield this.$axios.post(t,i,{headers:{Accept:"application/json"}});this.$router.push("/conflict/"+e.data.id)}}));return function(){return t.apply(this,arguments)}}(),orgValidate:function(){return this.organizationsA.includes(this.orgA)?!!this.organizationsB.includes(this.orgB)||(this.$q.notify({type:"negative",message:"Invalid Party B"}),!1):(this.$q.notify({type:"negative",message:"Invalid Party A"}),!1)}}}),d=c,u=e("2877"),p=Object(u["a"])(d,r,l,!1,null,null,null),h=p.exports,f={meta(){return{title:"Conflicts"}},components:{CreateConflictWidget:h},name:"ConflictList",data(){return{conflicts:[],pointer:0,limit:2,done:!1,loadNum:0,expanded:!1}},created(){var t=this;return s()((function*(){t.loadConflicts()}))()},methods:{userCheck(t){this.$errorHandler.loggedInCheck()||(this.expanded=!1)},onIntersection:function(t,i){this.loadNum>1&&(this.pointer=this.pointer+this.limit,this.loadConflicts()),this.loadNum++},loadConflicts:function(){var t=s()((function*(){const t=`https://concordant-api.herokuapp.com/conflicts?filter[include][0][relation]=organization_a&filter[include][1][relation]=organization_b&filter[order]=create_date%20DESC&filter[limit]=${this.limit}&filter[skip]=${this.pointer}`,i=yield this.$axios.get(t);this.limit>i.data.length&&(this.done=!0),this.conflicts=this.conflicts.concat(i.data)}));return function(){return t.apply(this,arguments)}}()}},g=f,m=Object(u["a"])(g,o,n,!1,null,null,null);i["default"]=m.exports}}]);