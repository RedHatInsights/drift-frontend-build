(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{988:function(e,a,t){"use strict";t.r(a),t.d(a,"BaselinesPage",(function(){return ae}));var n=t(22),s=t.n(n),r=t(48),l=t.n(r),i=t(71),c=t.n(i),o=t(72),d=t.n(o),u=t(73),m=t.n(u),p=t(74),h=t.n(p),b=t(47),f=t.n(b),y=t(1),B=t.n(y),S=t(6),k=t.n(S),C=t(64),v=t(49),E=t(278),g=t(610),T=t(609),P=t(617),M=t(599),I=t(600),x=t(627),D=t(234),O=t(169),R=t(973),N=t(978),w=t(101),j=t.n(w),H=t(613),F=t(614),W=t(611),K=t(14),A=t(598),X=t(157),_=t(250),q=t(649),J=t(976),L=t(980),Y=t(407);function z(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=f()(e);if(a){var s=f()(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return h()(this,t)}}var U=function(e){m()(n,e);var a,t=z(n);function n(e){var a;return c()(this,n),(a=t.call(this,e)).onSelect=function(e,t){(0,a.props.selectBaseline)([t.currentTarget.id],t.currentTarget.checked,"RADIO")},a.cancelModal=function(){var e=a.props,t=e.toggleCreateBaselineModal,n=e.clearSelectedBaselines;a.updateBaselineName(""),n("RADIO"),t()},a.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),a.state.baselineName&&a.submitBaselineName())},a.renderModalBody=function(){var e,t=a.state,n=t.baselineName,s=t.copyBaselineChecked,r=t.copySystemChecked,l=a.props.createBaselineError;return s?e=a.renderCopyBaseline():r&&(e=a.renderCopySystem()),B.a.createElement(B.a.Fragment,null,a.renderRadioButtons(),B.a.createElement("div",{className:"md-padding-top md-padding-bottom"},B.a.createElement(H.a,null,B.a.createElement(F.a,{label:"Baseline name",isRequired:!0,type:"text",helperTextInvalid:l.hasOwnProperty("detail")?l.detail:null,fieldId:"name",validated:l.hasOwnProperty("status")?"error":null,onKeyPress:a.checkKeyPress},B.a.createElement(W.a,{className:"fact-value",placeholder:"Baseline name",value:n,type:"text",onChange:a.updateBaselineName,validated:l.hasOwnProperty("status")?K.d.error:null,"aria-label":"baseline name"})))),e)},a.submitBaselineName=a.submitBaselineName.bind(j()(a)),a.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1,columns:[{title:""},{title:"Name",transforms:[D.a]},{title:"Last updated",transforms:[D.a,Object(O.a)(40)]}]},a.updateBaselineName=function(e){a.setState({baselineName:e})},a.handleChecked=function(e,t){var n=t.currentTarget.value;a.props.clearSelectedBaselines("RADIO"),"fromScratchChecked"===n?a.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?a.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):a.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},a}return d()(n,[{key:"submitBaselineName",value:(a=l()(s.a.mark((function e(){var a,t,n,r,l,i,c,o,d,u,m,p,h,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,t=a.baselineName,n=a.fromScratchChecked,r=a.copyBaselineChecked,l=a.copySystemChecked,i=this.props,c=i.createBaseline,o=i.toggleCreateBaselineModal,d=i.selectedBaselineIds,u=i.history,m=i.entities,p=i.clearSelectedBaselines,h=i.selectedHSPIds,b={display_name:t},e.prev=3,""===t){e.next=30;break}if(!n){e.next=11;break}return b.baseline_facts=[],e.next=9,c(b);case 9:e.next=27;break;case 11:if(1!==d.length||!r){e.next=17;break}return b={display_name:t},e.next=15,c(b,d[0]);case 15:e.next=27;break;case 17:if(1!==m.selectedSystemIds.length||!l){e.next=23;break}return b.inventory_uuid=m.selectedSystemIds[0],e.next=21,c(b);case 21:e.next=27;break;case 23:if(1!==h.length||!l){e.next=27;break}return b.hsp_uuid=h[0],e.next=27,c(b);case 27:u.push("baselines/"+this.props.baselineData.id),o(),p("RADIO");case 30:e.next=34;break;case 32:e.prev=32,e.t0=e.catch(3);case 34:case"end":return e.stop()}}),e,this,[[3,32]])}))),function(){return a.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,a=e.fromScratchChecked,t=e.copyBaselineChecked,n=e.copySystemChecked;return B.a.createElement(B.a.Fragment,null,B.a.createElement(A.a,{isChecked:a,id:"create baseline",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),B.a.createElement(A.a,{isChecked:t,id:"copy baseline",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),B.a.createElement(A.a,{isChecked:n,id:"copy system",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){var e=this.props,a=e.baselineTableData,t=e.createBaselineModalOpened,n=e.hasReadPermissions,s=e.hasWritePermissions,r=e.loading,l=e.totalBaselines,i=this.state.columns;return B.a.createElement(B.a.Fragment,null,B.a.createElement("b",null,"Select baseline to copy from"),B.a.createElement(R.a,{tableId:"RADIO",onSelect:this.onSelect,tableData:a,loading:r,createBaselineModalOpened:t,columns:i,totalBaselines:l,hasReadPermissions:n,hasWritePermissions:s,hasMultiSelect:!1}))}},{key:"renderCopySystem",value:function(){var e=this.props,a=e.hasInventoryReadPermissions,t=e.entities,n=e.historicalProfiles;return B.a.createElement(B.a.Fragment,null,B.a.createElement("b",null,"Select system to copy from"),B.a.createElement("br",null),B.a.createElement(J.a,{selectedSystemIds:[],createBaselineModal:!0,hasHistoricalDropdown:!0,hasMultiSelect:!1,historicalProfiles:n,hasInventoryReadPermissions:a,entities:t,selectVariant:"radio"}))}},{key:"renderActions",value:function(){var e=this.props,a=e.selectedBaselineIds,t=e.selectedHSPIds,n=e.entities,s=this.state,r=s.baselineName,l=s.copyBaselineChecked,i=s.copySystemChecked,c=void 0===n||void 0===n.selectedSystemIds?[]:n.selectedSystemIds;return""===r||l&&0===a.length||i&&0===c.length&&0===t.length?[B.a.createElement(X.a,{key:"confirm",variant:"primary",isDisabled:!0},"Create baseline"),B.a.createElement(X.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]:[B.a.createElement(X.a,{key:"confirm",variant:"primary",onClick:this.submitBaselineName},"Create baseline"),B.a.createElement(X.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]}},{key:"render",value:function(){var e=this.props,a=e.createBaselineError,t=e.createBaselineModalOpened;return B.a.createElement(_.a,{width:"1200px",title:"Create baseline",isOpen:t,onClose:this.cancelModal,actions:this.renderActions()},a.status?B.a.createElement(q.a,{variant:"danger",isInline:!0,title:"Status: "+a.status},B.a.createElement("p",null,a.detail)):B.a.createElement("div",null),this.renderModalBody())}}]),n}(y.Component);U.propTypes={createBaselineModalOpened:k.a.bool,createBaseline:k.a.func,selectBaseline:k.a.func,history:k.a.object,baselineData:k.a.object,toggleCreateBaselineModal:k.a.func,clearSelectedBaselines:k.a.func,entities:k.a.object,selectedBaselineIds:k.a.array,createBaselineError:k.a.object,baselineTableData:k.a.array,loading:k.a.bool,totalBaselines:k.a.number,updatePagination:k.a.func,historicalProfiles:k.a.array,selectedHSPIds:k.a.array,hasInventoryReadPermissions:k.a.bool,hasReadPermissions:k.a.bool,hasWritePermissions:k.a.bool};var V=Object(v.o)(Object(C.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.radioTable.selectedBaselineIds,createBaselineError:e.createBaselineModalState.createBaselineError,loading:e.baselinesTableState.radioTable.loading,emptyState:e.baselinesTableState.radioTable.emptyState,baselineTableData:e.baselinesTableState.radioTable.baselineTableData,totalBaselines:e.baselinesTableState.radioTable.totalBaselines,historicalProfiles:e.compareState.historicalProfiles,selectedHSPIds:e.historicProfilesState.selectedHSPIds}}),(function(e){return{toggleCreateBaselineModal:function(){return e(L.a.toggleCreateBaselineModal())},createBaseline:function(a,t){return e(L.a.createBaseline(a,t))},selectBaseline:function(a,t,n){return e(Y.a.selectBaseline(a,t,n))},clearSelectedBaselines:function(a){return e(Y.a.clearSelectedBaselines(a))}}}))(U)),G=t(408),Q=t(972),Z=t(135),$=t(409);function ee(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=f()(e);if(a){var s=f()(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return h()(this,t)}}var ae=function(e){m()(n,e);var a,t=ee(n);function n(e){var a;return c()(this,n),(a=t.call(this,e)).fetchBaseline=function(e){a.props.history.push("baselines/"+e)},a.onSelect=function(e,t,n){var s=a.props,r=s.baselineTableData;(0,s.selectBaseline)(-1===n?r.map((function(e){return e[0]})):[r[n][0]],t,"CHECKBOX")},a.onBulkSelect=function(e){var t=a.props,n=t.baselineTableData,s=t.selectBaseline,r=[];n.forEach((function(e){r.push(e[0])})),s(r,e,"CHECKBOX")},a.renderEmptyState=function(e){var t=a.props,n=t.baselineError,s=t.emptyState,r=t.loading,l=t.revertBaselineFetch,i=a.state,c=i.emptyStateMessage,o=i.errorMessage;return n.status?200!==n.status&&void 0!==n.status?B.a.createElement(G.a,{icon:M.a,color:"#c9190b",title:"Baselines cannot be displayed",text:o,error:"Error "+n.status+": "+n.detail,button:B.a.createElement("a",{onClick:function(){return l("CHECKBOX")}},B.a.createElement(I.a,{className:"reload-button"}),"Retry")}):void 0:B.a.createElement(G.a,{icon:P.a,title:"No baselines",text:c,button:B.a.createElement(N.a,{emptyState:s,hasWritePermissions:e,loading:r})})},a.state={columns:[{title:"Name",transforms:[D.a,Object(O.a)(40)]},{title:"Last updated",transforms:[D.a,Object(O.a)(45)]},{title:"",transforms:[Object(O.a)(5)]}],emptyStateMessage:["You currently have no baselines displayed.","Create a baseline to use in your Comparison analysis."],errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},a}return d()(n,[{key:"componentDidMount",value:(a=l()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"renderTable",value:function(e,a){var t=this.props,n=t.baselineTableData,s=t.loading,r=t.createBaselineModalOpened,l=t.clearEditBaselineData,i=t.selectedBaselineIds,c=t.totalBaselines,o=this.state.columns;return l(),B.a.createElement(g.a,null,B.a.createElement("div",null,B.a.createElement(R.a,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:n,loading:s,columns:o,kebab:!0,createButton:!0,exportButton:!0,onClick:this.fetchBaseline,createBaselineModalOpened:r,onBulkSelect:this.onBulkSelect,selectedBaselineIds:i,totalBaselines:c,hasReadPermissions:e,hasWritePermissions:a})))}},{key:"render",value:function(){var e=this,a=this.props,t=a.baselineError,n=a.emptyState,s=a.loading,r=a.revertBaselineFetch;return B.a.createElement($.a.Consumer,null,(function(a){return B.a.createElement(B.a.Fragment,null,B.a.createElement(V,{hasInventoryReadPermissions:a.permissions.inventoryRead,hasReadPermissions:a.permissions.baselinesRead,hasWritePermissions:a.permissions.baselinesWrite}),B.a.createElement(E.PageHeader,null,B.a.createElement(E.PageHeaderTitle,{title:"Baselines"})),B.a.createElement(E.Main,null,!1===a.permissions.baselinesRead?B.a.createElement(G.a,{icon:x.a,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):n&&!s?e.renderEmptyState(a.permissions.baselinesWrite):B.a.createElement(B.a.Fragment,null,B.a.createElement(Q.a,{error:!n&&t?t:{},onClose:r,tableId:"CHECKBOX"}),B.a.createElement(T.a,{className:"pf-t-light pf-m-opaque-100"},e.renderTable(a.permissions.baselinesRead,a.permissions.baselinesWrite)))))}))}}]),n}(y.Component);ae.propTypes={loading:k.a.bool,baselineTableData:k.a.array,emptyState:k.a.bool,createBaselineModalOpened:k.a.bool,selectBaseline:k.a.func,history:k.a.object,baselineError:k.a.object,revertBaselineFetch:k.a.func,clearEditBaselineData:k.a.func,selectedBaselineIds:k.a.array,totalBaselines:k.a.number};a.default=Object(v.o)(Object(C.connect)((function(e){return{loading:e.baselinesTableState.checkboxTable.loading,emptyState:e.baselinesTableState.checkboxTable.emptyState,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineError:e.baselinesTableState.checkboxTable.baselineError,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{selectBaseline:function(a,t,n){return e(Y.a.selectBaseline(a,t,n))},revertBaselineFetch:function(a){return e(Y.a.revertBaselineFetch(a))},clearEditBaselineData:function(){return e(Z.a.clearEditBaselineData())}}}))(ae))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map