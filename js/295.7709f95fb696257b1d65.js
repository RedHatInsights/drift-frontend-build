(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[295],{23419:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(6610),o=n(5991),i=n(10379),s=n(86089),c=n(77608),l=n(25558),a=n.n(l),u=n(45697),d=n.n(u),f=n(45237),p=n(78204);var g=function(e){(0,i.Z)(u,e);var t,n,l=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),(t=l.call(this,e)).closeToast=function(e){var n=t.props.onClose;e?n(e):n()},t}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.addNotification,n=e.error,r=e.tableId;return a().createElement(a().Fragment,null,n.status?t({variant:"danger",title:"Error",description:n.detail,dismissable:!0}):null,n.status?this.closeToast(r):null)}}]),u}(l.Component);g.propTypes={error:d().object,tableId:d().string,onClose:d().func,addNotification:d().func};const v=(0,f.connect)(null,(function(e){return{addNotification:function(t){return e((0,p.addNotification)(t))}}}))(g)},74381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(6610),o=n(5991),i=n(10379),s=n(86089),c=n(77608),l=n(25558),a=n.n(l),u=n(45697),d=n.n(u),f=n(37020),p=n(91264);var g=function(e){(0,i.Z)(u,e);var t,n,l=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var o=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){return(0,r.Z)(this,u),l.call(this,e)}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.isOpen,r=e.onToggle,o=e.ouiaId;return a().createElement(f.Dropdown,{toggle:a().createElement(f.DropdownToggle,{ouiaId:o?o+"-toggle":"action-kebab-toggle",toggleIndicator:null,onToggle:r},a().createElement(p.ExportIcon,{className:"pointer not-active"})),isOpen:n,ouiaId:o||"export-dropdown",isPlain:!0,position:f.DropdownPosition.left,dropdownItems:t})}}]),u}(l.Component);g.propTypes={dropdownItems:d().array,isOpen:d().bool,onToggle:d().func,ouiaId:d().string};const v=g},83068:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var r=n(93802);const o={selectHistoricProfiles:function(e){return{type:r.Z.SELECT_HISTORIC_PROFILES,payload:e}}}},34869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(92137),o=n(96156),i=n(87757),s=n.n(i),c=n(25558),l=n.n(c),a=n(45237),u=n(45697),d=n.n(u),f=n(29071),p=n(33739),g=n(91264),v=n(89455),y=n(59386),m=n(69078),h=n(42325),S=n(83068),b=n(14307);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t,n,o=e.baselineId,i=e.createBaselineModal,u=e.deselectHistoricalProfiles,d=e.driftClearFilters,y=e.entities,m=e.hasHistoricalDropdown,S=e.permissions,I=e.hasMultiSelect,Z=e.historicalProfiles,O=e.isAddSystemNotifications,w=e.selectedSystemIds,E=e.selectEntities,k=e.selectHistoricProfiles,C=e.selectSystemsToAdd,T=e.selectVariant,R=e.setSelectedSystemIds,j=e.systemNotificationIds,_=(0,a.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.tagsFilter})),F=(0,a.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.workloadsFilter})),H=(0,a.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.sidsFilter})),N=(0,c.useRef)((function(){})),D=function(e){var t=[];switch(e){case"none":t={id:0,selected:!1,bulk:!0};break;case"deselect-page":t={id:0,selected:!1};break;case"page":t={id:0,selected:!0}}E(t)};return S.inventoryRead?l().createElement(p.Z,{onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES,r=e.api;N.current=null==r?void 0:r.getEntities,d(),(0,f.getRegistry)().register(t((0,v.Z)(n,o,i,Z,I,m,u,O,k,j,C))),R(i?[]:w)},showTags:!0,noDetail:!0,customFilters:{tags:_,filter:{system_profile:P(P({},(null==F||null===(t=F.SAP)||void 0===t?void 0:t.isSelected)&&{sap_system:!0}),(null==H?void 0:H.length)>0&&{sap_sids:H})}},tableProps:{canSelectAll:!1,selectVariant:T,ouiaId:"systems-table"},getEntities:j&&!O?function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(j||[]).slice((n.page-1)*n.per_page,n.page*n.per_page),e.next=3,null===(r=N.current)||void 0===r?void 0:r.call(N,o,{hasItems:!0},!0);case 3:return i=e.sent,e.abrupt("return",P(P({},i),{},{results:i.results.map((function(e){return P(P({},e),o.find((function(t){return t.uuid===e.id}))||{})})),total:(j||[]).length,page:n.page,per_page:n.per_page}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}():function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=N.current)||void 0===r?void 0:r.call(N,[],n,!0);case 2:return o=e.sent,e.abrupt("return",P({},o));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),bulkSelect:D&&!O&&{isDisabled:!I,count:null==y||null===(n=y.selectedSystemIds)||void 0===n?void 0:n.length,items:[{title:"Select none (0)",onClick:function(){D("none")}},{title:"Select page (".concat((null==y?void 0:y.count)||0,")"),onClick:function(){D("page")}},{title:"Deselect page (".concat((null==y?void 0:y.count)||0,")"),onClick:function(){D("deselect-page")}}],onSelect:function(){var e;(null==y?void 0:y.rows.length)===(null==y||null===(e=y.selectedSystems)||void 0===e?void 0:e.length)?D("deselect-page"):D("page")},checked:y&&y.selectedSystemIds?b.Z.findCheckedValue(null==y?void 0:y.total,null==y?void 0:y.selectedSystemIds.length):null}}):l().createElement(h.Z,{icon:g.LockIcon,color:"#6a6e73",title:"You do not have access to the inventory",text:["Contact your organization administrator(s) for more information."]})};Z.propTypes={setSelectedSystemIds:d().func,selectedSystemIds:d().array,createBaselineModal:d().bool,driftClearFilters:d().func,hasHistoricalDropdown:d().bool,historicalProfiles:d().array,hasMultiSelect:d().bool,updateColumns:d().func,permissions:d().object,entities:d().object,selectEntities:d().func,selectVariant:d().string,systemNotificationIds:d().array,isAddSystemNotifications:d().bool,baselineId:d().string,selectHistoricProfiles:d().func,selectSystemsToAdd:d().func,selectSingleHSP:d().func,deselectHistoricalProfiles:d().func},Z.defaultProps={selectedSystemIds:[]};const O=(0,a.connect)(null,(function(e){return{selectHistoricProfiles:function(t){return e(S.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(y.r.setSelectedSystemIds(t))},driftClearFilters:function(){return e(m.Z.clearAllFilters())},updateColumns:function(t){return e(m.Z.updateColumns(t))},selectEntities:function(t){return e({type:"SELECT_ENTITY",payload:t})},selectSingleHSP:function(t){return e(m.Z.selectSingleHSP(t))}}}))(Z)},59386:(e,t,n)=>{"use strict";n.d(t,{r:()=>r.Z});var r=n(58667);n(26666)}}]);
//# sourceMappingURL=../sourcemaps/295.ebcfc69739d79da54aed.js.map