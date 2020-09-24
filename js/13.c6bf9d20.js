(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{4750:function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"river-width",attrs:{padding:""}},[e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("div",{staticClass:"text-center"},[e("h3",[t._v(t._s(t.org.name))]),e("h6",[t._v(t._s(t.org.description))])]),e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e("q-img",{staticClass:"full-width q-mt-none",attrs:{src:t.org.avatar_url}})],1)],1),e("q-btn",{staticClass:"full-width",staticStyle:{width:"100px"},attrs:{label:t.isMember?"Unjoin":"Join",color:t.isMember?"secondary":"primary",ripple:{center:!0}},on:{click:function(i){t.isMember?t.unjoin(t.org.id):t.join(t.org.id)}}}),t.members.length?e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("h6",[t._v("Members")]),e("q-list",t._l(t.members,(function(i){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i.id,attrs:{clickable:"",to:"/profile/"+i.id}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{rounded:""}},[e("img",{attrs:{src:i.avatar_url}})])],1),e("q-item-section",{},[e("div",{},[t._v(t._s(i.name)),e("BR"),t._v(t._s(i.location))],1)])],1)})),1)],1):t._e(),e("q-separator"),t.conflicts.length?e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("h6",[t._v("Conflicts")]),e("q-list",t._l(t.conflicts,(function(i){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i.id,attrs:{clickable:"",to:"/conflict/"+i.id}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{rounded:""}},[e("img",{attrs:{src:i.avatar_url}})])],1),e("q-item-section",{},[e("div",{},[t._v(t._s(i.name)),e("BR"),e("span",{staticClass:"ellipsis-2-lines"},[t._v(t._s(i.description))])],1)])],1)})),1)],1):t._e()],1)},a=[],s=e("c973"),n=e.n(s),o={meta(){return{title:this.org.name}},name:"Organization",data(){return{org:{},members:[],conflicts:[],isMember:!1}},mounted(){var t=this;return n()((function*(){t.reload()}))()},methods:{reload:function(){var t=n()((function*(){this.loadOrg(),this.loadMembers(),this.loadConflicts()}));return function(){return t.apply(this,arguments)}}(),join:function(){var t=n()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;const i="http://72.177.0.66:3000//user-to-organizations",e={creator_user_id:this.$store.state.user.uid,organization_id:t};yield this.$axios.post(i,e,{headers:{Accept:"application/json"}}),this.reload()}));return function(i){return t.apply(this,arguments)}}(),unjoin:function(){var t=n()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;let i=`http://72.177.0.66:3000//user-to-organizations?filter[where][and][0][creator_user_id]=${this.$store.state.user.uid}&filter[where][and][1][organization_id]=${this.org.id}&filter[fields][id]=true`;const e=yield this.$axios.get(i);i="http://72.177.0.66:3000//user-to-organizations/"+e.data[0].id,yield this.$axios.delete(i),this.reload()}));return function(i){return t.apply(this,arguments)}}(),loadOrg:function(){var t=n()((function*(){const t="http://72.177.0.66:3000//organizations/"+this.$route.params.id,i=yield this.$axios.get(t);this.org=i.data}));return function(){return t.apply(this,arguments)}}(),loadMembers:function(){var t=n()((function*(){const t=`http://72.177.0.66:3000//organizations/${this.$route.params.id}/users`,i=yield this.$axios.get(t);this.members=i.data,this.isMember=this.members.filter(t=>t.id===this.$store.state.user.uid).length>0}));return function(){return t.apply(this,arguments)}}(),loadConflicts:function(){var t=n()((function*(){const t=`http://72.177.0.66:3000//conflicts?filter[where][or][0][organization_a_id]=${this.$route.params.id}&filter[where][or][1][organization_b_id]=${this.$route.params.id}`,i=yield this.$axios.get(t);this.conflicts=i.data}));return function(){return t.apply(this,arguments)}}()}},l=o,c=e("2877"),d=Object(c["a"])(l,r,a,!1,null,null,null);i["default"]=d.exports}}]);