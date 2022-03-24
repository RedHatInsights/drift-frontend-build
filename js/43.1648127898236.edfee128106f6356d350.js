"use strict";(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[43],{39356:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(70885),o=n(92950),r=n.n(o),l=n(45697),s=n.n(l),a=n(34895);function c(e){var t=e.baselineData,n=e.classname,i=e.isChecked,o=e.handleNotificationToggle,l=e.hasLabel;return r().createElement(a.Switch,{className:n,"aria-label":"notifications-toggle",isChecked:i,onChange:function(){return o(t)},labelOff:l?"Notifications are disabled":null,label:l?"Notifications are enabled":null,isReversed:!0})}c.propTypes={baselineData:s().object,classname:s().string,handleNotificationToggle:s().func,hasLabel:s().bool,isChecked:s().bool};const u=c;var d=n(15861),f=n(87757),p=n.n(f),g=n(87248);function m(){return(m=(0,d.Z)(p().mark((function e(t,n,i,o,r){var l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,g.Z.patchBaselineData(t,n);case 4:l=e.sent,o(l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(e.t0,t,n.display_name);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}const b={toggleNotificationSwitch:function(e,t,n,i,o){return m.apply(this,arguments)}};function v(e){var t=e.badgeCount,n=e.baselineData,l=e.classname,s=e.hasBadge,c=e.hasLabel,d=e.hasSwitch,f=e.index,p=e.notificationsSwitchError,g=e.toggleNotificationPending,m=e.toggleNotificationFulfilled,v=e.toggleNotificationRejected,h=(0,o.useState)(n.notifications_enabled),y=(0,i.Z)(h,2),S=y[0],w=y[1];return(0,o.useEffect)((function(){(null==p?void 0:p.id)===n.id&&w(!S)}),[p]),r().createElement(r().Fragment,null,d?r().createElement(u,{classname:l,isChecked:S,hasLabel:c,handleNotificationToggle:function(e){var t={display_name:e.display_name,facts_patch:[],notifications_enabled:!S};b.toggleNotificationSwitch(e.id,t,g,m,v),w(!S)},baselineData:n}):null,s?r().createElement(a.Badge,{key:f,isRead:!(t>0)||null},t):null)}v.propTypes={badgeCount:s().number,baselineData:s().object,classname:s().string,hasBadge:s().bool,hasLabel:s().bool,hasSwitch:s().bool,index:s().number,notificationsSwitchError:s().object,toggleNotificationPending:s().func,toggleNotificationFulfilled:s().func,toggleNotificationRejected:s().func};const h=v},74381:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(15671),o=n(43144),r=n(60136),l=n(6215),s=n(61120),a=n(92950),c=n.n(a),u=n(45697),d=n.n(u),f=n(34895),p=n(83632);var g=function(e){(0,r.Z)(u,e);var t,n,a=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){return(0,i.Z)(this,u),a.call(this,e)}return(0,o.Z)(u,[{key:"render",value:function(){var e=this.props,t=e.dropdownItems,n=e.isOpen,i=e.onToggle,o=e.ouiaId;return c().createElement(f.Dropdown,{toggle:c().createElement(f.DropdownToggle,{ouiaId:o?o+"-toggle":"action-kebab-toggle",toggleIndicator:null,onToggle:i},c().createElement(p.ExportIcon,{className:"pointer not-active"})),isOpen:n,ouiaId:o||"export-dropdown",isPlain:!0,position:f.DropdownPosition.left,dropdownItems:t})}}]),u}(a.Component);g.propTypes={dropdownItems:d().array,isOpen:d().bool,onToggle:d().func,ouiaId:d().string};const m=g},83068:(e,t,n)=>{n.d(t,{h:()=>o});var i=n(93802);const o={selectHistoricProfiles:function(e){return{type:i.Z.SELECT_HISTORIC_PROFILES,payload:e}}}},34869:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(15861),o=n(4942),r=n(87757),l=n.n(r),s=n(92950),a=n.n(s),c=n(37282),u=n(45697),d=n.n(u),f=n(67336),p=n(81321),g=n(83632),m=n(89455),b=n(59386),v=n(69078),h=n(42325),y=n(83068),S=n(14307);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n,o,r,u=e.baselineId,d=e.createBaselineModal,b=e.deselectHistoricalProfiles,v=e.driftClearFilters,y=e.entities,w=e.permissions,P=e.hasMultiSelect,E=e.historicalProfiles,k=e.isAddSystemNotifications,O=e.selectedSystemIds,N=e.selectEntities,C=e.selectHistoricProfiles,Z=e.selectSystemsToAdd,T=e.selectVariant,_=e.setSelectedSystemIds,j=e.systemNotificationIds,D=e.systemColumns,F=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.tagsFilter})),R=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.workloadsFilter})),x=(0,c.useSelector)((function(e){var t=e.globalFilterState;return null==t?void 0:t.sidsFilter})),H=(0,s.useRef)((function(){})),L=function(e){var t=[];switch(e){case"none":t={id:0,selected:!1,bulk:!0};break;case"deselect-page":t={id:0,selected:!1};break;case"page":t={id:0,selected:!0}}N(t)};return w.inventoryRead?a().createElement("div",{className:"inventory-toolbar-no-padding"},a().createElement(p.Z,{columns:D,onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES,i=e.api;H.current=null==i?void 0:i.getEntities,v(),(0,f.JH)().register(t((0,m.Z)(n,u,d,E,P,b,k,C,j,Z))),_(d?[]:O)},showTags:!0,noDetail:!0,customFilters:{tags:F,filter:{system_profile:I(I(I(I({},(null==R||null===(t=R.SAP)||void 0===t?void 0:t.isSelected)&&{sap_system:!0}),(null==R||null===(n=R["Ansible Automation Platform"])||void 0===n?void 0:n.isSelected)&&{ansible:"not_nil"}),(null==R||null===(o=R["Microsoft SQL"])||void 0===o?void 0:o.isSelected)&&{mssql:"not_nil"}),(null==x?void 0:x.length)>0&&{sap_sids:x})}},tableProps:{canSelectAll:!1,selectVariant:T,ouiaId:"systems-table",className:"inventory-align",isStickyHeader:!0},getEntities:j&&!k?function(){var e=(0,i.Z)(l().mark((function e(t,n){var i,o,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(j||[]).slice((n.page-1)*n.per_page,n.page*n.per_page),e.next=3,null===(i=H.current)||void 0===i?void 0:i.call(H,o,{hasItems:!0},!0);case 3:return r=e.sent,e.abrupt("return",I(I({},r),{},{results:r.results.map((function(e){return I(I({},e),o.find((function(t){return t.uuid===e.id}))||{})})),total:(j||[]).length,page:n.page,per_page:n.per_page}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}():function(){var e=(0,i.Z)(l().mark((function e(t,n){var i,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=H.current)||void 0===i?void 0:i.call(H,[],n,!0);case 2:return o=e.sent,e.abrupt("return",I({},o));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),bulkSelect:L&&!k&&{isDisabled:!P,count:null==y||null===(r=y.selectedSystemIds)||void 0===r?void 0:r.length,items:[{title:"Select none (0)",onClick:function(){L("none")}},{title:"Select page (".concat((null==y?void 0:y.count)||0,")"),onClick:function(){L("page")}},{title:"Deselect page (".concat((null==y?void 0:y.count)||0,")"),onClick:function(){L("deselect-page")}}],onSelect:function(){var e;(null==y?void 0:y.rows.length)===(null==y||null===(e=y.selectedSystems)||void 0===e?void 0:e.length)?L("deselect-page"):L("page")},checked:y&&y.selectedSystemIds?S.Z.findCheckedValue(null==y?void 0:y.total,null==y?void 0:y.selectedSystemIds.length):null}})):a().createElement(h.Z,{icon:g.LockIcon,color:"#6a6e73",title:"You do not have access to the inventory",text:["Contact your organization administrator(s) for more information."]})};P.propTypes={setSelectedSystemIds:d().func,selectedSystemIds:d().array,createBaselineModal:d().bool,driftClearFilters:d().func,historicalProfiles:d().array,hasMultiSelect:d().bool,permissions:d().object,entities:d().object,selectEntities:d().func,selectVariant:d().string,systemNotificationIds:d().array,isAddSystemNotifications:d().bool,baselineId:d().string,selectHistoricProfiles:d().func,selectSystemsToAdd:d().func,selectSingleHSP:d().func,deselectHistoricalProfiles:d().func,systemColumns:d().array},P.defaultProps={selectedSystemIds:[]};const E=(0,c.connect)(null,(function(e){return{selectHistoricProfiles:function(t){return e(y.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(b.r.setSelectedSystemIds(t))},driftClearFilters:function(){return e(v.Z.clearAllFilters())},selectEntities:function(t){return e({type:"SELECT_ENTITY",payload:t})},selectSingleHSP:function(t){return e(v.Z.selectSingleHSP(t))}}}))(P)},59386:(e,t,n)=>{n.d(t,{r:()=>i.Z});var i=n(58667);n(26666)}}]);
//# sourceMappingURL=../sourcemaps/43.3ef9267b1d00a8fa39a78b388994ccf9.js.map