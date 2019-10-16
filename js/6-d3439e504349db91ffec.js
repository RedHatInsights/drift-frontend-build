(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{615:function(e,a,t){"use strict";t.r(a);var n=t(23),l=t.n(n),r=t(35),s=t.n(r),i=t(15),c=t.n(i),o=t(16),u=t.n(o),d=t(17),p=t.n(d),m=t(18),b=t.n(m),y=t(19),h=t.n(y),f=t(1),C=t.n(f),S=t(4),k=t.n(S),g=t(20),B=t(257),E=t(432),v=t(434),T=t(433),M=t(415),x=t(414),O=t(446),D=t(421),N=t(423),w=t(398),L=t(422),j=t(390),I=t(12),_=t(397),V=t(171);var A={toggleCreateBaselineModal:function(){return{type:V.a.TOGGLE_CREATE_BASELINE_MODAL}}},R=t(391),F=function(e){function a(e){var t;return c()(this,a),(t=p()(this,b()(a).call(this,e))).createBaseline=function(){var e=t.props,a=e.history,n=e.toggleCreateBaselineModal,l=e.addSystemModalOpened,r=e.toggleAddSystemModal;"/"===a.location.pathname&&(!0===l&&r(),a.push({pathname:"baselines"})),n()},t}return h()(a,e),u()(a,[{key:"render",value:function(){return C.a.createElement(_.a,{variant:"primary",onClick:this.createBaseline},"Create baseline")}}]),a}(f.Component);F.propTypes={toggleCreateBaselineModal:k.a.func,toggleAddSystemModal:k.a.func,history:k.a.object,addSystemModalOpened:k.a.bool};var P=Object(I.k)(Object(g.connect)(function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}},function(e){return{toggleCreateBaselineModal:function(){return e(A.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(R.a.toggleAddSystemModal())}}})(F)),K=t(185),G=t.n(K),H=t(418),J=t(425),q=t(424),z=t(479),U=t(252),X=function(e){function a(e){var t;return c()(this,a),(t=p()(this,b()(a).call(this,e))).cancelModal=function(){var e=t.props.toggleCreateBaselineModal;t.updateBaselineName(""),e()},t.renderModalBody=function(){var e,a=t.state,n=a.baselineName,l=a.copyBaselineChecked,r=a.copySystemChecked;return l?e=t.renderCopyBaseline():r&&(e=t.renderCopySystem()),C.a.createElement(C.a.Fragment,null,t.renderRadioButtons(),C.a.createElement("br",null),C.a.createElement("b",null,"Baseline name"),C.a.createElement("br",null),C.a.createElement(H.a,{className:"fact-value",value:n,type:"text",placeholder:"Baseline name",onChange:t.updateBaselineName,isValid:""!==n,"aria-label":"baseline name"}),C.a.createElement("br",null),C.a.createElement("br",null),e)},t.submitBaselineName=t.submitBaselineName.bind(G()(G()(t))),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,a){var n=a.currentTarget.value;t.props.clearSelectedBaselines(),"fromScratchChecked"===n?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===n?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}var t;return h()(a,e),u()(a,[{key:"submitBaselineName",value:(t=s()(l.a.mark(function e(){var a,t,n,r,s,i,c,o,u,d,p,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,t=a.baselineName,n=a.fromScratchChecked,r=a.copyBaselineChecked,s=a.copySystemChecked,i=this.props,c=i.createBaseline,o=i.toggleCreateBaselineModal,u=i.selectedBaselineIds,d=i.history,p=i.entities,m={display_name:t},!n){e.next=9;break}return m.baseline_facts=[],e.next=7,c(m);case 7:e.next=19;break;case 9:if(1!==u.length||!r){e.next=15;break}return m={display_name:t},e.next=13,c(m,u[0]);case 13:e.next=19;break;case 15:if(1!==p.selectedSystemIds.length||!s){e.next=19;break}return m.inventory_uuid=p.selectedSystemIds[0],e.next=19,c(m);case 19:d.push("baselines/"+this.props.baselineData.id),o();case 21:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,a=e.fromScratchChecked,t=e.copyBaselineChecked,n=e.copySystemChecked;return C.a.createElement(C.a.Fragment,null,C.a.createElement(J.a,{isChecked:a,id:"create baseline",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),C.a.createElement(J.a,{isChecked:t,id:"copy baseline",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),C.a.createElement(J.a,{isChecked:n,id:"copy system",name:"baseline-create-options",label:"Copy an existing system",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){return C.a.createElement(C.a.Fragment,null,C.a.createElement("b",null,"Select baseline to copy from"),C.a.createElement(j.a,{createBaselineModal:"true"}))}},{key:"renderCopySystem",value:function(){return C.a.createElement(C.a.Fragment,null,C.a.createElement("b",null,"Select system to copy from"),C.a.createElement(z.a,{selectedSystemIds:[],createBaselineModal:!0}))}},{key:"render",value:function(){var e=this.props.createBaselineModalOpened;return C.a.createElement(q.a,{className:"create-baseline-modal",title:"Create baseline",isOpen:e,onClose:this.cancelModal,width:"auto",actions:[C.a.createElement(_.a,{key:"confirm",variant:"primary",onClick:this.submitBaselineName},"Create baseline"),C.a.createElement(_.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]},this.renderModalBody())}}]),a}(f.Component);X.propTypes={createBaselineModalOpened:k.a.bool,createBaseline:k.a.func,history:k.a.obj,baselineData:k.a.obj,toggleCreateBaselineModal:k.a.func,clearSelectedBaselines:k.a.func,entities:k.a.object,selectedBaselineIds:k.a.array};var Y=Object(I.k)(Object(g.connect)(function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.baselinesTableState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.selectedBaselineIds}},function(e){return{toggleCreateBaselineModal:function(){return e(A.toggleCreateBaselineModal())},createBaseline:function(a,t){return e(U.a.createBaseline(a,t))},clearSelectedBaselines:function(){return e(U.a.clearSelectedBaselines())}}})(X)),Q=t(170);var W={exportToCSV:function(e,a){var t={exportType:e,exportData:a,baselineRowData:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]};return{type:Q.a.EXPORT_BASELINES_LIST_TO_CSV,payload:t}}},Z=t(404),$=t(420),ee=t(476),ae=function(e){function a(e){var t;return c()(this,a),(t=p()(this,b()(a).call(this,e))).state={kebabOpened:!1},t.exportSelect=t.exportSelect.bind(G()(G()(t))),t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t}return h()(a,e),u()(a,[{key:"exportSelect",value:function(){var e=this.props,a=e.exportType,t=e.baselineTableData,n=e.baselineData,l=e.baselineRowData;this.toggleKebab(),"baseline list"===a?this.props.exportToCSV(a,t):"baselines data"===a&&this.props.exportToCSV(a,n,l)}},{key:"render",value:function(){var e=this.state.kebabOpened,a=[C.a.createElement(Z.a,{key:"export",component:"button",onClick:this.exportSelect},"Export as CSV")];return C.a.createElement($.a,{style:{float:"left"},className:"action-kebab",toggle:C.a.createElement(ee.a,{onToggle:this.toggleKebab}),isOpen:e,dropdownItems:a,isPlain:!0})}}]),a}(f.Component);ae.propTypes={exportToCSV:k.a.func,baselineTableData:k.a.array,exportType:k.a.string,baselineData:k.a.array,baselineRowData:k.a.array};var te=Object(I.k)(Object(g.connect)(function(e){return{baselineTableData:e.baselinesTableState.baselineTableData,baselineData:e.baselinesTableState.baselineData}},function(e){return{exportToCSV:function(a,t,n){e(W.exportToCSV(a,t,n))}}})(ae)),ne=t(462),le=function(e){function a(e){return c()(this,a),p()(this,b()(a).call(this,e))}var t;return h()(a,e),u()(a,[{key:"componentDidMount",value:(t=s()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"renderToolbar",value:function(){return C.a.createElement(E.a,{className:"drift-toolbar"},C.a.createElement(v.a,null,C.a.createElement(T.a,null,C.a.createElement(ne.a,null))),C.a.createElement(v.a,null,C.a.createElement(T.a,null,C.a.createElement(P,null)),C.a.createElement(T.a,null,C.a.createElement(te,{exportType:"baseline list"}))))}},{key:"renderEmptyState",value:function(){return C.a.createElement("center",null,C.a.createElement(D.a,null,C.a.createElement(N.a,{icon:O.a}),C.a.createElement("br",null),C.a.createElement(w.a,{size:"lg"},"No baselines"),C.a.createElement(L.a,null,"You currently have no baselines displayed.",C.a.createElement("br",null),"Please create a baseline to use in your System Comparison analysis."),C.a.createElement(P,null)))}},{key:"renderTable",value:function(){return C.a.createElement(M.a,null,this.renderToolbar(),C.a.createElement("div",null,C.a.createElement(j.a,{kebab:"true"})))}},{key:"render",value:function(){var e=this.props,a=e.emptyState,t=e.baselineListLoading;return C.a.createElement(C.a.Fragment,null,C.a.createElement(Y,null),C.a.createElement(B.PageHeader,null,C.a.createElement(B.PageHeaderTitle,{title:"Baselines"})),C.a.createElement(B.Main,null,C.a.createElement(x.a,{className:"pf-t-light pf-m-opaque-100"},a&&!1===t?this.renderEmptyState():this.renderTable())))}}]),a}(f.Component);le.propTypes={baselineListLoading:k.a.bool,fullBaselineListData:k.a.array,emptyState:k.a.array};a.default=Object(g.connect)(function(e){return{baselineListLoading:e.baselinesTableState.baselineListLoading,fullBaselineListData:e.baselinesTableState.fullBaselineListData,emptyState:e.baselinesTableState.emptyState}},null)(le)}}]);
//# sourceMappingURL=../sourcemaps/6.js.map