(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{460:function(e,t,a){(e.exports=a(27)(!1)).push([e.i,"",""])},501:function(e,t,a){"use strict";var n=a(592),r=a(45);function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),a(decodeURIComponent(r),s,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[s(t,e),"[",n,"]"].join(""):[s(t,e),"[",s(n,e),"]=",s(a,e)].join("")};case"bracket":return function(t,a){return null===a?s(t,e):[s(t,e),"[]=",s(a,e)].join("")};default:return function(t,a){return null===a?s(t,e):[s(t,e),"=",s(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return s(n,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(a(n,e,o.length))})),o.join("&")}return s(n,t)+"="+s(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},592:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},604:function(e,t,a){var n=a(460);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=a(36)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(460,(function(){var t=a(460);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},612:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(28),o=a.n(s),l=a(29),i=a.n(l),c=a(30),u=a.n(c),d=a(31),m=a.n(d),p=a(32),f=a.n(p),h=a(1),y=a.n(h),g=a(0),v=a.n(g),S=a(20),b=a(33),E=a(329),k=a(477),F=a(478),w=a(496),C=a(498),I=a(497),D=a(195);var O={toggleErrorAlert:function(){return{type:D.a.OPEN_ERROR_ALERT}}},T=a(327),N=a(37),A=a.n(N),x=a(226),M=a(483),R=a(485),j=a(467),P=a(484),B=a(501),_=a.n(B),K=a(442),U=a(439),H=a(434),V=a(436),L=a(435),z=a(432),Y=a(430),$=a(431),q=a(437),G=a(2),J=a.n(G),W=a(488),Q=a(466),X=a(519),Z=a(490),ee=a(211),te=a(518),ae=a(461),ne=a(463),re=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).confirmModal=a.confirmModal.bind(A()(a)),a.cancelSelection=a.cancelSelection.bind(A()(a)),a.changeActiveTab=a.changeActiveTab.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"confirmModal",value:function(){var e=this.props,t=e.confirmModal,a=e.entities,n=e.selectedBaselineIds,r=e.toggleModal;t(a.selectedSystemIds,n),r()}},{key:"cancelSelection",value:function(){this.props.toggleModal()}},{key:"selectedSystemIds",value:function(){var e=this.props.systems.map((function(e){return e.id}));return e||[]}},{key:"selectedBaselineIds",value:function(){var e=this.props.baselines.map((function(e){return e.id}));return e||[]}},{key:"changeActiveTab",value:function(e,t){(0,this.props.selectActiveTab)(t)}},{key:"render",value:function(){var e=this.props,t=e.activeTab,a=e.addSystemModalOpened;return y.a.createElement(y.a.Fragment,null,y.a.createElement(W.a,{title:"Choose systems",isOpen:a,onClose:this.cancelSelection,width:"auto",isFooterLeftAligned:!0,actions:[y.a.createElement(Q.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Submit")]},y.a.createElement(X.a,{activeKey:t,onSelect:this.changeActiveTab},y.a.createElement(Z.a,{eventKey:0,title:"Systems"},y.a.createElement(te.a,{selectedSystemIds:this.selectedSystemIds()})),y.a.createElement(Z.a,{eventKey:1,title:"Baselines"},y.a.createElement(ae.a,{hasSelect:!0})))))}}]),t}(h.Component);re.propTypes={cookies:Object(g.instanceOf)(ee.a).isRequired},re.propTypes={showModal:v.a.bool,addSystemModalOpened:v.a.bool,activeTab:v.a.number,confirmModal:v.a.func,cancelSelection:v.a.func,toggleModal:v.a.func,selectActiveTab:v.a.func,entities:v.a.object,systems:v.a.array,selectedBaselineIds:v.a.array,setSelectedBaselines:v.a.func,baselines:v.a.array};var se=Object(ee.c)(Object(b.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,systems:e.compareState.systems,activeTab:e.addSystemModalState.activeTab,entities:e.entities,selectedBaselineIds:e.baselinesTableState.selectedBaselineIds,baselines:e.compareState.baselines}}),(function(e){return{toggleModal:function(){return e(ne.a.toggleAddSystemModal())},selectActiveTab:function(t){return e(ne.a.selectActiveTab(t))},setSelectedBaselines:function(t){return e(T.a.setSelectedBaselines(t))}}}))(re)),oe=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),i()(t,[{key:"render",value:function(){return y.a.createElement(Q.a,{variant:"primary",onClick:this.props.toggleAddSystemModal},this.props.isTable?"Add":"Add systems or baselines")}}]),t}(h.Component);oe.propTypes={toggleAddSystemModal:v.a.func,isTable:v.a.bool};var le=Object(b.connect)(null,(function(e){return{toggleAddSystemModal:function(){return e(ne.a.toggleAddSystemModal())}}}))(oe),ie=a(433),ce=a(440),ue=a(438),de=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),i()(t,[{key:"icon",value:function(){return"SAME"===this.props.factState?y.a.createElement(ie.b,{color:"green"}):"DIFFERENT"===this.props.factState?y.a.createElement(ce.b,{color:"red"}):y.a.createElement(ue.b,null)}},{key:"render",value:function(){return this.icon()}}]),t}(h.Component);de.propTypes={factState:v.a.string};var me=de,pe=(a(604),a(8));function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.push({search:"?"+_.a.stringify({system_ids:t,baseline_ids:a})})}var he=a(328),ye=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).setSystemIds(),a.setBaselineIds(),a.fetchCompare=a.fetchCompare.bind(A()(a)),a.removeSystem=a.removeSystem.bind(A()(a)),a.formatDate=a.formatDate.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:(0,this.props.fetchCompare)(this.systemIds,this.baselineIds);case 4:case"end":return e.stop()}}),null,this)}},{key:"setSystemIds",value:function(){this.systemIds=_.a.parse(this.props.location.search).system_ids,this.systemIds=Array.isArray(this.systemIds)?this.systemIds:[this.systemIds],this.systemIds=this.systemIds.filter((function(e){return void 0!==e}))}},{key:"setBaselineIds",value:function(){this.baselineIds=_.a.parse(this.props.location.search).baseline_ids,this.baselineIds=Array.isArray(this.baselineIds)?this.baselineIds:[this.baselineIds],this.baselineIds=this.baselineIds.filter((function(e){return void 0!==e}))}},{key:"formatDate",value:function(e){return J.a.utc(e).format("DD MMM YYYY, HH:mm UTC")}},{key:"removeSystem",value:function(e){var t=this.props,a=t.history,n=t.clearState,r=t.setSelectedBaselines,s=t.stateFilters,o=t.addStateFilter;this.systemIds=this.systemIds.filter((function(t){return t!==e})),this.baselineIds=this.baselineIds.filter((function(t){return t!==e})),this.systemIds.length+this.baselineIds.length===1&&s.forEach((function(e){!1===e.selected&&o(e)})),this.systemIds.length>0||this.baselineIds.length>0?this.fetchCompare(this.systemIds,this.baselineIds):(fe(a,[]),n()),r(this.baselineIds)}},{key:"fetchCompare",value:function(e,t){this.systemIds=e,this.baselineIds=t,(e.length>0||t.length>0)&&(fe(this.props.history,e,t),this.props.fetchCompare(e,t))}},{key:"renderRows",value:function(e,t,a){var n=[],r=[];if(void 0!==e)for(var s=0;s<e.length;s+=1)r=this.renderRowData(e[s],t,a),n.push(r);return n}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(y.a.createElement("td",null,y.a.createElement(E.Skeleton,{size:E.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(y.a.createElement("tr",null,t));return e}},{key:"findSystem",value:function(e,t){for(var a=[],n=function(n){var r=e.systems.find((function(e){return e.id===t[n].id}));a.push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""},null===r.value?"No Data":r.value))},r=0;r<t.length;r+=1)n(r);return a}},{key:"renderRowData",value:function(e,t,a){var n=[],r=[],s=t.length+a.length;if(e.comparisons){n.push(y.a.createElement("td",{className:this.props.expandedRows.includes(e.name)?"nested-fact sticky-column fixed-column-1":"sticky-column fixed-column-1"},this.renderExpandableRowButton(this.props.expandedRows,e.name)," ",e.name)),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state})));for(var o=0;o<s+1;o+=1)n.push(y.a.createElement("td",null));r.push(y.a.createElement("tr",null,n));for(var l=0;l<e.comparisons.length;l++)n=this.renderRowChild(e.comparisons[l],t,a),r.push(y.a.createElement("tr",null,n))}else n.push(y.a.createElement("td",{className:"sticky-column fixed-column-1"},e.name)),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state}))),(n=(n=n.concat(this.findSystem(e,a,"baselines"))).concat(this.findSystem(e,t,"systems"))).push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""})),r.push(y.a.createElement("tr",null,n));return r}},{key:"renderRowChild",value:function(e,t,a){var n=[];return n.push(y.a.createElement("td",{className:"nested-fact sticky-column fixed-column-1"},y.a.createElement("p",{className:"child-row"},e.name))),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state}))),(n=(n=n.concat(this.findSystem(e,a,"baselines"))).concat(this.findSystem(e,t,"systems"))).push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""})),n}},{key:"addSystems",value:function(e,t){for(var a=this,n=[],r=function(r){n.push(y.a.createElement("th",null,y.a.createElement("div",{className:"baselines"===t?"baseline-header":"system-header"},y.a.createElement("a",{onClick:function(){return a.removeSystem(e[r].id)}},y.a.createElement(K.b,{className:"remove-system-icon"})),y.a.createElement(U.b,{className:"cluster-icon-large"}),y.a.createElement("div",{className:"system-name"},e[r].display_name),y.a.createElement("div",{className:"system-updated"},!1===e[r].system_profile_exists?y.a.createElement(x.a,{position:"top",content:y.a.createElement("div",null,"System profile does not exist. Please run insights-client on system to upload archive.")},y.a.createElement(H.b,{color:"#f0ab00"})):"",e[r].last_updated?a.formatDate(e[r].last_updated):a.formatDate(e[r].updated)))))},s=0;s<e.length;s++)r(s);return n}},{key:"renderSystems",value:function(e,t){var a,n=[],r=[];return void 0===e&&void 0===t?r:(n=this.addSystems(t,"baselines"),a=this.addSystems(e,"systems"),r=n.concat(a))}},{key:"renderSortButton",value:function(e,t){var a=this;return t===pe.a?y.a.createElement(V.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):t===pe.c?y.a.createElement(L.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):y.a.createElement(z.b,{className:"pointer not-active",onClick:function(){return a.toggleSort(e,t)}})}},{key:"toggleSort",value:function(e,t){"fact"===e?this.props.toggleFactSort(t):this.props.toggleStateSort(t)}},{key:"renderHeaderRow",value:function(e,t,a){var n=this.props.stateSort;return y.a.createElement("tr",{className:"sticky-column-header"},y.a.createElement("th",{className:"fact-header sticky-column fixed-column-1"},y.a.createElement("div",{className:"active-blue"},"Fact ",this.renderSortButton("fact",this.props.factSort))),y.a.createElement("th",{className:"state-header sticky-column fixed-column-2"},""!==n?y.a.createElement("div",{className:"active-blue"},"State ",this.renderSortButton("state",this.props.stateSort)):y.a.createElement("div",null,"State ",this.renderSortButton("state",this.props.stateSort))),this.renderSystems(e,t),y.a.createElement("th",null,a?y.a.createElement(E.Skeleton,{size:E.SkeletonSize.lg}):this.renderAddSystem()))}},{key:"renderExpandableRowButton",value:function(e,t){var a=this;return e.includes(t)?y.a.createElement(Y.b,{className:"pointer active-blue",onClick:function(){return a.props.expandRow(t)}}):y.a.createElement($.b,{className:"pointer",onClick:function(){return a.props.expandRow(t)}})}},{key:"renderEmptyState",value:function(){return y.a.createElement("center",null,y.a.createElement(M.a,null,y.a.createElement(R.a,{icon:q.b}),y.a.createElement("br",null),y.a.createElement(j.a,{size:"lg"},"Add systems or baselines to compare"),y.a.createElement(P.a,null,"You currently have no systems or baselines displayed. Add at least two",y.a.createElement("br",null),"systems or baselines to compare their facts."),y.a.createElement(le,{isTable:!1})))}},{key:"renderAddSystem",value:function(){return y.a.createElement("div",{className:"add-system-header"},y.a.createElement("div",{className:"add-system-icon"},y.a.createElement(q.b,null)),y.a.createElement(le,{isTable:!0}))}},{key:"renderTable",value:function(e,t,a,n){return y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"drift-table-wrapper"},y.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-compact ins-entity-table drift-table"},y.a.createElement("thead",null,this.renderHeaderRow(t,a,n)),y.a.createElement("tbody",null,n?this.renderLoadingRows():this.renderRows(e,t,a)))))}},{key:"render",value:function(){var e=this.props,t=e.fullCompareData,a=e.filteredCompareData,n=e.systems,r=e.baselines,s=e.loading;return y.a.createElement(y.a.Fragment,null,y.a.createElement(se,{selectedSystemIds:n.map((function(e){return e.id})),confirmModal:this.fetchCompare}),n.length>0||r.length>0||s||0!==t.length&&0!==this.systemIds.length?this.renderTable(a,n,r,s):this.renderEmptyState())}}]),t}(h.Component);ye.propTypes={location:v.a.object,history:v.a.object,fetchCompare:v.a.func,clearState:v.a.func,fullCompareData:v.a.array,filteredCompareData:v.a.array,systems:v.a.array,baselines:v.a.array,addSystemModalOpened:v.a.bool,stateFilters:v.a.string,factFilter:v.a.string,factSort:v.a.string,stateSort:v.a.string,loading:v.a.bool,toggleFactSort:v.a.func,toggleStateSort:v.a.func,expandRow:v.a.func,expandRows:v.a.func,expandedRows:v.a.array,setSelectedBaselines:v.a.func,addStateFilter:v.a.func};var ge=Object(S.o)(Object(b.connect)((function(e){return{fullCompareData:e.compareState.fullCompareData,filteredCompareData:e.compareState.filteredCompareData,addSystemModalOpened:e.addSystemModalOpened,stateFilters:e.compareState.stateFilters,factFilter:e.compareState.factFilter,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines,factSort:e.compareState.factSort,stateSort:e.compareState.stateSort,expandedRows:e.compareState.expandedRows}}),(function(e){return{fetchCompare:function(t,a){return e(he.a.fetchCompare(t,a))},toggleFactSort:function(t){return e(he.a.toggleFactSort(t))},toggleStateSort:function(t){return e(he.a.toggleStateSort(t))},expandRow:function(t){return e(he.a.expandRow(t))},clearState:function(){return e(he.a.clearState())},setSelectedBaselines:function(t){return e(T.a.setSelectedBaselines(t))},addStateFilter:function(t){return e(he.a.addStateFilter(t))}}}))(ye)),ve=a(479),Se=a(316),be=a(471),Ee=a(196);var ke={toggleFilterDropDown:function(){return{type:Ee.a.OPEN_FILTER_DROPDOWN}}},Fe=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).onToggle=a.onToggle.bind(A()(a)),a.createDropdownItem=a.createDropdownItem.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"onToggle",value:function(){this.props.toggleDropDown()}},{key:"createDropdownItem",value:function(e){var t=this;return y.a.createElement(ve.a,{className:"state-filter-checkbox",label:e.display,isChecked:e.selected,onChange:function(){return t.props.addStateFilter(e)}})}},{key:"createDropdownArray",value:function(e){var t=[];return e.forEach(function(e){var a=this.createDropdownItem(e);t.push(a)}.bind(this)),t}},{key:"createSelectedViewsString",value:function(e){for(var t=[],a="",n=0;n<e.length;n++)e[n].selected&&t.push(e[n].display);for(var r=0;r<t.length;r++)a+=t[r],r+1<t.length&&(a+=", ");return a}},{key:"render",value:function(){var e,t,a=this.props.stateFilters;return e=this.createDropdownArray(a),t=this.createSelectedViewsString(a),y.a.createElement(y.a.Fragment,null,y.a.createElement(Se.a,{className:"state-filter-dropdown",onSelect:this.onToggle,toggle:y.a.createElement(be.a,{onToggle:this.onToggle},"View: ",t),isOpen:this.props.filterDropdownOpened,dropdownItems:e}))}}]),t}(h.Component);Fe.propTypes={toggleDropDown:v.a.func,filterDropdownOpened:v.a.bool,stateFilters:v.a.array,addStateFilter:v.a.func};var we=Object(b.connect)((function(e){return{filterDropdownOpened:e.filterDropdownOpened,stateFilters:e.compareState.stateFilters}}),(function(e){return{toggleDropDown:function(){return e(ke.toggleFilterDropDown())},addStateFilter:function(t){return e(he.a.addStateFilter(t))}}}))(Fe),Ce=a(508),Ie=a.n(Ce),De=a(481),Oe=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).updateFactFilter=function(e){a.setState({filter:e}),a.setFactFilter(e)},a.setFactFilter=Ie()((function(e){this.props.changeFactFilter(e)}),250),a.state={filter:a.props.factFilter},a.setFactFilter=a.setFactFilter.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"render",value:function(){return y.a.createElement(y.a.Fragment,null,y.a.createElement(De.a,{value:this.state.filter,id:"filterByFact",placeholder:"Filter by fact",onChange:this.updateFactFilter,"aria-label":"filter by fact"}))}}]),t}(h.Component);Oe.propTypes={changeFactFilter:v.a.func,factFilter:v.a.string};var Te=Object(b.connect)((function(e){return{factFilter:e.compareState.factFilter}}),(function(e){return{changeFactFilter:function(t){return e(he.a.filterByFact(t))}}}))(Oe),Ne=a(197);var Ae={toggleKebab:function(){return{type:Ne.a.TOGGLE_KEBAB}}},xe=a(315),Me=a(317),Re=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).removeSystemsSelect=a.removeSystemsSelect.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"removeSystemsSelect",value:function(){var e=this.props,t=e.history,a=e.toggleKebab,n=e.removeSystems,r=e.clearSelectedBaselines;a(),n(),r(),fe(t,[])}},{key:"render",value:function(){var e=[y.a.createElement(xe.a,{key:"remove-systems",component:"button",onClick:this.removeSystemsSelect},"Clear all comparisons")];return y.a.createElement(Se.a,{style:{float:"left"},className:"action-kebab",toggle:y.a.createElement(Me.a,{onToggle:this.props.toggleKebab}),isOpen:this.props.kebabOpened,dropdownItems:e,isPlain:!0})}}]),t}(h.Component);Re.propTypes={removeSystems:v.a.func,clearSelectedBaselines:v.a.func,toggleKebab:v.a.func,kebabOpened:v.a.bool,history:v.a.object};var je=Object(S.o)(Object(b.connect)((function(e){return{kebabOpened:e.kebabOpened}}),(function(e){return{removeSystems:function(){return e(he.a.clearState())},clearSelectedBaselines:function(){return e(T.a.clearSelectedBaselines())},toggleKebab:function(){return e(Ae.toggleKebab())}}}))(Re)),Pe=a(513),Be=a(470),_e=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).confirmModal=a.confirmModal.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"confirmModal",value:function(){var e=this.props,t=e.toggleModal,a=e.revertCompareData,n=e.history,r=e.previousStateSystems;t(),a(),fe(n,r.map((function(e){return e.id})))}},{key:"render",value:function(){var e=this,t=this.props.errorAlertOpened;return y.a.createElement(y.a.Fragment,null,t&&y.a.createElement(Pe.a,{variant:"danger",title:"Error",action:y.a.createElement(Be.a,{onClose:function(){return e.confirmModal()}})},"Status Code: ",this.props.error.status,y.a.createElement("br",null),this.props.error.detail))}}]),t}(h.Component);_e.propTypes={confirmModal:v.a.func,errorAlertOpened:v.a.bool,error:v.a.object,status:v.a.number,detail:v.a.string,toggleModal:v.a.func,history:v.a.object,clearState:v.a.func,fullCompareData:v.a.array,revertCompareData:v.a.func,previousStateSystems:v.a.array};var Ke=Object(S.o)(Object(b.connect)((function(e){return{fullCompareData:e.compareState.fullCompareData,previousStateSystems:e.compareState.previousStateSystems,errorAlertOpened:e.errorAlertOpened,error:e.compareState.error}}),(function(e){return{toggleModal:function(){return e(O.toggleErrorAlert())},revertCompareData:function(){return e(he.a.revertCompareData())}}}))(_e)),Ue=a(512),He=a(5),Ve=[{title:"10",value:10},{title:"25",value:25},{title:"50",value:50},{title:"100",value:100}],Le=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).onSetPage=a.onSetPage.bind(A()(a)),a.onPerPageSelect=a.onPerPageSelect.bind(A()(a)),a}return f()(t,e),i()(t,[{key:"onSetPage",value:function(e,t){var a={page:t,perPage:this.props.perPage};this.props.updatePagination(a)}},{key:"onPerPageSelect",value:function(e,t){var a={page:1,perPage:t};this.props.updatePagination(a)}},{key:"render",value:function(){var e=this.props,t=e.totalFacts,a=e.page,n=e.perPage;return y.a.createElement(Ue.a,{itemCount:t,perPageOptions:Ve,page:0===t?0:a,perPage:n,dropDirection:He.c.down,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect})}}]),t}(h.Component);Le.propTypes={perPage:v.a.number,page:v.a.number,updatePagination:v.a.func,totalFacts:v.a.number};var ze=Object(b.connect)((function(e){return{page:e.compareState.page,perPage:e.compareState.perPage,totalFacts:e.compareState.totalFacts}}),(function(e){return{updatePagination:function(t){return e(he.a.updatePagination(t))}}}))(Le),Ye=a(443),$e=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.exportToCSV;return y.a.createElement(Ye.b,{className:"pointer not-active export-button-margin",onClick:e})}}]),t}(h.Component);$e.propTypes={exportToCSV:v.a.func};var qe=Object(b.connect)(null,(function(e){return{exportToCSV:function(){return e(he.a.exportToCSV())}}}))($e),Ge=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).props.clearSelectedBaselines(),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"render",value:function(){var e=this.props,t=e.systems,a=e.baselines,n=e.loading;return this.props.error.detail&&this.props.toggleErrorAlert(),y.a.createElement(y.a.Fragment,null,y.a.createElement(E.PageHeader,null,y.a.createElement(E.PageHeaderTitle,{title:"System Comparison"})),y.a.createElement(E.Main,null,y.a.createElement(Ke,null),y.a.createElement(k.a,{className:"pf-t-light pf-m-opaque-100"},y.a.createElement(F.a,null,(t.length>0||a.length>0)&&!n?y.a.createElement(w.a,{className:"drift-toolbar"},y.a.createElement(C.a,null,y.a.createElement(I.a,null,y.a.createElement(Te,null)),y.a.createElement(I.a,null,y.a.createElement(we,null)),y.a.createElement(I.a,null,y.a.createElement(qe,null)),y.a.createElement(I.a,null,y.a.createElement(je,null))),y.a.createElement(C.a,{className:"pf-c-pagination"},y.a.createElement(I.a,null,y.a.createElement(ze,null)))):null,y.a.createElement("div",null,y.a.createElement(ge,null))),t.length>0&&!n?y.a.createElement(w.a,{className:"drift-toolbar"},y.a.createElement(C.a,{className:"pf-c-pagination"},y.a.createElement(I.a,null,y.a.createElement(ze,null)))):null)))}}]),t}(h.Component);Ge.propTypes={error:v.a.object,loading:v.a.bool,systems:v.a.array,baselines:v.a.array,toggleErrorAlert:v.a.func,clearSelectedBaselines:v.a.func};t.default=Object(S.o)(Object(b.connect)((function(e){return{error:e.compareState.error,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines}}),(function(e){return{toggleErrorAlert:function(){return e(O.toggleErrorAlert())},clearSelectedBaselines:function(){return e(T.a.clearSelectedBaselines())}}}))(Ge))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map