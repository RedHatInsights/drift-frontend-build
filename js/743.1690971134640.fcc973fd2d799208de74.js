(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[743],{98773:(r,e,t)=>{"use strict";t.d(e,{Z:()=>i});var n=t(81163),o=t(55140),a=function(){return a=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},a.apply(this,arguments)};const i=function(r,e){var t=(0,n.useNavigate)(),i=(0,o.Z)();return function(n,o){return t(function(r,e,t,n){var o=("object"==typeof t?t.pathname:t)||"",i=/^\//.test(o),c=n?"/preview":"",s=e||r.getApp(),u=i?[c,r.getBundle(),s,o.replace(/^\//,"")].join("/"):o;return"object"==typeof t?a(a({},t),{pathname:u}):u}(i,r,n,o||e))}}},63652:(r,e,t)=>{"use strict";t.d(e,{Z:()=>w});var n=t(48521),o=t(92950),a=t.n(o),i=t(45697),c=t.n(i),s=t(54025),u=t(90958),l=t(14938);const p=function(r){var e=r.component,t=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]])}return t}(r,["component"]);return(0,o.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(e,"."),t)}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Unable to load inventory component"}),(0,n.jsxs)("h2",{children:["Failed to load ",e]}),(0,n.jsx)("code",{children:"More info can be found in browser console output."})]})};var f=t(94184),y=t.n(f),d=t(81163),m=t(55140),g=function(){return g=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},g.apply(this,arguments)},v=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]])}return t},b=function(r){var e=r.Component,t=v(r,["Component"]),o=d.useHistory();return(0,n.jsx)(e,g({history:o},t))},j=function(r){var e=r.Component,t=v(r,["Component"]),o=(0,m.Z)().chromeHistory;return(0,n.jsx)(e,g({history:o},t))};const h=a().forwardRef((function(r,e){var t=r.Component,a=v(r,["Component"]),i=(0,o.useMemo)((function(){return"function"==typeof d.useHistory?b:j}),[t,a]);return(0,n.jsx)(i,g({innerRef:e,Component:t},a))}));var x=function(){return x=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},x.apply(this,arguments)},O=function(r){var e=(0,u.useStore)(),t=r.component;return(0,n.jsx)(t,x({className:y()(r.className,"inventory")},{children:(0,n.jsx)(o.Suspense,x({fallback:r.fallback},{children:(0,n.jsx)(s.ScalprumComponent,x({history:r.history,store:e,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,n.jsx)(p,x({component:"InventoryDetailHead"},r)),ref:r.innerRef},r))}))}))};O.propTypes={fallback:c().node,innerRef:c().object,component:c().string,className:c().string,history:c().object};var k=a().forwardRef((function(r,e){return(0,n.jsx)(O,x({innerRef:e},r))}));k.propTypes={fallback:c().node,component:c().string,className:c().string},k.defaultProps={fallback:(0,n.jsx)(l.Bullseye,x({className:"pf-u-p-lg"},{children:(0,n.jsx)(l.Spinner,{size:"xl"})})),component:"section"};const w=a().forwardRef((function(r,e){return(0,n.jsx)(h,x({innerRef:e,Component:k},r))}))},44020:r=>{"use strict";var e="%[a-f0-9]{2}",t=new RegExp("("+e+")|([^%]+?)","gi"),n=new RegExp("("+e+")+","gi");function o(r,e){try{return[decodeURIComponent(r.join(""))]}catch(r){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var e=r.match(t)||[],n=1;n<e.length;n++)e=(r=o(e,n).join("")).match(t)||[];return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},t=n.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(r){var o=a(t[0]);o!==t[0]&&(e[t[0]]=o)}t=n.exec(r)}e["%C2"]="�";for(var i=Object.keys(e),c=0;c<i.length;c++){var s=i[c];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},92806:r=>{"use strict";r.exports=function(r,e){for(var t={},n=Object.keys(r),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],c=r[i];(o?-1!==e.indexOf(i):e(i,c,r))&&(t[i]=c)}return t}},27561:(r,e,t)=>{var n=t(67990),o=/^\s+/;r.exports=function(r){return r?r.slice(0,n(r)+1).replace(o,""):r}},67990:r=>{var e=/\s/;r.exports=function(r){for(var t=r.length;t--&&e.test(r.charAt(t)););return t}},23279:(r,e,t)=>{var n=t(13218),o=t(7771),a=t(14841),i=Math.max,c=Math.min;r.exports=function(r,e,t){var s,u,l,p,f,y,d=0,m=!1,g=!1,v=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function b(e){var t=s,n=u;return s=u=void 0,d=e,p=r.apply(n,t)}function j(r){return d=r,f=setTimeout(x,e),m?b(r):p}function h(r){var t=r-y;return void 0===y||t>=e||t<0||g&&r-d>=l}function x(){var r=o();if(h(r))return O(r);f=setTimeout(x,function(r){var t=e-(r-y);return g?c(t,l-(r-d)):t}(r))}function O(r){return f=void 0,v&&s?b(r):(s=u=void 0,p)}function k(){var r=o(),t=h(r);if(s=arguments,u=this,y=r,t){if(void 0===f)return j(y);if(g)return clearTimeout(f),f=setTimeout(x,e),b(y)}return void 0===f&&(f=setTimeout(x,e)),p}return e=a(e)||0,n(t)&&(m=!!t.leading,l=(g="maxWait"in t)?i(a(t.maxWait)||0,e):l,v="trailing"in t?!!t.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),d=0,s=y=u=f=void 0},k.flush=function(){return void 0===f?p:O(o())},k}},41609:(r,e,t)=>{var n=t(280),o=t(64160),a=t(35694),i=t(1469),c=t(98612),s=t(44144),u=t(25726),l=t(36719),p=Object.prototype.hasOwnProperty;r.exports=function(r){if(null==r)return!0;if(c(r)&&(i(r)||"string"==typeof r||"function"==typeof r.splice||s(r)||l(r)||a(r)))return!r.length;var e=o(r);if("[object Map]"==e||"[object Set]"==e)return!r.size;if(u(r))return!n(r).length;for(var t in r)if(p.call(r,t))return!1;return!0}},7771:(r,e,t)=>{var n=t(55639);r.exports=function(){return n.Date.now()}},14841:(r,e,t)=>{var n=t(27561),o=t(13218),a=t(33448),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;r.exports=function(r){if("number"==typeof r)return r;if(a(r))return NaN;if(o(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=o(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=n(r);var t=c.test(r);return t||s.test(r)?u(r.slice(2),t?2:8):i.test(r)?NaN:+r}},17563:(r,e,t)=>{"use strict";const n=t(70610),o=t(44020),a=t(80500),i=t(92806),c=Symbol("encodeFragmentIdentifier");function s(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(r,e){return e.encode?e.strict?n(r):encodeURIComponent(r):r}function l(r,e){return e.decode?o(r):r}function p(r){return Array.isArray(r)?r.sort():"object"==typeof r?p(Object.keys(r)).sort(((r,e)=>Number(r)-Number(e))).map((e=>r[e])):r}function f(r){const e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function y(r){const e=(r=f(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function d(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function m(r,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const t=function(r){let e;switch(r.arrayFormat){case"index":return(r,t,n)=>{e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return(r,t,n)=>{e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return(r,t,n)=>{e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return(e,t,n)=>{const o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&l(t,r).includes(r.arrayFormatSeparator);t=a?l(t,r):t;const i=o||a?t.split(r.arrayFormatSeparator).map((e=>l(e,r))):null===t?t:l(t,r);n[e]=i};case"bracket-separator":return(e,t,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=t?l(t,r):t);const a=null===t?[]:t.split(r.arrayFormatSeparator).map((e=>l(e,r)));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a};default:return(r,e,t)=>{void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;for(const o of r.split("&")){if(""===o)continue;let[r,i]=a(e.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:l(i,e),t(l(r,e),i,n)}for(const r of Object.keys(n)){const t=n[r];if("object"==typeof t&&null!==t)for(const r of Object.keys(t))t[r]=d(t[r],e);else n[r]=d(t,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((r,e)=>{const t=n[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=p(t):r[e]=t,r}),Object.create(null))}e.extract=y,e.parse=m,e.stringify=(r,e)=>{if(!r)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const t=t=>e.skipNull&&null==r[t]||e.skipEmptyString&&""===r[t],n=function(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[u(e,r),"[",o,"]"].join("")]:[...t,[u(e,r),"[",u(o,r),"]=",u(n,r)].join("")]};case"bracket":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[u(e,r),"[]"].join("")]:[...t,[u(e,r),"[]=",u(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[u(e,r),":list="].join("")]:[...t,[u(e,r),":list=",u(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===r.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[u(t,r),e,u(o,r)].join("")]:[[n,u(o,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,u(e,r)]:[...t,[u(e,r),"=",u(n,r)].join("")]}}(e),o={};for(const e of Object.keys(r))t(e)||(o[e]=r[e]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((t=>{const o=r[t];return void 0===o?"":null===o?u(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?u(t,e)+"[]":o.reduce(n(t),[]).join("&"):u(t,e)+"="+u(o,e)})).filter((r=>r.length>0)).join("&")},e.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[t,n]=a(r,"#");return Object.assign({url:t.split("?")[0]||"",query:m(y(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,e)}:{})},e.stringifyUrl=(r,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=f(r.url).split("?")[0]||"",o=e.extract(r.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,r.query);let s=e.stringify(i,t);s&&(s=`?${s}`);let l=function(r){let e="";const t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(l=`#${t[c]?u(r.fragmentIdentifier,t):r.fragmentIdentifier}`),`${n}${s}${l}`},e.pick=(r,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=e.parseUrl(r,n);return e.stringifyUrl({url:o,query:i(a,t),fragmentIdentifier:s},n)},e.exclude=(r,t,n)=>{const o=Array.isArray(t)?r=>!t.includes(r):(r,e)=>!t(r,e);return e.pick(r,o,n)}},80500:r=>{"use strict";r.exports=(r,e)=>{if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];const t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},70610:r=>{"use strict";r.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,(r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=../sourcemaps/743.2df15f7ba1be4441c8ff502c86ae01fe.js.map