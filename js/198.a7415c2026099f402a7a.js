(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[198],{90879:(r,t,n)=>{"use strict";n.r(t),n.d(t,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>v,bindActionCreators:()=>h,combineReducers:()=>s,compose:()=>w,createStore:()=>y});var e=n(96156);function o(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function i(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,e.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}function f(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var u="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function a(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function y(r,t,n){var e;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(f(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(f(1));return n(y)(r,t)}if("function"!=typeof r)throw new Error(f(2));var o=r,i=t,c=[],s=c,l=!1;function h(){s===c&&(s=c.slice())}function w(){if(l)throw new Error(f(3));return i}function v(r){if("function"!=typeof r)throw new Error(f(4));if(l)throw new Error(f(5));var t=!0;return h(),s.push(r),function(){if(t){if(l)throw new Error(f(6));t=!1,h();var n=s.indexOf(r);s.splice(n,1),c=null}}}function d(r){if(!a(r))throw new Error(f(7));if(void 0===r.type)throw new Error(f(8));if(l)throw new Error(f(9));try{l=!0,i=o(i,r)}finally{l=!1}for(var t=c=s,n=0;n<t.length;n++)(0,t[n])();return r}function b(r){if("function"!=typeof r)throw new Error(f(10));o=r,d({type:p.REPLACE})}function O(){var r,t=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(f(11));function n(){r.next&&r.next(w())}return n(),{unsubscribe:t(n)}}})[u]=function(){return this},r}return d({type:p.INIT}),(e={dispatch:d,subscribe:v,getState:w,replaceReducer:b})[u]=O,e}function s(r){for(var t=Object.keys(r),n={},e=0;e<t.length;e++){var o=t[e];"function"==typeof r[o]&&(n[o]=r[o])}var i,u=Object.keys(n);try{!function(r){Object.keys(r).forEach((function(t){var n=r[t];if(void 0===n(void 0,{type:p.INIT}))throw new Error(f(12));if(void 0===n(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(f(13))}))}(n)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var e=!1,o={},c=0;c<u.length;c++){var p=u[c],a=n[p],y=r[p],s=a(y,t);if(void 0===s)throw t&&t.type,new Error(f(14));o[p]=s,e=e||s!==y}return(e=e||u.length!==Object.keys(r).length)?o:r}}function l(r,t){return function(){return t(r.apply(this,arguments))}}function h(r,t){if("function"==typeof r)return l(r,t);if("object"!=typeof r||null===r)throw new Error(f(16));var n={};for(var e in r){var o=r[e];"function"==typeof o&&(n[e]=l(o,t))}return n}function w(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function v(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(r){return function(){var n=r.apply(void 0,arguments),e=function(){throw new Error(f(15))},o={getState:n.getState,dispatch:function(){return e.apply(void 0,arguments)}},u=t.map((function(r){return r(o)}));return e=w.apply(void 0,u)(n.dispatch),i(i({},n),{},{dispatch:e})}}}}}]);
//# sourceMappingURL=../sourcemaps/198.6acf51f582c1d022232d.js.map