(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{793:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t.n(n),r=t(12),c=t.n(r),i=t(28),s=t.n(i),o=t(29),d=t.n(o),u=t(30),p=t.n(u),f=t(31),h=t.n(f),m=t(39),b=t.n(m),y=t(32),g=t.n(y),E=t(1),v=t.n(E),k=t(0),B=t.n(k),D=t(36),C=t(33),F=t(372),S=t(555),N=t(551),M=t(552),w=t(553),O=t(554),x=t(515),T=t(516),V=t(531),P=t(577),R=t(579),I=t(578),A=t(356),K=t(357),j=t(358),_=t(234),L=t(27);var H={countFacts:function(e){var a=0,t=0;return e.forEach((function(e){e.selected?L.a.isCategory(e)?a+=1:t+=1:L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){e.selected&&(t+=1)}))})),{categories:a,facts:t}}},q=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).isDisabled=function(){var e=t.props.editBaselineTableData,a=!0;return e.forEach((function(e){e.selected&&(a=!1),L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){e.selected&&(a=!1)}))})),a},t.state={kebabOpened:!1,modalOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t.toggleModalOpened=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e,kebabOpened:!1})},t}return g()(a,e),d()(a,[{key:"render",value:function(){var e,a,t,n=this.state,l=n.kebabOpened,r=n.modalOpened,c=this.props.editBaselineTableData,i=H.countFacts(c),s=i.categories,o=i.facts;return s>0&&(a=1===s?"1 category":s+" categories"),o>0&&(t=1===o?"1 fact":o+" facts"),e=[v.a.createElement(A.a,{key:"multi-delete",component:"button",onClick:this.toggleModalOpened,isDisabled:!(c.length>0)||this.isDisabled()},"Delete facts")],v.a.createElement(v.a.Fragment,null,r?v.a.createElement(_.a,{toggleModal:this.toggleModalOpened.bind(this),modalOpened:r,categoryMessage:a,factMessage:t}):null,v.a.createElement(K.a,{style:{float:"left"},toggle:v.a.createElement(j.a,{onToggle:this.toggleKebab}),isOpen:l,dropdownItems:e,isPlain:!0}))}}]),a}(E.Component);q.propTypes={editBaselineTableData:B.a.array};var z=Object(C.connect)((function(e){return{editBaselineTableData:e.editBaselineState.editBaselineTableData}}),null)(q),J=t(69),U=t(34),X=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).handleAddFact=function(){var e=t.props,a=e.setFactData,n=e.toggleFactModal;a({factName:"",factValue:"",fact:[]}),n()},t}return g()(a,e),d()(a,[{key:"render",value:function(){return v.a.createElement(J.a,{variant:"primary",onClick:this.handleAddFact},"Add fact or category")}}]),a}(E.Component);X.propTypes={toggleFactModal:B.a.func,setFactData:B.a.func};var G=Object(C.connect)(null,(function(e){return{toggleFactModal:function(){return e(U.a.toggleFactModal())},setFactData:function(a){return e(U.a.setFactData(a))}}}))(X),Q=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).state={bulkSelectItems:[{title:"Select all",key:"select-all",onClick:function(){return t.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",onClick:function(){return t.props.onBulkSelect(!1)}}]},t}return g()(a,e),d()(a,[{key:"render",value:function(){var e=this.props,a=e.isDisabled,t=e.onBulkSelect,n=e.selected,l=this.state.bulkSelectItems;return v.a.createElement(P.a,{className:"display-margin"},v.a.createElement(R.a,null,v.a.createElement(I.a,null,v.a.createElement(F.BulkSelect,{count:n>0?n:null,items:l,checked:n>0,onSelect:function(){return t(!n>0)},isDisabled:a}))),v.a.createElement(R.a,null,v.a.createElement(I.a,null,v.a.createElement(G,null)),v.a.createElement(I.a,null,v.a.createElement(z,null))))}}]),a}(E.Component);Q.propTypes={isDisabled:B.a.bool,onBulkSelect:B.a.func,selected:B.a.any};var W=Q,Y=t(568),Z=t(569),$=t(559),ee=t(266),ae=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.cancelFact=t.cancelFact.bind(b()(t)),t.confirmModal=t.confirmModal.bind(b()(t)),t.renderCategoryCheckbox=t.renderCategoryCheckbox.bind(b()(t)),t.renderFactInput=t.renderFactInput.bind(b()(t)),t.renderValueInput=t.renderValueInput.bind(b()(t)),t.renderModalBody=t.renderModalBody.bind(b()(t)),t.state={factName:t.props.factName,factValue:t.props.factValue,factData:t.props.factData,isCategory:t.props.isCategory},t.state.isAddFact=""===t.props.factName&&""===t.props.factValue,t.state.isEditFact=""!==t.props.factName&&""!==t.props.factValue,t.handleChange=function(e){t.setState({isCategory:e})},t.handleNewName=function(e){t.setState({factName:e})},t.handleNewValue=function(e){t.setState({factValue:e})},t}var t;return g()(a,e),d()(a,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:(t=c()(l.a.mark((function e(){var a,t,n,r,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,t=a.toggleFactModal,n=a.baselineData,r=a.patchBaseline,c=a.fetchBaselineData,i=this.state.isAddFact,s="",e.prev=3,s=i?this.addFact(n):this.editFact(n),e.next=7,r(n.id,s);case 7:e.sent&&c(n.id),t(),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:case"end":return e.stop()}}),e,this,[[3,12]])}))),function(){return t.apply(this,arguments)})},{key:"addFact",value:function(e){var a=this.state,t=a.isCategory,n=a.factName,l=a.factValue,r=a.factData,c=L.a.buildNewFactData(t,n,l,r);return L.a.makeAddFactPatch(c,e)}},{key:"editFact",value:function(e){var a=this.state,t=a.isCategory,n=a.factName,l=a.factValue,r=a.factData,c=L.a.buildEditedFactData(t,this.props.factName,n,this.props.factValue,l,r);return L.a.makeEditFactPatch(c,e,r)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state,a=e.isCategory,t=e.isEditFact;return v.a.createElement(S.a,{"aria-label":"controlled checkbox example",label:"This is a category",id:"isCategory",name:"isCategory",onChange:this.handleChange,isChecked:a,isDisabled:a&&t})}},{key:"renderFactInput",value:function(){var e=this.props.error,a=this.state,t=a.factName,n=a.isCategory;return v.a.createElement("div",{className:"fact-value"},v.a.createElement(Y.a,null,v.a.createElement(Z.a,{label:n?"Category name":"Fact name",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,isValid:!e.hasOwnProperty("status"),fieldId:"fact name",onKeyPress:this.checkKeyPress},v.a.createElement($.a,{value:t,type:"text",placeholder:"Name",onChange:this.handleNewName,isValid:!e.hasOwnProperty("status"),"aria-label":"fact name"}))))}},{key:"renderValueInput",value:function(){var e=this.props.error,a=this.state.factValue;return v.a.createElement("div",{className:"fact-value"},v.a.createElement(Y.a,null,v.a.createElement(Z.a,{label:"Value",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,isValid:!e.hasOwnProperty("status"),fieldId:"fact value",onKeyPress:this.checkKeyPress},v.a.createElement($.a,{value:a,type:"text",placeholder:"Value",onChange:this.handleNewValue,isValid:!e.hasOwnProperty("status"),"aria-label":"value"}))))}},{key:"renderModalBody",value:function(){var e=this.props.isSubFact,a=this.state,t=a.isAddFact,n=a.isCategory;return v.a.createElement(v.a.Fragment,null,t&&!e||n?this.renderCategoryCheckbox():null,this.renderFactInput(),v.a.createElement("br",null),n?null:this.renderValueInput())}},{key:"title",value:function(){var e=this.props.isSubFact,a=this.state,t=a.isAddFact,n=a.isEditFact,l=a.isCategory,r="Add fact";return!0!==n||l||e?!0===t&&!0===l?r="Add category":!0===t&&!0===e?r="Add sub fact":!0===n&&!0===e?r="Edit sub fact":!0===l&&(r="Edit category"):r="Edit fact",r}},{key:"render",value:function(){var e=this.props.factModalOpened;return v.a.createElement(ee.a,{className:"small-modal-body",title:this.title(),isOpen:e,onClose:this.cancelFact,isFooterLeftAligned:!0,actions:[v.a.createElement(J.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),v.a.createElement(J.a,{key:"cancel",variant:"link",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),a}(E.Component);ae.propTypes={toggleFactModal:B.a.func,factModalOpened:B.a.bool,factName:B.a.string,factValue:B.a.string,factData:B.a.object,isCategory:B.a.bool,isSubFact:B.a.bool,baselineData:B.a.object,patchBaseline:B.a.func,error:B.a.object,fetchBaselineData:B.a.func};var te=Object(C.connect)((function(e){return{factModalOpened:e.editBaselineState.factModalOpened,factName:e.editBaselineState.factName,factValue:e.editBaselineState.factValue,factData:e.editBaselineState.factData,isCategory:e.editBaselineState.isCategory,isSubFact:e.editBaselineState.isSubFact,baselineData:e.editBaselineState.baselineData,error:e.editBaselineState.error}}),(function(e){return{toggleFactModal:function(){return e(U.a.toggleFactModal())},patchBaseline:function(a,t){return e(U.a.patchBaseline(a,t))},fetchBaselineData:function(a){return e(U.a.fetchBaselineData(a))}}}))(ae),ne=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).cancelModal=function(){var e=t.props,a=e.toggleEditNameModal,n=e.baselineData;t.updateBaselineName(n.display_name),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.state={baselineName:t.props.baselineData.display_name},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.confirmModal=t.confirmModal.bind(b()(t)),t}var t;return g()(a,e),d()(a,[{key:"confirmModal",value:(t=c()(l.a.mark((function e(){var a,t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.baselineName,t=this.props,n=t.baselineData,r=t.patchBaseline,c=t.toggleEditNameModal,e.prev=2,e.next=5,r(n.id,{display_name:a,facts_patch:[]});case 5:c(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return t.apply(this,arguments)})},{key:"renderModalBody",value:function(){var e=this.state.baselineName,a=this.props.error;return v.a.createElement("div",{className:"fact-value"},v.a.createElement(Y.a,null,v.a.createElement(Z.a,{label:"Baseline title",isRequired:!0,fieldId:"baseline name",helperTextInvalid:a.hasOwnProperty("detail")?a.detail:null,isValid:!a.hasOwnProperty("status"),onKeyPress:this.checkKeyPress},v.a.createElement($.a,{value:e,type:"text",onChange:this.updateBaselineName,isValid:!a.hasOwnProperty("status"),"aria-label":"baseline name"}))))}},{key:"render",value:function(){var e=this.props.modalOpened;return v.a.createElement(ee.a,{className:"small-modal-body",title:"Edit name",isOpen:e,onClose:this.cancelModal,isFooterLeftAligned:!0,actions:[v.a.createElement(J.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),v.a.createElement(J.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]},this.renderModalBody())}}]),a}(E.Component);ne.propTypes={baselineData:B.a.object,toggleEditNameModal:B.a.func,modalOpened:B.a.bool,patchBaseline:B.a.func,error:B.a.object};var le=Object(C.connect)(null,(function(e){return{patchBaseline:function(a,t){return e(U.a.patchBaseline(a,t))}}}))(ne),re=t(78),ce=t(9),ie=t(422);t.d(a,"EditBaseline",(function(){return se}));var se=function(e){function a(e){var t;return s()(this,a),(t=p()(this,h()(a).call(this,e))).onSelect=function(e,a){var n,l=t.props,r=l.editBaselineTableData,c=l.selectFact,i=[],s=Number(a.target.name);r.forEach((function(e){e[ce.e]===s?n=e:L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){e[ce.e]===s&&(n=e)}))})),i=[n[0]],L.a.isCategory(n)&&L.a.baselineSubFacts(n).forEach((function(e){i.push(e[ce.e])})),c(i,e)},t.onBulkSelect=function(e){var a=t.props,n=a.editBaselineTableData,l=a.selectFact,r=[];n.forEach((function(e){r.push(e[ce.e]),L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){r.push(e[ce.e])}))})),l(r,e)},t.renderCheckbox=function(e){var a;return L.a.isCategory(e)?a="category-"+e[ce.e]:"string"==typeof e[ce.g]&&(a="fact-"+e[ce.e]),v.a.createElement(S.a,{isChecked:e.selected,onChange:t.onSelect,id:a,name:e[ce.e]})},t.state={modalOpened:!1},t.fetchBaselineId(),t.renderBreadcrumb=t.renderBreadcrumb.bind(b()(t)),t.goToBaselinesList=t.goToBaselinesList.bind(b()(t)),t.toggleEditNameModal=function(){var e=t.state.modalOpened,a=t.props.clearErrorData;t.setState({modalOpened:!e}),a()},t}var t;return g()(a,e),d()(a,[{key:"componentDidMount",value:(t=c()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"fetchBaselineId",value:function(){var e=this.props,a=e.match.params;(0,e.fetchBaselineData)(a.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,a=e.history;(0,e.clearBaselineData)("CHECKBOX"),a.push("/baselines")}},{key:"renderBreadcrumb",value:function(){var e=this,a=this.props.baselineData;return v.a.createElement(N.a,null,v.a.createElement(M.a,null,v.a.createElement("a",{onClick:function(){return e.goToBaselinesList()}},"Baselines")),v.a.createElement(M.a,{isActive:!0},a.display_name))}},{key:"renderHeaderRow",value:function(){return v.a.createElement("tr",{key:"edit-baseline-table-header"},v.a.createElement("th",null),v.a.createElement("th",{className:"edit-baseline-header"},v.a.createElement("div",null,"Fact")),v.a.createElement("th",{className:"edit-baseline-header"},v.a.createElement("div",null,"Value")),v.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){for(var e=[],a=[],t=0;t<3;t+=1)a.push(v.a.createElement("td",null,v.a.createElement(F.Skeleton,{size:F.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(v.a.createElement("tr",null,a));return e}},{key:"renderExpandableRowButton",value:function(e){var a=this;return this.props.expandedRows.includes(e)?v.a.createElement(x.b,{className:"pointer active-blue",onClick:function(){return a.props.expandRow(e)}}):v.a.createElement(T.b,{className:"pointer",onClick:function(){return a.props.expandRow(e)}})}},{key:"renderRowData",value:function(e){var a=this,t=this.props,n=t.expandedRows,l=t.baselineData,r=[],c=[],i=l.baseline_facts.find((function(a){return a.name===e[ce.f]}));return r.push(v.a.createElement("td",{className:n.includes(e[ce.f])?"pf-c-table__check nested-fact":"pf-c-table__check"},this.renderCheckbox(e))),L.a.isCategory(e)?(r.push(v.a.createElement("td",null,this.renderExpandableRowButton(e[ce.f])," ",e[ce.f])),r.push(v.a.createElement("td",null)),r.push(L.a.renderKebab({factName:e[ce.f],factData:i,isCategory:!0})),c.push(v.a.createElement("tr",{key:e[ce.f]},r)),n.includes(e[ce.f])&&L.a.baselineSubFacts(e).forEach((function(e){(r=[]).push(v.a.createElement("td",{className:"pf-c-table__check nested-fact"},a.renderCheckbox(e))),r.push(v.a.createElement("td",null,v.a.createElement("p",{className:"child-row"},e[ce.f]))),r.push(v.a.createElement("td",null,e[ce.g])),r.push(L.a.renderKebab({factName:e[ce.f],factValue:e[ce.g],factData:i,isSubFact:!0})),c.push(v.a.createElement("tr",{key:e[ce.f]},r))}))):(r.push(v.a.createElement("td",null,e[ce.f])),r.push(v.a.createElement("td",null,e[ce.g])),r.push(L.a.renderKebab({factName:e[ce.f],factValue:e[ce.g],factData:i})),c.push(v.a.createElement("tr",{key:e[ce.f]},r))),c}},{key:"renderRows",value:function(){var e=this.props.editBaselineTableData,a=[],t=[];if(0!==e.length)for(var n=0;n<e.length;n+=1)t=this.renderRowData(e[n]),a.push(t);else a=v.a.createElement("td",{colSpan:"3"},v.a.createElement(ie.a,{title:"No facts",text:["No facts or categories have been added to this baseline yet."],button:v.a.createElement(G,null)}));return a}},{key:"renderTable",value:function(){var e=this.props.baselineData;return v.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-compact ins-entity-table drift-table"},v.a.createElement("thead",null,this.renderHeaderRow()),v.a.createElement("tbody",{key:"edit-baseline-table"},void 0!==e?this.renderRows():this.renderLoadingRows()))}},{key:"render",value:function(){var e=this,a=this.state.modalOpened,t=this.props,n=t.baselineData,l=t.baselineDataLoading,r=t.editBaselineTableData,c=t.factModalOpened,i=t.error,s=L.a.findSelected(r);return v.a.createElement(v.a.Fragment,null,void 0===n||l?v.a.createElement(F.PageHeader,null,v.a.createElement("div",null,v.a.createElement(F.Skeleton,{size:F.SkeletonSize.lg}))):v.a.createElement(v.a.Fragment,null,v.a.createElement(le,{baselineData:n,modalOpened:a,toggleEditNameModal:this.toggleEditNameModal,error:i}),v.a.createElement(F.PageHeader,null,this.renderBreadcrumb(),v.a.createElement(F.PageHeaderTitle,{title:n?n.display_name:""}),v.a.createElement(V.b,{className:"pointer not-active edit-icon-margin",onClick:function(){return e.toggleEditNameModal()}}))),v.a.createElement(F.Main,null,v.a.createElement(w.a,{className:"pf-t-light pf-m-opaque-100"},v.a.createElement(O.a,null,c?v.a.createElement(te,null):null,v.a.createElement(W,{selected:s,onBulkSelect:this.onBulkSelect,isDisabled:0===r.length}),this.renderTable()))))}}]),a}(E.Component);se.propTypes={history:B.a.object,match:B.a.any,clearBaselineData:B.a.func,baselineData:B.a.array,baselineDataLoading:B.a.bool,fetchBaselineData:B.a.func,factModalOpened:B.a.bool,editBaselineTableData:B.a.array,expandRow:B.a.func,expandedRows:B.a.array,selectFact:B.a.func,clearErrorData:B.a.func,error:B.a.object};a.default=Object(D.o)(Object(C.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,baselineDataLoading:e.editBaselineState.baselineDataLoading,factModalOpened:e.editBaselineState.factModalOpened,editBaselineTableData:e.editBaselineState.editBaselineTableData,expandedRows:e.editBaselineState.expandedRows,error:e.editBaselineState.error}}),(function(e){return{clearBaselineData:function(a){return e(re.a.clearBaselineData(a))},expandRow:function(a){return e(U.a.expandRow(a))},fetchBaselineData:function(a){return e(U.a.fetchBaselineData(a))},selectFact:function(a,t){return e(U.a.selectFact(a,t))},clearErrorData:function(){return e(U.a.clearErrorData())}}}))(se))}}]);
//# sourceMappingURL=../sourcemaps/6.js.map