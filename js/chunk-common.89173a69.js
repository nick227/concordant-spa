(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"21e4":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-right"},[i("div",{staticClass:"caption"},[t._v(t._s(t.numRatings)+" ratings")]),i("q-rating",{attrs:{size:"2em",max:5,color:"primary",readonly:t.readonly},on:{click:t.postForm},scopedSlots:t._u([{key:"tip-1",fn:function(){return[i("q-tooltip",[t._v("Worst")])]},proxy:!0},{key:"tip-2",fn:function(){return[i("q-tooltip",[t._v("Okay")])]},proxy:!0},{key:"tip-3",fn:function(){return[i("q-tooltip",[t._v("Good")])]},proxy:!0},{key:"tip-4",fn:function(){return[i("q-tooltip",[t._v("Great")])]},proxy:!0},{key:"tip-5",fn:function(){return[i("q-tooltip",[t._v("Best")])]},proxy:!0}]),model:{value:t.ratingVal,callback:function(e){t.ratingVal=e},expression:"ratingVal"}})],1)},n=[],a=i("c973"),o=i.n(a),r={name:"RatingWidget",props:["entityId","userOrganizationId","entityType","readonly"],data(){return{ratingVal:0,numRatings:0,ratings:[]}},mounted(){this.getRating()},methods:{getRating:function(){var t=o()((function*(){const t=`https://concordant-api.herokuapp.com/${this.entityType}-ratings/?filter[where][${this.entityType}_id]=${this.entityId}&filter[fields][value]=true`,e=yield this.$axios.get(t);this.ratings=e.data,this.numRatings=this.ratings.length,this.ratingVal=Math.round(this.ratings.reduce((t,e)=>t+e.value,0)/this.ratings.length)}));return function(){return t.apply(this,arguments)}}(),postForm:function(){var t=o()((function*(t){if(!this.$errorHandler.organizationCheck(this.userOrganizationId))return!1;const e=`https://concordant-api.herokuapp.com/${this.entityType}-ratings`,i={creator_user_id:this.$store.state.user.uid,organization_id:parseInt(this.userOrganizationId),value:this.ratingVal};i[this.entityType+"_id"]=parseInt(this.entityId),yield this.$axios.post(e,i,{headers:{Accept:"application/json"}}).then(t=>{this.getRating(),this.$q.notify({type:"positive",message:"Rating added"})}).catch(t=>{this.$q.notify({type:"negative",message:t})})}));return function(e){return t.apply(this,arguments)}}()}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},"3cc5":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row",staticStyle:{width:"60px"}},[i("div",{staticClass:"col col-6 text-center"},[i("div",[i("q-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.readonly?"":"cursor-pointer",attrs:{name:"thumb_up",color:"blue"},on:{click:t.like}})],1),i("div",[i("span",{staticClass:"text-weight-bolder"},[t._v(t._s(t.numLikes))])])]),i("div",{staticClass:"col col-6 text-center"},[i("div",{attrs:{ripple:""}},[i("q-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.readonly?"":"cursor-pointer",attrs:{name:"thumb_down",color:"red"},on:{click:t.dislike}})],1),i("div",[i("span",{staticClass:"text-weight-bolder"},[t._v(t._s(t.numDislikes))])])])])},n=[],a=i("c973"),o=i.n(a),r={name:"LikeButtons",props:["entityType","entityId","organizationId","organizationName","readonly"],data(){return{numLikes:0,numDislikes:0,org_a:{},org_b:{}}},methods:{like:function(){var t=o()((function*(){this.update(1)}));return function(){return t.apply(this,arguments)}}(),dislike:function(){this.update(0)},update:function(){var t=o()((function*(t){if(!this.$errorHandler.loggedInCheck())return!1;if(!this.$errorHandler.organizationCheck(this.organizationId))return!1;if(this.readonly)return this.$q.notify({type:"negative",message:"Wrong Organization"}),!1;const e=`https://concordant-api.herokuapp.com/${this.entityType}-likes`,i={creator_user_id:this.$store.state.user.uid,organization_id:this.organizationId,liked:t};i[this.entityType+"_id"]=this.entityId,console.log(e),console.log(i),yield this.$axios.post(e,i,{headers:{Accept:"application/json"}}),this.getLikes()}));return function(e){return t.apply(this,arguments)}}(),getLikes:function(){var t=o()((function*(){const t=`https://concordant-api.herokuapp.com/${this.entityType}-likes?filter[where][and][0][${this.entityType}_id]=${this.entityId}&filter[where][and][1][organization_id]=${this.organizationId}`,e=yield this.$axios.get(t);this.numLikes=0,this.numDislikes=0;for(let i=0;i<e.data.length;i++)1===e.data[i].liked&&(this.numLikes=this.numLikes+1),0===e.data[i].liked&&(this.numDislikes=this.numDislikes+1)}));return function(){return t.apply(this,arguments)}}()},mounted(){this.getLikes()}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},"5f68":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col bg-blue-grey-1 col-12 q-pl-lg q-pr-lg q-pt-sm q-pb-sm row flex-center"},[i("h6",{staticClass:"q-ma-lg"},[t._v("Do you agree to this treaty?")]),i("div",{staticClass:"row flex-center text-center",staticStyle:{"flex-wrap":"nowrap","white-space":"nowrap"}},[i("q-btn",{staticClass:"q-mr-sm",attrs:{padding:"lg",color:"positive",round:"",label:"AYE"},on:{click:function(e){return t.confirm(1)}}}),i("q-btn",{staticClass:"q-ma-md",attrs:{padding:"lg",color:"negative",round:"",label:"NAY"},on:{click:function(e){return t.confirm(0)}}})],1)]),i("q-separator"),i("div",{staticClass:"row text-center justify-center full-width"},[i("div",{staticClass:"text-right col q-pr-lg"},[t._v("total:")]),i("div",{staticClass:"text-green q-mr-md"},[t._v(t._s(t.num_yay)+" Yay")]),i("div",[t._v("/")]),i("div",{staticClass:"text-red q-ml-md"},[t._v(t._s(t.num_nay)+" Nay")])]),i("div",{staticClass:"row text-center justify-center full-width"},[i("div",{staticClass:"text-right col q-pr-lg"},[t._v(t._s(t.orgAname)+":")]),i("div",{staticClass:"text-green q-mr-md"},[t._v(t._s(t.org_a_votes.yay)+" Yay")]),i("div",[t._v("/")]),i("div",{staticClass:"text-red q-ml-md"},[t._v(t._s(t.org_a_votes.nay)+" Nay")])]),i("div",{staticClass:"row text-center justify-center full-width"},[i("div",{staticClass:"text-right col q-pr-lg"},[t._v(t._s(t.orgBname)+":")]),i("div",{staticClass:"text-green q-mr-md"},[t._v(t._s(t.org_b_votes.yay)+" Yay")]),i("div",[t._v("/")]),i("div",{staticClass:"text-red q-ml-md"},[t._v(t._s(t.org_b_votes.nay)+" Nay")])]),i("q-dialog",{attrs:{persistent:""},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("q-avatar",{attrs:{icon:"done_outline",color:"primary","text-color":"white"}}),i("span",{staticClass:"q-ml-sm"},[t._v("Are you sure?")])],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Vote "+t.voteTxt,color:"primary"},on:{click:t.vote}})],1)],1)],1)],1)},n=[],a=i("c973"),o=i.n(a),r={name:"TreatyVoteWidget",props:["id","userOrganizationId","votes","reload","orgAname","orgBname"],data(){return{count:0,voteVal:null,verify:!1,voteTxt:null}},computed:{org_a_votes:function(){return{yay:this.votes.filter(t=>1===t.vote&&t.organization===this.orgAname).length,nay:this.votes.filter(t=>0===t.vote&&t.organization===this.orgAname).length}},org_b_votes:function(){return{yay:this.votes.filter(t=>1===t.vote&&t.organization===this.orgBname).length,nay:this.votes.filter(t=>0===t.vote&&t.organization===this.orgBname).length}},num_yay:function(){return this.votes.filter(t=>1===t.vote).length},num_nay:function(){return this.votes.filter(t=>0===t.vote).length}},methods:{confirm:function(){var t=o()((function*(t){this.voteVal=t,this.voteTxt=t?"Yay":"Nay",this.verify=!0}));return function(e){return t.apply(this,arguments)}}(),vote:function(){var t=o()((function*(){const t="https://concordant-api.herokuapp.com/votes",e={creator_user_id:this.$store.state.user.uid,treaty_id:parseInt(this.id),organization_id:parseInt(this.userOrganizationId),vote_type:this.voteVal};yield this.$axios.post(t,e,{headers:{Accept:"application/json"}}).then(()=>{this.reload(),this.$q.notify({type:"positive",message:"Vote Received"})}).catch(t=>{this.$q.notify({type:"negative",message:"Voting error: "+t})})}));return function(){return t.apply(this,arguments)}}()}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},"65d1":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row q-mb-sm"},[i("div",{staticClass:"col col-1 text-center"},[i("h4",{staticClass:"border text-center q-pa-sm bg-blue-grey-1"},[t._v(t._s(t.index+1))])]),i("div",{staticClass:"col text-left q-pl-md"},[i("h6",{staticClass:"q-pa-none"},[t._v(t._s(t.title)+"\n        "),t.isUser?i("q-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cursor-pointer",attrs:{name:"edit",clickable:"",size:"13px"}}):t._e(),i("q-popup-edit",{attrs:{buttons:"",validate:t.edit},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[i("q-input",{attrs:{validate:t.edit,"auto-save":"","label-set":"Save",dense:"",autofocus:"",counter:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),i("p",{staticClass:"q-pa-none"},[t._v(t._s(t.description)+" "),t.isUser?i("q-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cursor-pointer",attrs:{name:"edit",clickable:"",size:"13px"}}):t._e(),i("q-popup-edit",{attrs:{buttons:"",validate:t.edit},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}},[i("q-input",{attrs:{"auto-save":"","label-set":"Save",dense:"",autofocus:"",counter:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)]),i("div",{staticClass:"col col-1 q-pt-sm"},[i("LikeButtons",{staticClass:"float-right",attrs:{entityType:"provision",entityId:t.provision.id,organizationId:t.userOrganizationId}})],1)]),i("CommentsWidget",{attrs:{entityId:t.provision.id,entityType:"provision",userOrganizationId:t.userOrganizationId}})],1)},n=[],a=(i("e01a"),i("c973")),o=i.n(a),r=i("9088"),l=i("3cc5"),c={name:"TreatyProvisionComponent",props:["provision","index","userOrganizationId","creatorId"],components:{LikeButtons:l["a"],CommentsWidget:r["a"]},data(){return{title:this.provision.title,description:this.provision.description,id:this.provision.id,isUser:this.$errorHandler.isLoggedInUser(this.creatorId)}},methods:{edit:function(){var t=o()((function*(t){const e="https://concordant-api.herokuapp.com/treaty-provisions/"+this.id,i={title:this.title,description:this.description};yield this.$axios.patch(e,i).then(t=>{this.$q.notify({type:"positive",message:"Update Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error Saving: "+t})})}));return function(e){return t.apply(this,arguments)}}()},mounted(){}},p=c,d=i("2877"),u=Object(d["a"])(p,s,n,!1,null,null,null);e["a"]=u.exports},"7b0ba":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row full-width"},[i("q-table",{staticClass:"full-width align-left table q-pa-sm",attrs:{title:"",dense:"",flat:"",data:t.votes,filter:t.filter,columns:t.columns,"row-key":"id",pagination:t.initialPagination,columns_filter:!0},scopedSlots:t._u([{key:"top-right",fn:function(){return[i("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0}])})],1)},n=[],a=i("b178"),o={name:"TreatyVotesTable",props:["votes","id"],data(){return{filter:"",columns:[],initialPagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:50}}},methods:{setupTable:function(){this.columns=[{name:"vote",label:"Vote",field:"vote",format:t=>t?"Yay":"Nay",sortable:!0,align:"left",class:"q-pa-sm"},{name:"name",label:"Name",field:"name",align:"left",sortable:!0,class:"q-pa-sm"},{name:"location",label:"Location",field:"location",sortable:!0,align:"left",class:"q-pa-sm"},{name:"organization",label:"Organization",field:"organization",sortable:!0,align:"left",class:"q-pa-sm",filter_type:"select"},{name:"date",label:"Date",field:"date",sortable:!0,align:"left",format:t=>a["b"].formatDate(t,"M/D/YY"),class:"q-pa-sm"}]}},created(){this.setupTable()}},r=o,l=i("2877"),c=Object(l["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},9088:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-expansion-item",{staticClass:"bg-grey-trans",attrs:{"dense-toggle":"",icon:"comment",label:"Comments "+t.commentCount},on:{click:t.loadComments}},[i("div",{staticClass:"q-pa-md full-width"},[i("q-form",{on:{submit:t.postComment}},[i("q-input",{staticClass:"bg-grey-5",attrs:{filled:"",type:"textarea",required:"",autogrow:"",placeholder:"Type comment here"},model:{value:t.newComment,callback:function(e){t.newComment=e},expression:"newComment"}}),i("div",{staticClass:"row"},[i("q-space"),i("q-btn",{attrs:{type:"submit",color:"primary q-mt-lg"}},[t._v("submit")])],1)],1)],1),i("q-separator"),i("q-list",[t.comments.length?t._e():i("div",{staticClass:"text-center q-pa-lg"},[t._v("no comments")]),t._l(t.readyComments,(function(e){return i("q-item",{key:e.id,staticClass:"q-pl-lg q-pr-lg q-ma-sm",staticStyle:{"border-bottom":"1px solid rgba(0, 0, 0, 0.12)"}},[i("q-item-section",{attrs:{top:"",avatar:""}},[i("q-avatar",{staticClass:"q-mr-md",attrs:{round:"",size:"75px"}},[i("img",{staticClass:"avatar",attrs:{round:"",src:e.creator.avatar_url}})])],1),i("q-item-section",[i("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.create_date))]),i("q-item-label",{staticClass:"text-h6"},[t._v(t._s(e.creator.name))]),i("q-item-label",{attrs:{lines:"10"},domProps:{innerHTML:t._s(e.text)}})],1),i("div",{staticClass:"float-right"},[t._v("\n           "+t._s(t.comment_likes_amounts[e.id])+" "),i("q-rating",{attrs:{max:"1",size:"1.75em",color:"red","color-selected":"red-12",icon:"favorite_border","icon-selected":"favorite","icon-half":"favorite","no-dimming":""},on:{click:function(i){return t.like(e.id)}},model:{value:t.comment_likes[e.id],callback:function(i){t.$set(t.comment_likes,e.id,i)},expression:"comment_likes[comment.id]"}})],1)],1)})),this.currentPointer+this.limit<=this.commentCount?i("q-btn",{staticClass:"full-width text-center",on:{click:t.showMore}},[t._v("show more")]):t._e()],2)],1)],1)},n=[],a=(i("fb6a"),i("c973")),o=i.n(a),r=i("b178"),l=i("c80c"),c={name:"CommentsWidget",created(){this.getCommentCount()},data(){return{comment_likes_amounts:{},comment_likes_obj:{},comment_likes:{},comments:[],newComment:"",currentPointer:0,limit:5,commentCount:"",loaded:!1}},mixins:[l["a"]],props:{entityId:{type:Number,required:!0},userOrganizationId:{type:Number,required:!1},entityType:{type:String,required:!0}},computed:{readyComments:function(){return this.comments.map(t=>(t.text=this.checkStr(t.text),t.create_date=r["b"].formatDate(t.create_date,"MMM Do, YYYY"),t))}},methods:{like:function(){var t=o()((function*(t){let e="",i="";const s=this.entityType+"_comment_id",n={creator_user_id:this.$store.state.user.uid,liked:this.comment_likes[t]};n[s]=t,"object"===typeof this.comment_likes_obj[t]?(e=`https://concordant-api.herokuapp.com/${this.entityType}-comment-likes/${this.comment_likes_obj[t][0].id}`,i="patch"):(e=`https://concordant-api.herokuapp.com/${this.entityType}-comment-likes`,i="post"),this.userOrganizationId&&(n.organization_id=this.userOrganizationId),console.log(e),console.log(n),yield this.$axios[i](e,n,{headers:{Accept:"application/json"}}).then(t=>{this.getComments(),this.$q.notify({type:"positive",message:"Update Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error saving: "+t})})}));return function(e){return t.apply(this,arguments)}}(),setupLikes:function(){for(let t=0;t<this.comments.length;t++){const e="object"===typeof this.comments[t].likes?this.comments[t].likes.filter(t=>t.creator_user_id===this.$store.state.user.uid).map(t=>t.liked):[];this.comment_likes[this.comments[t].id]="number"===typeof e[e.length-1]?e[e.length-1]:0,this.comment_likes_amounts[this.comments[t].id]="object"===typeof this.comments[t].likes?this.comments[t].likes.filter(t=>1===t.liked).length:0,"object"===typeof this.comments[t].likes&&(this.comment_likes_obj[this.comments[t].id]=this.comments[t].likes.filter(t=>t.creator_user_id===this.$store.state.user.uid))}},loadComments:function(){this.loaded||(this.getComments(),this.loaded=!0)},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},getComments:function(){var t=o()((function*(){const t=`https://concordant-api.herokuapp.com/${this.entityType}-comments/?filter[skip]=${this.currentPointer}&filter[limit]=${this.limit}&filter[where][${this.entityType}_id]=${this.entityId}&filter[include][0][relation]=creator&filter[include][1][relation]=likes&filter[order]=create_date%20DESC`,e=yield this.$axios.get(t);this.comments=e.data,this.setupLikes()}));return function(){return t.apply(this,arguments)}}(),showMore:function(){var t=o()((function*(){this.currentPointer=this.currentPointer+this.limit;const t=`https://concordant-api.herokuapp.com/${this.entityType}-comments/?filter[skip]=${this.currentPointer}&filter[limit]=${this.limit}&filter[where][${this.entityType}_id]=${this.entityId}&filter[include][0][relation]=creator&filter[include][1][relation]=likes&filter[order]=create_date%20DESC`,e=yield this.$axios.get(t);this.comments=this.comments.concat(e.data)}));return function(){return t.apply(this,arguments)}}(),getCommentCount:function(){var t=o()((function*(){const t=`https://concordant-api.herokuapp.com/${this.entityType}-comments/count?[where][${this.entityType}_id]=${this.entityId}`,e=yield this.$axios.get(t);this.commentCount=e.data.count}));return function(){return t.apply(this,arguments)}}(),postComment:function(){var t=o()((function*(){const t=`https://concordant-api.herokuapp.com/${this.entityType}-comments`,e={creator_user_id:this.$store.state.user.uid,text:this.newComment};e[this.entityType+"_id"]=this.entityId,yield this.$axios.post(t,e,{headers:{Accept:"application/json"}}),this.newComment="",this.getComments(),this.getCommentCount()}));return function(){return t.apply(this,arguments)}}()}},p=c,d=i("2877"),u=Object(d["a"])(p,s,n,!1,null,null,null);e["a"]=u.exports},"95fb":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"bg-white river-width",attrs:{view:"Lhh lpR fff",container:""}},[i("q-header",{staticClass:"bg-primary"},[i("q-toolbar",[i("q-toolbar-title",{staticClass:"q-pl-lg"},[t._v("Create Treaty")]),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),i("q-page-container",[i("q-page",{attrs:{padding:""}},[i("q-form",[i("q-list",{staticClass:"full-width"},[i("q-list",[i("q-item-section",{staticClass:"full-width"},[t.conflictId?t._e():i("q-select",{staticClass:"q-mb-sm",attrs:{outlined:"",required:"","transition-show":"","use-input":"",autofocus:"","hide-selected":"","fill-input":"","input-debounce":"0",behavior:"menu","error-message":"","emit-value":"",label:"Conflict",options:t.options},on:{filter:t.filterFn},scopedSlots:t._u([{key:"no-option",fn:function(){return[i("q-item",[i("q-item-section",{staticClass:"text-grey"},[t._v("\n                      No results\n                    ")])],1)]},proxy:!0}],null,!1,4053631375),model:{value:t.conflictSelect,callback:function(e){t.conflictSelect=e},expression:"conflictSelect"}}),t.conflictId||t.userOrganizationIdSelect?t._e():i("div",{staticClass:"full-width text-right q-mb-sm"},[t._v("Conflict not listed?")]),t.conflictId||t.userOrganizationIdSelect?t._e():i("div",{staticClass:"full-width text-center q-mb-sm"},[i("q-btn",{staticClass:"full-width",attrs:{icon:"add",label:"ADD CONFLICT"}})],1),t.userOrganizationNameSelect?i("p",{staticClass:"q-pt-none"},[t._v("Creating as: "+t._s(t.userOrganizationNameSelect))]):t._e(),i("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",required:"",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",required:"",label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",required:"",label:"Avatar URL"},model:{value:t.avatar_url,callback:function(e){t.avatar_url=e},expression:"avatar_url"}}),t._l(t.provisions,(function(e,s){return i("div",{key:s,staticClass:"q-mt-sm"},[i("q-separator"),i("div",{staticClass:"row"},[i("div",{staticClass:"col col-10"},[i("h6",{staticClass:"caption text-grey"},[t._v("Provision "+t._s(s+1))])]),i("div",{staticClass:"col text-right"},[i("q-btn",{staticClass:"q-mt-sm",attrs:{square:"",color:"grey",size:"12px",icon:"close"},on:{click:function(e){return t.removeProvision(s)}}})],1)]),i("q-input",{staticClass:"q-mb-sm",attrs:{required:"",filled:"",label:"Title"},model:{value:t.provisionNames[e],callback:function(i){t.$set(t.provisionNames,e,i)},expression:"provisionNames[count]"}}),i("q-input",{staticClass:"q-mb-sm",attrs:{type:"textarea",required:"",filled:"",label:"Provision Text"},model:{value:t.provisionText[e],callback:function(i){t.$set(t.provisionText,e,i)},expression:"provisionText[count]"}})],1)})),i("q-btn",{staticClass:"q-mb-sm",attrs:{color:"grey"},on:{click:t.addProvision}},[i("q-icon",{attrs:{left:"",size:"2em",name:"add"}}),i("div",[t._v("Add Provision")])],1),i("q-btn",{attrs:{color:"primary"},on:{click:t.postTreaty}},[i("div",[t._v("SUBMIT")])])],2)],1)],1)],1),i("q-dialog",{attrs:{persistent:""},model:{value:t.verify_org,callback:function(e){t.verify_org=e},expression:"verify_org"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("q-avatar",{attrs:{icon:"done_outline",color:"primary","text-color":"white"}}),i("span",{staticClass:"q-ml-sm"},[t._v("Choose ONE organization to create as.")])],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.org_a.name,color:"primary"},on:{click:function(e){return t.setOrg("org_a")}}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.org_b.name,color:"primary"},on:{click:function(e){return t.setOrg("org_b")}}})],1)],1)],1)],1)],1)],1)},n=[],a=(i("e01a"),i("c975"),i("a434"),i("c973")),o=i.n(a),r={name:"CreateTreaty",components:{},props:["userOrganizationId","conflictId","reload"],data(){return{name:"",description:"",avatar_url:"",provisionCount:0,provisions:[],provisionNames:[],provisionText:[],conflict:null,conflicts:[],options:[],conflictsObj:{},conflictSelect:null,conflictSelectId:null,userOrganizationIdSelect:null,userOrganizationNameSelect:null,verify_org:!1,org_a:{name:"",id:""},org_b:{name:"",id:""}}},created(){var t=this;return o()((function*(){t.conflictId||(t.getConflicts(),t.options=t.conflicts)}))()},watch:{conflictSelect:function(t){this.org_a.name=this.conflictsObj[t].org_a.name,this.org_b.name=this.conflictsObj[t].org_b.name,this.org_a.id=this.conflictsObj[t].org_a.id,this.org_b.id=this.conflictsObj[t].org_b.id,this.conflictSelectId=this.conflictsObj[t].id,this.verify_org=!0}},methods:{setOrg(t){this.userOrganizationIdSelect=this[t].id,this.userOrganizationNameSelect=this[t].name},filterFn(t,e,i){e(""!==t?()=>{const e=t.toLocaleLowerCase();this.options=this.conflicts.filter(t=>t.toLocaleLowerCase().indexOf(e)>-1)}:()=>{this.options=this.conflicts})},setModel(t){this.conflict=t},getConflicts:function(){var t=o()((function*(){const t="https://concordant-api.herokuapp.com/conflicts?filter[order]=name%20ASC&filter[include][0][relation]=organization_a&filter[include][1][relation]=organization_b",e=yield this.$axios.get(t);this.conflicts=e.data.map(t=>t.name);for(var i=0,s=e.data.length;i<s;i++)this.conflictsObj[e.data[i].name]={id:e.data[i].id,org_a:e.data[i].organization_a,org_b:e.data[i].organization_b}}));return function(){return t.apply(this,arguments)}}(),postTreaty:function(){var t=o()((function*(){const t="https://concordant-api.herokuapp.com/treaties",e=this.conflictId?this.conflictId:this.conflictSelectId,i=this.userOrganizationId?this.userOrganizationId:this.userOrganizationIdSelect,s={creator_user_id:this.$store.state.user.uid,organization_id:i,avatar_url:this.avatar_url,name:this.name,description:this.description,conflict_id:e,status_id:1};yield this.$axios.post(t,s,{headers:{Accept:"application/json"}}).then(t=>{this.postProvisions(t.data.id)}).catch(t=>{this.$q.notify({type:"negative",message:t})})}));return function(){return t.apply(this,arguments)}}(),postProvisions:function(){var t=o()((function*(t){const e="https://concordant-api.herokuapp.com/treaty-provisions";let i={};this.provisionNames=this.provisionNames.filter(Object),this.provisionText=this.provisionText.filter(Object);for(let s=0;s<this.provisionNames.length;s++)i={treaty_id:t,creator_user_id:this.$store.state.user.uid,status_id:1,title:this.provisionNames[s],description:this.provisionText[s],position:s},yield this.$axios.post(e,i,{headers:{Accept:"application/json"}}).catch(t=>{this.$q.notify({type:"negative",message:t})}),this.provisionNames[s]="",this.provisionText[s]="";this.name="",this.description="",this.avatar_url="",this.$q.notify({type:"positive",message:"Treaty created"}),this.reload()}));return function(e){return t.apply(this,arguments)}}(),removeProvision:function(t){this.provisions.splice(t,1)},addProvision:function(){this.provisionCount++,this.provisions.push(this.provisionCount)}}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},a9cd:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row full-width"},[i("div",{staticClass:"col"}),i("q-form",{staticClass:"col col-8"},[i("q-input",{staticClass:"full-width",attrs:{label:"Title","lazy-rules":"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("q-input",{staticClass:"full-width",attrs:{label:"Description","lazy-rules":"",autogrow:"",required:"",type:"textarea"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),i("q-btn",{staticClass:"q-ma-md float-right",attrs:{label:"SUBMIT",color:"primary"},on:{click:t.postForm}})],1),i("div",{staticClass:"col"})],1)},n=[],a=(i("e01a"),i("c973")),o=i.n(a),r={name:"AddProvision",props:["id","numProvisions","reload"],data(){return{title:"",description:""}},methods:{postForm:function(){var t=o()((function*(t){const e="https://concordant-api.herokuapp.com/treaty-provisions",i={creator_user_id:this.$store.state.user.uid,treaty_id:this.id,status_id:1,title:this.title,description:this.description,position:this.numProvisions||0};yield this.$axios.post(e,i,{headers:{Accept:"application/json"}}).then(()=>{this.$q.notify({type:"positive",message:"Provision Received"}),this.reload(),this.title="",this.description="",window.scrollTo(2,document.body.scrollHeight)}).catch(t=>{this.$q.notify({type:"negative",message:t})})}));return function(e){return t.apply(this,arguments)}}()}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports},c80c:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},n=[],a=(i("5319"),{name:"TextToolsMixin",methods:{checkStr:function(t){let e=this.ytCheck(t);return e=this.stripTags(e),e},ytCheck:function(t){const e=t.match(/(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/),i='<iframe type="text/html" width="480" height="320" src="https://www.youtube.com/embed/embed_code_target" frameborder="0"></iframe>';return e?t.replace(e[0],(function(t,s){return i.replace("embed_code_target",e[7].split("&")[0])})):t},stripTags:function(t){return t.replaceAll("<script>","")}}}),o=a,r=i("2877"),l=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=l.exports},ec09:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-width"},[i("q-form",{staticClass:"q-pa-md bg-grey-4",attrs:{greedy:""},on:{submit:t.postForm}},[i("q-input",{attrs:{filled:"","stack-label":"",label:"Name"},on:{input:t.handleInput},model:{value:t.data_name,callback:function(e){t.data_name=e},expression:"data_name"}}),i("q-separator"),i("q-input",{attrs:{filled:"","stack-label":"",label:"description",name:"description",type:"textarea",autogrow:""},on:{input:t.handleInput},model:{value:t.data_description,callback:function(e){t.data_description=e},expression:"data_description"}}),i("q-separator"),i("q-input",{attrs:{filled:"","stack-label":"",name:"avatarUrl",label:"Avatar URL",type:"url"},on:{input:t.handleInput},model:{value:t.data_avatar_url,callback:function(e){t.data_avatar_url=e},expression:"data_avatar_url"}}),i("div",[i("p",{staticClass:"text-grey-8 q-ml-sm q-pb-none"},[t._v("Delete Provisions:")]),t._l(t.provisions,(function(e){return i("q-chip",{key:e.id,attrs:{removable:"",color:"grey",dense:"","text-color":"black",label:e.title},on:{remove:function(i){return t.deleteProvision(e)}},model:{value:t.data_provisions[e.id],callback:function(i){t.$set(t.data_provisions,e.id,i)},expression:"data_provisions[provision.id]"}})}))],2),i("div",{staticClass:"full-width  text-right q-mt-md"},[i("q-btn",{attrs:{label:"SUBMIT",type:"submit",color:"primary"}})],1)],1)],1)},n=[],a=(i("e01a"),i("c973")),o=i.n(a),r={name:"EditTreatyWidget",props:["name","description","avatarUrl","id","reload","provisions"],model:{prop:"name",event:"blur"},watch:{name(t){this.data_name=t},description(t){this.data_description=t},avatarUrl(t){this.data_avatar_url=t}},data(){return{confirm:!1,provisionsToDelete:[],data_provisions:[],data_name:this.name,data_description:this.description,data_avatar_url:this.avatarUrl}},mounted(){this.data_name=this.name,this.$mount()},methods:{deleteProvision(t){this.provisionsToDelete.push(t.id)},handleInput(t){this.$emit("msgChange",t)},deleteProvisions:function(){var t=o()((function*(){let t=null;for(let e=0;e<this.provisionsToDelete.length;e++)t=`https://concordant-api.herokuapp.com/treaty-provisions/${this.provisionsToDelete[0]}/provision-likes`,yield this.$axios.delete(t),t=`https://concordant-api.herokuapp.com/treaty-provisions/${this.provisionsToDelete[0]}/provision-comments`,yield this.$axios.delete(t),t="https://concordant-api.herokuapp.com/treaty-provisions/"+this.provisionsToDelete[0],yield this.$axios.delete(t)}));return function(){return t.apply(this,arguments)}}(),postForm:function(){var t=o()((function*(t){this.deleteProvisions();const e={name:this.data_name,description:this.data_description,avatar_url:this.data_avatar_url,id:this.id},i="https://concordant-api.herokuapp.com/treaties/"+this.id;yield this.$axios.patch(i,e,{headers:{Accept:"application/json"}}).then(t=>{this.reload(),this.$q.notify({type:"positive",message:"Update Success"})}).catch(t=>{this.$q.notify({type:"negative",message:"Error updating Treaty: "+t})})}));return function(e){return t.apply(this,arguments)}}()}},l=r,c=i("2877"),p=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=p.exports}}]);