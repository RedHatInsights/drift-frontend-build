(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{660:function(e,t,a){var r=a(661),n=a(662),o=a(663);e.exports=function(e,t){return r(e)||n(e,t)||o()}},661:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},662:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}}},663:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},689:function(e,t,a){"use strict";var r=a(44),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function l(e){return r.isMemo(e)?s:i[e.$$typeof]||n}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=s;var c=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,a,r){if("string"!=typeof a){if(f){var n=m(a);n&&n!==f&&e(t,n,r)}var s=u(a);p&&(s=s.concat(p(a)));for(var i=l(t),h=l(a),y=0;y<s.length;++y){var g=s[y];if(!(o[g]||r&&r[g]||h&&h[g]||i&&i[g])){var S=d(a,g);try{c(t,g,S)}catch(e){}}}}return t}},690:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),o=a(12),s=a.n(o),i=a(28),l=a.n(i),c=a(29),u=a.n(c),p=a(30),d=a.n(p),m=a(31),f=a.n(m),h=a(32),y=a.n(h),g=a(1),S=a.n(g),b=a(0),v=a.n(b),E=a(36),k=a(33),P=a(370),w=a(517),F=a(518),C=a(539),O=a(541),I=a(540),D=a(224);var T,x={toggleErrorAlert:function(){return{type:D.a.OPEN_ERROR_ALERT}}},N=a(77),H=a(25),B=a.n(H),M=a(660),j=a.n(M),A=a(39),R=a.n(A),_=a(262),K=a(526),L=a(528),U=a(233),G=a(527),V=a(544),$=a.n(V),W=a(479),X=a(485),Y=a(471),z=a(480),q=a(473),J=a(477),Q=a(476),Z=a(475),ee=a(469),te=a(467),ae=a(468),re=a(2),ne=a.n(re),oe=a(355),se=a(265),ie=a(564),le=a(533),ce=a(252),ue=a(239),pe=(T=function(e,t){return(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),de=function(){return(de=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},me=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},fe=a(689);var he=a(546),ye=a(563),ge=a(501),Se=a(503),be=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).onSelect=function(e,t,r){var n=a.props,o=n.baselineTableData;(0,n.selectBaseline)(-1===r?o.map((function(e){return e[0]})):[o[r][0]],t,"CHECKBOX")},a.confirmModal=a.confirmModal.bind(R()(a)),a.cancelSelection=a.cancelSelection.bind(R()(a)),a.changeActiveTab=a.changeActiveTab.bind(R()(a)),a.state={columns:[{title:"Name",transforms:[he.a]},{title:"Last updated",transforms:[he.a]}]},a}var a;return y()(t,e),u()(t,[{key:"componentDidMount",value:(a=s()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"confirmModal",value:function(){var e=this.props,t=e.confirmModal,a=e.entities,r=e.selectedBaselineIds,n=e.toggleModal,o=e.selectedHSPIds;t(a.selectedSystemIds,r,o),n()}},{key:"cancelSelection",value:function(){this.props.toggleModal()}},{key:"selectedSystemIds",value:function(){var e=this.props.systems.map((function(e){return e.id}));return e||[]}},{key:"changeActiveTab",value:function(e,t){(0,this.props.selectActiveTab)(t)}},{key:"render",value:function(){var e=this.props,t=e.activeTab,a=e.addSystemModalOpened,r=e.baselineTableData,n=e.historicalProfiles,o=e.loading,s=this.state.columns;return S.a.createElement(S.a.Fragment,null,S.a.createElement(oe.a,{title:"Choose systems",isOpen:a,onClose:this.cancelSelection,width:"auto",isFooterLeftAligned:!0,actions:[S.a.createElement(se.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Submit")]},S.a.createElement(ie.a,{activeKey:t,onSelect:this.changeActiveTab},S.a.createElement(le.a,{eventKey:0,title:"Systems",id:"systems-tab"},S.a.createElement(ye.a,{selectedSystemIds:this.selectedSystemIds(),hasHistoricalDropdown:!0,historicalProfiles:n})),S.a.createElement(le.a,{eventKey:1,title:"Baselines",id:"baselines-tab"},S.a.createElement(ge.a,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:r,loading:o,columns:s})))))}}]),t}(g.Component);be.propTypes={cookies:Object(b.instanceOf)(ce.a).isRequired},be.propTypes={showModal:v.a.bool,addSystemModalOpened:v.a.bool,activeTab:v.a.number,confirmModal:v.a.func,cancelSelection:v.a.func,toggleModal:v.a.func,selectActiveTab:v.a.func,entities:v.a.object,systems:v.a.array,selectedBaselineIds:v.a.array,baselines:v.a.array,selectedHSPIds:v.a.array,loading:v.a.bool,baselineTableData:v.a.array,selectBaseline:v.a.func,historicalProfiles:v.a.array};var ve,Ee,ke,Pe,we=(ve=Object(k.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,systems:e.compareState.systems,activeTab:e.addSystemModalState.activeTab,entities:e.entities,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,baselines:e.compareState.baselines,selectedHSPIds:e.historicProfilesState.selectedHSPIds,loading:e.baselinesTableState.checkboxTable.loading,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,historicalProfiles:e.compareState.historicalProfiles}}),(function(e){return{toggleModal:function(){return e(Se.a.toggleAddSystemModal())},selectActiveTab:function(t){return e(Se.a.selectActiveTab(t))},selectBaseline:function(t,a,r){return e(N.a.selectBaseline(t,a,r))}}}))(be),Ee=ve.displayName||ve.name,ke=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChange=function(){t.forceUpdate()},t}return pe(t,e),t.prototype.listen=function(){this.props.cookies.addChangeListener(this.onChange)},t.prototype.unlisten=function(e){(e||this.props.cookies).removeChangeListener(this.onChange)},t.prototype.componentDidMount=function(){this.listen()},t.prototype.componentDidUpdate=function(e){e.cookies!==this.props.cookies&&(this.unlisten(e.cookies),this.listen())},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var e=this.props,t=e.forwardedRef,a=e.cookies,r=me(e,["forwardedRef","cookies"]),n=a.getAll();return g.createElement(ve,de({},r,{ref:t,cookies:a,allCookies:n}))},t.displayName="withCookies("+Ee+")",t.WrappedComponent=ve,t}(g.Component),(Pe=g.forwardRef((function(e,t){return g.createElement(ue.a,null,(function(a){return g.createElement(ke,de({cookies:a},e,{forwardedRef:t}))}))}))).displayName=ke.displayName,Pe.WrappedComponent=ke.WrappedComponent,fe(Pe,ve)),Fe=function(e){function t(e){return l()(this,t),d()(this,f()(t).call(this,e))}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.toggleAddSystemModal,r=e.isTable;return S.a.createElement(se.a,{className:"add-system-button",variant:"primary",onClick:a,isDisabled:!!t},r?"Add":"Add systems or baselines")}}]),t}(g.Component);Fe.propTypes={toggleAddSystemModal:v.a.func,isTable:v.a.bool,loading:v.a.bool};var Ce=Object(k.connect)(null,(function(e){return{toggleAddSystemModal:function(){return e(Se.a.toggleAddSystemModal())}}}))(Fe),Oe=a(470),Ie=a(472),De=a(478),Te=function(e){function t(e){return l()(this,t),d()(this,f()(t).call(this,e))}return y()(t,e),u()(t,[{key:"icon",value:function(){return"SAME"===this.props.factState?S.a.createElement(Oe.b,{color:"#3E8635",height:"20px",width:"20px"}):"DIFFERENT"===this.props.factState?S.a.createElement(Ie.b,{color:"#C9190B",height:"20px",width:"20px"}):S.a.createElement(De.b,{color:"#151515",height:"20px",width:"20px"})}},{key:"render",value:function(){return this.icon()}}]),t}(g.Component);Te.propTypes={factState:v.a.string};var xe=Te,Ne=a(9),He=a(397),Be=a(561),Me=a(367),je=a(401),Ae=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).removeSystem=function(e){"system"===e.type?(a.systemIds=a.systemIds.filter((function(t){return t!==e.id})),a.HSPIds=a.props.historicalProfiles.filter((function(t){return t.system_id!==e.id})).map((function(e){return e.id}))):"baseline"===e.type?a.baselineIds=a.baselineIds.filter((function(t){return t!==e.id})):"historical-system-profile"===e.type&&(a.HSPIds=a.HSPIds.filter((function(t){return t!==e.id}))),a.props.setSelectedHistoricProfiles(a.HSPIds),a.fetchCompare(a.systemIds,a.baselineIds,a.HSPIds)},a.masterList=[],a.setSystemIds(),a.setBaselineIds(),a.setHSPIds(),a.fetchCompare=a.fetchCompare.bind(R()(a)),a.removeSystem=a.removeSystem.bind(R()(a)),a.formatDate=a.formatDate.bind(R()(a)),a}var a;return y()(t,e),u()(t,[{key:"componentDidMount",value:(a=s()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:(0,this.props.fetchCompare)(this.systemIds,this.baselineIds,this.HSPIds);case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"formatEntities",value:function(e,t,a){var r=[],n={};if(0===e.length&&0===t.length&&0===a.length)return[];e=e.map((function(e){return e.type="system",e})),t=t.map((function(e){return e.type="baseline",e})),(a=a.map((function(e){return e.type="historical-system-profile",e}))).forEach((function(t){var a=e.find((function(e){return e.id===t.system_id}));t.system_last_updated=a.last_updated,n.hasOwnProperty(t.system_id)?n[t.system_id].push(t):n[t.system_id]=[t]})),r=e;for(var o=function(){var t=j()(i[s],2),a=t[0],n=t[1],o=e.find((function(e){return a===e.id})),l=void 0;void 0!==o?(l=r.indexOf(o),r=[].concat(B()(r.slice(0,l+1)),B()(n),B()(r.slice(l+1,r.length)))):r=r.concat(n)},s=0,i=Object.entries(n);s<i.length;s++)o();return t.concat(r)}},{key:"setSystemIds",value:function(){this.systemIds=$.a.parse(this.props.location.search).system_ids,this.systemIds=Array.isArray(this.systemIds)?this.systemIds:[this.systemIds],this.systemIds=this.systemIds.filter((function(e){return void 0!==e}))}},{key:"setBaselineIds",value:function(){this.baselineIds=$.a.parse(this.props.location.search).baseline_ids,this.baselineIds=Array.isArray(this.baselineIds)?this.baselineIds:[this.baselineIds],this.baselineIds=this.baselineIds.filter((function(e){return void 0!==e}))}},{key:"setHSPIds",value:function(){var e=this.props.selectHistoricProfiles;this.HSPIds=$.a.parse(this.props.location.search).hsp_ids,this.HSPIds=Array.isArray(this.HSPIds)?this.HSPIds:[this.HSPIds],this.HSPIds=this.HSPIds.filter((function(e){return void 0!==e})),e(this.HSPIds)}},{key:"formatDate",value:function(e){return ne.a.utc(e).format("DD MMM YYYY, HH:mm UTC")}},{key:"fetchCompare",value:function(e,t,a){this.systemIds=e,this.baselineIds=t,this.HSPIds=a,Object(He.a)(this.props.history,e,t,a),this.props.setSelectedBaselines(this.baselineIds,"CHECKBOX"),this.props.fetchCompare(e,t,a)}},{key:"renderRows",value:function(e){var t=this,a=[];return void 0!==e&&e.forEach((function(e){a.push(t.renderRow(e))})),a}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(S.a.createElement("td",null,S.a.createElement(P.Skeleton,{size:P.SkeletonSize.md})));for(var r=0;r<10;r+=1)e.push(S.a.createElement("tr",null,t));return e}},{key:"findSystem",value:function(e){var t=[],a=void 0;return this.masterList.forEach((function(r){a=e.systems.find((function(e){return e.id===r.id})),t.push(S.a.createElement("td",{className:"DIFFERENT"===e.state?"highlight comparison-cell":"comparison-cell"},null===a.value?"No Data":a.value))})),t}},{key:"renderRow",value:function(e){var t=this,a=[],r=[];return e.comparisons?(a.push(S.a.createElement("td",{className:this.props.expandedRows.includes(e.name)?"nested-fact sticky-column fixed-column-1":"sticky-column fixed-column-1"},this.renderExpandableRowButton(this.props.expandedRows,e.name)," ",e.name)),a.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(xe,{factState:e.state}))),this.masterList.forEach((function(){a.push(S.a.createElement("td",{className:"comparison-cell"}))})),r.push(S.a.createElement("tr",null,a)),this.props.expandedRows.includes(e.name)&&e.comparisons.forEach((function(e){a=t.renderRowChild(e),r.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},a))}))):(a.push(S.a.createElement("td",{className:"sticky-column fixed-column-1"},e.name)),a.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(xe,{factState:e.state}))),a=a.concat(this.findSystem(e)),r.push(S.a.createElement("tr",{className:"DIFFERENT"===e.state?"unexpected-row":""},a))),r}},{key:"renderRowChild",value:function(e){var t=[];return t.push(S.a.createElement("td",{className:"nested-fact sticky-column fixed-column-1"},S.a.createElement("p",{className:"child-row"},e.name))),t.push(S.a.createElement("td",{className:"fact-state sticky-column fixed-column-2"},S.a.createElement(xe,{factState:e.state}))),t=t.concat(this.findSystem(e))}},{key:"renderSystemHeaders",value:function(){var e=this,t=[],a="";return this.masterList.forEach((function(r){"system"===r.type?a=S.a.createElement(W.b,null):"baseline"===r.type?a=S.a.createElement(X.b,null):"historical-system-profile"===r.type&&(a=S.a.createElement(Y.b,null)),t.push(S.a.createElement("th",{"header-id":r.id,key:r.id,className:"drift-header ".concat(r.type,"-header")},S.a.createElement("div",null,S.a.createElement("a",{onClick:function(){return e.removeSystem(r)},className:"remove-system-icon"},S.a.createElement(z.b,null))),S.a.createElement("div",{className:"comparison-header"},S.a.createElement("div",{className:"drift-header-icon"},a),S.a.createElement("div",{className:"system-name"},r.display_name),S.a.createElement("div",{className:"system-updated"},!1===r.system_profile_exists?S.a.createElement(_.a,{position:"top",content:S.a.createElement("div",null,"System profile does not exist. Please run insights-client on system to upload archive.")},S.a.createElement(q.b,{color:"#f0ab00"})):"",r.last_updated?e.formatDate(r.last_updated):e.formatDate(r.updated),insights.chrome.isBeta()&&("system"===r.type||"historical-system-profile"===r.type)?S.a.createElement(Be.a,{system:r,systemIds:e.systemIds}):null))))})),t}},{key:"renderSortButton",value:function(e,t){var a=this;return t===Ne.a?S.a.createElement(Q.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):t===Ne.c?S.a.createElement(Z.b,{className:"pointer active-blue",onClick:function(){return a.toggleSort(e,t)}}):S.a.createElement(ee.b,{className:"pointer not-active",onClick:function(){return a.toggleSort(e,t)}})}},{key:"toggleSort",value:function(e,t){"fact"===e?this.props.toggleFactSort(t):this.props.toggleStateSort(t)}},{key:"renderHeaderRow",value:function(){var e=this.props.stateSort;return S.a.createElement("tr",{className:"sticky-column-header"},S.a.createElement("th",{className:"fact-header sticky-column fixed-column-1",key:"fact-header"},S.a.createElement("div",{className:"active-blue"},"Fact ",this.renderSortButton("fact",this.props.factSort))),S.a.createElement("th",{className:"state-header sticky-column fixed-column-2",key:"state-header"},""!==e?S.a.createElement("div",{className:"active-blue"},"State ",this.renderSortButton("state",this.props.stateSort)):S.a.createElement("div",null,"State ",this.renderSortButton("state",this.props.stateSort))),this.renderSystemHeaders())}},{key:"renderExpandableRowButton",value:function(e,t){var a=this;return e.includes(t)?S.a.createElement(te.b,{className:"pointer active-blue",onClick:function(){return a.props.expandRow(t)}}):S.a.createElement(ae.b,{className:"pointer",onClick:function(){return a.props.expandRow(t)}})}},{key:"renderEmptyState",value:function(){return S.a.createElement("center",null,S.a.createElement(K.a,null,S.a.createElement(L.a,{icon:J.b}),S.a.createElement("br",null),S.a.createElement(U.a,{size:"lg"},"Add systems or baselines to compare"),S.a.createElement(G.a,null,"You currently have no systems or baselines displayed. Add at least two",S.a.createElement("br",null),"systems or baselines to compare their facts."),S.a.createElement(Ce,{isTable:!1})))}},{key:"renderTable",value:function(e,t){return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"drift-table-wrapper"},S.a.createElement("table",{className:"pf-c-table pf-m-compact drift-table"},S.a.createElement("thead",null,this.renderHeaderRow()),S.a.createElement("tbody",null,t?this.renderLoadingRows():this.renderRows(e)))))}},{key:"render",value:function(){var e=this.props,t=e.emptyState,a=e.filteredCompareData,r=e.systems,n=e.baselines,o=e.historicalProfiles,s=e.loading;return this.masterList=this.formatEntities(r,n,o),S.a.createElement(S.a.Fragment,null,S.a.createElement(we,{selectedSystemIds:r.map((function(e){return e.id})),confirmModal:this.fetchCompare}),t&&!s?this.renderEmptyState():this.renderTable(a,s))}}]),t}(g.Component);Ae.propTypes={addSystemModalOpened:v.a.bool,location:v.a.object,history:v.a.object,fetchCompare:v.a.func,fullCompareData:v.a.array,filteredCompareData:v.a.array,systems:v.a.array,baselines:v.a.array,historicalProfiles:v.a.array,factSort:v.a.string,stateSort:v.a.string,loading:v.a.bool,toggleFactSort:v.a.func,toggleStateSort:v.a.func,expandRow:v.a.func,expandedRows:v.a.array,setSelectedBaselines:v.a.func,setSelectedHistoricProfiles:v.a.func,selectHistoricProfiles:v.a.func,emptyState:v.a.bool};var Re=Object(E.o)(Object(k.connect)((function(e){return{addSystemModalOpened:e.addSystemModalState.addSystemModalOpened,fullCompareData:e.compareState.fullCompareData,filteredCompareData:e.compareState.filteredCompareData,loading:e.compareState.loading,systems:e.compareState.systems,baselines:e.compareState.baselines,historicalProfiles:e.compareState.historicalProfiles,factSort:e.compareState.factSort,stateSort:e.compareState.stateSort,expandedRows:e.compareState.expandedRows,emptyState:e.compareState.emptyState}}),(function(e){return{fetchCompare:function(t,a,r){return e(Me.a.fetchCompare(t,a,r))},toggleFactSort:function(t){return e(Me.a.toggleFactSort(t))},toggleStateSort:function(t){return e(Me.a.toggleStateSort(t))},expandRow:function(t){return e(Me.a.expandRow(t))},setSelectedBaselines:function(t,a){return e(N.a.setSelectedBaselines(t,a))},selectHistoricProfiles:function(t){return e(je.a.selectHistoricProfiles(t))},setSelectedHistoricProfiles:function(t){return e(je.a.setSelectedHistoricProfiles(t))}}}))(Ae)),_e=a(519),Ke=a(357),Le=a(512),Ue=a(225);var Ge={toggleFilterDropDown:function(){return{type:Ue.a.OPEN_FILTER_DROPDOWN}}},Ve=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).onToggle=a.onToggle.bind(R()(a)),a.createDropdownItem=a.createDropdownItem.bind(R()(a)),a}return y()(t,e),u()(t,[{key:"onToggle",value:function(){this.props.toggleDropDown()}},{key:"createDropdownItem",value:function(e){var t=this;return S.a.createElement(_e.a,{className:"state-filter-checkbox",id:e.display,label:e.display,isChecked:e.selected,onChange:function(){return t.props.addStateFilter(e)}})}},{key:"createDropdownArray",value:function(e){var t=[];return e.forEach(function(e){var a=this.createDropdownItem(e);t.push(a)}.bind(this)),t}},{key:"createSelectedViewsString",value:function(e){for(var t=[],a="",r=0;r<e.length;r++)e[r].selected&&t.push(e[r].display);for(var n=0;n<t.length;n++)a+=t[n],n+1<t.length&&(a+=", ");return a}},{key:"render",value:function(){var e,t,a=this.props.stateFilters;return e=this.createDropdownArray(a),t=this.createSelectedViewsString(a),S.a.createElement(S.a.Fragment,null,S.a.createElement(Ke.a,{className:"state-filter-dropdown",onSelect:this.onToggle,toggle:S.a.createElement(Le.a,{onToggle:this.onToggle},"View: ",t),isOpen:this.props.filterDropdownOpened,dropdownItems:e}))}}]),t}(g.Component);Ve.propTypes={toggleDropDown:v.a.func,filterDropdownOpened:v.a.bool,stateFilters:v.a.array,addStateFilter:v.a.func};var $e=Object(k.connect)((function(e){return{filterDropdownOpened:e.filterDropdownOpened,stateFilters:e.compareState.stateFilters}}),(function(e){return{toggleDropDown:function(){return e(Ge.toggleFilterDropDown())},addStateFilter:function(t){return e(Me.a.addStateFilter(t))}}}))(Ve),We=a(555),Xe=a.n(We),Ye=a(523),ze=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).updateFactFilter=function(e){a.setState({filter:e}),a.setFactFilter(e)},a.setFactFilter=Xe()((function(e){this.props.changeFactFilter(e)}),250),a.state={filter:a.props.factFilter},a.setFactFilter=a.setFactFilter.bind(R()(a)),a}return y()(t,e),u()(t,[{key:"componentDidUpdate",value:function(e){""!==e.factFilter&&""===this.props.factFilter&&this.setState({filter:this.props.factFilter})}},{key:"render",value:function(){return S.a.createElement(S.a.Fragment,null,S.a.createElement(Ye.a,{value:this.state.filter,id:"filterByFact",placeholder:"Filter by fact",onChange:this.updateFactFilter,"aria-label":"filter by fact"}))}}]),t}(g.Component);ze.propTypes={changeFactFilter:v.a.func,factFilter:v.a.string};var qe=Object(k.connect)((function(e){return{factFilter:e.compareState.factFilter}}),(function(e){return{changeFactFilter:function(t){return e(Me.a.filterByFact(t))}}}))(ze),Je=a(226);var Qe={toggleKebab:function(){return{type:Je.a.TOGGLE_KEBAB}}},Ze=a(356),et=a(358),tt=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).removeSystemsSelect=a.removeSystemsSelect.bind(R()(a)),a}return y()(t,e),u()(t,[{key:"removeSystemsSelect",value:function(){var e=this.props,t=e.history,a=e.toggleKebab,r=e.removeSystems,n=e.clearSelectedBaselines,o=e.selectHistoricProfiles,s=e.selectedHSPIds;a(),r(),n("CHECKBOX"),o(s),Object(He.a)(t,[])}},{key:"render",value:function(){var e=[S.a.createElement(Ze.a,{key:"remove-systems",component:"button",onClick:this.removeSystemsSelect},"Clear all comparisons")];return S.a.createElement(Ke.a,{id:"action-kebab","aria-label":"action-kebab",style:{float:"left"},toggle:S.a.createElement(et.a,{onToggle:this.props.toggleKebab}),isOpen:this.props.kebabOpened,dropdownItems:e,isPlain:!0})}}]),t}(g.Component);tt.propTypes={removeSystems:v.a.func,clearSelectedBaselines:v.a.func,toggleKebab:v.a.func,kebabOpened:v.a.bool,history:v.a.object,selectedHSPIds:v.a.array,selectHistoricProfiles:v.a.func};var at=Object(E.o)(Object(k.connect)((function(e){return{kebabOpened:e.kebabOpened,selectedHSPIds:e.historicProfilesState.selectedHSPIds}}),(function(e){return{removeSystems:function(){return e(Me.a.clearState())},clearSelectedBaselines:function(t){return e(N.a.clearSelectedBaselines(t))},toggleKebab:function(){return e(Qe.toggleKebab())},selectHistoricProfiles:function(t){return e(je.a.selectHistoricProfiles(t))}}}))(tt)),rt=a(565),nt=a(509),ot=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).confirmDriftModal=function(){var e=a.props,t=e.toggleModal,r=e.revertCompareData,n=e.history,o=e.previousStateSystems;t(),r(),Object(He.a)(n,o.map((function(e){return e.id})))},a.confirmBaselineModal=function(){var e=a.props,t=e.toggleModal,r=e.revertBaselineFetch,n=e.tableId;t(),r(n)},a}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.errorAlertOpened,r=t.error,n=t.baselineError;return S.a.createElement(S.a.Fragment,null,a&&S.a.createElement(rt.a,{variant:"danger",title:"Error",action:S.a.createElement(nt.a,{onClose:function(){return r.status?e.confirmDriftModal():e.confirmBaselineModal()}})},"Status Code: ",r.status?r.status:n.status,S.a.createElement("br",null),r.detail?r.detail:n.detail))}}]),t}(g.Component);ot.propTypes={confirmModal:v.a.func,errorAlertOpened:v.a.bool,error:v.a.object,baselineError:v.a.object,toggleModal:v.a.func,history:v.a.object,fullCompareData:v.a.array,revertCompareData:v.a.func,previousStateSystems:v.a.array,revertBaselineFetch:v.a.func,tableId:v.a.string};var st=Object(E.o)(Object(k.connect)((function(e){return{fullCompareData:e.compareState.fullCompareData,previousStateSystems:e.compareState.previousStateSystems,errorAlertOpened:e.errorAlertOpened,error:e.compareState.error,baselineError:e.baselinesTableState.checkboxTable.baselineError}}),(function(e){return{toggleModal:function(){return e(x.toggleErrorAlert())},revertCompareData:function(){return e(Me.a.revertCompareData())},revertBaselineFetch:function(t){return e(N.a.revertBaselineFetch(t))}}}))(ot)),it=a(560),lt=a(6),ct=[{title:"10",value:10},{title:"25",value:25},{title:"50",value:50},{title:"100",value:100}],ut=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).onSetPage=a.onSetPage.bind(R()(a)),a.onPerPageSelect=a.onPerPageSelect.bind(R()(a)),a}return y()(t,e),u()(t,[{key:"onSetPage",value:function(e,t){var a={page:t,perPage:this.props.perPage};this.props.updatePagination(a)}},{key:"onPerPageSelect",value:function(e,t){var a={page:1,perPage:t};this.props.updatePagination(a)}},{key:"render",value:function(){var e=this.props,t=e.totalFacts,a=e.page,r=e.perPage;return S.a.createElement(it.a,{itemCount:t||0,perPageOptions:ct,page:0===t?0:a,perPage:r,dropDirection:lt.c.down,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,isCompact:!0})}}]),t}(g.Component);ut.propTypes={perPage:v.a.number,page:v.a.number,updatePagination:v.a.func,totalFacts:v.a.number};var pt=Object(k.connect)((function(e){return{page:e.compareState.page,perPage:e.compareState.perPage,totalFacts:e.compareState.totalFacts}}),(function(e){return{updatePagination:function(t){return e(Me.a.updatePagination(t))}}}))(ut),dt=a(483),mt=function(e){function t(e){return l()(this,t),d()(this,f()(t).call(this,e))}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this.props.exportToCSV;return S.a.createElement(dt.b,{className:"pointer not-active export-button-margin",onClick:e})}}]),t}(g.Component);mt.propTypes={exportToCSV:v.a.func};var ft=Object(k.connect)(null,(function(e){return{exportToCSV:function(){return e(Me.a.exportToCSV())}}}))(mt),ht=a(420),yt=a(522),gt=a(422),St=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).setStateChips=function(e){var t=[];return e.forEach((function(e){e.selected&&t.push(e.display)})),t},a.removeChip=function(e){var t=a.props,r=t.stateFilters,n=t.addStateFilter,o=t.filterByFact;"Same"===e||"Different"===e||"Incomplete data"===e?r.forEach((function(t){t.display===e&&n(t)})):o("")},a.state={chipGroup:[{category:"State",chips:a.setStateChips(a.props.stateFilters)},{category:"Name",chips:""!==a.props.factFilter?[a.props.factFilter]:[]}]},a}return y()(t,e),u()(t,[{key:"componentDidUpdate",value:function(e){var t,a,r=this.props,n=r.stateFilters,o=r.factFilter;if(n!==e.stateFilters){var s=[];n.forEach((function(e){e.selected&&s.push(e.display)})),a=[{category:"State",chips:s},this.state.chipGroup[1]],this.setState({chipGroup:a})}o!==e.factFilter&&(t={category:"Name",chips:""!==o?[o]:[]},a=[this.state.chipGroup[0],t],this.setState({chipGroup:a}))}},{key:"render",value:function(){var e=this,t=this.state.chipGroup,a=0;return S.a.createElement(ht.a,{withToolbar:!0},t.map((function(t){return S.a.createElement(yt.a,{key:t.category,categoryName:t.category},t.chips.map((function(r){return S.a.createElement(gt.a,{key:t.category+a++,onClick:function(){return e.removeChip(r)}},r)})))})))}}]),t}(g.Component);St.propTypes={factFilter:v.a.string,stateFilters:v.a.array,filterByFact:v.a.func,addStateFilter:v.a.func};var bt=Object(k.connect)((function(e){return{factFilter:e.compareState.factFilter,stateFilters:e.compareState.stateFilters}}),(function(e){return{filterByFact:function(t){return e(Me.a.filterByFact(t))},addStateFilter:function(t){return e(Me.a.addStateFilter(t))}}}))(St);a.d(t,"DriftPage",(function(){return vt}));var vt=function(e){function t(e){var a;return l()(this,t),(a=d()(this,f()(t).call(this,e))).props.clearSelectedBaselines("CHECKBOX"),a}var a;return y()(t,e),u()(t,[{key:"componentDidMount",value:(a=s()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.emptyState;return this.props.error.detail&&this.props.toggleErrorAlert(),S.a.createElement(S.a.Fragment,null,S.a.createElement(P.PageHeader,null,S.a.createElement(P.PageHeaderTitle,{title:"System Comparison"})),S.a.createElement(P.Main,null,S.a.createElement(st,null),S.a.createElement(w.a,{className:"pf-t-light pf-m-opaque-100"},S.a.createElement(F.a,null,S.a.createElement("div",null,a?null:S.a.createElement(S.a.Fragment,null,S.a.createElement(C.a,{className:"drift-toolbar"},S.a.createElement(O.a,null,S.a.createElement(I.a,null,S.a.createElement(qe,null)),S.a.createElement(I.a,null,S.a.createElement($e,null)),S.a.createElement(I.a,null,S.a.createElement(Ce,{loading:t})),S.a.createElement(I.a,null,S.a.createElement(ft,null)),S.a.createElement(I.a,null,S.a.createElement(at,null))),S.a.createElement(O.a,{className:"pf-c-pagination"},S.a.createElement(I.a,null,S.a.createElement(pt,null)))),S.a.createElement(C.a,{className:"drift-toolbar"},S.a.createElement(O.a,null,S.a.createElement(I.a,null,S.a.createElement(bt,null))))),S.a.createElement(Re,null),a||t?null:S.a.createElement(C.a,{className:"drift-toolbar"},S.a.createElement(O.a,{className:"pf-c-pagination"},S.a.createElement(I.a,null,S.a.createElement(pt,null)))))))))}}]),t}(g.Component);vt.propTypes={error:v.a.object,loading:v.a.bool,toggleErrorAlert:v.a.func,clearSelectedBaselines:v.a.func,emptyState:v.a.bool};t.default=Object(E.o)(Object(k.connect)((function(e){return{error:e.compareState.error,loading:e.compareState.loading,emptyState:e.compareState.emptyState}}),(function(e){return{toggleErrorAlert:function(){return e(x.toggleErrorAlert())},clearSelectedBaselines:function(t){return e(N.a.clearSelectedBaselines(t))}}}))(vt))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map