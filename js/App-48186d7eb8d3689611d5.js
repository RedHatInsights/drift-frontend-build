!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],d=0,s=[];d<o.length;d++)a=o[d],x[a]&&s.push(x[a][0]),x[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);s.length;)s.shift()();return C.push.apply(C,c||[]),n()}function n(){for(var e,t=0;t<C.length;t++){for(var n=C[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==x[o]&&(r=!1)}r&&(C.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--y&&0===v&&D()}(e,t),r&&r(e,t)};var a,o=!0,i="48186d7eb8d3689611d5",c=1e4,d={},s=[],l=[];var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,g,y=0,v=0,E={},_={},w={};function O(e){return+e+""===e?+e:e}function b(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=P.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},E={},w=e.c,g=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},x)T(n);return"prepare"===u&&0===v&&0===y&&D(),t})}function T(e){w[e]?(_[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):E[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return A(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function A(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=R[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<o.parents.length;d++){var s=o.parents[d],l=R[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),p(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},y=[],v={},E=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var b;c=O(_);var T=!1,D=!1,A=!1,C="";switch((b=m[_]?l(c):{type:"disposed",moduleId:_}).chain&&(C="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":t.onDeclined&&t.onDeclined(b),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+b.moduleId+C));break;case"declined":t.onDeclined&&t.onDeclined(b),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+C));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(b),t.ignoreUnaccepted||(T=new Error("Aborted because "+c+" is not accepted"+C));break;case"accepted":t.onAccepted&&t.onAccepted(b),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(b),A=!0;break;default:throw new Error("Unexception type "+b.type)}if(T)return f("abort"),Promise.reject(T);if(D)for(c in v[c]=m[c],p(y,b.outdatedModules),b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],b.outdatedDependencies[c]));A&&(p(y,[b.moduleId]),v[c]=E)}var F,S=[];for(r=0;r<y.length;r++)c=y[r],R[c]&&R[c].hot._selfAccepted&&S.push({module:c,errorHandler:R[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete x[e]}(e)});for(var L,M,I=y.slice();I.length>0;)if(c=I.pop(),o=R[c]){var k={},N=o.hot._disposeHandlers;for(a=0;a<N.length;a++)(n=N[a])(k);for(d[c]=k,o.hot.active=!1,delete R[c],delete h[c],a=0;a<o.children.length;a++){var j=R[o.children[a]];j&&((F=j.parents.indexOf(c))>=0&&j.parents.splice(F,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(o=R[c]))for(M=h[c],a=0;a<M.length;a++)L=M[a],(F=o.children.indexOf(L))>=0&&o.children.splice(F,1);for(c in f("apply"),i=g,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var H=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(o=R[c])){M=h[c];var B=[];for(r=0;r<M.length;r++)if(L=M[r],n=o.hot._acceptedDependencies[L]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<S.length;r++){var G=S[r];c=G.module,s=[c];try{P(c)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise(function(e){e(y)}))}var R={},x={0:0},C=[];function P(t){if(R[t])return R[t].exports;var n=R[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:b,apply:A,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return a=void 0,t}(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=R[e];if(!t)return P;var n=function(n){return t.hot.active?(R[n]?-1===R[n].parents.indexOf(e)&&R[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===u&&f("prepare"),v++,P.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===u&&(E[e]||T(e),0===v&&0===y&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=x[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=x[e]=[t,r]});t.push(n[2]=r);var a,o=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,P.nc&&c.setAttribute("nonce",P.nc),c.src=function(e){return P.p+"js/"+({}[e]||e)+"-"+i+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=x[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}x[e]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,o.appendChild(c)}return Promise.all(t)},P.m=e,P.c=R,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/drift/",P.oe=function(e){throw console.error(e),e},P.h=function(){return i};var F=window.webpackJsonp=window.webpackJsonp||[],S=F.push.bind(F);F.push=t,F=F.slice();for(var L=0;L<F.length;L++)t(F[L]);var M=S;C.push([204,2]),n()}({122:function(e,t,n){(t=e.exports=n(129)(!1)).i(n(201),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .active-blue {\n  color: #39A5DC; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift td {\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .fact-header-cell td {\n  border-bottom: 3px solid #39A5DC; }\n\n.drift .fact-header {\n  min-width: 200px;\n  width: 100%; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .export-kebab {\n  padding: 3px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center;\n  height: 170px; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .system-updated svg {\n  margin-right: 5px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .nested-fact {\n  border-left: 3px solid #39A5DC; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 20px; }\n\n.drift .pf-c-modal-box__body {\n  min-width: 900px;\n  max-width: 1200px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.drift .pf-c-alert {\n  margin-bottom: 30px; }\n",""])},143:function(e){e.exports={a:"1.1.0"}},200:function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(151)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(122,function(){var t=n(122);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},204:function(e,t,n){"use strict";n.r(t);var r,a=n(2),o=n.n(a),i=n(12),c=n.n(i),d=n(111),s=n(45),l=n(147),p=n(127),u=n(35);var f=n(48),h=n.n(f),m=n(49),g=n.n(m),y=n(50),v=n.n(y),E=n(51),_=n.n(E),w=n(52),O=n.n(w),b=n(1),T=n.n(b),D=n(116),A=n(144),R=n.n(A),x=n(145),C=n.n(x),P=n(65),F=n(115),S=n(114),L=n(36),M=n.n(L),I=n(55),k=n.n(I);var N=function(e){return function(t){function n(e){var t;return h()(this,n),(t=v()(this,_()(n).call(this,e))).state={component:null},t}return O()(n,t),g()(n,[{key:"componentDidMount",value:function(){var t=k()(M.a.mark(function t(){var n,r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),n}(a.Component)}(function(){return n.e(1).then(n.bind(null,318))}),j=function(e){var t=e.component,n=e.rootClass,r=C()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),a.setAttribute("role","main"),o.a.createElement(P.a,R()({},r,{component:t}))};j.propTypes={component:T.a.func,rootClass:T.a.string};var H=function(){return o.a.createElement(F.a,null,o.a.createElement(j,{path:"/",component:N}),o.a.createElement(S.a,{to:"/"}))},B=(n(200),function(e){function t(){return h()(this,t),v()(this,_()(t).apply(this,arguments))}return O()(t,e),g()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(H,{childProps:this.props})}}]),t}(a.Component));B.propTypes={history:T.a.object};var G=Object(D.a)(Object(s.connect)()(B));var Y=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])};c.a.render(o.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(p.getRegistry)({},[Object(l.a)()].concat(t))).register({compareReducer:u.b.compareReducer,addSystemModalReducer:u.b.addSystemModalReducer,errorAlertReducer:u.b.errorAlertReducer,filterDropdownReducer:u.b.filterDropdownReducer,exportReducer:u.b.exportReducer}),r}().getStore()},o.a.createElement(d.a,{basename:Y(window.location.pathname)},o.a.createElement(G,null))),document.getElementById("root"))},35:function(e,t,n){"use strict";var r=n(8),a=n(36),o=n.n(a),i=n(55),c=n.n(i),d=n(142),s=n.n(d),l="/api/drift/v1";n(143).a;function p(){return(p=c()(o.a.mark(function e(t){var n,r,a=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,s.a.get(l.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var u={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return p.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.a.FETCH_COMPARE,payload:u.getCompare(e)}},revertCompareData:function(e){return{type:r.a.REVERT_COMPARE_DATA,payload:e}},clearState:function(){return{type:r.a.CLEAR_STATE}},toggleAddSystemModal:function(){return{type:r.a.OPEN_ADD_SYSTEM_MODAL}},toggleErrorAlert:function(){return{type:r.a.OPEN_ERROR_MODAL}},setSelectedSystemIds:function(e){return{type:r.a.SET_SELECTED_SYSTEM_IDS,payload:{selectedSystemIds:e}}},toggleFilterDropDown:function(){return{type:r.a.OPEN_FILTER_DROPDOWN}},toggleFactSort:function(e){return{type:r.a.TOGGLE_FACT_SORT,payload:e}},filterByState:function(e){return{type:r.a.FILTER_BY_STATE,payload:e}},filterByFact:function(e){return{type:r.a.FILTER_BY_FACT,payload:e}},updatePagination:function(e){return{type:r.a.UPDATE_PAGINATION,payload:e}},exportToCSV:function(){return{type:r.a.EXPORT_TO_CSV}},expandRow:function(e){return{type:r.a.EXPAND_ROW,payload:e}},toggleKebab:function(){return{type:r.a.TOGGLE_KEBAB}}},h=n(16),m=n.n(h),g={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],previousStateSystems:[],addSystemModalOpened:!1,filterDropdownOpened:!1,stateFilter:"all",factFilter:"",totalFacts:0,page:1,sort:"asc",perPage:10,loading:!1,expandedRows:[],kebabOpened:!1,error:{},errorAlertOpened:!1};function y(e,t,n){var r=[];if(null===e||!e.length)return[];for(var a=0;a<e.length;a++)Math.ceil((a+1)/n)===t&&r.push(e[a]);return r}function v(e,t,n,r){var a=[],o=[];if(null===e||!e.length)return[];for(var i=0;i<e.length;i+=1)if(e[i].comparisons){if(e[i].name===n){r.includes(e[i].name)?a.push({name:e[i].name,state:e[i].state,comparisons:e[i].comparisons}):a.push({name:e[i].name,state:e[i].state,comparisons:[]});break}(o=E(e[i].comparisons,t,n)).length&&(r.includes(e[i].name)?a.push({name:e[i].name,state:e[i].state,comparisons:o}):a.push({name:e[i].name,state:e[i].state,comparisons:[]}))}else e[i].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?a.push(e[i]):t===e[i].state&&a.push(e[i]));return a}function E(e,t,n){for(var r=[],a=0;a<e.length;a++)e[a].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?r.push(e[a]):t===e[a].state&&r.push(e[a]));return r}function _(e,t){return"asc"===t?e.sort(function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}):"desc"===t&&e.sort(function(e,t){return t.name.toLowerCase()>e.name.toLowerCase()?1:t.name.toLowerCase()<e.name.toLowerCase()?-1:0}),e}function w(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",r=e.lineDelimiter||"\n",a=t.map(function(e){return e.display_name}),o="Fact,State,"+(a=a.join(n))+r;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(a,i){i>0&&(o+=n),"systems"===a?(e[a].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=r):"comparisons"===a?e.comparisons.length?(o+=r,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,a){a>0&&(o+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=r):("name"===t&&(o+="    "),o+=e[t])})})):o+=r:o+=e[a]})}),o}(e,t);if(null!==n){var r="system-comparison-export-",a=new Date;r+=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),r+="_",r+=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),r+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var o=encodeURI(n),i=document.createElement("a");i.setAttribute("href",o),i.setAttribute("download",r),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}var O={compareReducer:function(){var e,t,n,a,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,c=arguments.length>1?arguments[1]:void 0,d={};switch(c.type){case r.a.CLEAR_STATE:return m()({},g);case r.a.REVERT_COMPARE_DATA:return m()({},i,{loading:!1,error:{},systems:i.previousStateSystems});case"".concat(r.a.FETCH_COMPARE,"_PENDING"):return m()({},i,{previousStateSystems:i.systems,systems:[],loading:!0});case"".concat(r.a.FETCH_COMPARE,"_FULFILLED"):return n=y(t=_(e=v(c.payload.facts,i.stateFilter,i.factFilter,i.expandedRows),i.sort),1,i.perPage),m()({},i,{loading:!1,fullCompareData:c.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:c.payload.systems,page:1,totalFacts:e.length});case"".concat(r.a.FETCH_COMPARE,"_REJECTED"):return d=""===(o=c.payload.response).data?{detail:o.statusText,status:o.status}:o.data.message?{detail:o.data.message,status:o.status}:{detail:o.data.detail,status:o.status},m()({},i,{error:d});case"".concat(r.a.UPDATE_PAGINATION):return n=y(t=_(e=v(i.fullCompareData,i.stateFilter,i.factFilter,i.expandedRows),i.sort),c.payload.page,c.payload.perPage),m()({},i,{page:c.payload.page,perPage:c.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.FILTER_BY_STATE):return n=y(t=_(e=v(i.fullCompareData,c.payload,i.factFilter,i.expandedRows),i.sort),1,i.perPage),m()({},i,{stateFilter:c.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.FILTER_BY_FACT):return n=y(t=_(e=v(i.fullCompareData,i.stateFilter,c.payload,i.expandedRows),i.sort),1,i.perPage),m()({},i,{factFilter:c.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.TOGGLE_FACT_SORT):return n=y(t=_(e=v(i.fullCompareData,i.stateFilter,i.factFilter,i.expandedRows),c.payload),1,i.perPage),m()({},i,{page:1,sort:c.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.EXPORT_TO_CSV):return w(i.sortedFilteredFacts,i.systems),m()({},i);case"".concat(r.a.EXPAND_ROW):return a=function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e}(i.expandedRows,c.payload),n=y(t=_(e=v(i.fullCompareData,i.stateFilter,i.factFilter,a),i.sort),i.page,i.perPage),m()({},i,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return m()({},i)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_ADD_SYSTEM_MODAL):return m()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return m()({},e)}},errorAlertReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_ERROR_MODAL):return m()({},e,{errorAlertOpened:!e.errorAlertOpened});default:return m()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_FILTER_DROPDOWN):return m()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return m()({},e)}},exportReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.TOGGLE_KEBAB):return m()({},e,{kebabOpened:!e.kebabOpened});default:return m()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return O})},8:function(e,t,n){"use strict";t.a={CLEAR_STATE:"CLEAR_STATE",SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",OPEN_ERROR_MODAL:"OPEN_ERROR_MODAL",SET_SELECTED_SYSTEM_IDS:"SET_SELECTED_SYSTEM_IDS",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",FILTER_BY_STATE:"FILTER_BY_STATE",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW",TOGGLE_KEBAB:"TOGGLE_KEBAB",REVERT_COMPARE_DATA:"REVERT_COMPARE_DATA"}}});
//# sourceMappingURL=../sourcemaps/App.js.map