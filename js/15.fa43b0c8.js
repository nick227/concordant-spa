(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{d0ea:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"river-width",attrs:{padding:""}},[a("q-btn",{staticClass:"full-width",attrs:{label:"Create Treaty"},on:{click:function(e){return t.openCreateTreaty()}}}),a("h6",{staticClass:"q-mt-lg q-mb-lg q-pa-none text-center"},[t._v("Treaties")]),a("q-list",{staticClass:"row"},[a("q-separator"),t._l(t.treaties,(function(t){return a("div",{key:t.id,staticClass:"col col-shrink  info-card q-mb-lg"},[a("TreatyCardComponent",{attrs:{treaty:t}})],1)})),t.treaties.length||t.done?t._e():a("h5",{staticClass:"q-ma-lg text-center"},[t._v("LOADING...")]),!t.treaties.length&&t.done?a("h5",{staticClass:"q-ma-lg text-center"},[t._v("No treaties found.")]):t._e(),t.done?t._e():a("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],staticClass:"full-width text-center"},[a("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)],2),a("q-dialog",{model:{value:t.createTreaty,callback:function(e){t.createTreaty=e},expression:"createTreaty"}},[a("CreateTreaty",{staticClass:"z-top",attrs:{userOrganizationId:!1,conflictId:!1,reload:t.reload}})],1)],1)},i=[],n=(a("e01a"),a("c973")),o=a.n(n),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"flex-break q-ma-lg"},[a("div",{staticClass:"card-image",style:"background-image:url("+t.treaty.avatar_url+")"}),a("q-card-section",[a("div",{},[t._v(t._s(t.treaty.organization_a.name)+" vs. "+t._s(t.treaty.organization_b.name))]),a("div",{staticClass:"text-h6"},[t._v(t._s(t.treaty.name))]),a("div",{staticClass:"text-caption"},[t._v("Created by: "+t._s(t.treaty.creator_name))]),a("div",{staticClass:"text-caption"},[t._v("Organization: "+t._s(t.treaty.creator_organization_name))]),a("div",[t._v(t._s(t.treaty.provisions.length)+" Provisions")])]),a("q-card-section",[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Visit"},on:{click:function(e){return t.goto("/treaty/"+t.treaty.id)}}})],1),a("q-card-section",[a("q-separator",{staticClass:"q-mt-sm q-mb-sm"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Yay: "+t._s(t.treaty.yay_votes)+" Nay: "+t._s(t.treaty.nay_votes))]),a("div",{staticClass:"col text-right"},[t._v("Rated "+t._s(t.treaty.rating)+"/5")])])],1)],1)},c=[],l={name:"TreatyCardComponent",props:["treaty"],components:{},data(){return{}},methods:{goto:function(t){this.$router.push({path:t})}},mounted(){}},d=l,u=a("2877"),v=Object(u["a"])(d,s,c,!1,null,null,null),_=v.exports,p=a("95fb"),m={meta(){return{title:"Treaties"}},name:"ListTreatyPage",components:{CreateTreaty:p["a"],TreatyCardComponent:_},data(){return{treaties:[],pointer:0,limit:10,done:!1,loadNum:0,createTreaty:!1}},methods:{openCreateTreaty:function(){this.$errorHandler.loggedInCheck()&&(this.createTreaty=!0)},loadTreaties:function(){var t=o()((function*(){const t=`http://localhost:3000/treaties?filter={"skip":${this.pointer},\n                                                     "limit":${this.limit}, \n                                                     "order":["create_date DESC"], \n                                                     "include": [{"relation": "organization"}, \n                                                                 {"relation":"creator"}, \n                                                                 {"relation":"votes"}, \n                                                                 {"relation": "ratings"}, \n                                                                 {"relation": "provisions"}, \n                                                                 {"relation": "conflict", "scope":{"include":[\n                                                                                           {"relation":"organization_a"}, \n                                                                                           {"relation":"organization_b"}]}}]}`,e=yield this.$axios.get(t);this.limit>e.data.length&&(this.done=!0);const a=e.data.map(t=>({id:t.id,name:t.name,description:t.description,avatar_url:t.avatar_url,creator_name:t.creator.name,creator_organization_name:t.organization.name,conflict_id:t.conflict.id,organization_a:t.conflict.organization_a,organization_b:t.conflict.organization_b,grievances:t.conflict.grievances,offers:t.conflict.offers,yay_votes:t.votes?t.votes.filter((function(t){return 1===t.vote_type})).reduce((t,e)=>t+e.vote_type,0):0,nay_votes:t.votes?t.votes.filter((function(t){return 0===t.vote_type})).reduce((t,e)=>t+e.vote_type,0):0,votes:t.votes,provisions:t.provisions||[],rating:t.ratings?Math.round(t.ratings.reduce((t,e)=>t+e.value,0)/t.ratings.length):0}));this.treaties=this.treaties.concat(a)}));return function(){return t.apply(this,arguments)}}(),reload:function(){this.treaties=[],this.loadTreaties(),this.createTreaty=!1},onIntersection:function(t,e){this.loadNum>1&&(this.pointer=this.pointer+this.limit,this.loadTreaties()),this.loadNum++}},created(){var t=this;return o()((function*(){t.reload()}))()},mounted(){}},y=m,h=Object(u["a"])(y,r,i,!1,null,null,null);e["default"]=h.exports}}]);