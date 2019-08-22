!function(e){function t(t){for(var a,r,o=t[0],i=t[1],s=t[2],c=0,d=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(O,r)&&O[r]&&d.push(O[r][0]),O[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(N&&N(t);d.length;)d.shift()();return I.push.apply(I,s||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==O[o]&&(a=!1)}a&&(I.splice(t--,1),e=x(x.s=n[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!y[e]||!T[e])return;for(var n in T[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--_&&0===v&&S()}(e,t),a&&a(e,t)};var r,o=!0,i="6ba2162cd7984b2a679b",s=1e4,c={},d=[],l=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._acceptedDependencies[e[a]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:A,apply:L,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[e]};return r=void 0,t}var u=[],f="idle";function E(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,m,g,_=0,v=0,b={},T={},y={};function w(e){return+e+""===e?+e:e}function A(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,E("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var a=new XMLHttpRequest,r=x.p+""+i+".hot-update.json";a.open("GET",r,!0),a.timeout=t,a.send(null)}catch(e){return n(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return E("idle"),null;T={},b={},y=e.c,g=e.h,E("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},O)D(n);return"prepare"===f&&0===v&&0===_&&S(),t});var t}function D(e){y[e]?(T[e]=!0,_++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function S(){E("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return L(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(w(n));e.resolve(t)}}function L(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,a,r,o,s;function l(e){for(var t=[e],n={},a=t.map(function(e){return{chain:[e],id:e}});a.length>0;){var r=a.pop(),i=r.id,s=r.chain;if((o=C[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<o.parents.length;c++){var d=o.parents[c],l=C[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),p(n[d],[i])):(delete n[d],t.push(d),a.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];-1===e.indexOf(a)&&e.push(a)}}t=t||{};var u={},h=[],_={},v=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var T;s=w(b);var A=!1,D=!1,S=!1,L="";switch((T=m[b]?l(s):{type:"disposed",moduleId:b}).chain&&(L="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(A=new Error("Aborted because of self decline: "+T.moduleId+L));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+L));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(A=new Error("Aborted because "+s+" is not accepted"+L));break;case"accepted":t.onAccepted&&t.onAccepted(T),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),S=!0;break;default:throw new Error("Unexception type "+T.type)}if(A)return E("abort"),Promise.reject(A);if(D)for(s in _[s]=m[s],p(h,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,s)&&(u[s]||(u[s]=[]),p(u[s],T.outdatedDependencies[s]));S&&(p(h,[T.moduleId]),_[s]=v)}var I,F=[];for(a=0;a<h.length;a++)s=h[a],C[s]&&C[s].hot._selfAccepted&&_[s]!==v&&F.push({module:s,errorHandler:C[s].hot._selfAccepted});E("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete O[e]}(e)});for(var R,P,N=h.slice();N.length>0;)if(s=N.pop(),o=C[s]){var B={},k=o.hot._disposeHandlers;for(r=0;r<k.length;r++)(n=k[r])(B);for(c[s]=B,o.hot.active=!1,delete C[s],delete u[s],r=0;r<o.children.length;r++){var M=C[o.children[r]];M&&((I=M.parents.indexOf(s))>=0&&M.parents.splice(I,1))}}for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(o=C[s]))for(P=u[s],r=0;r<P.length;r++)R=P[r],(I=o.children.indexOf(R))>=0&&o.children.splice(I,1);for(s in E("apply"),i=g,_)Object.prototype.hasOwnProperty.call(_,s)&&(e[s]=_[s]);var j=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(o=C[s])){P=u[s];var H=[];for(a=0;a<P.length;a++)if(R=P[a],n=o.hot._acceptedDependencies[R]){if(-1!==H.indexOf(n))continue;H.push(n)}for(a=0;a<H.length;a++){n=H[a];try{n(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:P[a],error:e}),t.ignoreErrored||j||(j=e)}}}for(a=0;a<F.length;a++){var G=F[a];s=G.module,d=[s];try{x(s)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||j||(j=n),j||(j=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||j||(j=e)}}return j?(E("fail"),Promise.reject(j)):(E("idle"),new Promise(function(e){e(h)}))}var C={},O={1:0},I=[];function x(t){if(C[t])return C[t].exports;var n=C[t]={i:t,l:!1,exports:{},hot:p(t),parents:(l=d,d=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=C[e];if(!t)return x;var n=function(n){return t.hot.active?(C[n]?-1===C[n].parents.indexOf(e)&&C[n].parents.push(e):(d=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),x(n)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var o in x)Object.prototype.hasOwnProperty.call(x,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,a(o));return n.e=function(e){return"ready"===f&&E("prepare"),v++,x.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(b[e]||D(e),0===v&&0===_&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),x.t(e,-2&t)},n}(t)),n.l=!0,n.exports}x.e=function(e){var t=[],n=O[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=O[e]=[t,a]});t.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,x.nc&&o.setAttribute("nonce",x.nc),o.src=function(e){return x.p+"js/"+({}[e]||e)+"-"+i+".js"}(e);var s=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=O[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}O[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},x.m=e,x.c=C,x.d=function(e,t,n){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(x.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)x.d(n,a,function(t){return e[t]}.bind(null,a));return n},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="/beta/apps/drift/",x.oe=function(e){throw console.error(e),e},x.h=function(){return i};var F=window.webpackJsonp=window.webpackJsonp||[],R=F.push.bind(F);F.push=t,F=F.slice();for(var P=0;P<F.length;P++)t(F[P]);var N=R;I.push([74,2]),n()}({10:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s});var a=n(45),r="/api/drift/v1",o="/api/system-baseline/v0",i="asc",s="desc";a.a},24:function(e,t,n){(t=e.exports=n(31)(!1)).i(n(72),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .baseline-cell {\n  background-color: #F0AB00; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .active-blue {\n  color: #39A5DC; }\n\n.drift .not-active {\n  color: #D2D2D2; }\n\n.drift .not-active:hover {\n  color: #151515; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift td {\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .sticky-column-header .active-sort {\n  border-bottom: 3px solid #39A5DC; }\n\n.drift .fact-header {\n  min-width: 200px;\n  width: 100%; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .export-kebab {\n  padding: 3px; }\n\n.drift .state-filter-dropdown {\n  min-width: 160px; }\n\n.drift .state-filter-checkbox {\n  padding-left: 10px; }\n\n.drift .baseline-header {\n  background: #F0AB00;\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center;\n  height: 170px; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .system-updated svg {\n  margin-right: 5px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .nested-fact {\n  border-left: 3px solid #39A5DC; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 20px; }\n\n.drift .pf-c-modal-box__body {\n  min-width: 900px;\n  max-width: 1200px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.drift .pf-c-alert {\n  margin-bottom: 30px; }\n\n.drift .button-margin {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n",""])},26:function(e,t,n){"use strict";t.a={OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",SELECT_ACTIVE_TAB:"SELECT_ACTIVE_TAB"}},27:function(e,t,n){"use strict";function a(e,t){var n="";return t.forEach(function(t){t.display_name===e[0]&&(n=t.id)}),n}t.a={buildBaselinesTable:function(e,t){var n=[];return e.forEach(function(e){var a=[];a.push(e.display_name),a.push(e.updated),t&&t.find(function(t){return e.id===t})&&(a.selected=!0),n.push(a)}),n},setBaselineArray:function(e,t){var n=[],r="";return e.forEach(function(e){e.selected&&(r=a(e,t),n.push(r))}),n},findBaselineId:a}},36:function(e,t,n){"use strict";t.a={OPEN_ERROR_ALERT:"OPEN_ERROR_ALERT"}},37:function(e,t,n){"use strict";t.a={OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN"}},38:function(e,t,n){"use strict";t.a={TOGGLE_KEBAB:"TOGGLE_KEBAB"}},39:function(e,t,n){"use strict";t.a={CREATE_NEW_BASELINE:"CREATE_NEW_BASELINE"}},40:function(e,t,n){"use strict";t.a={EXPORT_BASELINES_LIST_TO_CSV:"EXPORT_BASELINES_LIST_TO_CSV"}},45:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},5:function(e,t,n){"use strict";t.a={SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",SET_SELECTED_SYSTEM_IDS:"SET_SELECTED_SYSTEM_IDS",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",ADD_STATE_FILTER:"ADD_STATE_FILTER",TOGGLE_STATE_SORT:"TOGGLE_STATE_SORT",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",CLEAR_STATE:"CLEAR_STATE",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW",REVERT_COMPARE_DATA:"REVERT_COMPARE_DATA",TOGGLE_ACTIVE_SORT:"TOGGLE_ACTIVE_SORT"}},71:function(e,t,n){var a=n(24);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(51)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(24,function(){var t=n(24);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),s=n(19),c=n(18),d=n(42),l=n(50),p=n(35),u=n(1),f=n.n(u),E=n(5),h=n(10);function m(e,t){return t.find(function(t){if(t.filter===e)return t.selected})}function g(e,t,n){for(var a,r=[],o=0;o<e.length;o++)a=m(e[o].state,t),e[o].name.includes(n)&&a&&r.push(e[o]);return r}function _(e,t,n){return n===h.a&&e.sort(function(e,t){return e.state.toLowerCase()>t.state.toLowerCase()?-1:e.state.toLowerCase()<t.state.toLowerCase()?1:0}),n===h.c&&e.sort(function(e,t){return t.state.toLowerCase()>e.state.toLowerCase()?-1:t.state.toLowerCase()<e.state.toLowerCase()?1:0}),t===h.a?e.sort(function(e,t){return""===n?e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0:e.name.toLowerCase()>t.name.toLowerCase()&&e.state===t.state?1:e.name.toLowerCase()<t.name.toLowerCase()&&e.state===t.state?-1:0}):t===h.c&&e.sort(function(e,t){return""===n?t.name.toLowerCase()>e.name.toLowerCase()?1:t.name.toLowerCase()<e.name.toLowerCase()?-1:0:t.name.toLowerCase()>e.name.toLowerCase()&&e.state===t.state?1:t.name.toLowerCase()<e.name.toLowerCase()&&e.state===t.state?-1:0}),e}var v={paginateData:function(e,t,n){var a=[];if(null===e||!e.length)return[];for(var r=0;r<e.length;r++)Math.ceil((r+1)/n)===t&&a.push(e[r]);return a},filterCompareData:function(e,t,n,a){var r,o=[],i=[];if(null===e||!e.length)return[];for(var s=0;s<e.length;s+=1)if(r=m(e[s].state,t),e[s].comparisons){if(e[s].name===n){a.includes(e[s].name)&&r?o.push({name:e[s].name,state:e[s].state,comparisons:e[s].comparisons}):o.push({name:e[s].name,state:e[s].state,comparisons:[]});break}(i=g(e[s].comparisons,t,n)).length&&(a.includes(e[s].name)?o.push({name:e[s].name,state:e[s].state,comparisons:i}):o.push({name:e[s].name,state:e[s].state,comparisons:[]}))}else e[s].name.includes(n)&&r&&o.push(e[s]);return o},sortData:function(e,t,n){var a,r;return(r=_(e,t,n)).forEach(function(e){void 0!==e.comparisons&&e.comparisons.length>0&&(a=_(e.comparisons,t,n),e.comparisons=a)}),r},downloadCSV:function(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",a=e.lineDelimiter||"\n",r=t.map(function(e){return e.display_name}),o="Fact,State,"+(r=r.join(n))+a;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(r,i){i>0&&(o+=n),"systems"===r?(e[r].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=a):"comparisons"===r?e.comparisons.length?(o+=a,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,r){r>0&&(o+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=a):("name"===t&&(o+="    "),o+=e[t])})})):o+=a:o+=e[r]})}),o}(e,t);if(null!==n){var a="system-comparison-export-";a+=(new Date).toISOString(),a+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var r=encodeURI(n),o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",a),o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}},toggleExpandedRow:function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e},updateStateFilters:function(e,t){var n=[];return e.forEach(function(e){e.filter===t.filter?n.push(t):n.push(e)}),n}},b={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],baselines:[],previousStateSystems:[],stateFilters:[{filter:"SAME",display:"Same",selected:!0},{filter:"DIFFERENT",display:"Different",selected:!0},{filter:"INCOMPLETE_DATA",display:"Incomplete data",selected:!0}],factFilter:"",totalFacts:0,page:1,factSort:h.a,stateSort:h.c,perPage:50,loading:!1,expandedRows:[],error:{}};function T(){var e,t,n,a,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,i=arguments.length>1?arguments[1]:void 0,s={},c=[];switch(i.type){case E.a.CLEAR_STATE:return f()({},b);case E.a.REVERT_COMPARE_DATA:return f()({},o,{loading:!1,error:{},systems:o.previousStateSystems});case"".concat(E.a.FETCH_COMPARE,"_PENDING"):return f()({},o,{previousStateSystems:o.systems,systems:[],baselines:[],loading:!0});case"".concat(E.a.FETCH_COMPARE,"_FULFILLED"):return e=v.filterCompareData(i.payload.facts,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{loading:!1,fullCompareData:i.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:i.payload.systems,baselines:i.payload.baselines,page:1,totalFacts:e.length});case"".concat(E.a.FETCH_COMPARE,"_REJECTED"):return s=""===(r=i.payload.response).data?{detail:r.statusText,status:r.status}:r.data.message?{detail:r.data.message,status:r.status}:{detail:r.data.detail,status:r.status},f()({},o,{error:s});case"".concat(E.a.UPDATE_PAGINATION):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,i.payload.page,i.payload.perPage),f()({},o,{page:i.payload.page,perPage:i.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.ADD_STATE_FILTER):return c=v.updateStateFilters(o.stateFilters,i.payload),e=v.filterCompareData(o.fullCompareData,c,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{stateFilters:c,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.FILTER_BY_FACT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,i.payload,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{factFilter:i.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.TOGGLE_FACT_SORT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,i.payload,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{page:1,factSort:i.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.TOGGLE_STATE_SORT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,i.payload),n=v.paginateData(t,1,o.perPage),f()({},o,{page:1,stateSort:i.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.EXPORT_TO_CSV):return v.downloadCSV(o.sortedFilteredFacts,o.systems),f()({},o);case"".concat(E.a.EXPAND_ROW):return a=v.toggleExpandedRow(o.expandedRows,i.payload),e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,a),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,o.page,o.perPage),f()({},o,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return f()({},o)}}var y=n(26),w={addSystemModalOpened:!1,activeTab:0};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(y.a.OPEN_ADD_SYSTEM_MODAL):return f()({},e,{addSystemModalOpened:!e.addSystemModalOpened});case"".concat(y.a.SELECT_ACTIVE_TAB):return f()({},e,{activeTab:t.payload});default:return e}}var D=n(8),S=n(27),L={baselineListLoading:!1,baselineDataLoading:!1,fullBaselineListData:[],baselineTableData:[],selectedBaselineIds:[],baselineData:void 0};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=[],a=[];switch(t.type){case"".concat(D.a.FETCH_BASELINE_LIST,"_PENDING"):return f()({},e,{baselineListLoading:!0});case"".concat(D.a.FETCH_BASELINE_LIST,"_FULFILLED"):return n=S.a.buildBaselinesTable(t.payload,e.selectedBaselineIds),f()({},e,{baselineListLoading:!1,fullBaselineListData:t.payload,baselineTableData:n});case"".concat(D.a.SELECT_BASELINE):return a=S.a.setBaselineArray(t.payload,e.fullBaselineListData),f()({},e,{baselineTableData:t.payload,selectedBaselineIds:a});case"".concat(D.a.SET_SELECTED_BASELINES):return f()({},e,{selectedBaselineIds:t.payload});case"".concat(D.a.FETCH_BASELINE_DATA,"_PENDING"):return f()({},e,{baselineDataLoading:!0});case"".concat(D.a.FETCH_BASELINE_DATA,"_FULFILLED"):return f()({},e,{baselineDataLoading:!1,baselineData:t.payload});case"".concat(D.a.CLEAR_BASELINE_DATA):return f()({},e,{baselineData:void 0});case"".concat(D.a.CREATE_BASELINE,"_PENDING"):return f()({},e,{baselineListLoading:!0,baselineDataLoading:!0});case"".concat(D.a.CREATE_BASELINE,"_FULFILLED"):return f()({},e,{baselineListLoading:!1,baselineDataLoading:!1,baselineData:t.payload});case"".concat(D.a.PATCH_BASELINE,"_PENDING"):return f()({},e,{baselineDataLoading:!0});case"".concat(D.a.PATCH_BASELINE,"_FULFILLED"):return f()({},e,{baselineDataLoading:!1,baselineData:t.payload});default:return e}}var O=n(36),I={errorAlertOpened:!1};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.errorAlertOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(O.a.OPEN_ERROR_ALERT):return!e;default:return e}}var F=n(37),R={filterDropdownOpened:!1};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.filterDropdownOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(F.a.OPEN_FILTER_DROPDOWN):return!e;default:return e}}var N=n(38),B={kebabOpened:!1};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B.kebabOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(N.a.TOGGLE_KEBAB):return!e;default:return e}}var M=n(39),j={creatingNewBaseline:!1};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(M.a.CREATE_NEW_BASELINE):return f()({},e,{creatingNewBaseline:!e.creatingNewBaseline});default:return e}}var G=n(40);var U,V={downloadCSV:function(e){var t=function(e){if(null===e||!e.length)return null;var t=e.columnDelimiter||",",n=e.lineDelimiter||"\n",a="Name,Last Sync,"+n;return e.forEach(function(e){e.forEach(function(e){a+=e,a+=t}),a+=n}),a}(e);if(null!==t){var n="baseline-list-export-";n+=(new Date).toISOString(),n+=".csv",t.match(/^data:text\/csv/i)||(t="data:text/csv;charset=utf-8,"+t);var a=encodeURI(t),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",n),r.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(G.a.EXPORT_BASELINES_LIST_TO_CSV):return V.downloadCSV(t.payload),f()({},e);default:return f()({},e)}}var W=n(13),Y=n.n(W),q=n(14),z=n.n(q),J=n(15),K=n.n(J),Q=n(16),Z=n.n(Q),$=n(17),ee=n.n($),te=n(3),ne=n.n(te),ae=n(11),re=n(46),oe=n.n(re),ie=n(47),se=n.n(ie),ce=n(21),de=n.n(ce),le=n(33),pe=n.n(le);function ue(e){return function(t){function n(e){var t;return Y()(this,n),(t=K()(this,Z()(n).call(this,e))).state={component:null},t}var a;return ee()(n,t),z()(n,[{key:"componentDidMount",value:(a=pe()(de.a.mark(function t(){var n,a;return de.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component)}var fe=ue(function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,425))}),Ee=ue(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,426))}),he=function(e){var t=e.component,n=e.rootClass,a=se()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),r.a.createElement(ae.d,oe()({},a,{component:t}))};he.propTypes={component:ne.a.func,rootClass:ne.a.string};var me=function(){return r.a.createElement(ae.g,null,window.insights.chrome.isBeta()?r.a.createElement(he,{exact:!0,path:"/baselines",component:Ee}):null,r.a.createElement(he,{exact:!0,path:"/",component:fe}),r.a.createElement(ae.c,{to:"/"}))},ge=(n(71),function(e){function t(){return Y()(this,t),K()(this,Z()(t).apply(this,arguments))}return ee()(t,e),z()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return r.a.createElement(me,{childProps:this.props})}}]),t}(a.Component));ge.propTypes={history:ne.a.object};var _e=Object(ae.k)(Object(c.connect)()(ge));var ve=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])};i.a.render(r.a.createElement(c.Provider,{store:function(){if(U)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(U=Object(p.getRegistry)({},[Object(l.a)()].concat(t))).register({compareState:T,addSystemModalState:A,baselinesTableState:C,errorAlertOpened:x,filterDropdownOpened:P,kebabOpened:k,baselinesPageState:H,baselinesKebabState:X}),U}().getStore()},r.a.createElement(d.b,null,r.a.createElement(s.BrowserRouter,{basename:ve(window.location.pathname)},r.a.createElement(_e,null)))),document.getElementById("root"))},8:function(e,t,n){"use strict";t.a={FETCH_BASELINE_LIST:"FETCH_BASELINE_LIST",SELECT_BASELINE:"SELECT_BASELINE",SET_SELECTED_BASELINES:"SET_SELECTED_BASELINES",FETCH_BASELINE_DATA:"FETCH_BASELINE_DATA",CLEAR_BASELINE_DATA:"CLEAR_BASELINE_DATA",CREATE_BASELINE:"CREATE_BASELINE",PATCH_BASELINE:"PATCH_BASELINE"}}});
//# sourceMappingURL=../sourcemaps/App.js.map