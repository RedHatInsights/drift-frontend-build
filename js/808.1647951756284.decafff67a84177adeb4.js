"use strict";(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[808],{51504:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(78974),o=n(87248);const r={toggleCreateBaselineModal:function(){return{type:a.Z.TOGGLE_CREATE_BASELINE_MODAL}},createBaseline:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:a.Z.CREATE_BASELINE,payload:o.Z.postNewBaseline(e,t)}}}},67412:(e,t,n)=>{n.d(t,{Z:()=>X});var a=n(15861),o=n(4942),r=n(15671),l=n(43144),i=n(60136),c=n(6215),s=n(61120),u=n(41609),d=n.n(u),p=n(87757),f=n.n(p),b=n(92950),m=n.n(b),h=n(45697),g=n.n(h),y=n(37282),v=n(3326),S=n(86388),E=n(34895),B=n(83632),P=n(97326),k=n(86235),I=n(48270);var w=function(e){(0,i.Z)(d,e);var t,n,o,u=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,s.Z)(n);if(o){var a=(0,s.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=u.call(this,e)).deleteBaselines=t.deleteBaselines.bind((0,P.Z)(t)),t}return(0,l.Z)(d,[{key:"deleteBaselines",value:(t=(0,a.Z)(f().mark((function e(){var t,n,a,o,r,l,i,c,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.clearSelectedBaselines,a=t.deleteSelectedBaselines,o=t.selectedBaselineIds,r=t.fetchWithParams,l=t.baselineId,i=t.tableId,c=t.toggleModal,s=l?{baseline_ids:[l]}:{baseline_ids:o},c(),e.prev=3,e.next=6,a(s,i);case 6:n(i),r(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.baselineId,n=e.modalOpened,a=e.selectedBaselineIds,o=e.toggleModal,r=t||1===a.length?"Delete baseline":"Delete baselines";return m().createElement(E.Modal,{className:"drift",variant:E.ModalVariant.small,title:r,isOpen:n,onClose:o,actions:[m().createElement(E.Button,{key:"confirm",variant:"danger",onClick:this.deleteBaselines,ouiaId:"delete"},r),m().createElement(E.Button,{key:"cancel",variant:"link",onClick:o,ouiaId:"cancel"},"Cancel")]},"Deleting a baseline is permanent and cannot be undone.")}}]),d}(b.Component);w.propTypes={modalOpened:g().bool,clearSelectedBaselines:g().func,selectedBaselineIds:g().array,deleteSelectedBaselines:g().func,fetchWithParams:g().func,baselineId:g().string,tableId:g().string,toggleModal:g().func,revertBaselineFetch:g().func};const T=(0,y.connect)(null,(function(e){return{deleteSelectedBaselines:function(t,n){return e(I.w.deleteSelectedBaselines(t,n))},clearSelectedBaselines:function(t){return e(I.w.clearSelectedBaselines(t))},revertBaselineFetch:function(t){return e(I.w.revertBaselineFetch(t))}}}))(w);var Z=function(e){(0,i.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function o(e){var t;return(0,r.Z)(this,o),(t=a.call(this,e)).fetchBaseline=function(){var e=t.props,n=e.baselineRowData;e.history.push("baselines/"+n[0])},t.state={isOpen:!1,modalOpened:!1},t.onKebabToggle=t.onKebabToggle.bind((0,P.Z)(t)),t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t}return(0,l.Z)(o,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,a=t.modalOpened,o=this.props,r=o.baselineRowData,l=o.fetchWithParams,i=o.tableId,c=o.baselineName,s=[m().createElement(E.DropdownItem,{key:"edit","data-ouia-component-id":"edit-baseline-dropdown-item-"+c,component:"button",onClick:this.fetchBaseline},"Edit"),m().createElement(E.DropdownItem,{key:"delete","data-ouia-component-id":"delete-baseline-dropdown-item-"+c,component:"button",onClick:this.toggleModal},"Delete")];return m().createElement(m().Fragment,null,a?m().createElement(T,{modalOpened:a,baselineId:r[0],tableId:i,fetchWithParams:l,toggleModal:this.toggleModal}):null,m().createElement(E.Dropdown,{style:{float:"right"},ouiaId:"baseline-kebab-dropdown-"+c,toggle:m().createElement(E.KebabToggle,{"data-ouia-component-id":"baseline-kebab-dropdown-toggle-"+c,"data-ouia-component-type":"PF4/DropdownToggle",onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:n,dropdownItems:s,isPlain:!0}))}}]),o}(b.Component);Z.propTypes={baselineRowData:g().array,history:g().object,tableId:g().string,fetchWithParams:g().func,baselineName:g().string};const O=(0,k.withRouter)(Z);var C=n(60001),R=n(620),x=n(23279),D=n.n(x),F=n(51504),M=n(56077);var N=function(e){(0,i.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function o(e){var t;return(0,r.Z)(this,o),(t=a.call(this,e)).createBaseline=function(){var e=t.props,n=e.history,a=e.toggleCreateBaselineModal,o=e.addSystemModalOpened,r=e.toggleAddSystemModal;"/"===n.location.pathname&&(!0===o&&r(),n.push({pathname:"baselines"})),a()},t}return(0,l.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions;return m().createElement(m().Fragment,null,a.baselinesWrite||void 0===a.baselinesWrite?m().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,ouiaId:"create-baseline-button",isDisabled:n},"Create baseline"):m().createElement(E.Tooltip,{content:m().createElement("div",null,"You do not have permissions to perform this action")},m().createElement("div",{className:t?"tooltip-button-margin":null},m().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,isDisabled:!0,ouiaId:"create-baseline-button"},"Create baseline"))))}}]),o}(b.Component);N.propTypes={toggleCreateBaselineModal:g().func,toggleAddSystemModal:g().func,history:g().object,addSystemModalOpened:g().bool,loading:g().bool,emptyState:g().bool,permissions:g().object};const A=(0,k.withRouter)((0,y.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}}),(function(e){return{toggleCreateBaselineModal:function(){return e(F.Z.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(M.x.toggleAddSystemModal())}}}))(N));var W=n(74381),j=n(43895),V=n(14307),_=n(93187);var H=function(e){(0,i.Z)(d,e);var t,n,o,u=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,s.Z)(n);if(o){var a=(0,s.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=u.call(this,e)).onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.buildDropdownList=function(){var e=t.props.isDeleteDisabled,n=[];return n.push(m().createElement(E.DropdownItem,{key:"multi-delete","data-ouia-component-id":"delete-baselines-dropdown-item",component:"button",onClick:t.toggleModal,isDisabled:e},"Delete baselines")),n},t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t.setTextFilter=function(e){t.setState({nameSearch:e}),t.handleSearch(e)},t.clearTextFilter=function(){t.setState({nameSearch:""}),t.handleSearch("")},t.handleSearch=D()((function(e){this.props.onSearch(e)}),250),t.state={nameSearch:"",modalOpened:!1,bulkSelectItems:[{title:"Select all",key:"select-all",ouiaId:"select-all",onClick:function(){return t.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",ouiaId:"select-none",onClick:function(){return t.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[m().createElement(E.DropdownItem,{key:"export-to-CSV",component:"button","data-ouia-component-id":"export-to-csv-dropdown-item-baselines",onClick:function(){return t.props.exportToCSV(t.props.tableData)}},"Export to CSV"),m().createElement(E.DropdownItem,{key:"export-to-JSON",component:"button","data-ouia-component-id":"export-to-json-dropdown-item-baselines",onClick:function(){return t.props.exportToJSON(t.props.tableData)}},"Export to JSON")]},t.handleSearch=t.handleSearch.bind((0,P.Z)(t)),t.clearFilters=t.clearFilters.bind((0,P.Z)(t)),t}return(0,l.Z)(d,[{key:"clearFilters",value:(t=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.onSearch,this.setState({nameSearch:""}),t("");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.exportButton,o=t.fetchWithParams,r=t.hasMultiSelect,l=t.kebab,i=t.leftAlignToolbar,c=t.loading,s=t.onBulkSelect,u=t.tableData,d=t.tableId,p=t.page,f=t.permissions,b=t.perPage,h=t.selectedBaselineIds,g=t.totalBaselines,y=t.updatePagination,v=this.state,B=v.bulkSelectItems,P=v.dropdownItems,k=v.dropdownOpen,I=v.modalOpened,w=v.nameSearch,Z=u.filter((function(e){return!0===e.selected})).length;return m().createElement(m().Fragment,null,m().createElement(T,{modalOpened:I,tableId:d,fetchWithParams:o,toggleModal:this.toggleModal,selectedBaselineIds:h}),m().createElement(E.Toolbar,{className:i?"baseline-toolbar":null,clearAllFilters:this.clearFilters},m().createElement(E.ToolbarContent,null,r?m().createElement(E.ToolbarGroup,{variant:"filter-group"},m().createElement(E.ToolbarItem,null,m().createElement(S.BulkSelect,{count:Z>0?Z:null,items:B,checked:V.Z.findCheckedValue(u.length,Z),onSelect:function(){return s(!Z>0)},isDisabled:0===u.length||!f.baselinesWrite&&l||!f.baselinesRead&&!n}))):null,m().createElement(E.ToolbarGroup,{variant:"filter-group"},m().createElement(E.ToolbarFilter,{chips:""!==w?[w]:[],deleteChip:this.clearFilters,categoryName:"Baseline name"},m().createElement(S.ConditionalFilter,{placeholder:"Filter by name",value:w,"data-ouia-component-type":"PF4/TextInput","data-ouia-component-id":"filter-by-name-baselines-table",onChange:function(t,n){return e.setTextFilter(n)},isDisabled:!f.baselinesRead||!f.baselinesWrite}))),m().createElement(E.ToolbarGroup,{variant:"button-group"},n?m().createElement(E.ToolbarItem,null,m().createElement(A,{loading:c,permissions:f})):null),m().createElement(E.ToolbarGroup,{variant:"icon-button-group"},a?m().createElement(E.ToolbarItem,null,m().createElement(W.Z,{dropdownItems:P,ouiaId:"export-dropdown-baselines",isOpen:k,onToggle:this.onToggle})):null,l?m().createElement(E.ToolbarItem,null,m().createElement(j.Z,{ouiaId:"delete-baselines-dropdown",dropdownItems:this.buildDropdownList()})):null),m().createElement(E.ToolbarItem,{variant:"pagination"},m().createElement(_.v,{page:p,perPage:b,total:f.baselinesRead?g:0,isCompact:!0,updatePagination:y,tableId:d})))))}}]),d}(b.Component);H.propTypes={createButton:g().bool,exportButton:g().bool,kebab:g().bool,fetchWithParams:g().func,onSearch:g().func,tableId:g().string,tableData:g().array,onBulkSelect:g().func,hasMultiSelect:g().bool,clearSort:g().func,selectedBaselineIds:g().array,isDeleteDisabled:g().bool,page:g().number,perPage:g().number,totalBaselines:g().number,updatePagination:g().func,exportToCSV:g().func,exportToJSON:g().func,loading:g().bool,permissions:g().object,leftAlignToolbar:g().bool};const K=H;var J=n(42325),G=n(39356),L=n(72971);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){(0,i.Z)(b,e);var t,n,o,u,p=(o=b,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,s.Z)(o);if(u){var n=(0,s.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,r.Z)(this,b),(t=p.call(this,e)).fetchWithParams=function(e){var n=t.props,a=n.tableId,o=n.fetchBaselines;e=Y(Y({},t.state),e),R.Z.fetchBaselines(a,o,e)},t.onSearch=function(e){var n=t.state,a=n.orderBy,o=n.orderHow,r=e;t.setState({search:e}),t.fetchWithParams({orderBy:a,orderHow:o,search:r})},t.onSort=function(e,n,a){var o=t.state.search,r=t.props.permissions,l="";0===n?l="display_name":1===n?l=r.baselinesWrite?"display_name":"updated":2===n&&(l="updated"),t.setState({sortBy:{index:n,direction:a},orderHow:a.toUpperCase(),orderBy:l}),t.fetchWithParams({orderBy:l,orderHow:a.toUpperCase(),search:o})},t.updatePagination=function(e){t.setState({page:e.page,perPage:e.perPage}),t.fetchWithParams({page:e.page,perPage:e.perPage})},t.renderEmptyState=function(e){var n,a=t.props,o=a.baselineError,r=a.columns,l=a.tableId,i=[];return 200!==o.status&&void 0!==o.status?t.renderError():("RADIO"===l?n=m().createElement(S.EmptyTable,null,m().createElement(J.Z,{title:L.WO,text:L.MC})):"COMPARISON"===l&&(n=!1===e.baselinesRead?m().createElement(J.Z,{icon:B.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):m().createElement(S.EmptyTable,null,m().createElement(J.Z,{title:L.WO,text:L.pM}))),i.push({cells:[{title:n,props:{colSpan:r.length}}]}),m().createElement(v.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:r,rows:i,canSelectAll:!1},m().createElement(v.TableHeader,null),m().createElement(v.TableBody,null)))},t.state={sortBy:{index:1,direction:"asc"},search:void 0,orderBy:"display_name",orderHow:"ASC",page:1,perPage:20},t}return(0,l.Z)(b,[{key:"componentDidMount",value:(n=(0,a.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,this.fetchWithParams();case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"componentDidUpdate",value:(t=(0,a.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!d()(t.baselineError)&&d()(this.props.baselineError)&&this.fetchWithParams();case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"renderRows",value:function(e){var t=this,n=this.props,a=n.basketIsVisible,o=n.hasMultiSelect,r=n.hasSwitch,l=n.tableData,i=n.kebab,c=n.onClick,s=n.notificationsSwitchError,u=n.selectedBaselineIds,d=n.toggleNotificationPending,p=n.toggleNotificationFulfilled,f=n.toggleNotificationRejected,b=n.tableId,h=[];return l.forEach((function(n,l){var g=[];if(c){var y=m().createElement("div",null,m().createElement("a",{className:"pointer active-blue","data-ouia-component-type":"PF4/Button","data-ouia-component-id":"baseline-details-"+n[1],onClick:function(){return c(n[0])}},n[1]));g.push(y)}else g.push(n[1]);if(g.push(n[2]),g.push(m().createElement("div",{className:"no-left-padding"},m().createElement(G.Z,{classname:"sm-padding-right",index:l,badgeCount:n[3],hasBadge:!0,hasSwitch:r,baselineData:{id:n[0],display_name:n[1],associated_systems:n[3],notifications_enabled:n[4]},notificationsSwitchError:s,toggleNotificationPending:d,toggleNotificationFulfilled:p,toggleNotificationRejected:f}))),i&&e){var v=m().createElement(O,{tableId:b,baselineRowData:n,fetchWithParams:t.fetchWithParams,baselineName:n[1],selectedBaselineIds:u});g.push(m().createElement("div",null,v))}n.selected&&(g.selected=!0),o&&(g.disableSelection=a),h.push(g)})),h}},{key:"renderError",value:function(){var e=this.props,t=e.baselineError,n=e.revertBaselineFetch,a=this.state.errorMessage;return m().createElement(J.Z,{icon:B.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:a,error:"Error "+t.status+": "+t.detail,button:m().createElement("a",{onClick:function(){return n()}},m().createElement(B.UndoIcon,{className:"reload-button"}),"Retry")})}},{key:"renderBaselinesPageError",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions,o=e.baselineError;return 200!==o.status&&void 0!==o.status?this.renderError():m().createElement(J.Z,{icon:B.AddCircleOIcon,title:L.WO,text:L.pM,button:m().createElement(A,{emptyState:t,permissions:a,loading:n})})}},{key:"renderTable",value:function(e){var t,n,a=e.baselinesWrite,o=e.baselinesRead,r=this.props,l=r.columns,i=r.createButton,c=r.emptyState,s=r.hasMultiSelect,u=r.kebab,d=r.loading,p=r.onSelect,f=r.tableData,b=r.tableId,h=[];if(d)d&&(t=m().createElement(S.SkeletonTable,{columns:l,rowSize:8,onSelect:!0,hasRadio:!s,canSelectAll:!1,isSelectable:!0}));else if(0===f.length)n=c?m().createElement(S.EmptyTable,null,m().createElement(J.Z,{title:L.WO,text:L.pM})):m().createElement(S.EmptyTable,null,m().createElement(J.Z,{title:L.Gr,text:L.ll})),h.push({cells:[{title:n,props:{colSpan:l.length}}]}),t=m().createElement(v.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:l,rows:h,canSelectAll:!1},m().createElement(v.TableHeader,null),m().createElement(v.TableBody,null));else{if(!o&&!i)return m().createElement(J.Z,{icon:B.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]});h=this.renderRows(a),t=m().createElement(v.Table,{className:"baseline-table","aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",onSort:this.onSort,onSelect:!(!a&&("CHECKBOX"!==b&&"COMPARISON"!==b||u))&&p,sortBy:this.state.sortBy,cells:l,rows:h,canSelectAll:!1,selectVariant:s?v.RowSelectVariant.checkbox:v.RowSelectVariant.radio,isStickyHeader:!0},m().createElement(v.TableHeader,null),m().createElement(v.TableBody,null))}return m().createElement(E.Card,{className:"pf-t-light pf-m-opaque-100"},m().createElement(E.CardBody,null,t))}},{key:"render",value:function(){var e=this.props,t=e.permissions,n=e.emptyState,a=e.loading,o=e.tableId,r=e.kebab,l=e.createButton,i=e.exportToCSV,c=e.exportToJSON,s=e.exportButton,u=e.hasMultiSelect,d=e.leftAlignToolbar,p=e.onBulkSelect,f=e.selectedBaselineIds,b=e.tableData,h=e.totalBaselines,g=this.state,y=g.page,v=g.perPage;return m().createElement(m().Fragment,null,"CHECKBOX"===o&&n&&!a?this.renderBaselinesPageError():m().createElement(m().Fragment,null,m().createElement(K,{createButton:l,exportButton:s,kebab:r,onSearch:this.onSearch,tableId:o,fetchWithParams:this.fetchWithParams,tableData:b,onBulkSelect:p,hasMultiSelect:u,selectedBaselineIds:f,isDeleteDisabled:(null==f?void 0:f.length)<1,page:y,perPage:v,totalBaselines:h,updatePagination:this.updatePagination,exportToCSV:i,exportToJSON:c,leftAlignToolbar:d,loading:a,permissions:t}),n&&!a?this.renderEmptyState(t):this.renderTable(t),m().createElement(E.Toolbar,null,m().createElement(E.ToolbarGroup,{className:"pf-c-pagination"},m().createElement(E.ToolbarItem,null,m().createElement(_.Z,{page:y,perPage:v,total:t.baselinesRead?h:0,isCompact:!1,updatePagination:this.updatePagination,tableId:o}))))))}}]),b}(b.Component);z.propTypes={loading:g().bool,tableData:g().array,fetchBaselines:g().func,tableId:g().string,hasMultiSelect:g().bool,onClick:g().func,kebab:g().bool,createButton:g().bool,exportButton:g().bool,onSelect:g().func,columns:g().array,onBulkSelect:g().func,selectedBaselineIds:g().array,totalBaselines:g().number,exportToCSV:g().func,exportToJSON:g().func,permissions:g().object,basketIsVisible:g().bool,leftAlignToolbar:g().bool,hasSwitch:g().bool,notificationsSwitchError:g().object,emptyState:g().bool,toggleNotificationPending:g().func,toggleNotificationFulfilled:g().func,toggleNotificationRejected:g().func,baselineError:g().object,revertBaselineFetch:g().func};const X=(0,y.connect)(null,(function(e){return{fetchBaselines:function(t,n){return e(I.w.fetchBaselines(t,n))},exportToCSV:function(t){e(I.w.exportToCSV(t))},exportToJSON:function(t){e(I.w.exportToJSON(t))},toggleNotificationPending:function(){return e(C.E.toggleNotificationPending())},toggleNotificationFulfilled:function(t){return e(C.E.toggleNotificationFulfilled(t))},toggleNotificationRejected:function(t,n,a){e(C.E.toggleNotificationRejected(t,n,a))}}}))(z)},43895:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(15671),o=n(43144),r=n(60136),l=n(6215),i=n(61120),c=n(92950),s=n.n(c),u=n(45697),d=n.n(u),p=n(34895);var f=function(e){(0,r.Z)(u,e);var t,n,c=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=c.call(this,e)).state={kebabOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.ouiaId,a=this.state.kebabOpened;return s().createElement(p.Dropdown,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},ouiaId:n||"action-kebab",toggle:s().createElement(p.KebabToggle,{"data-ouia-component-type":"PF4/DropdownToggle","data-ouia-component-id":n?n+"-toggle":"action-kebab-toggle",onToggle:this.toggleKebab}),isOpen:a,dropdownItems:t,isPlain:!0})}}]),u}(c.Component);f.propTypes={dropdownItems:d().array,ouiaId:d().string};const b=f},86047:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(70885),o=n(15671),r=n(43144),l=n(60136),i=n(6215),c=n(61120),s=n(92950),u=n.n(s),d=n(45697),p=n.n(d),f=n(34895);var b=function(e){(0,l.Z)(d,e);var t,n,s=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,o.Z)(this,d),(t=s.call(this,e)).isFilterSelected=function(e){var t,n;return(null==e||null===(t=e.SAP)||void 0===t?void 0:t.isSelected)||(null===(n=e["Ansible Automation Platform"])||void 0===n?void 0:n.isSelected)},t.buildBody=function(){var e=t.props.globalFilterState,n=e.sidsFilter,o=e.tagsFilter,r=e.workloadsFilter,l="";if(t.isFilterSelected(r)){l="Workloads:";var i=!0;for(var c in r)r[c].isSelected&&(i?(l="".concat(l," ").concat(c),i=!1):l="".concat(l,", ").concat(c));l+=". "}if(n.length){l+="SAP ID (SID): ";for(var s=0;s<n.length;s++)l+=n[s],s+1===n.length?l+=". ":l+=", "}if(o.length){var u=[],d={};l+="Tags: ",o.forEach((function(e){u.push(e.split("/"))})),u.forEach((function(e){e[0]in d?d[e[0]].push(e[1]):d[e[0]]=[e[1]]}));for(var p=0,f=Object.entries(d);p<f.length;p++){var b=(0,a.Z)(f[p],2),m=b[0],h=b[1];l+=m+": ";for(var g=0;g<h.length;g++)l+=h[g],g+1===h.length?l+=". ":l+=", "}}return l},t}return(0,r.Z)(d,[{key:"render",value:function(){var e=this.props.globalFilterState,t=e.sidsFilter,n=e.tagsFilter,a=e.workloadsFilter;return u().createElement(u().Fragment,null,this.isFilterSelected(a)||t.length>0||n.length>0?u().createElement(f.Alert,{variant:"info",title:"Your systems are pre-filtered by the global context selector.",isInline:!0},u().createElement("p",null,this.buildBody())):null)}}]),d}(s.Component);b.propTypes={globalFilterState:p().object};const m=b},93187:(e,t,n)=>{n.d(t,{v:()=>b,Z:()=>m});var a=n(15671),o=n(43144),r=n(97326),l=n(60136),i=n(6215),c=n(61120),s=n(92950),u=n.n(s),d=n(45697),p=n.n(d),f=n(34895);var b=function(e){(0,l.Z)(d,e);var t,n,s=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),(t=s.call(this,e)).onSetPage=t.onSetPage.bind((0,r.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,r.Z)(t)),t}return(0,o.Z)(d,[{key:"onSetPage",value:function(e,t){var n=this.props,a=n.tableId,o=n.updatePagination,r={page:t,perPage:this.props.perPage};a?o(r,a):o(r)}},{key:"onPerPageSelect",value:function(e,t){var n=this.props,a=n.tableId,o=n.updatePagination,r={page:1,perPage:t};a?o(r,a):o(r)}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.page,a=e.perPage,o=e.isCompact,r=e.widgetId,l=e.variant,i=e.ouiaId;return u().createElement(f.Pagination,{itemCount:t||0,widgetId:r,page:0===t?0:n,perPage:a,variant:l,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:o,ouiaId:i})}}]),d}(s.Component);b.propTypes={perPage:p().number,page:p().number,updatePagination:p().func,total:p().number,isCompact:p().bool,tableId:p().string,widgetId:p().string,variant:p().any,ouiaId:p().string};const m=b}}]);
//# sourceMappingURL=../sourcemaps/808.fd85169026bba7f983497a6e5e2ef695.js.map