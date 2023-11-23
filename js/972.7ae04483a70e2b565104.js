(self.webpackChunkdrift=self.webpackChunkdrift||[]).push([[972],{98773:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(62012),a=n(55140),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const o=function(e,t){var n=(0,r.useNavigate)(),o=(0,a.Z)();return function(r,a){return n(function(e,t,n,r){var a=("object"==typeof n?n.pathname:n)||"",o=/^\//.test(a),l=r?"/preview":"",s=t||e.getApp(),c=o?[l,e.getBundle(),s,a.replace(/^\//,"")].join("/"):a;return"object"==typeof n?i(i({},n),{pathname:c}):c}(o,e,r,a||t))}}},63652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(48521),a=n(92950),i=n.n(a),o=n(45697),l=n.n(o),s=n(54025),c=n(90958),u=n(14938);const f=function(e){var t=e.component,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Unable to load inventory component"}),(0,r.jsxs)("h2",{children:["Failed to load ",t]}),(0,r.jsx)("code",{children:"More info can be found in browser console output."})]})};var p=n(94184),d=n.n(p),b=n(62012),m=n(55140),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},h.apply(this,arguments)},y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=function(e){var t=e.Component,n=y(e,["Component"]),a=b.useHistory();return(0,r.jsx)(t,h({history:a},n))},S=function(e){var t=e.Component,n=y(e,["Component"]),a=(0,m.Z)().chromeHistory;return(0,r.jsx)(t,h({history:a},n))};const E=i().forwardRef((function(e,t){var n=e.Component,i=y(e,["Component"]),o=(0,a.useMemo)((function(){return"function"==typeof b.useHistory?v:S}),[n,i]);return(0,r.jsx)(o,h({innerRef:t,Component:n},i))}));var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)},x=function(e){var t=(0,c.useStore)(),n=e.component;return(0,r.jsx)(n,g({className:d()(e.className,"inventory")},{children:(0,r.jsx)(a.Suspense,g({fallback:e.fallback},{children:(0,r.jsx)(s.ScalprumComponent,g({history:e.history,store:t,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,r.jsx)(f,g({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};x.propTypes={fallback:l().node,innerRef:l().object,component:l().string,className:l().string,history:l().object};var B=i().forwardRef((function(e,t){return(0,r.jsx)(x,g({innerRef:t},e))}));B.propTypes={fallback:l().node,component:l().string,className:l().string},B.defaultProps={fallback:(0,r.jsx)(u.Bullseye,g({className:"pf-u-p-lg"},{children:(0,r.jsx)(u.Spinner,{size:"xl"})})),component:"section"};const k=i().forwardRef((function(e,t){return(0,r.jsx)(E,g({innerRef:t,Component:B},e))}))},12611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BaselinesPage:()=>L,default:()=>M});var r=n(87462),a=n(15861),i=n(15671),o=n(43144),l=n(79340),s=n(82963),c=n(61120),u=n(64687),f=n.n(u),p=n(92950),d=n.n(p),b=n(45697),m=n.n(b),h=n(90958),y=n(92649),v=n(52017),S=n(17855),E=n(67412),g=n(70885),x=n(14938),B=n(99655),k=n(34869),w=n(86047),C=n(51504),T=n(48270),O=n(69078),j=n(98773),I=function(e){var t=e.middlewareListener,n=e.permissions,r=(0,h.useDispatch)(),i=(0,j.Z)(),o=(0,p.useState)(""),l=(0,g.Z)(o,2),s=l[0],c=l[1],u=(0,p.useState)(!0),b=(0,g.Z)(u,2),m=b[0],y=b[1],v=(0,p.useState)(!1),I=(0,g.Z)(v,2),Z=I[0],P=I[1],D=(0,p.useState)(!1),H=(0,g.Z)(D,2),R=H[0],N=H[1],F=[{title:"Name",transforms:[S.sortable,(0,S.cellWidth)(60)]},{title:"Last updated",transforms:[S.sortable,(0,S.cellWidth)(20)]},{title:"Associated systems",transforms:[(0,S.cellWidth)(20)]}],_=(0,h.useSelector)((function(e){return e.createBaselineModalState.createBaselineModalOpened})),L=(0,h.useSelector)((function(e){return e.createBaselineModalState.baselineData})),M=(0,h.useSelector)((function(e){return e.entities})),A=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.selectedBaselineIds})),W=(0,h.useSelector)((function(e){return e.createBaselineModalState.createBaselineError})),K=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.loading})),z=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.emptyState})),G=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.baselineTableData})),U=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.totalBaselines})),X=(0,h.useSelector)((function(e){return e.globalFilterState})),Y=(0,h.useSelector)((function(e){return e.baselinesTableState.radioTable.baselineError})),$=function(){var e=(0,a.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(O.Z.updateColumns("display_name"));case 2:r(O.Z.selectSingleHSP());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){return t&&(window.entityListener=(0,B.pD)(t,{actionType:"SELECT_ENTITY",callback:function(){_&&$()}}),window.entityListener=(0,B.pD)(t,{actionType:"SELECT_SINGLE_HSP",callback:function(){r(O.Z.updateColumns("display_selected_hsp"))}})),function(){window.removeEventListener("SELECT_ENTITY",$),window.removeEventListener("SELECT_SINGLE_HSP",O.Z.updateColumns)}}),[]),(0,p.useEffect)((function(){null!=L&&L.id&&!_&&(i("/baselines/".concat(L.id)),r(C.Z.clearCreateBaselineData()))}),[L,_]);var V,q=function(){c(""),r(T.w.clearSelectedBaselines("RADIO")),r(O.Z.selectSingleHSP()),r(C.Z.toggleCreateBaselineModal())},J=function(){var e,t={copyBaselineChecked:Z,copySystemChecked:R,fromScratchChecked:m};return Object.keys(t).forEach((function(n){t[n]&&(e=n.substring(0,n.length-7).toLowerCase())})),e},Q=function(){var e=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={display_name:s},e.prev=1,""===s){e.next=27;break}if(!m){e.next=9;break}return t.baseline_facts=[],e.next=7,r(C.Z.createBaseline(t));case 7:e.next=25;break;case 9:if(1!==A.length||!Z){e.next=15;break}return t={display_name:s},e.next=13,r(C.Z.createBaseline(t,A[0]));case 13:e.next=25;break;case 15:if(null==M||!M.selectedSystemIds.length||!R){e.next=21;break}return t.inventory_uuid=null==M?void 0:M.selectedSystemIds[0],e.next=19,r(C.Z.createBaseline(t));case 19:e.next=25;break;case 21:if(null==M||!M.selectedHSP||!R){e.next=25;break}return t.hsp_uuid=M.selectedHSP.id,e.next=25,r(C.Z.createBaseline(t));case 25:r(T.w.clearSelectedBaselines("RADIO")),r(C.Z.toggleCreateBaselineModal());case 27:e.next=31;break;case 29:e.prev=29,e.t0=e.catch(1);case 31:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(){return e.apply(this,arguments)}}(),ee=function(e,t){var n=t.currentTarget.value;r(T.w.clearSelectedBaselines("RADIO")),"fromScratchChecked"===n?(y(!0),P(!1),N(!1)):"copyBaselineChecked"===n?(y(!1),P(!0),N(!1)):(y(!1),P(!1),N(!0))};return d().createElement(x.Modal,{className:"drift create-baseline-modal","aria-label":"create-baseline-modal",width:"1200px",title:"Create baseline",isOpen:_,onClose:q,actions:""===s||Z&&0===A.length||R&&(null==M||!M.selectedSystemIds.length)&&(null==M||!M.selectedHSP)?[d().createElement(x.Button,{key:"confirm",variant:"primary",isDisabled:!0,ouiaId:"create-baseline-button-".concat(J()),"aria-label":"create-baseline-disabled"},"Create baseline"),d().createElement(x.Button,{key:"cancel",variant:"link",onClick:function(){return q()},ouiaId:"create-baseline-modal-cancel-button","aria-label":"cancel-create-baseline"},"Cancel")]:[d().createElement(x.Button,{key:"confirm",variant:"primary",onClick:function(){return Q()},ouiaId:"create-baseline-button-".concat(J()),"aria-label":"create-baseline-confirm"},"Create baseline"),d().createElement(x.Button,{key:"cancel",variant:"link",onClick:function(){return q()},ouiaId:"create-baseline-modal-cancel-button","aria-label":"cancel-create-baseline"},"Cancel")]},R?d().createElement(w.Z,{globalFilterState:X}):null,(Z?V=d().createElement(d().Fragment,null,d().createElement("b",null,"Select baseline to copy from"),d().createElement(E.Z,{tableId:"RADIO",onSelect:function(e,t,n){var a=[G[n][0]];r(T.w.selectBaseline(a,t,"RADIO"))},tableData:G,loading:K,columns:F,totalBaselines:U,permissions:n,hasMultiSelect:!1,selectedBaselineIds:A,leftAlignToolbar:!0,hasSwitch:!1,revertBaselineFetch:T.w.revertBaselineFetch,baselineError:Y,emptyState:z})):R&&(V=d().createElement(d().Fragment,null,d().createElement("b",null,"Select system or historical profile to copy from"),d().createElement("br",null),d().createElement(k.Z,{createBaselineModal:!0,hasMultiSelect:!1,historicalProfiles:null!=M&&M.selectedHSP?[M.selectedHSP]:[],permissions:n,entities:M,selectVariant:"radio",systemColumns:function(e){var t=e.map((function(e){return"display_name"===e.key||"display_selected_hsp"===e.key?{title:"Name",key:e.key,props:{width:20},renderFunc:function(e,t,n){return n.display_selected_hsp||e}}:e}));return n.hspRead&&t.push({key:"historical_profiles",props:{width:10,isStatic:!0},title:"Historical profiles"}),t},deselectHistoricalProfiles:$}))),d().createElement(d().Fragment,null,d().createElement(d().Fragment,null,d().createElement(x.Radio,{isChecked:m,id:"create-baseline","data-testid":"from-scratch-radio",ouiaId:"create-baseline-from-scratch-radio",name:"baseline-create-options",label:"Create baseline from scratch",value:"fromScratchChecked",onChange:ee}),d().createElement(x.Radio,{isChecked:Z,id:"copy-baseline",ouiaId:"create-baseline-copy-baseline-radio","data-testid":"copy-baseline-radio",name:"baseline-create-options",label:"Copy an existing baseline",value:"copyBaselineChecked",onChange:ee}),d().createElement(x.Radio,{isChecked:R,id:"copy-system",ouiaId:"create-baseline-copy-system-radio","data-testid":"copy-system-radio",name:"baseline-create-options",label:"Copy an existing system or historical profile",value:"copySystemChecked",onChange:ee})),d().createElement("div",{className:"md-padding-top md-padding-bottom"},d().createElement(x.Form,null,d().createElement(x.FormGroup,{label:"Baseline name",isRequired:!0,type:"text",helperTextInvalid:Object.prototype.hasOwnProperty.call(W,"detail")?W.detail:null,fieldId:"name",validated:Object.prototype.hasOwnProperty.call(W,"status")?"error":null,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s&&Q())}},d().createElement(x.TextInput,{className:"fact-value",value:s,type:"text",onChange:function(e){return c(e)},validated:Object.prototype.hasOwnProperty.call(W,"status")?x.ValidatedOptions.error:null,"aria-label":"baseline name"})))),V)))};I.propTypes={middlewareListener:m().object,permissions:m().object};const Z=I;var P=n(42325),D=n(41660),H=n(60001),R=n(83068),N=n(43946),F=n(21205),_=n(55140);var L=function(e){(0,l.Z)(p,e);var t,n,r,u=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,c.Z)(n);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,s.Z)(this,e)});function p(e){var t;return(0,i.Z)(this,p),(t=u.call(this,e)).fetchBaseline=function(e){(0,t.props.navigate)("/baselines/"+e)},t.onSelect=function(e,n,r){var a=t.props,i=a.baselineTableData;(0,a.selectBaseline)(-1===r?i.map((function(e){return e[0]})):[i[r][0]],n,"CHECKBOX")},t.state={columns:[{title:"Name",transforms:[S.sortable,(0,S.cellWidth)(45)]},{title:"Last updated",transforms:[S.sortable,(0,S.cellWidth)(30)]},{title:"Associated systems",transforms:[(0,S.cellWidth)(20)]},{title:"",transforms:[(0,S.cellWidth)(5)]}],error:{}},t}return(0,o.Z)(p,[{key:"componentDidMount",value:(t=(0,a.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.chrome,e.next=3,null==t?void 0:t.appAction("baseline-list");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.baselineError,r=t.notificationsSwitchError;e.baselineError!==n&&this.setState({error:n}),e.notificationsSwitchError!==r&&this.setState({error:r})}},{key:"renderTable",value:function(e){var t=this.props,n=t.baselineError,r=t.baselineTableData,a=t.clearEditBaselineData,i=t.emptyState,o=t.exportStatus,l=t.loading,s=t.notificationsSwitchError,c=t.resetBaselinesExportStatus,u=t.revertBaselineFetch,f=t.selectBaseline,p=t.selectedBaselineIds,b=t.totalBaselines,m=this.state,h=m.columns,y=m.error;return a(),d().createElement("div",null,d().createElement(E.Z,{tableId:"CHECKBOX",hasMultiSelect:!0,onSelect:this.onSelect,tableData:r,loading:l,columns:h,kebab:!0,createButton:!0,exportButton:!0,exportStatus:o,onClick:this.fetchBaseline,selectBaseline:f,selectedBaselineIds:p,totalBaselines:b,permissions:e,hasSwitch:!0,notificationsSwitchError:s,emptyState:i,revertBaselineFetch:u,baselineError:n,error:y,resetBaselinesExportStatus:c}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectHistoricProfiles,r=t.setSelectedSystemIds;return d().createElement(N.B.Consumer,null,(function(t){return d().createElement(F.g.Consumer,null,(function(a){var i;return d().createElement(d().Fragment,null,d().createElement(Z,{permissions:t.permissions,selectHistoricProfiles:n,setSelectedSystemIds:r,middlewareListener:null==a?void 0:a.middlewareListener}),d().createElement(y.PageHeader,null,d().createElement(y.PageHeaderTitle,{title:"Baselines"})),d().createElement(y.Main,{store:null==a||null===(i=a.registry)||void 0===i?void 0:i.getStore()},!1===t.permissions.baselinesRead?d().createElement(P.Z,{icon:v.LockIcon,color:"#6a6e73",title:"You do not have access to Baselines",text:["Contact your organization administrator(s) for more information."]}):d().createElement(d().Fragment,null,e.renderTable(t.permissions)))," ")}))}))}}]),p}(p.Component);L.propTypes={loading:m().bool,baselineTableData:m().array,emptyState:m().bool,exportStatus:m().string,selectBaseline:m().func,baselineError:m().object,revertBaselineFetch:m().func,clearEditBaselineData:m().func,selectedBaselineIds:m().array,totalBaselines:m().number,selectHistoricProfiles:m().func,setSelectedSystemIds:m().func,entitiesLoading:m().func,notificationsSwitchError:m().object,resetBaselinesExportStatus:m().func,chrome:m().object,navigate:m().func};const M=(0,h.connect)((function(e){return{loading:e.baselinesTableState.checkboxTable.loading,emptyState:e.baselinesTableState.checkboxTable.emptyState,exportStatus:e.baselinesTableState.checkboxTable.exportStatus,baselineTableData:e.baselinesTableState.checkboxTable.baselineTableData,baselineError:e.baselinesTableState.checkboxTable.baselineError,notificationsSwitchError:e.editBaselineState.notificationsSwitchError,selectedBaselineIds:e.baselinesTableState.checkboxTable.selectedBaselineIds,totalBaselines:e.baselinesTableState.checkboxTable.totalBaselines}}),(function(e){return{selectBaseline:function(t,n,r){return e(T.w.selectBaseline(t,n,r))},revertBaselineFetch:function(){return e(T.w.revertBaselineFetch("CHECKBOX"))},clearEditBaselineData:function(){return e(H.E.clearEditBaselineData())},selectHistoricProfiles:function(t){return e(R.h.selectHistoricProfiles(t))},setSelectedSystemIds:function(t){return e(D.x.setSelectedSystemIds(t))},resetBaselinesExportStatus:function(){return e(T.w.resetBaselinesExportStatus())}}}))((function(e){var t=(0,_.Z)(),n=(0,j.Z)();return d().createElement(L,(0,r.Z)({},e,{chrome:t,navigate:n}))}))},27561:(e,t,n)=>{var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),a=n(7771),i=n(14841),o=Math.max,l=Math.min;e.exports=function(e,t,n){var s,c,u,f,p,d,b=0,m=!1,h=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=s,r=c;return s=c=void 0,b=t,f=e.apply(r,n)}function S(e){var n=e-d;return void 0===d||n>=t||n<0||h&&e-b>=u}function E(){var e=a();if(S(e))return g(e);p=setTimeout(E,function(e){var n=t-(e-d);return h?l(n,u-(e-b)):n}(e))}function g(e){return p=void 0,y&&s?v(e):(s=c=void 0,f)}function x(){var e=a(),n=S(e);if(s=arguments,c=this,d=e,n){if(void 0===p)return function(e){return b=e,p=setTimeout(E,t),m?v(e):f}(d);if(h)return clearTimeout(p),p=setTimeout(E,t),v(d)}return void 0===p&&(p=setTimeout(E,t)),f}return t=i(t)||0,r(n)&&(m=!!n.leading,u=(h="maxWait"in n)?o(i(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==p&&clearTimeout(p),b=0,s=d=c=p=void 0},x.flush=function(){return void 0===p?f:g(a())},x}},41609:(e,t,n)=>{var r=n(280),a=n(64160),i=n(35694),o=n(1469),l=n(98612),s=n(44144),c=n(25726),u=n(36719),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||i(e)))return!e.length;var t=a(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!r(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),a=n(13218),i=n(33448),o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/972.e14390e30fa69fd58ec92cb9c570e9f6.js.map