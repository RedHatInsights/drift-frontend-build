(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{475:function(e,t,a){(e.exports=a(21)(!1)).push([e.i,"",""])},514:function(e,t,a){"use strict";var n=a(598),r=a(51);function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),a(decodeURIComponent(r),s,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[s(t,e),"[",n,"]"].join(""):[s(t,e),"[",s(n,e),"]=",s(a,e)].join("")};case"bracket":return function(t,a){return null===a?s(t,e):[s(t,e),"[]=",s(a,e)].join("")};default:return function(t,a){return null===a?s(t,e):[s(t,e),"=",s(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return s(n,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(a(n,e,o.length))})),o.join("&")}return s(n,t)+"="+s(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},598:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},610:function(e,t,a){var n=a(475);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=a(24)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(475,(function(){var t=a(475);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},617:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),s=a(28),o=a.n(s),i=a(29),l=a.n(i),c=a(30),u=a.n(c),d=a(31),m=a.n(d),p=a(32),f=a.n(p),h=a(1),y=a.n(h),g=a(0),v=a.n(g),b=a(37),S=a(33),E=a(361),I=a(490),k=a(491),C=a(509),w=a(511),F=a(510),T=a(213);var D={toggleErrorAlert:function(){return{type:T.a.OPEN_ERROR_ALERT}}},P=a(367),O=a(39),A=a.n(O),N=a(253),x=a(497),M=a(499),R=a(227),j=a(498),B=a(514),H=a.n(B),_=a(457),K=a(454),L=a(449),U=a(451),Y=a(450),z=a(446),V=a(444),$=a(445),q=a(452),G=a(2),J=a.n(G),W=a(349),Q=a(256),X=a(530),Z=a(503),ee=a(231),te=a(533),ae=a(476),ne=a(478),re=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).confirmModal=a.confirmModal.bind(A()(a)),a.cancelSelection=a.cancelSelection.bind(A()(a)),a.changeActiveTab=a.changeActiveTab.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"confirmModal",value:function(){var e=this.props,t=e.confirmModal,a=e.entities,n=e.selectedBaselineIds,r=e.toggleModal;t(a.selectedSystemIds,n),r()}},{key:"cancelSelection",value:function(){this.props.toggleModal()}},{key:"selectedSystemIds",value:function(){var e=this.props.systems.map((function(e){return e.id}));return e||[]}},{key:"selectedBaselineIds",value:function(){var e=this.props.baselines.map((function(e){return e.id}));return e||[]}},{key:"changeActiveTab",value:function(e,t){(0,this.props.selectActiveTab)(t)}},{key:"render",value:function(){var e=this.props,t=e.activeTab,a=e.addSystemModalOpened;return y.a.createElement(y.a.Fragment,null,y.a.createElement(W.a,{title:"Choose systems",isOpen:a,onClose:this.cancelSelection,width:"auto",isFooterLeftAligned:!0,actions:[y.a.createElement(Q.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Submit")]},y.a.createElement(X.a,{activeKey:t,onSelect:this.changeActiveTab},y.a.createElement(Z.a,{eventKey:0,title:"Systems"},y.a.createElement(te.a,{selectedSystemIds:this.selectedSystemIds()})),y.a.createElement(Z.a,{eventKey:1,title:"Baselines"},y.a.createElement(ae.a,{hasSelect:!0})))))}}]),t}(h.Component);re.propTypes={cookies:Object(g.instanceOf)(ee.a).isRequired},re.propTypes={showModal:v.a.bool,addSystemModalOpened:v.a.bool,activeTab:v.a.number,confirmModal:v.a.func,cancelSelection:v.a.func,toggleModal:v.a.func,selectActiveTab:v.a.func,entities:v.a.object,systems:v.a.array,selectedBaselineIds:v.a.array,baselines:v.a.array};var se=Object(ee.c)(Object(S.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,systems:e.compareState.systems,activeTab:e.addSystemModalState.activeTab,entities:e.entities,selectedBaselineIds:e.baselinesTableState.selectedBaselineIds,baselines:e.compareState.baselines}}),(function(e){return{toggleModal:function(){return e(ne.a.toggleAddSystemModal())},selectActiveTab:function(t){return e(ne.a.selectActiveTab(t))}}}))(re)),oe=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),l()(t,[{key:"render",value:function(){return y.a.createElement(Q.a,{variant:"primary",onClick:this.props.toggleAddSystemModal},this.props.isTable?"Add":"Add systems or baselines")}}]),t}(h.Component);oe.propTypes={toggleAddSystemModal:v.a.func,isTable:v.a.bool};var ie=Object(S.connect)(null,(function(e){return{toggleAddSystemModal:function(){return e(ne.a.toggleAddSystemModal())}}}))(oe),le=a(447),ce=a(455),ue=a(453),de=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),l()(t,[{key:"icon",value:function(){return"SAME"===this.props.factState?y.a.createElement(le.b,{color:"green"}):"DIFFERENT"===this.props.factState?y.a.createElement(ce.b,{color:"red"}):y.a.createElement(ue.b,null)}},{key:"render",value:function(){return this.icon()}}]),t}(h.Component);de.propTypes={factState:v.a.string};var me=de,pe=(a(610),a(9));function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];e.push({search:"?"+H.a.stringify({system_ids:t,baseline_ids:a,pit_ids:n})})}var he=a(350),ye=a(351),ge=a(486),ve=a(448),be=a(492),Se=a(230);var Ee={selectHistoricProfile:function(e){return{type:Se.a.SELECT_HISTORIC_PROFILE,payload:e}}},Ie=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).handleChange=function(){var e=a.state.checked,t=a.props,n=t.selectHistoricProfile,r=t.profile;a.setState({checked:!e}),n(r.id)},a.state={checked:a.props.selectedPITIds.some((function(e){return e===a.props.profile.id}))},a}return f()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.profile,t=this.state.checked;return y.a.createElement(y.a.Fragment,null,y.a.createElement(be.a,{label:J.a.utc(e.created).format("DD MMM YYYY, HH:mm UTC"),isChecked:t,onChange:this.handleChange,"aria-label":e.id,id:e.id,name:e.id}))}}]),t}(h.Component);Ie.propTypes={profile:v.a.object,selectHistoricProfile:v.a.func,selectedPITIds:v.a.array};var ke=Object(S.connect)((function(e){return{selectedPITIds:e.historicProfilesState.selectedPITIds}}),(function(e){return{selectHistoricProfile:function(t){return e(Ee.selectHistoricProfile(t))}}}))(Ie),Ce=a(49),we=a(360),Fe=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).fetchHistoricalComparison=function(){var e=a.props,t=e.baselines,n=e.systems,r=e.selectedPITIds,s=e.fetchCompare,o=e.history,i=t.map((function(e){return e.id})),l=n.map((function(e){return e.id}));fe(o,l,i,r),s(l,i,r)},a}return f()(t,e),l()(t,[{key:"render",value:function(){return y.a.createElement(Q.a,{className:"fetch-historic-button",style:{float:"left"},variant:"primary",onClick:this.fetchHistoricalComparison},"Compare")}}]),t}(h.Component);Fe.propTypes={fetchHistoricalComparison:v.a.func,baselines:v.a.array,systems:v.a.array,selectedPITIds:v.a.array,fetchCompare:v.a.func,location:v.a.object,history:v.a.object};var Te=Object(b.o)(Object(S.connect)((function(e){return{baselines:e.compareState.baselines,systems:e.compareState.systems,selectedPITIds:e.historicProfilesState.selectedPITIds}}),(function(e){return{fetchCompare:function(t,a,n){return e(we.a.fetchCompare(t,a,n))}}}))(Fe)),De=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).createDropdownArray=function(e){var t=[];return e.profiles.forEach((function(e){t.push(y.a.createElement(he.a,null,y.a.createElement(ke,{profile:e})))})),t.push(y.a.createElement(Te,null)),t},a.state={isOpen:!1,historicalData:a.renderLoadingRows()},a.onToggle=function(){var e=a.state.isOpen;!1===e&&a.fetchData(a.props.systemId),a.setState({isOpen:!e})},a}return f()(t,e),l()(t,[{key:"fetchData",value:function(e){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(Ce.a.fetchHistoricalData(e));case 2:t=a.sent,this.setState({historicalData:this.createDropdownArray(t)});case 4:case"end":return a.stop()}}),null,this)}},{key:"renderLoadingRows",value:function(){for(var e=[],t=0;t<3;t+=1)e.push(y.a.createElement(E.Skeleton,{className:"pit-dropdown-loading pit-button",size:E.SkeletonSize.sm})),e.push(y.a.createElement("br",null));return e}},{key:"render",value:function(){var e=this.state,t=e.isOpen,a=e.historicalData;return y.a.createElement(y.a.Fragment,null,y.a.createElement(ye.a,{toggle:y.a.createElement(ge.a,{iconComponent:null,onToggle:this.onToggle},y.a.createElement(ve.b,null)),isOpen:t,isPlain:!0,dropdownItems:a}))}}]),t}(h.Component);De.propTypes={fetchHistoricalData:v.a.func,systemId:v.a.string};var Pe=De,Oe=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).setSystemIds(),a.setBaselineIds(),a.setPITIds(),a.fetchCompare=a.fetchCompare.bind(A()(a)),a.removeSystem=a.removeSystem.bind(A()(a)),a.formatDate=a.formatDate.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:(0,this.props.fetchCompare)(this.systemIds,this.baselineIds,this.PITIds);case 4:case"end":return e.stop()}}),null,this)}},{key:"setSystemIds",value:function(){this.systemIds=H.a.parse(this.props.location.search).system_ids,this.systemIds=Array.isArray(this.systemIds)?this.systemIds:[this.systemIds],this.systemIds=this.systemIds.filter((function(e){return void 0!==e}))}},{key:"setBaselineIds",value:function(){this.baselineIds=H.a.parse(this.props.location.search).baseline_ids,this.baselineIds=Array.isArray(this.baselineIds)?this.baselineIds:[this.baselineIds],this.baselineIds=this.baselineIds.filter((function(e){return void 0!==e}))}},{key:"setPITIds",value:function(){this.PITIds=H.a.parse(this.props.location.search).pit_ids,this.PITIds=Array.isArray(this.PITIds)?this.PITIds:[this.PITIds],this.PITIds=this.PITIds.filter((function(e){return void 0!==e}))}},{key:"formatDate",value:function(e){return J.a.utc(e).format("DD MMM YYYY, HH:mm UTC")}},{key:"removeSystem",value:function(e){var t=this.props,a=t.history,n=t.clearState,r=t.setSelectedBaselines,s=t.stateFilters,o=t.addStateFilter;this.systemIds=this.systemIds.filter((function(t){return t!==e})),this.baselineIds=this.baselineIds.filter((function(t){return t!==e})),this.systemIds.length+this.baselineIds.length===1&&s.forEach((function(e){!1===e.selected&&o(e)})),this.systemIds.length>0||this.baselineIds.length>0?this.fetchCompare(this.systemIds,this.baselineIds):(fe(a,[]),n()),r(this.baselineIds)}},{key:"fetchCompare",value:function(e,t){this.systemIds=e,this.baselineIds=t,(e.length>0||t.length>0)&&(fe(this.props.history,e,t),this.props.fetchCompare(e,t))}},{key:"renderRows",value:function(e,t,a){var n=[],r=[];if(void 0!==e)for(var s=0;s<e.length;s+=1)r=this.renderRowData(e[s],t,a),n.push(r);return n}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(y.a.createElement("td",null,y.a.createElement(E.Skeleton,{size:E.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(y.a.createElement("tr",null,t));return e}},{key:"findSystem",value:function(e,t){for(var a=[],n=function(n){var r=e.systems.find((function(e){return e.id===t[n].id}));a.push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""},null===r.value?"No Data":r.value))},r=0;r<t.length;r+=1)n(r);return a}},{key:"renderRowData",value:function(e,t,a){var n=[],r=[],s=t.length+a.length;if(e.comparisons){n.push(y.a.createElement("td",{className:this.props.expandedRows.includes(e.name)?"nested-fact sticky-column fixed-column-1":"sticky-column fixed-column-1"},this.renderExpandableRowButton(this.props.expandedRows,e.name)," ",e.name)),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state})));for(var o=0;o<s+1;o+=1)n.push(y.a.createElement("td",null));if(r.push(y.a.createElement("tr",null,n)),this.props.expandedRows.includes(e.name))for(var i=0;i<e.comparisons.length;i++)n=this.renderRowChild(e.comparisons[i],t,a),r.push(y.a.createElement("tr",null,n))}else n.push(y.a.createElement("td",{className:"sticky-column fixed-column-1"},e.name)),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state}))),(n=(n=n.concat(this.findSystem(e,a,"baselines"))).concat(this.findSystem(e,t,"systems"))).push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""})),r.push(y.a.createElement("tr",null,n));return r}},{key:"renderRowChild",value:function(e,t,a){var n=[];return n.push(y.a.createElement("td",{className:"nested-fact sticky-column fixed-column-1"},y.a.createElement("p",{className:"child-row"},e.name))),n.push(y.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},y.a.createElement(me,{factState:e.state}))),(n=(n=n.concat(this.findSystem(e,a,"baselines"))).concat(this.findSystem(e,t,"systems"))).push(y.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight":""})),n}},{key:"addSystems",value:function(e,t){for(var a=this,n=[],r=function(r){n.push(y.a.createElement("th",null,y.a.createElement("div",{className:"baselines"===t?"baseline-header":"system-header"},y.a.createElement("a",{onClick:function(){return a.removeSystem(e[r].id)}},y.a.createElement(_.b,{className:"remove-system-icon"})),y.a.createElement(K.b,{className:"cluster-icon-large"}),y.a.createElement("div",{className:"system-name"},e[r].display_name),y.a.createElement("div",{className:"system-updated"},!1===e[r].system_profile_exists?y.a.createElement(N.a,{position:"top",content:y.a.createElement("div",null,"System profile does not exist. Please run insights-client on system to upload archive.")},y.a.createElement(L.b,{color:"#f0ab00"})):"",e[r].last_updated?a.formatDate(e[r].last_updated):a.formatDate(e[r].updated),insights.chrome.isBeta()&&"systems"===t?y.a.createElement(Pe,{systemId:e[r].id}):null))))},s=0;s<e.length;s++)r(s);return n}},{key:"renderSystems",value:function(e,t){var a,n=[],r=[];return void 0===e&&void 0===t?r:(n=this.addSystems(t,"baselines"),a=this.addSystems(e,"systems"),r=n.concat(a))}},{key:"renderSortButton",value:function(e,t){var a=this;return t===pe.a?y.a.createElement(U.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):t===pe.c?y.a.createElement(Y.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):y.a.createElement(z.b,{className:"pointer not-active",onClick:function(){return a.toggleSort(e,t)}})}},{key:"toggleSort",value:function(e,t){"fact"===e?this.props.toggleFactSort(t):this.props.toggleStateSort(t)}},{key:"renderHeaderRow",value:function(e,t,a){var n=this.props.stateSort;return y.a.createElement("tr",{className:"sticky-column-header"},y.a.createElement("th",{className:"fact-header sticky-column fixed-column-1"},y.a.createElement("div",{className:"active-blue"},"Fact ",this.renderSortButton("fact",this.props.factSort))),y.a.createElement("th",{className:"state-header sticky-column fixed-column-2"},""!==n?y.a.createElement("div",{className:"active-blue"},"State ",this.renderSortButton("state",this.props.stateSort)):y.a.createElement("div",null,"State ",this.renderSortButton("state",this.props.stateSort))),this.renderSystems(e,t),y.a.createElement("th",null,a?y.a.createElement(E.Skeleton,{size:E.SkeletonSize.lg}):this.renderAddSystem()))}},{key:"renderExpandableRowButton",value:function(e,t){var a=this;return e.includes(t)?y.a.createElement(V.b,{className:"pointer active-blue",onClick:function(){return a.props.expandRow(t)}}):y.a.createElement($.b,{className:"pointer",onClick:function(){return a.props.expandRow(t)}})}},{key:"renderEmptyState",value:function(){return y.a.createElement("center",null,y.a.createElement(x.a,null,y.a.createElement(M.a,{icon:q.b}),y.a.createElement("br",null),y.a.createElement(R.a,{size:"lg"},"Add systems or baselines to compare"),y.a.createElement(j.a,null,"You currently have no systems or baselines displayed. Add at least two",y.a.createElement("br",null),"systems or baselines to compare their facts."),y.a.createElement(ie,{isTable:!1})))}},{key:"renderAddSystem",value:function(){return y.a.createElement("div",{className:"add-system-header"},y.a.createElement("div",{className:"add-system-icon"},y.a.createElement(q.b,null)),y.a.createElement(ie,{isTable:!0}))}},{key:"renderTable",value:function(e,t,a,n){return y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"drift-table-wrapper"},y.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-compact ins-entity-table drift-table"},y.a.createElement("thead",null,this.renderHeaderRow(t,a,n)),y.a.createElement("tbody",null,n?this.renderLoadingRows():this.renderRows(e,t,a)))))}},{key:"render",value:function(){var e=this.props,t=e.fullCompareData,a=e.filteredCompareData,n=e.systems,r=e.baselines,s=e.loading;return y.a.createElement(y.a.Fragment,null,y.a.createElement(se,{selectedSystemIds:n.map((function(e){return e.id})),confirmModal:this.fetchCompare}),n.length>0||r.length>0||s||0!==t.length&&0!==this.systemIds.length?this.renderTable(a,n,r,s):this.renderEmptyState())}}]),t}(h.Component);Oe.propTypes={location:v.a.object,history:v.a.object,fetchCompare:v.a.func,clearState:v.a.func,fullCompareData:v.a.array,filteredCompareData:v.a.array,systems:v.a.array,baselines:v.a.array,addSystemModalOpened:v.a.bool,stateFilters:v.a.string,factFilter:v.a.string,factSort:v.a.string,stateSort:v.a.string,loading:v.a.bool,toggleFactSort:v.a.func,toggleStateSort:v.a.func,expandRow:v.a.func,expandRows:v.a.func,expandedRows:v.a.array,setSelectedBaselines:v.a.func,addStateFilter:v.a.func};var Ae=Object(b.o)(Object(S.connect)((function(e){return{fullCompareData:e.compareState.fullCompareData,filteredCompareData:e.compareState.filteredCompareData,addSystemModalOpened:e.addSystemModalOpened,stateFilters:e.compareState.stateFilters,factFilter:e.compareState.factFilter,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines,factSort:e.compareState.factSort,stateSort:e.compareState.stateSort,expandedRows:e.compareState.expandedRows}}),(function(e){return{fetchCompare:function(t,a,n){return e(we.a.fetchCompare(t,a,n))},toggleFactSort:function(t){return e(we.a.toggleFactSort(t))},toggleStateSort:function(t){return e(we.a.toggleStateSort(t))},expandRow:function(t){return e(we.a.expandRow(t))},clearState:function(){return e(we.a.clearState())},setSelectedBaselines:function(t){return e(P.a.setSelectedBaselines(t))},addStateFilter:function(t){return e(we.a.addStateFilter(t))}}}))(Oe)),Ne=a(214);var xe={toggleFilterDropDown:function(){return{type:Ne.a.OPEN_FILTER_DROPDOWN}}},Me=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).onToggle=a.onToggle.bind(A()(a)),a.createDropdownItem=a.createDropdownItem.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"onToggle",value:function(){this.props.toggleDropDown()}},{key:"createDropdownItem",value:function(e){var t=this;return y.a.createElement(be.a,{className:"state-filter-checkbox",label:e.display,isChecked:e.selected,onChange:function(){return t.props.addStateFilter(e)}})}},{key:"createDropdownArray",value:function(e){var t=[];return e.forEach(function(e){var a=this.createDropdownItem(e);t.push(a)}.bind(this)),t}},{key:"createSelectedViewsString",value:function(e){for(var t=[],a="",n=0;n<e.length;n++)e[n].selected&&t.push(e[n].display);for(var r=0;r<t.length;r++)a+=t[r],r+1<t.length&&(a+=", ");return a}},{key:"render",value:function(){var e,t,a=this.props.stateFilters;return e=this.createDropdownArray(a),t=this.createSelectedViewsString(a),y.a.createElement(y.a.Fragment,null,y.a.createElement(ye.a,{className:"state-filter-dropdown",onSelect:this.onToggle,toggle:y.a.createElement(ge.a,{onToggle:this.onToggle},"View: ",t),isOpen:this.props.filterDropdownOpened,dropdownItems:e}))}}]),t}(h.Component);Me.propTypes={toggleDropDown:v.a.func,filterDropdownOpened:v.a.bool,stateFilters:v.a.array,addStateFilter:v.a.func};var Re=Object(S.connect)((function(e){return{filterDropdownOpened:e.filterDropdownOpened,stateFilters:e.compareState.stateFilters}}),(function(e){return{toggleDropDown:function(){return e(xe.toggleFilterDropDown())},addStateFilter:function(t){return e(we.a.addStateFilter(t))}}}))(Me),je=a(521),Be=a.n(je),He=a(494),_e=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).updateFactFilter=function(e){a.setState({filter:e}),a.setFactFilter(e)},a.setFactFilter=Be()((function(e){this.props.changeFactFilter(e)}),250),a.state={filter:a.props.factFilter},a.setFactFilter=a.setFactFilter.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"render",value:function(){return y.a.createElement(y.a.Fragment,null,y.a.createElement(He.a,{value:this.state.filter,id:"filterByFact",placeholder:"Filter by fact",onChange:this.updateFactFilter,"aria-label":"filter by fact"}))}}]),t}(h.Component);_e.propTypes={changeFactFilter:v.a.func,factFilter:v.a.string};var Ke=Object(S.connect)((function(e){return{factFilter:e.compareState.factFilter}}),(function(e){return{changeFactFilter:function(t){return e(we.a.filterByFact(t))}}}))(_e),Le=a(215);var Ue={toggleKebab:function(){return{type:Le.a.TOGGLE_KEBAB}}},Ye=a(352),ze=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).removeSystemsSelect=a.removeSystemsSelect.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"removeSystemsSelect",value:function(){var e=this.props,t=e.history,a=e.toggleKebab,n=e.removeSystems,r=e.clearSelectedBaselines;a(),n(),r(),fe(t,[])}},{key:"render",value:function(){var e=[y.a.createElement(he.a,{key:"remove-systems",component:"button",onClick:this.removeSystemsSelect},"Clear all comparisons")];return y.a.createElement(ye.a,{style:{float:"left"},className:"action-kebab",toggle:y.a.createElement(Ye.a,{onToggle:this.props.toggleKebab}),isOpen:this.props.kebabOpened,dropdownItems:e,isPlain:!0})}}]),t}(h.Component);ze.propTypes={removeSystems:v.a.func,clearSelectedBaselines:v.a.func,toggleKebab:v.a.func,kebabOpened:v.a.bool,history:v.a.object};var Ve=Object(b.o)(Object(S.connect)((function(e){return{kebabOpened:e.kebabOpened}}),(function(e){return{removeSystems:function(){return e(we.a.clearState())},clearSelectedBaselines:function(){return e(P.a.clearSelectedBaselines())},toggleKebab:function(){return e(Ue.toggleKebab())}}}))(ze)),$e=a(526),qe=a(483),Ge=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).confirmModal=a.confirmModal.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"confirmModal",value:function(){var e=this.props,t=e.toggleModal,a=e.revertCompareData,n=e.history,r=e.previousStateSystems;t(),a(),fe(n,r.map((function(e){return e.id})))}},{key:"render",value:function(){var e=this,t=this.props.errorAlertOpened;return y.a.createElement(y.a.Fragment,null,t&&y.a.createElement($e.a,{variant:"danger",title:"Error",action:y.a.createElement(qe.a,{onClose:function(){return e.confirmModal()}})},"Status Code: ",this.props.error.status,y.a.createElement("br",null),this.props.error.detail))}}]),t}(h.Component);Ge.propTypes={confirmModal:v.a.func,errorAlertOpened:v.a.bool,error:v.a.object,status:v.a.number,detail:v.a.string,toggleModal:v.a.func,history:v.a.object,clearState:v.a.func,fullCompareData:v.a.array,revertCompareData:v.a.func,previousStateSystems:v.a.array};var Je=Object(b.o)(Object(S.connect)((function(e){return{fullCompareData:e.compareState.fullCompareData,previousStateSystems:e.compareState.previousStateSystems,errorAlertOpened:e.errorAlertOpened,error:e.compareState.error}}),(function(e){return{toggleModal:function(){return e(D.toggleErrorAlert())},revertCompareData:function(){return e(we.a.revertCompareData())}}}))(Ge)),We=a(525),Qe=a(6),Xe=[{title:"10",value:10},{title:"25",value:25},{title:"50",value:50},{title:"100",value:100}],Ze=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).onSetPage=a.onSetPage.bind(A()(a)),a.onPerPageSelect=a.onPerPageSelect.bind(A()(a)),a}return f()(t,e),l()(t,[{key:"onSetPage",value:function(e,t){var a={page:t,perPage:this.props.perPage};this.props.updatePagination(a)}},{key:"onPerPageSelect",value:function(e,t){var a={page:1,perPage:t};this.props.updatePagination(a)}},{key:"render",value:function(){var e=this.props,t=e.totalFacts,a=e.page,n=e.perPage;return y.a.createElement(We.a,{itemCount:t,perPageOptions:Xe,page:0===t?0:a,perPage:n,dropDirection:Qe.c.down,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect})}}]),t}(h.Component);Ze.propTypes={perPage:v.a.number,page:v.a.number,updatePagination:v.a.func,totalFacts:v.a.number};var et=Object(S.connect)((function(e){return{page:e.compareState.page,perPage:e.compareState.perPage,totalFacts:e.compareState.totalFacts}}),(function(e){return{updatePagination:function(t){return e(we.a.updatePagination(t))}}}))(Ze),tt=a(458),at=function(e){function t(e){return o()(this,t),u()(this,m()(t).call(this,e))}return f()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.exportToCSV;return y.a.createElement(tt.b,{className:"pointer not-active export-button-margin",onClick:e})}}]),t}(h.Component);at.propTypes={exportToCSV:v.a.func};var nt=Object(S.connect)(null,(function(e){return{exportToCSV:function(){return e(we.a.exportToCSV())}}}))(at),rt=function(e){function t(e){var a;return o()(this,t),(a=u()(this,m()(t).call(this,e))).props.clearSelectedBaselines(),a}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(window.insights.chrome.auth.getUser());case 2:case"end":return e.stop()}}))}},{key:"render",value:function(){var e=this.props,t=e.systems,a=e.baselines,n=e.loading;return this.props.error.detail&&this.props.toggleErrorAlert(),y.a.createElement(y.a.Fragment,null,y.a.createElement(E.PageHeader,null,y.a.createElement(E.PageHeaderTitle,{title:"System Comparison"})),y.a.createElement(E.Main,null,y.a.createElement(Je,null),y.a.createElement(I.a,{className:"pf-t-light pf-m-opaque-100"},y.a.createElement(k.a,null,(t.length>0||a.length>0)&&!n?y.a.createElement(C.a,{className:"drift-toolbar"},y.a.createElement(w.a,null,y.a.createElement(F.a,null,y.a.createElement(Ke,null)),y.a.createElement(F.a,null,y.a.createElement(Re,null)),y.a.createElement(F.a,null,y.a.createElement(nt,null)),y.a.createElement(F.a,null,y.a.createElement(Ve,null))),y.a.createElement(w.a,{className:"pf-c-pagination"},y.a.createElement(F.a,null,y.a.createElement(et,null)))):null,y.a.createElement("div",null,y.a.createElement(Ae,null))),t.length>0&&!n?y.a.createElement(C.a,{className:"drift-toolbar"},y.a.createElement(w.a,{className:"pf-c-pagination"},y.a.createElement(F.a,null,y.a.createElement(et,null)))):null)))}}]),t}(h.Component);rt.propTypes={error:v.a.object,loading:v.a.bool,systems:v.a.array,baselines:v.a.array,toggleErrorAlert:v.a.func,clearSelectedBaselines:v.a.func};t.default=Object(b.o)(Object(S.connect)((function(e){return{error:e.compareState.error,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines}}),(function(e){return{toggleErrorAlert:function(){return e(D.toggleErrorAlert())},clearSelectedBaselines:function(){return e(P.a.clearSelectedBaselines())}}}))(rt))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map