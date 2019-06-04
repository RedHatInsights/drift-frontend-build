!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,d=[];s<o.length;s++)a=o[s],R[a]&&d.push(R[a][0]),R[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(I&&I(t);d.length;)d.shift()();return x.push.apply(x,c||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==R[o]&&(r=!1)}r&&(x.splice(t--,1),e=F(F.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--E&&0===y&&D()}(e,t),r&&r(e,t)};var a,o=!0,i="b830903c593880c679e8",c=1e4,s={},d=[],l=[];var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,g,E=0,y=0,v={},_={},O={};function b(e){return+e+""===e?+e:e}function T(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=F.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},v={},O=e.c,g=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},R)w(n);return"prepare"===u&&0===y&&0===E&&D(),t})}function w(e){O[e]?(_[e]=!0,E++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=F.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):v[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return A(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(b(n));e.resolve(t)}}function A(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=S[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<o.parents.length;s++){var d=o.parents[s],l=S[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),p(n[d],[i])):(delete n[d],t.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},E=[],y={},v=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var T;c=b(_);var w=!1,D=!1,A=!1,x="";switch((T=m[_]?l(c):{type:"disposed",moduleId:_}).chain&&(x="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+T.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(w=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(T),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),A=!0;break;default:throw new Error("Unexception type "+T.type)}if(w)return f("abort"),Promise.reject(w);if(D)for(c in y[c]=m[c],p(E,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],T.outdatedDependencies[c]));A&&(p(E,[T.moduleId]),y[c]=v)}var C,P=[];for(r=0;r<E.length;r++)c=E[r],S[c]&&S[c].hot._selfAccepted&&P.push({module:c,errorHandler:S[c].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete R[e]}(e)});for(var L,I,M=E.slice();M.length>0;)if(c=M.pop(),o=S[c]){var k={},N=o.hot._disposeHandlers;for(a=0;a<N.length;a++)(n=N[a])(k);for(s[c]=k,o.hot.active=!1,delete S[c],delete h[c],a=0;a<o.children.length;a++){var j=S[o.children[a]];j&&((C=j.parents.indexOf(c))>=0&&j.parents.splice(C,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(o=S[c]))for(I=h[c],a=0;a<I.length;a++)L=I[a],(C=o.children.indexOf(L))>=0&&o.children.splice(C,1);for(c in f("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var G=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(o=S[c])){I=h[c];var H=[];for(r=0;r<I.length;r++)if(L=I[r],n=o.hot._acceptedDependencies[L]){if(-1!==H.indexOf(n))continue;H.push(n)}for(r=0;r<H.length;r++){n=H[r];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:I[r],error:e}),t.ignoreErrored||G||(G=e)}}}for(r=0;r<P.length;r++){var B=P[r];c=B.module,d=[c];try{F(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||G||(G=n),G||(G=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||G||(G=e)}}return G?(f("fail"),Promise.reject(G)):(f("idle"),new Promise(function(e){e(E)}))}var S={},R={0:0},x=[];function F(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:T,apply:A,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return a=void 0,t}(t),parents:(l=d,d=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return F;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(d=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),F(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return F[e]},set:function(t){F[e]=t}}};for(var o in F)Object.prototype.hasOwnProperty.call(F,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===u&&f("prepare"),y++,F.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(v[e]||w(e),0===y&&0===E&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),F.t(e,-2&t)},n}(t)),n.l=!0,n.exports}F.e=function(e){var t=[],n=R[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=R[e]=[t,r]});t.push(n[2]=r);var a,o=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,F.nc&&c.setAttribute("nonce",F.nc),c.src=function(e){return F.p+"js/"+({}[e]||e)+"-"+i+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=R[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}R[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,o.appendChild(c)}return Promise.all(t)},F.m=e,F.c=S,F.d=function(e,t,n){F.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},F.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},F.t=function(e,t){if(1&t&&(e=F(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(F.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)F.d(n,r,function(t){return e[t]}.bind(null,r));return n},F.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return F.d(t,"a",t),t},F.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},F.p="/beta/apps/drift/",F.oe=function(e){throw console.error(e),e},F.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],P=C.push.bind(C);C.push=t,C=C.slice();for(var L=0;L<C.length;L++)t(C[L]);var I=P;x.push([279,2]),n()}({12:function(e,t,n){"use strict";var r=n(5),a=n(13),o=n.n(a),i=n(21),c=n.n(i),s=n(239),d=n.n(s),l=n(9);function p(){return(p=c()(o.a.mark(function e(t){var n,r,a=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,d.a.get(l.c.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var u={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return p.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.a.FETCH_COMPARE,payload:u.getCompare(e)}},revertCompareData:function(e){return{type:r.a.REVERT_COMPARE_DATA,payload:e}},clearState:function(){return{type:r.a.CLEAR_STATE}},toggleAddSystemModal:function(){return{type:r.a.OPEN_ADD_SYSTEM_MODAL}},toggleErrorAlert:function(){return{type:r.a.OPEN_ERROR_MODAL}},setSelectedSystemIds:function(e){return{type:r.a.SET_SELECTED_SYSTEM_IDS,payload:{selectedSystemIds:e}}},toggleFilterDropDown:function(){return{type:r.a.OPEN_FILTER_DROPDOWN}},toggleFactSort:function(e){return{type:r.a.TOGGLE_FACT_SORT,payload:e===l.a?l.b:l.a}},addStateFilter:function(e){return e.selected=!e.selected,{type:r.a.ADD_STATE_FILTER,payload:e}},toggleStateSort:function(e){var t;return t=e===l.a?l.b:e===l.b?"":l.a,{type:r.a.TOGGLE_STATE_SORT,payload:t}},filterByFact:function(e){return{type:r.a.FILTER_BY_FACT,payload:e}},updatePagination:function(e){return{type:r.a.UPDATE_PAGINATION,payload:e}},exportToCSV:function(){return{type:r.a.EXPORT_TO_CSV}},expandRow:function(e){return{type:r.a.EXPAND_ROW,payload:e}},toggleKebab:function(){return{type:r.a.TOGGLE_KEBAB}}},h=n(6),m=n.n(h),g={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],previousStateSystems:[],addSystemModalOpened:!1,filterDropdownOpened:!1,stateFilters:[{filter:"SAME",display:"Same",selected:!0},{filter:"DIFFERENT",display:"Different",selected:!0},{filter:"INCOMPLETE_DATA",display:"Incomplete data",selected:!0}],factFilter:"",totalFacts:0,page:1,factSort:l.a,stateSort:"",perPage:10,loading:!1,expandedRows:[],kebabOpened:!1,error:{},errorAlertOpened:!1};function E(e,t,n){var r=[];if(null===e||!e.length)return[];for(var a=0;a<e.length;a++)Math.ceil((a+1)/n)===t&&r.push(e[a]);return r}function y(e,t){return t.find(function(t){if(t.filter===e)return t.selected})}function v(e,t,n,r){var a,o=[],i=[];if(null===e||!e.length)return[];for(var c=0;c<e.length;c+=1)if(a=y(e[c].state,t),e[c].comparisons){if(e[c].name===n){r.includes(e[c].name)&&a?o.push({name:e[c].name,state:e[c].state,comparisons:e[c].comparisons}):o.push({name:e[c].name,state:e[c].state,comparisons:[]});break}(i=_(e[c].comparisons,t,n)).length&&(r.includes(e[c].name)?o.push({name:e[c].name,state:e[c].state,comparisons:i}):o.push({name:e[c].name,state:e[c].state,comparisons:[]}))}else e[c].name.includes(n)&&a&&o.push(e[c]);return o}function _(e,t,n){for(var r,a=[],o=0;o<e.length;o++)r=y(e[o].state,t),e[o].name.includes(n)&&r&&a.push(e[o]);return a}function O(e,t,n){var r,a;return(a=b(e,t,n)).forEach(function(e){void 0!==e.comparisons&&e.comparisons.length>0&&(r=b(e.comparisons,t,n),e.comparisons=r)}),a}function b(e,t,n){return n===l.a&&e.sort(function(e,t){return e.state.toLowerCase()>t.state.toLowerCase()?-1:e.state.toLowerCase()<t.state.toLowerCase()?1:0}),n===l.b&&e.sort(function(e,t){return t.state.toLowerCase()>e.state.toLowerCase()?-1:t.state.toLowerCase()<e.state.toLowerCase()?1:0}),t===l.a?e.sort(function(e,t){return""===n?e.name>t.name?1:e.name<t.name?-1:0:e.name>t.name&&e.state===t.state?1:e.name<t.name&&e.state===t.state?-1:0}):t===l.b&&e.sort(function(e,t){return""===n?t.name>e.name?1:t.name<e.name?-1:0:t.name>e.name&&e.state===t.state?1:t.name<e.name&&e.state===t.state?-1:0}),e}function T(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",r=e.lineDelimiter||"\n",a=t.map(function(e){return e.display_name}),o="Fact,State,"+(a=a.join(n))+r;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(a,i){i>0&&(o+=n),"systems"===a?(e[a].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=r):"comparisons"===a?e.comparisons.length?(o+=r,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,a){a>0&&(o+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=r):("name"===t&&(o+="    "),o+=e[t])})})):o+=r:o+=e[a]})}),o}(e,t);if(null!==n){var r="system-comparison-export-",a=new Date;r+=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),r+="_",r+=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),r+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var o=encodeURI(n),i=document.createElement("a");i.setAttribute("href",o),i.setAttribute("download",r),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}var w={compareReducer:function(){var e,t,n,a,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,c=arguments.length>1?arguments[1]:void 0,s={},d=[];switch(c.type){case r.a.CLEAR_STATE:return m()({},g);case r.a.REVERT_COMPARE_DATA:return m()({},i,{loading:!1,error:{},systems:i.previousStateSystems});case"".concat(r.a.FETCH_COMPARE,"_PENDING"):return m()({},i,{previousStateSystems:i.systems,systems:[],loading:!0});case"".concat(r.a.FETCH_COMPARE,"_FULFILLED"):return n=E(t=O(e=v(c.payload.facts,i.stateFilters,i.factFilter,i.expandedRows),i.factSort,i.stateSort),1,i.perPage),m()({},i,{loading:!1,fullCompareData:c.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:c.payload.systems,page:1,totalFacts:e.length});case"".concat(r.a.FETCH_COMPARE,"_REJECTED"):return s=""===(o=c.payload.response).data?{detail:o.statusText,status:o.status}:o.data.message?{detail:o.data.message,status:o.status}:{detail:o.data.detail,status:o.status},m()({},i,{error:s});case"".concat(r.a.UPDATE_PAGINATION):return n=E(t=O(e=v(i.fullCompareData,i.stateFilters,i.factFilter,i.expandedRows),i.factSort,i.stateSort),c.payload.page,c.payload.perPage),m()({},i,{page:c.payload.page,perPage:c.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.ADD_STATE_FILTER):return d=function(e,t){var n=[];return e.forEach(function(e){e.filter===t.filter?n.push(t):n.push(e)}),n}(i.stateFilters,c.payload),n=E(t=O(e=v(i.fullCompareData,d,i.factFilter,i.expandedRows),i.factSort,i.stateSort),1,i.perPage),m()({},i,{stateFilters:d,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.FILTER_BY_FACT):return n=E(t=O(e=v(i.fullCompareData,i.stateFilters,c.payload,i.expandedRows),i.factSort,i.stateSort),1,i.perPage),m()({},i,{factFilter:c.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.TOGGLE_FACT_SORT):return n=E(t=O(e=v(i.fullCompareData,i.stateFilters,i.factFilter,i.expandedRows),c.payload,i.stateSort),1,i.perPage),m()({},i,{page:1,factSort:c.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.TOGGLE_STATE_SORT):return n=E(t=O(e=v(i.fullCompareData,i.stateFilters,i.factFilter,i.expandedRows),i.factSort,c.payload),1,i.perPage),m()({},i,{page:1,stateSort:c.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.a.EXPORT_TO_CSV):return T(i.sortedFilteredFacts,i.systems),m()({},i);case"".concat(r.a.EXPAND_ROW):return a=function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e}(i.expandedRows,c.payload),n=E(t=O(e=v(i.fullCompareData,i.stateFilters,i.factFilter,a),i.factSort,i.stateSort),i.page,i.perPage),m()({},i,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return m()({},i)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_ADD_SYSTEM_MODAL):return m()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return m()({},e)}},errorAlertReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_ERROR_MODAL):return m()({},e,{errorAlertOpened:!e.errorAlertOpened});default:return m()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.OPEN_FILTER_DROPDOWN):return m()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return m()({},e)}},actionKebabReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.a.TOGGLE_KEBAB):return m()({},e,{kebabOpened:!e.kebabOpened});default:return m()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return w})},240:function(e){e.exports={a:"1.1.0"}},27:function(e,t,n){(t=e.exports=n(29)(!1)).i(n(277),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .active-blue {\n  color: #39A5DC; }\n\n.drift .not-active {\n  color: #D2D2D2; }\n\n.drift .not-active:hover {\n  color: #151515; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift td {\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .sticky-column-header .active-sort {\n  border-bottom: 3px solid #39A5DC; }\n\n.drift .fact-header {\n  min-width: 200px;\n  width: 100%; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .export-kebab {\n  padding: 3px; }\n\n.drift .state-filter-dropdown {\n  min-width: 160px; }\n\n.drift .state-filter-checkbox {\n  padding-left: 10px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center;\n  height: 170px; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .system-updated svg {\n  margin-right: 5px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .nested-fact {\n  border-left: 3px solid #39A5DC; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 20px; }\n\n.drift .pf-c-modal-box__body {\n  min-width: 900px;\n  max-width: 1200px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.drift .pf-c-alert {\n  margin-bottom: 30px; }\n",""])},276:function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(41)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(27,function(){var t=n(27);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},279:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),i=n(30),c=n.n(i),s=n(160),d=n(20),l=n(243),p=n(35),u=n(12);var f=n(15),h=n.n(f),m=n(16),g=n.n(m),E=n(17),y=n.n(E),v=n(18),_=n.n(v),O=n(19),b=n.n(O),T=n(0),w=n.n(T),D=n(233),A=n(241),S=n.n(A),R=n(242),x=n.n(R),F=n(77),C=n(236),P=n(232),L=n(13),I=n.n(L),M=n(21),k=n.n(M);var N=function(e){return function(t){function n(e){var t;return h()(this,n),(t=y()(this,_()(n).call(this,e))).state={component:null},t}return b()(n,t),g()(n,[{key:"componentDidMount",value:function(){var t=k()(I.a.mark(function t(){var n,r;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),n}(a.Component)}(function(){return n.e(1).then(n.bind(null,423))}),j=function(e){var t=e.component,n=e.rootClass,r=x()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),a.setAttribute("role","main"),o.a.createElement(F.a,S()({},r,{component:t}))};j.propTypes={component:w.a.func,rootClass:w.a.string};var G=function(){return o.a.createElement(C.a,null,o.a.createElement(j,{path:"/",component:N}),o.a.createElement(P.a,{to:"/"}))},H=(n(276),function(e){function t(){return h()(this,t),y()(this,_()(t).apply(this,arguments))}return b()(t,e),g()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(G,{childProps:this.props})}}]),t}(a.Component));H.propTypes={history:w.a.object};var B=Object(D.a)(Object(d.connect)()(H));var U=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])};c.a.render(o.a.createElement(d.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(p.getRegistry)({},[Object(l.a)()].concat(t))).register({compareReducer:u.b.compareReducer,addSystemModalReducer:u.b.addSystemModalReducer,errorAlertReducer:u.b.errorAlertReducer,filterDropdownReducer:u.b.filterDropdownReducer,actionKebabReducer:u.b.actionKebabReducer}),r}().getStore()},o.a.createElement(s.a,{basename:U(window.location.pathname)},o.a.createElement(B,null))),document.getElementById("root"))},5:function(e,t,n){"use strict";t.a={CLEAR_STATE:"CLEAR_STATE",SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",OPEN_ERROR_MODAL:"OPEN_ERROR_MODAL",SET_SELECTED_SYSTEM_IDS:"SET_SELECTED_SYSTEM_IDS",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",ADD_STATE_FILTER:"ADD_STATE_FILTER",TOGGLE_STATE_SORT:"TOGGLE_STATE_SORT",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW",TOGGLE_KEBAB:"TOGGLE_KEBAB",REVERT_COMPARE_DATA:"REVERT_COMPARE_DATA",TOGGLE_ACTIVE_SORT:"TOGGLE_ACTIVE_SORT"}},9:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(240),a="/api/drift/v1",o="asc",i="desc";r.a}});
//# sourceMappingURL=../sourcemaps/App.js.map