(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{617:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t.n(n),r=t(28),i=t.n(r),c=t(29),s=t.n(c),o=t(30),d=t.n(o),u=t(31),p=t.n(u),f=t(39),h=t.n(f),m=t(32),b=t.n(m),g=t(1),y=t.n(g),v=t(0),E=t.n(v),k=t(36),B=t(33),D=t(359),C=t(502),F=t(498),N=t(499),w=t(500),M=t(501),S=t(459),O=t(390),x=t(467),V=t(518),R=t(520),T=t(519),A=t(259),I=t(352),P=t(353),_=t(354),j=t(233),L=t(13),H=function(e){function a(e){var t;return i()(this,a),(t=d()(this,p()(a).call(this,e))).isDisabled=function(){var e=t.props.editBaselineTableData,a=!0;return e.forEach((function(e){e.selected&&(a=!1),L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){e.selected&&(a=!1)}))})),a},t.state={kebabOpened:!1,modalOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t.toggleModalOpened=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e,kebabOpened:!1})},t}return b()(a,e),s()(a,[{key:"render",value:function(){var e,a=this.state,t=a.kebabOpened,n=a.modalOpened,l=this.props.editBaselineTableData;return e=[y.a.createElement(I.a,{key:"multi-delete",component:"button",onClick:this.toggleModalOpened,isDisabled:!(l.length>0)||this.isDisabled()},"Delete facts")],y.a.createElement(y.a.Fragment,null,n?y.a.createElement(j.a,{toggleModal:this.toggleModalOpened.bind(this),modalOpened:n}):null,y.a.createElement(P.a,{style:{float:"left"},toggle:y.a.createElement(_.a,{onToggle:this.toggleKebab}),isOpen:t,dropdownItems:e,isPlain:!0}))}}]),a}(g.Component);H.propTypes={editBaselineTableData:E.a.array};var K=Object(B.connect)((function(e){return{editBaselineTableData:e.editBaselineState.editBaselineTableData}}),null)(H),q=t(34),z=function(e){function a(e){var t;return i()(this,a),(t=d()(this,p()(a).call(this,e))).handleAddFact=t.handleAddFact.bind(h()(t)),t}return b()(a,e),s()(a,[{key:"handleAddFact",value:function(){var e=this.props,a=e.setFactData,t=e.toggleFactModal;a({factName:"",factValue:"",fact:[]}),t()}},{key:"render",value:function(){return y.a.createElement(V.a,{className:"display-margin"},y.a.createElement(R.a,null,y.a.createElement(T.a,null,y.a.createElement(A.a,{variant:"primary",onClick:this.handleAddFact},"Add fact")),y.a.createElement(T.a,null,y.a.createElement(K,null))))}}]),a}(g.Component);z.propTypes={toggleFactModal:E.a.func,setFactData:E.a.func};var J=Object(B.connect)(null,(function(e){return{toggleFactModal:function(){return e(q.a.toggleFactModal())},setFactData:function(a){return e(q.a.setFactData(a))}}}))(z),U=t(509),G=t(510),Q=t(504),W=t(351),X=function(e){function a(e){var t;return i()(this,a),(t=d()(this,p()(a).call(this,e))).cancelFact=t.cancelFact.bind(h()(t)),t.confirmModal=t.confirmModal.bind(h()(t)),t.renderCategoryCheckbox=t.renderCategoryCheckbox.bind(h()(t)),t.renderFactInput=t.renderFactInput.bind(h()(t)),t.renderValueInput=t.renderValueInput.bind(h()(t)),t.renderModalBody=t.renderModalBody.bind(h()(t)),t.state={factName:t.props.factName,factValue:t.props.factValue,factData:t.props.factData,isCategory:t.props.isCategory},t.state.isAddFact=""===t.props.factName&&""===t.props.factValue,t.state.isEditFact=""!==t.props.factName&&""!==t.props.factValue,t.handleChange=function(e){t.setState({isCategory:e})},t.handleNewName=function(e){t.setState({factName:e})},t.handleNewValue=function(e){t.setState({factValue:e})},t}return b()(a,e),s()(a,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:function(){var e,a,t,n,r,i,c;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=this.props,a=e.toggleFactModal,t=e.baselineData,n=e.patchBaseline,r=e.fetchBaselineData,i=this.state.isAddFact,c="",s.prev=3,c=i?this.addFact(t):this.editFact(t),s.next=7,l.a.awrap(n(t.id,c));case 7:s.sent&&r(t.id),a(),s.next=14;break;case 12:s.prev=12,s.t0=s.catch(3);case 14:case"end":return s.stop()}}),null,this,[[3,12]])}},{key:"addFact",value:function(e){var a=this.state,t=a.isCategory,n=a.factName,l=a.factValue,r=a.factData,i=L.a.buildNewFactData(t,n,l,r);return L.a.makeAddFactPatch(i,e)}},{key:"editFact",value:function(e){var a=this.state,t=a.isCategory,n=a.factName,l=a.factValue,r=a.factData,i=L.a.buildEditedFactData(t,this.props.factName,n,this.props.factValue,l,r);return L.a.makeEditFactPatch(i,e,r)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state,a=e.isCategory,t=e.isEditFact;return y.a.createElement(C.a,{"aria-label":"controlled checkbox example",label:"This is a category",id:"isCategory",name:"isCategory",onChange:this.handleChange,isChecked:a,isDisabled:a&&t})}},{key:"renderFactInput",value:function(){var e=this.props.error,a=this.state,t=a.factName,n=a.isCategory;return y.a.createElement("div",{className:"fact-value"},y.a.createElement(U.a,null,y.a.createElement(G.a,{label:n?"Category name":"Fact name",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,isValid:!e.hasOwnProperty("status"),fieldId:"fact name"},y.a.createElement(Q.a,{value:t,type:"text",placeholder:"Name",onChange:this.handleNewName,isValid:!e.hasOwnProperty("status"),"aria-label":"fact name"}))))}},{key:"renderValueInput",value:function(){var e=this.props.error,a=this.state.factValue;return y.a.createElement("div",{className:"fact-value"},y.a.createElement(U.a,null,y.a.createElement(G.a,{label:"Value",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,isValid:!e.hasOwnProperty("status"),fieldId:"fact value"},y.a.createElement(Q.a,{value:a,type:"text",placeholder:"Value",onChange:this.handleNewValue,isValid:!e.hasOwnProperty("status"),"aria-label":"value"}))))}},{key:"renderModalBody",value:function(){var e=this.props.isSubFact,a=this.state,t=a.isAddFact,n=a.isCategory;return y.a.createElement(y.a.Fragment,null,t&&!e||n?this.renderCategoryCheckbox():null,this.renderFactInput(),y.a.createElement("br",null),n?null:this.renderValueInput())}},{key:"title",value:function(){var e=this.props.isSubFact,a=this.state,t=a.isAddFact,n=a.isEditFact,l=a.isCategory,r="Add fact";return!0!==n||l||e?!0===t&&!0===l?r="Add category":!0===t&&!0===e?r="Add sub fact":!0===n&&!0===e?r="Edit sub fact":!0===l&&(r="Edit category"):r="Edit fact",r}},{key:"render",value:function(){var e=this.props.factModalOpened;return y.a.createElement(W.a,{className:"small-modal-body",title:this.title(),isOpen:e,onClose:this.cancelFact,width:"auto",isFooterLeftAligned:!0,actions:[y.a.createElement(A.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),y.a.createElement(A.a,{key:"cancel",variant:"secondary",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),a}(g.Component);X.propTypes={toggleFactModal:E.a.func,factModalOpened:E.a.bool,factName:E.a.string,factValue:E.a.string,factData:E.a.object,isCategory:E.a.bool,isSubFact:E.a.bool,baselineData:E.a.object,patchBaseline:E.a.func,error:E.a.object,fetchBaselineData:E.a.func};var Y=Object(B.connect)((function(e){return{factModalOpened:e.editBaselineState.factModalOpened,factName:e.editBaselineState.factName,factValue:e.editBaselineState.factValue,factData:e.editBaselineState.factData,isCategory:e.editBaselineState.isCategory,isSubFact:e.editBaselineState.isSubFact,baselineData:e.editBaselineState.baselineData,error:e.editBaselineState.error}}),(function(e){return{toggleFactModal:function(){return e(q.a.toggleFactModal())},patchBaseline:function(a,t){return e(q.a.patchBaseline(a,t))},fetchBaselineData:function(a){return e(q.a.fetchBaselineData(a))}}}))(X),Z=function(e){function a(e){var t;return i()(this,a),(t=d()(this,p()(a).call(this,e))).cancelModal=function(){var e=t.props,a=e.toggleEditNameModal,n=e.baselineData;t.updateBaselineName(n.display_name),a()},t.state={baselineName:t.props.baselineData.display_name},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.confirmModal=t.confirmModal.bind(h()(t)),t}return b()(a,e),s()(a,[{key:"confirmModal",value:function(){var e,a,t,n,r;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=this.state.baselineName,a=this.props,t=a.baselineData,n=a.patchBaseline,r=a.toggleEditNameModal,i.prev=2,i.next=5,l.a.awrap(n(t.id,{display_name:e,facts_patch:[]}));case 5:r(),i.next=10;break;case 8:i.prev=8,i.t0=i.catch(2);case 10:case"end":return i.stop()}}),null,this,[[2,8]])}},{key:"renderModalBody",value:function(){var e=this.state.baselineName,a=this.props.error;return y.a.createElement("div",{className:"fact-value"},y.a.createElement(U.a,null,y.a.createElement(G.a,{label:"Baseline title",isRequired:!0,fieldId:"baseline name",helperTextInvalid:a.hasOwnProperty("detail")?a.detail:null,isValid:!a.hasOwnProperty("status")},y.a.createElement(Q.a,{value:e,type:"text",onChange:this.updateBaselineName,isValid:!a.hasOwnProperty("status"),"aria-label":"baseline name"}))))}},{key:"render",value:function(){var e=this.props.editNameModalOpened;return y.a.createElement(W.a,{className:"pf-c-modal-box",title:"Edit title",isOpen:e,onClose:this.cancelModal,width:"auto",isFooterLeftAligned:!0,actions:[y.a.createElement(A.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),y.a.createElement(A.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]},this.renderModalBody())}}]),a}(g.Component);Z.propTypes={baselineId:E.a.string,baselineName:E.a.string,baselineData:E.a.object,editNameModalOpened:E.a.bool,toggleEditNameModal:E.a.func,patchBaseline:E.a.func,error:E.a.object};var $=Object(B.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,editNameModalOpened:e.editBaselineState.editNameModalOpened,error:e.editBaselineState.error}}),(function(e){return{toggleEditNameModal:function(){return e(q.a.toggleEditNameModal())},patchBaseline:function(a,t){return e(q.a.patchBaseline(a,t))}}}))(Z),ee=t(364),ae=t(10),te=function(e){function a(e){var t;return i()(this,a),(t=d()(this,p()(a).call(this,e))).onSelect=function(e,a){var n=t.props,l=n.editBaselineTableData,r=n.selectFact,i=[];if("select-all"===a.target.name)t.setState({selectAll:e}),l.forEach((function(e){i.push(e[ae.e]),L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){i.push(e[ae.e])}))}));else{var c,s=Number(a.target.name);l.forEach((function(e){e[ae.e]===s?c=e:L.a.isCategory(e)&&L.a.baselineSubFacts(e).forEach((function(e){e[ae.e]===s&&(c=e)}))})),i=[c[0]],L.a.isCategory(c)&&L.a.baselineSubFacts(c).forEach((function(e){i.push(e[ae.e])}))}r(i,e)},t.renderCheckbox=function(e){var a,n=t.props.selectAll;if(L.a.isCategory(e))a="category-"+e[ae.e];else{if("string"!=typeof e[ae.g])return y.a.createElement(C.a,{isChecked:n,onChange:t.onSelect,id:"select-all",name:"select-all"});a="fact-"+e[ae.e]}return y.a.createElement(C.a,{isChecked:e.selected,onChange:t.onSelect,id:a,name:e[ae.e]})},t.fetchBaselineId(),t.renderBreadcrumb=t.renderBreadcrumb.bind(h()(t)),t.goToBaselinesList=t.goToBaselinesList.bind(h()(t)),t}return b()(a,e),s()(a,[{key:"componentDidMount",value:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"componentDidUpdate",value:function(e){e.expandedRows.length<this.props.expandedRows.length&&this.setState({expandedRows:this.props.expandedRows})}},{key:"fetchBaselineId",value:function(){var e=this.props,a=e.match.params;(0,e.fetchBaselineData)(a.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,a=e.history;(0,e.clearBaselineData)(),a.push("/baselines")}},{key:"renderBreadcrumb",value:function(){var e=this,a=this.props.baselineData;return y.a.createElement(F.a,null,y.a.createElement(N.a,null,y.a.createElement("a",{onClick:function(){return e.goToBaselinesList()}},"Baselines")),y.a.createElement(N.a,{isActive:!0},a.display_name))}},{key:"renderHeaderRow",value:function(){return y.a.createElement("tr",{key:"edit-baseline-table-header"},y.a.createElement("td",{className:"pf-c-table__check"},this.renderCheckbox([])),y.a.createElement("th",{className:"edit-baseline-header"},y.a.createElement("div",null,"Fact")),y.a.createElement("th",{className:"edit-baseline-header"},y.a.createElement("div",null,"Value")),y.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){for(var e=[],a=[],t=0;t<3;t+=1)a.push(y.a.createElement("td",null,y.a.createElement(D.Skeleton,{size:D.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(y.a.createElement("tr",null,a));return e}},{key:"renderExpandableRowButton",value:function(e){var a=this;return this.props.expandedRows.includes(e)?y.a.createElement(S.b,{className:"pointer active-blue",onClick:function(){return a.props.expandRow(e)}}):y.a.createElement(O.b,{className:"pointer",onClick:function(){return a.props.expandRow(e)}})}},{key:"renderRowData",value:function(e){var a=this,t=this.props,n=t.expandedRows,l=t.baselineData,r=[],i=[],c=l.baseline_facts.find((function(a){return a.name===e[ae.f]}));return r.push(y.a.createElement("td",{className:n.includes(e[ae.f])?"pf-c-table__check nested-fact":"pf-c-table__check"},this.renderCheckbox(e))),L.a.isCategory(e)?(r.push(y.a.createElement("td",null,this.renderExpandableRowButton(e[ae.f])," ",e[ae.f])),r.push(y.a.createElement("td",null)),r.push(L.a.renderKebab({factName:e[ae.f],factData:c,isCategory:!0})),i.push(y.a.createElement("tr",{key:e[ae.f]},r)),n.includes(e[ae.f])&&L.a.baselineSubFacts(e).forEach((function(e){(r=[]).push(y.a.createElement("td",{className:"pf-c-table__check nested-fact"},a.renderCheckbox(e))),r.push(y.a.createElement("td",null,y.a.createElement("p",{className:"child-row"},e[ae.f]))),r.push(y.a.createElement("td",null,e[ae.g])),r.push(L.a.renderKebab({factName:e[ae.f],factValue:e[ae.g],factData:c,isSubFact:!0})),i.push(y.a.createElement("tr",{key:e[ae.f]},r))}))):(r.push(y.a.createElement("td",null,e[ae.f])),r.push(y.a.createElement("td",null,e[ae.g])),r.push(L.a.renderKebab({factName:e[ae.f],factValue:e[ae.g],factData:c})),i.push(y.a.createElement("tr",{key:e[ae.f]},r))),i}},{key:"renderRows",value:function(){var e=this.props.editBaselineTableData,a=[],t=[];if(void 0!==e)for(var n=0;n<e.length;n+=1)t=this.renderRowData(e[n]),a.push(t);return a}},{key:"renderTable",value:function(){var e=this.props.baselineData;return y.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-compact ins-entity-table drift-table"},y.a.createElement("thead",null,this.renderHeaderRow()),y.a.createElement("tbody",{key:"edit-baseline-table"},void 0!==e?this.renderRows():this.renderLoadingRows()))}},{key:"render",value:function(){var e=this.props,a=e.baselineData,t=e.factModalOpened,n=e.toggleEditNameModal;return y.a.createElement(y.a.Fragment,null,void 0!==a?y.a.createElement(y.a.Fragment,null,y.a.createElement($,null),y.a.createElement(D.PageHeader,null,this.renderBreadcrumb(),y.a.createElement(D.PageHeaderTitle,{title:a.display_name}),y.a.createElement(x.b,{className:"pointer not-active edit-icon-margin",onClick:function(){return n()}}))):y.a.createElement(D.PageHeader,null,y.a.createElement("div",null,y.a.createElement(D.Skeleton,{size:D.SkeletonSize.lg}))),y.a.createElement(D.Main,null,y.a.createElement(w.a,{className:"pf-t-light pf-m-opaque-100"},y.a.createElement(M.a,null,t?y.a.createElement(Y,null):null,y.a.createElement(J,null),this.renderTable()))))}}]),a}(g.Component);te.propTypes={history:E.a.object,match:E.a.any,clearBaselineData:E.a.func,baselineData:E.a.object,baselineDataLoading:E.a.bool,patchBaseline:E.a.func,fetchBaselineData:E.a.func,factModalOpened:E.a.bool,editBaselineTableData:E.a.array,expandRow:E.a.func,expandedRows:E.a.array,toggleEditNameModal:E.a.func,selectFact:E.a.func,selectAll:E.a.bool};a.default=Object(k.o)(Object(B.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,baselineDataLoading:e.editBaselineState.baselineDataLoading,factModalOpened:e.editBaselineState.factModalOpened,editBaselineTableData:e.editBaselineState.editBaselineTableData,expandedRows:e.editBaselineState.expandedRows,selectAll:e.editBaselineState.selectAll}}),(function(e){return{clearBaselineData:function(){return e(ee.a.clearBaselineData())},patchBaseline:function(a,t){return e(q.a.patchBaseline(a,t))},expandRow:function(a){return e(q.a.expandRow(a))},fetchBaselineData:function(a){return e(q.a.fetchBaselineData(a))},toggleEditNameModal:function(){return e(q.a.toggleEditNameModal())},selectFact:function(a,t){return e(q.a.selectFact(a,t))}}}))(te))}}]);
//# sourceMappingURL=../sourcemaps/6.js.map