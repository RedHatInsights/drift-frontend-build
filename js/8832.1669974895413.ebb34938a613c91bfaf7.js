"use strict";(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[8832],{51504:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(78974),o=n(87248);const r={toggleCreateBaselineModal:function(){return{type:a.Z.TOGGLE_CREATE_BASELINE_MODAL}},createBaseline:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:a.Z.CREATE_BASELINE,payload:o.Z.postNewBaseline(e,t)}}}},67412:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(15861),o=n(4942),r=n(15671),l=n(43144),i=n(60136),s=n(6215),c=n(61120),u=n(41609),d=n.n(u),p=n(87757),f=n.n(p),m=n(92950),b=n.n(m),g=n(45697),h=n.n(g),y=n(28216),v=n(17855),S=n(47542),E=n(14938),P=n(52017),B=n(97326),I=n(86235),k=n(48270);var w=function(e){(0,i.Z)(d,e);var t,n,o,u=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(o){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=u.call(this,e)).deleteBaselines=t.deleteBaselines.bind((0,B.Z)(t)),t}return(0,l.Z)(d,[{key:"deleteBaselines",value:(t=(0,a.Z)(f().mark((function e(){var t,n,a,o,r,l,i,s,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.clearSelectedBaselines,a=t.deleteSelectedBaselines,o=t.selectedBaselineIds,r=t.fetchWithParams,l=t.baselineId,i=t.tableId,s=t.toggleModal,c=l?{baseline_ids:[l]}:{baseline_ids:o},s(),e.prev=3,e.next=6,a(c,i);case 6:n(i),r(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.baselineId,n=e.modalOpened,a=e.selectedBaselineIds,o=e.toggleModal,r=t||1===a.length?"Delete 1 selected baseline":"Delete ".concat(a.length," selected baselines");return b().createElement(E.Modal,{className:"drift",variant:E.ModalVariant.small,title:r,isOpen:n,onClose:o,actions:[b().createElement(E.Button,{key:"confirm",variant:"danger",onClick:this.deleteBaselines,ouiaId:"delete"},r),b().createElement(E.Button,{key:"cancel",variant:"link",onClick:o,ouiaId:"cancel"},"Cancel")]},"Deleting a baseline is permanent and cannot be undone.")}}]),d}(m.Component);w.propTypes={modalOpened:h().bool,clearSelectedBaselines:h().func,selectedBaselineIds:h().array,deleteSelectedBaselines:h().func,fetchWithParams:h().func,baselineId:h().string,tableId:h().string,toggleModal:h().func,revertBaselineFetch:h().func};const O=(0,y.connect)(null,(function(e){return{deleteSelectedBaselines:function(t,n){return e(k.w.deleteSelectedBaselines(t,n))},clearSelectedBaselines:function(t){return e(k.w.clearSelectedBaselines(t))},revertBaselineFetch:function(t){return e(k.w.revertBaselineFetch(t))}}}))(w);var T=function(e){(0,i.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function o(e){var t;return(0,r.Z)(this,o),(t=a.call(this,e)).fetchBaseline=function(){var e=t.props,n=e.baselineRowData;e.history.push("baselines/"+n[0])},t.state={isOpen:!1,modalOpened:!1},t.onKebabToggle=t.onKebabToggle.bind((0,B.Z)(t)),t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t}return(0,l.Z)(o,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,a=t.modalOpened,o=this.props,r=o.baselineRowData,l=o.fetchWithParams,i=o.tableId,s=o.baselineName,c=[b().createElement(E.DropdownItem,{key:"edit","data-ouia-component-id":"edit-baseline-dropdown-item-"+s,component:"button",onClick:this.fetchBaseline},"Edit"),b().createElement(E.DropdownItem,{key:"delete","data-ouia-component-id":"delete-baseline-dropdown-item-"+s,component:"button",onClick:this.toggleModal},"Delete")];return b().createElement(b().Fragment,null,a?b().createElement(O,{modalOpened:a,baselineId:r[0],tableId:i,fetchWithParams:l,toggleModal:this.toggleModal}):null,b().createElement(E.Dropdown,{style:{float:"right"},ouiaId:"baseline-kebab-dropdown-"+s,toggle:b().createElement(E.KebabToggle,{"data-ouia-component-id":"baseline-kebab-dropdown-toggle-"+s,"data-ouia-component-type":"PF4/DropdownToggle",onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:n,dropdownItems:c,isPlain:!0}))}}]),o}(m.Component);T.propTypes={baselineRowData:h().array,history:h().object,tableId:h().string,fetchWithParams:h().func,baselineName:h().string};const Z=(0,I.withRouter)(T);var C=n(60001),R=n(620),x=n(23279),D=n.n(x),N=n(51504),F=n(56077);var M=function(e){(0,i.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function o(e){var t;return(0,r.Z)(this,o),(t=a.call(this,e)).createBaseline=function(){var e=t.props,n=e.history,a=e.toggleCreateBaselineModal,o=e.addSystemModalOpened,r=e.toggleAddSystemModal;"/"===n.location.pathname&&(!0===o&&r(),n.push({pathname:"baselines"})),a()},t}return(0,l.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions;return b().createElement(b().Fragment,null,a.baselinesWrite||void 0===a.baselinesWrite?b().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,ouiaId:"create-baseline-button",isDisabled:n},"Create baseline"):b().createElement(E.Tooltip,{content:b().createElement("div",null,"You do not have permissions to perform this action")},b().createElement("div",{className:t?"tooltip-button-margin":null},b().createElement(E.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,isDisabled:!0,ouiaId:"create-baseline-button"},"Create baseline"))))}}]),o}(m.Component);M.propTypes={toggleCreateBaselineModal:h().func,toggleAddSystemModal:h().func,history:h().object,addSystemModalOpened:h().bool,loading:h().bool,emptyState:h().bool,permissions:h().object};const j=(0,I.withRouter)((0,y.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}}),(function(e){return{toggleCreateBaselineModal:function(){return e(N.Z.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(F.x.toggleAddSystemModal())}}}))(M));var A=n(74381),_=n(43895),W=n(14307),H=n(93187),V=n(72971);var L=function(e){(0,i.Z)(d,e);var t,n,o,u=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(o){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=u.call(this,e)).onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.buildDropdownList=function(){var e=t.props.isDeleteDisabled,n=[];return n.push(b().createElement(E.DropdownItem,{key:"multi-delete","data-ouia-component-id":"delete-baselines-dropdown-item",component:"button",onClick:t.toggleModal,isDisabled:e},"Delete selected baselines")),n},t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t.setTextFilter=function(e){t.setState({nameSearch:e}),t.handleSearch(e)},t.clearTextFilter=function(){t.setState({nameSearch:""}),t.handleSearch("")},t.handleSearch=D()((function(e){this.props.onSearch(e)}),250),t.state={nameSearch:"",modalOpened:!1,dropdownOpen:!1,dropdownItems:[b().createElement(E.DropdownItem,{key:"export-to-CSV",component:"button","data-ouia-component-id":"export-to-csv-dropdown-item-baselines",onClick:function(){return t.props.exportToCSV(t.props.tableData)}},"Export to CSV"),b().createElement(E.DropdownItem,{key:"export-to-JSON",component:"button","data-ouia-component-id":"export-to-json-dropdown-item-baselines",onClick:function(){return t.props.exportToJSON(t.props.tableData)}},"Export to JSON")]},t.handleSearch=t.handleSearch.bind((0,B.Z)(t)),t.clearFilters=t.clearFilters.bind((0,B.Z)(t)),t}return(0,l.Z)(d,[{key:"clearFilters",value:(t=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.onSearch,this.setState({nameSearch:""}),t("");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.exportButton,o=t.fetchWithParams,r=t.hasMultiSelect,l=t.kebab,i=t.leftAlignToolbar,s=t.loading,c=t.onBulkSelect,u=t.tableData,d=t.tableId,p=t.page,f=t.permissions,m=t.perPage,g=t.selectedBaselineIds,h=t.totalBaselines,y=t.updatePagination,v=this.state,P=v.dropdownItems,B=v.dropdownOpen,I=v.modalOpened,k=v.nameSearch;return b().createElement(b().Fragment,null,b().createElement(O,{modalOpened:I,tableId:d,fetchWithParams:o,toggleModal:this.toggleModal,selectedBaselineIds:g}),b().createElement(E.Toolbar,{className:i?"baseline-toolbar":null,clearAllFilters:this.clearFilters},b().createElement(E.ToolbarContent,null,r?b().createElement(E.ToolbarGroup,{variant:"filter-group"},b().createElement(E.ToolbarItem,null,b().createElement(S.BulkSelect,{id:"baselines-bulk-select",count:g.length,items:(0,V.vW)(c,u.length),checked:W.Z.findCheckedValue(h,g.length),onSelect:function(){return c("page")},isDisabled:0===u.length||!f.baselinesWrite&&l||!f.baselinesRead&&!n}))):null,b().createElement(E.ToolbarGroup,{variant:"filter-group"},b().createElement(E.ToolbarFilter,{chips:""!==k?[k]:[],deleteChip:this.clearFilters,categoryName:"Baseline name"},b().createElement(S.ConditionalFilter,{placeholder:"Filter by name",value:k,"data-ouia-component-type":"PF4/TextInput","data-ouia-component-id":"filter-by-name-baselines-table",onChange:function(t,n){return e.setTextFilter(n)},isDisabled:!f.baselinesRead}))),b().createElement(E.ToolbarGroup,{variant:"button-group"},n?b().createElement(E.ToolbarItem,null,b().createElement(j,{loading:s,permissions:f})):null),b().createElement(E.ToolbarGroup,{variant:"icon-button-group"},a?b().createElement(E.ToolbarItem,null,b().createElement(A.Z,{dropdownItems:P,ouiaId:"export-dropdown-baselines",isOpen:B,onToggle:this.onToggle})):null,l?b().createElement(E.ToolbarItem,null,b().createElement(_.Z,{ouiaId:"delete-baselines-dropdown",dropdownItems:this.buildDropdownList()})):null),b().createElement(E.ToolbarItem,{variant:"pagination"},b().createElement(H.v,{page:p,perPage:m,total:f.baselinesRead?h:0,isCompact:!0,updatePagination:y,tableId:d})))))}}]),d}(m.Component);L.propTypes={createButton:h().bool,exportButton:h().bool,kebab:h().bool,fetchWithParams:h().func,onSearch:h().func,tableId:h().string,tableData:h().array,onBulkSelect:h().func,hasMultiSelect:h().bool,clearSort:h().func,selectedBaselineIds:h().array,isDeleteDisabled:h().bool,page:h().number,perPage:h().number,totalBaselines:h().number,updatePagination:h().func,exportToCSV:h().func,exportToJSON:h().func,loading:h().bool,permissions:h().object,leftAlignToolbar:h().bool};const K=L;var J=n(42325),G=n(2136);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){(0,i.Z)(m,e);var t,n,o,u,p=(o=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(o);if(u){var n=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,r.Z)(this,m),(t=p.call(this,e)).fetchWithParams=function(e){var n=t.props,a=n.tableId,o=n.fetchBaselines;e=U(U({},t.state.params),e),o(a,R.Z.returnParams(e))},t.onSearch=function(e){var n=t.state.params,a=n.orderBy,o=n.orderHow,r=e;t.setState({search:e}),t.fetchWithParams({orderBy:a,orderHow:o,search:r})},t.onSort=function(e,n,a){var o=t.state.params.search,r=t.props.permissions,l="";0===n?l="display_name":1===n?l=r.baselinesWrite?"display_name":"updated":2===n&&(l="updated"),t.setState({params:U(U({},t.state.params),{},{sortBy:{index:n,direction:a},orderHow:a.toUpperCase(),orderBy:l})}),t.fetchWithParams({orderBy:l,orderHow:a.toUpperCase(),search:o})},t.setSelectedIds=function(e){var t=[];return e.forEach((function(e){t.push(Array.isArray(e)?e[0]:e.id)})),t},t.isAnyBaselineSelectedOnPage=function(e){var t=!1;return e.map((function(e){!0===e.selected&&(t=!0)})),t},t.onBulkSelect=function(){var e=(0,a.Z)(f().mark((function e(n){var a,o,r,l,i,s,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,o=a.bulkSelectBasket,r=a.tableData,l=a.tableId,i=a.selectBaseline,s=a.selectedBaselineIds,t.setState({bulkSelectType:n}),"none"===n?(c=!1,u=s):(u=t.setSelectedIds(r),c=!t.isAnyBaselineSelectedOnPage(r)),"COMPARISON"===l&&o(r,c),i(u,c,l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updatePagination=function(e){t.setState({params:{page:e.page,perPage:e.perPage}}),t.fetchWithParams({page:e.page,perPage:e.perPage})},t.renderEmptyState=function(e){var n,a=t.props,o=a.baselineError,r=a.columns,l=a.tableId,i=[];return 200!==o.status&&void 0!==o.status?t.renderError():("RADIO"===l?n=b().createElement(S.EmptyTable,null,b().createElement(J.Z,{title:V.WO,text:V.MC})):"COMPARISON"===l&&(n=!1===e.baselinesRead?b().createElement(J.Z,{icon:P.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):b().createElement(S.EmptyTable,null,b().createElement(J.Z,{title:V.WO,text:V.pM}))),i.push({cells:[{title:n,props:{colSpan:r.length}}]}),b().createElement(v.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:r,rows:i,canSelectAll:!1},b().createElement(v.TableHeader,null),b().createElement(v.TableBody,null)))},t.state={params:{sortBy:{index:1,direction:"asc"},search:void 0,orderBy:"display_name",orderHow:"ASC",page:1,perPage:20},bulkSelectType:"",errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""]},t}return(0,l.Z)(m,[{key:"componentDidMount",value:(n=(0,a.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,this.fetchWithParams();case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"componentDidUpdate",value:(t=(0,a.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!d()(t.baselineError)&&d()(this.props.baselineError)&&this.fetchWithParams();case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"renderRows",value:function(e){var t=this,n=this.props,a=n.basketIsVisible,o=n.hasMultiSelect,r=n.hasSwitch,l=n.tableData,i=n.kebab,s=n.onClick,c=n.notificationsSwitchError,u=n.selectedBaselineIds,d=n.toggleNotificationPending,p=n.toggleNotificationFulfilled,f=n.toggleNotificationRejected,m=n.tableId,g=[];return l.forEach((function(n,l){var h=[];if(s){var y=b().createElement("div",null,b().createElement("a",{className:"pointer active-blue","data-ouia-component-type":"PF4/Button","data-ouia-component-id":"baseline-details-"+n[1],onClick:function(){return s(n[0])}},n[1]));h.push(y)}else h.push(n[1]);if(h.push(n[2]),h.push(b().createElement("div",{className:"no-left-padding"},b().createElement(G.Z,{classname:"sm-padding-right",index:l,badgeCount:n[3],hasBadge:!0,hasSwitch:r,baselineData:{id:n[0],display_name:n[1],associated_systems:n[3],notifications_enabled:n[4]},notificationsSwitchError:c,toggleNotificationPending:d,toggleNotificationFulfilled:p,toggleNotificationRejected:f}))),i&&e){var v=b().createElement(Z,{tableId:m,baselineRowData:n,fetchWithParams:t.fetchWithParams,baselineName:n[1],selectedBaselineIds:u});h.push(b().createElement("div",null,v))}n.selected&&(h.selected=!0),o&&(h.disableSelection=a),g.push(h)})),g}},{key:"renderError",value:function(){var e=this.props,t=e.baselineError,n=e.revertBaselineFetch,a=this.state.errorMessage;return b().createElement(J.Z,{icon:P.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:a,error:"Error "+t.status+": "+t.detail,button:b().createElement("a",{onClick:function(){return n()}},b().createElement(P.UndoIcon,{className:"reload-button"}),"Retry")})}},{key:"renderBaselinesPageError",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions,o=e.baselineError;return 200!==o.status&&void 0!==o.status?this.renderError():b().createElement(J.Z,{icon:P.AddCircleOIcon,title:V.WO,text:V.pM,button:b().createElement(j,{emptyState:t,permissions:a,loading:n})})}},{key:"renderTable",value:function(e){var t,n,a=e.baselinesWrite,o=e.baselinesRead,r=this.props,l=r.columns,i=r.createButton,s=r.emptyState,c=r.hasMultiSelect,u=r.kebab,d=r.loading,p=r.onSelect,f=r.tableData,m=r.tableId,g=[];if(d)d&&(t=b().createElement(S.SkeletonTable,{columns:l,rowSize:8,onSelect:!0,hasRadio:!c,canSelectAll:!1,isSelectable:!0}));else if(0===f.length)n=s?b().createElement(S.EmptyTable,null,b().createElement(J.Z,{title:V.WO,text:V.pM})):b().createElement(S.EmptyTable,null,b().createElement(J.Z,{title:V.Gr,text:V.ll})),g.push({cells:[{title:n,props:{colSpan:l.length}}]}),t=b().createElement(v.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:l,rows:g,canSelectAll:!1},b().createElement(v.TableHeader,null),b().createElement(v.TableBody,null));else{if(!o&&!i)return b().createElement(J.Z,{icon:P.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]});g=this.renderRows(a),t=b().createElement(v.Table,{className:"baseline-table","aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",onSort:this.onSort,onSelect:!(!a&&("CHECKBOX"!==m&&"COMPARISON"!==m||u))&&p,sortBy:this.state.params.sortBy,cells:l,rows:g,canSelectAll:!1,selectVariant:c?v.RowSelectVariant.checkbox:v.RowSelectVariant.radio,isStickyHeader:!0},b().createElement(v.TableHeader,null),b().createElement(v.TableBody,null))}return b().createElement(E.Card,{className:"pf-t-light pf-m-opaque-100"},b().createElement(E.CardBody,null,t))}},{key:"render",value:function(){var e=this.props,t=e.createButton,n=e.emptyState,a=e.exportToCSV,o=e.exportToJSON,r=e.exportButton,l=e.hasMultiSelect,i=e.kebab,s=e.leftAlignToolbar,c=e.loading,u=e.permissions,d=e.selectedBaselineIds,p=e.tableData,f=e.tableId,m=e.totalBaselines,g=this.state.params,h=g.page,y=g.perPage;return b().createElement(b().Fragment,null,"CHECKBOX"===f&&n&&!c?this.renderBaselinesPageError():b().createElement(b().Fragment,null,b().createElement(K,{createButton:t,exportButton:r,kebab:i,onSearch:this.onSearch,tableId:f,fetchWithParams:this.fetchWithParams,tableData:p,onBulkSelect:this.onBulkSelect,hasMultiSelect:l,selectedBaselineIds:d,isDeleteDisabled:(null==d?void 0:d.length)<1,page:h,perPage:y,totalBaselines:m,updatePagination:this.updatePagination,exportToCSV:a,exportToJSON:o,leftAlignToolbar:s,loading:c,permissions:u}),n&&!c?this.renderEmptyState(u):this.renderTable(u),b().createElement(E.Toolbar,null,b().createElement(E.ToolbarGroup,{className:"pf-c-pagination"},b().createElement(E.ToolbarItem,null,b().createElement(H.Z,{page:h,perPage:y,total:u.baselinesRead?m:0,isCompact:!1,updatePagination:this.updatePagination,tableId:f}))))))}}]),m}(m.Component);z.propTypes={loading:h().bool,tableData:h().array,fetchBaselines:h().func,tableId:h().string,hasMultiSelect:h().bool,onClick:h().func,kebab:h().bool,createButton:h().bool,exportButton:h().bool,onSelect:h().func,columns:h().array,selectedBaselineIds:h().array,totalBaselines:h().number,exportToCSV:h().func,exportToJSON:h().func,permissions:h().object,basketIsVisible:h().bool,leftAlignToolbar:h().bool,hasSwitch:h().bool,notificationsSwitchError:h().object,emptyState:h().bool,selectBaseline:h().func,toggleNotificationPending:h().func,toggleNotificationFulfilled:h().func,toggleNotificationRejected:h().func,baselineError:h().object,revertBaselineFetch:h().func,bulkSelectBasket:h().func};const q=(0,y.connect)(null,(function(e){return{fetchBaselines:function(t,n){return e(k.w.fetchBaselines(t,n))},exportToCSV:function(t){e(k.w.exportToCSV(t))},exportToJSON:function(t){e(k.w.exportToJSON(t))},toggleNotificationPending:function(){return e(C.E.toggleNotificationPending())},toggleNotificationFulfilled:function(t){return e(C.E.toggleNotificationFulfilled(t))},toggleNotificationRejected:function(t,n,a){e(C.E.toggleNotificationRejected(t,n,a))}}}))(z)},2136:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(70885),o=n(92950),r=n.n(o),l=n(45697),i=n.n(l),s=n(14938);function c(e){var t=e.baselineData,n=e.classname,a=e.isChecked,o=e.handleNotificationToggle,l=e.hasLabel;return r().createElement(s.Switch,{className:n,"aria-label":"notifications-toggle",isChecked:a,onChange:function(){return o(t)},labelOff:l?"Notifications are disabled":null,label:l?"Notifications are enabled":null,isReversed:!0})}c.propTypes={baselineData:i().object,classname:i().string,handleNotificationToggle:i().func,hasLabel:i().bool,isChecked:i().bool};const u=c;var d=n(98365);function p(e){var t=e.badgeCount,n=e.baselineData,l=e.classname,i=e.hasBadge,c=e.hasLabel,p=e.hasSwitch,f=e.index,m=e.notificationsSwitchError,b=e.toggleNotificationPending,g=e.toggleNotificationFulfilled,h=e.toggleNotificationRejected,y=(0,o.useState)(n.notifications_enabled),v=(0,a.Z)(y,2),S=v[0],E=v[1];return(0,o.useEffect)((function(){(null==m?void 0:m.id)===n.id&&E(!S)}),[m]),r().createElement(r().Fragment,null,p?r().createElement(u,{classname:l,isChecked:S,hasLabel:c,handleNotificationToggle:function(e){var t={display_name:e.display_name,facts_patch:[],notifications_enabled:!S};d.ZP.toggleNotificationSwitch(e.id,t,b,g,h),E(!S)},baselineData:n}):null,i?r().createElement(s.Badge,{key:f,isRead:!(t>0)||null},t):null)}p.propTypes={badgeCount:i().number,baselineData:i().object,classname:i().string,hasBadge:i().bool,hasLabel:i().bool,hasSwitch:i().bool,index:i().number,notificationsSwitchError:i().object,toggleNotificationPending:i().func,toggleNotificationFulfilled:i().func,toggleNotificationRejected:i().func};const f=p},43895:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(15671),o=n(43144),r=n(60136),l=n(6215),i=n(61120),s=n(92950),c=n.n(s),u=n(45697),d=n.n(u),p=n(14938);var f=function(e){(0,r.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=s.call(this,e)).state={kebabOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.ouiaId,a=this.state.kebabOpened;return c().createElement(p.Dropdown,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},ouiaId:n||"action-kebab",toggle:c().createElement(p.KebabToggle,{"data-ouia-component-type":"PF4/DropdownToggle","data-ouia-component-id":n?n+"-toggle":"action-kebab-toggle",onToggle:this.toggleKebab}),isOpen:a,dropdownItems:t,isPlain:!0})}}]),u}(s.Component);f.propTypes={dropdownItems:d().array,ouiaId:d().string};const m=f},74381:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(15671),o=n(43144),r=n(60136),l=n(6215),i=n(61120),s=n(92950),c=n.n(s),u=n(45697),d=n.n(u),p=n(14938),f=n(52017);var m=function(e){(0,r.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){return(0,a.Z)(this,u),s.call(this,e)}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.isOpen,a=e.onToggle,o=e.ouiaId;return c().createElement(p.Dropdown,{toggle:c().createElement(p.DropdownToggle,{ouiaId:o?o+"-toggle":"action-kebab-toggle",toggleIndicator:null,onToggle:a},c().createElement(f.ExportIcon,{className:"pointer not-active"})),isOpen:n,ouiaId:o||"export-dropdown",isPlain:!0,position:p.DropdownPosition.left,dropdownItems:t})}}]),u}(s.Component);m.propTypes={dropdownItems:d().array,isOpen:d().bool,onToggle:d().func,ouiaId:d().string};const b=m},86047:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(70885),o=n(15671),r=n(43144),l=n(60136),i=n(6215),s=n(61120),c=n(92950),u=n.n(c),d=n(45697),p=n.n(d),f=n(14938);var m=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,o.Z)(this,d),(t=c.call(this,e)).isFilterSelected=function(e){for(var t in e)if(e[t].isSelected)return!0;return!1},t.buildBody=function(){var e=t.props.globalFilterState,n=e.sidsFilter,o=e.tagsFilter,r=e.workloadsFilter,l="",i=!0;for(var s in r)r[s].isSelected&&(i?(l="Workloads: ".concat(s),i=!1):l="".concat(l,", ").concat(s));if(i||(l+=". "),n.length){l+="SAP ID (SID): ";for(var c=0;c<n.length;c++)l+=n[c],c+1===n.length?l+=". ":l+=", "}if(o.length){var u=[],d={};l+="Tags: ",o.forEach((function(e){u.push(e.split("/"))})),u.forEach((function(e){e[0]in d?d[e[0]].push(e[1]):d[e[0]]=[e[1]]}));for(var p=0,f=Object.entries(d);p<f.length;p++){var m=(0,a.Z)(f[p],2),b=m[0],g=m[1];l+=b+": ";for(var h=0;h<g.length;h++)l+=g[h],h+1===g.length?l+=". ":l+=", "}}return l},t}return(0,r.Z)(d,[{key:"render",value:function(){var e=this.props.globalFilterState,t=e.sidsFilter,n=e.tagsFilter,a=e.workloadsFilter;return u().createElement(u().Fragment,null,this.isFilterSelected(a)||t.length>0||n.length>0?u().createElement(f.Alert,{variant:"info",title:"Your systems are pre-filtered by the global context selector.",isInline:!0},u().createElement("p",null,this.buildBody())):null)}}]),d}(c.Component);m.propTypes={globalFilterState:p().object};const b=m},83068:(e,t,n)=>{n.d(t,{h:()=>o});var a=n(93802);const o={selectHistoricProfiles:function(e){return{type:a.Z.SELECT_HISTORIC_PROFILES,payload:e}}}},93187:(e,t,n)=>{n.d(t,{v:()=>m,Z:()=>b});var a=n(15671),o=n(43144),r=n(97326),l=n(60136),i=n(6215),s=n(61120),c=n(92950),u=n.n(c),d=n(45697),p=n.n(d),f=n(14938);var m=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),(t=c.call(this,e)).onSetPage=t.onSetPage.bind((0,r.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,r.Z)(t)),t}return(0,o.Z)(d,[{key:"onSetPage",value:function(e,t){var n=this.props,a=n.tableId,o=n.updatePagination,r={page:t,perPage:this.props.perPage};a?o(r,a):o(r)}},{key:"onPerPageSelect",value:function(e,t){var n=this.props,a=n.tableId,o=n.updatePagination,r={page:1,perPage:t};a?o(r,a):o(r)}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.page,a=e.perPage,o=e.isCompact,r=e.widgetId,l=e.variant,i=e.ouiaId;return u().createElement(f.Pagination,{itemCount:t||0,widgetId:r,page:0===t?0:n,perPage:a,variant:l,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:o,ouiaId:i})}}]),d}(c.Component);m.propTypes={perPage:p().number,page:p().number,updatePagination:p().func,total:p().number,isCompact:p().bool,tableId:p().string,widgetId:p().string,variant:p().any,ouiaId:p().string};const b=m},34869:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(15861),o=n(4942),r=n(87757),l=n.n(r),i=n(92950),s=n.n(i),c=n(28216),u=n(45697),d=n.n(u),p=n(81321),f=n(52017),m=n(89455),b=n(59386),g=n(69078),h=n(42325),y=n(83068),v=n(14307),S=n(21205);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.baselineId,n=e.createBaselineModal,o=e.deselectHistoricalProfiles,r=e.driftClearFilters,u=e.entities,d=e.permissions,b=e.hasMultiSelect,g=e.historicalProfiles,y=e.isAddSystemNotifications,E=e.selectedSystemIds,B=e.selectEntities,I=e.selectHistoricProfiles,k=e.selectSystemsToAdd,w=e.selectVariant,O=e.setSelectedSystemIds,T=e.systemNotificationIds,Z=e.systemColumns,C=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.tagsFilter})),R=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.workloadsFilter})),x=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.sidsFilter})),D=(0,i.useRef)((function(){})),N=function(e){var t=[];switch(e){case"none":t={id:0,selected:!1,bulk:!0};break;case"deselect-page":t={id:0,selected:!1};break;case"page":t={id:0,selected:!0}}B(t)};return d.inventoryRead?s().createElement("div",{className:"inventory-toolbar-no-padding"},s().createElement(S.g.Consumer,null,(function(e){var i,c,d,f;return s().createElement(p.Z,{columns:Z,onLoad:function(a){var l,i=a.mergeWithEntities,s=a.INVENTORY_ACTION_TYPES,c=a.api;D.current=null==c?void 0:c.getEntities,r(),null==e||null===(l=e.registry)||void 0===l||l.register(i((0,m.Z)(s,t,n,g,b,o,y,I,T,k))),O(n?[]:E)},showTags:!0,noDetail:!0,customFilters:{tags:C,filter:{system_profile:P(P(P(P({},(null==R||null===(i=R.SAP)||void 0===i?void 0:i.isSelected)&&{sap_system:!0}),(null==R||null===(c=R["Ansible Automation Platform"])||void 0===c?void 0:c.isSelected)&&{ansible:"not_nil"}),(null==R||null===(d=R["Microsoft SQL"])||void 0===d?void 0:d.isSelected)&&{mssql:"not_nil"}),(null==x?void 0:x.length)>0&&{sap_sids:x})}},tableProps:{canSelectAll:!1,selectVariant:w,ouiaId:"systems-table",className:"inventory-align",isStickyHeader:!0},getEntities:T&&!y?function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,o,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(T||[]).slice((n.page-1)*n.per_page,n.page*n.per_page),e.next=3,null===(a=D.current)||void 0===a?void 0:a.call(D,o,{hasItems:!0},!0);case 3:return r=e.sent,e.abrupt("return",P(P({},r),{},{results:r.results.map((function(e){return P(P({},e),o.find((function(t){return t.uuid===e.id}))||{})})),total:(T||[]).length,page:n.page,per_page:n.per_page}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}():function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(a=D.current)||void 0===a?void 0:a.call(D,[],n,!0);case 2:return o=e.sent,e.abrupt("return",P({},o));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),bulkSelect:N&&!y&&{id:"systems-bulk-select",isDisabled:!b,count:null==u||null===(f=u.selectedSystemIds)||void 0===f?void 0:f.length,items:[{title:"Select none (0)",onClick:function(){N("none")}},{title:"Select page (".concat((null==u?void 0:u.count)||0,")"),onClick:function(){N("page")}},{title:"Deselect page (".concat((null==u?void 0:u.count)||0,")"),onClick:function(){N("deselect-page")}}],onSelect:function(){var e;(null==u?void 0:u.rows.length)===(null==u||null===(e=u.selectedSystems)||void 0===e?void 0:e.length)?N("deselect-page"):N("page")},checked:u&&u.selectedSystemIds?v.Z.findCheckedValue(null==u?void 0:u.total,null==u?void 0:u.selectedSystemIds.length):null}})}))):s().createElement(h.Z,{icon:f.LockIcon,color:"#6a6e73",title:"You do not have access to the inventory",text:["Contact your organization administrator(s) for more information."]})};B.propTypes={setSelectedSystemIds:d().func,selectedSystemIds:d().array,createBaselineModal:d().bool,driftClearFilters:d().func,historicalProfiles:d().array,hasMultiSelect:d().bool,permissions:d().object,entities:d().object,selectEntities:d().func,selectVariant:d().string,systemNotificationIds:d().array,isAddSystemNotifications:d().bool,baselineId:d().string,selectHistoricProfiles:d().func,selectSystemsToAdd:d().func,selectSingleHSP:d().func,deselectHistoricalProfiles:d().func,systemColumns:d().array},B.defaultProps={selectedSystemIds:[]};const I=(0,c.connect)(null,(function(e){return{selectHistoricProfiles:function(t){return e(y.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(b.r.setSelectedSystemIds(t))},driftClearFilters:function(){return e(g.Z.clearAllFilters())},selectEntities:function(t){return e({type:"SELECT_ENTITY",payload:t})},selectSingleHSP:function(t){return e(g.Z.selectSingleHSP(t))}}}))(B)},59386:(e,t,n)=>{n.d(t,{r:()=>a.Z});var a=n(58667);n(26666)}}]);
//# sourceMappingURL=../sourcemaps/8832.af96926a1d4f3fd50ac6c0c17952ffef.js.map