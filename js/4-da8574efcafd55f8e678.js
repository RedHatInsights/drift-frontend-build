(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1007:function(e,t,a){"use strict";var r=a(1014),n=a(426);function s(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=a):r[e]=a};case"bracket":return function(e,a,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=[a]:r[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=n({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),n=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),a(decodeURIComponent(n),s,r)})),Object.keys(r).sort().reduce((function(e,t){var a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):r},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,r){return null===a?[s(t,e),"[",r,"]"].join(""):[s(t,e),"[",s(r,e),"]=",s(a,e)].join("")};case"bracket":return function(t,a){return null===a?s(t,e):[s(t,e),"[]=",s(a,e)].join("")};default:return function(t,a){return null===a?s(t,e):[s(t,e),"=",s(a,e)].join("")}}}(t=n({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var n=e[r];if(void 0===n)return"";if(null===n)return s(r,t);if(Array.isArray(n)){var i=[];return n.slice().forEach((function(e){void 0!==e&&i.push(a(r,e,i.length))})),i.join("&")}return s(r,t)+"="+s(n,t)})).filter((function(e){return e.length>0})).join("&"):""}},1014:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},1019:function(e,t,a){"use strict";a.r(t),a.d(t,"DriftPage",(function(){return ft}));var r=a(24),n=a.n(r),s=a(46),i=a.n(s),o=a(82),c=a.n(o),l=a(83),u=a.n(l),f=a(84),d=a.n(f),p=a(85),m=a.n(p),h=a(51),y=a.n(h),v=a(1),S=a.n(v),g=a(7),b=a.n(g),E=a(52),I=a(75),R=a(305),F=a(186),C=a(625),P=a(670),k=a(138),w=a(116),x=a(664),D=a(615),B=a(646),T=a(642),H=a(422),N=a(1001),O=a(425),A=a(1007),M=a.n(A);function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0;e.push({search:"?"+M.a.stringify({system_ids:t,baseline_ids:a,hsp_ids:r,reference_id:n})})}var _=a(72),V=a.n(_),K=a(307),L=a.n(K),U=a(118),W=a.n(U),X=a(633),Y=a(634),$=a(276),z=a(143),J=a(668),q=a(629),G=a(259),Q=a(189),Z=a(1008),ee=a(1005),te=a(1012),ae=a(1006);function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ne=function(e){d()(r,e);var t,a=re(r);function r(e){var t;return c()(this,r),(t=a.call(this,e)).onSelect=function(e,a,r){var n=t.props,s=n.baselineTableData;(0,n.selectBaseline)(-1===r?s.map((function(e){return e[0]})):[s[r][0]],a,"CHECKBOX")},t.onBulkSelect=function(e){var a=t.props,r=a.baselineTableData,n=a.selectBaseline,s=[];r.forEach((function(e){s.push(e[0])})),n(s,e,"CHECKBOX")},t.confirmModal=t.confirmModal.bind(W()(t)),t.cancelSelection=t.cancelSelection.bind(W()(t)),t.changeActiveTab=t.changeActiveTab.bind(W()(t)),t.state={columns:[{title:"Name",transforms:[G.a]},{title:"Last updated",transforms:[G.a,Object(Q.a)(20)]}]},t}return u()(r,[{key:"componentDidMount",value:(t=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"confirmModal",value:function(){var e=this.props,t=e.confirmModal,a=e.entities,r=e.selectedBaselineIds,n=e.toggleAddSystemModal,s=e.selectedHSPIds,i=e.referenceId;t(a.selectedSystemIds,r,s,i),n()}},{key:"cancelSelection",value:function(){(0,this.props.toggleAddSystemModal)()}},{key:"selectedSystemIds",value:function(){var e=this.props.systems.map((function(e){return e.id}));return e||[]}},{key:"changeActiveTab",value:function(e,t){(0,this.props.selectActiveTab)(t)}},{key:"render",value:function(){var e=this.props,t=e.activeTab,a=e.addSystemModalOpened,r=e.baselineTableData,n=e.globalFilterState,s=e.hasBaselinesReadPermissions,i=e.hasBaselinesWritePermissions,o=e.hasInventoryReadPermissions,c=e.historicalProfiles,l=e.loading,u=e.entities,f=e.selectedBaselineIds,d=e.selectedHSPIds,p=e.totalBaselines,m=this.state.columns;return S.a.createElement(S.a.Fragment,null,S.a.createElement($.a,{width:"950px",title:"Add to comparison",isOpen:a,onClose:this.cancelSelection,actions:[S.a.createElement(z.a,{key:"confirm",variant:"primary",onClick:this.confirmModal,isDisabled:(u&&u.selectedSystemIds&&0===u.selectedSystemIds.length||!u)&&0===f.length&&0===d.length,ouiaId:"submit"},"Submit"),S.a.createElement(z.a,{key:"cancel",variant:"link",onClick:this.cancelSelection,ouiaId:"cancel"},"Cancel")]},S.a.createElement(te.a,{globalFilterState:n}),S.a.createElement(J.a,{activeKey:t,onSelect:this.changeActiveTab},S.a.createElement(q.a,{eventKey:0,title:"Systems",id:"systems-tab"},S.a.createElement(Z.a,{selectedSystemIds:this.selectedSystemIds(),hasHistoricalDropdown:!0,historicalProfiles:c,hasMultiSelect:!0,hasInventoryReadPermissions:o,entities:u,selectVariant:"checkbox"})),S.a.createElement(q.a,{eventKey:1,title:"Baselines",id:"baselines-tab"},S.a.createElement(ee.a,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:r,loading:l,columns:m,onBulkSelect:this.onBulkSelect,selectedBaselineIds:f,totalBaselines:p,hasReadPermissions:s,hasWritePermissions:i,kebab:!1})))))}}]),r}(v.Component);ne.propTypes={showModal:b.a.bool,addSystemModalOpened:b.a.bool,activeTab:b.a.number,confirmModal:b.a.func,cancelSelection:b.a.func,toggleAddSystemModal:b.a.func,selectActiveTab:b.a.func,entities:b.a.object,systems:b.a.array,selectedBaselineIds:b.a.array,baselines:b.a.array,selectedHSPIds:b.a.array,loading:b.a.bool,baselineTableData:b.a.array,selectBaseline:b.a.func,historicalProfiles:b.a.array,referenceId:b.a.string,totalBaselines:b.a.number,hasInventoryReadPermissions:b.a.bool,hasBaselinesReadPermissions:b.a.bool,hasBaselinesWritePermissions:b.a.bool,globalFilterState:b.a.object};var se=Object(I.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,systems:e.compareState.systems,activeTab:e.addSystemModalState.activeTab,entities:e.entities,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,baselines:e.compareState.baselines,selectedHSPIds:e.historicProfilesState.selectedHSPIds,loading:e.baselinesTableState.checkboxTable.loading,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,historicalProfiles:e.compareState.historicalProfiles,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines,globalFilterState:e.globalFilterState}}),(function(e){return{toggleAddSystemModal:function(){return e(ae.a.toggleAddSystemModal())},selectActiveTab:function(t){return e(ae.a.selectActiveTab(t))},selectBaseline:function(t,a,r){return e(H.a.selectBaseline(t,a,r))}}}))(ne),ie=a(637),oe=a(647),ce=a(238);function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ue=function(e){d()(a,e);var t=le(a);function a(e){return c()(this,a),t.call(this,e)}return u()(a,[{key:"icon",value:function(){return"SAME"===this.props.fact.state?S.a.createElement(ie.a,{color:"#3E8635",height:"16px",width:"16px"}):"DIFFERENT"===this.props.fact.state?S.a.createElement(D.a,{color:"#C9190B",height:"16px",width:"16px"}):S.a.createElement(oe.a,{color:"#151515",height:"16px",width:"16px"})}},{key:"render",value:function(){var e=this.props,t=e.fact,a=e.stateSort;return S.a.createElement(ce.a,{key:t.name+"-"+a,position:"top",content:S.a.createElement("div",null,t.tooltip)},this.icon())}}]),a}(v.Component);ue.propTypes={fact:b.a.object,stateSort:b.a.string};var fe=ue,de=a(648),pe=a(636),me=a(638),he=a(650),ye=a(640),ve=a(644),Se=a(643),ge=a(635),be=a(5),Ee=a.n(be),Ie=a(38),Re=a(667),Fe=a(649),Ce=a(645);function Pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ke=function(e){d()(a,e);var t=Pe(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).state={isReference:r.props.isReference},r}return u()(a,[{key:"renderIcon",value:function(){var e=this.props,t=e.updateReferenceId,a=e.item;return this.state.isReference?S.a.createElement(Fe.a,{className:"reference-selector pointer",onClick:function(){return t()}}):S.a.createElement(Ce.a,{className:"reference-selector pointer",onClick:function(){return t(a.id)}})}},{key:"renderMessage",value:function(){var e=this.state.isReference,t=this.props.item,a=t.type;return"historical-system-profile"===t.type&&(a="historical system"),e?S.a.createElement("div",null,"This is the reference the other items are being compared against."):S.a.createElement("div",null,"Use this ",a," as a reference to compare.")}},{key:"render",value:function(){return S.a.createElement(ce.a,{position:"top",content:this.renderMessage()},this.renderIcon())}}]),a}(v.Component);ke.propTypes={isReference:b.a.bool,updateReferenceId:b.a.func,item:b.a.object};var we=ke;function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var De=function(e){d()(a,e);var t=xe(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).formatDate=function(e){return Ee.a.utc(e).format("DD MMM YYYY, HH:mm UTC")},r}return u()(a,[{key:"renderSortButton",value:function(e){return e===Ie.a?S.a.createElement(ve.a,{className:"active-blue"}):e===Ie.c?S.a.createElement(Se.a,{className:"active-blue"}):S.a.createElement(ge.a,{className:"not-active"})}},{key:"toggleSort",value:function(e,t){var a=this.props,r=a.toggleFactSort,n=a.toggleStateSort;"fact"===e?r(t):n(t)}},{key:"renderSystemHeaders",value:function(){var e=this,t=this.props,a=t.fetchCompare,r=t.masterList,n=t.referenceId,s=t.removeSystem,i=t.systemIds,o=t.updateReferenceId,c=[],l="";return r.forEach((function(t){"system"===t.type?l=S.a.createElement(ce.a,{position:"top",content:S.a.createElement("div",null,"System")},S.a.createElement(de.a,null)):"baseline"===t.type?l=S.a.createElement(ce.a,{position:"top",content:S.a.createElement("div",null,"Baseline")},S.a.createElement(pe.a,null)):"historical-system-profile"===t.type&&(l=S.a.createElement(ce.a,{position:"top",content:S.a.createElement("div",null,"Historical system")},S.a.createElement(me.a,null))),c.push(S.a.createElement("th",{"header-id":t.id,key:t.id,className:t.id===n?"drift-header reference-header":"drift-header ".concat(t.type,"-header")},S.a.createElement("div",null,S.a.createElement("a",{onClick:function(){return s(t)},className:"remove-system-icon"},S.a.createElement(he.a,null))),S.a.createElement("div",{className:"comparison-header"},S.a.createElement("div",{className:"drift-header-icon"},l),S.a.createElement("div",{className:"system-name"},t.display_name),S.a.createElement("div",{className:"system-updated-and-reference"},S.a.createElement(we,{updateReferenceId:o,item:t,isReference:t.id===n}),!1===t.system_profile_exists?S.a.createElement(ce.a,{position:"top",content:S.a.createElement("div",null,"System profile does not exist. Please run insights-client on system to upload archive.")},S.a.createElement(ye.a,{color:"#f0ab00"})):"",t.last_updated?e.formatDate(t.last_updated):e.formatDate(t.updated),"system"===t.type||"historical-system-profile"===t.type?S.a.createElement(Re.a,{system:t,systemIds:i,referenceId:n,fetchCompare:a,hasCompareButton:!0,hasMultiSelect:!0}):null))))})),c}},{key:"renderHeaderRow",value:function(){var e=this,t=this.props,a=t.factSort,r=t.stateSort;return S.a.createElement("tr",{className:"sticky-column-header"},S.a.createElement("th",{className:"fact-header sticky-column fixed-column-1 pointer",key:"fact-header",id:a,onClick:function(){return e.toggleSort("fact",a)},"data-ouia-component-type":"PF4/Button","data-ouia-component-id":"fact-sort-button"},S.a.createElement("div",{className:"active-blue"},"Fact ",this.renderSortButton(a))),S.a.createElement("th",{className:"state-header sticky-column fixed-column-2 pointer",key:"state-header",id:r||"disabled",onClick:function(){return e.toggleSort("state",r)}},""!==r?S.a.createElement("div",{className:"active-blue"},"State ",this.renderSortButton(r)):S.a.createElement("div",null,"State ",this.renderSortButton(r))),this.renderSystemHeaders())}},{key:"render",value:function(){return S.a.createElement(S.a.Fragment,null,this.renderHeaderRow())}}]),a}(v.Component);De.propTypes={factSort:b.a.string,fetchCompare:b.a.func,masterList:b.a.array,referenceId:b.a.string,removeSystem:b.a.func,stateSort:b.a.string,systemIds:b.a.array,toggleFactSort:b.a.func,toggleStateSort:b.a.func,updateReferenceId:b.a.func};var Be=De;function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var He=function(e){d()(o,e);var t,a,r,s=Te(o);function o(e){var t;return c()(this,o),(t=s.call(this,e)).shiftReferenceToFront=function(e){var a,r;return a=e.findIndex((function(e){return e.id===t.props.referenceId})),r=e.splice(a,1),e.unshift(r[0]),e},t.updateReferenceId=function(e){t.fetchCompare(t.systemIds,t.baselineIds,t.HSPIds,e)},t.findHSPReference=function(){var e=t.props.referenceId,a=e;return t.HSPIds.forEach((function(t){t===e&&(a=void 0)})),a},t.state={emptyStateMessage:["You currently have no system or baselines displayed. Add at least two","systems or baselines to compare their facts."]},t.masterList=[],t.setSystemIds(),t.setBaselineIds(),t.setHSPIds(),t.setReferenceId(),t.fetchCompare=t.fetchCompare.bind(W()(t)),t.removeSystem=t.removeSystem.bind(W()(t)),t}return u()(o,[{key:"componentDidMount",value:(r=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:(this.systemIds.length>0||this.baselineIds.length>0||this.HSPIds.length>0)&&this.fetchCompare(this.systemIds,this.baselineIds,this.HSPIds,this.props.referenceId);case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"shouldComponentUpdate",value:(a=i()(n.a.mark((function e(t){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.emptyState){e.next=3;break}return e.next=3,null===(a=window.insights)||void 0===a||null===(r=a.chrome)||void 0===r||null===(s=r.appAction)||void 0===s?void 0:s.call(r,"comparison-view");case 3:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"formatEntities",value:function(e,t,a){var r,n=[],s={};if(0===e.length&&0===t.length&&0===a.length)return[];e=e.map((function(e){return e.type="system",e})),t=t.map((function(e){return e.type="baseline",e})),(a=a.map((function(e){return e.type="historical-system-profile",e}))).forEach((function(e){s.hasOwnProperty(e.system_id)?s[e.system_id].push(e):s[e.system_id]=[e]})),n=e;for(var i=function(){var t=L()(c[o],2),a=t[0],r=t[1],s=e.find((function(e){return a===e.id})),i=void 0;void 0!==s?(i=n.indexOf(s),n=[].concat(V()(n.slice(0,i+1)),V()(r),V()(n.slice(i+1,n.length)))):n=n.concat(r)},o=0,c=Object.entries(s);o<c.length;o++)i();return r=t.concat(n),this.props.referenceId&&(r=this.shiftReferenceToFront(r)),r}},{key:"setSystemIds",value:function(){this.systemIds=M.a.parse(this.props.location.search).system_ids,this.systemIds=Array.isArray(this.systemIds)?this.systemIds:[this.systemIds],this.systemIds=this.systemIds.filter((function(e){return void 0!==e}))}},{key:"setBaselineIds",value:function(){this.baselineIds=M.a.parse(this.props.location.search).baseline_ids,this.baselineIds=Array.isArray(this.baselineIds)?this.baselineIds:[this.baselineIds],this.baselineIds=this.baselineIds.filter((function(e){return void 0!==e})),this.props.setSelectedBaselines(this.baselineIds,"CHECKBOX")}},{key:"setHSPIds",value:function(){var e=this.props.selectHistoricProfiles;this.HSPIds=M.a.parse(this.props.location.search).hsp_ids,this.HSPIds=Array.isArray(this.HSPIds)?this.HSPIds:[this.HSPIds],this.HSPIds=this.HSPIds.filter((function(e){return void 0!==e})),e(this.HSPIds)}},{key:"setReferenceId",value:function(){var e=this.props,t=e.location;(0,e.updateReferenceId)(M.a.parse(t.search).reference_id)}},{key:"removeSystem",value:(t=i()(n.a.mark((function e(t){var a,r,s,i,o,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,r=a.historicalProfiles,s=a.isFirstReference,i=a.referenceId,o=a.selectHistoricProfiles,c=a.setIsFirstReference,"system"!==t.type){e.next=11;break}return this.systemIds=this.systemIds.filter((function(e){return e!==t.id})),e.next=5,this.findHSPReference();case 5:return l=e.sent,e.next=8,r.filter((function(e){return e.system_id!==t.id})).map((function(e){return e.id}));case 8:this.HSPIds=e.sent,e.next=12;break;case 11:"baseline"===t.type?this.baselineIds=this.baselineIds.filter((function(e){return e!==t.id})):"historical-system-profile"===t.type&&(this.HSPIds=this.HSPIds.filter((function(e){return e!==t.id})));case 12:t.id===l&&(l=void 0),o(this.HSPIds),this.systemIds.length||this.baselineIds.length||this.HSPIds.length||i||s||c(!0),this.fetchCompare(this.systemIds,this.baselineIds,this.HSPIds,l);case 16:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"fetchCompare",value:function(e,t,a,r){var n,s=this.props,i=s.clearComparison,o=s.fetchCompare,c=s.isFirstReference,l=s.setIsFirstReference,u=s.setSelectedBaselines,f=s.updateReferenceId;this.systemIds=e,this.baselineIds=t,this.HSPIds=a,c?!r&&this.baselineIds.length?n=t[0]:r&&(n=r):n=r,j(this.props.history,e,t,a,n),u(this.baselineIds,"CHECKBOX"),f(n),e.length||t.length||a.length||n?(o(e,t,a,n),l(!1)):i()}},{key:"renderRows",value:function(e){var t=this,a=[];return void 0!==e&&e.forEach((function(e){a.push(t.renderRow(e))})),a}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(S.a.createElement("td",null,S.a.createElement(R.Skeleton,{size:R.SkeletonSize.md})));for(var r=0;r<10;r+=1)e.push(S.a.createElement("tr",null,t));return e}},{key:"findSystem",value:function(e){var t,a=this,r=[],n=void 0;return this.masterList.forEach((function(s){t=["comparison-cell"],n=e.systems.find((function(e){return e.id===s.id})),a.props.referenceId?"DIFFERENT"===n.state&&(t.push("highlight"),t.push("different-fact-cell")):"DIFFERENT"===e.state&&t.push("highlight"),r.push(S.a.createElement("td",{className:t.join(" ")},null===n.value?"No Data":n.value))})),r}},{key:"renderRow",value:function(e){var t=this,a=this.props,r=a.expandedRows,n=a.stateSort,s=[],i=[];return e.comparisons?(s.push(S.a.createElement("td",{className:r.includes(e.name)?"nested-fact sticky-column fixed-column-1":"sticky-column fixed-column-1"},this.renderExpandableRowButton(r,e.name)," ",e.name)),s.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(fe,{fact:e,stateSort:n}))),this.masterList.forEach((function(){s.push(S.a.createElement("td",{className:"comparison-cell"}))})),i.push(S.a.createElement("tr",null,s)),r.includes(e.name)&&e.comparisons.forEach((function(e){s=t.renderRowChild(e),i.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},s))}))):(s.push(S.a.createElement("td",{className:"sticky-column fixed-column-1"},e.name)),s.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(fe,{fact:e,stateSort:n}))),s=s.concat(this.findSystem(e)),i.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},s))),i}},{key:"renderRowChild",value:function(e){var t=[];return t.push(S.a.createElement("td",{className:"nested-fact sticky-column fixed-column-1"},S.a.createElement("p",{className:"child-row"},e.name))),t.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(fe,{fact:e}))),t=t.concat(this.findSystem(e))}},{key:"renderExpandableRowButton",value:function(e,t){var a=this;return e.includes(t)?S.a.createElement(X.a,{className:"carat-margin pointer active-blue",onClick:function(){return a.props.expandRow(t)}}):S.a.createElement(Y.a,{className:"carat-margin pointer",onClick:function(){return a.props.expandRow(t)}})}},{key:"renderTable",value:function(e,t){var a=this.props,r=a.factSort,n=a.referenceId,s=a.stateSort,i=a.toggleFactSort,o=a.toggleStateSort;return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"drift-table-wrapper"},S.a.createElement("table",{className:"pf-c-table pf-m-compact drift-table"},S.a.createElement("thead",null,S.a.createElement(Be,{factSort:r,fetchCompare:this.fetchCompare,masterList:this.masterList,referenceId:n,removeSystem:this.removeSystem,stateSort:s,systemIds:this.systemIds,toggleFactSort:i,toggleStateSort:o,updateReferenceId:this.updateReferenceId})),S.a.createElement("tbody",null,t?this.renderLoadingRows():this.renderRows(e)))))}},{key:"render",value:function(){var e=this.props,t=e.emptyState,a=e.filteredCompareData,r=e.systems,n=e.baselines,s=e.hasBaselinesReadPermissions,i=e.hasBaselinesWritePermissions,o=e.hasInventoryReadPermissions,c=e.historicalProfiles,l=e.loading;return this.masterList=this.formatEntities(r,n,c),S.a.createElement(S.a.Fragment,null,S.a.createElement(se,{selectedSystemIds:r.map((function(e){return e.id})),confirmModal:this.fetchCompare,referenceId:this.props.referenceId,hasInventoryReadPermissions:o,hasBaselinesReadPermissions:s,hasBaselinesWritePermissions:i}),t?null:this.renderTable(a,l))}}]),o}(v.Component);He.propTypes={addSystemModalOpened:b.a.bool,location:b.a.object,history:b.a.object,fetchCompare:b.a.func,fullCompareData:b.a.array,filteredCompareData:b.a.array,systems:b.a.array,baselines:b.a.array,historicalProfiles:b.a.array,factSort:b.a.string,stateSort:b.a.string,loading:b.a.bool,toggleFactSort:b.a.func,toggleStateSort:b.a.func,expandRow:b.a.func,expandedRows:b.a.array,setSelectedBaselines:b.a.func,selectHistoricProfiles:b.a.func,emptyState:b.a.bool,updateReferenceId:b.a.func,referenceId:b.a.string,error:b.a.object,isFirstReference:b.a.bool,setIsFirstReference:b.a.func,clearComparison:b.a.func,hasInventoryReadPermissions:b.a.bool,hasBaselinesReadPermissions:b.a.bool,hasBaselinesWritePermissions:b.a.bool};var Ne=Object(E.o)(Object(I.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,fullCompareData:e.compareState.fullCompareData,filteredCompareData:e.compareState.filteredCompareData,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines,historicalProfiles:e.compareState.historicalProfiles,factSort:e.compareState.factSort,stateSort:e.compareState.stateSort,expandedRows:e.compareState.expandedRows,emptyState:e.compareState.emptyState,referenceId:e.compareState.referenceId}}),(function(e){return{fetchCompare:function(t,a,r,n){return e(N.a.fetchCompare(t,a,r,n))},toggleFactSort:function(t){return e(N.a.toggleFactSort(t))},toggleStateSort:function(t){return e(N.a.toggleStateSort(t))},expandRow:function(t){return e(N.a.expandRow(t))},setSelectedBaselines:function(t,a){return e(H.a.setSelectedBaselines(t,a))},selectHistoricProfiles:function(t){return e(O.a.selectHistoricProfiles(t))}}}))(He)),Oe=a(1004),Ae=a(1003);function Me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var je=function(e){d()(a,e);var t=Me(a);function a(e){return c()(this,a),t.call(this,e)}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.toggleAddSystemModal,r=e.isTable;return S.a.createElement(z.a,{variant:"primary",onClick:a,isDisabled:!!t,ouiaId:"add"},r?"Add":"Add to comparison")}}]),a}(v.Component);je.propTypes={toggleAddSystemModal:b.a.func,isTable:b.a.bool,loading:b.a.bool};var _e=Object(I.connect)(null,(function(e){return{toggleAddSystemModal:function(){return e(ae.a.toggleAddSystemModal())}}}))(je),Ve=a(584),Ke=a(671),Le=a(630),Ue=a(613),We=a(585),Xe=a(621),Ye=a(593);var $e={toggleFilterDropDown:function(){return{type:Ye.a.OPEN_FILTER_DROPDOWN}}};function ze(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var Je=function(e){d()(a,e);var t=ze(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).onToggle=r.onToggle.bind(W()(r)),r.createDropdownItem=r.createDropdownItem.bind(W()(r)),r}return u()(a,[{key:"onToggle",value:function(){this.props.toggleDropDown()}},{key:"createDropdownItem",value:function(e){var t=this;return S.a.createElement(Ve.a,null,S.a.createElement(Ue.a,{id:e.display,label:e.display,isChecked:e.selected,onChange:function(){return t.props.addStateFilter(e)}}))}},{key:"createDropdownArray",value:function(e){var t=[];return e.forEach(function(e){var a=this.createDropdownItem(e);t.push(a)}.bind(this)),t}},{key:"createSelectedViewsString",value:function(e){for(var t=[],a="",r=0;r<e.length;r++)e[r].selected&&t.push(e[r].display);for(var n=0;n<t.length;n++)a+=t[n],n+1<t.length&&(a+=", ");return a}},{key:"render",value:function(){var e,t,a=this.props.stateFilters;return e=this.createDropdownArray(a),t=this.createSelectedViewsString(a),S.a.createElement(S.a.Fragment,null,S.a.createElement(We.a,{toggle:S.a.createElement(Xe.a,{onToggle:this.onToggle},"View: ",t),isOpen:this.props.filterDropdownOpened,dropdownItems:e}))}}]),a}(v.Component);Je.propTypes={toggleDropDown:b.a.func,filterDropdownOpened:b.a.bool,stateFilters:b.a.array,addStateFilter:b.a.func};var qe=Object(I.connect)((function(e){return{filterDropdownOpened:e.filterDropdownOpened,stateFilters:e.compareState.stateFilters}}),(function(e){return{toggleDropDown:function(){return e($e.toggleFilterDropDown())},addStateFilter:function(t){return e(N.a.addStateFilter(t))}}}))(Je),Ge=a(1009),Qe=a.n(Ge),Ze=a(626);function et(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var tt=function(e){d()(a,e);var t=et(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).updateFactFilter=function(e){r.setState({filter:e}),r.setFactFilter(e)},r.setFactFilter=Qe()((function(e){this.props.changeFactFilter(e)}),250),r.state={filter:r.props.factFilter},r.setFactFilter=r.setFactFilter.bind(W()(r)),r}return u()(a,[{key:"componentDidUpdate",value:function(e){""!==e.factFilter&&""===this.props.factFilter&&this.setState({filter:this.props.factFilter})}},{key:"render",value:function(){return S.a.createElement(S.a.Fragment,null,S.a.createElement(Ze.a,{value:this.state.filter,id:"filterByFact",placeholder:"Filter by fact",onChange:this.updateFactFilter,"aria-label":"filter by fact"}))}}]),a}(v.Component);tt.propTypes={changeFactFilter:b.a.func,factFilter:b.a.string};var at=Object(I.connect)((function(e){return{factFilter:e.compareState.factFilter}}),(function(e){return{changeFactFilter:function(t){return e(N.a.filterByFact(t))}}}))(tt),rt=a(1011),nt=a(1002);function st(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var it=function(e){d()(a,e);var t=st(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).setStateChips=function(e){var t=[];return e.forEach((function(e){e.selected&&t.push(e.display)})),t},r.clearAllStateChips=function(){var e=r.props,t=e.addStateFilter;e.stateFilters.forEach((function(e){e.selected=!0,t(e)}))},r.removeChip=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=r.props,n=a.addStateFilter,s=a.filterByFact,i=a.stateFilters;e?"State"===e?""===t?r.clearAllStateChips():i.forEach((function(e){e.display===t&&n(e)})):s(""):(r.clearAllStateChips(),s(""))},r.setIsEmpty=function(e){r.setState({isEmpty:e})},r.onToggle=function(){var e=r.state.dropdownOpen;r.setState({dropdownOpen:!e})},r.clearFilters=function(){(0,r.props.clearComparisonFilters)()},r.clearComparison=function(){var e=r.props,t=e.history,a=e.clearComparison,n=e.clearSelectedBaselines,s=e.setIsFirstReference,i=e.updateReferenceId;a(),n("CHECKBOX"),s(!0),i(),j(t,[])},r.state={actionKebabItems:[S.a.createElement(Ve.a,{key:"remove-systems",component:"button",onClick:r.clearComparison},"Clear all comparisons")],dropdownItems:[S.a.createElement(Ve.a,{key:"export-to-CSV",component:"button",onClick:function(){return r.props.exportToCSV()}},"Export to CSV")],isEmpty:!0,dropdownOpen:!1},r}return u()(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.factFilter,r=t.loading,n=t.page,s=t.perPage,i=t.stateFilters,o=t.totalFacts,c=t.updatePagination,l=this.state,u=l.actionKebabItems,f=l.dropdownItems,d=l.dropdownOpen,p=l.isEmpty;return S.a.createElement(S.a.Fragment,null,S.a.createElement(P.a,{className:"drift-toolbar",clearAllFilters:this.removeChip},S.a.createElement(Ke.a,null,S.a.createElement(k.a,{variant:"filter-group"},S.a.createElement(Le.a,{chips:""!==a?[a]:[],deleteChip:this.removeChip,categoryName:"Fact name"},S.a.createElement(at,null)),S.a.createElement(Le.a,{chips:this.setStateChips(i),deleteChip:this.removeChip,deleteChipGroup:this.removeChip,categoryName:"State"},S.a.createElement(qe,null))),S.a.createElement(k.a,{variant:"button-group"},S.a.createElement(w.a,null,S.a.createElement(_e,{loading:r}))),S.a.createElement(k.a,{variant:"icon-button-group"},S.a.createElement(w.a,null,S.a.createElement(nt.a,{dropdownItems:f,isOpen:d,onToggle:this.onToggle})),S.a.createElement(w.a,null,S.a.createElement(rt.a,{dropdownItems:u}))),S.a.createElement(w.a,{variant:"pagination",align:{default:"alignRight"}},S.a.createElement(Ae.a,{page:n,perPage:s,total:o,isCompact:!0,updatePagination:c,widgetId:"drift-pagination-top",variant:x.b.top})),S.a.createElement(k.a,{variant:"filter-group"},p?null:S.a.createElement(w.a,null,S.a.createElement("a",{onClick:function(){return e.clearFilters()}},"Clear filters"))))))}}]),a}(v.Component);it.propTypes={loading:b.a.bool,history:b.a.object,page:b.a.number,perPage:b.a.number,totalFacts:b.a.number,updatePagination:b.a.func,clearComparisonFilters:b.a.func,clearComparison:b.a.func,exportToCSV:b.a.func,clearSelectedBaselines:b.a.func,setIsFirstReference:b.a.func,updateReferenceId:b.a.func,factFilter:b.a.string,filterByFact:b.a.func,stateFilters:b.a.array,addStateFilter:b.a.func};var ot=it,ct=a(423),lt=a(424);function ut(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ft=function(e){d()(r,e);var t,a=ut(r);function r(e){var t;return c()(this,r),(t=a.call(this,e)).setIsFirstReference=function(e){t.setState({isFirstReference:e})},t.onClose=function(){var e=t.props,a=e.revertCompareData,r=e.history,n=e.previousStateSystems;a(),j(r,n.map((function(e){return e.id})))},t.renderEmptyState=function(){var e=t.state.emptyStateMessage,a=t.props.error;return a.status?S.a.createElement(ct.a,{icon:D.a,color:"#c9190b",title:"Comparison cannot be displayed",text:e,error:"Error "+a.status+": "+a.detail,button:S.a.createElement(_e,{isTable:!1})}):S.a.createElement(ct.a,{icon:B.a,color:"#6a6e73",title:"Add systems or baselines to compare",text:e,button:S.a.createElement(_e,{isTable:!1})})},t.state={emptyStateMessage:["You currently have no system or baselines displayed. Add at least two","systems or baselines to compare their facts."],isFirstReference:!0},t.props.clearSelectedBaselines("CHECKBOX"),t}return u()(r,[{key:"componentDidMount",value:(t=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,a=t.addStateFilter,r=t.clearComparison,n=t.clearComparisonFilters,s=t.clearSelectedBaselines,i=t.emptyState,o=t.error,c=t.exportToCSV,l=t.factFilter,u=t.filterByFact,f=t.history,d=t.loading,p=t.page,m=t.perPage,h=t.stateFilters,y=t.totalFacts,v=t.updatePagination,g=t.updateReferenceId,b=this.state.isFirstReference;return S.a.createElement(S.a.Fragment,null,S.a.createElement(R.PageHeader,null,S.a.createElement(R.PageHeaderTitle,{title:"Comparison"})),S.a.createElement(R.Main,null,S.a.createElement(lt.a.Consumer,null,(function(t){return!1===t.permissions.compareRead?S.a.createElement(ct.a,{icon:T.a,color:"#6a6e73",title:"You do not have access to Drift comparison",text:["Contact your organization administrator(s) for more information."]}):S.a.createElement(S.a.Fragment,null,S.a.createElement(Oe.a,{error:o,onClose:e.onClose}),i&&!d?e.renderEmptyState():S.a.createElement("div",null),S.a.createElement(F.a,{className:"pf-t-light pf-m-opaque-100"},S.a.createElement(C.a,null,S.a.createElement("div",null,i?null:S.a.createElement(ot,{loading:d,history:f,page:p,perPage:m,totalFacts:y,updatePagination:v,clearComparison:r,clearComparisonFilters:n,exportToCSV:c,updateReferenceId:g,setIsFirstReference:e.setIsFirstReference,clearSelectedBaselines:s,factFilter:l,filterByFact:u,stateFilters:h,addStateFilter:a}),S.a.createElement(Ne,{updateReferenceId:g,error:o,isFirstReference:b,setIsFirstReference:e.setIsFirstReference,clearComparison:r,hasBaselinesReadPermissions:t.permissions.baselinesRead,hasBaselinesWritePermissions:t.permissions.baselinesWrite,hasInventoryReadPermissions:t.permissions.inventoryRead}),i||d?null:S.a.createElement(P.a,{className:"drift-toolbar"},S.a.createElement(k.a,{className:"pf-c-pagination"},S.a.createElement(w.a,null,S.a.createElement(Ae.b,{page:p,perPage:m,total:y,isCompact:!1,updatePagination:v,widgetId:"drift-pagination-bottom",variant:x.b.bottom}))))))))}))))}}]),r}(v.Component);ft.propTypes={perPage:b.a.number,page:b.a.number,totalFacts:b.a.number,error:b.a.object,loading:b.a.bool,clearSelectedBaselines:b.a.func,emptyState:b.a.bool,updatePagination:b.a.func,updateReferenceId:b.a.func,clearComparison:b.a.func,clearComparisonFilters:b.a.func,history:b.a.object,selectHistoricProfiles:b.a.func,selectedHSPIds:b.a.array,revertCompareData:b.a.func,previousStateSystems:b.a.array,exportToCSV:b.a.func,factFilter:b.a.string,filterByFact:b.a.func,stateFilters:b.a.array,addStateFilter:b.a.func};t.default=Object(E.o)(Object(I.connect)((function(e){return{page:e.compareState.page,perPage:e.compareState.perPage,totalFacts:e.compareState.totalFacts,error:e.compareState.error,loading:e.compareState.loading,emptyState:e.compareState.emptyState,selectedHSPIds:e.historicProfilesState.selectedHSPIds,previousStateSystems:e.compareState.previousStateSystems,factFilter:e.compareState.factFilter,stateFilters:e.compareState.stateFilters}}),(function(e){return{clearSelectedBaselines:function(t){return e(H.a.clearSelectedBaselines(t))},updatePagination:function(t){return e(N.a.updatePagination(t))},updateReferenceId:function(t){return e(N.a.updateReferenceId(t))},clearComparison:function(){return e(N.a.clearComparison())},clearComparisonFilters:function(){return e(N.a.clearComparisonFilters())},selectHistoricProfiles:function(t){return e(O.a.selectHistoricProfiles(t))},revertCompareData:function(){return e(N.a.revertCompareData())},exportToCSV:function(){return e(N.a.exportToCSV())},filterByFact:function(t){return e(N.a.filterByFact(t))},addStateFilter:function(t){return e(N.a.addStateFilter(t))}}}))(ft))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map