!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],d=0,l=[];d<a.length;d++)o=a[d],A[o]&&l.push(A[o][0]),A[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(t);l.length;)l.shift()();return F.push.apply(F,c||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==A[a]&&(r=!1)}r&&(F.splice(t--,1),e=C(C.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!b[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===v&&T()}(e,t),r&&r(e,t)};var o,a=!0,i="6917bf8c41f0e489bf10",c=1e4,d={},l=[],s=[];var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,y,g=0,v=0,_={},E={},b={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=C.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;E={},_={},b=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},A)D(n);return"prepare"===u&&0===v&&0===g&&T(),t})}function D(e){b[e]?(E[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):_[e]=!0}function T(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return x(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(w(n));e.resolve(t)}}function x(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],s=P[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),p(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},g=[],v={},_=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var O;c=w(E);var D=!1,T=!1,x=!1,F="";switch((O=m[E]?s(c):{type:"disposed",moduleId:E}).chain&&(F="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+O.moduleId+F));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+F));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+F));break;case"accepted":t.onAccepted&&t.onAccepted(O),T=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(D)return f("abort"),Promise.reject(D);if(T)for(c in v[c]=m[c],p(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],O.outdatedDependencies[c]));x&&(p(g,[O.moduleId]),v[c]=_)}var I,S=[];for(r=0;r<g.length;r++)c=g[r],P[c]&&P[c].hot._selfAccepted&&S.push({module:c,errorHandler:P[c].hot._selfAccepted});f("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete A[e]}(e)});for(var R,M,j=g.slice();j.length>0;)if(c=j.pop(),a=P[c]){var L={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(L);for(d[c]=L,a.hot.active=!1,delete P[c],delete h[c],o=0;o<a.children.length;o++){var k=P[a.children[o]];k&&((I=k.parents.indexOf(c))>=0&&k.parents.splice(I,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=P[c]))for(M=h[c],o=0;o<M.length;o++)R=M[o],(I=a.children.indexOf(R))>=0&&a.children.splice(I,1);for(c in f("apply"),i=y,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var H=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=P[c])){M=h[c];var Y=[];for(r=0;r<M.length;r++)if(R=M[r],n=a.hot._acceptedDependencies[R]){if(-1!==Y.indexOf(n))continue;Y.push(n)}for(r=0;r<Y.length;r++){n=Y[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<S.length;r++){var B=S[r];c=B.module,l=[c];try{C(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise(function(e){e(g)}))}var P={},A={0:0},F=[];function C(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:x,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(s=l,l=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return C;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var a in C)Object.prototype.hasOwnProperty.call(C,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===u&&f("prepare"),v++,C.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===u&&(_[e]||D(e),0===v&&0===g&&T())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}(t)),n.l=!0,n.exports}C.e=function(e){var t=[],n=A[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=A[e]=[t,r]});t.push(n[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,C.nc&&i.setAttribute("nonce",C.nc),i.src=function(e){return C.p+"js/"+({}[e]||e)+".js"}(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=A[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}A[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(t)},C.m=e,C.c=P,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="/beta/apps/drift/",C.oe=function(e){throw console.error(e),e},C.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],S=I.push.bind(I);I.push=t,I=I.slice();for(var R=0;R<I.length;R++)t(I[R]);var M=S;F.push([135,2]),n()}({130:function(e,t,n){var r=n(40);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(77)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(40,function(){var t=n(40);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},135:function(e,t,n){"use strict";n.r(t);var r,o=n(4),a=n.n(o),i=n(20),c=n.n(i),d=n(75),l=n(21),s=n(60),p=n(44),u=n(28);var f=n(23),h=n.n(f),m=n(24),y=n.n(m),g=n(25),v=n.n(g),_=n(26),E=n.n(_),b=n(27),w=n.n(b),O=n(1),D=n.n(O),T=n(80),x=n(58),P=n.n(x),A=n(79),F=n(78),C=n(15),I=n.n(C),S=n(34),R=n.n(S);var M=function(e){return function(t){function n(e){var t;return h()(this,n),(t=v()(this,E()(n).call(this,e))).state={component:null},t}return w()(n,t),y()(n,[{key:"componentDidMount",value:function(){var t=R()(I.a.mark(function t(){var n,r;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),n}(o.Component)}(function(){return n.e(1).then(n.bind(null,247))}),j=function(e){var t=e.component,n=e.rootClass,r=P()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(t,r)};j.propTypes={component:D.a.func,rootClass:D.a.string};var L=function(){return a.a.createElement(A.a,null,a.a.createElement(j,{path:"/",component:M}),a.a.createElement(F.a,{to:"/"}))},N=(n(130),function(e){function t(){return h()(this,t),v()(this,E()(t).apply(this,arguments))}return w()(t,e),y()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(L,{childProps:this.props})}}]),t}(o.Component));N.propTypes={history:D.a.object};var k=Object(T.a)(Object(l.connect)()(N)),H=window.location.pathname.split("/");H.shift();var Y="/";"beta"===H[0]&&(Y="/".concat(H.shift(),"/")),c.a.render(a.a.createElement(l.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(p.getRegistry)({},[Object(s.a)()].concat(t))).register({compareReducer:u.b.compareReducer,addSystemModalReducer:u.b.addSystemModalReducer,filterDropdownReducer:u.b.filterDropdownReducer}),r}().getStore()},a.a.createElement(d.a,{basename:"".concat(Y).concat(H[0],"/").concat(H[1])},a.a.createElement(k,null))),document.getElementById("root"))},28:function(e,t,n){"use strict";var r={SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",FILTER_BY_STATE:"FILTER_BY_STATE",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION"},o=n(15),a=n.n(o),i=n(34),c=n.n(i),d=n(55),l=n.n(d),s="/api/drift/v0";n(56).a;function p(){return(p=c()(a.a.mark(function e(t){var n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,l.a.get(s.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var u={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return p.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:u.getCompare(e)}},toggleAddSystemModal:function(){return{type:r.OPEN_ADD_SYSTEM_MODAL}},toggleFilterDropDown:function(){return{type:r.OPEN_FILTER_DROPDOWN}},toggleFactSort:function(e){return{type:r.TOGGLE_FACT_SORT,payload:e}},filterByState:function(e){return{type:r.FILTER_BY_STATE,payload:e}},filterByFact:function(e){return{type:r.FILTER_BY_FACT,payload:e}},updatePagination:function(e){return{type:r.UPDATE_PAGINATION,payload:e}}},h=n(57),m=n.n(h),y=n(11),g=n.n(y),v={fullCompareData:[],filteredCompareData:[],systems:[],addSystemModalOpened:!1,selectedSystemIds:[],filterDropdownOpened:!1,stateFilter:"all",factFilter:"",totalFacts:0,page:1,sort:"asc",perPage:10,loading:!1};function _(e,t,n){for(var r=[],o=0;o<e.length;o++)Math.ceil((o+1)/n)===t&&r.push(e[o]);return r}function E(e,t,n){for(var r=[],o=0;o<e.length;o+=1)e[o].name.includes(n)&&("all"===t.toLowerCase()||void 0===t?r.push(e[o]):t===e[o].state&&r.push(e[o]));return r}function b(e,t){return"asc"===t?e.sort(function(e,t){return e.name>t.name}):"desc"===t&&e.sort(function(e,t){return t.name>e.name}),e}var w={compareReducer:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case"".concat(r.FETCH_COMPARE,"_PENDING"):return g()({},n,{filteredCompareData:[],systems:[],loading:!0});case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return t=_(b(e=E(o.payload.facts,n.stateFilter,n.factFilter),n.sort),1,n.perPage),g()({},n,{loading:!1,fullCompareData:o.payload.facts,filteredCompareData:t,systems:o.payload.systems,selectedSystemIds:o.payload.systems.map(function(e){return e.id}),page:1,totalFacts:e.length});case"SELECT_ENTITY":return g()({},n,{selectedSystemIds:function(e,t){var n=t.id;return t.selected&&!e.includes(n)?e.push(n):t.selected||(e=e.filter(function(e){return e!==n})),e}(m()(n.selectedSystemIds),o.payload)});case"".concat(r.UPDATE_PAGINATION):return t=_(b(e=E(n.fullCompareData,n.stateFilter,n.factFilter),n.sort),o.payload.page,o.payload.perPage),g()({},n,{page:o.payload.page,perPage:o.payload.perPage,filteredCompareData:t,totalFacts:e.length});case"".concat(r.FILTER_BY_STATE):return t=_(b(e=E(n.fullCompareData,o.payload,n.factFilter),n.sort),1,n.perPage),g()({},n,{stateFilter:o.payload,page:1,filteredCompareData:t,totalFacts:e.length});case"".concat(r.FILTER_BY_FACT):return t=_(b(e=E(n.fullCompareData,n.stateFilter,o.payload),n.sort),1,n.perPage),g()({},n,{factFilter:o.payload,page:1,filteredCompareData:t,totalFacts:e.length});case"".concat(r.TOGGLE_FACT_SORT):return t=_(b(e=E(n.fullCompareData,n.stateFilter,n.factFilter),o.payload),1,n.perPage),g()({},n,{page:1,sort:o.payload,filteredCompareData:t,totalFacts:e.length});default:return g()({},n)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_ADD_SYSTEM_MODAL):return g()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return g()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_FILTER_DROPDOWN):return g()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return g()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return w})},40:function(e,t,n){(t=e.exports=n(45)(!1)).i(n(131),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift .fact-header {\n  min-width: 200px;\n  font-weight: bold; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 20px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 10px; }\n\n.drift .pf-c-modal-box__body {\n  max-width: 800px;\n  max-height: 600px; }\n",""])},56:function(e){e.exports={a:"1.1.0"}}});
//# sourceMappingURL=../sourcemaps/App.js.map