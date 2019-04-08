!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],d=0,s=[];d<a.length;d++)o=a[d],F[o]&&s.push(F[o][0]),F[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);s.length;)s.shift()();return A.push.apply(A,c||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==F[a]&&(r=!1)}r&&(A.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===v&&D()}(e,t),r&&r(e,t)};var o,a=!0,i="3c475f254883de01df56",c=1e4,d={},s=[],l=[];var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,y,g=0,v=0,E={},_={},w={};function b(e){return+e+""===e?+e:e}function T(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},E={},w=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},F)O(n);return"prepare"===u&&0===v&&0===g&&D(),t})}function O(e){w[e]?(_[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):E[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return S(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(b(n));e.resolve(t)}}function S(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=x[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),p(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},g=[],v={},E=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var T;c=b(_);var O=!1,D=!1,S=!1,A="";switch((T=m[_]?l(c):{type:"disposed",moduleId:_}).chain&&(A="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+T.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(T),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),S=!0;break;default:throw new Error("Unexception type "+T.type)}if(O)return f("abort"),Promise.reject(O);if(D)for(c in v[c]=m[c],p(g,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],T.outdatedDependencies[c]));S&&(p(g,[T.moduleId]),v[c]=E)}var R,C=[];for(r=0;r<g.length;r++)c=g[r],x[c]&&x[c].hot._selfAccepted&&C.push({module:c,errorHandler:x[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete F[e]}(e)});for(var I,M,L=g.slice();L.length>0;)if(c=L.pop(),a=x[c]){var j={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(j);for(d[c]=j,a.hot.active=!1,delete x[c],delete h[c],o=0;o<a.children.length;o++){var k=x[a.children[o]];k&&((R=k.parents.indexOf(c))>=0&&k.parents.splice(R,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=x[c]))for(M=h[c],o=0;o<M.length;o++)I=M[o],(R=a.children.indexOf(I))>=0&&a.children.splice(R,1);for(c in f("apply"),i=y,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var H=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=x[c])){M=h[c];var Y=[];for(r=0;r<M.length;r++)if(I=M[r],n=a.hot._acceptedDependencies[I]){if(-1!==Y.indexOf(n))continue;Y.push(n)}for(r=0;r<Y.length;r++){n=Y[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<C.length;r++){var B=C[r];c=B.module,s=[c];try{P(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise(function(e){e(g)}))}var x={},F={0:0},A=[];function P(t){if(x[t])return x[t].exports;var n=x[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:T,apply:S,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=x[e];if(!t)return P;var n=function(n){return t.hot.active?(x[n]?-1===x[n].parents.indexOf(e)&&x[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===u&&f("prepare"),v++,P.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===u&&(E[e]||O(e),0===v&&0===g&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=F[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=F[e]=[t,r]});t.push(n[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.src=function(e){return P.p+"js/"+({}[e]||e)+".js"}(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=F[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}F[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(t)},P.m=e,P.c=x,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/drift/",P.oe=function(e){throw console.error(e),e},P.h=function(){return i};var R=window.webpackJsonp=window.webpackJsonp||[],C=R.push.bind(R);R.push=t,R=R.slice();for(var I=0;I<R.length;I++)t(R[I]);var M=C;A.push([135,2]),n()}({130:function(e,t,n){var r=n(40);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(77)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(40,function(){var t=n(40);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},135:function(e,t,n){"use strict";n.r(t);var r,o=n(4),a=n.n(o),i=n(20),c=n.n(i),d=n(75),s=n(21),l=n(60),p=n(44),u=n(28);var f=n(23),h=n.n(f),m=n(24),y=n.n(m),g=n(25),v=n.n(g),E=n(26),_=n.n(E),w=n(27),b=n.n(w),T=n(1),O=n.n(T),D=n(78),S=n(58),x=n.n(S),F=n(80),A=n(79),P=n(15),R=n.n(P),C=n(34),I=n.n(C);var M=function(e){return function(t){function n(e){var t;return h()(this,n),(t=v()(this,_()(n).call(this,e))).state={component:null},t}return b()(n,t),y()(n,[{key:"componentDidMount",value:function(){var t=I()(R.a.mark(function t(){var n,r;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),n}(o.Component)}(function(){return n.e(1).then(n.bind(null,247))}),L=function(e){var t=e.component,n=e.rootClass,r=x()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(t,r)};L.propTypes={component:O.a.func,rootClass:O.a.string};var j=function(){return a.a.createElement(F.a,null,a.a.createElement(L,{path:"/",component:M}),a.a.createElement(A.a,{to:"/"}))},N=(n(130),function(e){function t(){return h()(this,t),v()(this,_()(t).apply(this,arguments))}return b()(t,e),y()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(j,{childProps:this.props})}}]),t}(o.Component));N.propTypes={history:O.a.object};var k=Object(D.a)(Object(s.connect)()(N)),H=window.location.pathname.split("/");H.shift();var Y="/";"beta"===H[0]&&(Y="/".concat(H.shift(),"/")),c.a.render(a.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(p.getRegistry)({},[Object(l.a)()].concat(t))).register({compareReducer:u.b.compareReducer,addSystemModalReducer:u.b.addSystemModalReducer,filterDropdownReducer:u.b.filterDropdownReducer}),r}().getStore()},a.a.createElement(d.a,{basename:"".concat(Y).concat(H[0],"/").concat(H[1])},a.a.createElement(k,null))),document.getElementById("root"))},28:function(e,t,n){"use strict";var r={CLEAR_STATE:"CLEAR_STATE",SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",RESET_SELECTED_SYSTEM_IDS:"RESET_SELECTED_SYSTEM_IDS",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",FILTER_BY_STATE:"FILTER_BY_STATE",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW"},o=n(15),a=n.n(o),i=n(34),c=n.n(i),d=n(55),s=n.n(d),l="/api/drift/v0";n(56).a;function p(){return(p=c()(a.a.mark(function e(t){var n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,s.a.get(l.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var u={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return p.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:u.getCompare(e)}},clearState:function(){return{type:r.CLEAR_STATE}},toggleAddSystemModal:function(){return{type:r.OPEN_ADD_SYSTEM_MODAL}},resetSelectedSystemIds:function(){return{type:r.RESET_SELECTED_SYSTEM_IDS}},toggleFilterDropDown:function(){return{type:r.OPEN_FILTER_DROPDOWN}},toggleFactSort:function(e){return{type:r.TOGGLE_FACT_SORT,payload:e}},filterByState:function(e){return{type:r.FILTER_BY_STATE,payload:e}},filterByFact:function(e){return{type:r.FILTER_BY_FACT,payload:e}},updatePagination:function(e){return{type:r.UPDATE_PAGINATION,payload:e}},exportToCSV:function(){return{type:r.EXPORT_TO_CSV}},expandRow:function(e){return{type:r.EXPAND_ROW,payload:e}}},h=n(57),m=n.n(h),y=n(10),g=n.n(y),v={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],addSystemModalOpened:!1,selectedSystemIds:[],filterDropdownOpened:!1,stateFilter:"all",factFilter:"",totalFacts:0,page:1,sort:"asc",perPage:10,loading:!1,expandedRows:[]};function E(e,t,n){for(var r=[],o=0;o<e.length;o++)Math.ceil((o+1)/n)===t&&r.push(e[o]);return r}function _(e,t,n,r){for(var o=[],a=[],i=0;i<e.length;i+=1)e[i].comparisons?(a=w(e[i].comparisons,t,n)).length&&(r.includes(e[i].name)?o.push({name:e[i].name,state:e[i].status,comparisons:a}):o.push({name:e[i].name,state:e[i].status,comparisons:[]})):e[i].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?o.push(e[i]):t===e[i].state&&a.push(e[i]));return o}function w(e,t,n){for(var r=[],o=0;o<e.length;o++)e[o].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?r.push(e[o]):t===e[o].state&&r.push(e[o]));return r}function b(e,t){return"asc"===t?e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}):"desc"===t&&e.sort(function(e,t){return t.name>e.name?1:t.name<e.name?-1:0}),e}function T(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",r=e.lineDelimiter||"\n",o=t.map(function(e){return e.fqdn}),a="Fact,State,"+(o=o.join(n))+r;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(o,i){i>0&&(a+=n),"systems"===o?(e[o].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";a+=t,a+=n}),a+=r):"comparisons"===o?e.comparisons.length?(a+=r,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,o){o>0&&(a+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";a+=t,a+=n}),a+=r):("name"===t&&(a+="    "),a+=e[t])})})):a+=r:a+=e[o]})}),a}(e,t);if(null!==n){var r="system-comparison-export-",o=new Date;r+=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),r+="_",r+=o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),r+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var a=encodeURI(n),i=document.createElement("a");i.setAttribute("href",a),i.setAttribute("download",r),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}var O={compareReducer:function(){var e,t,n,o,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case r.CLEAR_STATE:return g()({},v);case"".concat(r.FETCH_COMPARE,"_PENDING"):return g()({},i,{filteredCompareData:[],systems:[],loading:!0});case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return n=E(t=b(e=_(c.payload.facts,i.stateFilter,i.factFilter,i.expandedRows),i.sort),1,i.perPage),g()({},i,{loading:!1,fullCompareData:c.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:c.payload.systems,selectedSystemIds:c.payload.systems.map(function(e){return e.id}),page:1,totalFacts:e.length});case r.SELECT_ENTITY:return g()({},i,{selectedSystemIds:function(e,t){var n=t.id;return t.selected&&!e.includes(n)&&0!==n&&null!==n?e.push(n):t.selected||(e=e.filter(function(e){return e!==n})),e}(m()(i.selectedSystemIds),c.payload)});case"".concat(r.UPDATE_PAGINATION):return n=E(t=b(e=_(i.fullCompareData,i.stateFilter,i.factFilter,i.expandedRows),i.sort),c.payload.page,c.payload.perPage),g()({},i,{page:c.payload.page,perPage:c.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.FILTER_BY_STATE):return n=E(t=b(e=_(i.fullCompareData,c.payload,i.factFilter,i.expandedRows),i.sort),1,i.perPage),g()({},i,{stateFilter:c.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.FILTER_BY_FACT):return n=E(t=b(e=_(i.fullCompareData,i.stateFilter,c.payload,i.expandedRows),i.sort),1,i.perPage),g()({},i,{factFilter:c.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.TOGGLE_FACT_SORT):return n=E(t=b(e=_(i.fullCompareData,i.stateFilter,i.factFilter,i.expandedRows),c.payload),1,i.perPage),g()({},i,{page:1,sort:c.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.EXPORT_TO_CSV):return T(i.sortedFilteredFacts,i.systems),g()({},i);case"".concat(r.RESET_SELECTED_SYSTEM_IDS):return o=i.systems.map(function(e){return e.id}),g()({},i,{selectedSystemIds:o});case"".concat(r.EXPAND_ROW):return a=function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e}(i.expandedRows,c.payload),n=E(t=b(e=_(i.fullCompareData,i.stateFilter,i.factFilter,a),i.sort),1,i.perPage),g()({},i,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return g()({},i)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_ADD_SYSTEM_MODAL):return g()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return g()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_FILTER_DROPDOWN):return g()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return g()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return O})},40:function(e,t,n){(t=e.exports=n(45)(!1)).i(n(131),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift .fact-header {\n  min-width: 200px;\n  font-weight: bold; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 20px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 10px; }\n\n.drift .pf-c-modal-box__body {\n  max-width: 800px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n",""])},56:function(e){e.exports={a:"1.1.0"}}});
//# sourceMappingURL=../sourcemaps/App.js.map