(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{356:function(e,t,a){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
var n=a(571);t.find=function(e,t,a,o){if("string"!=typeof t)return;if(""===t)return{target:e,key:void 0};if(t===r)return{target:e,key:""};var c,l=e,i=void 0!==o;return n(t,function(t){if(null==e)return l=null,!1;c=Array.isArray(e)?i?function(e,t,a,n){var r=t;if(r<0)throw new Error("array index out of bounds "+r);if(void 0!==n&&"function"==typeof e&&(r=e(t,a,n))<0)throw new Error("could not find patch context "+n);return r}(a,h(t),e,o):"-"===t?t:h(t):t,l=e,e=e[c]}),null===l?void 0:{target:l,key:c}},t.join=function(e){return e.join(r)},t.absolute=function(e){return e[0]===r?e:r+e},t.parse=function(e){var t=[];return n(e,t.push.bind(t)),t},t.contains=function(e,t){return 0===t.indexOf(e)&&t[e.length]===r},t.encodeSegment=function(e){return e.replace(u,s).replace(o,c)},t.decodeSegment=function(e){return e.replace(l,r).replace(p,i)},t.parseArrayIndex=h,t.isValidArrayIndex=d;var r="/",o=/\//g,c="~1",l=/~1/g,i="~",u=/~/g,s="~0",p=/~0/g;var f=/^(0|[1-9]\d*)$/;function d(e){return f.test(e)}function h(e){if(d(e))return+e;throw new SyntaxError("invalid array index "+e)}},357:function(e,t){function a(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}e.exports=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a},432:function(e,t){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
t.cons=function(e,t){var a=t.length,n=new Array(a+1);n[0]=e;for(var r=0;r<a;++r)n[r+1]=t[r];return n},t.tail=function(e){for(var t=e.length-1,a=new Array(t),n=0;n<t;++n)a[n]=e[n+1];return a},t.map=function(e,t){for(var a=new Array(t.length),n=0;n<t.length;++n)a[n]=e(t[n]);return a}},433:function(e,t,a){var n=a(356),r=a(434),o=a(572),c=a(573),l=a(432),i=a(435),u=a(357),s=a(436),p=n.find,f=n.parseArrayIndex;function d(e,t){var a=e.target;if(Array.isArray(a))if("-"===e.key)a.push(t);else{if(e.key>a.length)throw new u("target of add outside of array bounds");a.splice(e.key,0,t)}else{if(!b(a))throw new u("target of add must be an object or array "+e.key);a[e.key]=t}}function h(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute add,remove -> remove,add for same path");return c(e,t)}function m(e){var t,a=e.target;if(Array.isArray(a))return(t=a.splice(f(e.key),1))[0];if(b(a))return t=a[e.key],delete a[e.key],t;throw new u("target of remove must be an object or array")}function v(e){return void 0===e||null==e.target&&void 0!==e.key}function y(e){return void 0!==e.key&&void 0===e.target[e.key]}function b(e){return null!==e&&"object"==typeof e}t.test={apply:function(e,t,a){var n,r,c=p(e,t.path,a.findContext,t.context),l=c.target;Array.isArray(l)?(n=f(c.key),r=l[n]):r=void 0===c.key?c.target:c.target[c.key];if(!o(r,t.value))throw new i("test failed "+JSON.stringify(t));return e},inverse:function(e,t){return e.push(t),1},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute test,remove -> remove,test for same path");if("test"===t.op||"replace"===t.op)return[t,e];return c(e,t)}},t.add={apply:function(e,t,a){var n=p(e,t.path,a.findContext,t.context);if(v(n))throw new u("path does not exist "+t.path);if(void 0===t.value)throw new u("missing value");var o=r(t.value);if(void 0===n.key)return o;return d(n,o),e},inverse:function(e,t){var a=t.context;void 0!==a&&(a={before:a.before,after:l.cons(t.value,a.after)});return e.push({op:"test",path:t.path,value:t.value,context:a}),e.push({op:"remove",path:t.path,context:a}),1},commute:h},t.remove={apply:function(e,t,a){var n=p(e,t.path,a.findContext,t.context);if(v(n)||void 0===n.target[n.key])throw new u("path does not exist "+t.path);return m(n),e},inverse:function(e,t,a,n){var r=n[a-1];if(void 0===r||"test"!==r.op||r.path!==t.path)throw new s("cannot invert remove w/o test");var o=r.context;void 0!==o&&(o={before:o.before,after:l.tail(o.after)});return e.push({op:"add",path:r.path,value:r.value,context:o}),2},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)return[t,e];return c(e,t)}},t.replace={apply:function(e,t,a){var n=p(e,t.path,a.findContext,t.context);if(v(n)||y(n))throw new u("path does not exist "+t.path);if(void 0===t.value)throw new u("missing value");var o=r(t.value);if(void 0===n.key)return o;var c=n.target;Array.isArray(c)?c[f(n.key)]=o:c[n.key]=o;return e},inverse:function(e,t,a,n){var r=n[a-1];if(void 0===r||"test"!==r.op||r.path!==t.path)throw new s("cannot invert replace w/o test");var o=r.context;void 0!==o&&(o={before:o.before,after:l.cons(r.value,l.tail(o.after))});return e.push({op:"test",path:r.path,value:t.value}),e.push({op:"replace",path:r.path,value:r.value}),2},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute replace,remove -> remove,replace for same path");if("test"===t.op||"replace"===t.op)return[t,e];return c(e,t)}},t.move={apply:function(e,t,a){if(n.contains(t.path,t.from))throw new u("move.from cannot be ancestor of move.path");var r=p(e,t.path,a.findContext,t.context),o=p(e,t.from,a.findContext,t.fromContext);return d(r,m(o)),e},inverse:function(e,t){return e.push({op:"move",path:t.from,context:t.fromContext,from:t.path,fromContext:t.context}),1},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute move,remove -> move,replace for same path");return c(e,t)}},t.copy={apply:function(e,t,a){var n=p(e,t.path,a.findContext,t.context),o=p(e,t.from,a.findContext,t.fromContext);if(v(o)||y(o))throw new u("copy.from must exist");var c,l=o.target;c=Array.isArray(l)?l[f(o.key)]:l[o.key];return d(n,r(c)),e},inverse:function(e,t){throw new s("cannot invert "+t.op)},commute:h}},434:function(e,t){function a(e){return null==e||"object"!=typeof e?e:Array.isArray(e)?function(e){for(var t=e.length,n=new Array(t),r=0;r<t;++r)n[r]=a(e[r]);return n}(e):function(e){for(var t,n=Object.keys(e),r={},o=0,c=n.length;o<c;++o)t=n[o],r[t]=a(e[t]);return r}(e)}
/** @license MIT License (c) copyright 2010-2014 original author or authors */
e.exports=a},435:function(e,t){function a(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}e.exports=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a},436:function(e,t){function a(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}e.exports=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a},568:function(e,t,a){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
var n=a(569),r=a(432),o=a(570),c=a(574),l=a(356).encodeSegment;t.diff=function(e,t,a){return s(e,t,"",function(e,t){return"object"==typeof e?{patch:t,hash:p(d,e.hash,u),makeContext:p(d,e.makeContext,f),invertible:!(!1===e.invertible)}:{patch:t,hash:p(d,e,u),makeContext:f,invertible:!0}}(a,[])).patch},t.patch=o.apply,t.patchInPlace=o.applyInPlace,t.inverse=c,t.clone=o.clone,t.InvalidPatchOperationError=a(357),t.TestFailedError=a(435),t.PatchNotInvertibleError=a(436);var i=o.isValidObject,u=o.defaultHash;function s(e,t,a,o){return Array.isArray(e)&&Array.isArray(t)?function(e,t,a,o){var c=r.map(o.hash,e),l=r.map(o.hash,t),i=n.compare(c,l);return function(e,t,a,r,o){var c=0;return n.reduce(function(r,o,l,i){var u,p,f=r.patch,d=a+"/"+(i+c);return o===n.REMOVE?(u=f[f.length-1],p=r.makeContext(i,e),r.invertible&&f.push({op:"test",path:d,value:e[i],context:p}),void 0!==u&&"add"===u.op&&u.path===d?(u.op="replace",u.context=p):f.push({op:"remove",path:d,context:p}),c-=1):o===n.ADD?(f.push({op:"add",path:d,value:t[l],context:r.makeContext(i,e)}),c+=1):s(e[i],t[l],d,r),r},r,o)}(e,t,a,o,i)}(e,t,a,o):i(e)&&i(t)?function(e,t,a,n){var r,o,c=Object.keys(t),i=n.patch;for(r=c.length-1;r>=0;--r){o=c[r];var u=a+"/"+l(o);void 0!==e[o]?s(e[o],t[o],u,n):i.push({op:"add",path:u,value:t[o]})}for(c=Object.keys(e),r=c.length-1;r>=0;--r)if(o=c[r],void 0===t[o]){var p=a+"/"+l(o);n.invertible&&i.push({op:"test",path:p,value:e[o]}),i.push({op:"remove",path:p})}return n}(e,t,a,o):function(e,t,a,n){e!==t&&(n.invertible&&n.patch.push({op:"test",path:a,value:e}),n.patch.push({op:"replace",path:a,value:t}));return n}(e,t,a,o)}function p(e,t,a){return e(t)?t:a}function f(){}function d(e){return"function"==typeof e}},569:function(e,t){var a,n,r;function o(e,t,o,c,l,i){return t[l+c]===o[i+c]?{value:e[i+1][l+1].value,type:r}:e[i][l+1].value<e[i+1][l].value?{value:e[i][l+1].value+1,type:a}:{value:e[i+1][l].value+1,type:n}}
/** @license MIT License (c) copyright 2010-2014 original author or authors */
t.compare=function(e,t){for(var c=e.length,l=t.length,i=function(e,t){var a=0,n=Math.min(e.length,t.length);for(;a<n&&e[a]===t[a];)++a;return a}(e,t),u=i<c&&i<l?function(e,t){var a=e.length-1,n=t.length-1,r=Math.min(a,n),o=0;for(;o<r&&e[a-o]===t[n-o];)++o;return o}(e,t):0,s=u+i-1,p=function(e,t){var o,c,l,i=[];for(l=i[t]=[],c=0;c<e;++c)l[c]={value:e-c,type:a};for(o=0;o<t;++o)i[o]=[],i[o][e]={value:t-o,type:n};return i[t][e]={value:0,type:r},i}(c-=s,l-=s),f=c-1;f>=0;--f)for(var d=l-1;d>=0;--d)p[d][f]=o(p,e,t,i,f,d);return{prefix:i,matrix:p,suffix:u}},t.reduce=function(e,t,o){var c,l,i,u,s=o.matrix,p=o.prefix;for(c=0;c<p;++c)t=e(t,r,c,c);i=c,p=s.length,c=0,l=0;for(;c<p;)switch(u=s[c][l].type,t=e(t,u,c+i,l+i),u){case r:++c,++l;break;case a:++l;break;case n:++c}for(c+=i,l+=i,p=o.suffix,i=0;i<p;++i)t=e(t,r,c+i,l+i);return t},t.REMOVE=a=-1,t.ADD=n=1,t.EQUAL=r=0},570:function(e,t,a){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
var n=a(433),r=a(434),o=a(357);t.apply=function(e,t,a){return l(e,r(t),a)},t.applyInPlace=l,t.clone=r,t.isValidObject=i,t.defaultHash=function(e){return i(e)||function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e};var c={};function l(e,t,a){if(a||(a=c),!Array.isArray(e))return t;for(var r,l,i=0;i<e.length;++i){if(l=e[i],void 0===(r=n[l.op]))throw new o("invalid op "+JSON.stringify(l));t=r.apply(t,l,a)}return t}function i(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e)}},571:function(e,t){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
e.exports=function(e,t){var c,l,i,u;c=e.charAt(0)===n?1:0,l="",a.lastIndex=c;for(;i=a.exec(e);)if(u=i[0],l+=e.slice(c,a.lastIndex-u.length),c=a.lastIndex,u===n){if(!1===t(l))return e;l=""}else l+=u===o?n:r;return l+=e.slice(c),t(l),e};var a=/\/|~1|~0/g,n="/",r="~",o="~1"},572:function(e,t){function a(e,t){return e===t||(Array.isArray(e)&&Array.isArray(t)?function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(!a(e[n],t[n]))return!1;return!0}(e,t):"object"==typeof e&&"object"==typeof t&&function(e,t){if(null===e&&null!==t||null!==e&&null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o,c=0;c<n.length;++c)if(!((o=n[c])in t&&a(e[o],t[o])))return!1;return!0}(e,t))}e.exports=a},573:function(e,t,a){var n=a(356);function r(e,t,a,n,r){var o=t.length-1,c=+t[o],l=+n[o],i=n.slice();return c>l?i:("add"===e.op||"copy"===e.op?i[o]=Math.max(0,l-r):"remove"===e.op&&(i[o]=Math.max(0,l+r)),i)}function o(e){return"remove"===e.op?{op:e.op,path:e.path}:"copy"===e.op||"move"===e.op?{op:e.op,path:e.path,from:e.from}:{op:e.op,path:e.path,value:e.value}}e.exports=function(e,t){var a=n.parse(e.path),c=n.parse(t.path),l=function(e,t){var a=e.length,n=t.length;if(0===a||0===n||a<2&&n<2)return[];var r=a===n?a-1:Math.min(a,n),o=0;for(;o<r&&e[o]===t[o];)++o;return e.slice(0,o)}(a,c),i=function(e,t,a){return n.isValidArrayIndex(e[a])&&n.isValidArrayIndex(t[a])}(a,c,l.length),u=o(e),s=o(t);return 0!==l.length||i?i?function(e,t,a,o){if(t.length===o.length)return function(e,t,a,r){var o,c=t.length-1,l=+t[c],i=+r[c];l<i?"add"===e.op||"copy"===e.op?((o=r.slice())[c]=Math.max(0,i-1),a.path=n.absolute(n.join(o))):"remove"===e.op&&((o=r.slice())[c]=i+1,a.path=n.absolute(n.join(o))):"add"===a.op||"copy"===a.op?((o=t.slice())[c]=l+1,e.path=n.absolute(n.join(o))):l>i&&"remove"===a.op&&((o=t.slice())[c]=Math.max(0,l-1),e.path=n.absolute(n.join(o)));return[a,e]}(e,t,a,o);t.length>o.length?(t=r(a,o,e,t,-1),e.path=n.absolute(n.join(t))):(o=r(e,t,a,o,1),a.path=n.absolute(n.join(o)));return[a,e]}(u,a,s,c):function(e,t,a,n){if(e.path===a.path)throw new TypeError("cannot commute "+e.op+","+a.op+" with identical object paths");return[a,e]}(u,0,s):[s,u]}},574:function(e,t,a){var n=a(433);function r(e,t,a,r){var o=n[t.op];return void 0!==o&&"function"==typeof o.inverse?o.inverse(e,t,a,r):1}e.exports=function(e){var t,a,n=[];for(t=e.length-1;t>=0;t-=a)a=r(n,e[t],t,e);return n}},585:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),o=a(34),c=a.n(o),l=a(14),i=a.n(l),u=a(15),s=a.n(u),p=a(16),f=a.n(p),d=a(17),h=a.n(d),m=a(18),v=a.n(m),y=a(182),b=a.n(y),g=a(1),E=a.n(g),k=a(4),x=a.n(k),w=a(12),F=a(19),D=a(228),N=a(381),C=a(382),M=a(383),A=a(384),B=a(404),O=a(405),T=a(411),j=a(400),S=a(402),V=a(401),I=a(366),_=a(29);var R={toggleFactModal:function(){return{type:_.a.TOGGLE_FACT_MODAL}},setFactData:function(e){return{type:_.a.SET_FACT_DATA,payload:e}}},L=function(e){function t(e){var a;return i()(this,t),(a=f()(this,h()(t).call(this,e))).handleAddFact=a.handleAddFact.bind(b()(b()(a))),a}return v()(t,e),s()(t,[{key:"handleAddFact",value:function(){var e=this.props,t=e.setFactData,a=e.toggleFactModal;t({factName:"",factValue:"",fact:[]}),a()}},{key:"render",value:function(){return E.a.createElement(j.a,{className:"display-margin"},E.a.createElement(S.a,null,E.a.createElement(V.a,null,E.a.createElement(I.a,{variant:"primary",onClick:this.handleAddFact},"Add fact"))))}}]),t}(g.Component);L.propTypes={toggleFactModal:x.a.func,setFactData:x.a.func};var P=Object(F.connect)(null,function(e){return{toggleFactModal:function(){return e(R.toggleFactModal())},setFactData:function(t){return e(R.setFactData(t))}}})(L),H=a(385),K=a(387),J=a(393),z=a(223),G=a(568),U=a.n(G),q=a(373),Q=a(389),$=a(222),W=a(447),X=function(e){function t(e){var a;return i()(this,t),(a=f()(this,h()(t).call(this,e))).editFact=a.editFact.bind(b()(b()(a))),a.deleteFact=a.deleteFact.bind(b()(b()(a))),a.addFact=a.addFact.bind(b()(b()(a))),a.state={isOpen:!1},a}return v()(t,e),s()(t,[{key:"onKebabToggle",value:function(e){this.setState({isOpen:e})}},{key:"editFact",value:function(){var e=this.props,t=e.toggleFactModal,a=e.setFactData,n=e.factName,r=e.factValue,o=e.fact;t(),a({factName:n,factValue:r,fact:o})}},{key:"deleteFact",value:function(){var e,t=this.props,a=t.baselineData,n=t.patchBaseline,r=t.factName,o=t.factValue,c=t.fact,l={name:r,value:o};if(c.values&&""!==o){var i=te.buildDeletedSubFact(l,c);e=te.makeDeleteFactPatch(i,a,c)}else e=te.makeDeleteFactPatch(l,a,[]);n(a.id,e)}},{key:"addFact",value:function(){var e=this.props,t=e.toggleFactModal,a=e.setFactData,n=e.fact;t(),a({factName:"",factValue:"",fact:n})}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=this.props,n=a.factValue,r=a.fact,o=[E.a.createElement(q.a,{key:"edit",component:"button",onClick:this.editFact},r.values&&""===n?"Edit category":"Edit fact"),E.a.createElement(q.a,{key:"delete",component:"button",onClick:this.deleteFact},r.values&&""===n?"Delete category":"Delete fact")];return r.values&&""===n&&o.push(E.a.createElement(q.a,{key:"add fact",component:"button",onClick:this.addFact},"Add sub fact")),E.a.createElement(Q.a,{position:$.d.right,style:{float:"right"},className:"baseline-fact-kebab",toggle:E.a.createElement(W.a,{onToggle:function(t){return e.onKebabToggle(t)}}),isOpen:t,dropdownItems:o,isPlain:!0})}}]),t}(g.Component);X.propTypes={factName:x.a.string,factValue:x.a.string,fact:x.a.object,toggleFactModal:x.a.func,setFactData:x.a.func,baselineData:x.a.obj,patchBaseline:x.a.func};var Y=Object(F.connect)(function(e){return{baselineData:e.baselinesTableState.baselineData}},function(e){return{toggleFactModal:function(){return e(R.toggleFactModal())},setFactData:function(t){return e(R.setFactData(t))},patchBaseline:function(t,a){return e(z.a.patchBaseline(t,a))}}})(X);function Z(e,t,a){var n=[];return Array.isArray(a)&&0===a.length?t.baseline_facts.forEach(function(t){t.name!==e.name&&n.push(t)}):t.baseline_facts.forEach(function(e){e.name!==a.name&&n.push(e)}),n}function ee(e,t){return U.a.diff(t,e)}var te={renderKebab:function(e,t,a){return E.a.createElement("td",null,E.a.createElement(Y,{factName:e,factValue:t,fact:a}))},buildNewFactData:function(e,t,a,n){var r={},o=[];return n&&!Array.isArray(n)?(n.values.forEach(function(e){o.push(e)}),o.push({name:t,value:a}),r.name=n.name,r.values=o,r):(r.name=t,e?r.values=[]:r.value=a,r)},buildEditedFactData:function(e,t,a,n,r,o){var c={},l=[],i=t,u=n;if(e)c.name=a,o.values.forEach(function(e){l.push(e)}),c.values=l;else if(o.values&&""!==r){c.name=o.name;var s={name:a,value:r};o.values.forEach(function(e){e.name===i&&e.value===u||l.push(e)}),l.push(s),c.values=l}else c={name:a,value:r};return c},buildDeletedSubFact:function(e,t){var a=[];return t.values.forEach(function(t){t.name===e.name&&t.value===e.value||a.push(t)}),{name:t.name,values:a}},makeAddFactPatch:function(e,t,a){if(void 0===e||void 0===t)return{};var n=Z(e,t,a);n.push(e);var r=ee(n,t.baseline_facts);return{display_name:t.display_name,facts_patch:r}},makeDeleteFactPatch:function(e,t,a){if(void 0===e||void 0===t)return{};var n=Z(e,t,a);e.values&&n.push(e);var r=ee(n,t.baseline_facts);return{display_name:t.display_name,facts_patch:r}}},ae=function(e){function t(e){var a;return i()(this,t),(a=f()(this,h()(t).call(this,e))).cancelFact=a.cancelFact.bind(b()(b()(a))),a.confirmModal=a.confirmModal.bind(b()(b()(a))),a.renderCategoryCheckbox=a.renderCategoryCheckbox.bind(b()(b()(a))),a.renderFactInput=a.renderFactInput.bind(b()(b()(a))),a.renderValueInput=a.renderValueInput.bind(b()(b()(a))),a.renderModalBody=a.renderModalBody.bind(b()(b()(a))),a.patchFact=a.patchFact.bind(b()(b()(a))),a.state={factName:a.props.factName,factValue:a.props.factValue,factData:a.props.factData},""!==a.props.factName&&""===a.props.factValue?a.state.categoryCheck=!0:a.state.categoryCheck=!1,a.handleChange=function(e){a.setState({categoryCheck:e})},a.handleNewName=function(e){a.setState({factName:e})},a.handleNewValue=function(e){a.setState({factValue:e})},a}return v()(t,e),s()(t,[{key:"cancelFact",value:function(){(0,this.props.toggleFactModal)()}},{key:"confirmModal",value:function(){var e=this.props,t=e.toggleFactModal,a=e.factName,n=e.factValue;""===a&&""===n||void 0===a&&void 0===n?this.addFact():this.editFact(),t()}},{key:"addFact",value:function(){var e=this.state,t=e.categoryCheck,a=e.factName,n=e.factValue,r=e.factData,o=te.buildNewFactData(t,a,n,r);this.patchFact(o,r)}},{key:"editFact",value:function(){var e=this.state,t=e.categoryCheck,a=e.factName,n=e.factValue,r=e.factData,o=te.buildEditedFactData(t,this.props.factName,a,this.props.factValue,n,r);this.patchFact(o,r)}},{key:"patchFact",value:function(e,t){var a=this.props,n=a.baselineData,r=a.patchBaseline,o=te.makeAddFactPatch(e,n,t);r(n.id,o)}},{key:"renderCategoryCheckbox",value:function(){var e=this.state.categoryCheck,t=this.props,a=t.factName,n=t.factValue,r=t.factData;return""!==a&&""===n?E.a.createElement(H.a,{label:"This is a category","aria-label":"controlled checkbox example",id:"categoryCheck",name:"isCategory",defaultChecked:!0,isDisabled:!0}):""!==a&&""!==n||""===a&&""===n&&!Array.isArray(r)?E.a.createElement(H.a,{label:"This is a category","aria-label":"controlled checkbox example",id:"categoryCheck",name:"isCategory",isDisabled:!0}):E.a.createElement(H.a,{label:"This is a category",isChecked:e,onChange:this.handleChange,"aria-label":"controlled checkbox example",id:"categoryCheck",name:"isCategory"})}},{key:"renderFactInput",value:function(){var e=this.state.factName;return E.a.createElement("div",{className:"fact-value"},"Fact name:",E.a.createElement("br",null),E.a.createElement(K.a,{value:e,type:"text",placeholder:"Name",onChange:this.handleNewName,isValid:""!==e&&void 0!==e,"aria-label":"fact name"}))}},{key:"renderValueInput",value:function(){var e,t=this.state,a=t.categoryCheck,n=t.factValue;return e=a?E.a.createElement(K.a,{type:"text","aria-label":"value",isDisabled:!0}):E.a.createElement(K.a,{value:n,type:"text",placeholder:"Value",onChange:this.handleNewValue,isValid:""!==n&&void 0!==n,"aria-label":"value"}),E.a.createElement("div",{className:"fact-value"},"Value:",E.a.createElement("br",null),e)}},{key:"renderModalBody",value:function(){return E.a.createElement(E.a.Fragment,null,this.renderCategoryCheckbox(),this.renderFactInput(),E.a.createElement("br",null),this.renderValueInput())}},{key:"render",value:function(){var e=this.props.factModalOpened;return E.a.createElement(J.a,{className:"small-modal-body",title:"Fact add/edit",isOpen:e,onClose:this.cancelFact,width:"auto",actions:[E.a.createElement(I.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),E.a.createElement(I.a,{key:"cancel",variant:"primary",onClick:this.cancelFact},"Cancel")]},this.renderModalBody())}}]),t}(g.Component);ae.propTypes={toggleFactModal:x.a.func,factModalOpened:x.a.bool,factName:x.a.string,factValue:x.a.string,factData:x.a.obj,baselineData:x.a.obj,patchBaseline:x.a.func};var ne=Object(F.connect)(function(e){return{factModalOpened:e.factModalState.factModalOpened,factName:e.factModalState.factName,factValue:e.factModalState.factValue,factData:e.factModalState.factData,baselineData:e.baselinesTableState.baselineData}},function(e){return{toggleFactModal:function(){return e(R.toggleFactModal())},patchBaseline:function(t,a){return e(z.a.patchBaseline(t,a))}}})(ae),re=a(170);var oe={toggleEditNameModal:function(){return{type:re.a.TOGGLE_EDIT_NAME_MODAL}}},ce=function(e){function t(e){var a;return i()(this,t),(a=f()(this,h()(t).call(this,e))).confirmModal=function(){var e=a.state.baselineName,t=a.props,n=t.baselineData,r=t.patchBaseline,o=t.toggleEditNameModal;r(n.id,{display_name:e,facts_patch:[]}),o()},a.cancelModal=function(){var e=a.props,t=e.toggleEditNameModal,n=e.baselineData;a.updateBaselineName(n.display_name),t()},a.state={baselineName:a.props.baselineData.display_name},a.updateBaselineName=function(e){a.setState({baselineName:e})},a}return v()(t,e),s()(t,[{key:"renderModalBody",value:function(){var e=this.state.baselineName;return E.a.createElement("div",{className:"fact-value"},E.a.createElement("b",null,"Baseline title"),E.a.createElement("br",null),E.a.createElement(K.a,{value:e,type:"text",onChange:this.updateBaselineName,isValid:""!==e,"aria-label":"baseline name"}))}},{key:"render",value:function(){var e=this.props.editNameModalOpened;return E.a.createElement(J.a,{className:"small-modal-body",title:"Edit title",isOpen:e,onClose:this.cancelModal,width:"auto",actions:[E.a.createElement(I.a,{key:"confirm",variant:"primary",onClick:this.confirmModal},"Save"),E.a.createElement(I.a,{key:"cancel",variant:"secondary",onClick:this.cancelModal},"Cancel")]},this.renderModalBody())}}]),t}(g.Component);ce.propTypes={baselineId:x.a.string,baselineName:x.a.string,baselineData:x.a.obj,editNameModalOpened:x.a.bool,toggleEditNameModal:x.a.func,patchBaseline:x.a.func};var le=Object(F.connect)(function(e){return{baselineData:e.baselinesTableState.baselineData,editNameModalOpened:e.editNameModalState.editNameModalOpened}},function(e){return{toggleEditNameModal:function(){return e(oe.toggleEditNameModal())},patchBaseline:function(t,a){return e(z.a.patchBaseline(t,a))}}})(ce),ie=function(e){function t(e){var a;return i()(this,t),(a=f()(this,h()(t).call(this,e))).fetchBaselineId(),a.renderBreadcrumb=a.renderBreadcrumb.bind(b()(b()(a))),a.goToBaselinesList=a.goToBaselinesList.bind(b()(b()(a))),a}var a;return v()(t,e),s()(t,[{key:"componentDidMount",value:(a=c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"fetchBaselineId",value:function(){var e=this.props,t=e.match.params;(0,e.fetchBaselineData)(t.id)}},{key:"goToBaselinesList",value:function(){var e=this.props,t=e.history;(0,e.clearBaselineData)(),t.push("/baselines")}},{key:"renderBreadcrumb",value:function(){var e=this,t=this.props.baselineData;return E.a.createElement(N.a,null,E.a.createElement(C.a,null,E.a.createElement("a",{onClick:function(){return e.goToBaselinesList()}},"Baselines")),E.a.createElement(C.a,{isActive:!0},t.display_name))}},{key:"renderHeaderRow",value:function(){return E.a.createElement("tr",null,E.a.createElement("th",{className:"edit-baseline-header"},E.a.createElement("div",null,"Fact")),E.a.createElement("th",{className:"edit-baseline-header"},E.a.createElement("div",null,"Value")),E.a.createElement("th",null))}},{key:"renderLoadingRows",value:function(){for(var e=[],t=[],a=0;a<3;a+=1)t.push(E.a.createElement("td",null,E.a.createElement(D.Skeleton,{size:D.SkeletonSize.md})));for(var n=0;n<10;n+=1)e.push(E.a.createElement("tr",null,t));return e}},{key:"renderExpandableRowButton",value:function(e){var t=this;return this.props.expandedRows.includes(e)?E.a.createElement(B.a,{className:"pointer active-blue",onClick:function(){return t.props.expandRow(e)}}):E.a.createElement(O.a,{className:"pointer",onClick:function(){return t.props.expandRow(e)}})}},{key:"renderRowData",value:function(e){var t=this.props.expandedRows,a=[],n=[];return e.values?(a.push(E.a.createElement("td",{className:t.includes(e.name)?"nested-fact":""},this.renderExpandableRowButton(e.name)," ",e.name)),a.push(E.a.createElement("td",null)),a.push(te.renderKebab(e.name,"",e)),n.push(E.a.createElement("tr",null,a)),t.includes(e.name)&&e.values.forEach(function(t){(a=[]).push(E.a.createElement("td",{className:"nested-fact"},E.a.createElement("p",{className:"child-row"},t.name))),a.push(E.a.createElement("td",null,t.value)),a.push(te.renderKebab(t.name,t.value,e)),n.push(E.a.createElement("tr",null,a))})):(a.push(E.a.createElement("td",null,e.name)),a.push(E.a.createElement("td",null,e.value)),a.push(te.renderKebab(e.name,e.value,e)),n.push(E.a.createElement("tr",null,a))),n}},{key:"renderRows",value:function(){var e=this.props.baselineData.baseline_facts,t=[],a=[];if(void 0!==e)for(var n=0;n<e.length;n+=1)a=this.renderRowData(e[n]),t.push(a);return t}},{key:"renderTable",value:function(){var e=this.props.baselineData;return E.a.createElement("table",{className:"pf-c-table ins-c-table pf-m-compact ins-entity-table drift-table"},E.a.createElement("thead",null,this.renderHeaderRow()),E.a.createElement("tbody",null,void 0!==e?this.renderRows():this.renderLoadingRows()))}},{key:"render",value:function(){var e=this.props,t=e.baselineData,a=e.factModalOpened,n=e.toggleEditNameModal;return E.a.createElement(E.a.Fragment,null,void 0!==t?E.a.createElement(E.a.Fragment,null,E.a.createElement(le,null),E.a.createElement(D.PageHeader,null,this.renderBreadcrumb(),E.a.createElement("br",null),E.a.createElement(D.PageHeaderTitle,{title:t.display_name}),E.a.createElement(T.a,{className:"pointer not-active edit-icon-margin",onClick:function(){return n()}}))):E.a.createElement(D.PageHeader,null,E.a.createElement("div",null,E.a.createElement(D.Skeleton,{size:D.SkeletonSize.lg}))),E.a.createElement(D.Main,null,E.a.createElement(M.a,{className:"pf-t-light pf-m-opaque-100"},E.a.createElement(A.a,null,a?E.a.createElement(ne,null):null,E.a.createElement(P,null),this.renderTable()))))}}]),t}(g.Component);ie.propTypes={history:x.a.obj,match:x.a.any,clearBaselineData:x.a.func,baselineData:x.a.object,baselineDataLoading:x.a.bool,patchBaseline:x.a.func,fetchBaselineData:x.a.func,factModalOpened:x.a.bool,editBaselineTableData:x.a.array,expandRow:x.a.func,expandedRows:x.a.array,toggleEditNameModal:x.a.func};t.default=Object(w.k)(Object(F.connect)(function(e){return{baselineData:e.baselinesTableState.baselineData,baselineDataLoading:e.baselinesTableState.baselineDataLoading,factModalOpened:e.factModalState.factModalOpened,editBaselineTableData:e.baselinesTableState.editBaselineTableData,expandedRows:e.baselinesTableState.expandedRows}},function(e){return{clearBaselineData:function(){return e(z.a.clearBaselineData())},patchBaseline:function(t,a){return e(z.a.patchBaseline(t,a))},expandRow:function(t){return e(z.a.expandRow(t))},fetchBaselineData:function(t){return e(z.a.fetchBaselineData(t))},toggleEditNameModal:function(){return e(oe.toggleEditNameModal())}}})(ie))}}]);
//# sourceMappingURL=../sourcemaps/4.js.map