(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[852],{48913:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(6610),r=n(5991),o=n(10379),l=n(86089),i=n(77608),s=n(25558),c=n.n(s),u=n(45697),d=n.n(u),p=n(45237),f=n(334),h=n(96091),b=n(51504),m=n(56077);var g=function(e){(0,o.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=s.call(this,e)).createBaseline=function(){var e=t.props,n=e.history,a=e.toggleCreateBaselineModal,r=e.addSystemModalOpened,o=e.toggleAddSystemModal;"/"===n.location.pathname&&(!0===r&&o(),n.push({pathname:"baselines"})),a()},t}return(0,r.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.emptyState,n=e.loading,a=e.permissions;return c().createElement(c().Fragment,null,a.baselinesWrite||void 0===a.baselinesWrite?c().createElement(h.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,ouiaId:"create-baseline-button",isDisabled:n},"Create baseline"):c().createElement(h.Tooltip,{content:c().createElement("div",null,"You do not have permissions to perform this action")},c().createElement("div",{className:t?"tooltip-button-margin":null},c().createElement(h.Button,{id:"create-baseline-button",variant:"primary",onClick:this.createBaseline,isDisabled:!0,ouiaId:"create-baseline-button"},"Create baseline"))))}}]),u}(s.Component);g.propTypes={toggleCreateBaselineModal:d().func,toggleAddSystemModal:d().func,history:d().object,addSystemModalOpened:d().bool,loading:d().bool,emptyState:d().bool,permissions:d().object};const y=(0,f.withRouter)((0,p.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened}}),(function(e){return{toggleCreateBaselineModal:function(){return e(b.Z.toggleCreateBaselineModal())},toggleAddSystemModal:function(){return e(m.x.toggleAddSystemModal())}}}))(g))},51504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(78974),r=n(87248);const o={toggleCreateBaselineModal:function(){return{type:a.Z.TOGGLE_CREATE_BASELINE_MODAL}},createBaseline:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:a.Z.CREATE_BASELINE,payload:r.Z.postNewBaseline(e,t)}}}},61104:(e,t,n)=>{"use strict";n.d(t,{Z:()=>K});var a=n(92137),r=n(96156),o=n(6610),l=n(5991),i=n(10379),s=n(86089),c=n(77608),u=n(87757),d=n.n(u),p=n(25558),f=n.n(p),h=n(45697),b=n.n(h),m=n(45237),g=n(62691),y=n(39653),v=n(96091),S=n(91264),B=n(63349),k=n(334),P=n(48270);var I=function(e){(0,i.Z)(p,e);var t,n,r,u=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),(t=u.call(this,e)).deleteBaselines=t.deleteBaselines.bind((0,B.Z)(t)),t}return(0,l.Z)(p,[{key:"deleteBaselines",value:(t=(0,a.Z)(d().mark((function e(){var t,n,a,r,o,l,i,s,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.clearSelectedBaselines,a=t.deleteSelectedBaselines,r=t.selectedBaselineIds,o=t.fetchWithParams,l=t.baselineId,i=t.tableId,s=t.toggleModal,c=l?{baseline_ids:[l]}:{baseline_ids:r},s(),e.prev=3,e.next=6,a(c,i);case 6:n(i),o(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.baselineId,n=e.modalOpened,a=e.selectedBaselineIds,r=e.toggleModal,o=t||1===a.length?"Delete baseline":"Delete baselines";return f().createElement(v.Modal,{className:"drift",variant:v.ModalVariant.small,title:o,isOpen:n,onClose:r,actions:[f().createElement(v.Button,{key:"confirm",variant:"danger",onClick:this.deleteBaselines,ouiaId:"delete"},o),f().createElement(v.Button,{key:"cancel",variant:"link",onClick:r,ouiaId:"cancel"},"Cancel")]},"Deleting a baseline is permanent and cannot be undone.")}}]),p}(p.Component);I.propTypes={modalOpened:b().bool,clearSelectedBaselines:b().func,selectedBaselineIds:b().array,deleteSelectedBaselines:b().func,fetchWithParams:b().func,baselineId:b().string,tableId:b().string,toggleModal:b().func,revertBaselineFetch:b().func};const E=(0,m.connect)(null,(function(e){return{deleteSelectedBaselines:function(t,n){return e(P.w.deleteSelectedBaselines(t,n))},clearSelectedBaselines:function(t){return e(P.w.clearSelectedBaselines(t))},revertBaselineFetch:function(t){return e(P.w.revertBaselineFetch(t))}}}))(I);var Z=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function r(e){var t;return(0,o.Z)(this,r),(t=a.call(this,e)).fetchBaseline=function(){var e=t.props,n=e.baselineRowData;e.history.push("baselines/"+n[0])},t.state={isOpen:!1,modalOpened:!1},t.onKebabToggle=t.onKebabToggle.bind((0,B.Z)(t)),t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t}return(0,l.Z)(r,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,a=t.modalOpened,r=this.props,o=r.baselineRowData,l=r.fetchWithParams,i=r.tableId,s=r.baselineName,c=[f().createElement(v.DropdownItem,{key:"edit","data-ouia-component-id":"edit-baseline-dropdown-item-"+s,component:"button",onClick:this.fetchBaseline},"Edit"),f().createElement(v.DropdownItem,{key:"delete","data-ouia-component-id":"delete-baseline-dropdown-item-"+s,component:"button",onClick:this.toggleModal},"Delete")];return f().createElement(f().Fragment,null,a?f().createElement(E,{modalOpened:a,baselineId:o[0],tableId:i,fetchWithParams:l,toggleModal:this.toggleModal}):null,f().createElement(v.Dropdown,{style:{float:"right"},ouiaId:"baseline-kebab-dropdown-"+s,toggle:f().createElement(v.KebabToggle,{"data-ouia-component-id":"baseline-kebab-dropdown-toggle-"+s,"data-ouia-component-type":"PF4/DropdownToggle",onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:n,dropdownItems:c,isPlain:!0}))}}]),r}(p.Component);Z.propTypes={baselineRowData:b().array,history:b().object,tableId:b().string,fetchWithParams:b().func,baselineName:b().string};const w=(0,k.withRouter)(Z);var O=n(620),T=n(23279),C=n.n(T),R=n(48913),D=n(74381),x=n(43895),M=n(14307),F=n(93187);var W=function(e){(0,i.Z)(p,e);var t,n,r,u=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),(t=u.call(this,e)).onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.buildDropdownList=function(){var e=t.props.isDeleteDisabled,n=[];return n.push(f().createElement(v.DropdownItem,{key:"multi-delete","data-ouia-component-id":"delete-baselines-dropdown-item",component:"button",onClick:t.toggleModal,isDisabled:e},"Delete baselines")),n},t.toggleModal=function(){var e=t.state.modalOpened;t.setState({modalOpened:!e})},t.setTextFilter=function(e){t.setState({nameSearch:e}),t.handleSearch(e)},t.clearTextFilter=function(){t.setState({nameSearch:""}),t.handleSearch("")},t.handleSearch=C()((function(e){this.props.onSearch(e)}),250),t.state={nameSearch:"",modalOpened:!1,bulkSelectItems:[{title:"Select all",key:"select-all",ouiaId:"select-all",onClick:function(){return t.props.onBulkSelect(!0)}},{title:"Select none",key:"select-none",ouiaId:"select-none",onClick:function(){return t.props.onBulkSelect(!1)}}],dropdownOpen:!1,dropdownItems:[f().createElement(v.DropdownItem,{key:"export-to-CSV",component:"button","data-ouia-component-id":"export-to-csv-dropdown-item-baselines",onClick:function(){return t.props.exportToCSV(t.props.tableData)}},"Export to CSV")]},t.handleSearch=t.handleSearch.bind((0,B.Z)(t)),t.clearFilters=t.clearFilters.bind((0,B.Z)(t)),t}return(0,l.Z)(p,[{key:"clearFilters",value:(t=(0,a.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.onSearch,this.setState({nameSearch:""}),t("");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.createButton,a=t.exportButton,r=t.fetchWithParams,o=t.hasMultiSelect,l=t.kebab,i=t.loading,s=t.onBulkSelect,c=t.tableData,u=t.tableId,d=t.page,p=t.permissions,h=t.perPage,b=t.selectedBaselineIds,m=t.totalBaselines,g=t.updatePagination,S=this.state,B=S.bulkSelectItems,k=S.dropdownItems,P=S.dropdownOpen,I=S.modalOpened,Z=S.nameSearch,w=c.filter((function(e){return!0===e.selected})).length;return f().createElement(f().Fragment,null,f().createElement(E,{modalOpened:I,tableId:u,fetchWithParams:r,toggleModal:this.toggleModal,selectedBaselineIds:b}),f().createElement(v.Toolbar,{className:"drift-toolbar",clearAllFilters:this.clearFilters},f().createElement(v.ToolbarContent,null,o?f().createElement(v.ToolbarGroup,{variant:"filter-group"},f().createElement(v.ToolbarItem,null,f().createElement(y.BulkSelect,{count:w>0?w:null,items:B,checked:M.Z.findCheckedValue(c.length,w),onSelect:function(){return s(!w>0)},isDisabled:0===c.length||!p.baselinesWrite&&l||!p.baselinesRead&&!n}))):null,f().createElement(v.ToolbarGroup,{variant:"filter-group"},f().createElement(v.ToolbarFilter,{chips:""!==Z?[Z]:[],deleteChip:this.clearFilters,categoryName:"Baseline name"},f().createElement(y.ConditionalFilter,{placeholder:"Filter by name",value:Z,"data-ouia-component-type":"PF4/TextInput","data-ouia-component-id":"filter-by-name-baselines-table",onChange:function(t,n){return e.setTextFilter(n)},isDisabled:!p.baselinesRead||!p.baselinesWrite}))),f().createElement(v.ToolbarGroup,{variant:"button-group"},n?f().createElement(v.ToolbarItem,null,f().createElement(R.Z,{loading:i,permissions:p})):null),f().createElement(v.ToolbarGroup,{variant:"icon-button-group"},a?f().createElement(v.ToolbarItem,null,f().createElement(D.Z,{dropdownItems:k,ouiaId:"export-dropdown-baselines",isOpen:P,onToggle:this.onToggle})):null,l?f().createElement(v.ToolbarItem,null,f().createElement(x.Z,{ouiaId:"delete-baselines-dropdown",dropdownItems:this.buildDropdownList()})):null),f().createElement(v.ToolbarItem,{variant:"pagination"},f().createElement(F.v,{page:d,perPage:h,total:p.baselinesRead?m:0,isCompact:!0,updatePagination:g,tableId:u})))))}}]),p}(p.Component);W.propTypes={createButton:b().bool,exportButton:b().bool,kebab:b().bool,fetchWithParams:b().func,onSearch:b().func,tableId:b().string,tableData:b().array,onBulkSelect:b().func,hasMultiSelect:b().bool,clearSort:b().func,selectedBaselineIds:b().array,isDeleteDisabled:b().bool,page:b().number,perPage:b().number,totalBaselines:b().number,updatePagination:b().func,exportToCSV:b().func,loading:b().bool,permissions:b().object};const j=W;var A=n(42325);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){(0,i.Z)(p,e);var t,n,r,u=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),(t=u.call(this,e)).fetchWithParams=function(e){var n=t.props,a=n.tableId,r=n.fetchBaselines;e=N(N({},t.state),e),O.Z.fetchBaselines(a,r,e)},t.onSearch=function(e){var n=t.state,a=n.orderBy,r=n.orderHow,o=e;t.setState({search:e}),t.fetchWithParams({orderBy:a,orderHow:r,search:o})},t.onSort=function(e,n,a){var r=t.state.search,o=t.props.permissions,l="";0===n?l="display_name":1===n?l=o.baselinesWrite?"display_name":"updated":2===n&&(l="updated"),t.setState({sortBy:{index:n,direction:a},orderHow:a.toUpperCase(),orderBy:l}),t.fetchWithParams({orderBy:l,orderHow:a.toUpperCase(),search:r})},t.updatePagination=function(e){t.setState({page:e.page,perPage:e.perPage}),t.fetchWithParams({page:e.page,perPage:e.perPage})},t.state={sortBy:{index:1,direction:"asc"},search:void 0,orderBy:"display_name",orderHow:"ASC",page:1,perPage:20,emptyStateMessage:["This filter criteria matches no baselines.","Try changing your filter settings."]},t}return(0,l.Z)(p,[{key:"componentDidMount",value:(t=(0,a.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:this.fetchWithParams();case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"renderRows",value:function(e){var t=this,n=this.props,a=n.basketIsVisible,r=n.hasMultiSelect,o=n.tableData,l=n.kebab,i=n.onClick,s=n.selectedBaselineIds,c=n.tableId,u=[];return o.forEach((function(n){var o=[];if(i){var d=f().createElement("div",null,f().createElement("a",{className:"pointer active-blue","data-ouia-component-type":"PF4/Button","data-ouia-component-id":"baseline-details-"+n[1],onClick:function(){return i(n[0])}},n[1]));o.push(d)}else o.push(n[1]);if(o.push(n[2]),l&&e){var p=f().createElement(w,{tableId:c,baselineRowData:n,fetchWithParams:t.fetchWithParams,baselineName:n[1],selectedBaselineIds:s});o.push(f().createElement("div",null,p))}n.selected&&(o.selected=!0),r&&(o.disableSelection=a),u.push(o)})),u}},{key:"renderTable",value:function(e){var t,n=e.baselinesWrite,a=e.baselinesRead,r=this.props,o=r.columns,l=r.createButton,i=r.hasMultiSelect,s=r.kebab,c=r.loading,u=r.onSelect,d=r.tableData,p=r.tableId,h=this.state.emptyStateMessage,b=[];if(c)c&&(t=f().createElement(y.SkeletonTable,{columns:o,rowSize:8,onSelect:!0,hasRadio:!i,canSelectAll:!1,isSelectable:!0}));else if(0===d.length){var m=f().createElement(y.EmptyTable,null,f().createElement(A.Z,{title:"No matching baselines found",text:h}));b.push({cells:[{title:m,props:{colSpan:o.length}}]}),t=f().createElement(g.Table,{"aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",cells:o,rows:b,canSelectAll:!1},f().createElement(g.TableHeader,null),f().createElement(g.TableBody,null))}else{if(!a&&!l)return f().createElement(A.Z,{icon:S.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]});b=this.renderRows(n),t=f().createElement(g.Table,{className:"baseline-table","aria-label":"Baselines Table","data-ouia-component-id":"baselines-table",onSort:this.onSort,onSelect:!(!n&&("CHECKBOX"!==p&&"COMPARISON"!==p||s))&&u,sortBy:this.state.sortBy,cells:o,rows:b,canSelectAll:!1,selectVariant:i?g.RowSelectVariant.checkbox:g.RowSelectVariant.radio},f().createElement(g.TableHeader,null),f().createElement(g.TableBody,null))}return t}},{key:"render",value:function(){var e=this.props,t=e.kebab,n=e.createButton,a=e.exportToCSV,r=e.exportButton,o=e.hasMultiSelect,l=e.loading,i=e.onBulkSelect,s=e.permissions,c=e.selectedBaselineIds,u=e.tableData,d=e.tableId,p=e.totalBaselines,h=this.state,b=h.page,m=h.perPage;return f().createElement(f().Fragment,null,f().createElement(j,{createButton:n,exportButton:r,kebab:t,onSearch:this.onSearch,tableId:d,fetchWithParams:this.fetchWithParams,tableData:u,onBulkSelect:i,hasMultiSelect:o,selectedBaselineIds:c,isDeleteDisabled:(null==c?void 0:c.length)<1,page:b,perPage:m,totalBaselines:p,updatePagination:this.updatePagination,exportToCSV:a,loading:l,permissions:s}),this.renderTable(s),f().createElement(v.Toolbar,null,f().createElement(v.ToolbarGroup,{className:"pf-c-pagination"},f().createElement(v.ToolbarItem,null,f().createElement(F.Z,{page:b,perPage:m,total:s.baselinesRead?p:0,isCompact:!1,updatePagination:this.updatePagination,tableId:d})))))}}]),p}(p.Component);_.propTypes={loading:b().bool,tableData:b().array,fetchBaselines:b().func,tableId:b().string,hasMultiSelect:b().bool,onClick:b().func,kebab:b().bool,createButton:b().bool,exportButton:b().bool,onSelect:b().func,columns:b().array,onBulkSelect:b().func,selectedBaselineIds:b().array,totalBaselines:b().number,exportToCSV:b().func,permissions:b().object,basketIsVisible:b().bool};const K=(0,m.connect)(null,(function(e){return{fetchBaselines:function(t,n){return e(P.w.fetchBaselines(t,n))},exportToCSV:function(t,n){e(P.w.exportToCSV(t,n))}}}))(_)},43895:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(6610),r=n(5991),o=n(10379),l=n(86089),i=n(77608),s=n(25558),c=n.n(s),u=n(45697),d=n.n(u),p=n(96091);var f=function(e){(0,o.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=s.call(this,e)).state={kebabOpened:!1},t.toggleKebab=function(){var e=t.state.kebabOpened;t.setState({kebabOpened:!e})},t}return(0,r.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.ouiaId,a=this.state.kebabOpened;return c().createElement(p.Dropdown,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},ouiaId:n||"action-kebab",toggle:c().createElement(p.KebabToggle,{"data-ouia-component-type":"PF4/DropdownToggle","data-ouia-component-id":n?n+"-toggle":"action-kebab-toggle",onToggle:this.toggleKebab}),isOpen:a,dropdownItems:t,isPlain:!0})}}]),u}(s.Component);f.propTypes={dropdownItems:d().array,ouiaId:d().string};const h=f},86047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(28481),r=n(6610),o=n(5991),l=n(10379),i=n(86089),s=n(77608),c=n(25558),u=n.n(c),d=n(45697),p=n.n(d),f=n(96091);var h=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),(t=c.call(this,e)).buildBody=function(){var e=t.props.globalFilterState,n=e.sidsFilter,r=e.tagsFilter,o=e.workloadsFilter,l=Object.keys(o).length?"Workloads: "+Object.keys(o)[0]+". ":"";if(n.length){l+="SAP ID (SID): ";for(var i=0;i<n.length;i++)l+=n[i],i+1===n.length?l+=". ":l+=", "}if(r.length){var s=[],c={};l+="Tags: ",r.forEach((function(e){s.push(e.split("/"))})),s.forEach((function(e){e[0]in c?c[e[0]].push(e[1]):c[e[0]]=[e[1]]}));for(var u=0,d=Object.entries(c);u<d.length;u++){var p=(0,a.Z)(d[u],2),f=p[0],h=p[1];l+=f+": ";for(var b=0;b<h.length;b++)l+=h[b],b+1===h.length?l+=". ":l+=", "}}return l},t.state={isOpen:!0},t.toggleIsOpen=function(){var e=t.state.isOpen;t.setState({isOpen:!e})},t}return(0,o.Z)(d,[{key:"render",value:function(){var e,t=this,n=this.props.globalFilterState,a=n.sidsFilter,r=n.tagsFilter,o=n.workloadsFilter,l=this.state.isOpen;return u().createElement(u().Fragment,null,l&&(null!==(e=o.SAP)&&void 0!==e&&e.isSelected||a.length>0||r.length>0)?u().createElement(f.Alert,{variant:"info",title:"Your systems are pre-filtered by the global context selector.",isInline:!0,actionClose:u().createElement(f.AlertActionCloseButton,{onClose:function(){return t.toggleIsOpen()}})},u().createElement("p",null,this.buildBody())):null)}}]),d}(c.Component);h.propTypes={globalFilterState:p().object};const b=h},93187:(e,t,n)=>{"use strict";n.d(t,{v:()=>h,Z:()=>b});var a=n(6610),r=n(5991),o=n(63349),l=n(10379),i=n(86089),s=n(77608),c=n(25558),u=n.n(c),d=n(45697),p=n.n(d),f=n(96091);var h=function(e){(0,l.Z)(d,e);var t,n,c=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),(t=c.call(this,e)).onSetPage=t.onSetPage.bind((0,o.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,o.Z)(t)),t}return(0,r.Z)(d,[{key:"onSetPage",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:t,perPage:this.props.perPage};a?r(o,a):r(o)}},{key:"onPerPageSelect",value:function(e,t){var n=this.props,a=n.tableId,r=n.updatePagination,o={page:1,perPage:t};a?r(o,a):r(o)}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.page,a=e.perPage,r=e.isCompact,o=e.widgetId,l=e.variant,i=e.ouiaId;return u().createElement(f.Pagination,{itemCount:t||0,widgetId:o,page:0===t?0:n,perPage:a,variant:l,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:r,ouiaId:i})}}]),d}(c.Component);h.propTypes={perPage:p().number,page:p().number,updatePagination:p().func,total:p().number,isCompact:p().bool,tableId:p().string,widgetId:p().string,variant:p().any,ouiaId:p().string};const b=h}}]);
//# sourceMappingURL=../sourcemaps/852.2fa59acacbc673d3a064.js.map