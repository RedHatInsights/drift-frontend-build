(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{731:function(e,t,a){"use strict";var r=a(778),n=a(219);function s(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=a):r[e]=a};case"bracket":return function(e,a,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=[a]:r[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=n({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),n=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),a(decodeURIComponent(n),s,r)})),Object.keys(r).sort().reduce((function(e,t){var a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):r},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,r){return null===a?[s(t,e),"[",r,"]"].join(""):[s(t,e),"[",s(r,e),"]=",s(a,e)].join("")};case"bracket":return function(t,a){return null===a?s(t,e):[s(t,e),"[]=",s(a,e)].join("")};default:return function(t,a){return null===a?s(t,e):[s(t,e),"=",s(a,e)].join("")}}}(t=n({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var n=e[r];if(void 0===n)return"";if(null===n)return s(r,t);if(Array.isArray(n)){var i=[];return n.slice().forEach((function(e){void 0!==e&&i.push(a(r,e,i.length))})),i.join("&")}return s(r,t)+"="+s(n,t)})).filter((function(e){return e.length>0})).join("&"):""}},778:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},854:function(e,t,a){"use strict";a.r(t),a.d(t,"DriftPage",(function(){return ct}));var r=a(10),n=a.n(r),s=a(19),i=a.n(s),o=a(28),c=a.n(o),l=a(29),u=a.n(l),f=a(30),d=a.n(f),p=a(31),m=a.n(p),h=a(18),y=a.n(h),v=a(0),S=a.n(v),g=a(4),b=a.n(g),E=a(21),I=a(32),R=a(135),F=a(656),C=a(739),k=a(740),P=a(775),w=a(776),D=a(686),x=a(682),B=a(772),T=a(661),H=a(764),N=a(760),O=a(203),M=a(677),A=a(218),j=a(731),_=a.n(j);function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0;e.push({search:"?"+_.a.stringify({system_ids:t,baseline_ids:a,hsp_ids:r,reference_id:n})})}var K=a(26),L=a.n(K),V=a(186),W=a.n(V),X=a(45),Y=a.n(X),G=a(188),$=a(14),z=a(766),J=a(754),q=a(756),Q=a(768),Z=a(758),ee=a(762),te=a(761),ae=a(753),re=a(751),ne=a(752),se=a(3),ie=a.n(se),oe=a(380),ce=a(96),le=a(774),ue=a(747),fe=a(404),de=a(732),pe=a(729),me=a(730);function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ye=function(e){d()(r,e);var t,a=he(r);function r(e){var t;return c()(this,r),(t=a.call(this,e)).onSelect=function(e,a,r){var n=t.props,s=n.baselineTableData;(0,n.selectBaseline)(-1===r?s.map((function(e){return e[0]})):[s[r][0]],a,"CHECKBOX")},t.onBulkSelect=function(e){var a=t.props,r=a.baselineTableData,n=a.selectBaseline,s=[];r.forEach((function(e){s.push(e[0])})),n(s,e,"CHECKBOX")},t.confirmModal=t.confirmModal.bind(Y()(t)),t.cancelSelection=t.cancelSelection.bind(Y()(t)),t.changeActiveTab=t.changeActiveTab.bind(Y()(t)),t.state={columns:[{title:"Name",transforms:[fe.a]},{title:"Last updated",transforms:[fe.a]}]},t}return u()(r,[{key:"componentDidMount",value:(t=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"confirmModal",value:function(){var e=this.props,t=e.confirmModal,a=e.entities,r=e.selectedBaselineIds,n=e.toggleModal,s=e.selectedHSPIds,i=e.referenceId;t(a.selectedSystemIds,r,s,i),n()}},{key:"cancelSelection",value:function(){this.props.toggleModal()}},{key:"selectedSystemIds",value:function(){var e=this.props.systems.map((function(e){return e.id}));return e||[]}},{key:"changeActiveTab",value:function(e,t){(0,this.props.selectActiveTab)(t)}},{key:"render",value:function(){var e=this.props,t=e.activeTab,a=e.addSystemModalOpened,r=e.baselineTableData,n=e.hasBaselinesReadPermissions,s=e.hasBaselinesWritePermissions,i=e.hasInventoryReadPermissions,o=e.historicalProfiles,c=e.loading,l=e.entities,u=e.selectedBaselineIds,f=e.selectedHSPIds,d=e.totalBaselines,p=this.state.columns;return S.a.createElement(S.a.Fragment,null,S.a.createElement(oe.a,{width:"950px",title:"Add to comparison",isOpen:a,onClose:this.cancelSelection,actions:[S.a.createElement(ce.a,{key:"confirm",variant:"primary",onClick:this.confirmModal,isDisabled:(l&&l.selectedSystemIds&&0===l.selectedSystemIds.length||!l)&&0===u.length&&0===f.length},"Submit")]},S.a.createElement(le.a,{activeKey:t,onSelect:this.changeActiveTab},S.a.createElement(ue.a,{eventKey:0,title:"Systems",id:"systems-tab"},S.a.createElement(de.a,{selectedSystemIds:this.selectedSystemIds(),hasHistoricalDropdown:!0,historicalProfiles:o,hasMultiSelect:!0,hasInventoryReadPermissions:i,entities:l})),S.a.createElement(ue.a,{eventKey:1,title:"Baselines",id:"baselines-tab"},S.a.createElement(pe.a,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:r,loading:c,columns:p,onBulkSelect:this.onBulkSelect,selectedBaselineIds:u,totalBaselines:d,hasReadPermissions:n,hasWritePermissions:s})))))}}]),r}(v.Component);ye.propTypes={showModal:b.a.bool,addSystemModalOpened:b.a.bool,activeTab:b.a.number,confirmModal:b.a.func,cancelSelection:b.a.func,toggleModal:b.a.func,selectActiveTab:b.a.func,entities:b.a.object,systems:b.a.array,selectedBaselineIds:b.a.array,baselines:b.a.array,selectedHSPIds:b.a.array,loading:b.a.bool,baselineTableData:b.a.array,selectBaseline:b.a.func,historicalProfiles:b.a.array,referenceId:b.a.string,totalBaselines:b.a.number,hasInventoryReadPermissions:b.a.bool,hasBaselinesReadPermissions:b.a.bool,hasBaselinesWritePermissions:b.a.bool};var ve=Object(I.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,systems:e.compareState.systems,activeTab:e.addSystemModalState.activeTab,entities:e.entities,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,baselines:e.compareState.baselines,selectedHSPIds:e.historicProfilesState.selectedHSPIds,loading:e.baselinesTableState.checkboxTable.loading,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,historicalProfiles:e.compareState.historicalProfiles,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{toggleModal:function(){return e(me.a.toggleAddSystemModal())},selectActiveTab:function(t){return e(me.a.selectActiveTab(t))},selectBaseline:function(t,a,r){return e(O.a.selectBaseline(t,a,r))}}}))(ye),Se=a(755),ge=a(765);function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var Ee=function(e){d()(a,e);var t=be(a);function a(e){return c()(this,a),t.call(this,e)}return u()(a,[{key:"icon",value:function(){return"SAME"===this.props.factState?S.a.createElement(Se.a,{color:"#3E8635",height:"20px",width:"20px"}):"DIFFERENT"===this.props.factState?S.a.createElement(T.a,{color:"#C9190B",height:"20px",width:"20px"}):S.a.createElement(ge.a,{color:"#151515",height:"20px",width:"20px"})}},{key:"render",value:function(){return this.icon()}}]),a}(v.Component);Ee.propTypes={factState:b.a.string};var Ie=Ee,Re=a(17),Fe=a(412),Ce=a(767),ke=a(763);function Pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var we=function(e){d()(a,e);var t=Pe(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).state={isReference:r.props.isReference},r}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.updateReferenceId,a=e.id;return this.state.isReference?S.a.createElement(Ce.a,{className:"reference-selector pointer",onClick:function(){return t()}}):S.a.createElement(ke.a,{className:"reference-selector pointer",onClick:function(){return t(a)}})}}]),a}(v.Component);we.propTypes={isReference:b.a.bool,updateReferenceId:b.a.func,id:b.a.string};var De=we;function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var Be=function(e){d()(s,e);var t,a,r=xe(s);function s(e){var t;return c()(this,s),(t=r.call(this,e)).shiftReferenceToFront=function(e){var a,r;return a=e.findIndex((function(e){return e.id===t.props.referenceId})),r=e.splice(a,1),e.unshift(r[0]),e},t.updateReferenceId=function(e){t.fetchCompare(t.systemIds,t.baselineIds,t.HSPIds,e)},t.state={emptyStateMessage:["You currently have no system or baselines displayed. Add at least two","systems or baselines to compare their facts."]},t.masterList=[],t.setSystemIds(),t.setBaselineIds(),t.setHSPIds(),t.setReferenceId(),t.fetchCompare=t.fetchCompare.bind(Y()(t)),t.removeSystem=t.removeSystem.bind(Y()(t)),t.formatDate=t.formatDate.bind(Y()(t)),t}return u()(s,[{key:"componentDidMount",value:(a=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:(this.systemIds.length>0||this.baselineIds.length>0||this.HSPIds.length>0)&&this.fetchCompare(this.systemIds,this.baselineIds,this.HSPIds,this.props.referenceId);case 3:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"formatEntities",value:function(e,t,a){var r,n=[],s={};if(0===e.length&&0===t.length&&0===a.length)return[];e=e.map((function(e){return e.type="system",e})),t=t.map((function(e){return e.type="baseline",e})),(a=a.map((function(e){return e.type="historical-system-profile",e}))).forEach((function(e){s.hasOwnProperty(e.system_id)?s[e.system_id].push(e):s[e.system_id]=[e]})),n=e;for(var i=function(){var t=W()(c[o],2),a=t[0],r=t[1],s=e.find((function(e){return a===e.id})),i=void 0;void 0!==s?(i=n.indexOf(s),n=[].concat(L()(n.slice(0,i+1)),L()(r),L()(n.slice(i+1,n.length)))):n=n.concat(r)},o=0,c=Object.entries(s);o<c.length;o++)i();return r=t.concat(n),this.props.referenceId&&(r=this.shiftReferenceToFront(r)),r}},{key:"setSystemIds",value:function(){this.systemIds=_.a.parse(this.props.location.search).system_ids,this.systemIds=Array.isArray(this.systemIds)?this.systemIds:[this.systemIds],this.systemIds=this.systemIds.filter((function(e){return void 0!==e}))}},{key:"setBaselineIds",value:function(){this.baselineIds=_.a.parse(this.props.location.search).baseline_ids,this.baselineIds=Array.isArray(this.baselineIds)?this.baselineIds:[this.baselineIds],this.baselineIds=this.baselineIds.filter((function(e){return void 0!==e})),this.props.setSelectedBaselines(this.baselineIds,"CHECKBOX")}},{key:"setHSPIds",value:function(){var e=this.props.selectHistoricProfiles;this.HSPIds=_.a.parse(this.props.location.search).hsp_ids,this.HSPIds=Array.isArray(this.HSPIds)?this.HSPIds:[this.HSPIds],this.HSPIds=this.HSPIds.filter((function(e){return void 0!==e})),e(this.HSPIds)}},{key:"setReferenceId",value:function(){var e=this.props,t=e.location;(0,e.updateReferenceId)(_.a.parse(t.search).reference_id)}},{key:"formatDate",value:function(e){return ie.a.utc(e).format("DD MMM YYYY, HH:mm UTC")}},{key:"removeSystem",value:(t=i()(n.a.mark((function e(t){var a,r,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,r=a.isFirstReference,s=a.selectHistoricProfiles,i=a.setIsFirstReference,"system"===t.type?(this.systemIds=this.systemIds.filter((function(e){return e!==t.id})),this.HSPIds=this.props.historicalProfiles.filter((function(e){return e.system_id!==t.id})).map((function(e){return e.id}))):"baseline"===t.type?this.baselineIds=this.baselineIds.filter((function(e){return e!==t.id})):"historical-system-profile"===t.type&&(this.HSPIds=this.HSPIds.filter((function(e){return e!==t.id}))),t.id!==this.props.referenceId){e.next=5;break}return e.next=5,this.props.updateReferenceId(this.baselineIds[0]);case 5:s(this.HSPIds),this.systemIds.length||this.baselineIds.length||this.HSPIds.length||this.props.referenceId||r||i(!0),this.fetchCompare(this.systemIds,this.baselineIds,this.HSPIds,this.props.referenceId);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"fetchCompare",value:function(e,t,a,r){var n,s=this.props,i=s.clearComparison,o=s.fetchCompare,c=s.isFirstReference,l=s.setIsFirstReference,u=s.setSelectedBaselines,f=s.updateReferenceId;this.systemIds=e,this.baselineIds=t,this.HSPIds=a,c?!r&&this.baselineIds.length?(n=t[0],l(!1)):r&&(n=r,l(!1)):n=r,U(this.props.history,e,t,a,n),u(this.baselineIds,"CHECKBOX"),f(n),e.length||t.length||a.length||n?o(e,t,a,n):i()}},{key:"renderRows",value:function(e){var t=this,a=[];return void 0!==e&&e.forEach((function(e){a.push(t.renderRow(e))})),a}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(S.a.createElement("td",null,S.a.createElement(R.Skeleton,{size:R.SkeletonSize.md})));for(var r=0;r<10;r+=1)e.push(S.a.createElement("tr",null,t));return e}},{key:"findSystem",value:function(e){var t,a=this,r=[],n=void 0;return this.masterList.forEach((function(s){t=["comparison-cell"],n=e.systems.find((function(e){return e.id===s.id})),a.props.referenceId?"DIFFERENT"===n.state&&(t.push("highlight"),t.push("different-fact-cell")):"DIFFERENT"===e.state&&t.push("highlight"),r.push(S.a.createElement("td",{className:t.join(" ")},null===n.value?"No Data":n.value))})),r}},{key:"renderRow",value:function(e){var t=this,a=[],r=[];return e.comparisons?(a.push(S.a.createElement("td",{className:this.props.expandedRows.includes(e.name)?"nested-fact sticky-column fixed-column-1":"sticky-column fixed-column-1"},this.renderExpandableRowButton(this.props.expandedRows,e.name)," ",e.name)),a.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(Ie,{factState:e.state}))),this.masterList.forEach((function(){a.push(S.a.createElement("td",{className:"comparison-cell"}))})),r.push(S.a.createElement("tr",null,a)),this.props.expandedRows.includes(e.name)&&e.comparisons.forEach((function(e){a=t.renderRowChild(e),r.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},a))}))):(a.push(S.a.createElement("td",{className:"sticky-column fixed-column-1"},e.name)),a.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(Ie,{factState:e.state}))),a=a.concat(this.findSystem(e)),r.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},a))),r}},{key:"renderRowChild",value:function(e){var t=[];return t.push(S.a.createElement("td",{className:"nested-fact sticky-column fixed-column-1"},S.a.createElement("p",{className:"child-row"},e.name))),t.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(Ie,{factState:e.state}))),t=t.concat(this.findSystem(e))}},{key:"renderSystemHeaders",value:function(){var e=this,t=[],a="",r=this.props.referenceId,n=this.updateReferenceId;return this.masterList.forEach((function(s){"system"===s.type?a=S.a.createElement(z.a,null):"baseline"===s.type?a=S.a.createElement(J.a,null):"historical-system-profile"===s.type&&(a=S.a.createElement(q.a,null)),t.push(S.a.createElement("th",{"header-id":s.id,key:s.id,className:s.id===r?"drift-header reference-header":"drift-header ".concat(s.type,"-header")},S.a.createElement("div",null,S.a.createElement("a",{onClick:function(){return e.removeSystem(s)},className:"remove-system-icon"},S.a.createElement(Q.a,null))),S.a.createElement("div",{className:"comparison-header"},S.a.createElement("div",{className:"drift-header-icon"},a),S.a.createElement("div",{className:"system-name"},s.display_name),S.a.createElement("div",{className:"system-updated-and-reference"},S.a.createElement(De,{updateReferenceId:n,id:s.id,isReference:s.id===r}),!1===s.system_profile_exists?S.a.createElement(G.a,{position:"top",content:S.a.createElement("div",null,"System profile does not exist. Please run insights-client on system to upload archive.")},S.a.createElement(Z.a,{color:"#f0ab00"})):"",s.last_updated?e.formatDate(s.last_updated):e.formatDate(s.updated),"system"===s.type||"historical-system-profile"===s.type?S.a.createElement(Fe.a,{system:s,systemIds:e.systemIds,referenceId:r,fetchCompare:e.fetchCompare,dropdownDirection:$.c.down,hasCompareButton:!0,hasMultiSelect:!0}):null))))})),t}},{key:"renderSortButton",value:function(e){return e===Re.a?S.a.createElement(ee.a,{className:"active-blue"}):e===Re.c?S.a.createElement(te.a,{className:"active-blue"}):S.a.createElement(ae.a,{className:"not-active"})}},{key:"toggleSort",value:function(e,t){"fact"===e?this.props.toggleFactSort(t):this.props.toggleStateSort(t)}},{key:"renderHeaderRow",value:function(){var e=this,t=this.props,a=t.factSort,r=t.stateSort;return S.a.createElement("tr",{className:"sticky-column-header"},S.a.createElement("th",{className:"fact-header sticky-column fixed-column-1 pointer",key:"fact-header",id:a,onClick:function(){return e.toggleSort("fact",a)}},S.a.createElement("div",{className:"active-blue"},"Fact ",this.renderSortButton(a))),S.a.createElement("th",{className:"state-header sticky-column fixed-column-2 pointer",key:"state-header",id:r||"disabled",onClick:function(){return e.toggleSort("state",r)}},""!==r?S.a.createElement("div",{className:"active-blue"},"State ",this.renderSortButton(r)):S.a.createElement("div",null,"State ",this.renderSortButton(r))),this.renderSystemHeaders())}},{key:"renderExpandableRowButton",value:function(e,t){var a=this;return e.includes(t)?S.a.createElement(re.a,{className:"carat-margin pointer active-blue",onClick:function(){return a.props.expandRow(t)}}):S.a.createElement(ne.a,{className:"carat-margin pointer",onClick:function(){return a.props.expandRow(t)}})}},{key:"renderTable",value:function(e,t){return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"drift-table-wrapper"},S.a.createElement("table",{className:"pf-c-table pf-m-compact drift-table"},S.a.createElement("thead",null,this.renderHeaderRow()),S.a.createElement("tbody",null,t?this.renderLoadingRows():this.renderRows(e)))))}},{key:"render",value:function(){var e=this.props,t=e.emptyState,a=e.filteredCompareData,r=e.systems,n=e.baselines,s=e.hasBaselinesReadPermissions,i=e.hasBaselinesWritePermissions,o=e.hasInventoryReadPermissions,c=e.historicalProfiles,l=e.loading;return this.masterList=this.formatEntities(r,n,c),S.a.createElement(S.a.Fragment,null,S.a.createElement(ve,{selectedSystemIds:r.map((function(e){return e.id})),confirmModal:this.fetchCompare,referenceId:this.props.referenceId,hasInventoryReadPermissions:o,hasBaselinesReadPermissions:s,hasBaselinesWritePermissions:i}),t?null:this.renderTable(a,l))}}]),s}(v.Component);Be.propTypes={addSystemModalOpened:b.a.bool,location:b.a.object,history:b.a.object,fetchCompare:b.a.func,fullCompareData:b.a.array,filteredCompareData:b.a.array,systems:b.a.array,baselines:b.a.array,historicalProfiles:b.a.array,factSort:b.a.string,stateSort:b.a.string,loading:b.a.bool,toggleFactSort:b.a.func,toggleStateSort:b.a.func,expandRow:b.a.func,expandedRows:b.a.array,setSelectedBaselines:b.a.func,selectHistoricProfiles:b.a.func,emptyState:b.a.bool,updateReferenceId:b.a.func,referenceId:b.a.string,error:b.a.object,isFirstReference:b.a.bool,setIsFirstReference:b.a.func,clearComparison:b.a.func,hasInventoryReadPermissions:b.a.bool,hasBaselinesReadPermissions:b.a.bool,hasBaselinesWritePermissions:b.a.bool};var Te=Object(E.o)(Object(I.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,fullCompareData:e.compareState.fullCompareData,filteredCompareData:e.compareState.filteredCompareData,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines,historicalProfiles:e.compareState.historicalProfiles,factSort:e.compareState.factSort,stateSort:e.compareState.stateSort,expandedRows:e.compareState.expandedRows,emptyState:e.compareState.emptyState,referenceId:e.compareState.referenceId}}),(function(e){return{fetchCompare:function(t,a,r,n){return e(M.a.fetchCompare(t,a,r,n))},toggleFactSort:function(t){return e(M.a.toggleFactSort(t))},toggleStateSort:function(t){return e(M.a.toggleStateSort(t))},expandRow:function(t){return e(M.a.expandRow(t))},setSelectedBaselines:function(t,a){return e(O.a.setSelectedBaselines(t,a))},selectHistoricProfiles:function(t){return e(A.a.selectHistoricProfiles(t))}}}))(Be)),He=a(659),Ne=a(657),Oe=a(666),Me=a(383);var Ae={toggleFilterDropDown:function(){return{type:Me.a.OPEN_FILTER_DROPDOWN}}};function je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var _e=function(e){d()(a,e);var t=je(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).onToggle=r.onToggle.bind(Y()(r)),r.createDropdownItem=r.createDropdownItem.bind(Y()(r)),r}return u()(a,[{key:"onToggle",value:function(){this.props.toggleDropDown()}},{key:"createDropdownItem",value:function(e){var t=this;return S.a.createElement(F.a,null,S.a.createElement(He.a,{id:e.display,label:e.display,isChecked:e.selected,onChange:function(){return t.props.addStateFilter(e)}}))}},{key:"createDropdownArray",value:function(e){var t=[];return e.forEach(function(e){var a=this.createDropdownItem(e);t.push(a)}.bind(this)),t}},{key:"createSelectedViewsString",value:function(e){for(var t=[],a="",r=0;r<e.length;r++)e[r].selected&&t.push(e[r].display);for(var n=0;n<t.length;n++)a+=t[n],n+1<t.length&&(a+=", ");return a}},{key:"render",value:function(){var e,t,a=this.props.stateFilters;return e=this.createDropdownArray(a),t=this.createSelectedViewsString(a),S.a.createElement(S.a.Fragment,null,S.a.createElement(Ne.a,{toggle:S.a.createElement(Oe.a,{onToggle:this.onToggle},"View: ",t),isOpen:this.props.filterDropdownOpened,dropdownItems:e}))}}]),a}(v.Component);_e.propTypes={toggleDropDown:b.a.func,filterDropdownOpened:b.a.bool,stateFilters:b.a.array,addStateFilter:b.a.func};var Ue=Object(I.connect)((function(e){return{filterDropdownOpened:e.filterDropdownOpened,stateFilters:e.compareState.stateFilters}}),(function(e){return{toggleDropDown:function(){return e(Ae.toggleFilterDropDown())},addStateFilter:function(t){return e(M.a.addStateFilter(t))}}}))(_e),Ke=a(769),Le=a.n(Ke),Ve=a(742);function We(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var Xe=function(e){d()(a,e);var t=We(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).updateFactFilter=function(e){r.setState({filter:e}),r.setFactFilter(e)},r.setFactFilter=Le()((function(e){this.props.changeFactFilter(e)}),250),r.state={filter:r.props.factFilter},r.setFactFilter=r.setFactFilter.bind(Y()(r)),r}return u()(a,[{key:"componentDidUpdate",value:function(e){""!==e.factFilter&&""===this.props.factFilter&&this.setState({filter:this.props.factFilter})}},{key:"render",value:function(){return S.a.createElement(S.a.Fragment,null,S.a.createElement(Ve.a,{value:this.state.filter,id:"filterByFact",placeholder:"Filter by fact",onChange:this.updateFactFilter,"aria-label":"filter by fact"}))}}]),a}(v.Component);Xe.propTypes={changeFactFilter:b.a.func,factFilter:b.a.string};var Ye=Object(I.connect)((function(e){return{factFilter:e.compareState.factFilter}}),(function(e){return{changeFactFilter:function(t){return e(M.a.filterByFact(t))}}}))(Xe),Ge=a(771),$e=a(728),ze=a(727),Je=a(726),qe=a(664),Qe=a(228);function Ze(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var et=function(e){d()(a,e);var t=Ze(a);function a(e){var r;return c()(this,a),(r=t.call(this,e)).setStateChips=function(e){var t=[];return e.forEach((function(e){e.selected&&t.push(e.display)})),t},r.removeChip=function(e){var t=r.props,a=t.stateFilters,n=t.addStateFilter,s=t.filterByFact;insights.chrome.isBeta()?"Expected"===e||"Unexpected"===e||"Uncertain"===e?a.forEach((function(t){t.display===e&&n(t)})):s(""):"Same"===e||"Different"===e||"Incomplete data"===e?a.forEach((function(t){t.display===e&&n(t)})):s("")},r.checkChips=function(){var e=r.state.chipGroup,t=r.props.setIsEmpty,a=!0;e.forEach((function(e){e.chips.length>0&&(a=!1)})),t(a)},r.state={chipGroup:[{category:"State",chips:r.setStateChips(r.props.stateFilters)},{category:"Fact name",chips:""!==r.props.factFilter?[r.props.factFilter]:[]}]},r}return u()(a,[{key:"componentDidUpdate",value:function(e){var t,a=this.props,r=a.stateFilters,n=a.factFilter,s=this.state.chipGroup,i=s[0],o=s[1];if(e!==this.props){if(r!==e.stateFilters){var c=[];r.forEach((function(e){e.selected&&c.push(e.display)})),i={category:"State",chips:c}}n!==e.factFilter&&(o={category:"Fact name",chips:""!==n?[n]:[]}),t=[i,o],this.setState({chipGroup:t})}}},{key:"render",value:function(){var e=this,t=this.state.chipGroup,a=0;return this.checkChips(),t.map((function(t){return S.a.createElement(qe.a,{categoryName:t.category,key:t.category},t.chips.map((function(r){return S.a.createElement(Qe.a,{key:t.category+a++,onClick:function(){return e.removeChip(r)}},r)})))}))}}]),a}(v.Component);et.propTypes={factFilter:b.a.string,stateFilters:b.a.array,filterByFact:b.a.func,addStateFilter:b.a.func,setIsEmpty:b.a.func};var tt=Object(I.connect)((function(e){return{factFilter:e.compareState.factFilter,stateFilters:e.compareState.stateFilters}}),(function(e){return{filterByFact:function(t){return e(M.a.filterByFact(t))},addStateFilter:function(t){return e(M.a.addStateFilter(t))}}}))(et);function at(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var rt=function(e){d()(a,e);var t=at(a);function a(e){return c()(this,a),t.call(this,e)}return u()(a,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.toggleAddSystemModal,r=e.isTable;return S.a.createElement(ce.a,{variant:"primary",onClick:a,isDisabled:!!t},r?"Add":"Add to comparison")}}]),a}(v.Component);rt.propTypes={toggleAddSystemModal:b.a.func,isTable:b.a.bool,loading:b.a.bool};var nt=Object(I.connect)(null,(function(e){return{toggleAddSystemModal:function(){return e(me.a.toggleAddSystemModal())}}}))(rt),st=a(206),it=a(217);function ot(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var ct=function(e){d()(r,e);var t,a=ot(r);function r(e){var t;return c()(this,r),(t=a.call(this,e)).setIsFirstReference=function(e){t.setState({isFirstReference:e})},t.onToggle=function(){var e=t.state.dropdownOpen;t.setState({dropdownOpen:!e})},t.setIsEmpty=function(e){t.setState({isEmpty:e})},t.clearFilters=function(){(0,t.props.clearComparisonFilters)()},t.clearComparison=function(){var e=t.props,a=e.history,r=e.clearComparison,n=e.clearSelectedBaselines,s=e.updateReferenceId;r(),n("CHECKBOX"),t.setIsFirstReference(!0),s(),U(a,[])},t.onClose=function(){var e=t.props,a=e.revertCompareData,r=e.history,n=e.previousStateSystems;a(),U(r,n.map((function(e){return e.id})))},t.renderEmptyState=function(){var e=t.state.emptyStateMessage,a=t.props.error;return a.status?S.a.createElement(st.a,{icon:T.a,color:"#c9190b",title:"Comparison cannot be displayed",text:e,error:"Error "+a.status+": "+a.detail,button:S.a.createElement(nt,{isTable:!1})}):S.a.createElement(st.a,{icon:H.a,color:"#6a6e73",title:"Add systems or baselines to compare",text:e,button:S.a.createElement(nt,{isTable:!1})})},t.state={actionKebabItems:[S.a.createElement(F.a,{key:"remove-systems",component:"button",onClick:t.clearComparison},"Clear all comparisons")],dropdownItems:[S.a.createElement(F.a,{key:"export-to-CSV",component:"button",onClick:function(){return t.props.exportToCSV()}},"Export to CSV")],dropdownOpen:!1,emptyStateMessage:["You currently have no system or baselines displayed. Add at least two","systems or baselines to compare their facts."],isEmpty:!0,isFirstReference:!0},t.props.clearSelectedBaselines("CHECKBOX"),t}return u()(r,[{key:"componentDidMount",value:(t=i()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,a=t.clearComparison,r=t.emptyState,n=t.error,s=t.loading,i=t.page,o=t.perPage,c=t.totalFacts,l=t.updatePagination,u=t.updateReferenceId,f=this.state,d=f.actionKebabItems,p=f.dropdownItems,m=f.dropdownOpen,h=f.isEmpty,y=f.isFirstReference;return S.a.createElement(S.a.Fragment,null,S.a.createElement(R.PageHeader,null,S.a.createElement(R.PageHeaderTitle,{title:"Comparison"})),S.a.createElement(R.Main,null,S.a.createElement(it.a.Consumer,null,(function(t){return!1===t.permissions.compareRead?S.a.createElement(st.a,{icon:N.a,color:"#6a6e73",title:"You do not have access to Drift comparison",text:["Contact your organization administrator(s) for more information."]}):S.a.createElement(S.a.Fragment,null,S.a.createElement($e.a,{error:n,onClose:e.onClose}),r&&!s?e.renderEmptyState():S.a.createElement("div",null),S.a.createElement(C.a,{className:"pf-t-light pf-m-opaque-100"},S.a.createElement(k.a,null,S.a.createElement("div",null,r?null:S.a.createElement(S.a.Fragment,null,S.a.createElement(P.a,{className:"drift-toolbar"},S.a.createElement(w.a,null,S.a.createElement(D.a,{variant:"filter-group"},S.a.createElement(x.a,null,S.a.createElement(Ye,null)),S.a.createElement(x.a,null,S.a.createElement(Ue,null))),S.a.createElement(D.a,{variant:"button-group"},S.a.createElement(x.a,null,S.a.createElement(nt,{loading:s}))),S.a.createElement(D.a,{variant:"icon-button-group"},S.a.createElement(x.a,null,S.a.createElement(Je.a,{dropdownItems:p,isOpen:m,onToggle:e.onToggle})),S.a.createElement(x.a,null,S.a.createElement(Ge.a,{dropdownItems:d}))),S.a.createElement(x.a,{variant:"pagination",align:{default:"alignRight"}},S.a.createElement(ze.b,{page:i,perPage:o,total:c,isCompact:!0,updatePagination:l,widgetId:"drift-pagination-top",variant:B.b.top})))),S.a.createElement(P.a,{className:"drift-toolbar"},S.a.createElement(w.a,null,S.a.createElement(D.a,null,S.a.createElement(x.a,null,S.a.createElement(tt,{setIsEmpty:e.setIsEmpty})),h?null:S.a.createElement(x.a,null,S.a.createElement("a",{onClick:function(){return e.clearFilters()}},"Clear filters")))))),S.a.createElement(Te,{updateReferenceId:u,error:n,isFirstReference:y,setIsFirstReference:e.setIsFirstReference,clearComparison:a,hasBaselinesReadPermissions:t.permissions.baselinesRead,hasBaselinesWritePermissions:t.permissions.baselinesWrite,hasInventoryReadPermissions:t.permissions.inventoryRead}),r||s?null:S.a.createElement(P.a,{className:"drift-toolbar"},S.a.createElement(D.a,{className:"pf-c-pagination"},S.a.createElement(x.a,null,S.a.createElement(ze.b,{page:i,perPage:o,total:c,isCompact:!1,updatePagination:l,widgetId:"drift-pagination-bottom",variant:B.b.bottom}))))))))}))))}}]),r}(v.Component);ct.propTypes={perPage:b.a.number,page:b.a.number,totalFacts:b.a.number,error:b.a.object,loading:b.a.bool,clearSelectedBaselines:b.a.func,emptyState:b.a.bool,updatePagination:b.a.func,updateReferenceId:b.a.func,clearComparison:b.a.func,clearComparisonFilters:b.a.func,history:b.a.object,selectHistoricProfiles:b.a.func,selectedHSPIds:b.a.array,revertCompareData:b.a.func,previousStateSystems:b.a.array,exportToCSV:b.a.func};t.default=Object(E.o)(Object(I.connect)((function(e){return{page:e.compareState.page,perPage:e.compareState.perPage,totalFacts:e.compareState.totalFacts,error:e.compareState.error,loading:e.compareState.loading,emptyState:e.compareState.emptyState,selectedHSPIds:e.historicProfilesState.selectedHSPIds,previousStateSystems:e.compareState.previousStateSystems}}),(function(e){return{clearSelectedBaselines:function(t){return e(O.a.clearSelectedBaselines(t))},updatePagination:function(t){return e(M.a.updatePagination(t))},updateReferenceId:function(t){return e(M.a.updateReferenceId(t))},clearComparison:function(){return e(M.a.clearComparison())},clearComparisonFilters:function(){return e(M.a.clearComparisonFilters())},selectHistoricProfiles:function(t){return e(A.a.selectHistoricProfiles(t))},revertCompareData:function(){return e(M.a.revertCompareData())},exportToCSV:function(){return e(M.a.exportToCSV())}}}))(ct))}}]);
//# sourceMappingURL=../sourcemaps/5.js.map