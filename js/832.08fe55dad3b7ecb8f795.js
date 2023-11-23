"use strict";(self.webpackChunkdrift=self.webpackChunkdrift||[]).push([[832],{41660:(e,t,n)=>{n.d(t,{x:()=>a.Z});var a=n(85535)},51504:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(78974),r=n(87248);const o={toggleCreateBaselineModal:function(){return{type:a.Z.TOGGLE_CREATE_BASELINE_MODAL}},createBaseline:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:a.Z.CREATE_BASELINE,payload:r.Z.postNewBaseline(e,t)}},clearCreateBaselineData:function(){return{type:a.Z.CLEAR_CREATE_BASELINE_DATA}}}},67412:(e,t,n)=>{n.d(t,{Z:()=>$});var a=n(15861),r=n(4942),o=n(15671),l=n(43144),i=n(79340),s=n(82963),c=n(61120),u=n(41609),d=n.n(u),p=n(64687),f=n.n(p),m=n(92950),g=n.n(m),b=n(45697),h=n.n(b),v=n(90958),y=n(17855),S=n(92649),E=n(14938),B=n(52017),P=n(87462),I=n(97326),k=n(48270);var w=function(e){(0,i.Z)(d,e);var t,n,r,u=(n=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,o.Z)(this,d),(t=u.call(this,e)).deleteBaselines=t.deleteBaselines.bind((0,I.Z)(t)),t}return(0,l.Z)(d,[{key:"deleteBaselines",value:(t=(0,a.Z)(f().mark((function e(){var t,n,a,r,o,l,i,s,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.clearSelectedBaselines,a=t.deleteSelectedBaselines,r=t.selectedBaselineIds,o=t.fetchWithParams,l=t.baselineId,i=t.tableId,s=t.toggleModal,c=l?{baseline_ids:[l]}:{baseline_ids:r},s(),e.prev=3,e.next=6,a(c,i);case 6:n(i),o(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.baselineId,n=e.modalOpened,a=e.selectedBaselineIds,r=e.toggleModal,o=t||1===a.length?"Delete 1 selected baseline":"Delete ".concat(a.length," selected baselines");return g().createElement(E.Modal,{className:"drift",variant:E.ModalVariant.small,titleIconVariant:"warning",title:o,isOpen:n,onClose:r,actions:[g().createElement(E.Button,{key:"confirm",variant:"danger",onClick:this.deleteBaselines,ouiaId:"delete"},o),g().createElement(E.Button,{key:"cancel",variant:"link",onClick:r,ouiaId:"cancel"},"Cancel")]},"Deleting a baseline is permanent and cannot be undone.")}}]),d}(m.Component);w.propTypes={modalOpened:h().bool,clearSelectedBaselines:h().func,selectedBaselineIds:h().array,deleteSelectedBaselines:h().func,fetchWithParams:h().func,baselineId:h().string,tableId:h().string,toggleModal:h().func,revertBaselineFetch:h().func};const Z=(0,v.connect)(null,(function(e){return{deleteSelectedBaselines:function(t,n){return e(k.w.deleteSelectedBaselines(t,n))},clearSelectedBaselines:function(t){return e(k.w.clearSelectedBaselines(t))},revertBaselineFetch:function(t){return e(k.w.revertBaselineFetch(t))}}}))(w);var O=n(98773);var T=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function r(e){var t;return(0,o.Z)(this,r),(t=a.call(this,e)).fetchBaseline=function(){var e=t.props,n=e.baselineRowData;(0,e.navigate)("/baselines/"+n[0])},t.state={isOpen:!1,modalOpened:!1},t.onKebabToggle=t.onKebabToggle.bind((0,I.Z)(t)),t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t}return(0,l.Z)(r,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,a=t.modalOpened,r=this.props,o=r.baselineRowData,l=r.fetchWithParams,i=r.tableId,s=r.baselineName,c=[g().createElement(E.DropdownItem,{key:"edit","data-ouia-component-id":"edit-baseline-dropdown-item-"+s,component:"button",onClick:this.fetchBaseline},"Edit"),g().createElement(E.DropdownItem,{key:"delete","data-ouia-component-id":"delete-baseline-dropdown-item-"+s,component:"button",onClick:this.toggleModal},"Delete")];return g().createElement(g().Fragment,null,a?g().createElement(Z,{modalOpened:a,baselineId:o[0],tableId:i,fetchWithParams:l,toggleModal:this.toggleModal}):null,g().createElement(E.Dropdown,{style:{float:"right"},ouiaId:"baseline-kebab-dropdown-"+s,toggle:g().createElement(E.KebabToggle,{"data-ouia-component-id":"baseline-kebab-dropdown-toggle-"+s,"data-ouia-component-type":"PF4/DropdownToggle",onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:n,dropdownItems:c,isPlain:!0}))}}]),r}(m.Component);T.propTypes={baselineRowData:h().array,tableId:h().string,fetchWithParams:h().func,baselineName:h().string,navigate:h().func};const C=function(e){var t=(0,O.Z)();return g().createElement(T,(0,P.Z)({},e,{navigate:t}))};var x=n(60001),R=n(620),D=n(23279),N=n.n(D),F=n(51504),M=n(41660),A=n(62012);var j=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function r(e){var t;return(0,o.Z)(this,r),(t=a.call(this,e)).createBaseline=function(){var e=t.props,n=e.toggleCreateBaselineModal,a=e.addSystemModalOpened,r=e.toggleAddSystemModal,o=e.location,l=e.navigate;"/"===o.pathname&&(!0===a&&r(),l("/baselines")),n()},t}return(0,l.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions;return g().createElement(g().Fragment,null,a.baselinesWrite||void 0===a.baselinesWrite?g().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,ouiaId:"create-baseline-button",isDisabled:n},"Create baseline"):g().createElement(E.Tooltip,{content:g().createElement("div",null,"You do not have permissions to perform this action")},g().createElement("div",{className:t?"tooltip-button-margin":null},g().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,isDisabled:!0,ouiaId:"create-baseline-button"},"Create baseline"))))}}]),r}(m.Component);j.propTypes={toggleCreateBaselineModal:h().func,toggleAddSystemModal:h().func,addSystemModalOpened:h().bool,loading:h().bool,emptyState:h().bool,permissions:h().object,navigate:h().func,location:h().object};const _=(0,v.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}}),(function(e){return{toggleCreateBaselineModal:function(){return e(F.Z.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(M.x.toggleAddSystemModal())}}}))((function(e){var t=(0,O.Z)(),n=(0,A.useLocation)();return g().createElement(j,(0,P.Z)({},e,{navigate:t,location:n}))}));var W=n(74381),H=n(43895),L=n(14307),V=n(93187),K=n(72971);var J=function(e){(0,i.Z)(d,e);var t,n,r,u=(n=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,o.Z)(this,d),(t=u.call(this,e)).prepareExport=function(e){var n=t.props,a=n.store,r=n.tableData,o=n.tableId;(0,K.Ro)(a),e(o,r)},t.onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.buildDropdownList=function(){var e=t.props.isDeleteDisabled,n=[];return n.push(g().createElement(E.DropdownItem,{key:"multi-delete","data-ouia-component-id":"delete-baselines-dropdown-item",component:"button",onClick:t.toggleModal,isDisabled:e},"Delete selected baselines")),n},t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t.setTextFilter=function(e){t.setState({nameSearch:e}),t.handleSearch(e)},t.clearTextFilter=function(){t.setState({nameSearch:""}),t.handleSearch("")},t.handleSearch=N()((function(e){this.props.onSearch(e)}),250),t.state={nameSearch:"",modalOpened:!1,dropdownOpen:!1,dropdownItems:[g().createElement(E.DropdownItem,{key:"export-to-CSV",component:"button","data-ouia-component-id":"export-to-csv-dropdown-item-baselines",onClick:function(){return t.prepareExport(t.props.exportToCSV)}},"Export to CSV"),g().createElement(E.DropdownItem,{key:"export-to-JSON",component:"button","data-ouia-component-id":"export-to-json-dropdown-item-baselines",onClick:function(){return t.prepareExport(t.props.exportToJSON)}},"Export to JSON")]},t.handleSearch=t.handleSearch.bind((0,I.Z)(t)),t.clearFilters=t.clearFilters.bind((0,I.Z)(t)),t}return(0,l.Z)(d,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.exportStatus,a=t.resetBaselinesExportStatus,r=t.store;"success"===n&&"success"!==e.exportStatus&&((0,K.Np)(r),a()),"failure"===n&&"failure"!==e.exportStatus&&((0,K.WD)(r),a())}},{key:"clearFilters",value:(t=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.onSearch,this.setState({nameSearch:""}),t("");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.exportButton,r=t.fetchWithParams,o=t.hasMultiSelect,l=t.kebab,i=t.leftAlignToolbar,s=t.loading,c=t.onBulkSelect,u=t.tableData,d=t.tableId,p=t.page,f=t.permissions,m=t.perPage,b=t.selectedBaselineIds,h=t.totalBaselines,v=t.updatePagination,y=this.state,B=y.dropdownItems,P=y.dropdownOpen,I=y.modalOpened,k=y.nameSearch;return g().createElement(g().Fragment,null,g().createElement(Z,{modalOpened:I,tableId:d,fetchWithParams:r,toggleModal:this.toggleModal,selectedBaselineIds:b}),g().createElement(E.Toolbar,{className:i?"baseline-toolbar":null,clearAllFilters:this.clearFilters},g().createElement(E.ToolbarContent,null,o?g().createElement(E.ToolbarGroup,{variant:"filter-group"},g().createElement(E.ToolbarItem,null,g().createElement(S.BulkSelect,{id:"baselines-bulk-select",count:b.length,items:(0,K.vW)(c,u.length),checked:L.Z.findCheckedValue(h,b.length),onSelect:function(){return c("page")},isDisabled:0===u.length||!f.baselinesWrite&&l||!f.baselinesRead&&!n}))):null,g().createElement(E.ToolbarGroup,{variant:"filter-group"},g().createElement(E.ToolbarFilter,{chips:""!==k?[k]:[],deleteChip:this.clearFilters,categoryName:"Baseline name"},g().createElement(S.ConditionalFilter,{placeholder:"Filter by name",value:k,"data-ouia-component-type":"PF4/TextInput","data-ouia-component-id":"filter-by-name-baselines-table",onChange:function(t,n){return e.setTextFilter(n)},isDisabled:!f.baselinesRead}))),g().createElement(E.ToolbarGroup,{variant:"button-group"},n?g().createElement(E.ToolbarItem,null,g().createElement(_,{loading:s,permissions:f})):null),g().createElement(E.ToolbarGroup,{variant:"icon-button-group"},a?g().createElement(E.ToolbarItem,null,g().createElement(W.Z,{dropdownItems:B,ouiaId:"export-dropdown-baselines",isOpen:P,onToggle:this.onToggle})):null,l?g().createElement(E.ToolbarItem,null,g().createElement(H.Z,{ouiaId:"delete-baselines-dropdown",dropdownItems:this.buildDropdownList()})):null),g().createElement(E.ToolbarItem,{variant:"pagination"},g().createElement(V.v,{page:p,perPage:m,total:f.baselinesRead?h:0,isCompact:!0,updatePagination:v,tableId:d})))))}}]),d}(m.Component);J.propTypes={createButton:h().bool,exportButton:h().bool,kebab:h().bool,fetchWithParams:h().func,onSearch:h().func,tableId:h().string,tableData:h().array,onBulkSelect:h().func,hasMultiSelect:h().bool,clearSort:h().func,selectedBaselineIds:h().array,isDeleteDisabled:h().bool,page:h().number,perPage:h().number,totalBaselines:h().number,updatePagination:h().func,exportStatus:h().string,exportToCSV:h().func,exportToJSON:h().func,loading:h().bool,permissions:h().object,leftAlignToolbar:h().bool,resetBaselinesExportStatus:h().func,store:h().object};const G=J;var Y=n(42325),U=n(2136),z=n(21205);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){(0,i.Z)(m,e);var t,n,r,u,p=(r=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(r);if(u){var n=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,o.Z)(this,m),(t=p.call(this,e)).fetchWithParams=function(e){var n=t.props,a=n.tableId,r=n.fetchBaselines;e=X(X({},t.state.params),e),r(a,R.Z.returnParams(e))},t.onSearch=function(e){var n=t.state.params,a=n.orderBy,r=n.orderHow,o=e;t.setState({search:e}),t.fetchWithParams({orderBy:a,orderHow:r,search:o})},t.onSort=function(e,n,a){var r=t.state.params.search,o=t.props.permissions,l="";0===n?l="display_name":1===n?l=o.baselinesWrite?"display_name":"updated":2===n&&(l="updated"),t.setState({params:X(X({},t.state.params),{},{sortBy:{index:n,direction:a},orderHow:a.toUpperCase(),orderBy:l})}),t.fetchWithParams({orderBy:l,orderHow:a.toUpperCase(),search:r})},t.setSelectedIds=function(e){var t=[];return e.forEach((function(e){t.push(Array.isArray(e)?e[0]:e.id)})),t},t.isAnyBaselineSelectedOnPage=function(e){var t=!1;return e.map((function(e){!0===e.selected&&(t=!0)})),t},t.onBulkSelect=function(){var e=(0,a.Z)(f().mark((function e(n){var a,r,o,l,i,s,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,r=a.bulkSelectBasket,o=a.tableData,l=a.tableId,i=a.selectBaseline,s=a.selectedBaselineIds,t.setState({bulkSelectType:n}),"none"===n?(c=!1,u=s):(u=t.setSelectedIds(o),c=!t.isAnyBaselineSelectedOnPage(o)),"COMPARISON"===l&&r(o,c),i(u,c,l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updatePagination=function(e){t.setState({params:X(X({},t.state.params),{},{page:e.page,perPage:e.perPage})}),t.fetchWithParams({page:e.page,perPage:e.perPage})},t.renderEmptyState=function(e){var n,a=t.props,r=a.baselineError,o=a.columns,l=a.tableId,i=[];return 200!==r.status&&void 0!==r.status?t.renderError():("RADIO"===l?n=g().createElement(S.EmptyTable,null,g().createElement(Y.Z,{title:K.WO,text:K.MC})):"COMPARISON"===l&&(n=!1===e.baselinesRead?g().createElement(Y.Z,{icon:B.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):g().createElement(S.EmptyTable,null,g().createElement(Y.Z,{title:K.WO,text:K.pM}))),i.push({cells:[{title:n,props:{colSpan:o.length}}]}),g().createElement(y.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:o,rows:i,canSelectAll:!1},g().createElement(y.TableHeader,null),g().createElement(y.TableBody,null)))},t.state={params:{sortBy:{index:1,direction:"asc"},search:void 0,orderBy:"display_name",orderHow:"ASC",page:1,perPage:20},bulkSelectType:"",errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t}return(0,l.Z)(m,[{key:"componentDidMount",value:(n=(0,a.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchWithParams();case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"componentDidUpdate",value:(t=(0,a.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!d()(t.baselineError)&&d()(this.props.baselineError)&&this.fetchWithParams();case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"renderRows",value:function(e){var t=this,n=this.props,a=n.basketIsVisible,r=n.hasMultiSelect,o=n.hasSwitch,l=n.tableData,i=n.kebab,s=n.onClick,c=n.notificationsSwitchError,u=n.selectedBaselineIds,d=n.toggleNotificationPending,p=n.toggleNotificationFulfilled,f=n.toggleNotificationRejected,m=n.tableId,b=[];return l.forEach((function(n,l){var h=[];if(s){var v=g().createElement("div",null,g().createElement("a",{className:"pointer active-blue","data-ouia-component-type":"PF4/Button","data-ouia-component-id":"baseline-details-"+n[1],onClick:function(){return s(n[0])}},n[1]));h.push(v)}else h.push(n[1]);if(h.push(n[2]),h.push(g().createElement("div",{className:"no-left-padding"},g().createElement(U.Z,{classname:"sm-padding-right",index:l,badgeCount:n[3],hasBadge:!0,hasSwitch:o,baselineData:{id:n[0],display_name:n[1],associated_systems:n[3],notifications_enabled:n[4]},notificationsSwitchError:c,toggleNotificationPending:d,toggleNotificationFulfilled:p,toggleNotificationRejected:f}))),i&&e){var y=g().createElement(C,{tableId:m,baselineRowData:n,fetchWithParams:t.fetchWithParams,baselineName:n[1],selectedBaselineIds:u});h.push(g().createElement("div",null,y))}n.selected&&(h.selected=!0),r&&(h.disableSelection=a),b.push(h)})),b}},{key:"renderError",value:function(){var e=this.props,t=e.baselineError,n=e.revertBaselineFetch,a=this.state.errorMessage;return g().createElement(Y.Z,{icon:B.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:a,error:"Error "+t.status+": "+t.detail,button:g().createElement("a",{onClick:function(){return n()}},g().createElement(B.UndoIcon,{className:"reload-button"}),"Retry")})}},{key:"renderBaselinesPageError",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions,r=e.baselineError;return 200!==r.status&&void 0!==r.status?this.renderError():g().createElement(Y.Z,{icon:B.AddCircleOIcon,title:K.WO,text:K.pM,button:g().createElement(_,{emptyState:t,permissions:a,loading:n})})}},{key:"renderTable",value:function(e){var t,n,a=e.baselinesWrite,r=e.baselinesRead,o=this.props,l=o.columns,i=o.createButton,s=o.emptyState,c=o.hasMultiSelect,u=o.kebab,d=o.loading,p=o.onSelect,f=o.tableData,m=o.tableId,b=[];if(d)d&&(t=g().createElement(S.SkeletonTable,{columns:l,rowSize:8,onSelect:!0,hasRadio:!c,canSelectAll:!1,isSelectable:!0}));else if(0===f.length)n=s?g().createElement(S.EmptyTable,null,g().createElement(Y.Z,{title:K.WO,text:K.pM})):g().createElement(S.EmptyTable,null,g().createElement(Y.Z,{title:K.Gr,text:K.ll})),b.push({cells:[{title:n,props:{colSpan:l.length}}]}),t=g().createElement(y.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:l,rows:b,canSelectAll:!1},g().createElement(y.TableHeader,null),g().createElement(y.TableBody,null));else{if(!r&&!i)return g().createElement(Y.Z,{icon:B.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]});b=this.renderRows(a),t=g().createElement(y.Table,{className:"baseline-table","aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",onSort:this.onSort,onSelect:!(!a&&("CHECKBOX"!==m&&"COMPARISON"!==m||u))&&p,sortBy:this.state.params.sortBy,cells:l,rows:b,canSelectAll:!1,selectVariant:c?y.RowSelectVariant.checkbox:y.RowSelectVariant.radio,isStickyHeader:!0},g().createElement(y.TableHeader,null),g().createElement(y.TableBody,null))}return g().createElement(E.Card,{className:"pf-t-light pf-m-opaque-100 tableNoPadding"},g().createElement(E.CardBody,null,t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.emptyState,r=t.exportStatus,o=t.exportToCSV,l=t.exportToJSON,i=t.exportButton,s=t.hasMultiSelect,c=t.kebab,u=t.leftAlignToolbar,d=t.loading,p=t.permissions,f=t.resetBaselinesExportStatus,m=t.selectedBaselineIds,b=t.tableData,h=t.tableId,v=t.totalBaselines,y=this.state.params,S=y.page,B=y.perPage;return g().createElement(z.g.Consumer,null,(function(t){return g().createElement(g().Fragment,null,"CHECKBOX"===h&&a&&!d?e.renderBaselinesPageError():g().createElement(g().Fragment,null,g().createElement(G,{createButton:n,exportButton:i,exportStatus:r,kebab:c,onSearch:e.onSearch,tableId:h,fetchWithParams:e.fetchWithParams,tableData:b,onBulkSelect:e.onBulkSelect,hasMultiSelect:s,selectedBaselineIds:m,isDeleteDisabled:(null==m?void 0:m.length)<1,page:S,perPage:B,totalBaselines:v,updatePagination:e.updatePagination,exportToCSV:o,exportToJSON:l,leftAlignToolbar:u,loading:d,permissions:p,resetBaselinesExportStatus:f,store:null==t?void 0:t.registry.getStore()}),a&&!d?e.renderEmptyState(p):e.renderTable(p),g().createElement(E.Toolbar,null,g().createElement(E.ToolbarGroup,{className:"pf-c-pagination"},g().createElement(E.ToolbarItem,null,g().createElement(V.Z,{page:S,perPage:B,total:p.baselinesRead?v:0,isCompact:!1,updatePagination:e.updatePagination,tableId:h}))))))}))}}]),m}(m.Component);Q.propTypes={loading:h().bool,tableData:h().array,fetchBaselines:h().func,tableId:h().string,hasMultiSelect:h().bool,onClick:h().func,kebab:h().bool,createButton:h().bool,exportButton:h().bool,exportStatus:h().string,onSelect:h().func,columns:h().array,selectedBaselineIds:h().array,totalBaselines:h().number,exportToCSV:h().func,exportToJSON:h().func,permissions:h().object,basketIsVisible:h().bool,leftAlignToolbar:h().bool,hasSwitch:h().bool,notificationsSwitchError:h().object,emptyState:h().bool,selectBaseline:h().func,toggleNotificationPending:h().func,toggleNotificationFulfilled:h().func,toggleNotificationRejected:h().func,baselineError:h().object,revertBaselineFetch:h().func,bulkSelectBasket:h().func,resetBaselinesExportStatus:h().func};const $=(0,v.connect)(null,(function(e){return{fetchBaselines:function(t,n){return e(k.w.fetchBaselines(t,n))},exportToCSV:function(t,n){e(k.w.exportToCSV(t,n))},exportToJSON:function(t,n){e(k.w.exportToJSON(t,n))},toggleNotificationPending:function(){return e(x.E.toggleNotificationPending())},toggleNotificationFulfilled:function(t){return e(x.E.toggleNotificationFulfilled(t))},toggleNotificationRejected:function(t,n,a){e(x.E.toggleNotificationRejected(t,n,a))}}}))(Q)},2136:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(70885),r=n(92950),o=n.n(r),l=n(45697),i=n.n(l),s=n(14938);function c(e){var t=e.baselineData,n=e.classname,a=e.isChecked,r=e.handleNotificationToggle,l=e.hasLabel;return o().createElement(s.Switch,{className:n,"aria-label":"notifications-toggle",isChecked:a,onChange:function(){return r(t)},labelOff:l?"Notifications are disabled":null,label:l?"Notifications are enabled":null,isReversed:!0})}c.propTypes={baselineData:i().object,classname:i().string,handleNotificationToggle:i().func,hasLabel:i().bool,isChecked:i().bool};const u=c;var d=n(98365);function p(e){var t=e.badgeCount,n=e.baselineData,l=e.classname,i=e.hasBadge,c=e.hasLabel,p=e.hasSwitch,f=e.index,m=e.notificationsSwitchError,g=e.toggleNotificationPending,b=e.toggleNotificationFulfilled,h=e.toggleNotificationRejected,v=(0,r.useState)(n.notifications_enabled),y=(0,a.Z)(v,2),S=y[0],E=y[1];return(0,r.useEffect)((function(){(null==m?void 0:m.id)===n.id&&E(!S)}),[m]),o().createElement(o().Fragment,null,p?o().createElement(u,{classname:l,isChecked:S,hasLabel:c,handleNotificationToggle:function(e){var t={display_name:e.display_name,facts_patch:[],notifications_enabled:!S};d.ZP.toggleNotificationSwitch(e.id,t,g,b,h),E(!S)},baselineData:n}):null,i?o().createElement(s.Badge,{key:f,isRead:!(t>0)||null},t):null)}p.propTypes={badgeCount:i().number,baselineData:i().object,classname:i().string,hasBadge:i().bool,hasLabel:i().bool,hasSwitch:i().bool,index:i().number,notificationsSwitchError:i().object,toggleNotificationPending:i().func,toggleNotificationFulfilled:i().func,toggleNotificationRejected:i().func};const f=p},43895:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(15671),r=n(43144),o=n(79340),l=n(82963),i=n(61120),s=n(92950),c=n.n(s),u=n(45697),d=n.n(u),p=n(14938);var f=function(e){(0,o.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=s.call(this,e)).state={kebabOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t}return(0,r.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.ouiaId,a=this.state.kebabOpened;return c().createElement(p.Dropdown,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},ouiaId:n||"action-kebab",toggle:c().createElement(p.KebabToggle,{"data-ouia-component-type":"PF4/DropdownToggle","data-ouia-component-id":n?n+"-toggle":"action-kebab-toggle",onToggle:this.toggleKebab}),isOpen:a,dropdownItems:t,isPlain:!0})}}]),u}(s.Component);f.propTypes={dropdownItems:d().array,ouiaId:d().string};const m=f},74381:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(15671),r=n(43144),o=n(79340),l=n(82963),i=n(61120),s=n(92950),c=n.n(s),u=n(45697),d=n.n(u),p=n(14938),f=n(52017);var m=function(e){(0,o.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){return(0,a.Z)(this,u),s.call(this,e)}return(0,r.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.isOpen,a=e.onToggle,r=e.ouiaId;return c().createElement(p.Dropdown,{toggle:c().createElement(p.DropdownToggle,{ouiaId:r?r+"-toggle":"action-kebab-toggle",toggleIndicator:null,onToggle:a},c().createElement(f.ExportIcon,{className:"pointer not-active"})),isOpen:n,ouiaId:r||"export-dropdown",isPlain:!0,position:p.DropdownPosition.left,dropdownItems:t})}}]),u}(s.Component);m.propTypes={dropdownItems:d().array,isOpen:d().bool,onToggle:d().func,ouiaId:d().string};const g=m},86047:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(70885),r=n(15671),o=n(43144),l=n(79340),i=n(82963),s=n(61120),c=n(92950),u=n.n(c),d=n(45697),p=n.n(d),f=n(14938);var m=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=c.call(this,e)).isFilterSelected=function(e){for(var t in e)if(e[t].isSelected)return!0;return!1},t.buildBody=function(){var e=t.props.globalFilterState,n=e.sidsFilter,r=e.tagsFilter,o=e.workloadsFilter,l="",i=!0;for(var s in o)o[s].isSelected&&(i?(l="Workloads: ".concat(s),i=!1):l="".concat(l,", ").concat(s));if(i||(l+=". "),n.length){l+="SAP ID (SID): ";for(var c=0;c<n.length;c++)l+=n[c],c+1===n.length?l+=". ":l+=", "}if(r.length){var u=[],d={};l+="Tags: ",r.forEach((function(e){u.push(e.split("/"))})),u.forEach((function(e){e[0]in d?d[e[0]].push(e[1]):d[e[0]]=[e[1]]}));for(var p=0,f=Object.entries(d);p<f.length;p++){var m=(0,a.Z)(f[p],2),g=m[0],b=m[1];l+=g+": ";for(var h=0;h<b.length;h++)l+=b[h],h+1===b.length?l+=". ":l+=", "}}return l},t}return(0,o.Z)(d,[{key:"render",value:function(){var e=this.props.globalFilterState,t=e.sidsFilter,n=e.tagsFilter,a=e.workloadsFilter;return u().createElement(u().Fragment,null,this.isFilterSelected(a)||t.length>0||n.length>0?u().createElement(f.Alert,{variant:"info",title:"Your systems are pre-filtered by the global context selector.",isInline:!0},u().createElement("p",null,this.buildBody())):null)}}]),d}(c.Component);m.propTypes={globalFilterState:p().object};const g=m},83068:(e,t,n)=>{n.d(t,{h:()=>r});var a=n(93802);const r={selectHistoricProfiles:function(e){return{type:a.Z.SELECT_HISTORIC_PROFILES,payload:e}}}},93187:(e,t,n)=>{n.d(t,{Z:()=>g,v:()=>m});var a=n(15671),r=n(43144),o=n(97326),l=n(79340),i=n(82963),s=n(61120),c=n(92950),u=n.n(c),d=n(45697),p=n.n(d),f=n(14938);var m=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),(t=c.call(this,e)).onSetPage=t.onSetPage.bind((0,o.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,o.Z)(t)),t}return(0,r.Z)(d,[{key:"onSetPage",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:t,perPage:this.props.perPage};a?r(o,a):r(o)}},{key:"onPerPageSelect",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:1,perPage:t};a?r(o,a):r(o)}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.page,a=e.perPage,r=e.isCompact,o=e.widgetId,l=e.variant,i=e.ouiaId;return u().createElement(f.Pagination,{itemCount:t||0,widgetId:o,page:0===t?0:n,perPage:a,variant:l,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:r,ouiaId:i})}}]),d}(c.Component);m.propTypes={perPage:p().number,page:p().number,updatePagination:p().func,total:p().number,isCompact:p().bool,tableId:p().string,widgetId:p().string,variant:p().any,ouiaId:p().string};const g=m},34869:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(15861),r=n(4942),o=n(64687),l=n.n(o),i=n(92950),s=n.n(i),c=n(90958),u=n(45697),d=n.n(u),p=n(63652),f=n(52017),m=n(89455),g=n(59386),b=n(69078),h=n(42325),v=n(83068),y=n(14307),S=n(21205);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.baselineId,n=e.createBaselineModal,r=e.deselectHistoricalProfiles,o=e.driftClearFilters,u=e.entities,d=e.permissions,g=e.hasMultiSelect,b=e.historicalProfiles,v=e.isAddSystemNotifications,E=e.selectedSystemIds,P=e.selectEntities,I=e.selectHistoricProfiles,k=e.selectSystemsToAdd,w=e.selectVariant,Z=e.setSelectedSystemIds,O=e.systemNotificationIds,T=e.systemColumns,C=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.tagsFilter})),x=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.workloadsFilter})),R=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.sidsFilter})),D=(0,i.useRef)((function(){})),N=function(e){var t=[];switch(e){case"none":t={id:0,selected:!1,bulk:!0};break;case"deselect-page":t={id:0,selected:!1};break;case"page":t={id:0,selected:!0}}P(t)};return d.inventoryRead?s().createElement("div",{className:"inventory-toolbar-no-padding"},s().createElement(S.g.Consumer,null,(function(e){var i,c,d,f;return s().createElement(p.Z,{columns:T,onLoad:function(a){var l,i=a.mergeWithEntities,s=a.INVENTORY_ACTION_TYPES,c=a.api;D.current=null==c?void 0:c.getEntities,o(),null==e||null===(l=e.registry)||void 0===l||l.register(i((0,m.Z)(s,t,n,b,g,r,v,I,O,k))),Z(n?[]:E)},showTags:!0,noDetail:!0,customFilters:{tags:C,filter:{system_profile:B(B(B(B({},(null==x||null===(i=x.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==x||null===(c=x["Ansible Automation Platform"])||void 0===c?void 0:c.isSelected)&&{ansible:"not_nil"}),(null==x||null===(d=x["Microsoft SQL"])||void 0===d?void 0:d.isSelected)&&{mssql:"not_nil"}),(null==R?void 0:R.length)>0&&{sap_sids:R})}},tableProps:{canSelectAll:!1,selectVariant:w,ouiaId:"systems-table",className:"inventory-align",isStickyHeader:!0},getEntities:O&&!v?function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(O||[]).slice((n.page-1)*n.per_page,n.page*n.per_page),e.next=3,null===(a=D.current)||void 0===a?void 0:a.call(D,r,{hasItems:!0},!0);case 3:return o=e.sent,e.abrupt("return",B(B({},o),{},{results:o.results.map((function(e){return B(B({},e),r.find((function(t){return t.uuid===e.id}))||{})})),total:(O||[]).length,page:n.page,per_page:n.per_page}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}():function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(a=D.current)||void 0===a?void 0:a.call(D,[],n,!0);case 2:return r=e.sent,e.abrupt("return",B({},r));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),bulkSelect:N&&!v&&{id:"systems-bulk-select",isDisabled:!g,count:null==u||null===(f=u.selectedSystemIds)||void 0===f?void 0:f.length,items:[{title:"Select none (0)",onClick:function(){N("none")}},{title:"Select page (".concat((null==u?void 0:u.count)||0,")"),onClick:function(){N("page")}},{title:"Deselect page (".concat((null==u?void 0:u.count)||0,")"),onClick:function(){N("deselect-page")}}],onSelect:function(){var e;(null==u?void 0:u.rows.length)===(null==u||null===(e=u.selectedSystems)||void 0===e?void 0:e.length)?N("deselect-page"):N("page")},checked:u&&u.selectedSystemIds?y.Z.findCheckedValue(null==u?void 0:u.total,null==u?void 0:u.selectedSystemIds.length):null}})}))):s().createElement(h.Z,{icon:f.LockIcon,color:"#6a6e73",title:"You do not have access to the inventory",text:["Contact your organization administrator(s) for more information."]})};P.propTypes={setSelectedSystemIds:d().func,selectedSystemIds:d().array,createBaselineModal:d().bool,driftClearFilters:d().func,historicalProfiles:d().array,hasMultiSelect:d().bool,permissions:d().object,entities:d().object,selectEntities:d().func,selectVariant:d().string,systemNotificationIds:d().array,isAddSystemNotifications:d().bool,baselineId:d().string,selectHistoricProfiles:d().func,selectSystemsToAdd:d().func,selectSingleHSP:d().func,deselectHistoricalProfiles:d().func,systemColumns:d().array},P.defaultProps={selectedSystemIds:[]};const I=(0,c.connect)(null,(function(e){return{selectHistoricProfiles:function(t){return e(v.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(g.r.setSelectedSystemIds(t))},driftClearFilters:function(){return e(b.Z.clearAllFilters())},selectEntities:function(t){return e({type:"SELECT_ENTITY",payload:t})},selectSingleHSP:function(t){return e(b.Z.selectSingleHSP(t))}}}))(P)},59386:(e,t,n)=>{n.d(t,{r:()=>a.Z});var a=n(58667);n(26666)}}]);
//# sourceMappingURL=../sourcemaps/832.0532b7b5b57f00579fa8933fc5dc0f14.js.map