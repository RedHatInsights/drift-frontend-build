(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{682:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t.n(n),r=t(12),s=t.n(r),c=t(29),i=t.n(c),o=t(30),d=t.n(o),u=t(31),m=t.n(u),p=t(32),h=t.n(p),y=t(33),b=t.n(y),k=t(1),f=t.n(k),C=t(0),B=t.n(C),S=t(34),v=t(368),E=t(512),g=t(511),M=t(479),x=t(520),N=t(522),w=t(231),I=t(521),L=t(496),O=t(550),T=t(40),D=t.n(T),P=t(37),j=t(523),F=t(524),_=t(517),A=t(526),K=t(263),H=t(353),J=t(560),R=t(558),V=t(374),q=function(e){function a(e){var t;return i()(this,a),(t=m()(this,h()(a).call(this,e))).cancelModal=function(){var e=t.props,a=e.toggleCreateBaselineModal,n=e.clearSelectedBaselines;t.updateBaselineName(""),n(),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.state.baselineName&&t.submitBaselineName())},t.renderModalBody=function(){var e,a=t.state,n=a.baselineName,l=a.copyBaselineChecked,r=a.copySystemChecked,s=t.props.error;return l?e=t.renderCopyBaseline():r&&(e=t.renderCopySystem()),f.a.createElement(f.a.Fragment,null,t.renderRadioButtons(),f.a.createElement("br",null),f.a.createElement("b",null,"Baseline name"),f.a.createElement("br",null),f.a.createElement(j.a,null,f.a.createElement(F.a,{type:"text",helperTextInvalid:s.hasOwnProperty("detail")?s.detail:null,fieldId:"name",isValid:!s.hasOwnProperty("status"),onKeyPress:t.checkKeyPress},f.a.createElement(_.a,{className:"fact-value",placeholder:"Baseline name",value:n,type:"text",onChange:t.updateBaselineName,isValid:!s.hasOwnProperty("status"),"aria-label":"baseline name"}))),f.a.createElement("br",null),f.a.createElement("br",null),e)},t.submitBaselineName=t.submitBaselineName.bind(D()(t)),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,a){var n=a.currentTarget.value;t.props.clearSelectedBaselines(),"fromScratchChecked"===n?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}var t;return b()(a,e),d()(a,[{key:"submitBaselineName",value:(t=s()(l.a.mark((function e(){var a,t,n,r,s,c,i,o,d,u,m,p,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,t=a.baselineName,n=a.fromScratchChecked,r=a.copyBaselineChecked,s=a.copySystemChecked,c=this.props,i=c.createBaseline,o=c.toggleCreateBaselineModal,d=c.selectedBaselineIds,u=c.history,m=c.entities,p=c.clearSelectedBaselines,h={display_name:t},e.prev=3,""===t){e.next=24;break}if(!n){e.next=11;break}return h.baseline_facts=[],e.next=9,i(h);case 9:e.next=21;break;case 11:if(1!==d.length||!r){e.next=17;break}return h={display_name:t},e.next=15,i(h,d[0]);case 15:e.next=21;break;case 17:if(1!==m.selectedSystemIds.length||!s){e.next=21;break}return h.inventory_uuid=m.selectedSystemIds[0],e.next=21,i(h);case 21:u.push("baselines/"+this.props.baselineData.id),o(),p();case 24:e.next=28;break;case 26:e.prev=26,e.t0=e.catch(3);case 28:case"end":return e.stop()}}),e,this,[[3,26]])}))),function(){return t.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,a=e.fromScratchChecked,t=e.copyBaselineChecked,n=e.copySystemChecked;return f.a.createElement(f.a.Fragment,null,f.a.createElement(A.a,{isChecked:a,id:"create baseline",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),f.a.createElement(A.a,{isChecked:t,id:"copy baseline",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),f.a.createElement(A.a,{isChecked:n,id:"copy system",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("b",null,"Select baseline to copy from"),f.a.createElement(L.a,{hasSelect:!0}))}},{key:"renderCopySystem",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("b",null,"Select system to copy from"),f.a.createElement(J.a,{selectedSystemIds:[],createBaselineModal:!0}))}},{key:"renderActions",value:function(){var e=this.props,a=e.selectedBaselineIds,t=e.entities,n=this.state,l=n.baselineName,r=n.copyBaselineChecked,s=n.copySystemChecked;return""===l||r&&0===a.length||s&&t&&void 0!==t.selectedSystemIds&&0===t.selectedSystemIds.length?[f.a.createElement(K.a,{key:"confirm",variant:"primary",isDisabled:!0},"Create baseline"),f.a.createElement(K.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]:[f.a.createElement(K.a,{key:"confirm",variant:"primary",onClick:this.submitBaselineName},"Create baseline"),f.a.createElement(K.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]}},{key:"render",value:function(){var e=this.props.createBaselineModalOpened;return f.a.createElement(H.a,{className:"create-baseline-modal",title:"Create baseline",isOpen:e,onClose:this.cancelModal,width:"auto",isFooterLeftAligned:!0,actions:this.renderActions()},this.renderModalBody())}}]),a}(k.Component);q.propTypes={createBaselineModalOpened:B.a.bool,createBaseline:B.a.func,history:B.a.object,baselineData:B.a.object,toggleCreateBaselineModal:B.a.func,clearSelectedBaselines:B.a.func,entities:B.a.object,selectedBaselineIds:B.a.array,error:B.a.object};var z=Object(P.o)(Object(S.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.selectedBaselineIds,error:e.createBaselineModalState.error}}),(function(e){return{toggleCreateBaselineModal:function(){return e(R.a.toggleCreateBaselineModal())},createBaseline:function(a,t){return e(R.a.createBaseline(a,t))},clearSelectedBaselines:function(){return e(V.a.clearSelectedBaselines())}}}))(q));t.d(a,"BaselinesPage",(function(){return U}));var U=function(e){function a(e){return i()(this,a),m()(this,h()(a).call(this,e))}var t;return b()(a,e),d()(a,[{key:"componentDidMount",value:(t=s()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"renderEmptyState",value:function(){return f.a.createElement("center",null,f.a.createElement(x.a,null,f.a.createElement(N.a,{icon:M.b}),f.a.createElement("br",null),f.a.createElement(w.a,{size:"lg"},"No baselines"),f.a.createElement(I.a,null,"You currently have no baselines displayed.",f.a.createElement("br",null),"Create a baseline to use in your System Comparison analysis."),f.a.createElement(O.a,null)))}},{key:"renderTable",value:function(){return f.a.createElement(E.a,null,f.a.createElement("div",null,f.a.createElement(L.a,{kebab:!0,createButton:!0,exportButton:!0,hasSelect:!0})))}},{key:"render",value:function(){var e=this.props,a=e.emptyState,t=e.baselineListLoading;return f.a.createElement(f.a.Fragment,null,f.a.createElement(z,null),f.a.createElement(v.PageHeader,null,f.a.createElement(v.PageHeaderTitle,{title:"Baselines"})),f.a.createElement(v.Main,null,f.a.createElement(g.a,{className:"pf-t-light pf-m-opaque-100"},a&&!1===t?this.renderEmptyState():this.renderTable())))}}]),a}(k.Component);U.propTypes={baselineListLoading:B.a.bool,fullBaselineListData:B.a.array,emptyState:B.a.bool};a.default=Object(S.connect)((function(e){return{baselineListLoading:e.baselinesTableState.baselineListLoading,fullBaselineListData:e.baselinesTableState.fullBaselineListData,emptyState:e.baselinesTableState.emptyState}}),null)(U)}}]);
//# sourceMappingURL=../sourcemaps/5.js.map