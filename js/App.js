!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=t[2],d=0,s=[];d<i.length;d++)o=i[d],P[o]&&s.push(P[o][0]),P[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(M&&M(t);s.length;)s.shift()();return R.push.apply(R,c||[]),n()}function n(){for(var e,t=0;t<R.length;t++){for(var n=R[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==P[i]&&(r=!1)}r&&(R.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===g&&T()}(e,t),r&&r(e,t)};var o,i=!0,a="72ef3cc1e023469a961e",c=1e4,d={},s=[],l=[];var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,y,m,v=0,g=0,b={},_={},E={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},b={},E=e.c,m=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},P)D(n);return"prepare"===p&&0===g&&0===v&&T(),t})}function D(e){E[e]?(_[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=A.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function T(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return x(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(w(n));e.resolve(t)}}function x(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,i,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=S[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],l=S[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),u(n[s],[a])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in y)if(Object.prototype.hasOwnProperty.call(y,_)){var O;c=w(_);var D=!1,T=!1,x=!1,R="";switch((O=y[_]?l(c):{type:"disposed",moduleId:_}).chain&&(R="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+O.moduleId+R));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+R));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+R));break;case"accepted":t.onAccepted&&t.onAccepted(O),T=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),x=!0;break;default:throw new Error("Unexception type "+O.type)}if(D)return f("abort"),Promise.reject(D);if(T)for(c in g[c]=y[c],u(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(h[c]||(h[c]=[]),u(h[c],O.outdatedDependencies[c]));x&&(u(v,[O.moduleId]),g[c]=b)}var I,F=[];for(r=0;r<v.length;r++)c=v[r],S[c]&&S[c].hot._selfAccepted&&F.push({module:c,errorHandler:S[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete P[e]}(e)});for(var j,M,C=v.slice();C.length>0;)if(c=C.pop(),i=S[c]){var L={},k=i.hot._disposeHandlers;for(o=0;o<k.length;o++)(n=k[o])(L);for(d[c]=L,i.hot.active=!1,delete S[c],delete h[c],o=0;o<i.children.length;o++){var H=S[i.children[o]];H&&((I=H.parents.indexOf(c))>=0&&H.parents.splice(I,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=S[c]))for(M=h[c],o=0;o<M.length;o++)j=M[o],(I=i.children.indexOf(j))>=0&&i.children.splice(I,1);for(c in f("apply"),a=m,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var N=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=S[c])){M=h[c];var B=[];for(r=0;r<M.length;r++)if(j=M[r],n=i.hot._acceptedDependencies[j]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<F.length;r++){var Y=F[r];c=Y.module,s=[c];try{A(c)}catch(e){if("function"==typeof Y.errorHandler)try{Y.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise(function(e){e(v)}))}var S={},P={0:0},R=[];function A(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:x,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return A;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),g++,A.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||D(e),0===g&&0===v&&T())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.e=function(e){var t=[],n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=P[e]=[t,r]});t.push(n[2]=r);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,A.nc&&a.setAttribute("nonce",A.nc),a.src=function(e){return A.p+"js/"+({}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}P[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(t)},A.m=e,A.c=S,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/insightsbeta/platform/drift/",A.oe=function(e){throw console.error(e),e},A.h=function(){return a};var I=window.webpackJsonp=window.webpackJsonp||[],F=I.push.bind(I);I.push=t,I=I.slice();for(var j=0;j<I.length;j++)t(I[j]);var M=F;R.push([644,2]),n()}({220:function(e,t,n){(t=e.exports=n(235)(!1)).i(n(641),""),t.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center; }\n\n.drift .fact-header {\n  min-width: 200px;\n  font-weight: bold; }\n  .drift .fact-header div {\n    position: absolute;\n    bottom: 10px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    position: absolute;\n    bottom: 10px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 20px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table thead th {\n  position: relative; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 10px; }\n\n.drift .pf-c-modal-box__body {\n  max-width: 800px;\n  max-height: 600px; }\n",""])},344:function(e){e.exports={a:"1.1.0"}},640:function(e,t,n){var r=n(220);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(350)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(220,function(){var t=n(220);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},644:function(e,t,n){"use strict";n.r(t);var r,o=n(1),i=n.n(o),a=n(14),c=n.n(a),d=n(135),s=n(97),l=n(348),u=n(233),p=n(78);var f=n(138),h=n.n(f),y=n(139),m=n.n(y),v=n(140),g=n.n(v),b=n(141),_=n.n(b),E=n(142),w=n.n(E),O=n(0),D=n.n(O),T=n(326),x=n(346),S=n.n(x),P=n(325),R=n(327),A=n(83),I=n.n(A),F=n(164),j=n.n(F);var M=function(e){return function(t){function n(e){var t;return h()(this,n),(t=g()(this,_()(n).call(this,e))).state={component:null},t}return w()(n,t),m()(n,[{key:"componentDidMount",value:function(){var t=j()(I.a.mark(function t(){var n,r;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?i.a.createElement(e,this.props):i.a.createElement("div",null,"Loading...")}}]),n}(o.Component)}(function(){return n.e(1).then(n.bind(null,653))}),C=function(e){var t=e.component,n=e.rootClass,r=S()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),i.a.createElement(t,r)};C.propTypes={component:D.a.func,rootClass:D.a.string};var L=function(){return i.a.createElement(P.a,null,i.a.createElement(C,{path:"/",component:M}),i.a.createElement(R.a,{to:"/"}))},k=(n(640),function(e){function t(){return h()(this,t),g()(this,_()(t).apply(this,arguments))}return w()(t,e),m()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("drift")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(L,{childProps:this.props})}}]),t}(o.Component));k.propTypes={history:D.a.object};var H=Object(T.a)(Object(s.connect)()(k));c.a.render(i.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=Object(u.getRegistry)({},[Object(l.a)()].concat(t))).register({compareReducer:p.b.compareReducer,addSystemModalReducer:p.b.addSystemModalReducer,filterDropdownReducer:p.b.filterDropdownReducer,filterByStateReducer:p.b.filterByStateReducer,filterByFactReducer:p.b.filterByFactReducer}),r}().getStore()},i.a.createElement(d.a,{basename:"/".concat("insightsbeta","/platform/drift")},i.a.createElement(H,null))),document.getElementById("root"))},78:function(e,t,n){"use strict";var r={SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN",FILTER_BY_STATE:"FILTER_BY_STATE",FILTER_BY_FACT:"FILTER_BY_FACT"},o=n(83),i=n.n(o),a=n(164),c=n.n(a),d=n(343),s=n.n(d),l="/r/insights/platform/drift/v0";n(344).a;function u(){return(u=c()(i.a.mark(function e(t){var n,r,o=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,s.a.get(l.concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var p={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),function(e){return u.apply(this,arguments)}("/comparison_report",{params:{system_ids:e}})}};var f={fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:p.getCompare(e)}},toggleAddSystemModal:function(){return{type:r.OPEN_ADD_SYSTEM_MODAL}},toggleFilterDropDown:function(){return{type:r.OPEN_FILTER_DROPDOWN}},filterByState:function(e){return{type:r.FILTER_BY_STATE,payload:e}},filterByFact:function(e){return{type:r.FILTER_BY_FACT,payload:e}}},h=n(345),y=n.n(h),m=n(41),v=n.n(m),g={compare:{},addSystemModalOpened:!1,selectedSystemIds:[],filterDropdownOpened:!1,stateFilter:"all",factFilter:""};var b={compareReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return v()({},e,{compare:t.payload,selectedSystemIds:t.payload.systems.map(function(e){return e.id})});case"SELECT_ENTITY":return v()({},e,{selectedSystemIds:function(e,t){var n=t.id;return t.selected&&!e.includes(n)?e.push(n):t.selected||(e=e.filter(function(e){return e!==n})),e}(y()(e.selectedSystemIds),t.payload)});default:return v()({},e)}},addSystemModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_ADD_SYSTEM_MODAL):return v()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return v()({},e)}},filterDropdownReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(r.OPEN_FILTER_DROPDOWN):return v()({},e,{filterDropdownOpened:!e.filterDropdownOpened});default:return v()({},e)}},filterByStateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(r.FILTER_BY_STATE):return v()({},e,{stateFilter:t.payload});default:return v()({},e)}},filterByFactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(r.FILTER_BY_FACT):return v()({},e,{factFilter:t.payload});default:return v()({},e)}}};n.d(t,"a",function(){return f}),n.d(t,"b",function(){return b})}});
//# sourceMappingURL=../sourcemaps/App.js.map