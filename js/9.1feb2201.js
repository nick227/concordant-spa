(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"8a18":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-width"},[i("div",{staticClass:"row q-pl-lg q-pr-lg"},[i("ActivityCreateWidget",{attrs:{reload:t.reload}}),i("q-space"),t.items.length||t.done?t._e():i("h3",{staticClass:"q-ma-lg text-center"},[t._v("LOADING...")]),!t.items.length&&t.done?i("h3",{staticClass:"q-ma-lg text-center"},[t._v("Nothing found.")]):t._e(),t._l(t.items,(function(t){return i("ActivityCardItem",{key:t.id,attrs:{item:t}})}))],2),t.done?t._e():i("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[i("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)])},a=[],n=i("c973"),r=i.n(n),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-width q-pa-lg"},[i("q-card",{staticClass:"q-pl-lg q-pr-lg q-pb-lg"},[i("q-card-section",{staticClass:"q-pb-md text-center",attrs:{side:""}},[i("div",{staticClass:"q-pb-none"},[t._v(t._s(t.item.creator.name))]),i("q-avatar",{attrs:{round:"",size:"40px"}},[i("img",{attrs:{src:t.item.creator.avatar_url}})])],1),i("q-card-section",{staticClass:"q-pa-none text-center",attrs:{side:""}},[i("div",{staticClass:"q-pb-lg",domProps:{innerHTML:t._s(t.readyMessage)}})])],1)],1)},c=[],l=i("c80c"),d={name:"ActivityCardItem",mixins:[l["a"]],props:["item"],data(){return{}},computed:{readyMessage:function(){return this.checkStr(this.item.message)}},mounted(){}},u=d,m=i("2877"),p=Object(m["a"])(u,o,c,!1,null,null,null),h=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-lg full-width"},[i("q-form",{on:{submit:t.postActivity}},[i("q-editor",{staticClass:"full-width bg-blue-grey-2",attrs:{flat:"",height:"100px","content-class":"bg-white-5","toolbar-text-color":"black","toolbar-toggle-color":"grey-8",placeholder:"What's up?","toolbar-bg":"grey-4",toolbar:[["bold","italic","underline"],[{label:t.$q.lang.editor.formatting,icon:t.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h3","h4","h5","h6","code"]}]]},model:{value:t.newActivity,callback:function(e){t.newActivity=e},expression:"newActivity"}}),i("div",{staticClass:"row"},[i("q-space"),i("q-btn",{attrs:{type:"submit",color:"primary q-mt-sm full-width"}},[t._v("submit")])],1)],1)],1)},g=[],f={name:"ActivityCreateWidget",props:["reload"],components:{},data(){return{newActivity:""}},methods:{postActivity:function(){var t=r()((function*(){const t="https://concordant-api.herokuapp.com/activities",e={creator_user_id:this.$store.state.user.uid,message:this.newActivity};yield this.$axios.post(t,e,{headers:{Accept:"application/json"}}),this.newActivity="",this.reload()}));return function(){return t.apply(this,arguments)}}()}},y=f,q=Object(m["a"])(y,v,g,!1,null,null,null),b=q.exports,w={meta(){return{title:"Activity"}},name:"ActivityListPage",components:{ActivityCreateWidget:b,ActivityCardItem:h},data(){return{items:[],pointer:0,limit:9,done:!1,loadNum:0}},created(){this.getItems()},methods:{onIntersection:function(t,e){this.loadNum>1&&(this.pointer=this.pointer+this.limit,this.getItems()),this.loadNum++},reload:function(){this.pointer=0,this.done=!1,this.items=[],this.getItems()},getItems:function(){var t=r()((function*(){const t=`https://concordant-api.herokuapp.com/activities?filter[limit]=${this.limit}&filter[skip]=${this.pointer}&filter[include][][relation]=creator&filter[order]=create_date%20DESC`,e=yield this.$axios.get(t);console.log(t),this.limit>e.data.length&&(this.done=!0),this.items=this.items.concat(e.data),console.log(this.items)}));return function(){return t.apply(this,arguments)}}()},mounted(){}},C=w,_=Object(m["a"])(C,s,a,!1,null,null,null);e["default"]=_.exports}}]);