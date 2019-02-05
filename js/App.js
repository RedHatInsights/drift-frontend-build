!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],u=0,s=[];u<a.length;u++)o=a[u],T[o]&&s.push(T[o][0]),T[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(I&&I(n);s.length;)s.shift()();return x.push.apply(x,c||[]),t()}function t(){for(var e,n=0;n<x.length;n++){for(var t=x[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==T[a]&&(r=!1)}r&&(x.splice(n--,1),e=A(A.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===g&&D()}(e,n),r&&r(e,n)};var o,a=!0,i="fd84e80762768846dc67",c=1e4,u={},s=[],d=[];var l=[],p="idle";function f(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,v,m,y=0,g=0,b={},w={},E={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},b={},E=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},T)j(t);return"prepare"===p&&0===g&&0===y&&D(),n})}function j(e){E[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(_(t));e.resolve(n)}}function P(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=H[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],d=H[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(d.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),l(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;c=_(w);var j=!1,D=!1,P=!1,x="";switch((O=v[w]?d(c):{type:"disposed",moduleId:w}).chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(O),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return f("abort"),Promise.reject(j);if(D)for(c in g[c]=v[c],l(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(h[c]||(h[c]=[]),l(h[c],O.outdatedDependencies[c]));P&&(l(y,[O.moduleId]),g[c]=b)}var C,S=[];for(r=0;r<y.length;r++)c=y[r],H[c]&&H[c].hot._selfAccepted&&S.push({module:c,errorHandler:H[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete T[e]}(e)});for(var k,I,M=y.slice();M.length>0;)if(c=M.pop(),a=H[c]){var U={},F=a.hot._disposeHandlers;for(o=0;o<F.length;o++)(t=F[o])(U);for(u[c]=U,a.hot.active=!1,delete H[c],delete h[c],o=0;o<a.children.length;o++){var L=H[a.children[o]];L&&((C=L.parents.indexOf(c))>=0&&L.parents.splice(C,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=H[c]))for(I=h[c],o=0;o<I.length;o++)k=I[o],(C=a.children.indexOf(k))>=0&&a.children.splice(C,1);for(c in f("apply"),i=m,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var R=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=H[c])){I=h[c];var q=[];for(r=0;r<I.length;r++)if(k=I[r],t=a.hot._acceptedDependencies[k]){if(-1!==q.indexOf(t))continue;q.push(t)}for(r=0;r<q.length;r++){t=q[r];try{t(I)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:I[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<S.length;r++){var N=S[r];c=N.module,s=[c];try{A(c)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise(function(e){e(y)}))}var H={},T={0:0},x=[];function A(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:P,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:u[e]};return o=void 0,n}(n),parents:(d=s,s=[],d),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=H[e];if(!n)return A;var t=function(t){return n.hot.active?(H[t]?-1===H[t].parents.indexOf(e)&&H[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),A(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),g++,A.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===p&&(b[e]||j(e),0===g&&0===y&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),A.t(e,-2&n)},t}(n)),t.l=!0,t.exports}A.e=function(e){var n=[],t=T[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=T[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=function(e){return A.p+"js/"+({}[e]||e)+".js"}(e),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=T[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}T[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(n)},A.m=e,A.c=H,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)A.d(t,r,function(n){return e[n]}.bind(null,r));return t},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/insightsbeta/platform/drift/",A.oe=function(e){throw console.error(e),e},A.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],S=C.push.bind(C);C.push=n,C=C.slice();for(var k=0;k<C.length;k++)n(C[k]);var I=S;x.push([79,2]),t()}({21:function(e,n,t){(n=e.exports=t(27)(!1)).i(t(77),""),n.push([e.i,"button:focus {\n  outline: none; }\n",""])},33:function(e,n,t){"use strict";var r={FETCH_STATUS:"FETCH_STATUS",FETCH_COMPARE:"FETCH_COMPARE"},o=t(6),a=t.n(o),i=t(16),c=t.n(i),u=t(36),s=t.n(u),d="/r/insights/platform/drift/v0";t(37).a;function l(e){return p.apply(this,arguments)}function p(){return(p=c()(a.a.mark(function e(n){var t,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,s.a.get(d.concat(n),t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var f={getCompare:function(){return l("/compare",{params:{host_ids:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}})},getStatus:function(){return l("/status")}};var h={fetchStatus:function(){return{type:r.FETCH_STATUS,payload:f.getStatus()}},fetchCompare:function(e){return{type:r.FETCH_COMPARE,payload:f.getCompare(e)}}},v=t(19),m=t.n(v),y={compare:{},status:{}};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"".concat(r.FETCH_COMPARE,"_FULFILLED"):return m()({},e,{compare:n.payload});case"".concat(r.FETCH_STATUS,"_FULFILLED"):return m()({},e,{status:n.payload});default:return m()({},e)}};t.d(n,"a",function(){return h}),t.d(n,"b",function(){return g})},37:function(e){e.exports={a:"1.1.0"}},76:function(e,n,t){var r=t(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(42)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(21,function(){var n=t(21);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},79:function(e,n,t){"use strict";t.r(n);var r,o=t(1),a=t.n(o),i=t(24),c=t.n(i),u=t(569),s=t(14),d=t(35),l=t.n(d),p=t(39),f=t(33);var h=t(9),v=t.n(h),m=t(10),y=t.n(m),g=t(11),b=t.n(g),w=t(12),E=t.n(w),_=t(13),O=t.n(_),j=t(0),D=t.n(j),P=t(571),H=t(38),T=t.n(H),x=t(572),A=t(570),C=t(6),S=t.n(C),k=t(16),I=t.n(k);var M=function(e){return function(n){function t(e){var n;return v()(this,t),(n=b()(this,E()(t).call(this,e))).state={component:null},n}return O()(t,n),y()(t,[{key:"componentDidMount",value:function(){var n=I()(S.a.mark(function n(){var t,r;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):a.a.createElement("div",null,"Loading...")}}]),t}(o.Component)}(function(){return t.e(1).then(t.bind(null,573))}),U=function(e){var n=e.component,t=e.rootClass,r=T()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-l-page__main"),o.setAttribute("role","main"),a.a.createElement(n,r)};U.propTypes={component:D.a.func,rootClass:D.a.string};var F=function(){return a.a.createElement(x.a,null,a.a.createElement(U,{path:"/",component:M,rootClass:"drift"}),a.a.createElement(A.a,{to:"/"}))},L=(t(76),function(e){function n(){return v()(this,n),b()(this,E()(n).apply(this,arguments))}return O()(n,e),y()(n,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("inventory")}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(F,{childProps:this.props})}}]),n}(o.Component));L.propTypes={history:D.a.object};var R=Object(P.a)(Object(s.connect)()(L));c.a.render(a.a.createElement(s.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(r=new l.a({},[Object(p.a)()].concat(n))).register({compareReducer:f.b}),r}().getStore()},a.a.createElement(u.a,{basename:"/".concat("insightsbeta","/platform/drift")},a.a.createElement(R,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map