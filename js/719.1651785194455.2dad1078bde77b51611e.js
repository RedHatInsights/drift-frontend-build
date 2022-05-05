/*! For license information please see 719.1651785194455.2dad1078bde77b51611e.js.LICENSE.txt */
(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[719],{81321:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(92950),r=n.n(a),s=n(45697),l=n.n(s),i=n(54025),o=n(86235),c=n(37282),u=n(34895);const d=function(e){var t=e.component,n=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),r().createElement("div",null,r().createElement("h1",null,"Unable to load inventory component"),r().createElement("h2",null,"Failed to load ",t),r().createElement("code",null,"More info can be found in browser console output."))};var p=n(94184),f=n.n(p),m=function(){return m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)},h=function(e){var t=(0,o.useHistory)(),n=(0,c.useStore)(),s=e.component;return r().createElement(s,{className:f()(e.className,"inventory")},r().createElement(a.Suspense,{fallback:e.fallback},r().createElement(i.ScalprumComponent,m({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:r().createElement(d,m({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))))};h.propTypes={fallback:l().node,innerRef:l().object,component:l().string,className:l().string};var b=r().forwardRef((function(e,t){return r().createElement(h,m({innerRef:t},e))}));b.propTypes={fallback:l().node,component:l().string,className:l().string},b.defaultProps={fallback:r().createElement(u.Bullseye,{className:"pf-u-p-lg"},r().createElement(u.Spinner,{size:"xl"})),component:"section"};const y=b},12611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BaselinesPage:()=>F,default:()=>A});var a=n(15861),r=n(15671),s=n(43144),l=n(60136),i=n(6215),o=n(61120),c=n(87757),u=n.n(c),d=n(92950),p=n.n(d),f=n(45697),m=n.n(f),h=n(37282),b=n(86235),y=n(86388),S=n(34895),v=n(83632),B=n(3326),k=n(61104),C=n(48913),E=n(97326),g=n(99655),T=n(34869),x=n(86047),w=n(51504),I=n(48270),P=n(69078);var O=function(e){(0,l.Z)(h,e);var t,n,c,d,f,m=(d=h,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(d);if(f){var n=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function h(e){var t;return(0,r.Z)(this,h),(t=m.call(this,e)).buildSystemColumns=function(e){var n=t.props.permissions,a=e.map((function(e){return"display_name"===e.key||"display_selected_hsp"===e.key?{title:"Name",key:e.key,props:{width:20},renderFunc:function(e,t,n){return n.display_selected_hsp||e}}:e}));return n.hspRead&&a.push({key:"historical_profiles",props:{width:10,isStatic:!0},title:"Historical profiles"}),a},t.deselectHistoricalProfiles=(0,a.Z)(u().mark((function e(){var n,a,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props,a=n.selectSingleHSP,r=n.updateColumns,e.next=3,r("display_name");case 3:a();case 4:case"end":return e.stop()}}),e)}))),t.onSelect=function(e,n,a){var r=t.props,s=r.baselineTableData;(0,r.selectBaseline)([s[a][0]],n,"RADIO")},t.cancelModal=function(){var e=t.props,n=e.toggleCreateBaselineModal,a=e.clearSelectedBaselines,r=e.selectSingleHSP;t.updateBaselineName(""),a("RADIO"),r(),n()},t.checkKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),t.state.baselineName&&t.submitBaselineName())},t.renderModalBody=function(){var e,n=t.state,a=n.baselineName,r=n.copyBaselineChecked,s=n.copySystemChecked,l=t.props.createBaselineError;return r?e=t.renderCopyBaseline():s&&(e=t.renderCopySystem()),p().createElement(p().Fragment,null,t.renderRadioButtons(),p().createElement("div",{className:"md-padding-top md-padding-bottom"},p().createElement(S.Form,null,p().createElement(S.FormGroup,{label:"Baseline name",isRequired:!0,type:"text",helperTextInvalid:Object.prototype.hasOwnProperty.call(l,"detail")?l.detail:null,fieldId:"name",validated:Object.prototype.hasOwnProperty.call(l,"status")?"error":null,onKeyPress:t.checkKeyPress},p().createElement(S.TextInput,{className:"fact-value",value:a,type:"text",onChange:t.updateBaselineName,validated:Object.prototype.hasOwnProperty.call(l,"status")?S.ValidatedOptions.error:null,"aria-label":"baseline name"})))),e)},t.submitBaselineName=t.submitBaselineName.bind((0,E.Z)(t)),t.state={baselineName:"",fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1,columns:[{title:"Name",transforms:[B.sortable,(0,B.cellWidth)(60)]},{title:"Last updated",transforms:[B.sortable,(0,B.cellWidth)(20)]},{title:"Associated systems",transforms:[(0,B.cellWidth)(20)]}]},t.updateBaselineName=function(e){t.setState({baselineName:e})},t.handleChecked=function(e,n){var a=n.currentTarget.value;t.props.clearSelectedBaselines("RADIO"),"fromScratchChecked"===a?t.setState({fromScratchChecked:!0,copyBaselineChecked:!1,copySystemChecked:!1}):"copyBaselineChecked"===a?t.setState({fromScratchChecked:!1,copyBaselineChecked:!0,copySystemChecked:!1}):t.setState({fromScratchChecked:!1,copyBaselineChecked:!1,copySystemChecked:!0})},t}return(0,s.Z)(h,[{key:"componentDidMount",value:(c=(0,a.Z)(u().mark((function e(){var t=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.entityListener=(0,g.pD)({actionType:"SELECT_ENTITY",callback:function(){t.props.createBaselineModalOpened&&t.deselectHistoricalProfiles()}}),window.entityListener=(0,g.pD)({actionType:"SELECT_SINGLE_HSP",callback:function(){t.props.updateColumns("display_selected_hsp")}});case 2:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},{key:"componentWillUnmount",value:(n=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.removeEventListener("SELECT_ENTITY",this.deselectHistoricalProfiles),window.removeEventListener("SELECT_SINGLE_HSP",this.props.updateColumns);case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"findSelectedRadio",value:function(){var e,t=this.state,n={copyBaselineChecked:t.copyBaselineChecked,copySystemChecked:t.copySystemChecked,fromScratchChecked:t.fromScratchChecked};return Object.keys(n).forEach((function(t){n[t]&&(e=t.substring(0,t.length-7).toLowerCase())})),e}},{key:"submitBaselineName",value:(t=(0,a.Z)(u().mark((function e(){var t,n,a,r,s,l,i,o,c,d,p,f,m,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.baselineName,a=t.fromScratchChecked,r=t.copyBaselineChecked,s=t.copySystemChecked,l=this.props,i=l.createBaseline,o=l.toggleCreateBaselineModal,c=l.selectedBaselineIds,d=l.history,p=l.entities,f=l.clearSelectedBaselines,m=l.selectSingleHSP,h={display_name:n},e.prev=3,""===n){e.next=31;break}if(!a){e.next=11;break}return h.baseline_facts=[],e.next=9,i(h);case 9:e.next=27;break;case 11:if(1!==c.length||!r){e.next=17;break}return h={display_name:n},e.next=15,i(h,c[0]);case 15:e.next=27;break;case 17:if(null==p||!p.selectedSystemIds.length||!s){e.next=23;break}return h.inventory_uuid=null==p?void 0:p.selectedSystemIds[0],e.next=21,i(h);case 21:e.next=27;break;case 23:if(null==p||!p.selectedHSP||!s){e.next=27;break}return h.hsp_uuid=p.selectedHSP.id,e.next=27,i(h);case 27:d.push("baselines/"+this.props.baselineData.id),o(),m(),f("RADIO");case 31:e.next=35;break;case 33:e.prev=33,e.t0=e.catch(3);case 35:case"end":return e.stop()}}),e,this,[[3,33]])}))),function(){return t.apply(this,arguments)})},{key:"renderRadioButtons",value:function(){var e=this.state,t=e.fromScratchChecked,n=e.copyBaselineChecked,a=e.copySystemChecked;return p().createElement(p().Fragment,null,p().createElement(S.Radio,{isChecked:t,id:"create baseline",ouiaId:"create-baseline-from-scratch-radio",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:this.handleChecked}),p().createElement(S.Radio,{isChecked:n,id:"copy baseline",ouiaId:"create-baseline-copy-baseline-radio",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:this.handleChecked}),p().createElement(S.Radio,{isChecked:a,id:"copy system",ouiaId:"create-baseline-copy-system-radio",name:"baseline-create-options",label:"Copy an existing system or historical profile",value:"copySystemChecked",onChange:this.handleChecked}))}},{key:"renderCopyBaseline",value:function(){var e=this.props,t=e.baselineTableData,n=e.loading,a=e.permissions,r=e.selectedBaselineIds,s=e.totalBaselines,l=this.state.columns;return p().createElement(p().Fragment,null,p().createElement("b",null,"Select baseline to copy from"),p().createElement(k.Z,{tableId:"RADIO",onSelect:this.onSelect,tableData:t,loading:n,columns:l,totalBaselines:s,permissions:a,hasMultiSelect:!1,selectedBaselineIds:r,leftAlignToolbar:!0,hasSwitch:!1}))}},{key:"renderCopySystem",value:function(){var e=this.props,t=e.entities,n=e.permissions;return p().createElement(p().Fragment,null,p().createElement("b",null,"Select system or historical profile to copy from"),p().createElement("br",null),p().createElement(T.Z,{createBaselineModal:!0,hasMultiSelect:!1,historicalProfiles:null!=t&&t.selectedHSP?[t.selectedHSP]:[],permissions:n,entities:t,selectVariant:"radio",systemColumns:this.buildSystemColumns,deselectHistoricalProfiles:this.deselectHistoricalProfiles}))}},{key:"renderActions",value:function(){var e=this.props,t=e.selectedBaselineIds,n=e.entities,a=this.state,r=a.baselineName,s=a.copyBaselineChecked,l=a.copySystemChecked;return""===r||s&&0===t.length||l&&(null==n||!n.selectedSystemIds.length)&&(null==n||!n.selectedHSP)?[p().createElement(S.Button,{key:"confirm",variant:"primary",isDisabled:!0,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),p().createElement(S.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]:[p().createElement(S.Button,{key:"confirm",variant:"primary",onClick:this.submitBaselineName,ouiaId:"create-baseline-button-"+this.findSelectedRadio()},"Create baseline"),p().createElement(S.Button,{key:"cancel",variant:"link",onClick:this.cancelModal,ouiaId:"create-baseline-modal-cancel-button"},"Cancel")]}},{key:"render",value:function(){var e=this.props,t=e.createBaselineModalOpened,n=e.globalFilterState,a=this.state.copySystemChecked;return p().createElement(S.Modal,{className:"drift",width:"1200px",title:"Create baseline",isOpen:t,onClose:this.cancelModal,actions:this.renderActions()},a?p().createElement(x.Z,{globalFilterState:n}):null,this.renderModalBody())}}]),h}(d.Component);O.propTypes={createBaselineModalOpened:m().bool,createBaseline:m().func,selectBaseline:m().func,history:m().object,baselineData:m().object,toggleCreateBaselineModal:m().func,clearSelectedBaselines:m().func,entities:m().object,selectedBaselineIds:m().array,createBaselineError:m().object,baselineTableData:m().array,loading:m().bool,totalBaselines:m().number,updatePagination:m().func,historicalProfiles:m().array,permissions:m().object,globalFilterState:m().object,selectHistoricProfiles:m().func,setSelectedSystemIds:m().func,selectSingleHSP:m().func,updateColumns:m().func};const N=(0,b.withRouter)((0,h.connect)((function(e){return{createBaselineModalOpened:e.createBaselineModalState.createBaselineModalOpened,baselineData:e.createBaselineModalState.baselineData,entities:e.entities,selectedBaselineIds:e.baselinesTableState.radioTable.selectedBaselineIds,createBaselineError:e.createBaselineModalState.createBaselineError,loading:e.baselinesTableState.radioTable.loading,emptyState:e.baselinesTableState.radioTable.emptyState,baselineTableData:e.baselinesTableState.radioTable.baselineTableData,totalBaselines:e.baselinesTableState.radioTable.totalBaselines,historicalProfiles:e.compareState.historicalProfiles,globalFilterState:e.globalFilterState}}),(function(e){return{toggleCreateBaselineModal:function(){return e(w.Z.toggleCreateBaselineModal())},createBaseline:function(t,n){return e(w.Z.createBaseline(t,n))},selectBaseline:function(t,n,a){return e(I.w.selectBaseline(t,n,a))},clearSelectedBaselines:function(t){return e(I.w.clearSelectedBaselines(t))},selectSingleHSP:function(t){return e(P.Z.selectSingleHSP(t))},updateColumns:function(t){return e(P.Z.updateColumns(t))}}}))(O));var D=n(42325),H=n(23419),M=n(56077),R=n(60001),Z=n(83068),j=n(43946),_=n(72971);var F=function(e){(0,l.Z)(f,e);var t,n,c,d=(n=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(n);if(c){var a=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),(t=d.call(this,e)).fetchBaseline=function(e){t.props.history.push("baselines/"+e)},t.onSelect=function(e,n,a){var r=t.props,s=r.baselineTableData;(0,r.selectBaseline)(-1===a?s.map((function(e){return e[0]})):[s[a][0]],n,"CHECKBOX")},t.onBulkSelect=function(e){var n=t.props,a=n.baselineTableData,r=n.selectBaseline,s=[];a.forEach((function(e){s.push(e[0])})),r(s,e,"CHECKBOX")},t.renderEmptyState=function(e){var n=t.props,a=n.baselineError,r=n.emptyState,s=n.loading,l=n.revertBaselineFetch,i=t.state.errorMessage;return a.status?200!==a.status&&void 0!==a.status?p().createElement(D.Z,{icon:v.ExclamationCircleIcon,color:"#c9190b",title:"Baselines cannot be displayed",text:i,error:"Error "+a.status+": "+a.detail,button:p().createElement("a",{onClick:function(){return l("CHECKBOX")}},p().createElement(v.UndoIcon,{className:"reload-button"}),"Retry")}):void 0:p().createElement(D.Z,{icon:v.AddCircleOIcon,title:_.WO,text:_.pM,button:p().createElement(C.Z,{emptyState:r,permissions:e,loading:s})})},t.state={columns:[{title:"Name",transforms:[B.sortable,(0,B.cellWidth)(45)]},{title:"Last updated",transforms:[B.sortable,(0,B.cellWidth)(30)]},{title:"Associated systems",transforms:[(0,B.cellWidth)(20)]},{title:"",transforms:[(0,B.cellWidth)(5)]}],errorMessage:["The list of baselines cannot be displayed at this time. Please retry and if","the problem persists contact your system administrator.",""],error:{}},t}return(0,s.Z)(f,[{key:"componentDidMount",value:(t=(0,a.Z)(u().mark((function e(){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,null===(t=window.insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.appAction)||void 0===a?void 0:a.call(n,"baseline-list");case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.baselineError,a=t.notificationsSwitchError;e.baselineError!==n&&this.setState({error:n}),e.notificationsSwitchError!==a&&this.setState({error:a})}},{key:"renderTable",value:function(e){var t=this.props,n=t.baselineTableData,a=t.clearEditBaselineData,r=t.emptyState,s=t.loading,l=t.notificationsSwitchError,i=t.selectedBaselineIds,o=t.totalBaselines,c=this.state.columns;return a(),p().createElement(S.CardBody,null,p().createElement("div",null,p().createElement(k.Z,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:n,loading:s,columns:c,kebab:!0,createButton:!0,exportButton:!0,onClick:this.fetchBaseline,onBulkSelect:this.onBulkSelect,selectedBaselineIds:i,totalBaselines:o,permissions:e,hasSwitch:!0,notificationsSwitchError:l,emptyState:r})))}},{key:"render",value:function(){var e=this,t=this.state.error,n=this.props,a=n.emptyState,r=n.loading,s=n.revertBaselineFetch,l=n.selectHistoricProfiles,i=n.setSelectedSystemIds;return p().createElement(j.B.Consumer,null,(function(n){return p().createElement(p().Fragment,null,p().createElement(N,{permissions:n.permissions,selectHistoricProfiles:l,setSelectedSystemIds:i}),p().createElement(y.PageHeader,null,p().createElement(y.PageHeaderTitle,{title:"Baselines"})),p().createElement(y.Main,null,!1===n.permissions.baselinesRead?p().createElement(D.Z,{icon:v.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):a&&!r?e.renderEmptyState(n.permissions):p().createElement(p().Fragment,null,p().createElement(H.Z,{error:!a&&t?t:{},onClose:s,tableId:"CHECKBOX"}),p().createElement(S.Card,{className:"pf-t-light pf-m-opaque-100"},e.renderTable(n.permissions)))))}))}}]),f}(d.Component);F.propTypes={loading:m().bool,baselineTableData:m().array,emptyState:m().bool,selectBaseline:m().func,history:m().object,baselineError:m().object,revertBaselineFetch:m().func,clearEditBaselineData:m().func,selectedBaselineIds:m().array,totalBaselines:m().number,selectHistoricProfiles:m().func,setSelectedSystemIds:m().func,entitiesLoading:m().func,notificationsSwitchError:m().object};const A=(0,b.withRouter)((0,h.connect)((function(e){return{loading:e.baselinesTableState.checkboxTable.loading,emptyState:e.baselinesTableState.checkboxTable.emptyState,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,baselineError:e.baselinesTableState.checkboxTable.baselineError,notificationsSwitchError:e.editBaselineState.notificationsSwitchError,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{selectBaseline:function(t,n,a){return e(I.w.selectBaseline(t,n,a))},revertBaselineFetch:function(t){return e(I.w.revertBaselineFetch(t))},clearEditBaselineData:function(){return e(R.E.clearEditBaselineData())},selectHistoricProfiles:function(t){return e(Z.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(M.x.setSelectedSystemIds(t))}}}))(F))},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},27561:(e,t,n)=>{var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var a=n(13218),r=n(7771),s=n(14841),l=Math.max,i=Math.min;e.exports=function(e,t,n){var o,c,u,d,p,f,m=0,h=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function S(t){var n=o,a=c;return o=c=void 0,m=t,d=e.apply(a,n)}function v(e){return m=e,p=setTimeout(k,t),h?S(e):d}function B(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-m>=u}function k(){var e=r();if(B(e))return C(e);p=setTimeout(k,function(e){var n=t-(e-f);return b?i(n,u-(e-m)):n}(e))}function C(e){return p=void 0,y&&o?S(e):(o=c=void 0,d)}function E(){var e=r(),n=B(e);if(o=arguments,c=this,f=e,n){if(void 0===p)return v(f);if(b)return clearTimeout(p),p=setTimeout(k,t),S(f)}return void 0===p&&(p=setTimeout(k,t)),d}return t=s(t)||0,a(n)&&(h=!!n.leading,u=(b="maxWait"in n)?l(s(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==p&&clearTimeout(p),m=0,o=f=c=p=void 0},E.flush=function(){return void 0===p?d:C(r())},E}},7771:(e,t,n)=>{var a=n(55639);e.exports=function(){return a.Date.now()}},14841:(e,t,n)=>{var a=n(27561),r=n(13218),s=n(33448),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=i.test(e);return n||o.test(e)?c(e.slice(2),n?2:8):l.test(e)?NaN:+e}}}]);