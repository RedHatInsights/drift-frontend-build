(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[378],{63378:(e,t,a)=>{"use strict";a.r(t),a.d(t,{BaselinesPage:()=>X,default:()=>L});var n=a(87757),s=a.n(n),l=a(48926),r=a.n(l),i=a(34575),c=a.n(i),o=a(93913),d=a.n(o),u=a(2205),m=a.n(u),h=a(78585),p=a.n(h),b=a(29754),f=a.n(b),y=a(25558),B=a.n(y),S=a(45697),k=a.n(S),C=a(12167),v=a(334),E=a(3658),g=a(37020),I=a(58909),P=a(42953),T=a(74966),R=a(15421),x=a(81506),M=a.n(x),D=a(51248),O=a(25391),w=a(96594),N=a(62193);var H=function(e){m()(i,e);var t,a,n,l=(a=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f()(a);if(n){var s=f()(this).constructor;e=Reflect.construct(t,arguments,s)}else e=t.apply(this,arguments);return p()(this,e)});function i(e){var t;return c()(this,i),(t=l.call(this,e)).onSelect=function(e,a,n){var s=t.props,l=s.baselineTableData;(0,s.selectBaseline)([l[n][0]],a,"RADIO")},t.cancelModal=function(){var e=t.props,a=e.toggleCreateBaselineModal,n=e.clearSelectedBaselines;t.updateBaselineName(""),n("RADIO"),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.state.baselineName&&t.submitBaselineName())},t.renderModalBody=function(){var e,a=t.state,n=a.baselineName,s=a.copyBaselineChecked,l=a.copySystemChecked,r=t.props.createBaselineError;return s?e=t.renderCopyBaseline():l&&(e=t.renderCopySystem()),B().createElement(B().Fragment,null,t.renderRadioButtons(),B().createElement("div",{className:"md-padding-top md-padding-bottom"},B().createElement(g.Form,null,B().createElement(g.FormGroup,{label:"Baseline name",isRequired:!0,type:"text",helperTextInvalid:Object.prototype.hasOwnProperty.call(r,"detail")?r.detail:null,fieldId:"name",validated:Object.prototype.hasOwnProperty.call(r,"status")?"error":null,onKeyPress:t.checkKeyPress},B().createElement(g.TextInput,{className:"fact-value",placeholder:"Baseline name",value:n,type:"text",onChange:t.updateBaselineName,validated:Object.prototype.hasOwnProperty.call(r,"status")?g.ValidatedOptions.error:null,"aria-label":"baseline name"})))),e)},t.submitBaselineName=t.submitBaselineName.bind(M()(t)),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1,columns:[{title:"Name",transforms:[P.sortable]},{title:"Last updated",transforms:[P.sortable,(0,P.cellWidth)(40)]}]},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,a){var n=a.currentTarget.value;t.props.clearSelectedBaselines("RADIO"),"fromScratchChecked"===n?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}return d()(i,[{key:"findSelectedRadio",value:function(){var e,t=this.state,a={copyBaselineChecked:t.copyBaselineChecked,copySystemChecked:t.copySystemChecked,fromScratchChecked:t.fromScratchChecked};return Object.keys(a).forEach((function(t){a[t]&&(e=t.substring(0,t.length-7).toLowerCase())})),e}},{key:"submitBaselineName",value:(t=r()(s().mark((function e(){var t,a,n,l,r,i,c,o,d,u,m,h,p,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.baselineName,n=t.fromScratchChecked,l=t.copyBaselineChecked,r=t.copySystemChecked,i=this.props,c=i.createBaseline,o=i.toggleCreateBaselineModal,d=i.selectedBaselineIds,u=i.history,m=i.entities,h=i.clearSelectedBaselines,p=i.selectedHSPIds,b={display_name:a},e.prev=3,""===a){e.next=30;break}if(!n){e.next=11;break}return b.baseline_facts=[],e.next=9,c(b);case 9:e.next=27;break;case 11:if(1!==d.length||!l){e.next=17;break}return b={display_name:a},e.next=15,c(b,d[0]);case 15:e.next=27;break;case 17:if(1!==m.selectedSystemIds.length||!r){e.next=23;break}return b.inventory_uuid=m.selectedSystemIds[0],e.next=21,c(b);case 21:e.next=27;break;case 23:if(1!==p.length||!r){e.next=27;break}return b.hsp_uuid=p[0],e.next=27,c(b);case 27:u.push("baselines/"+this.props.baselineData.id),o(),h("RADIO");case 30:e.next=34;break;case 32:e.prev=32,e.t0=e.catch(3);case 34:case"end":return e.stop()}}),e,this,[[3,32]])}))),function(){return t.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,t=e.fromScratchChecked,a=e.copyBaselineChecked,n=e.copySystemChecked;return B().createElement(B().Fragment,null,B().createElement(g.Radio,{isChecked:t,id:"create baseline",ouiaId:"create-baseline-from-scratch-radio",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),B().createElement(g.Radio,{isChecked:a,id:"copy baseline",ouiaId:"create-baseline-copy-baseline-radio",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),B().createElement(g.Radio,{isChecked:n,id:"copy system",ouiaId:"create-baseline-copy-system-radio",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){var e=this.props,t=e.baselineTableData,a=e.createBaselineModalOpened,n=e.hasReadPermissions,s=e.hasWritePermissions,l=e.loading,r=e.totalBaselines,i=this.state.columns;return B().createElement(B().Fragment,null,B().createElement("b",null,"Select baseline to copy from"),B().createElement(T.Z,{tableId:"RADIO",onSelect:this.onSelect,tableData:t,loading:l,createBaselineModalOpened:a,columns:i,totalBaselines:r,hasReadPermissions:n,hasWritePermissions:s,hasMultiSelect:!1}))}},{key:"renderCopySystem",value:function(){var e=this.props,t=e.entities,a=e.hasInventoryReadPermissions,n=e.historicalProfiles;return B().createElement(B().Fragment,null,B().createElement("b",null,"Select system to copy from"),B().createElement("br",null),B().createElement(D.Z,{selectedSystemIds:[],createBaselineModal:!0,hasHistoricalDropdown:!0,hasMultiSelect:!1,historicalProfiles:n,hasInventoryReadPermissions:a,entities:t,selectVariant:"radio"}))}},{key:"renderActions",value:function(){var e=this.props,t=e.selectedBaselineIds,a=e.selectedHSPIds,n=e.entities,s=this.state,l=s.baselineName,r=s.copyBaselineChecked,i=s.copySystemChecked,c=void 0===n||void 0===n.selectedSystemIds?[]:n.selectedSystemIds;return""===l||r&&0===t.length||i&&0===c.length&&0===a.length?[B().createElement(g.Button,{key:"confirm",variant:"primary",isDisabled:!0,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),B().createElement(g.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]:[B().createElement(g.Button,{key:"confirm",variant:"primary",onClick:this.submitBaselineName,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),B().createElement(g.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]}},{key:"render",value:function(){var e=this.props,t=e.createBaselineError,a=e.createBaselineModalOpened,n=e.globalFilterState,s=this.state.copySystemChecked;return B().createElement(g.Modal,{className:"drift",width:"1200px",title:"Create baseline",isOpen:a,onClose:this.cancelModal,actions:this.renderActions()},s?B().createElement(O.Z,{globalFilterState:n}):null,t.status?B().createElement(g.Alert,{variant:"danger",isInline:!0,title:"Status: "+t.status,ouiaId:"status"},B().createElement("p",null,t.detail)):B().createElement("div",null),this.renderModalBody())}}]),i}(y.Component);H.propTypes={createBaselineModalOpened:k().bool,createBaseline:k().func,selectBaseline:k().func,history:k().object,baselineData:k().object,toggleCreateBaselineModal:k().func,clearSelectedBaselines:k().func,entities:k().object,selectedBaselineIds:k().array,createBaselineError:k().object,baselineTableData:k().array,loading:k().bool,totalBaselines:k().number,updatePagination:k().func,historicalProfiles:k().array,selectedHSPIds:k().array,hasInventoryReadPermissions:k().bool,hasReadPermissions:k().bool,hasWritePermissions:k().bool,globalFilterState:k().object,selectHistoricProfiles:k().func,setSelectedSystemIds:k().func};const F=(0,v.withRouter)((0,C.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.radioTable.selectedBaselineIds,createBaselineError:e.createBaselineModalState.createBaselineError,loading:e.baselinesTableState.radioTable.loading,emptyState:e.baselinesTableState.radioTable.emptyState,baselineTableData:e.baselinesTableState.radioTable.baselineTableData,totalBaselines:e.baselinesTableState.radioTable.totalBaselines,historicalProfiles:e.compareState.historicalProfiles,selectedHSPIds:e.historicProfilesState.selectedHSPIds,globalFilterState:e.globalFilterState}}),(function(e){return{toggleCreateBaselineModal:function(){return e(w.Z.toggleCreateBaselineModal())},createBaseline:function(t,a){return e(w.Z.createBaseline(t,a))},selectBaseline:function(t,a,n){return e(N.w.selectBaseline(t,a,n))},clearSelectedBaselines:function(t){return e(N.w.clearSelectedBaselines(t))}}}))(H));var W=a(46456),j=a(82437),Z=a(78219),A=a(99998),K=a(9629),_=a(55275);var X=function(e){m()(i,e);var t,a,n,l=(a=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f()(a);if(n){var s=f()(this).constructor;e=Reflect.construct(t,arguments,s)}else e=t.apply(this,arguments);return p()(this,e)});function i(e){var t;return c()(this,i),(t=l.call(this,e)).fetchBaseline=function(e){t.props.history.push("baselines/"+e)},t.onSelect=function(e,a,n){var s=t.props,l=s.baselineTableData;(0,s.selectBaseline)(-1===n?l.map((function(e){return e[0]})):[l[n][0]],a,"CHECKBOX")},t.onBulkSelect=function(e){var a=t.props,n=a.baselineTableData,s=a.selectBaseline,l=[];n.forEach((function(e){l.push(e[0])})),s(l,e,"CHECKBOX")},t.renderEmptyState=function(e){var a=t.props,n=a.baselineError,s=a.emptyState,l=a.loading,r=a.revertBaselineFetch,i=t.state,c=i.emptyStateMessage,o=i.errorMessage;return n.status?200!==n.status&&void 0!==n.status?B().createElement(W.Z,{icon:I.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:o,error:"Error "+n.status+": "+n.detail,button:B().createElement("a",{onClick:function(){return r("CHECKBOX")}},B().createElement(I.UndoIcon,{className:"reload-button"}),"Retry")}):void 0:B().createElement(W.Z,{icon:I.AddCircleOIcon,title:"No baselines",text:c,button:B().createElement(R.Z,{emptyState:s,hasWritePermissions:e,loading:l})})},t.state={columns:[{title:"Name",transforms:[P.sortable,(0,P.cellWidth)(40)]},{title:"Last updated",transforms:[P.sortable,(0,P.cellWidth)(45)]},{title:"",transforms:[(0,P.cellWidth)(5)]}],emptyStateMessage:["You currently have no baselines displayed.","Create a baseline to use in your Comparison analysis."],errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t}return d()(i,[{key:"componentDidMount",value:(t=r()(s().mark((function e(){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,null===(t=window.insights)||void 0===t||null===(a=t.chrome)||void 0===a||null===(n=a.appAction)||void 0===n?void 0:n.call(a,"baseline-list");case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"renderTable",value:function(e,t){var a=this.props,n=a.baselineTableData,s=a.loading,l=a.createBaselineModalOpened,r=a.clearEditBaselineData,i=a.selectedBaselineIds,c=a.totalBaselines,o=this.state.columns;return r(),B().createElement(g.CardBody,null,B().createElement("div",null,B().createElement(T.Z,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:n,loading:s,columns:o,kebab:!0,createButton:!0,exportButton:!0,onClick:this.fetchBaseline,createBaselineModalOpened:l,onBulkSelect:this.onBulkSelect,selectedBaselineIds:i,totalBaselines:c,hasReadPermissions:e,hasWritePermissions:t})))}},{key:"render",value:function(){var e=this,t=this.props,a=t.baselineError,n=t.emptyState,s=t.loading,l=t.revertBaselineFetch,r=t.selectHistoricProfiles,i=t.setSelectedSystemIds;return B().createElement(_.B.Consumer,null,(function(t){return B().createElement(B().Fragment,null,B().createElement(F,{hasInventoryReadPermissions:t.permissions.inventoryRead,hasReadPermissions:t.permissions.baselinesRead,hasWritePermissions:t.permissions.baselinesWrite,selectHistoricProfiles:r,setSelectedSystemIds:i}),B().createElement(E.PageHeader,null,B().createElement(E.PageHeaderTitle,{title:"Baselines"})),B().createElement(E.Main,null,!1===t.permissions.baselinesRead?B().createElement(W.Z,{icon:I.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):n&&!s?e.renderEmptyState(t.permissions.baselinesWrite):B().createElement(B().Fragment,null,B().createElement(j.Z,{error:!n&&a?a:{},onClose:l,tableId:"CHECKBOX"}),B().createElement(g.Card,{className:"pf-t-light pf-m-opaque-100"},e.renderTable(t.permissions.baselinesRead,t.permissions.baselinesWrite)))))}))}}]),i}(y.Component);X.propTypes={loading:k().bool,baselineTableData:k().array,emptyState:k().bool,createBaselineModalOpened:k().bool,selectBaseline:k().func,history:k().object,baselineError:k().object,revertBaselineFetch:k().func,clearEditBaselineData:k().func,selectedBaselineIds:k().array,totalBaselines:k().number,selectHistoricProfiles:k().func,setSelectedSystemIds:k().func};const L=(0,v.withRouter)((0,C.connect)((function(e){return{loading:e.baselinesTableState.checkboxTable.loading,emptyState:e.baselinesTableState.checkboxTable.emptyState,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineError:e.baselinesTableState.checkboxTable.baselineError,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{selectBaseline:function(t,a,n){return e(N.w.selectBaseline(t,a,n))},revertBaselineFetch:function(t){return e(N.w.revertBaselineFetch(t))},clearEditBaselineData:function(){return e(A.E.clearEditBaselineData())},selectHistoricProfiles:function(t){return e(K.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(Z.x.setSelectedSystemIds(t))}}}))(X))}}]);