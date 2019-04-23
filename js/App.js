!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],d=0,s=[];d<a.length;d++)o=a[d],S[o]&&s.push(S[o][0]),S[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);s.length;)s.shift()();return x.push.apply(x,c||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==S[a]&&(r=!1)}r&&(x.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--E&&0===g&&D()}(e,t),r&&r(e,t)};var o,a=!0,i="dd7b3e63686912dbbe14",c=1e4,d={},s=[],l=[];var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,m,y,E=0,g=0,v={},_={},O={};function b(e){return+e+""===e?+e:e}function T(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},v={},O=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},S)w(n);return"prepare"===p&&0===g&&0===E&&D(),t})}function w(e){O[e]?(_[e]=!0,E++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):v[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return A(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(b(n));e.resolve(t)}}function A(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=R[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=R[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},E=[],g={},v=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var T;c=b(_);var w=!1,D=!1,A=!1,x="";switch((T=m[_]?l(c):{type:"disposed",moduleId:_}).chain&&(x="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+T.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(w=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(T),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),A=!0;break;default:throw new Error("Unexception type "+T.type)}if(w)return f("abort"),Promise.reject(w);if(D)for(c in g[c]=m[c],u(E,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,c)&&(h[c]||(h[c]=[]),u(h[c],T.outdatedDependencies[c]));A&&(u(E,[T.moduleId]),g[c]=v)}var F,C=[];for(r=0;r<E.length;r++)c=E[r],R[c]&&R[c].hot._selfAccepted&&C.push({module:c,errorHandler:R[c].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete S[e]}(e)});for(var I,M,L=E.slice();L.length>0;)if(c=L.pop(),a=R[c]){var N={},j=a.hot._disposeHandlers;for(o=0;o<j.length;o++)(n=j[o])(N);for(d[c]=N,a.hot.active=!1,delete R[c],delete h[c],o=0;o<a.children.length;o++){var k=R[a.children[o]];k&&((F=k.parents.indexOf(c))>=0&&k.parents.splice(F,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=R[c]))for(M=h[c],o=0;o<M.length;o++)I=M[o],(F=a.children.indexOf(I))>=0&&a.children.splice(F,1);for(c in f("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var H=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=R[c])){M=h[c];var B=[];for(r=0;r<M.length;r++)if(I=M[r],n=a.hot._acceptedDependencies[I]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<C.length;r++){var G=C[r];c=G.module,s=[c];try{P(c)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise(function(e){e(E)}))}var R={},S={0:0},x=[];function P(t){if(R[t])return R[t].exports;var n=R[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:T,apply:A,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=R[e];if(!t)return P;var n=function(n){return t.hot.active?(R[n]?-1===R[n].parents.indexOf(e)&&R[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===p&&f("prepare"),g++,P.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(v[e]||w(e),0===g&&0===E&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=S[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=S[e]=[t,r]});t.push(n[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.src=function(e){return P.p+"js/"+({}[e]||e)+".js"}(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=S[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}S[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(t)},P.m=e,P.c=R,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/beta/apps/drift/",P.oe=function(e){throw console.error(e),e},P.h=function(){return i};var F=window.webpackJsonp=window.webpackJsonp||[],C=F.push.bind(F);F.push=t,F=F.slice();for(var I=0;I<F.length;I++)t(F[I]);var M=C;x.push([202,2]),n()}({142:function(e){e.exports={a:"1.1.0"}},198:function(e,t,n){var r=n(69);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(131)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(69,function(){var t=n(69);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},202:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(10),c=n.n(i),d=n(117),s=n(44),l=n(146),u=n(71),p=n(21);var f=n(46),h=n.n(f),m=n(47),y=n.n(m),E=n(48),g=n.n(E),v=n(49),_=n.n(v),O=n(50),b=n.n(O),T=n(1),w=n.n(T),D=n(132),A=n(144),R=n.n(A),S=n(134),x=n(133),P=n(36),F=n.n(P),C=n(55),I=n.n(C);var M=function(e){return function(t){function n(e){var t;return h()(this,n),(t=g()(this,_()(n).call(this,e))).state={component:null},t}return b()(n,t),y()(n,[{key:"componentDidMount",value:function(){var t=I()(F.a.mark(function t(){var n,r;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),n}(o.Component)}(function(){return n.e(1).then(n.bind(null,312))}),L=function(e){var t=e.component,n=e.rootClass,r=R()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(t,r)};L.propTypes={component:w.a.func,rootClass:w.a.string};var N=function(){return a.a.createElement(S.a,null,a.a.createElement(L,{path:"/",component:M}),a.a.createElement(x.a,{to:"/"}))},j=(n(198),function(e){function t(){return h()(this,t),g()(this,_()(t).apply(this,arguments))}return b()(t,e),y()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(N,{childProps:this.props})}}]),t}(o.Component));j.propTypes={history:w.a.object};var k=Object(D.a)(Object(s.connect)()(j)),H=window.location.pathname.split("/");H.shift();var B="/";"beta"===H[0]&&(B="/".concat(H.shift(),"/")),c.a.render(a.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(u.getRegistry)({},[Object(l.a)()].concat(t))).register({compareReducer:p.b.compareReducer,addSystemModalReducer:p.b.addSystemModalReducer,errorAlertReducer:p.b.errorAlertReducer,filterDropdownReducer:p.b.filterDropdownReducer,exportReducer:p.b.exportReducer}),r}().getStore()},a.a.createElement(d.a,{basename:"".concat(B).concat(H[0],"/").concat(H[1])},a.a.createElement(k,null))),document.getElementById("root"))},21:function(e,t,n){"use strict";var r={CLEAR_STATE:"CLEAR_STATE",SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",OPEN_ERROR_MODAL:"OPEN_ERROR_MODAL",RESET_SELECTED_SYSTEM_IDS:"RESET_SELECTED_SYSTEM_IDS",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",FILTER_BY_STATE:"FILTER_BY_STATE",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW",TOGGLE_KEBAB:"TOGGLE_KEBAB",REVERT_COMPARE_DATA:"REVERT_COMPARE_DATA"},o=n(36),a=n.n(o),i=n(55),c=n.n(i),d=n(141),s=n.n(d),l="/api/drift/v1";n(142).a;function u(){return(u=c()(a.a.mark(function e(t){var n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,s.a.get(l.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var p={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return u.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:p.getCompare(e)}},revertCompareData:function(e){return{type:r.REVERT_COMPARE_DATA,payload:e}},clearState:function(){return{type:r.CLEAR_STATE}},toggleAddSystemModal:function(){return{type:r.OPEN_ADD_SYSTEM_MODAL}},toggleErrorAlert:function(){return{type:r.OPEN_ERROR_MODAL}},resetSelectedSystemIds:function(){return{type:r.RESET_SELECTED_SYSTEM_IDS}},toggleFilterDropDown:function(){return{type:r.OPEN_FILTER_DROPDOWN}},toggleFactSort:function(e){return{type:r.TOGGLE_FACT_SORT,payload:e}},filterByState:function(e){return{type:r.FILTER_BY_STATE,payload:e}},filterByFact:function(e){return{type:r.FILTER_BY_FACT,payload:e}},updatePagination:function(e){return{type:r.UPDATE_PAGINATION,payload:e}},exportToCSV:function(){return{type:r.EXPORT_TO_CSV}},expandRow:function(e){return{type:r.EXPAND_ROW,payload:e}},toggleKebab:function(){return{type:r.TOGGLE_KEBAB}}},h=n(143),m=n.n(h),y=n(25),E=n.n(y),g={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],previousStateSystems:[],addSystemModalOpened:!1,selectedSystemIds:[],filterDropdownOpened:!1,stateFilter:"all",factFilter:"",totalFacts:0,page:1,sort:"asc",perPage:10,loading:!1,expandedRows:[],kebabOpened:!1,error:{},errorAlertOpened:!1};function v(e,t,n){var r=[];if(null===e||!e.length)return[];for(var o=0;o<e.length;o++)Math.ceil((o+1)/n)===t&&r.push(e[o]);return r}function _(e,t,n,r){var o=[],a=[];if(null===e||!e.length)return[];for(var i=0;i<e.length;i+=1)e[i].comparisons?(a=O(e[i].comparisons,t,n)).length&&(r.includes(e[i].name)?o.push({name:e[i].name,state:e[i].state,comparisons:a}):o.push({name:e[i].name,state:e[i].state,comparisons:[]})):e[i].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?o.push(e[i]):t===e[i].state&&o.push(e[i]));return o}function O(e,t,n){for(var r=[],o=0;o<e.length;o++)e[o].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?r.push(e[o]):t===e[o].state&&r.push(e[o]));return r}function b(e,t){return"asc"===t?e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}):"desc"===t&&e.sort(function(e,t){return t.name>e.name?1:t.name<e.name?-1:0}),e}function T(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",r=e.lineDelimiter||"\n",o=t.map(function(e){return e.display_name}),a="Fact,State,"+(o=o.join(n))+r;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(o,i){i>0&&(a+=n),"systems"===o?(e[o].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";a+=t,a+=n}),a+=r):"comparisons"===o?e.comparisons.length?(a+=r,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,o){o>0&&(a+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";a+=t,a+=n}),a+=r):("name"===t&&(a+="    "),a+=e[t])})})):a+=r:a+=e[o]})}),a}(e,t);if(null!==n){var r="system-comparison-export-",o=new Date;r+=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),r+="_",r+=o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),r+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var a=encodeURI(n),i=document.createElement("a");i.setAttribute("href",a),i.setAttribute("download",r),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}var w={compareReducer:function(){var e,t,n,o,a,i,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,d=arguments.length>1?arguments[1]:void 0,s={};switch(d.type){case r.CLEAR_STATE:return E()({},g);case r.REVERT_COMPARE_DATA:return E()({},c,{loading:!1,error:{},systems:c.previousStateSystems,selectedSystemIds:c.systems.map(function(e){return e.id})});case"".concat(r.FETCH_COMPARE,"_PENDING"):return E()({},c,{previousStateSystems:c.systems,systems:[],loading:!0});case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return n=v(t=b(e=_(d.payload.facts,c.stateFilter,c.factFilter,c.expandedRows),c.sort),1,c.perPage),E()({},c,{loading:!1,fullCompareData:d.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:d.payload.systems,selectedSystemIds:d.payload.systems.map(function(e){return e.id}),page:1,totalFacts:e.length});case"".concat(r.FETCH_COMPARE,"_REJECTED"):return s=(i=d.payload.response).data.message?{detail:i.data.message,status:i.status}:{detail:i.data.detail,status:i.status},E()({},c,{error:s});case r.SELECT_ENTITY:return E()({},c,{selectedSystemIds:function(e,t){var n=t.id;return t.selected&&!e.includes(n)&&0!==n&&null!==n?e.push(n):t.selected||(e=e.filter(function(e){return e!==n})),e}(m()(c.selectedSystemIds),d.payload)});case"".concat(r.UPDATE_PAGINATION):return n=v(t=b(e=_(c.fullCompareData,c.stateFilter,c.factFilter,c.expandedRows),c.sort),d.payload.page,d.payload.perPage),E()({},c,{page:d.payload.page,perPage:d.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.FILTER_BY_STATE):return n=v(t=b(e=_(c.fullCompareData,d.payload,c.factFilter,c.expandedRows),c.sort),1,c.perPage),E()({},c,{stateFilter:d.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.FILTER_BY_FACT):return n=v(t=b(e=_(c.fullCompareData,c.stateFilter,d.payload,c.expandedRows),c.sort),1,c.perPage),E()({},c,{factFilter:d.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.TOGGLE_FACT_SORT):return n=v(t=b(e=_(c.fullCompareData,c.stateFilter,c.factFilter,c.expandedRows),d.payload),1,c.perPage),E()({},c,{page:1,sort:d.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(r.EXPORT_TO_CSV):return T(c.sortedFilteredFacts,c.systems),E()({},c);case"".concat(r.RESET_SELECTED_SYSTEM_IDS):return o=c.systems.map(function(e){return e.id}),E()({},c,{selectedSystemIds:o});case"".concat(r.EXPAND_ROW):return a=function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e}(c.expandedRows,d.payload),n=v(t=b(e=_(c.fullCompareData,c.stateFilter,c.factFilter,a),c.sort),c.page,c.perPage),E()({},c,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return E()({},c)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_ADD_SYSTEM_MODAL):return E()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return E()({},e)}},errorAlertReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_ERROR_MODAL):return E()({},e,{errorAlertOpened:!e.errorAlertOpened});default:return E()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_FILTER_DROPDOWN):return E()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return E()({},e)}},exportReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.TOGGLE_KEBAB):return E()({},e,{kebabOpened:!e.kebabOpened});default:return E()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return w})},69:function(e,t,n){(t=e.exports=n(73)(!1)).i(n(199),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .active-blue {\n  color: #39A5DC; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift .fact-header-cell td {\n  border-bottom: 3px solid #39A5DC; }\n\n.drift .fact-header {\n  min-width: 200px; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 20px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .nested-fact {\n  border-left: 3px solid #39A5DC; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 10px; }\n\n.drift .pf-c-modal-box__body {\n  min-width: 900px;\n  max-width: 1200px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.drift .pf-c-alert {\n  margin-bottom: 30px; }\n",""])}});
//# sourceMappingURL=../sourcemaps/App.js.map