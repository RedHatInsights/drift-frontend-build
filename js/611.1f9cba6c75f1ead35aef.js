(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[611],{12611:(e,t,a)=>{"use strict";a.r(t),a.d(t,{BaselinesPage:()=>F,default:()=>L});var n=a(92137),s=a(6610),l=a(5991),r=a(10379),i=a(86089),c=a(77608),o=a(87757),d=a.n(o),u=a(25558),p=a.n(u),m=a(45697),h=a.n(m),b=a(45237),f=a(334),y=a(39653),B=a(96091),S=a(91264),C=a(62691),k=a(61104),v=a(48913),E=a(63349),g=a(69269),T=a(34869),I=a(86047),x=a(51504),P=a(48270),M=a(69078);var w=function(e){(0,r.Z)(b,e);var t,a,o,u,m,h=(u=b,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(u);if(m){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function b(e){var t;return(0,s.Z)(this,b),(t=h.call(this,e)).buildSystemColumns=function(e){var a=t.props.permissions,n=e.map((function(e){return"display_name"===e.key||"display_selected_hsp"===e.key?{title:"Name",key:e.key,props:{width:20},renderFunc:function(e,t,a){return a.display_selected_hsp||e}}:e}));return a.hspRead&&n.push({key:"historical_profiles",props:{width:10,isStatic:!0},title:"Historical profiles"}),n},t.deselectHistoricalProfiles=(0,n.Z)(d().mark((function e(){var a,n,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props,n=a.selectSingleHSP,s=a.updateColumns,e.next=3,s("display_name");case 3:n();case 4:case"end":return e.stop()}}),e)}))),t.onSelect=function(e,a,n){var s=t.props,l=s.baselineTableData;(0,s.selectBaseline)([l[n][0]],a,"RADIO")},t.cancelModal=function(){var e=t.props,a=e.toggleCreateBaselineModal,n=e.clearSelectedBaselines,s=e.selectSingleHSP;t.updateBaselineName(""),n("RADIO"),s(),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.state.baselineName&&t.submitBaselineName())},t.renderModalBody=function(){var e,a=t.state,n=a.baselineName,s=a.copyBaselineChecked,l=a.copySystemChecked,r=t.props.createBaselineError;return s?e=t.renderCopyBaseline():l&&(e=t.renderCopySystem()),p().createElement(p().Fragment,null,t.renderRadioButtons(),p().createElement("div",{className:"md-padding-top md-padding-bottom"},p().createElement(B.Form,null,p().createElement(B.FormGroup,{label:"Baseline name",isRequired:!0,type:"text",helperTextInvalid:Object.prototype.hasOwnProperty.call(r,"detail")?r.detail:null,fieldId:"name",validated:Object.prototype.hasOwnProperty.call(r,"status")?"error":null,onKeyPress:t.checkKeyPress},p().createElement(B.TextInput,{className:"fact-value",placeholder:"Baseline name",value:n,type:"text",onChange:t.updateBaselineName,validated:Object.prototype.hasOwnProperty.call(r,"status")?B.ValidatedOptions.error:null,"aria-label":"baseline name"})))),e)},t.submitBaselineName=t.submitBaselineName.bind((0,E.Z)(t)),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1,columns:[{title:"Name",transforms:[C.sortable]},{title:"Last updated",transforms:[C.sortable,(0,C.cellWidth)(40)]}]},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,a){var n=a.currentTarget.value;t.props.clearSelectedBaselines("RADIO"),"fromScratchChecked"===n?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}return(0,l.Z)(b,[{key:"componentDidMount",value:(o=(0,n.Z)(d().mark((function e(){var t=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.entityListener=(0,g.pD)({actionType:"SELECT_ENTITY",callback:function(){t.props.createBaselineModalOpened&&t.deselectHistoricalProfiles()}}),window.entityListener=(0,g.pD)({actionType:"SELECT_SINGLE_HSP",callback:function(){t.props.updateColumns("display_selected_hsp")}});case 2:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})},{key:"componentWillUnmount",value:(a=(0,n.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.removeEventListener("SELECT_ENTITY",this.deselectHistoricalProfiles),window.removeEventListener("SELECT_SINGLE_HSP",this.props.updateColumns);case 2:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"findSelectedRadio",value:function(){var e,t=this.state,a={copyBaselineChecked:t.copyBaselineChecked,copySystemChecked:t.copySystemChecked,fromScratchChecked:t.fromScratchChecked};return Object.keys(a).forEach((function(t){a[t]&&(e=t.substring(0,t.length-7).toLowerCase())})),e}},{key:"submitBaselineName",value:(t=(0,n.Z)(d().mark((function e(){var t,a,n,s,l,r,i,c,o,u,p,m,h,b;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.baselineName,n=t.fromScratchChecked,s=t.copyBaselineChecked,l=t.copySystemChecked,r=this.props,i=r.createBaseline,c=r.toggleCreateBaselineModal,o=r.selectedBaselineIds,u=r.history,p=r.entities,m=r.clearSelectedBaselines,h=r.selectSingleHSP,b={display_name:a},e.prev=3,""===a){e.next=31;break}if(!n){e.next=11;break}return b.baseline_facts=[],e.next=9,i(b);case 9:e.next=27;break;case 11:if(1!==o.length||!s){e.next=17;break}return b={display_name:a},e.next=15,i(b,o[0]);case 15:e.next=27;break;case 17:if(null==p||!p.selectedSystemIds.length||!l){e.next=23;break}return b.inventory_uuid=null==p?void 0:p.selectedSystemIds[0],e.next=21,i(b);case 21:e.next=27;break;case 23:if(null==p||!p.selectedHSP||!l){e.next=27;break}return b.hsp_uuid=p.selectedHSP.id,e.next=27,i(b);case 27:u.push("baselines/"+this.props.baselineData.id),c(),h(),m("RADIO");case 31:e.next=35;break;case 33:e.prev=33,e.t0=e.catch(3);case 35:case"end":return e.stop()}}),e,this,[[3,33]])}))),function(){return t.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,t=e.fromScratchChecked,a=e.copyBaselineChecked,n=e.copySystemChecked;return p().createElement(p().Fragment,null,p().createElement(B.Radio,{isChecked:t,id:"create baseline",ouiaId:"create-baseline-from-scratch-radio",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),p().createElement(B.Radio,{isChecked:a,id:"copy baseline",ouiaId:"create-baseline-copy-baseline-radio",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),p().createElement(B.Radio,{isChecked:n,id:"copy system",ouiaId:"create-baseline-copy-system-radio",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){var e=this.props,t=e.baselineTableData,a=e.createBaselineModalOpened,n=e.loading,s=e.permissions,l=e.selectedBaselineIds,r=e.totalBaselines,i=this.state.columns;return p().createElement(p().Fragment,null,p().createElement("b",null,"Select baseline to copy from"),p().createElement(k.Z,{tableId:"RADIO",onSelect:this.onSelect,tableData:t,loading:n,createBaselineModalOpened:a,columns:i,totalBaselines:r,permissions:s,hasMultiSelect:!1,selectedBaselineIds:l}))}},{key:"renderCopySystem",value:function(){var e=this.props,t=e.entities,a=e.permissions;return p().createElement(p().Fragment,null,p().createElement("b",null,"Select system to copy from"),p().createElement("br",null),p().createElement(T.Z,{createBaselineModal:!0,hasMultiSelect:!1,historicalProfiles:null!=t&&t.selectedHSP?[t.selectedHSP]:[],permissions:a,entities:t,selectVariant:"radio",systemColumns:this.buildSystemColumns,deselectHistoricalProfiles:this.deselectHistoricalProfiles}))}},{key:"renderActions",value:function(){var e=this.props,t=e.selectedBaselineIds,a=e.entities,n=this.state,s=n.baselineName,l=n.copyBaselineChecked,r=n.copySystemChecked;return""===s||l&&0===t.length||r&&(null==a||!a.selectedSystemIds.length)&&(null==a||!a.selectedHSP)?[p().createElement(B.Button,{key:"confirm",variant:"primary",isDisabled:!0,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),p().createElement(B.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]:[p().createElement(B.Button,{key:"confirm",variant:"primary",onClick:this.submitBaselineName,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),p().createElement(B.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]}},{key:"render",value:function(){var e=this.props,t=e.createBaselineError,a=e.createBaselineModalOpened,n=e.globalFilterState,s=this.state.copySystemChecked;return p().createElement(B.Modal,{className:"drift",width:"1200px",title:"Create baseline",isOpen:a,onClose:this.cancelModal,actions:this.renderActions()},s?p().createElement(I.Z,{globalFilterState:n}):null,t.status?p().createElement(B.Alert,{variant:"danger",isInline:!0,title:"Status: "+t.status,ouiaId:"status"},p().createElement("p",null,t.detail)):p().createElement("div",null),this.renderModalBody())}}]),b}(u.Component);w.propTypes={createBaselineModalOpened:h().bool,createBaseline:h().func,selectBaseline:h().func,history:h().object,baselineData:h().object,toggleCreateBaselineModal:h().func,clearSelectedBaselines:h().func,entities:h().object,selectedBaselineIds:h().array,createBaselineError:h().object,baselineTableData:h().array,loading:h().bool,totalBaselines:h().number,updatePagination:h().func,historicalProfiles:h().array,permissions:h().object,globalFilterState:h().object,selectHistoricProfiles:h().func,setSelectedSystemIds:h().func,selectSingleHSP:h().func,updateColumns:h().func};const O=(0,f.withRouter)((0,b.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.radioTable.selectedBaselineIds,createBaselineError:e.createBaselineModalState.createBaselineError,loading:e.baselinesTableState.radioTable.loading,emptyState:e.baselinesTableState.radioTable.emptyState,baselineTableData:e.baselinesTableState.radioTable.baselineTableData,totalBaselines:e.baselinesTableState.radioTable.totalBaselines,historicalProfiles:e.compareState.historicalProfiles,globalFilterState:e.globalFilterState}}),(function(e){return{toggleCreateBaselineModal:function(){return e(x.Z.toggleCreateBaselineModal())},createBaseline:function(t,a){return e(x.Z.createBaseline(t,a))},selectBaseline:function(t,a,n){return e(P.w.selectBaseline(t,a,n))},clearSelectedBaselines:function(t){return e(P.w.clearSelectedBaselines(t))},selectSingleHSP:function(t){return e(M.Z.selectSingleHSP(t))},updateColumns:function(t){return e(M.Z.updateColumns(t))}}}))(w));var D=a(42325),H=a(23419),Z=a(56077),R=a(60001),N=a(83068),_=a(43946);var F=function(e){(0,r.Z)(m,e);var t,a,o,u=(a=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(a);if(o){var n=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function m(e){var t;return(0,s.Z)(this,m),(t=u.call(this,e)).fetchBaseline=function(e){t.props.history.push("baselines/"+e)},t.onSelect=function(e,a,n){var s=t.props,l=s.baselineTableData;(0,s.selectBaseline)(-1===n?l.map((function(e){return e[0]})):[l[n][0]],a,"CHECKBOX")},t.onBulkSelect=function(e){var a=t.props,n=a.baselineTableData,s=a.selectBaseline,l=[];n.forEach((function(e){l.push(e[0])})),s(l,e,"CHECKBOX")},t.renderEmptyState=function(e){var a=t.props,n=a.baselineError,s=a.emptyState,l=a.loading,r=a.revertBaselineFetch,i=t.state,c=i.emptyStateMessage,o=i.errorMessage;return n.status?200!==n.status&&void 0!==n.status?p().createElement(D.Z,{icon:S.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:o,error:"Error "+n.status+": "+n.detail,button:p().createElement("a",{onClick:function(){return r("CHECKBOX")}},p().createElement(S.UndoIcon,{className:"reload-button"}),"Retry")}):void 0:p().createElement(D.Z,{icon:S.AddCircleOIcon,title:"No baselines",text:c,button:p().createElement(v.Z,{emptyState:s,permissions:e,loading:l})})},t.state={columns:[{title:"Name",transforms:[C.sortable,(0,C.cellWidth)(40)]},{title:"Last updated",transforms:[C.sortable,(0,C.cellWidth)(45)]},{title:"",transforms:[(0,C.cellWidth)(5)]}],emptyStateMessage:["You currently have no baselines displayed.","Create a baseline to use in your Comparison analysis."],errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t}return(0,l.Z)(m,[{key:"componentDidMount",value:(t=(0,n.Z)(d().mark((function e(){var t,a,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,null===(t=window.insights)||void 0===t||null===(a=t.chrome)||void 0===a||null===(n=a.appAction)||void 0===n?void 0:n.call(a,"baseline-list");case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"renderTable",value:function(e){var t=this.props,a=t.baselineTableData,n=t.loading,s=t.createBaselineModalOpened,l=t.clearEditBaselineData,r=t.selectedBaselineIds,i=t.totalBaselines,c=this.state.columns;return l(),p().createElement(B.CardBody,null,p().createElement("div",null,p().createElement(k.Z,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:a,loading:n,columns:c,kebab:!0,createButton:!0,exportButton:!0,onClick:this.fetchBaseline,createBaselineModalOpened:s,onBulkSelect:this.onBulkSelect,selectedBaselineIds:r,totalBaselines:i,permissions:e})))}},{key:"render",value:function(){var e=this,t=this.props,a=t.baselineError,n=t.emptyState,s=t.loading,l=t.revertBaselineFetch,r=t.selectHistoricProfiles,i=t.setSelectedSystemIds;return p().createElement(_.B.Consumer,null,(function(t){return p().createElement(p().Fragment,null,p().createElement(O,{permissions:t.permissions,selectHistoricProfiles:r,setSelectedSystemIds:i}),p().createElement(y.PageHeader,null,p().createElement(y.PageHeaderTitle,{title:"Baselines"})),p().createElement(y.Main,null,!1===t.permissions.baselinesRead?p().createElement(D.Z,{icon:S.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):n&&!s?e.renderEmptyState(t.permissions):p().createElement(p().Fragment,null,p().createElement(H.Z,{error:!n&&a?a:{},onClose:l,tableId:"CHECKBOX"}),p().createElement(B.Card,{className:"pf-t-light pf-m-opaque-100"},e.renderTable(t.permissions)))))}))}}]),m}(u.Component);F.propTypes={loading:h().bool,baselineTableData:h().array,emptyState:h().bool,createBaselineModalOpened:h().bool,selectBaseline:h().func,history:h().object,baselineError:h().object,revertBaselineFetch:h().func,clearEditBaselineData:h().func,selectedBaselineIds:h().array,totalBaselines:h().number,selectHistoricProfiles:h().func,setSelectedSystemIds:h().func,entitiesLoading:h().func};const L=(0,f.withRouter)((0,b.connect)((function(e){return{loading:e.baselinesTableState.checkboxTable.loading,emptyState:e.baselinesTableState.checkboxTable.emptyState,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineError:e.baselinesTableState.checkboxTable.baselineError,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{selectBaseline:function(t,a,n){return e(P.w.selectBaseline(t,a,n))},revertBaselineFetch:function(t){return e(P.w.revertBaselineFetch(t))},clearEditBaselineData:function(){return e(R.E.clearEditBaselineData())},selectHistoricProfiles:function(t){return e(N.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(Z.x.setSelectedSystemIds(t))}}}))(F))}}]);
//# sourceMappingURL=../sourcemaps/611.0d61a578ecda4d3a50c1.js.map