(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{723:function(e,t,a){var n=a(724),r=a(726),l=a(434),c=a(208),i=a(435),o=a(727),s=a(728),u=a(729),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(c(e)||"string"==typeof e||"function"==typeof e.splice||o(e)||u(e)||l(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!n(e).length;for(var a in e)if(d.call(e,a))return!1;return!0}},724:function(e,t,a){var n=a(725)(Object.keys,Object);e.exports=n},725:function(e,t){e.exports=function(e,t){return function(a){return e(t(a))}}},726:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},727:function(e,t){e.exports=function(){return!1}},728:function(e,t){e.exports=function(){return!1}},729:function(e,t){e.exports=function(){return!1}},852:function(e,t,a){"use strict";a.r(t),a.d(t,"EditBaseline",(function(){return Ce}));var n=a(9),r=a.n(n),l=a(18),c=a.n(l),i=a(24),o=a.n(i),s=a(25),u=a.n(s),d=a(45),f=a.n(d),p=a(26),h=a.n(p),m=a(27),b=a.n(m),y=a(15),v=a.n(y),E=a(723),g=a.n(E),k=a(0),B=a.n(k),D=a(4),S=a.n(D),C=a(19),F=a(32),x=a(133),w=a(653),N=a(738),O=a(739),M=a(740),R=a(741),T=a(742),P=a(759),V=a(753),I=a(754),j=a(655),K=a(656),A=a(650),_=a(776),L=a(777),H=a(676),z=a(680),q=a(651),J=a(652),U=a(374),X=a(50);var G={countFacts:function(e){var t=0,a=0;return e.forEach((function(e){e.selected?X.a.isCategory(e)?t+=1:a+=1:X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e.selected&&(a+=1)}))})),{categories:t,facts:a}}};function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var W=function(e){h()(a,e);var t=Q(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).isDisabled=function(){var e=n.props.editBaselineTableData,t=!0;return e.forEach((function(e){e.selected&&(t=!1),X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e.selected&&(t=!1)}))})),t},n.state={kebabOpened:!1,modalOpened:!1},n.toggleKebab=function(){var e=n.state.kebabOpened;n.setState({kebabOpened:!e})},n.toggleModalOpened=function(){var e=n.state.modalOpened;n.setState({modalOpened:!e,kebabOpened:!1})},n}return u()(a,[{key:"render",value:function(){var e,t,a,n=this.state,r=n.kebabOpened,l=n.modalOpened,c=this.props.editBaselineTableData,i=G.countFacts(c),o=i.categories,s=i.facts;return o>0&&(t=1===o?"1 category":o+" categories"),s>0&&(a=1===s?"1 fact":s+" facts"),e=[B.a.createElement(A.a,{key:"multi-delete",component:"button",onClick:this.toggleModalOpened,isDisabled:!(c.length>0)||this.isDisabled()},"Delete facts")],B.a.createElement(B.a.Fragment,null,l?B.a.createElement(U.a,{toggleModal:this.toggleModalOpened.bind(this),modalOpened:l,categoryMessage:t,factMessage:a}):null,B.a.createElement(q.a,{style:{float:"left"},toggle:B.a.createElement(J.a,{onToggle:this.toggleKebab}),isOpen:r,dropdownItems:e,isPlain:!0}))}}]),a}(k.Component);W.propTypes={editBaselineTableData:S.a.array};var Y=Object(F.connect)((function(e){return{editBaselineTableData:e.editBaselineState.editBaselineTableData}}),null)(W),Z=a(97),$=a(71);function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var te=function(e){h()(a,e);var t=ee(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).handleAddFact=function(){var e=n.props,t=e.setFactData,a=e.toggleFactModal;t({factName:"",factValue:"",fact:[]}),a()},n}return u()(a,[{key:"render",value:function(){return this.props.isDisabled?B.a.createElement(Z.a,{variant:"primary",isDisabled:!0,onClick:this.handleAddFact},"Add fact or category"):B.a.createElement(Z.a,{variant:"primary",onClick:this.handleAddFact},"Add fact or category")}}]),a}(k.Component);te.propTypes={toggleFactModal:S.a.func,setFactData:S.a.func,isDisabled:S.a.bool};var ae=Object(F.connect)(null,(function(e){return{toggleFactModal:function(){return e($.a.toggleFactModal())},setFactData:function(t){return e($.a.setFactData(t))}}}))(te),ne=a(75),re=a(720);function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var ce=function(e){h()(a,e);var t=le(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).onToggle=function(){var e=n.state.dropdownOpen;n.setState({dropdownOpen:!e})},n.state={bulkSelectItems:[{title:"Select all",key:"select-all",onClick:function(){return n.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",onClick:function(){return n.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[B.a.createElement(A.a,{key:"export-to-CSV",component:"button",onClick:function(){return n.props.exportToCSV(n.props.tableData,n.props.baselineData)}},"Export to CSV")]},n}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.isDisabled,a=e.onBulkSelect,n=e.selected,r=e.totalFacts,l=this.state,c=l.bulkSelectItems,i=l.dropdownItems,o=l.dropdownOpen;return B.a.createElement(_.a,{className:"drift-toolbar"},B.a.createElement(L.a,null,B.a.createElement(H.a,null,B.a.createElement(x.BulkSelect,{count:n>0?n:null,items:c,checked:ne.a.findCheckedValue(r,n),onSelect:function(){return a(!n>0)},isDisabled:t})),B.a.createElement(H.a,null,B.a.createElement(ae,{isDisabled:!(r>0)})),B.a.createElement(z.a,{variant:"icon-button-group"},B.a.createElement(H.a,null,B.a.createElement(re.a,{dropdownItems:i,isOpen:o,onToggle:this.onToggle})),B.a.createElement(H.a,null,B.a.createElement(Y,null)))))}}]),a}(k.Component);ce.propTypes={isDisabled:S.a.bool,onBulkSelect:S.a.func,selected:S.a.any,totalFacts:S.a.number,exportToCSV:S.a.func,tableData:S.a.array,baselineData:S.a.object};var ie=ce,oe=a(722),se=a(747),ue=a(748),de=a(744),fe=a(29),pe=a(774),he=a(375);function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var be=function(e){h()(n,e);var t,a=me(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.cancelFact=t.cancelFact.bind(f()(t)),t.confirmModal=t.confirmModal.bind(f()(t)),t.renderCategoryCheckbox=t.renderCategoryCheckbox.bind(f()(t)),t.renderFactInput=t.renderFactInput.bind(f()(t)),t.renderValueInput=t.renderValueInput.bind(f()(t)),t.renderModalBody=t.renderModalBody.bind(f()(t)),t.state={factName:t.props.factName,factValue:t.props.factValue,factData:t.props.factData,isCategory:t.props.isCategory,inlineError:{}},t.state.isAddFact=""===t.props.factName&&""===t.props.factValue,t.state.isEditFact=""!==t.props.factName&&""!==t.props.factValue,t.handleChange=function(e){t.setState({isCategory:e})},t.handleNewName=function(e){t.setState({factName:e})},t.handleNewValue=function(e){t.setState({factValue:e})},t}return u()(n,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:(t=c()(r.a.mark((function e(){var t,a,n,l,c,i,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.toggleFactModal,n=t.baselineData,l=t.patchBaseline,c=t.fetchBaselineData,i=this.state.isAddFact,o="",e.prev=3,o=i?this.addFact(n):this.editFact(n),e.next=7,l(n.id,o);case 7:e.sent&&c(n.id),a(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),s=e.t0.response.data,this.setState({inlineError:{status:s.status,detail:s.detail}});case 16:case"end":return e.stop()}}),e,this,[[3,12]])}))),function(){return t.apply(this,arguments)})},{key:"addFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,c=X.a.buildNewFactData(a,n,r,l);return X.a.makeAddFactPatch(c,e)}},{key:"editFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,c=X.a.buildEditedFactData(a,this.props.factName,n,this.props.factValue,r,l);return X.a.makeEditFactPatch(c,e,l)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state,t=e.isCategory,a=e.isEditFact;return B.a.createElement(w.a,{"aria-label":"controlled checkbox example",label:"This is a category",id:"isCategory",name:"isCategory",onChange:this.handleChange,isChecked:t,isDisabled:t&&a})}},{key:"renderFactInput",value:function(){var e=this.props.editBaselineError,t=this.state,a=t.factName,n=t.isCategory;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(se.a,null,B.a.createElement(ue.a,{label:n?"Category name":"Fact name",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact name",onKeyPress:this.checkKeyPress},B.a.createElement(de.a,{value:a,type:"text",placeholder:"Name",onChange:this.handleNewName,validated:e.hasOwnProperty("status")?fe.d.error:null,"aria-label":"fact name"}))))}},{key:"renderValueInput",value:function(){var e=this.props.editBaselineError,t=this.state.factValue;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(se.a,null,B.a.createElement(ue.a,{label:"Value",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact value",onKeyPress:this.checkKeyPress},B.a.createElement(de.a,{value:t,type:"text",placeholder:"Value",onChange:this.handleNewValue,validated:e.hasOwnProperty("status")?fe.d.error:null,"aria-label":"value"}))))}},{key:"renderModalBody",value:function(){var e=this.props.isSubFact,t=this.state,a=t.inlineError,n=t.isAddFact,r=t.isCategory;return B.a.createElement(B.a.Fragment,null,a.status?B.a.createElement(pe.a,{variant:"danger",isInline:!0,title:"Status: "+a.status},B.a.createElement("p",null,a.detail)):B.a.createElement("div",null),n&&!e||r?this.renderCategoryCheckbox():null,this.renderFactInput(),B.a.createElement("br",null),r?null:this.renderValueInput())}},{key:"title",value:function(){var e=this.props.isSubFact,t=this.state,a=t.isAddFact,n=t.isEditFact,r=t.isCategory,l="Add fact";return!0!==n||r||e?!0===a&&!0===r?l="Add category":!0===a&&!0===e?l="Add sub fact":!0===n&&!0===e?l="Edit sub fact":!0===r&&(l="Edit category"):l="Edit fact",l}},{key:"render",value:function(){var e=this.props.factModalOpened;return B.a.createElement(he.a,{variant:he.b.small,title:this.title(),isOpen:e,onClose:this.cancelFact,actions:[B.a.createElement(Z.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),B.a.createElement(Z.a,{key:"cancel",variant:"link",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),n}(k.Component);be.propTypes={toggleFactModal:S.a.func,factModalOpened:S.a.bool,factName:S.a.string,factValue:S.a.string,factData:S.a.object,isCategory:S.a.bool,isSubFact:S.a.bool,baselineData:S.a.object,patchBaseline:S.a.func,editBaselineError:S.a.object,fetchBaselineData:S.a.func};var ye=Object(F.connect)((function(e){return{factModalOpened:e.editBaselineState.factModalOpened,factName:e.editBaselineState.factName,factValue:e.editBaselineState.factValue,factData:e.editBaselineState.factData,isCategory:e.editBaselineState.isCategory,isSubFact:e.editBaselineState.isSubFact,baselineData:e.editBaselineState.baselineData,editBaselineError:e.editBaselineState.editBaselineError}}),(function(e){return{toggleFactModal:function(){return e($.a.toggleFactModal())},patchBaseline:function(t,a){return e($.a.patchBaseline(t,a))},fetchBaselineData:function(t){return e($.a.fetchBaselineData(t))}}}))(be);function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var Ee=function(e){h()(n,e);var t,a=ve(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).cancelModal=function(){var e=t.props,a=e.toggleEditNameModal,n=e.baselineData;t.updateBaselineName(n.display_name),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.state={baselineName:t.props.baselineData.display_name},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.confirmModal=t.confirmModal.bind(f()(t)),t}return u()(n,[{key:"confirmModal",value:(t=c()(r.a.mark((function e(){var t,a,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.baselineName,a=this.props,n=a.baselineData,l=a.patchBaseline,c=a.toggleEditNameModal,e.prev=2,e.next=5,l(n.id,{display_name:t,facts_patch:[]});case 5:c(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return t.apply(this,arguments)})},{key:"renderModalBody",value:function(){var e=this.state.baselineName,t=this.props.error,a=t.hasOwnProperty("status")?fe.d.error:null;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(se.a,null,B.a.createElement(ue.a,{label:"Baseline title",isRequired:!0,fieldId:"baseline name",helperTextInvalid:t.hasOwnProperty("detail")?t.detail:null,validated:a,onKeyPress:this.checkKeyPress},B.a.createElement(de.a,{value:e,type:"text",onChange:this.updateBaselineName,validated:a,"aria-label":"baseline name"}))))}},{key:"render",value:function(){var e=this.props,t=e.modalOpened,a=e.error;return B.a.createElement(he.a,{variant:he.b.small,title:"Edit name",isOpen:t,onClose:this.cancelModal,actions:[B.a.createElement(Z.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),B.a.createElement(Z.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]},a.status&&B.a.createElement(pe.a,{variant:"danger",isInline:!0,title:"Status: "+a.status},B.a.createElement("p",null,a.detail)),this.renderModalBody())}}]),n}(k.Component);Ee.propTypes={baselineData:S.a.object,toggleEditNameModal:S.a.func,modalOpened:S.a.bool,patchBaseline:S.a.func,error:S.a.object};var ge=Object(F.connect)(null,(function(e){return{patchBaseline:function(t,a){return e($.a.patchBaseline(t,a))}}}))(Ee),ke=a(200),Be=a(28),De=a(205);function Se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var Ce=function(e){h()(n,e);var t,a=Se(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).retryBaselineFetch=function(){(0,t.props.clearErrorData)(),t.fetchBaselineId()},t.renderPageHeader=function(){var e=t.state.modalOpened,a=t.props,n=a.baselineData,r=a.baselineDataLoading,l=a.inlineError;return r?B.a.createElement(x.PageHeader,null,B.a.createElement("div",null,B.a.createElement(x.Skeleton,{size:x.SkeletonSize.lg}))):void 0!==n?B.a.createElement(B.a.Fragment,null,B.a.createElement(ge,{baselineData:n,modalOpened:e,toggleEditNameModal:t.toggleEditNameModal,error:l}),B.a.createElement(x.PageHeader,null,t.renderBreadcrumb(n),B.a.createElement(x.PageHeaderTitle,{title:g()(n)?null:n.display_name}),B.a.createElement(P.a,{className:"pointer not-active edit-icon-margin",onClick:function(){return t.toggleEditNameModal()}}))):B.a.createElement(x.PageHeader,null,t.renderBreadcrumb(),B.a.createElement(x.PageHeaderTitle,{title:"Baseline"}))},t.onSelect=function(e,a){var n,r=t.props,l=r.editBaselineTableData,c=r.selectFact,i=[],o=Number(a.target.name);l.forEach((function(e){e[Be.e]===o?n=e:X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e[Be.e]===o&&(n=e)}))})),i=[n[0]],X.a.isCategory(n)&&X.a.baselineSubFacts(n).forEach((function(e){i.push(e[Be.e])})),c(i,e)},t.onBulkSelect=function(e){var a=t.props,n=a.editBaselineTableData,r=a.selectFact,l=[];n.forEach((function(e){l.push(e[Be.e]),X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){l.push(e[Be.e])}))})),r(l,e)},t.renderCheckbox=function(e){var a;return X.a.isCategory(e)?a="category-"+e[Be.e]:"string"==typeof e[Be.g]&&(a="fact-"+e[Be.e]),B.a.createElement(w.a,{isChecked:e.selected,onChange:t.onSelect,id:a,name:e[Be.e]})},t.state={modalOpened:!1,errorMessage:["The baseline cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t.fetchBaselineId(),t.renderBreadcrumb=t.renderBreadcrumb.bind(f()(t)),t.goToBaselinesList=t.goToBaselinesList.bind(f()(t)),t.toggleEditNameModal=function(){var e=t.state.modalOpened,a=t.props.clearErrorData;t.setState({modalOpened:!e}),a()},t}return u()(n,[{key:"componentDidMount",value:(t=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"fetchBaselineId",value:function(){var e=this.props,t=e.match.params;(0,e.fetchBaselineData)(t.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,t=e.history;(0,e.clearBaselineData)("CHECKBOX"),t.push("/baselines")}},{key:"renderBreadcrumb",value:function(e){var t=this;return B.a.createElement(N.a,null,B.a.createElement(O.a,null,B.a.createElement("a",{onClick:function(){return t.goToBaselinesList()}},"Baselines")),e?B.a.createElement(M.a,null,e.display_name):null)}},{key:"renderHeaderRow",value:function(){return B.a.createElement("tr",{key:"edit-baseline-table-header"},B.a.createElement("th",null),B.a.createElement("th",{className:"edit-baseline-header"},B.a.createElement("div",null,"Fact")),B.a.createElement("th",{className:"edit-baseline-header"},B.a.createElement("div",null,"Value")),B.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(B.a.createElement("td",null,B.a.createElement(x.Skeleton,{size:x.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(B.a.createElement("tr",null,t));return e}},{key:"renderExpandableRowButton",value:function(e){var t=this;return this.props.expandedRows.includes(e)?B.a.createElement(V.a,{className:"pointer active-blue",onClick:function(){return t.props.expandRow(e)}}):B.a.createElement(I.a,{className:"pointer",onClick:function(){return t.props.expandRow(e)}})}},{key:"renderRowData",value:function(e){var t=this,a=this.props,n=a.expandedRows,r=a.baselineData,l=[],c=[],i=r.baseline_facts.find((function(t){return t.name===e[Be.f]}));return l.push(B.a.createElement("td",{className:n.includes(e[Be.f])?"pf-c-table__check nested-fact":"pf-c-table__check"},this.renderCheckbox(e))),X.a.isCategory(e)?(l.push(B.a.createElement("td",null,this.renderExpandableRowButton(e[Be.f])," ",e[Be.f])),l.push(B.a.createElement("td",null)),l.push(X.a.renderKebab({factName:e[Be.f],factData:i,isCategory:!0})),c.push(B.a.createElement("tr",{key:e[Be.f]},l)),n.includes(e[Be.f])&&X.a.baselineSubFacts(e).forEach((function(e){(l=[]).push(B.a.createElement("td",{className:"pf-c-table__check nested-fact"},t.renderCheckbox(e))),l.push(B.a.createElement("td",null,B.a.createElement("p",{className:"child-row"},e[Be.f]))),l.push(B.a.createElement("td",null,e[Be.g])),l.push(X.a.renderKebab({factName:e[Be.f],factValue:e[Be.g],factData:i,isSubFact:!0})),c.push(B.a.createElement("tr",{key:e[Be.f]},l))}))):(l.push(B.a.createElement("td",null,e[Be.f])),l.push(B.a.createElement("td",null,e[Be.g])),l.push(X.a.renderKebab({factName:e[Be.f],factValue:e[Be.g],factData:i})),c.push(B.a.createElement("tr",{key:e[Be.f]},l))),c}},{key:"renderRows",value:function(){var e=this.props.editBaselineTableData,t=[],a=[];if(0!==e.length)for(var n=0;n<e.length;n+=1)a=this.renderRowData(e[n]),t.push(a);return t}},{key:"renderEmptyState",value:function(){var e=this,t=this.props.editBaselineError,a=this.state.errorMessage;return 200!==t.status&&void 0!==t.status?B.a.createElement(De.a,{icon:j.a,color:"#c9190b",title:"Baseline cannot be displayed",text:a,error:"Error "+t.status+": "+t.detail,button:B.a.createElement("a",{onClick:function(){return e.retryBaselineFetch()}},B.a.createElement(K.a,{className:"reload-button"}),"Retry")}):B.a.createElement(De.a,{title:"No facts",text:["No facts or categories have been added to this baseline yet."],button:B.a.createElement(ae,null)})}},{key:"renderTable",value:function(){var e=this.props.baselineDataLoading;return B.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-grid-md ins-entity-table drift-table"},B.a.createElement("thead",null,this.renderHeaderRow()),B.a.createElement("tbody",{key:"edit-baseline-table"},e?this.renderLoadingRows():this.renderRows()))}},{key:"render",value:function(){var e=this.props,t=e.baselineData,a=e.editBaselineTableData,n=e.exportToCSV,r=e.factModalOpened,l=e.editBaselineEmptyState,c=e.editBaselineError,i=e.clearErrorData,o=X.a.findSelected(a);return B.a.createElement(B.a.Fragment,null,this.renderPageHeader(),B.a.createElement(x.Main,null,r?B.a.createElement(ye,null):B.a.createElement("div",null),B.a.createElement(oe.a,{error:!l&&c.status?c:{},onClose:i}),l?this.renderEmptyState():B.a.createElement(R.a,{className:"pf-t-light pf-m-opaque-100"},B.a.createElement(T.a,null,B.a.createElement(ie,{selected:o,onBulkSelect:this.onBulkSelect,isDisabled:0===a.length,totalFacts:X.a.findFactCount(a),baselineData:t,exportToCSV:n,tableData:a}),this.renderTable()))))}}]),n}(k.Component);Ce.propTypes={history:S.a.object,match:S.a.any,clearBaselineData:S.a.func,baselineData:S.a.array,baselineDataLoading:S.a.bool,fetchBaselineData:S.a.func,factModalOpened:S.a.bool,editBaselineTableData:S.a.array,expandRow:S.a.func,expandedRows:S.a.array,selectFact:S.a.func,clearErrorData:S.a.func,editBaselineError:S.a.object,inlineError:S.a.object,editBaselineEmptyState:S.a.bool,exportToCSV:S.a.func};t.default=Object(C.o)(Object(F.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,baselineDataLoading:e.editBaselineState.baselineDataLoading,factModalOpened:e.editBaselineState.factModalOpened,editBaselineTableData:e.editBaselineState.editBaselineTableData,expandedRows:e.editBaselineState.expandedRows,editBaselineError:e.editBaselineState.editBaselineError,editBaselineEmptyState:e.editBaselineState.editBaselineEmptyState,inlineError:e.editBaselineState.inlineError}}),(function(e){return{clearBaselineData:function(t){return e(ke.a.clearBaselineData(t))},expandRow:function(t){return e($.a.expandRow(t))},fetchBaselineData:function(t){return e($.a.fetchBaselineData(t))},selectFact:function(t,a){return e($.a.selectFact(t,a))},clearErrorData:function(){return e($.a.clearErrorData())},exportToCSV:function(t,a){e($.a.exportToCSV(t,a))}}}))(Ce))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map