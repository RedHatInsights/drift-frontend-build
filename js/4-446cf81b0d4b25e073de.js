(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{890:function(e,t,a){var n=a(891),r=a(893),l=a(454),i=a(229),c=a(455),s=a(894),o=a(895),u=a(896),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||l(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(o(e))return!n(e).length;for(var a in e)if(d.call(e,a))return!1;return!0}},891:function(e,t,a){var n=a(892)(Object.keys,Object);e.exports=n},892:function(e,t){e.exports=function(e,t){return function(a){return e(t(a))}}},893:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},894:function(e,t){e.exports=function(){return!1}},895:function(e,t){e.exports=function(){return!1}},896:function(e,t){e.exports=function(){return!1}},898:function(e,t,a){"use strict";a.r(t),a.d(t,"EditBaseline",(function(){return we}));var n=a(11),r=a.n(n),l=a(20),i=a.n(l),c=a(29),s=a.n(c),o=a(30),u=a.n(o),d=a(47),f=a.n(d),p=a(31),m=a.n(p),h=a(32),b=a.n(h),y=a(19),v=a.n(y),E=a(890),g=a.n(E),k=a(0),B=a.n(k),D=a(4),S=a.n(D),C=a(24),F=a(33),x=a(138),w=a(678),N=a(764),O=a(765),R=a(766),M=a(767),P=a(768),T=a(788),V=a(782),I=a(783),j=a(680),W=a(681),K=a(791),_=a(675),A=a(806),H=a(807),L=a(701),z=a(707),q=a(676),J=a(677),U=a(382),X=a(51);var Y={countFacts:function(e){var t=0,a=0;return e.forEach((function(e){e.selected?X.a.isCategory(e)?t+=1:a+=1:X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e.selected&&(a+=1)}))})),{categories:t,facts:a}}};function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var Q=function(e){m()(a,e);var t=G(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).isDisabled=function(){var e=n.props.editBaselineTableData,t=!0;return e.forEach((function(e){e.selected&&(t=!1),X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e.selected&&(t=!1)}))})),t},n.state={kebabOpened:!1,modalOpened:!1},n.toggleKebab=function(){var e=n.state.kebabOpened;n.setState({kebabOpened:!e})},n.toggleModalOpened=function(){var e=n.state.modalOpened;n.setState({modalOpened:!e,kebabOpened:!1})},n}return u()(a,[{key:"render",value:function(){var e,t,a,n=this.state,r=n.kebabOpened,l=n.modalOpened,i=this.props.editBaselineTableData,c=Y.countFacts(i),s=c.categories,o=c.facts;return s>0&&(t=1===s?"1 category":s+" categories"),o>0&&(a=1===o?"1 fact":o+" facts"),e=[B.a.createElement(_.a,{key:"multi-delete",component:"button",onClick:this.toggleModalOpened,isDisabled:!(i.length>0)||this.isDisabled()},"Delete facts")],B.a.createElement(B.a.Fragment,null,l?B.a.createElement(U.a,{toggleModal:this.toggleModalOpened.bind(this),modalOpened:l,categoryMessage:t,factMessage:a}):null,B.a.createElement(q.a,{style:{float:"left"},toggle:B.a.createElement(J.a,{onToggle:this.toggleKebab}),isOpen:r,dropdownItems:e,isPlain:!0}))}}]),a}(k.Component);Q.propTypes={editBaselineTableData:S.a.array};var Z=Object(F.connect)((function(e){return{editBaselineTableData:e.editBaselineState.editBaselineTableData}}),null)(Q),$=a(194),ee=a(100),te=a(69);function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var ne=function(e){m()(a,e);var t=ae(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).handleAddFact=function(){var e=n.props,t=e.setFactData,a=e.toggleFactModal;t({factName:"",factValue:"",fact:[]}),a()},n}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.editBaselineEmptyState,a=e.hasWritePermissions,n=e.isDisabled;return B.a.createElement(B.a.Fragment,null,a||void 0===a?B.a.createElement(ee.a,{variant:"primary",isDisabled:n,onClick:this.handleAddFact},"Add fact or category"):B.a.createElement($.a,{content:B.a.createElement("div",null,"You do not have permissions to perform this action")},B.a.createElement("div",{className:t?"tooltip-button-margin":null},B.a.createElement(ee.a,{variant:"primary",isDisabled:!0,onClick:this.handleAddFact},"Add fact or category"))))}}]),a}(k.Component);ne.propTypes={toggleFactModal:S.a.func,setFactData:S.a.func,isDisabled:S.a.bool,hasWritePermissions:S.a.bool,editBaselineEmptyState:S.a.bool};var re=Object(F.connect)(null,(function(e){return{toggleFactModal:function(){return e(te.a.toggleFactModal())},setFactData:function(t){return e(te.a.setFactData(t))}}}))(ne),le=a(74),ie=a(754);function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var se=function(e){m()(a,e);var t=ce(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).onToggle=function(){var e=n.state.dropdownOpen;n.setState({dropdownOpen:!e})},n.state={bulkSelectItems:[{title:"Select all",key:"select-all",onClick:function(){return n.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",onClick:function(){return n.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[B.a.createElement(_.a,{key:"export-to-CSV",component:"button",onClick:function(){return n.props.exportToCSV(n.props.tableData,n.props.baselineData)}},"Export to CSV")]},n}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.hasWritePermissions,a=e.isDisabled,n=e.onBulkSelect,r=e.selected,l=e.totalFacts,i=this.state,c=i.bulkSelectItems,s=i.dropdownItems,o=i.dropdownOpen;return B.a.createElement(A.a,{className:"drift-toolbar"},B.a.createElement(H.a,null,B.a.createElement(L.a,null,B.a.createElement(x.BulkSelect,{count:r>0?r:null,items:c,checked:le.a.findCheckedValue(l,r),onSelect:function(){return n(!r>0)},isDisabled:a})),B.a.createElement(L.a,null,B.a.createElement(re,{isDisabled:!(l>0),hasWritePermissions:t})),B.a.createElement(z.a,{variant:"icon-button-group"},B.a.createElement(L.a,null,B.a.createElement(ie.a,{dropdownItems:s,isOpen:o,onToggle:this.onToggle})),B.a.createElement(L.a,null,B.a.createElement(Z,null)))))}}]),a}(k.Component);se.propTypes={isDisabled:S.a.bool,onBulkSelect:S.a.func,selected:S.a.any,totalFacts:S.a.number,exportToCSV:S.a.func,tableData:S.a.array,baselineData:S.a.object,hasWritePermissions:S.a.bool};var oe=se,ue=a(756),de=a(774),fe=a(775),pe=a(770),me=a(26),he=a(804),be=a(383);function ye(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var ve=function(e){m()(n,e);var t,a=ye(n);function n(e){var t;return s()(this,n),(t=a.call(this,e)).checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.cancelFact=t.cancelFact.bind(f()(t)),t.confirmModal=t.confirmModal.bind(f()(t)),t.renderCategoryCheckbox=t.renderCategoryCheckbox.bind(f()(t)),t.renderFactInput=t.renderFactInput.bind(f()(t)),t.renderValueInput=t.renderValueInput.bind(f()(t)),t.renderModalBody=t.renderModalBody.bind(f()(t)),t.state={factName:t.props.factName,factValue:t.props.factValue,factData:t.props.factData,isCategory:t.props.isCategory},t.state.isAddFact=""===t.props.factName&&""===t.props.factValue,t.state.isEditFact=""!==t.props.factName&&""!==t.props.factValue,t.handleChange=function(e){t.setState({isCategory:e})},t.handleNewName=function(e){t.setState({factName:e})},t.handleNewValue=function(e){t.setState({factValue:e})},t}return u()(n,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:(t=i()(r.a.mark((function e(){var t,a,n,l,i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.toggleFactModal,n=t.baselineData,l=t.patchBaseline,i=t.fetchBaselineData,c=this.state.isAddFact,s="",e.prev=3,s=c?this.addFact(n):this.editFact(n),e.next=7,l(n.id,s);case 7:e.sent&&i(n.id),a(),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:case"end":return e.stop()}}),e,this,[[3,12]])}))),function(){return t.apply(this,arguments)})},{key:"addFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,i=X.a.buildNewFactData(a,n,r,l);return X.a.makeAddFactPatch(i,e)}},{key:"editFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,i=X.a.buildEditedFactData(a,this.props.factName,n,this.props.factValue,r,l);return X.a.makeEditFactPatch(i,e,l)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state,t=e.isCategory,a=e.isEditFact;return B.a.createElement(w.a,{"aria-label":"controlled checkbox example",label:"This is a category",id:"isCategory",name:"isCategory",onChange:this.handleChange,isChecked:t,isDisabled:t&&a})}},{key:"renderFactInput",value:function(){var e=this.props.inlineError,t=this.state,a=t.factName,n=t.isCategory;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(de.a,null,B.a.createElement(fe.a,{label:n?"Category name":"Fact name",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact name",onKeyPress:this.checkKeyPress},B.a.createElement(pe.a,{value:a,type:"text",placeholder:"Name",onChange:this.handleNewName,validated:e.hasOwnProperty("status")?me.d.error:null,"aria-label":"fact name"}))))}},{key:"renderValueInput",value:function(){var e=this.props.inlineError,t=this.state.factValue;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(de.a,null,B.a.createElement(fe.a,{label:"Value",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact value",onKeyPress:this.checkKeyPress},B.a.createElement(pe.a,{value:t,type:"text",placeholder:"Value",onChange:this.handleNewValue,validated:e.hasOwnProperty("status")?me.d.error:null,"aria-label":"value"}))))}},{key:"renderModalBody",value:function(){var e=this.props,t=e.inlineError,a=e.isSubFact,n=this.state,r=n.isAddFact,l=n.isCategory;return B.a.createElement(B.a.Fragment,null,t.status?B.a.createElement(he.a,{variant:"danger",isInline:!0,title:"Status: "+t.status},B.a.createElement("p",null,t.detail)):B.a.createElement("div",null),r&&!a||l?this.renderCategoryCheckbox():null,this.renderFactInput(),B.a.createElement("br",null),l?null:this.renderValueInput())}},{key:"title",value:function(){var e=this.props.isSubFact,t=this.state,a=t.isAddFact,n=t.isEditFact,r=t.isCategory,l="Add fact";return!0!==n||r||e?!0===a&&!0===r?l="Add category":!0===a&&!0===e?l="Add sub fact":!0===n&&!0===e?l="Edit sub fact":!0===r&&(l="Edit category"):l="Edit fact",l}},{key:"render",value:function(){var e=this.props.factModalOpened;return B.a.createElement(be.a,{variant:be.b.small,title:this.title(),isOpen:e,onClose:this.cancelFact,actions:[B.a.createElement(ee.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),B.a.createElement(ee.a,{key:"cancel",variant:"link",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),n}(k.Component);ve.propTypes={toggleFactModal:S.a.func,factModalOpened:S.a.bool,factName:S.a.string,factValue:S.a.string,factData:S.a.object,isCategory:S.a.bool,isSubFact:S.a.bool,baselineData:S.a.object,patchBaseline:S.a.func,fetchBaselineData:S.a.func,inlineError:S.a.object};var Ee=Object(F.connect)((function(e){return{factModalOpened:e.editBaselineState.factModalOpened,factName:e.editBaselineState.factName,factValue:e.editBaselineState.factValue,factData:e.editBaselineState.factData,isCategory:e.editBaselineState.isCategory,isSubFact:e.editBaselineState.isSubFact,baselineData:e.editBaselineState.baselineData,inlineError:e.editBaselineState.inlineError}}),(function(e){return{toggleFactModal:function(){return e(te.a.toggleFactModal())},patchBaseline:function(t,a){return e(te.a.patchBaseline(t,a))},fetchBaselineData:function(t){return e(te.a.fetchBaselineData(t))}}}))(ve);function ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var ke=function(e){m()(n,e);var t,a=ge(n);function n(e){var t;return s()(this,n),(t=a.call(this,e)).cancelModal=function(){var e=t.props,a=e.toggleEditNameModal,n=e.baselineData;t.updateBaselineName(n.display_name),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.state={baselineName:t.props.baselineData.display_name},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.confirmModal=t.confirmModal.bind(f()(t)),t}return u()(n,[{key:"confirmModal",value:(t=i()(r.a.mark((function e(){var t,a,n,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.baselineName,a=this.props,n=a.baselineData,l=a.patchBaseline,i=a.toggleEditNameModal,e.prev=2,e.next=5,l(n.id,{display_name:t,facts_patch:[]});case 5:i(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return t.apply(this,arguments)})},{key:"renderModalBody",value:function(){var e=this.state.baselineName,t=this.props.error,a=t.hasOwnProperty("status")?me.d.error:null;return B.a.createElement("div",{className:"fact-value"},B.a.createElement(de.a,null,B.a.createElement(fe.a,{label:"Baseline title",isRequired:!0,fieldId:"baseline name",helperTextInvalid:t.hasOwnProperty("detail")?t.detail:null,validated:a,onKeyPress:this.checkKeyPress},B.a.createElement(pe.a,{value:e,type:"text",onChange:this.updateBaselineName,validated:a,"aria-label":"baseline name"}))))}},{key:"render",value:function(){var e=this.props,t=e.modalOpened,a=e.error;return B.a.createElement(be.a,{variant:be.b.small,title:"Edit name",isOpen:t,onClose:this.cancelModal,actions:[B.a.createElement(ee.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),B.a.createElement(ee.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]},a.status&&B.a.createElement(he.a,{variant:"danger",isInline:!0,title:"Status: "+a.status},B.a.createElement("p",null,a.detail)),this.renderModalBody())}}]),n}(k.Component);ke.propTypes={baselineData:S.a.object,toggleEditNameModal:S.a.func,modalOpened:S.a.bool,patchBaseline:S.a.func,error:S.a.object};var Be=Object(F.connect)(null,(function(e){return{patchBaseline:function(t,a){return e(te.a.patchBaseline(t,a))}}}))(ke),De=a(211),Se=a(18),Ce=a(214),Fe=a(222);function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var we=function(e){m()(n,e);var t,a=xe(n);function n(e){var t;return s()(this,n),(t=a.call(this,e)).retryBaselineFetch=function(){(0,t.props.clearErrorData)(),t.fetchBaselineId()},t.renderPageHeader=function(e,a){var n=t.state.modalOpened,r=t.props,l=r.baselineData,i=r.baselineDataLoading,c=r.inlineError;return i?B.a.createElement(x.PageHeader,null,B.a.createElement("div",null,B.a.createElement(x.Skeleton,{size:x.SkeletonSize.lg}))):void 0!==l?B.a.createElement(B.a.Fragment,null,B.a.createElement(Be,{baselineData:l,modalOpened:n,toggleEditNameModal:t.toggleEditNameModal,error:c}),B.a.createElement(x.PageHeader,null,t.renderBreadcrumb(l,e),t.renderPageTitle(l,e),e&&a?B.a.createElement(T.a,{className:"pointer not-active edit-icon-margin",onClick:function(){return t.toggleEditNameModal()}}):null)):B.a.createElement(x.PageHeader,null,t.renderBreadcrumb(),B.a.createElement(x.PageHeaderTitle,{title:"Baseline"}))},t.onSelect=function(e,a){var n,r=t.props,l=r.editBaselineTableData,i=r.selectFact,c=[],s=Number(a.target.name);l.forEach((function(e){e[Se.e]===s?n=e:X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){e[Se.e]===s&&(n=e)}))})),c=[n[0]],X.a.isCategory(n)&&X.a.baselineSubFacts(n).forEach((function(e){c.push(e[Se.e])})),i(c,e)},t.onBulkSelect=function(e){var a=t.props,n=a.editBaselineTableData,r=a.selectFact,l=[];n.forEach((function(e){l.push(e[Se.e]),X.a.isCategory(e)&&X.a.baselineSubFacts(e).forEach((function(e){l.push(e[Se.e])}))})),r(l,e)},t.renderCheckbox=function(e){var a;return X.a.isCategory(e)?a="category-"+e[Se.e]:"string"==typeof e[Se.g]&&(a="fact-"+e[Se.e]),B.a.createElement(w.a,{isChecked:e.selected,onChange:t.onSelect,id:a,name:e[Se.e]})},t.state={modalOpened:!1,errorMessage:["The baseline cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t.fetchBaselineId(),t.renderBreadcrumb=t.renderBreadcrumb.bind(f()(t)),t.goToBaselinesList=t.goToBaselinesList.bind(f()(t)),t.toggleEditNameModal=function(){var e=t.state.modalOpened,a=t.props.clearErrorData;t.setState({modalOpened:!e}),a()},t}return u()(n,[{key:"componentDidMount",value:(t=i()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.props.baselineData&&(document.title=this.props.baselineData.display_name+" - Baselines - Drift | Red Hat Insights")}},{key:"fetchBaselineId",value:function(){var e=this.props,t=e.match.params;(0,e.fetchBaselineData)(t.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,t=e.clearBaselineData,a=e.fetchBaselines,n=e.history;t("CHECKBOX"),a("CHECKBOX"),n.push("/baselines")}},{key:"renderBreadcrumb",value:function(e,t){var a=this;return B.a.createElement(N.a,null,B.a.createElement(O.a,null,B.a.createElement("a",{onClick:function(){return a.goToBaselinesList()}},"Baselines")),e&&t?B.a.createElement(R.a,null,e.display_name):null)}},{key:"renderPageTitle",value:function(e,t){return t?B.a.createElement(x.PageHeaderTitle,{title:g()(e)?null:e.display_name}):B.a.createElement(x.PageHeaderTitle,{title:"Baseline"})}},{key:"renderHeaderRow",value:function(e){return B.a.createElement("tr",{key:"edit-baseline-table-header"},e?B.a.createElement("th",null):null,B.a.createElement("th",{className:"edit-baseline-header"},B.a.createElement("div",null,"Fact")),B.a.createElement("th",{className:"edit-baseline-header"},B.a.createElement("div",null,"Value")),B.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(B.a.createElement("td",null,B.a.createElement(x.Skeleton,{size:x.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(B.a.createElement("tr",null,t));return e}},{key:"renderExpandableRowButton",value:function(e){var t=this;return this.props.expandedRows.includes(e)?B.a.createElement(V.a,{className:"pointer active-blue",onClick:function(){return t.props.expandRow(e)}}):B.a.createElement(I.a,{className:"pointer",onClick:function(){return t.props.expandRow(e)}})}},{key:"renderRowData",value:function(e,t){var a=this,n=this.props,r=n.expandedRows,l=n.baselineData,i=[],c=[],s=l.baseline_facts.find((function(t){return t.name===e[Se.f]}));return t&&i.push(B.a.createElement("td",{className:r.includes(e[Se.f])?"pf-c-table__check nested-fact":"pf-c-table__check"},this.renderCheckbox(e))),X.a.isCategory(e)?(i.push(B.a.createElement("td",null,this.renderExpandableRowButton(e[Se.f])," ",e[Se.f])),i.push(B.a.createElement("td",null)),i.push(X.a.renderKebab({factName:e[Se.f],factData:s,isCategory:!0,hasWritePermissions:t})),c.push(B.a.createElement("tr",{key:e[Se.f]},i)),r.includes(e[Se.f])&&X.a.baselineSubFacts(e).forEach((function(e){i=[],t&&i.push(B.a.createElement("td",{className:"pf-c-table__check nested-fact"},a.renderCheckbox(e))),i.push(B.a.createElement("td",null,B.a.createElement("p",{className:"child-row"},e[Se.f]))),i.push(B.a.createElement("td",null,e[Se.g])),i.push(X.a.renderKebab({factName:e[Se.f],factValue:e[Se.g],factData:s,isSubFact:!0,hasWritePermissions:t})),c.push(B.a.createElement("tr",{key:e[Se.f]},i))}))):(i.push(B.a.createElement("td",null,e[Se.f])),i.push(B.a.createElement("td",null,e[Se.g])),i.push(X.a.renderKebab({factName:e[Se.f],factValue:e[Se.g],factData:s,hasWritePermissions:t})),c.push(B.a.createElement("tr",{key:e[Se.f]},i))),c}},{key:"renderRows",value:function(e){var t=this.props.editBaselineTableData,a=[],n=[];if(0!==t.length)for(var r=0;r<t.length;r+=1)n=this.renderRowData(t[r],e),a.push(n);return a}},{key:"renderEmptyState",value:function(e){var t=this,a=this.props,n=a.editBaselineEmptyState,r=a.editBaselineError,l=this.state.errorMessage;return 200!==r.status&&void 0!==r.status?B.a.createElement(Ce.a,{icon:j.a,color:"#c9190b",title:"Baseline cannot be displayed",text:l,error:"Error "+r.status+": "+r.detail,button:B.a.createElement("a",{onClick:function(){return t.retryBaselineFetch()}},B.a.createElement(W.a,{className:"reload-button"}),"Retry")}):B.a.createElement(Ce.a,{title:"No facts",text:["No facts or categories have been added to this baseline yet."],button:B.a.createElement(re,{hasWritePermissions:e,editBaselineEmptyState:n})})}},{key:"renderTable",value:function(e){var t=this.props.baselineDataLoading;return B.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-grid-md ins-entity-table drift-table"},B.a.createElement("thead",null,this.renderHeaderRow(e)),B.a.createElement("tbody",{key:"edit-baseline-table"},t?this.renderLoadingRows():this.renderRows(e)))}},{key:"render",value:function(){var e=this,t=this.props,a=t.baselineData,n=t.editBaselineTableData,r=t.exportToCSV,l=t.factModalOpened,i=t.editBaselineEmptyState,c=t.editBaselineError,s=t.clearErrorData,o=X.a.findSelected(n);return B.a.createElement(Fe.a.Consumer,null,(function(t){return B.a.createElement(B.a.Fragment,null,e.renderPageHeader(t.permissions.baselinesRead,t.permissions.baselinesWrite),B.a.createElement(x.Main,null,!1===t.permissions.baselinesRead?B.a.createElement(Ce.a,{icon:K.a,color:"#6a6e73",title:"You do not have access to view this Baseline",text:["Contact your organization administrator(s) for more information."]}):B.a.createElement(B.a.Fragment,null,l?B.a.createElement(Ee,null):B.a.createElement("div",null),B.a.createElement(ue.a,{error:!i&&c.status?c:{},onClose:s}),i?e.renderEmptyState(t.permissions.baselinesWrite):B.a.createElement(M.a,{className:"pf-t-light pf-m-opaque-100"},B.a.createElement(P.a,null,B.a.createElement(oe,{selected:o,onBulkSelect:e.onBulkSelect,isDisabled:0===n.length||!t.permissions.baselinesWrite,totalFacts:X.a.findFactCount(n),baselineData:a,exportToCSV:r,tableData:n,hasWritePermissions:t.permissions.baselinesWrite}),e.renderTable(t.permissions.baselinesWrite))))))}))}}]),n}(k.Component);we.propTypes={history:S.a.object,match:S.a.any,clearBaselineData:S.a.func,baselineData:S.a.object,baselineDataLoading:S.a.bool,fetchBaselineData:S.a.func,factModalOpened:S.a.bool,editBaselineTableData:S.a.array,expandRow:S.a.func,expandedRows:S.a.array,selectFact:S.a.func,clearErrorData:S.a.func,editBaselineError:S.a.object,inlineError:S.a.object,editBaselineEmptyState:S.a.bool,exportToCSV:S.a.func,hasWritePermissions:S.a.bool,fetchBaselines:S.a.func};t.default=Object(C.o)(Object(F.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,baselineDataLoading:e.editBaselineState.baselineDataLoading,factModalOpened:e.editBaselineState.factModalOpened,editBaselineTableData:e.editBaselineState.editBaselineTableData,expandedRows:e.editBaselineState.expandedRows,editBaselineError:e.editBaselineState.editBaselineError,editBaselineEmptyState:e.editBaselineState.editBaselineEmptyState,inlineError:e.editBaselineState.inlineError}}),(function(e){return{clearBaselineData:function(t){return e(De.a.clearBaselineData(t))},expandRow:function(t){return e(te.a.expandRow(t))},fetchBaselineData:function(t){return e(te.a.fetchBaselineData(t))},selectFact:function(t,a){return e(te.a.selectFact(t,a))},clearErrorData:function(){return e(te.a.clearErrorData())},exportToCSV:function(t,a){e(te.a.exportToCSV(t,a))},fetchBaselines:function(t,a){return e(De.a.fetchBaselines(t,a))}}}))(we))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map