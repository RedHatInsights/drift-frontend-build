(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{612:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),r=t(17),s=t.n(r),c=t(18),i=t.n(c),o=t(19),d=t.n(o),u=t(20),m=t.n(u),p=t(21),h=t.n(p),y=t(1),b=t.n(y),C=t(3),k=t.n(C),f=t(22),B=t(252),S=t(423),E=t(422),v=t(377),g=t(429),M=t(431),w=t(406),x=t(430),N=t(399),I=t(460),L=t(183),O=t.n(L),T=t(12),D=t(432),j=t(433),F=t(426),P=t(435),_=t(405),A=t(434),H=t(479),J=t(477),R=t(247),V=function(e){function a(e){var t;return s()(this,a),(t=d()(this,m()(a).call(this,e))).cancelModal=function(){var e=t.props.toggleCreateBaselineModal;t.updateBaselineName(""),e()},t.renderModalBody=function(){var e,a=t.state,n=a.baselineName,l=a.copyBaselineChecked,r=a.copySystemChecked,s=t.props.error;return l?e=t.renderCopyBaseline():r&&(e=t.renderCopySystem()),b.a.createElement(b.a.Fragment,null,t.renderRadioButtons(),b.a.createElement("br",null),b.a.createElement("b",null,"Baseline name"),b.a.createElement("br",null),b.a.createElement(D.a,null,b.a.createElement(j.a,{type:"text",helperTextInvalid:s.hasOwnProperty("detail")?s.detail:null,fieldId:"name",isValid:!s.hasOwnProperty("status")},b.a.createElement(F.a,{className:"fact-value",placeHolder:"Baseline name",value:n,type:"text",onChange:t.updateBaselineName,isValid:!s.hasOwnProperty("status"),"aria-label":"baseline name"}))),b.a.createElement("br",null),b.a.createElement("br",null),e)},t.submitBaselineName=t.submitBaselineName.bind(O()(t)),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,a){var n=a.currentTarget.value;t.props.clearSelectedBaselines(),"fromScratchChecked"===n?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}return h()(a,e),i()(a,[{key:"submitBaselineName",value:function(){var e,a,t,n,r,s,c,i,o,d,u,m;return l.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(e=this.state,a=e.baselineName,t=e.fromScratchChecked,n=e.copyBaselineChecked,r=e.copySystemChecked,s=this.props,c=s.createBaseline,i=s.toggleCreateBaselineModal,o=s.selectedBaselineIds,d=s.history,u=s.entities,m={display_name:a},p.prev=3,!t){p.next=10;break}return m.baseline_facts=[],p.next=8,l.a.awrap(c(m));case 8:p.next=20;break;case 10:if(1!==o.length||!n){p.next=16;break}return m={display_name:a},p.next=14,l.a.awrap(c(m,o[0]));case 14:p.next=20;break;case 16:if(1!==u.selectedSystemIds.length||!r){p.next=20;break}return m.inventory_uuid=u.selectedSystemIds[0],p.next=20,l.a.awrap(c(m));case 20:d.push("baselines/"+this.props.baselineData.id),i(),p.next=26;break;case 24:p.prev=24,p.t0=p.catch(3);case 26:case"end":return p.stop()}}),null,this,[[3,24]])}},{key:"renderRadioButtons",value:function(){var e=this.state,a=e.fromScratchChecked,t=e.copyBaselineChecked,n=e.copySystemChecked;return b.a.createElement(b.a.Fragment,null,b.a.createElement(P.a,{isChecked:a,id:"create baseline",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),b.a.createElement(P.a,{isChecked:t,id:"copy baseline",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),b.a.createElement(P.a,{isChecked:n,id:"copy system",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("b",null,"Select baseline to copy from"),b.a.createElement(N.a,{createBaselineModal:"true"}))}},{key:"renderCopySystem",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("b",null,"Select system to copy from"),b.a.createElement(H.a,{selectedSystemIds:[],createBaselineModal:!0}))}},{key:"renderActions",value:function(){var e=this.props,a=e.selectedBaselineIds,t=e.entities,n=this.state,l=n.baselineName,r=n.copyBaselineChecked,s=n.copySystemChecked;return""===l||r&&0===a.length||s&&t&&void 0!==t.selectedSystemIds&&0===t.selectedSystemIds.length?[b.a.createElement(_.a,{key:"confirm",variant:"primary",isDisabled:!0},"Create baseline"),b.a.createElement(_.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]:[b.a.createElement(_.a,{key:"confirm",variant:"primary",onClick:this.submitBaselineName},"Create baseline"),b.a.createElement(_.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]}},{key:"render",value:function(){var e=this.props.createBaselineModalOpened;return b.a.createElement(A.a,{className:"create-baseline-modal",title:"Create baseline",isOpen:e,onClose:this.cancelModal,width:"auto",isFooterLeftAligned:!0,actions:this.renderActions()},this.renderModalBody())}}]),a}(y.Component);V.propTypes={createBaselineModalOpened:k.a.bool,createBaseline:k.a.func,history:k.a.obj,baselineData:k.a.obj,toggleCreateBaselineModal:k.a.func,clearSelectedBaselines:k.a.func,entities:k.a.object,selectedBaselineIds:k.a.array,error:k.a.obj};var q=Object(T.o)(Object(f.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.selectedBaselineIds,error:e.createBaselineModalState.error}}),(function(e){return{toggleCreateBaselineModal:function(){return e(J.a.toggleCreateBaselineModal())},createBaseline:function(a,t){return e(J.a.createBaseline(a,t))},clearSelectedBaselines:function(){return e(R.a.clearSelectedBaselines())}}}))(V)),z=function(e){function a(e){return s()(this,a),d()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"componentDidMount",value:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"renderEmptyState",value:function(){return b.a.createElement("center",null,b.a.createElement(g.a,null,b.a.createElement(M.a,{icon:v.b}),b.a.createElement("br",null),b.a.createElement(w.a,{size:"lg"},"No baselines"),b.a.createElement(x.a,null,"You currently have no baselines displayed.",b.a.createElement("br",null),"Create a baseline to use in your System Comparison analysis."),b.a.createElement(I.a,null)))}},{key:"renderTable",value:function(){return b.a.createElement(S.a,null,b.a.createElement("div",null,b.a.createElement(N.a,{kebab:!0,createButton:!0})))}},{key:"render",value:function(){var e=this.props,a=e.emptyState,t=e.baselineListLoading;return b.a.createElement(b.a.Fragment,null,b.a.createElement(q,null),b.a.createElement(B.PageHeader,null,b.a.createElement(B.PageHeaderTitle,{title:"Baselines"})),b.a.createElement(B.Main,null,b.a.createElement(E.a,{className:"pf-t-light pf-m-opaque-100"},a&&!1===t?this.renderEmptyState():this.renderTable())))}}]),a}(y.Component);z.propTypes={baselineListLoading:k.a.bool,fullBaselineListData:k.a.array,emptyState:k.a.bool};a.default=Object(f.connect)((function(e){return{baselineListLoading:e.baselinesTableState.baselineListLoading,fullBaselineListData:e.baselinesTableState.fullBaselineListData,emptyState:e.baselinesTableState.emptyState}}),null)(z)}}]);
//# sourceMappingURL=../sourcemaps/6.js.map