(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{970:function(e,t,a){"use strict";var n=a(71),r=a.n(n),l=a(72),i=a.n(l),c=a(73),o=a.n(c),s=a(74),u=a.n(s),d=a(47),f=a.n(d),p=a(1),m=a.n(p),h=a(6),b=a.n(h),y=a(570),v=a(605),g=a(25),E=a(626);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var D=function(e){o()(a,e);var t=k(a);function a(e){return r()(this,a),t.call(this,e)}return i()(a,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,a=e.isOpen,n=e.onToggle;return m.a.createElement(y.a,{toggle:m.a.createElement(v.a,{toggleIndicator:null,onToggle:n},m.a.createElement(E.a,{className:"pointer not-active"})),isOpen:a,isPlain:!0,position:g.d.left,dropdownItems:t})}}]),a}(p.Component);D.propTypes={dropdownItems:b.a.array,isOpen:b.a.bool,onToggle:b.a.func},t.a=D},972:function(e,t,a){"use strict";var n=a(71),r=a.n(n),l=a(72),i=a.n(l),c=a(73),o=a.n(c),s=a(74),u=a.n(s),d=a(47),f=a.n(d),p=a(1),m=a.n(p),h=a(6),b=a.n(h),y=a(64),v=a(222);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var E=function(e){o()(a,e);var t=g(a);function a(e){var n;return r()(this,a),(n=t.call(this,e)).closeToast=function(e){var t=n.props.onClose;e?t(e):t()},n}return i()(a,[{key:"render",value:function(){var e=this.props,t=e.addNotification,a=e.error,n=e.tableId;return m.a.createElement(m.a.Fragment,null,a.status?t({variant:"danger",title:"Error",description:a.detail,dismissable:!0}):null,a.status?this.closeToast(n):null)}}]),a}(p.Component);E.propTypes={error:b.a.object,tableId:b.a.string,onClose:b.a.func,addNotification:b.a.func},t.a=Object(y.connect)(null,(function(e){return{addNotification:function(t){return e(Object(v.addNotification)(t))}}}))(E)},984:function(e,t,a){var n=a(985),r=a(703),l=a(412),i=a(219),c=a(701),o=a(415),s=a(702),u=a(416),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||o(e)||u(e)||l(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!n(e).length;for(var a in e)if(d.call(e,a))return!1;return!0}},985:function(e,t,a){var n=a(414)(Object.keys,Object);e.exports=n},987:function(e,t,a){"use strict";a.r(t),a.d(t,"EditBaseline",(function(){return Oe}));var n=a(22),r=a.n(n),l=a(48),i=a.n(l),c=a(71),o=a.n(c),s=a(72),u=a.n(s),d=a(101),f=a.n(d),p=a(73),m=a.n(p),h=a(74),b=a.n(h),y=a(47),v=a.n(y),g=a(984),E=a.n(g),k=a(1),D=a.n(k),B=a(6),C=a.n(B),S=a(49),F=a(64),R=a(278),N=a(597),O=a(606),w=a(607),x=a(608),M=a(609),T=a(610),P=a(624),V=a(618),I=a(619),j=a(599),W=a(600),K=a(627),_=a(169),A=a(569),H=a(650),L=a(651),z=a(97),q=a(121),J=a(570),U=a(571),X=a(567),Y=a(95);var G={countFacts:function(e){var t=0,a=0;return e.forEach((function(e){e.selected?Y.a.isCategory(e)?t+=1:a+=1:Y.a.isCategory(e)&&Y.a.baselineSubFacts(e).forEach((function(e){e.selected&&(a+=1)}))})),{categories:t,facts:a}}};function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var Z=function(e){m()(a,e);var t=Q(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).isDisabled=function(){var e=n.props.editBaselineTableData,t=!0;return e.forEach((function(e){e.selected&&(t=!1),Y.a.isCategory(e)&&Y.a.baselineSubFacts(e).forEach((function(e){e.selected&&(t=!1)}))})),t},n.state={kebabOpened:!1,modalOpened:!1},n.toggleKebab=function(){var e=n.state.kebabOpened;n.setState({kebabOpened:!e})},n.toggleModalOpened=function(){var e=n.state.modalOpened;n.setState({modalOpened:!e,kebabOpened:!1})},n}return u()(a,[{key:"render",value:function(){var e,t,a,n=this.state,r=n.kebabOpened,l=n.modalOpened,i=this.props.editBaselineTableData,c=G.countFacts(i),o=c.categories,s=c.facts;return o>0&&(t=1===o?"1 category":o+" categories"),s>0&&(a=1===s?"1 fact":s+" facts"),e=[D.a.createElement(A.a,{key:"multi-delete",component:"button",onClick:this.toggleModalOpened,isDisabled:!(i.length>0)||this.isDisabled()},"Delete facts")],D.a.createElement(D.a.Fragment,null,l?D.a.createElement(X.a,{toggleModal:this.toggleModalOpened.bind(this),modalOpened:l,categoryMessage:t,factMessage:a}):null,D.a.createElement(J.a,{style:{float:"left"},toggle:D.a.createElement(U.a,{onToggle:this.toggleKebab}),isOpen:r,dropdownItems:e,isPlain:!0}))}}]),a}(k.Component);Z.propTypes={editBaselineTableData:C.a.array};var $=Object(F.connect)((function(e){return{editBaselineTableData:e.editBaselineState.editBaselineTableData}}),null)(Z),ee=a(185),te=a(157),ae=a(135);function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var re=function(e){m()(a,e);var t=ne(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).handleAddFact=function(){var e=n.props,t=e.setFactData,a=e.toggleFactModal;t({factName:"",factValue:"",fact:[]}),a()},n}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.editBaselineEmptyState,a=e.hasWritePermissions,n=e.isDisabled;return D.a.createElement(D.a.Fragment,null,a||void 0===a?D.a.createElement(te.a,{variant:"primary",isDisabled:n,onClick:this.handleAddFact},"Add fact or category"):D.a.createElement(ee.a,{content:D.a.createElement("div",null,"You do not have permissions to perform this action")},D.a.createElement("div",{className:t?"tooltip-button-margin":null},D.a.createElement(te.a,{variant:"primary",isDisabled:!0,onClick:this.handleAddFact},"Add fact or category"))))}}]),a}(k.Component);re.propTypes={toggleFactModal:C.a.func,setFactData:C.a.func,isDisabled:C.a.bool,hasWritePermissions:C.a.bool,editBaselineEmptyState:C.a.bool};var le=Object(F.connect)(null,(function(e){return{toggleFactModal:function(){return e(ae.a.toggleFactModal())},setFactData:function(t){return e(ae.a.setFactData(t))}}}))(re),ie=a(149),ce=a(970);function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var se=function(e){m()(a,e);var t=oe(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).onToggle=function(){var e=n.state.dropdownOpen;n.setState({dropdownOpen:!e})},n.state={bulkSelectItems:[{title:"Select all",key:"select-all",onClick:function(){return n.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",onClick:function(){return n.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[D.a.createElement(A.a,{key:"export-to-CSV",component:"button",onClick:function(){return n.props.exportToCSV(n.props.tableData,n.props.baselineData)}},"Export to CSV")]},n}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.hasWritePermissions,a=e.isDisabled,n=e.onBulkSelect,r=e.selected,l=e.totalFacts,i=this.state,c=i.bulkSelectItems,o=i.dropdownItems,s=i.dropdownOpen;return D.a.createElement(H.a,{className:"drift-toolbar"},D.a.createElement(L.a,null,D.a.createElement(z.a,null,D.a.createElement(R.BulkSelect,{count:r>0?r:null,items:c,checked:ie.a.findCheckedValue(l,r),onSelect:function(){return n(!r>0)},isDisabled:a})),D.a.createElement(z.a,null,D.a.createElement(le,{isDisabled:!(l>0),hasWritePermissions:t})),D.a.createElement(q.a,{variant:"icon-button-group"},D.a.createElement(z.a,null,D.a.createElement(ce.a,{dropdownItems:o,isOpen:s,onToggle:this.onToggle})),D.a.createElement(z.a,null,D.a.createElement($,null)))))}}]),a}(k.Component);se.propTypes={isDisabled:C.a.bool,onBulkSelect:C.a.func,selected:C.a.any,totalFacts:C.a.number,exportToCSV:C.a.func,tableData:C.a.array,baselineData:C.a.object,hasWritePermissions:C.a.bool};var ue=se,de=a(972),fe=a(614),pe=a(611),me=a(14),he=a(649),be=a(613),ye=a(250);function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var ge=function(e){m()(n,e);var t,a=ve(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.cancelFact=t.cancelFact.bind(f()(t)),t.confirmModal=t.confirmModal.bind(f()(t)),t.renderCategoryCheckbox=t.renderCategoryCheckbox.bind(f()(t)),t.renderFactInput=t.renderFactInput.bind(f()(t)),t.renderValueInput=t.renderValueInput.bind(f()(t)),t.renderModalBody=t.renderModalBody.bind(f()(t)),t.state={factName:t.props.factName,factValue:t.props.factValue,factData:t.props.factData,isCategory:t.props.isCategory},t.state.isAddFact=""===t.props.factName&&""===t.props.factValue,t.state.isEditFact=""!==t.props.factName&&""!==t.props.factValue,t.handleChange=function(e){t.setState({isCategory:e})},t.handleNewName=function(e){t.setState({factName:e})},t.handleNewValue=function(e){t.setState({factValue:e})},t}return u()(n,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:(t=i()(r.a.mark((function e(){var t,a,n,l,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.toggleFactModal,n=t.baselineData,l=t.patchBaseline,i=t.fetchBaselineData,c=this.state.isAddFact,o="",e.prev=3,o=c?this.addFact(n):this.editFact(n),e.next=7,l(n.id,o);case 7:e.sent&&i(n.id),a(),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:case"end":return e.stop()}}),e,this,[[3,12]])}))),function(){return t.apply(this,arguments)})},{key:"addFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,i=Y.a.buildNewFactData(a,n,r,l);return Y.a.makeAddFactPatch(i,e)}},{key:"editFact",value:function(e){var t=this.state,a=t.isCategory,n=t.factName,r=t.factValue,l=t.factData,i=Y.a.buildEditedFactData(a,this.props.factName,n,this.props.factValue,r,l);return Y.a.makeEditFactPatch(i,e,l)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state,t=e.isCategory,a=e.isEditFact;return D.a.createElement(N.a,{className:"sm-padding-bottom","aria-label":"controlled checkbox example",label:"This is a category",id:"isCategory",name:"isCategory",onChange:this.handleChange,isChecked:t,isDisabled:t&&a})}},{key:"renderFactInput",value:function(){var e=this.props.inlineError,t=this.state,a=t.factName,n=t.isCategory;return D.a.createElement("div",{className:"fact-value"},D.a.createElement(fe.a,{label:n?"Category name":"Fact name",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact name",onKeyPress:this.checkKeyPress},D.a.createElement(pe.a,{value:a,type:"text",placeholder:"Name",onChange:this.handleNewName,validated:e.hasOwnProperty("status")?me.d.error:null,"aria-label":"fact name"})))}},{key:"renderValueInput",value:function(){var e=this.props.inlineError,t=this.state.factValue;return D.a.createElement("div",{className:"fact-value"},D.a.createElement(fe.a,{label:"Value",isRequired:!0,helperTextInvalid:e.hasOwnProperty("detail")?e.detail:null,validated:e.hasOwnProperty("status")?"error":null,fieldId:"fact value",onKeyPress:this.checkKeyPress},D.a.createElement(pe.a,{value:t,type:"text",placeholder:"Value",onChange:this.handleNewValue,validated:e.hasOwnProperty("status")?me.d.error:null,"aria-label":"value"})))}},{key:"renderModalBody",value:function(){var e=this.props,t=e.inlineError,a=e.isSubFact,n=this.state,r=n.isAddFact,l=n.isCategory;return D.a.createElement(D.a.Fragment,null,t.status?D.a.createElement(he.a,{variant:"danger",isInline:!0,title:"Status: "+t.status},D.a.createElement("p",null,t.detail)):D.a.createElement("div",null),r&&!a||l?this.renderCategoryCheckbox():null,D.a.createElement(be.a,null,this.renderFactInput(),l?null:this.renderValueInput()))}},{key:"title",value:function(){var e=this.props.isSubFact,t=this.state,a=t.isAddFact,n=t.isEditFact,r=t.isCategory,l="Add fact";return!0!==n||r||e?!0===a&&!0===r?l="Add category":!0===a&&!0===e?l="Add sub fact":!0===n&&!0===e?l="Edit sub fact":!0===r&&(l="Edit category"):l="Edit fact",l}},{key:"render",value:function(){var e=this.props.factModalOpened;return D.a.createElement(ye.a,{variant:ye.b.small,title:this.title(),isOpen:e,onClose:this.cancelFact,actions:[D.a.createElement(te.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),D.a.createElement(te.a,{key:"cancel",variant:"link",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),n}(k.Component);ge.propTypes={toggleFactModal:C.a.func,factModalOpened:C.a.bool,factName:C.a.string,factValue:C.a.string,factData:C.a.object,isCategory:C.a.bool,isSubFact:C.a.bool,baselineData:C.a.object,patchBaseline:C.a.func,fetchBaselineData:C.a.func,inlineError:C.a.object};var Ee=Object(F.connect)((function(e){return{factModalOpened:e.editBaselineState.factModalOpened,factName:e.editBaselineState.factName,factValue:e.editBaselineState.factValue,factData:e.editBaselineState.factData,isCategory:e.editBaselineState.isCategory,isSubFact:e.editBaselineState.isSubFact,baselineData:e.editBaselineState.baselineData,inlineError:e.editBaselineState.inlineError}}),(function(e){return{toggleFactModal:function(){return e(ae.a.toggleFactModal())},patchBaseline:function(t,a){return e(ae.a.patchBaseline(t,a))},fetchBaselineData:function(t){return e(ae.a.fetchBaselineData(t))}}}))(ge);function ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var De=function(e){m()(n,e);var t,a=ke(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).cancelModal=function(){var e=t.props,a=e.toggleEditNameModal,n=e.baselineData;t.updateBaselineName(n.display_name),a()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.confirmModal())},t.state={baselineName:t.props.baselineData.display_name},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.confirmModal=t.confirmModal.bind(f()(t)),t}return u()(n,[{key:"confirmModal",value:(t=i()(r.a.mark((function e(){var t,a,n,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.baselineName,a=this.props,n=a.baselineData,l=a.patchBaseline,i=a.toggleEditNameModal,e.prev=2,e.next=5,l(n.id,{display_name:t,facts_patch:[]});case 5:i(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return t.apply(this,arguments)})},{key:"renderModalBody",value:function(){var e=this.state.baselineName,t=this.props.error,a=t.hasOwnProperty("status")?me.d.error:null;return D.a.createElement("div",{className:"fact-value"},D.a.createElement(be.a,null,D.a.createElement(fe.a,{label:"Baseline title",isRequired:!0,fieldId:"baseline name",helperTextInvalid:t.hasOwnProperty("detail")?t.detail:null,validated:a,onKeyPress:this.checkKeyPress},D.a.createElement(pe.a,{value:e,type:"text",onChange:this.updateBaselineName,validated:a,"aria-label":"baseline name"}))))}},{key:"render",value:function(){var e=this.props,t=e.modalOpened,a=e.error;return D.a.createElement(ye.a,{variant:ye.b.small,title:"Edit name",isOpen:t,onClose:this.cancelModal,actions:[D.a.createElement(te.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),D.a.createElement(te.a,{key:"cancel",variant:"link",onClick:this.cancelModal},"Cancel")]},a.status&&D.a.createElement(he.a,{variant:"danger",isInline:!0,title:"Status: "+a.status},D.a.createElement("p",null,a.detail)),this.renderModalBody())}}]),n}(k.Component);De.propTypes={baselineData:C.a.object,toggleEditNameModal:C.a.func,modalOpened:C.a.bool,patchBaseline:C.a.func,error:C.a.object};var Be=Object(F.connect)(null,(function(e){return{patchBaseline:function(t,a){return e(ae.a.patchBaseline(t,a))}}}))(De),Ce=a(407),Se=a(36),Fe=a(408),Re=a(409);function Ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var r=v()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}var Oe=function(e){m()(n,e);var t,a=Ne(n);function n(e){var t;return o()(this,n),(t=a.call(this,e)).retryBaselineFetch=function(){(0,t.props.clearErrorData)(),t.fetchBaselineId()},t.renderPageHeader=function(e,a){var n=t.state.modalOpened,r=t.props,l=r.baselineData,i=r.baselineDataLoading,c=r.inlineError;return i?D.a.createElement(R.PageHeader,null,D.a.createElement("div",null,D.a.createElement(R.Skeleton,{size:R.SkeletonSize.lg}))):void 0!==l?D.a.createElement(D.a.Fragment,null,D.a.createElement(Be,{baselineData:l,modalOpened:n,toggleEditNameModal:t.toggleEditNameModal,error:c}),D.a.createElement(R.PageHeader,null,t.renderBreadcrumb(l,e),D.a.createElement("div",{id:"edit-baseline-title"},t.renderPageTitle(l,e,a)))):D.a.createElement(R.PageHeader,null,t.renderBreadcrumb(),D.a.createElement(R.PageHeaderTitle,{title:"Baseline"}))},t.onSelect=function(e,a){var n,r=t.props,l=r.editBaselineTableData,i=r.selectFact,c=[],o=Number(a.target.name);l.forEach((function(e){e[Se.e]===o?n=e:Y.a.isCategory(e)&&Y.a.baselineSubFacts(e).forEach((function(e){e[Se.e]===o&&(n=e)}))})),c=[n[0]],Y.a.isCategory(n)&&Y.a.baselineSubFacts(n).forEach((function(e){c.push(e[Se.e])})),i(c,e)},t.onBulkSelect=function(e){var a=t.props,n=a.editBaselineTableData,r=a.selectFact,l=[];n.forEach((function(e){l.push(e[Se.e]),Y.a.isCategory(e)&&Y.a.baselineSubFacts(e).forEach((function(e){l.push(e[Se.e])}))})),r(l,e)},t.renderCheckbox=function(e){var a;return Y.a.isCategory(e)?a="category-"+e[Se.e]:"string"==typeof e[Se.g]&&(a="fact-"+e[Se.e]),D.a.createElement(N.a,{isChecked:e.selected,onChange:t.onSelect,id:a,name:e[Se.e]})},t.state={modalOpened:!1,errorMessage:["The baseline cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""],loadingColumns:[{title:"Fact",transforms:[Object(_.a)(40)]},{title:"Value",transforms:[Object(_.a)(45)]},{title:"",transforms:[Object(_.a)(5)]}]},t.fetchBaselineId(),t.renderBreadcrumb=t.renderBreadcrumb.bind(f()(t)),t.goToBaselinesList=t.goToBaselinesList.bind(f()(t)),t.toggleEditNameModal=function(){var e=t.state.modalOpened,a=t.props.clearErrorData;t.setState({modalOpened:!e}),a()},t}return u()(n,[{key:"componentDidMount",value:(t=i()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.props.baselineData&&(document.title=this.props.baselineData.display_name+" - Baselines - Drift | Red Hat Insights")}},{key:"fetchBaselineId",value:function(){var e=this.props,t=e.match.params;(0,e.fetchBaselineData)(t.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,t=e.clearBaselineData,a=e.fetchBaselines,n=e.history;t("CHECKBOX"),a("CHECKBOX"),n.push("/baselines")}},{key:"renderBreadcrumb",value:function(e,t){var a=this;return D.a.createElement(O.a,null,D.a.createElement(w.a,null,D.a.createElement("a",{onClick:function(){return a.goToBaselinesList()}},"Baselines")),e&&t?D.a.createElement(x.a,null,e.display_name):null)}},{key:"renderPageTitle",value:function(e,t,a){var n=this;return t?a?D.a.createElement(D.a.Fragment,null,D.a.createElement("span",{className:"pf-c-title pf-m-2xl"},E()(e)?null:e.display_name),D.a.createElement("span",null,D.a.createElement(P.a,{className:"pointer not-active edit-icon-margin",onClick:function(){return n.toggleEditNameModal()}}))):D.a.createElement(D.a.Fragment,null,E()(e)?null:e.display_name):D.a.createElement(D.a.Fragment,null,"Baseline")}},{key:"renderHeaderRow",value:function(e){return D.a.createElement("tr",{key:"edit-baseline-table-header"},e?D.a.createElement("th",null):null,D.a.createElement("th",{className:"edit-baseline-header"},D.a.createElement("div",null,"Fact")),D.a.createElement("th",{className:"edit-baseline-header"},D.a.createElement("div",null,"Value")),D.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){var e=this.state.loadingColumns;return D.a.createElement(R.SkeletonTable,{columns:e,rowSize:8,onSelect:!0,canSelectAll:!1,isSelectable:!0})}},{key:"renderExpandableRowButton",value:function(e){var t=this;return this.props.expandedRows.includes(e)?D.a.createElement(V.a,{className:"pointer active-blue",onClick:function(){return t.props.expandRow(e)}}):D.a.createElement(I.a,{className:"pointer",onClick:function(){return t.props.expandRow(e)}})}},{key:"renderRowData",value:function(e,t){var a=this,n=this.props,r=n.expandedRows,l=n.baselineData,i=[],c=[],o=l.baseline_facts.find((function(t){return t.name===e[Se.f]}));return t&&i.push(D.a.createElement("td",{className:r.includes(e[Se.f])?"pf-c-table__check nested-fact":"pf-c-table__check"},this.renderCheckbox(e))),Y.a.isCategory(e)?(i.push(D.a.createElement("td",null,this.renderExpandableRowButton(e[Se.f])," ",e[Se.f])),i.push(D.a.createElement("td",null)),i.push(Y.a.renderKebab({factName:e[Se.f],factData:o,isCategory:!0,hasWritePermissions:t})),c.push(D.a.createElement("tr",{key:e[Se.f]},i)),r.includes(e[Se.f])&&Y.a.baselineSubFacts(e).forEach((function(e){i=[],t&&i.push(D.a.createElement("td",{className:"pf-c-table__check nested-fact"},a.renderCheckbox(e))),i.push(D.a.createElement("td",null,D.a.createElement("p",{className:"child-row"},e[Se.f]))),i.push(D.a.createElement("td",null,e[Se.g])),i.push(Y.a.renderKebab({factName:e[Se.f],factValue:e[Se.g],factData:o,isSubFact:!0,hasWritePermissions:t})),c.push(D.a.createElement("tr",{key:e[Se.f]},i))}))):(i.push(D.a.createElement("td",null,e[Se.f])),i.push(D.a.createElement("td",null,e[Se.g])),i.push(Y.a.renderKebab({factName:e[Se.f],factValue:e[Se.g],factData:o,hasWritePermissions:t})),c.push(D.a.createElement("tr",{key:e[Se.f]},i))),c}},{key:"renderRows",value:function(e){var t=this.props.editBaselineTableData,a=[],n=[];if(0!==t.length)for(var r=0;r<t.length;r+=1)n=this.renderRowData(t[r],e),a.push(n);return a}},{key:"renderEmptyState",value:function(e){var t=this,a=this.props,n=a.editBaselineEmptyState,r=a.editBaselineError,l=this.state.errorMessage;return 200!==r.status&&void 0!==r.status?D.a.createElement(Fe.a,{icon:j.a,color:"#c9190b",title:"Baseline cannot be displayed",text:l,error:"Error "+r.status+": "+r.detail,button:D.a.createElement("a",{onClick:function(){return t.retryBaselineFetch()}},D.a.createElement(W.a,{className:"reload-button"}),"Retry")}):D.a.createElement(Fe.a,{title:"No facts",text:["No facts or categories have been added to this baseline yet."],button:D.a.createElement(le,{hasWritePermissions:e,editBaselineEmptyState:n})})}},{key:"renderTable",value:function(e){return D.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-grid-md ins-entity-table"},D.a.createElement("thead",null,this.renderHeaderRow(e)),D.a.createElement("tbody",{key:"edit-baseline-table"},this.renderRows(e)))}},{key:"render",value:function(){var e=this,t=this.props,a=t.baselineData,n=t.baselineDataLoading,r=t.editBaselineTableData,l=t.exportToCSV,i=t.factModalOpened,c=t.editBaselineEmptyState,o=t.editBaselineError,s=t.clearErrorData,u=Y.a.findSelected(r);return D.a.createElement(Re.a.Consumer,null,(function(t){return D.a.createElement(D.a.Fragment,null,e.renderPageHeader(t.permissions.baselinesRead,t.permissions.baselinesWrite),D.a.createElement(R.Main,null,!1===t.permissions.baselinesRead?D.a.createElement(Fe.a,{icon:K.a,color:"#6a6e73",title:"You do not have access to view this Baseline",text:["Contact your organization administrator(s) for more information."]}):D.a.createElement(D.a.Fragment,null,i?D.a.createElement(Ee,null):D.a.createElement("div",null),D.a.createElement(de.a,{error:!c&&o.status?o:{},onClose:s}),c?e.renderEmptyState(t.permissions.baselinesWrite):D.a.createElement(M.a,{className:"pf-t-light pf-m-opaque-100"},D.a.createElement(T.a,null,D.a.createElement(ue,{selected:u,onBulkSelect:e.onBulkSelect,isDisabled:0===r.length||!t.permissions.baselinesWrite,totalFacts:Y.a.findFactCount(r),baselineData:a,exportToCSV:l,tableData:r,hasWritePermissions:t.permissions.baselinesWrite}),n?e.renderLoadingRows():e.renderTable(t.permissions.baselinesWrite))))))}))}}]),n}(k.Component);Oe.propTypes={history:C.a.object,match:C.a.any,clearBaselineData:C.a.func,baselineData:C.a.object,baselineDataLoading:C.a.bool,fetchBaselineData:C.a.func,factModalOpened:C.a.bool,editBaselineTableData:C.a.array,expandRow:C.a.func,expandedRows:C.a.array,selectFact:C.a.func,clearErrorData:C.a.func,editBaselineError:C.a.object,inlineError:C.a.object,editBaselineEmptyState:C.a.bool,exportToCSV:C.a.func,hasWritePermissions:C.a.bool,fetchBaselines:C.a.func};t.default=Object(S.o)(Object(F.connect)((function(e){return{baselineData:e.editBaselineState.baselineData,baselineDataLoading:e.editBaselineState.baselineDataLoading,factModalOpened:e.editBaselineState.factModalOpened,editBaselineTableData:e.editBaselineState.editBaselineTableData,expandedRows:e.editBaselineState.expandedRows,editBaselineError:e.editBaselineState.editBaselineError,editBaselineEmptyState:e.editBaselineState.editBaselineEmptyState,inlineError:e.editBaselineState.inlineError}}),(function(e){return{clearBaselineData:function(t){return e(Ce.a.clearBaselineData(t))},expandRow:function(t){return e(ae.a.expandRow(t))},fetchBaselineData:function(t){return e(ae.a.fetchBaselineData(t))},selectFact:function(t,a){return e(ae.a.selectFact(t,a))},clearErrorData:function(){return e(ae.a.clearErrorData())},exportToCSV:function(t,a){e(ae.a.exportToCSV(t,a))},fetchBaselines:function(t,a){return e(Ce.a.fetchBaselines(t,a))}}}))(Oe))}}]);
//# sourceMappingURL=../sourcemaps/3.js.map