(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1001:function(e,t,n){"use strict";var a=n(270);n.d(t,"a",(function(){return a.a}));n(21)},1002:function(e,t,n){"use strict";var a=n(82),r=n.n(a),o=n(83),i=n.n(o),l=n(84),c=n.n(l),s=n(85),u=n.n(s),f=n(50),d=n.n(f),p=n(1),h=n.n(p),m=n(7),g=n.n(m),b=n(585),v=n(621),y=n(28),S=n(641);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var E=function(e){c()(n,e);var t=P(n);function n(e){return r()(this,n),t.call(this,e)}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.isOpen,a=e.onToggle;return h.a.createElement(b.a,{toggle:h.a.createElement(v.a,{toggleIndicator:null,onToggle:a},h.a.createElement(S.a,{className:"pointer not-active"})),isOpen:n,isPlain:!0,position:y.d.left,dropdownItems:t,ouiaId:"export"})}}]),n}(p.Component);E.propTypes={dropdownItems:g.a.array,isOpen:g.a.bool,onToggle:g.a.func},t.a=E},1003:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(82),r=n.n(a),o=n(83),i=n.n(o),l=n(118),c=n.n(l),s=n(84),u=n.n(s),f=n(85),d=n.n(f),p=n(50),h=n.n(p),m=n(1),g=n.n(m),b=n(7),v=n.n(b),y=n(664);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var P=function(e){u()(n,e);var t=S(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).onSetPage=a.onSetPage.bind(c()(a)),a.onPerPageSelect=a.onPerPageSelect.bind(c()(a)),a}return i()(n,[{key:"onSetPage",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:t,perPage:this.props.perPage};a?r(o,a):r(o)}},{key:"onPerPageSelect",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:1,perPage:t};a?r(o,a):r(o)}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.page,a=e.perPage,r=e.isCompact,o=e.widgetId,i=e.variant;return g.a.createElement(y.a,{itemCount:t||0,widgetId:o,page:0===t?0:n,perPage:a,variant:i,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:r})}}]),n}(m.Component);P.propTypes={perPage:v.a.number,page:v.a.number,updatePagination:v.a.func,total:v.a.number,isCompact:v.a.bool,tableId:v.a.string,widgetId:v.a.string,variant:v.a.any},t.b=P},1004:function(e,t,n){"use strict";var a=n(82),r=n.n(a),o=n(83),i=n.n(o),l=n(84),c=n.n(l),s=n(85),u=n.n(s),f=n(50),d=n.n(f),p=n(1),h=n.n(p),m=n(7),g=n.n(m),b=n(75),v=n(245);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var S=function(e){c()(n,e);var t=y(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).closeToast=function(e){var t=a.props.onClose;e?t(e):t()},a}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.addNotification,n=e.error,a=e.tableId;return h.a.createElement(h.a.Fragment,null,n.status?t({variant:"danger",title:"Error",description:n.detail,dismissable:!0}):null,n.status?this.closeToast(a):null)}}]),n}(p.Component);S.propTypes={error:g.a.object,tableId:g.a.string,onClose:g.a.func,addNotification:g.a.func},t.a=Object(b.connect)(null,(function(e){return{addNotification:function(t){return e(Object(v.addNotification)(t))}}}))(S)},1005:function(e,t,n){"use strict";var a=n(26),r=n.n(a),o=n(51),i=n.n(o),l=n(46),c=n.n(l),s=n(82),u=n.n(s),f=n(83),d=n.n(f),p=n(84),h=n.n(p),m=n(85),g=n.n(m),b=n(50),v=n.n(b),y=n(1),S=n.n(y),P=n(7),E=n.n(P),O=n(75),k=n(651),I=n(666),B=n(663),C=n(172),w=n(305),T=n(670),R=n(138),D=n(116),x=n(642),M=n(118),j=n.n(M),F=n(52),W=n(584),A=n(585),_=n(669),N=n(276),V=n(143),H=n(422);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var Y=function(e){h()(a,e);var t,n=L(a);function a(e){var t;return u()(this,a),(t=n.call(this,e)).deleteBaselines=t.deleteBaselines.bind(j()(t)),t}return d()(a,[{key:"deleteBaselines",value:(t=i()(r.a.mark((function e(){var t,n,a,o,i,l,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.clearSelectedBaselines,a=t.deleteSelectedBaselines,o=t.selectedBaselineIds,i=t.fetchWithParams,l=t.baselineId,c=t.tableId,s=t.toggleModal,u=l?{baseline_ids:[l]}:{baseline_ids:o},s(),e.prev=3,e.next=6,a(u,c);case 6:n(c),i(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.baselineId,n=e.modalOpened,a=e.selectedBaselineIds,r=e.toggleModal,o=t||1===a.length?"Delete baseline":"Delete baselines";return S.a.createElement(N.a,{variant:N.b.small,title:o,isOpen:n,onClose:r,actions:[S.a.createElement(V.a,{key:"confirm",variant:"danger",onClick:this.deleteBaselines,ouiaId:"delete"},o),S.a.createElement(V.a,{key:"cancel",variant:"link",onClick:r,ouiaId:"cancel"},"Cancel")]},"Deleting a baseline is permanent and cannot be undone.")}}]),a}(y.Component);Y.propTypes={modalOpened:E.a.bool,clearSelectedBaselines:E.a.func,selectedBaselineIds:E.a.array,deleteSelectedBaselines:E.a.func,fetchWithParams:E.a.func,baselineId:E.a.string,tableId:E.a.string,toggleModal:E.a.func,revertBaselineFetch:E.a.func};var K=Object(O.connect)((function(e){return{selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds}}),(function(e){return{deleteSelectedBaselines:function(t,n){return e(H.a.deleteSelectedBaselines(t,n))},clearSelectedBaselines:function(t){return e(H.a.clearSelectedBaselines(t))},revertBaselineFetch:function(t){return e(H.a.revertBaselineFetch(t))}}}))(Y);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var U=function(e){h()(n,e);var t=z(n);function n(e){var a;return u()(this,n),(a=t.call(this,e)).fetchBaseline=function(){var e=a.props,t=e.baselineRowData;e.history.push("baselines/"+t[0])},a.state={isOpen:!1,modalOpened:!1},a.onKebabToggle=a.onKebabToggle.bind(j()(a)),a.toggleModal=function(){var e=a.state.modalOpened;a.setState({modalOpened:!e})},a}return d()(n,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,a=t.modalOpened,r=this.props,o=r.baselineRowData,i=r.fetchWithParams,l=r.tableId,c=[S.a.createElement(W.a,{key:"edit",component:"button",onClick:this.fetchBaseline},"Edit"),S.a.createElement(W.a,{key:"delete",component:"button",onClick:this.toggleModal},"Delete")];return S.a.createElement(S.a.Fragment,null,a?S.a.createElement(K,{modalOpened:a,baselineId:o[0],tableId:l,fetchWithParams:i,toggleModal:this.toggleModal}):null,S.a.createElement(A.a,{style:{float:"right"},className:"baseline-table-kebab",toggle:S.a.createElement(_.a,{onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:n,dropdownItems:c,isPlain:!0}))}}]),n}(y.Component);U.propTypes={baselineRowData:E.a.array,history:E.a.object,tableId:E.a.string,fetchWithParams:E.a.func};var G=Object(F.o)(U),J=n(225),X=n(1009),q=n.n(X),Q=n(671),Z=n(630),$=n(1010),ee=n(1002),te=n(1011),ne=n(170),ae=n(1003);function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var oe=function(e){h()(a,e);var t,n=re(a);function a(e){var t;return u()(this,a),(t=n.call(this,e)).onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.buildDropdownList=function(){var e=t.props.isDeleteDisabled,n=[];return n.push(S.a.createElement(W.a,{key:"multi-delete",component:"button",onClick:t.toggleModal,isDisabled:e},"Delete baselines")),n},t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t.setTextFilter=function(e){t.setState({nameSearch:e}),t.handleSearch(e)},t.clearTextFilter=function(){t.setState({nameSearch:""}),t.handleSearch("")},t.handleSearch=q()((function(e){this.props.onSearch(e)}),250),t.state={nameSearch:"",modalOpened:!1,bulkSelectItems:[{title:"Select all",key:"select-all",onClick:function(){return t.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",onClick:function(){return t.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[S.a.createElement(W.a,{key:"export-to-CSV",component:"button",onClick:function(){return t.props.exportToCSV(t.props.tableData)}},"Export to CSV")]},t.handleSearch=t.handleSearch.bind(j()(t)),t.clearFilters=t.clearFilters.bind(j()(t)),t}return d()(a,[{key:"clearFilters",value:(t=i()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.onSearch,this.setState({nameSearch:""}),t("");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.exportButton,r=t.fetchWithParams,o=t.hasMultiSelect,i=t.hasReadPermissions,l=t.hasWritePermissions,c=t.kebab,s=t.loading,u=t.onBulkSelect,f=t.tableData,d=t.tableId,p=t.page,h=t.perPage,m=t.totalBaselines,g=t.updatePagination,b=this.state,v=b.bulkSelectItems,y=b.dropdownItems,P=b.dropdownOpen,E=b.modalOpened,O=b.nameSearch,k=f.filter((function(e){return!0===e.selected})).length;return S.a.createElement(S.a.Fragment,null,S.a.createElement(K,{modalOpened:E,tableId:d,fetchWithParams:r,toggleModal:this.toggleModal}),S.a.createElement(T.a,{className:"drift-toolbar",clearAllFilters:this.clearFilters},S.a.createElement(Q.a,null,o?S.a.createElement(R.a,{variant:"filter-group"},S.a.createElement(D.a,null,S.a.createElement(w.BulkSelect,{count:k>0?k:null,items:v,checked:ne.a.findCheckedValue(f.length,k),onSelect:function(){return u(!k>0)},isDisabled:0===f.length||!l&&c||!i&&!n}))):null,S.a.createElement(R.a,{variant:"filter-group"},S.a.createElement(Z.a,{chips:""!==O?[O]:[],deleteChip:this.clearFilters,categoryName:"Baseline name"},S.a.createElement(w.ConditionalFilter,{placeholder:"Filter by name",value:O,onChange:function(t,n){return e.setTextFilter(n)},isDisabled:!i||!l}))),S.a.createElement(R.a,{variant:"button-group"},n?S.a.createElement(D.a,null,S.a.createElement($.a,{loading:s,hasWritePermissions:l})):null),S.a.createElement(R.a,{variant:"icon-button-group"},a?S.a.createElement(D.a,null,S.a.createElement(ee.a,{dropdownItems:y,isOpen:P,onToggle:this.onToggle})):null,c?S.a.createElement(D.a,null,S.a.createElement(te.a,{dropdownItems:this.buildDropdownList()})):null),S.a.createElement(D.a,{variant:"pagination"},S.a.createElement(ae.a,{page:p,perPage:h,total:i?m:0,isCompact:!0,updatePagination:g,tableId:d})))))}}]),a}(y.Component);oe.propTypes={createButton:E.a.bool,exportButton:E.a.bool,kebab:E.a.bool,fetchWithParams:E.a.func,onSearch:E.a.func,tableId:E.a.string,tableData:E.a.array,onBulkSelect:E.a.func,hasMultiSelect:E.a.bool,clearSort:E.a.func,selectedBaselineIds:E.a.array,isDeleteDisabled:E.a.bool,page:E.a.number,perPage:E.a.number,totalBaselines:E.a.number,updatePagination:E.a.func,exportToCSV:E.a.func,loading:E.a.bool,hasWritePermissions:E.a.bool,hasReadPermissions:E.a.bool};var ie=oe,le=n(423);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var fe=function(e){h()(a,e);var t,n=ue(a);function a(e){var t;return u()(this,a),(t=n.call(this,e)).fetchWithParams=function(e){var n=t.props,a=n.tableId,r=n.fetchBaselines;e=se(se({},t.state),e),J.a.fetchBaselines(a,r,e)},t.onSearch=function(e){var n=t.state,a=n.orderBy,r=n.orderHow,o=e;t.setState({search:e}),t.fetchWithParams({orderBy:a,orderHow:r,search:o})},t.onSort=function(e,n,a){var r=t.state.search,o=t.props.hasWritePermissions,i="";0===n?i="display_name":1===n?i=o?"display_name":"updated":2===n&&(i="updated"),t.setState({sortBy:{index:n,direction:a},orderHow:a.toUpperCase(),orderBy:i}),t.fetchWithParams({orderBy:i,orderHow:a.toUpperCase(),search:r})},t.updatePagination=function(e){t.setState({page:e.page,perPage:e.perPage}),t.fetchWithParams({page:e.page,perPage:e.perPage})},t.state={sortBy:{index:1,direction:"asc"},search:void 0,orderBy:"display_name",orderHow:"ASC",page:1,perPage:20,emptyStateMessage:["This filter criteria matches no baselines.","Try changing your filter settings."]},t}return d()(a,[{key:"componentDidMount",value:(t=i()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:this.fetchWithParams();case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"renderRows",value:function(e){var t=this,n=this.props,a=n.tableData,r=n.kebab,o=n.onClick,i=n.tableId,l=[];return a.forEach((function(n){var a=[];if(o){var c=S.a.createElement("div",null,S.a.createElement("a",{className:"pointer active-blue",onClick:function(){return o(n[0])}},n[1]));a.push(c)}else a.push(n[1]);if(a.push(n[2]),r&&e){var s=S.a.createElement(G,{tableId:i,baselineRowData:n,fetchWithParams:t.fetchWithParams});a.push(S.a.createElement("div",null,s))}n.selected&&(a.selected=!0),l.push(a)})),l}},{key:"renderTable",value:function(e,t){var n,a=this.props,r=a.columns,o=a.createButton,i=a.hasMultiSelect,l=a.kebab,c=a.loading,s=a.onSelect,u=a.tableData,f=a.tableId,d=this.state.emptyStateMessage,p=[];if(c)c&&(n=S.a.createElement(w.SkeletonTable,{columns:r,rowSize:8,onSelect:!0,hasRadio:!i,canSelectAll:!1,isSelectable:!0}));else if(0===u.length){var h=S.a.createElement(w.EmptyTable,null,S.a.createElement(le.a,{title:"No matching baselines found",text:d}));p.push({cells:[{title:h,props:{colSpan:r.length}}]}),n=S.a.createElement(k.a,{"aria-label":"Baselines Table",cells:r,rows:p,canSelectAll:!1},S.a.createElement(I.a,null),S.a.createElement(B.a,null))}else{if(!t&&!o)return S.a.createElement(le.a,{icon:x.a,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]});p=this.renderRows(e),n=S.a.createElement(k.a,{"aria-label":"Baselines Table",onSort:this.onSort,onSelect:!(!e&&("CHECKBOX"!==f||l))&&s,sortBy:this.state.sortBy,cells:r,rows:p,canSelectAll:!1,selectVariant:i?C.a.checkbox:C.a.radio},S.a.createElement(I.a,null),S.a.createElement(B.a,null))}return n}},{key:"render",value:function(){var e=this.props,t=e.kebab,n=e.createButton,a=e.exportToCSV,r=e.exportButton,o=e.hasMultiSelect,i=e.loading,l=e.onBulkSelect,c=e.selectedBaselineIds,s=e.tableData,u=e.tableId,f=e.totalBaselines,d=e.hasReadPermissions,p=e.hasWritePermissions,h=this.state,m=h.page,g=h.perPage;return S.a.createElement(S.a.Fragment,null,S.a.createElement(ie,{createButton:n,exportButton:r,kebab:t,onSearch:this.onSearch,tableId:u,fetchWithParams:this.fetchWithParams,tableData:s,onBulkSelect:l,hasMultiSelect:o,selectedBaselineIds:c,isDeleteDisabled:(null==c?void 0:c.length)<1,page:m,perPage:g,totalBaselines:f,updatePagination:this.updatePagination,exportToCSV:a,loading:i,hasWritePermissions:p,hasReadPermissions:d}),this.renderTable(p,d),S.a.createElement(T.a,null,S.a.createElement(R.a,{className:"pf-c-pagination"},S.a.createElement(D.a,null,S.a.createElement(ae.b,{page:m,perPage:g,total:d?f:0,isCompact:!1,updatePagination:this.updatePagination,tableId:u})))))}}]),a}(y.Component);fe.propTypes={loading:E.a.bool,tableData:E.a.array,fetchBaselines:E.a.func,tableId:E.a.string,hasMultiSelect:E.a.bool,onClick:E.a.func,kebab:E.a.bool,createButton:E.a.bool,exportButton:E.a.bool,onSelect:E.a.func,columns:E.a.array,onBulkSelect:E.a.func,selectedBaselineIds:E.a.array,totalBaselines:E.a.number,exportToCSV:E.a.func,hasReadPermissions:E.a.bool,hasWritePermissions:E.a.bool};t.a=Object(O.connect)(null,(function(e){return{fetchBaselines:function(t,n){return e(H.a.fetchBaselines(t,n))},exportToCSV:function(t,n){e(H.a.exportToCSV(t,n))}}}))(fe)},1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(404);var r={toggleAddSystemModal:function(){return{type:a.a.OPEN_ADD_SYSTEM_MODAL}},selectActiveTab:function(e){return{type:a.a.SELECT_ACTIVE_TAB,payload:e}}}},1008:function(e,t,n){"use strict";var a=n(46),r=n.n(a),o=n(26),i=n.n(o),l=n(51),c=n.n(l),s=n(307),u=n.n(s),f=n(1),d=n.n(f),p=n(179),h=n(75),m=n(7),g=n.n(m),b=n(304),v=n(642),y=n(146),S=n(282),P=n(658),E=n(718),O=n(428),k=n(661),I=n(1001),B=n(425),C=n(408),w=n(423),T=n(170);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t,n=e.selectedSystemIds,a=e.setSelectedSystemIds,r=e.driftClearFilters,o=e.createBaselineModal,l=e.hasHistoricalDropdown,s=e.historicalProfiles,m=e.hasMultiSelect,g=e.selectHistoricProfiles,I=e.updateColumns,B=e.hasInventoryReadPermissions,C=e.entities,R=e.selectEntities,x=e.selectVariant,M=Object(f.useState)(null),j=u()(M,2),F=j[0],W=j[1],A=h.useSelector((function(e){var t=e.globalFilterState;return null==t?void 0:t.tagsFilter})),_=h.useSelector((function(e){var t=e.globalFilterState;return null==t?void 0:t.workloadsFilter})),N=h.useSelector((function(e){var t=e.globalFilterState;return null==t?void 0:t.sidsFilter})),V=h.useStore(),H=function(){m||(I("display_name"),g([]))},L=function(e){var t=[];switch(e){case"none":t={id:0,selected:!1,bulk:!0};break;case"page":t={id:0,selected:!0}}R(t)},Y=function(){var e=c()(i.a.mark((function e(){var t,c,u,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:h,react:d.a,reactRouterDom:p,reactCore:y,reactIcons:b,pfReactTable:E,pfReact:y});case 2:t=e.sent,c=t.inventoryConnector,u=t.mergeWithEntities,f=t.INVENTORY_ACTION_TYPES,r(),Object(P.getRegistry)().register(u(Object(O.a)(f,o,s,m,l,H))),W(c(V).InventoryTable),a(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){window.entityListener=Object(k.a)({actionType:"SELECT_ENTITY",callback:function(){!m&&H()}}),Y()}),[]),B?d.a.createElement(f.Fragment,null,F?d.a.createElement(F,{showTags:!0,noDetail:!0,customFilters:{tags:A,filter:{system_profile:D(D({},(null==_||null===(t=_.SAP)||void 0===t?void 0:t.isSelected)&&{sap_system:!0}),(null==N?void 0:N.length)>0&&{sap_sids:N})}},tableProps:{canSelectAll:!1,selectVariant:x},total:C.total,bulkSelect:L&&{isDisabled:!m,count:C&&C.selectedSystemIds?C.selectedSystemIds.length:0,items:[{title:"Select none (0)",onClick:function(){L("none")}},{title:"Select page (".concat(C.count,")"),onClick:function(){L("page")}}],onSelect:function(e){L(e?"page":"none")},checked:C&&C.selectedSystemIds?T.a.findCheckedValue(C.total,C.selectedSystemIds.length):null}}):d.a.createElement(S.a,{size:"lg"})):d.a.createElement(w.a,{icon:v.a,color:"#6a6e73",title:"You do not have access to the inventory",text:["Contact your organization administrator(s) for more information."]})};x.propTypes={setSelectedSystemIds:g.a.func,selectedSystemIds:g.a.array,selectHistoricProfiles:g.a.func,createBaselineModal:g.a.bool,driftClearFilters:g.a.func,hasHistoricalDropdown:g.a.bool,historicalProfiles:g.a.array,hasMultiSelect:g.a.bool,updateColumns:g.a.func,selectedHSPIds:g.a.array,hasInventoryReadPermissions:g.a.bool,entities:g.a.object,selectEntities:g.a.func,selectVariant:g.a.string},x.defaultProps={selectedSystemIds:[]},t.a=Object(h.connect)(null,(function(e){return{selectHistoricProfiles:function(t){return e(B.a.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(I.a.setSelectedSystemIds(t))},driftClearFilters:function(){return e(C.a.clearAllFilters())},updateColumns:function(t){return e(C.a.updateColumns(t))},selectEntities:function(t){return e({type:"SELECT_ENTITY",payload:t})}}}))(x)},1009:function(e,t,n){var a=n(243),r=n(1015),o=n(1016),i=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,f,d,p,h=0,m=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,a=s;return c=s=void 0,h=t,f=e.apply(a,n)}function y(e){return h=e,d=setTimeout(P,t),m?v(e):f}function S(e){var n=e-p;return void 0===p||n>=t||n<0||g&&e-h>=u}function P(){var e=r();if(S(e))return E(e);d=setTimeout(P,function(e){var n=t-(e-p);return g?l(n,u-(e-h)):n}(e))}function E(e){return d=void 0,b&&c?v(e):(c=s=void 0,f)}function O(){var e=r(),n=S(e);if(c=arguments,s=this,p=e,n){if(void 0===d)return y(p);if(g)return clearTimeout(d),d=setTimeout(P,t),v(p)}return void 0===d&&(d=setTimeout(P,t)),f}return t=o(t)||0,a(n)&&(m=!!n.leading,u=(g="maxWait"in n)?i(o(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=p=s=d=void 0},O.flush=function(){return void 0===d?f:E(r())},O}},1010:function(e,t,n){"use strict";var a=n(82),r=n.n(a),o=n(83),i=n.n(o),l=n(84),c=n.n(l),s=n(85),u=n.n(s),f=n(50),d=n.n(f),p=n(1),h=n.n(p),m=n(7),g=n.n(m),b=n(75),v=n(52),y=n(238),S=n(143),P=n(1013),E=n(1006);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var k=function(e){c()(n,e);var t=O(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).createBaseline=function(){var e=a.props,t=e.history,n=e.toggleCreateBaselineModal,r=e.addSystemModalOpened,o=e.toggleAddSystemModal;"/"===t.location.pathname&&(!0===r&&o(),t.push({pathname:"baselines"})),n()},a}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.emptyState,n=e.hasWritePermissions,a=e.loading;return h.a.createElement(h.a.Fragment,null,n||void 0===n?h.a.createElement(S.a,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,ouiaId:"create",isDisabled:a},"Create baseline"):h.a.createElement(y.a,{content:h.a.createElement("div",null,"You do not have permissions to perform this action")},h.a.createElement("div",{className:t?"tooltip-button-margin":null},h.a.createElement(S.a,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,isDisabled:!0,ouiaId:"create"},"Create baseline"))))}}]),n}(p.Component);k.propTypes={toggleCreateBaselineModal:g.a.func,toggleAddSystemModal:g.a.func,history:g.a.object,addSystemModalOpened:g.a.bool,loading:g.a.bool,hasWritePermissions:g.a.bool,emptyState:g.a.bool},t.a=Object(v.o)(Object(b.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}}),(function(e){return{toggleCreateBaselineModal:function(){return e(P.a.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(E.a.toggleAddSystemModal())}}}))(k))},1011:function(e,t,n){"use strict";var a=n(82),r=n.n(a),o=n(83),i=n.n(o),l=n(84),c=n.n(l),s=n(85),u=n.n(s),f=n(50),d=n.n(f),p=n(1),h=n.n(p),m=n(7),g=n.n(m),b=n(585),v=n(669);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var S=function(e){c()(n,e);var t=y(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).state={kebabOpened:!1},a.toggleKebab=function(){var e=a.state.kebabOpened;a.setState({kebabOpened:!e})},a}return i()(n,[{key:"render",value:function(){var e=this.props.dropdownItems,t=this.state.kebabOpened;return h.a.createElement(b.a,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},toggle:h.a.createElement(v.a,{onToggle:this.toggleKebab}),isOpen:t,ouiaId:"action",dropdownItems:e,isPlain:!0})}}]),n}(p.Component);S.propTypes={dropdownItems:g.a.array},t.a=S},1012:function(e,t,n){"use strict";var a=n(307),r=n.n(a),o=n(82),i=n.n(o),l=n(83),c=n.n(l),s=n(84),u=n.n(s),f=n(85),d=n.n(f),p=n(50),h=n.n(p),m=n(1),g=n.n(m),b=n(7),v=n.n(b),y=n(665),S=n(619);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var E=function(e){u()(n,e);var t=P(n);function n(e){var a;return i()(this,n),(a=t.call(this,e)).buildBody=function(){var e=a.props.globalFilterState,t=e.sidsFilter,n=e.tagsFilter,o=e.workloadsFilter,i="Workloads: "+Object.keys(o)[0]+". ";if(t.length){i+="SAP ID (SID): ";for(var l=0;l<t.length;l++)i+=t[l],l+1===t.length?i+=". ":i+=", "}if(n.length){var c=[],s={};i+="Tags: ",n.forEach((function(e){c.push(e.split("/"))})),c.forEach((function(e){e[0]in s?s[e[0]].push(e[1]):s[e[0]]=[e[1]]}));for(var u=0,f=Object.entries(s);u<f.length;u++){var d=r()(f[u],2),p=d[0],h=d[1];i+=p+": ";for(var m=0;m<h.length;m++)i+=h[m],m+1===h.length?i+=". ":i+=", "}}return i},a.state={isOpen:!0},a.toggleIsOpen=function(){var e=a.state.isOpen;a.setState({isOpen:!e})},a}return c()(n,[{key:"render",value:function(){var e=this,t=this.props.globalFilterState,n=t.sidsFilter,a=t.tagsFilter,r=t.workloadsFilter,o=this.state.isOpen;return g.a.createElement(g.a.Fragment,null,o&&(r.SAP||n.length>0||a.length>0)?g.a.createElement(y.a,{variant:"info",title:"Your systems are pre-filtered by the global context selector.",isInline:!0,actionClose:g.a.createElement(S.a,{onClose:function(){return e.toggleIsOpen()}})},g.a.createElement("p",null,this.buildBody())):null)}}]),n}(m.Component);E.propTypes={globalFilterState:v.a.object},t.a=E},1013:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(233),r=n(114);var o={toggleCreateBaselineModal:function(){return{type:a.a.TOGGLE_CREATE_BASELINE_MODAL}},createBaseline:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:a.a.CREATE_BASELINE,payload:r.a.postNewBaseline(e,t)}}}},1015:function(e,t,n){var a=n(306);e.exports=function(){return a.Date.now()}},1016:function(e,t){e.exports=function(e){return e}}}]);
//# sourceMappingURL=../sourcemaps/0.js.map