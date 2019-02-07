!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],d=0,s=[];d<a.length;d++)o=a[d],P[o]&&s.push(P[o][0]),P[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(k&&k(n);s.length;)s.shift()();return M.push.apply(M,c||[]),t()}function t(){for(var e,n=0;n<M.length;n++){for(var t=M[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==P[a]&&(r=!1)}r&&(M.splice(n--,1),e=T(T.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!_[e])return;for(var t in _[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--m&&0===g&&A()}(e,n),r&&r(e,n)};var o,a=!0,i="015b8462faad7830a2fc",c=1e4,d={},s=[],u=[];var l=[],p="idle";function f(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,v,y,m=0,g=0,b={},_={},E={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;_={},b={},E=e.c,y=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},P)D(t);return"prepare"===p&&0===g&&0===m&&A(),n})}function D(e){E[e]?(_[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function A(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return S(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(w(t));e.resolve(n)}}function S(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=j[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],u=j[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),l(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in v)if(Object.prototype.hasOwnProperty.call(v,_)){var O;c=w(_);var D=!1,A=!1,S=!1,M="";switch((O=v[_]?u(c):{type:"disposed",moduleId:_}).chain&&(M="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+O.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(O),A=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),S=!0;break;default:throw new Error("Unexception type "+O.type)}if(D)return f("abort"),Promise.reject(D);if(A)for(c in g[c]=v[c],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(h[c]||(h[c]=[]),l(h[c],O.outdatedDependencies[c]));S&&(l(m,[O.moduleId]),g[c]=b)}var H,C=[];for(r=0;r<m.length;r++)c=m[r],j[c]&&j[c].hot._selfAccepted&&C.push({module:c,errorHandler:j[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete P[e]}(e)});for(var x,k,I=m.slice();I.length>0;)if(c=I.pop(),a=j[c]){var F={},L=a.hot._disposeHandlers;for(o=0;o<L.length;o++)(t=L[o])(F);for(d[c]=F,a.hot.active=!1,delete j[c],delete h[c],o=0;o<a.children.length;o++){var R=j[a.children[o]];R&&((H=R.parents.indexOf(c))>=0&&R.parents.splice(H,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=j[c]))for(k=h[c],o=0;o<k.length;o++)x=k[o],(H=a.children.indexOf(x))>=0&&a.children.splice(H,1);for(c in f("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var U=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=j[c])){k=h[c];var N=[];for(r=0;r<k.length;r++)if(x=k[r],t=a.hot._acceptedDependencies[x]){if(-1!==N.indexOf(t))continue;N.push(t)}for(r=0;r<N.length;r++){t=N[r];try{t(k)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:k[r],error:e}),n.ignoreErrored||U||(U=e)}}}for(r=0;r<C.length;r++){var q=C[r];c=q.module,s=[c];try{T(c)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(m)}))}var j={},P={0:0},M=[];function T(n){if(j[n])return j[n].exports;var t=j[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:S,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:d[e]};return o=void 0,n}(n),parents:(u=s,s=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=j[e];if(!n)return T;var t=function(t){return n.hot.active?(j[t]?-1===j[t].parents.indexOf(e)&&j[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),T(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(n){T[e]=n}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),g++,T.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===p&&(b[e]||D(e),0===g&&0===m&&A())}},t.t=function(e,n){return 1&n&&(e=t(e)),T.t(e,-2&n)},t}(n)),t.l=!0,t.exports}T.e=function(e){var n=[],t=P[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=P[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,T.nc&&i.setAttribute("nonce",T.nc),i.src=function(e){return T.p+"js/"+({}[e]||e)+".js"}(e),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=P[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}P[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(n)},T.m=e,T.c=j,T.d=function(e,n,t){T.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,n){if(1&n&&(e=T(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(T.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)T.d(t,r,function(n){return e[n]}.bind(null,r));return t},T.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(n,"a",n),n},T.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},T.p="/insightsbeta/platform/drift/",T.oe=function(e){throw console.error(e),e},T.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],C=H.push.bind(H);H.push=n,H=H.slice();for(var x=0;x<H.length;x++)n(H[x]);var k=C;M.push([83,2]),t()}({21:function(e,n,t){(n=e.exports=t(30)(!1)).i(t(81),""),n.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC; }\n",""])},25:function(e,n,t){"use strict";var r={FETCH_STATUS:"FETCH_STATUS",FETCH_COMPARE:"FETCH_COMPARE",OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL"},o=t(7),a=t.n(o),i=t(17),c=t.n(i),d=t(40),s=t.n(d),u="/r/insights/platform/drift/v0";t(41).a;function l(e){return p.apply(this,arguments)}function p(){return(p=c()(a.a.mark(function e(n){var t,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,s.a.get(u.concat(n),t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var f={getCompare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)||(e=[e]),l("/compare",{params:{system_ids:e}})},getStatus:function(){return l("/status")}};var h={fetchStatus:function(){return{type:r.FETCH_STATUS,payload:f.getStatus()}},fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:f.getCompare(e)}},toggleAddSystemModal:function(){return{type:r.OPEN_ADD_SYSTEM_MODAL}}},v=t(9),y=t.n(v),m={compare:{},status:{},addSystemModalOpened:!1};var g={compareReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return y()({},e,{compare:n.payload});default:return y()({},e)}},statusReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"".concat(r.FETCH_STATUS,"_FULFILLED"):return y()({},e,{status:n.payload});case"".concat(r.OPEN_ADD_SYSTEM_MODAL):return y()({},e,{addSystemModalOpened:!e.addSystemModalOpened});default:return y()({},e)}}};t.d(n,"a",function(){return h}),t.d(n,"b",function(){return g})},41:function(e){e.exports={a:"1.1.0"}},80:function(e,n,t){var r=t(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(49)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(21,function(){var n=t(21);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},83:function(e,n,t){"use strict";t.r(n);var r,o=t(1),a=t.n(o),i=t(26),c=t.n(i),d=t(192),s=t(15),u=t(39),l=t.n(u),p=t(43),f=t(25);var h=t(10),v=t.n(h),y=t(11),m=t.n(y),g=t(12),b=t.n(g),_=t(13),E=t.n(_),w=t(14),O=t.n(w),D=t(0),A=t.n(D),S=t(294),j=t(42),P=t.n(j),M=t(296),T=t(295),H=t(7),C=t.n(H),x=t(17),k=t.n(x);var I=function(e){return function(n){function t(e){var n;return v()(this,t),(n=b()(this,E()(t).call(this,e))).state={component:null},n}return O()(t,n),m()(t,[{key:"componentDidMount",value:function(){var n=k()(C.a.mark(function n(){var t,r;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),t}(o.Component)}(function(){return t.e(1).then(t.bind(null,582))}),F=function(e){var n=e.component,t=e.rootClass,r=P()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-l-page__main"),o.setAttribute("role","main"),a.a.createElement(n,r)};F.propTypes={component:A.a.func,rootClass:A.a.string};var L=function(){return a.a.createElement(M.a,null,a.a.createElement(F,{path:"/",component:I,rootClass:"drift"}),a.a.createElement(T.a,{to:"/"}))},R=(t(80),function(e){function n(){return v()(this,n),b()(this,E()(n).apply(this,arguments))}return O()(n,e),m()(n,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("inventory")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(L,{childProps:this.props})}}]),n}(o.Component));R.propTypes={history:A.a.object};var U=Object(S.a)(Object(s.connect)()(R));c.a.render(a.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(r=new l.a({},[Object(p.a)()].concat(n))).register({compareReducer:f.b.compareReducer,statusReducer:f.b.statusReducer}),r}().getStore()},a.a.createElement(d.a,{basename:"/".concat("insightsbeta","/platform/drift")},a.a.createElement(U,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map