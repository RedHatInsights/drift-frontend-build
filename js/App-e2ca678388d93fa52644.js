!function(e){function t(t){for(var a,r,o=t[0],s=t[1],i=t[2],c=0,l=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(C,r)&&C[r]&&l.push(C[r][0]),C[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(R&&R(t);l.length;)l.shift()();return I.push.apply(I,i||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==C[o]&&(a=!1)}a&&(I.splice(t--,1),e=O(O.s=n[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!T[e]||!D[e])return;for(var n in D[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--_&&0===v&&S()}(e,t),a&&a(e,t)};var r,o=!0,s="e2ca678388d93fa52644",i=1e4,c={},l=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._acceptedDependencies[e[a]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:L,apply:w,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return r=void 0,t}var p=[],f="idle";function E(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,m,g,_=0,v=0,b={},D={},T={};function y(e){return+e+""===e?+e:e}function L(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,E("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var a=new XMLHttpRequest,r=O.p+""+s+".hot-update.json";a.open("GET",r,!0),a.timeout=t,a.send(null)}catch(e){return n(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return E("idle"),null;D={},b={},T=e.c,g=e.h,E("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},C)A(n);return"prepare"===f&&0===v&&0===_&&S(),t});var t}function A(e){T[e]?(D[e]=!0,_++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=O.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function S(){E("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return w(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(y(n));e.resolve(t)}}function w(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,a,r,o,i;function d(e){for(var t=[e],n={},a=t.map(function(e){return{chain:[e],id:e}});a.length>0;){var r=a.pop(),s=r.id,i=r.chain;if((o=j[s])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(o.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var c=0;c<o.parents.length;c++){var l=o.parents[c],d=j[l];if(d){if(d.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([l]),moduleId:s,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),u(n[l],[s])):(delete n[l],t.push(l),a.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];-1===e.indexOf(a)&&e.push(a)}}t=t||{};var p={},h=[],_={},v=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var D;i=y(b);var L=!1,A=!1,S=!1,w="";switch((D=m[b]?d(i):{type:"disposed",moduleId:b}).chain&&(w="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(L=new Error("Aborted because of self decline: "+D.moduleId+w));break;case"declined":t.onDeclined&&t.onDeclined(D),t.ignoreDeclined||(L=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+w));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(D),t.ignoreUnaccepted||(L=new Error("Aborted because "+i+" is not accepted"+w));break;case"accepted":t.onAccepted&&t.onAccepted(D),A=!0;break;case"disposed":t.onDisposed&&t.onDisposed(D),S=!0;break;default:throw new Error("Unexception type "+D.type)}if(L)return E("abort"),Promise.reject(L);if(A)for(i in _[i]=m[i],u(h,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,i)&&(p[i]||(p[i]=[]),u(p[i],D.outdatedDependencies[i]));S&&(u(h,[D.moduleId]),_[i]=v)}var I,x=[];for(a=0;a<h.length;a++)i=h[a],j[i]&&j[i].hot._selfAccepted&&_[i]!==v&&x.push({module:i,errorHandler:j[i].hot._selfAccepted});E("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&function(e){delete C[e]}(e)});for(var N,F,R=h.slice();R.length>0;)if(i=R.pop(),o=j[i]){var P={},B=o.hot._disposeHandlers;for(r=0;r<B.length;r++)(n=B[r])(P);for(c[i]=P,o.hot.active=!1,delete j[i],delete p[i],r=0;r<o.children.length;r++){var k=j[o.children[r]];k&&((I=k.parents.indexOf(i))>=0&&k.parents.splice(I,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(o=j[i]))for(F=p[i],r=0;r<F.length;r++)N=F[r],(I=o.children.indexOf(N))>=0&&o.children.splice(I,1);for(i in E("apply"),s=g,_)Object.prototype.hasOwnProperty.call(_,i)&&(e[i]=_[i]);var M=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(o=j[i])){F=p[i];var H=[];for(a=0;a<F.length;a++)if(N=F[a],n=o.hot._acceptedDependencies[N]){if(-1!==H.indexOf(n))continue;H.push(n)}for(a=0;a<H.length;a++){n=H[a];try{n(F)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:F[a],error:e}),t.ignoreErrored||M||(M=e)}}}for(a=0;a<x.length;a++){var U=x[a];i=U.module,l=[i];try{O(i)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||M||(M=e)}}return M?(E("fail"),Promise.reject(M)):(E("idle"),new Promise(function(e){e(h)}))}var j={},C={1:0},I=[];function O(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=l,l=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=j[e];if(!t)return O;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(l=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),O(n)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return O[e]},set:function(t){O[e]=t}}};for(var o in O)Object.prototype.hasOwnProperty.call(O,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,a(o));return n.e=function(e){return"ready"===f&&E("prepare"),v++,O.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(b[e]||A(e),0===v&&0===_&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),O.t(e,-2&t)},n}(t)),n.l=!0,n.exports}O.e=function(e){var t=[],n=C[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=C[e]=[t,a]});t.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,O.nc&&o.setAttribute("nonce",O.nc),o.src=function(e){return O.p+"js/"+({}[e]||e)+"-"+s+".js"}(e);var i=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=C[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}C[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},O.m=e,O.c=j,O.d=function(e,t,n){O.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},O.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.t=function(e,t){if(1&t&&(e=O(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(O.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)O.d(n,a,function(t){return e[t]}.bind(null,a));return n},O.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return O.d(t,"a",t),t},O.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},O.p="/beta/apps/drift/",O.oe=function(e){throw console.error(e),e},O.h=function(){return s};var x=window.webpackJsonp=window.webpackJsonp||[],N=x.push.bind(x);x.push=t,x=x.slice();for(var F=0;F<x.length;F++)t(x[F]);var R=N;I.push([204,2]),n()}({11:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return i});var a=n(173),r="/api/drift/v1",o="/api/system-baseline/v0",s="asc",i="desc";a.a},14:function(e,t,n){"use strict";var a=n(0),r=n.n(a);function o(e,t){var n="";return t.forEach(function(t){t.display_name===e[0]&&(n=t.id)}),n}function s(e){return r.a.utc(e).format("DD MMM YYYY, HH:mm UTC")}t.a={buildBaselinesTable:function(e,t){var n=[];return e.forEach(function(e){var a=[],r=s(e.updated);a.push(e.display_name),a.push(r),t&&t.find(function(t){return e.id===t})&&(a.selected=!0),n.push(a)}),n},setBaselineArray:function(e,t){var n=[],a="";return e.forEach(function(e){e.selected&&(a=o(e,t),n.push(a))}),n},findBaselineId:o,buildNewTableData:function(e,t){var n=[];return e.forEach(function(e){if(e.id!==t){var a=s(e.updated);n.push([e.display_name,a])}}),n},buildNewBaselineList:function(e,t){var n=[];return e.forEach(function(e){e.id!==t&&n.push(e)}),n}}},164:function(e,t,n){"use strict";t.a={OPEN_ERROR_ALERT:"OPEN_ERROR_ALERT"}},165:function(e,t,n){"use strict";t.a={OPEN_FILTER_DROPDOWN:"OPEN_FILTER_DROPDOWN"}},166:function(e,t,n){"use strict";t.a={TOGGLE_KEBAB:"TOGGLE_KEBAB"}},167:function(e,t,n){"use strict";t.a={CREATE_NEW_BASELINE:"CREATE_NEW_BASELINE"}},168:function(e,t,n){"use strict";t.a={EXPORT_BASELINES_LIST_TO_CSV:"EXPORT_BASELINES_LIST_TO_CSV"}},173:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},194:function(e,t,n){var a={"./af":37,"./af.js":37,"./ar":38,"./ar-dz":39,"./ar-dz.js":39,"./ar-kw":40,"./ar-kw.js":40,"./ar-ly":41,"./ar-ly.js":41,"./ar-ma":42,"./ar-ma.js":42,"./ar-sa":43,"./ar-sa.js":43,"./ar-tn":44,"./ar-tn.js":44,"./ar.js":38,"./az":45,"./az.js":45,"./be":46,"./be.js":46,"./bg":47,"./bg.js":47,"./bm":48,"./bm.js":48,"./bn":49,"./bn.js":49,"./bo":50,"./bo.js":50,"./br":51,"./br.js":51,"./bs":52,"./bs.js":52,"./ca":53,"./ca.js":53,"./cs":54,"./cs.js":54,"./cv":55,"./cv.js":55,"./cy":56,"./cy.js":56,"./da":57,"./da.js":57,"./de":58,"./de-at":59,"./de-at.js":59,"./de-ch":60,"./de-ch.js":60,"./de.js":58,"./dv":61,"./dv.js":61,"./el":62,"./el.js":62,"./en-SG":63,"./en-SG.js":63,"./en-au":64,"./en-au.js":64,"./en-ca":65,"./en-ca.js":65,"./en-gb":66,"./en-gb.js":66,"./en-ie":67,"./en-ie.js":67,"./en-il":68,"./en-il.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":71,"./es-do":72,"./es-do.js":72,"./es-us":73,"./es-us.js":73,"./es.js":71,"./et":74,"./et.js":74,"./eu":75,"./eu.js":75,"./fa":76,"./fa.js":76,"./fi":77,"./fi.js":77,"./fo":78,"./fo.js":78,"./fr":79,"./fr-ca":80,"./fr-ca.js":80,"./fr-ch":81,"./fr-ch.js":81,"./fr.js":79,"./fy":82,"./fy.js":82,"./ga":83,"./ga.js":83,"./gd":84,"./gd.js":84,"./gl":85,"./gl.js":85,"./gom-latn":86,"./gom-latn.js":86,"./gu":87,"./gu.js":87,"./he":88,"./he.js":88,"./hi":89,"./hi.js":89,"./hr":90,"./hr.js":90,"./hu":91,"./hu.js":91,"./hy-am":92,"./hy-am.js":92,"./id":93,"./id.js":93,"./is":94,"./is.js":94,"./it":95,"./it-ch":96,"./it-ch.js":96,"./it.js":95,"./ja":97,"./ja.js":97,"./jv":98,"./jv.js":98,"./ka":99,"./ka.js":99,"./kk":100,"./kk.js":100,"./km":101,"./km.js":101,"./kn":102,"./kn.js":102,"./ko":103,"./ko.js":103,"./ku":104,"./ku.js":104,"./ky":105,"./ky.js":105,"./lb":106,"./lb.js":106,"./lo":107,"./lo.js":107,"./lt":108,"./lt.js":108,"./lv":109,"./lv.js":109,"./me":110,"./me.js":110,"./mi":111,"./mi.js":111,"./mk":112,"./mk.js":112,"./ml":113,"./ml.js":113,"./mn":114,"./mn.js":114,"./mr":115,"./mr.js":115,"./ms":116,"./ms-my":117,"./ms-my.js":117,"./ms.js":116,"./mt":118,"./mt.js":118,"./my":119,"./my.js":119,"./nb":120,"./nb.js":120,"./ne":121,"./ne.js":121,"./nl":122,"./nl-be":123,"./nl-be.js":123,"./nl.js":122,"./nn":124,"./nn.js":124,"./pa-in":125,"./pa-in.js":125,"./pl":126,"./pl.js":126,"./pt":127,"./pt-br":128,"./pt-br.js":128,"./pt.js":127,"./ro":129,"./ro.js":129,"./ru":130,"./ru.js":130,"./sd":131,"./sd.js":131,"./se":132,"./se.js":132,"./si":133,"./si.js":133,"./sk":134,"./sk.js":134,"./sl":135,"./sl.js":135,"./sq":136,"./sq.js":136,"./sr":137,"./sr-cyrl":138,"./sr-cyrl.js":138,"./sr.js":137,"./ss":139,"./ss.js":139,"./sv":140,"./sv.js":140,"./sw":141,"./sw.js":141,"./ta":142,"./ta.js":142,"./te":143,"./te.js":143,"./tet":144,"./tet.js":144,"./tg":145,"./tg.js":145,"./th":146,"./th.js":146,"./tl-ph":147,"./tl-ph.js":147,"./tlh":148,"./tlh.js":148,"./tr":149,"./tr.js":149,"./tzl":150,"./tzl.js":150,"./tzm":151,"./tzm-latn":152,"./tzm-latn.js":152,"./tzm.js":151,"./ug-cn":153,"./ug-cn.js":153,"./uk":154,"./uk.js":154,"./ur":155,"./ur.js":155,"./uz":156,"./uz-latn":157,"./uz-latn.js":157,"./uz.js":156,"./vi":158,"./vi.js":158,"./x-pseudo":159,"./x-pseudo.js":159,"./yo":160,"./yo.js":160,"./zh-cn":161,"./zh-cn.js":161,"./zh-hk":162,"./zh-hk.js":162,"./zh-tw":163,"./zh-tw.js":163};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=194},201:function(e,t,n){var a=n(26);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(179)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(26,function(){var t=n(26);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},204:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(33),s=n.n(o),i=n(21),c=n(20),l=n(170),d=n(178),u=n(36),p=n(2),f=n.n(p),E=n(7),h=n(11);function m(e,t){return t.find(function(t){if(t.filter===e)return t.selected})}function g(e,t,n){for(var a,r=[],o=0;o<e.length;o++)a=m(e[o].state,t),e[o].name.includes(n)&&a&&r.push(e[o]);return r}function _(e,t,n){return n===h.a&&e.sort(function(e,t){return e.state.toLowerCase()>t.state.toLowerCase()?-1:e.state.toLowerCase()<t.state.toLowerCase()?1:0}),n===h.c&&e.sort(function(e,t){return t.state.toLowerCase()>e.state.toLowerCase()?-1:t.state.toLowerCase()<e.state.toLowerCase()?1:0}),t===h.a?e.sort(function(e,t){return""===n?e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0:e.name.toLowerCase()>t.name.toLowerCase()&&e.state===t.state?1:e.name.toLowerCase()<t.name.toLowerCase()&&e.state===t.state?-1:0}):t===h.c&&e.sort(function(e,t){return""===n?t.name.toLowerCase()>e.name.toLowerCase()?1:t.name.toLowerCase()<e.name.toLowerCase()?-1:0:t.name.toLowerCase()>e.name.toLowerCase()&&e.state===t.state?1:t.name.toLowerCase()<e.name.toLowerCase()&&e.state===t.state?-1:0}),e}var v={paginateData:function(e,t,n){var a=[];if(null===e||!e.length)return[];for(var r=0;r<e.length;r++)Math.ceil((r+1)/n)===t&&a.push(e[r]);return a},filterCompareData:function(e,t,n,a){var r,o=[],s=[];if(null===e||!e.length)return[];for(var i=0;i<e.length;i+=1)if(r=m(e[i].state,t),e[i].comparisons){if(e[i].name===n){a.includes(e[i].name)&&r?o.push({name:e[i].name,state:e[i].state,comparisons:e[i].comparisons}):o.push({name:e[i].name,state:e[i].state,comparisons:[]});break}(s=g(e[i].comparisons,t,n)).length&&(a.includes(e[i].name)?o.push({name:e[i].name,state:e[i].state,comparisons:s}):o.push({name:e[i].name,state:e[i].state,comparisons:[]}))}else e[i].name.includes(n)&&r&&o.push(e[i]);return o},sortData:function(e,t,n){var a,r;return(r=_(e,t,n)).forEach(function(e){void 0!==e.comparisons&&e.comparisons.length>0&&(a=_(e.comparisons,t,n),e.comparisons=a)}),r},downloadCSV:function(e,t){var n=function(e,t){if(null===e||!e.length)return null;var n=e.columnDelimiter||",",a=e.lineDelimiter||"\n",r=t.map(function(e){return e.display_name}),o="Fact,State,"+(r=r.join(n))+a;return e.forEach(function(e){var t=Object.keys(e);t.forEach(function(r,s){s>0&&(o+=n),"systems"===r?(e[r].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=a):"comparisons"===r?e.comparisons.length?(o+=a,e.comparisons.forEach(function(e){(t=Object.keys(e)).forEach(function(t,r){r>0&&(o+=n),"systems"===t?(e[t].forEach(function(e){var t=e.value?e.value.replace(/,/g,""):"";o+=t,o+=n}),o+=a):("name"===t&&(o+="    "),o+=e[t])})})):o+=a:o+=e[r]})}),o}(e,t);if(null!==n){var a="system-comparison-export-";a+=(new Date).toISOString(),a+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var r=encodeURI(n),o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",a),o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}},toggleExpandedRow:function(e,t){return e.includes(t)?e=e.filter(function(e){return e!==t}):e.push(t),e},updateStateFilters:function(e,t){var n=[];return e.forEach(function(e){e.filter===t.filter?n.push(t):n.push(e)}),n}},b={fullCompareData:[],filteredCompareData:[],sortedFilteredFacts:[],systems:[],baselines:[],previousStateSystems:[],stateFilters:[{filter:"SAME",display:"Same",selected:!0},{filter:"DIFFERENT",display:"Different",selected:!0},{filter:"INCOMPLETE_DATA",display:"Incomplete data",selected:!0}],factFilter:"",totalFacts:0,page:1,factSort:h.a,stateSort:h.c,perPage:50,loading:!1,expandedRows:[],error:{}};function D(){var e,t,n,a,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,s=arguments.length>1?arguments[1]:void 0,i={},c=[];switch(s.type){case E.a.CLEAR_STATE:return f()({},b);case E.a.REVERT_COMPARE_DATA:return f()({},o,{loading:!1,error:{},systems:o.previousStateSystems});case"".concat(E.a.FETCH_COMPARE,"_PENDING"):return f()({},o,{previousStateSystems:o.systems,systems:[],baselines:[],loading:!0});case"".concat(E.a.FETCH_COMPARE,"_FULFILLED"):return e=v.filterCompareData(s.payload.facts,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{loading:!1,fullCompareData:s.payload.facts,filteredCompareData:n,sortedFilteredFacts:t,systems:s.payload.systems,baselines:s.payload.baselines,page:1,totalFacts:e.length});case"".concat(E.a.FETCH_COMPARE,"_REJECTED"):return i=""===(r=s.payload.response).data?{detail:r.statusText,status:r.status}:r.data.message?{detail:r.data.message,status:r.status}:{detail:r.data.detail,status:r.status},f()({},o,{error:i});case"".concat(E.a.UPDATE_PAGINATION):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,s.payload.page,s.payload.perPage),f()({},o,{page:s.payload.page,perPage:s.payload.perPage,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.ADD_STATE_FILTER):return c=v.updateStateFilters(o.stateFilters,s.payload),e=v.filterCompareData(o.fullCompareData,c,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{stateFilters:c,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.FILTER_BY_FACT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,s.payload,o.expandedRows),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{factFilter:s.payload,page:1,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.TOGGLE_FACT_SORT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,s.payload,o.stateSort),n=v.paginateData(t,1,o.perPage),f()({},o,{page:1,factSort:s.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.TOGGLE_STATE_SORT):return e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,o.expandedRows),t=v.sortData(e,o.factSort,s.payload),n=v.paginateData(t,1,o.perPage),f()({},o,{page:1,stateSort:s.payload,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});case"".concat(E.a.EXPORT_TO_CSV):return v.downloadCSV(o.sortedFilteredFacts,o.systems),f()({},o);case"".concat(E.a.EXPAND_ROW):return a=v.toggleExpandedRow(o.expandedRows,s.payload),e=v.filterCompareData(o.fullCompareData,o.stateFilters,o.factFilter,a),t=v.sortData(e,o.factSort,o.stateSort),n=v.paginateData(t,o.page,o.perPage),f()({},o,{expandedRows:a,filteredCompareData:n,sortedFilteredFacts:t,totalFacts:e.length});default:return f()({},o)}}var T=n(28),y={addSystemModalOpened:!1,activeTab:0};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(T.a.OPEN_ADD_SYSTEM_MODAL):return f()({},e,{addSystemModalOpened:!e.addSystemModalOpened});case"".concat(T.a.SELECT_ACTIVE_TAB):return f()({},e,{activeTab:t.payload});default:return e}}var A=n(5),S=n(14),w={baselineListLoading:!1,baselineDataLoading:!1,baselineDeleteLoading:!1,fullBaselineListData:[],baselineTableData:[],selectedBaselineIds:[],baselineUUID:"",baselineData:void 0,IdToDelete:""};function j(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0,r=[],o=[];switch(a.type){case"".concat(A.a.FETCH_BASELINE_LIST,"_PENDING"):return f()({},n,{baselineListLoading:!0});case"".concat(A.a.FETCH_BASELINE_LIST,"_FULFILLED"):return r=S.a.buildBaselinesTable(a.payload,n.selectedBaselineIds),f()({},n,{baselineListLoading:!1,fullBaselineListData:a.payload,baselineTableData:r});case"".concat(A.a.SELECT_BASELINE):return o=S.a.setBaselineArray(a.payload,n.fullBaselineListData),f()({},n,{baselineTableData:a.payload,selectedBaselineIds:o});case"".concat(A.a.SET_SELECTED_BASELINES):return f()({},n,{selectedBaselineIds:a.payload});case"".concat(A.a.CLEAR_SELECTED_BASELINES):return f()({},n,{selectedBaselineIds:[]});case"".concat(A.a.FETCH_BASELINE_DATA,"_PENDING"):return f()({},n,{baselineDataLoading:!0});case"".concat(A.a.FETCH_BASELINE_DATA,"_FULFILLED"):return f()({},n,{baselineDataLoading:!1,baselineData:a.payload});case"".concat(A.a.ADD_BASELINE_UUID):return f()({},n,{baselineUUID:a.payload});case"".concat(A.a.CLEAR_BASELINE_DATA):return f()({},n,{baselineUUID:"",baselineData:void 0});case"".concat(A.a.CREATE_BASELINE,"_PENDING"):return f()({},n,{baselineListLoading:!0,baselineDataLoading:!0});case"".concat(A.a.CREATE_BASELINE,"_FULFILLED"):return f()({},n,{baselineListLoading:!1,baselineDataLoading:!1,baselineUUID:a.payload.id,baselineData:a.payload});case"".concat(A.a.PATCH_BASELINE,"_PENDING"):return f()({},n,{baselineDataLoading:!0});case"".concat(A.a.PATCH_BASELINE,"_FULFILLED"):return f()({},n,{baselineDataLoading:!1,baselineData:a.payload});case"".concat(A.a.SET_ID_DELETE):return f()({},n,{IdToDelete:a.payload});case"".concat(A.a.DELETE_BASELINE,"_PENDING"):return f()({},n,{baselineDeleteLoading:!0});case"".concat(A.a.DELETE_BASELINE,"_FULFILLED"):return e=S.a.buildNewTableData(n.fullBaselineListData,n.IdToDelete),t=S.a.buildNewBaselineList(n.fullBaselineListData,n.IdToDelete),f()({},n,{baselineDeleteLoading:!1,baselineTableData:e,fullBaselineListData:t,IdToDelete:""});case"".concat(A.a.DELETE_BASELINE,"_REJECTED"):return f()({},n,{baselineDeleteLoading:!1,IdToDelete:""});default:return n}}var C=n(164),I={errorAlertOpened:!1};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.errorAlertOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(C.a.OPEN_ERROR_ALERT):return!e;default:return e}}var x=n(165),N={filterDropdownOpened:!1};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N.filterDropdownOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(x.a.OPEN_FILTER_DROPDOWN):return!e;default:return e}}var R=n(166),P={kebabOpened:!1};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.kebabOpened;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(R.a.TOGGLE_KEBAB):return!e;default:return e}}var k=n(167),M={creatingNewBaseline:!1};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;switch((arguments.length>1?arguments[1]:void 0).type){case"".concat(k.a.CREATE_NEW_BASELINE):return f()({},e,{creatingNewBaseline:!e.creatingNewBaseline});default:return e}}var U=n(168);var G,z={downloadCSV:function(e){var t,n;if("baseline list"===e.exportType?(t="baseline-list-export-",n=function(e){if(null===e||!e.length)return null;var t=e.columnDelimiter||",",n=e.lineDelimiter||"\n",a="Name,Last Sync,"+n;return e.forEach(function(e){e.forEach(function(e){a+=e,a+=t}),a+=n}),a}(e.exportData)):"baselines data"===e.exportType&&(t="baseline-data-export-",n=function(e,t){if(null===t||!t.length)return null;var n=e.display_name+"\nFact,Value,\n";return t.forEach(function(e){e.cells.length>1?(e.cells.forEach(function(e){n+=e,n+=","}),n+="\n"):t[e.parent].isOpen&&(e.data.modules.forEach(function(e){n+="    ",n+=e,n+=","}),n+="\n")}),n}(e.exportData,e.baselineRowData)),null!==n){t+=(new Date).toISOString(),t+=".csv",n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,"+n);var a=encodeURI(n),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",t),r.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}}};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(U.a.EXPORT_BASELINES_LIST_TO_CSV):return z.downloadCSV(t.payload),f()({},e);default:return f()({},e)}}var Y=n(15),X=n.n(Y),W=n(16),q=n.n(W),J=n(17),K=n.n(J),Q=n(18),Z=n.n(Q),$=n(19),ee=n.n($),te=n(4),ne=n.n(te),ae=n(12),re=n(174),oe=n.n(re),se=n(175),ie=n.n(se),ce=n(23),le=n.n(ce),de=n(34),ue=n.n(de);function pe(e){return function(t){function n(e){var t;return X()(this,n),(t=K()(this,Z()(n).call(this,e))).state={component:null},t}var a;return ee()(n,t),q()(n,[{key:"componentDidMount",value:(a=ue()(le.a.mark(function t(){var n,a;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component)}var fe=pe(function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,558))}),Ee=pe(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,559))}),he=function(e){var t=e.component,n=e.rootClass,a=ie()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main","pf-c-page__main"),o.setAttribute("role","main"),r.a.createElement(ae.d,oe()({},a,{component:t}))};he.propTypes={component:ne.a.func,rootClass:ne.a.string};var me=function(){return r.a.createElement(ae.g,null,window.insights.chrome.isBeta()?r.a.createElement(he,{exact:!0,path:"/baselines",component:Ee}):null,r.a.createElement(he,{exact:!0,path:"/",component:fe}),r.a.createElement(ae.c,{to:"/"}))},ge=(n(201),function(e){function t(){return X()(this,t),K()(this,Z()(t).apply(this,arguments))}return ee()(t,e),q()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("drift"),insights.chrome.on("APP_NAVIGATION",function(t){e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return r.a.createElement(me,{childProps:this.props})}}]),t}(a.Component));ge.propTypes={history:ne.a.object};var _e=Object(ae.k)(Object(c.connect)()(ge));var ve=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1])};s.a.render(r.a.createElement(c.Provider,{store:function(){if(G)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(G=Object(u.getRegistry)({},[Object(d.a)()].concat(t))).register({compareState:D,addSystemModalState:L,baselinesTableState:j,errorAlertOpened:O,filterDropdownOpened:F,kebabOpened:B,baselinesPageState:H,baselinesKebabState:V}),G}().getStore()},r.a.createElement(l.b,null,r.a.createElement(i.BrowserRouter,{basename:ve(window.location.pathname)},r.a.createElement(_e,null)))),document.getElementById("root"))},26:function(e,t,n){(t=e.exports=n(32)(!1)).i(n(202),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.drift .highlight {\n  background-color: #F5F5F5; }\n\n.drift .baseline-cell {\n  background-color: #F0AB00; }\n\n.drift .pointer {\n  cursor: pointer; }\n\n.drift .active-blue {\n  color: #39A5DC; }\n\n.drift .not-active {\n  color: #D2D2D2; }\n\n.drift .not-active:hover {\n  color: #151515; }\n\n.drift .pf-c-card__body {\n  padding-left: 0;\n  padding-right: 0; }\n\n.drift .pf-c-card > :last-child.pf-c-card__body {\n  padding-bottom: 0; }\n\n.drift .pf-c-table.ins-c-table {\n  border: none; }\n\n.drift .fact-state {\n  border-right: 1px solid #CCC;\n  text-align: center;\n  padding-right: 2px; }\n\n.drift td {\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .sticky-column-header .active-sort {\n  border-bottom: 3px solid #39A5DC; }\n\n.drift .fact-header {\n  min-width: 200px;\n  width: 100%; }\n  .drift .fact-header div {\n    margin-top: 125px; }\n\n.drift .state-header {\n  min-width: 60px;\n  font-weight: bold; }\n  .drift .state-header div {\n    margin-top: 125px; }\n\n.drift .drift-toolbar {\n  padding: 20px;\n  padding-top: 0px; }\n\n.drift .export-kebab {\n  padding: 3px; }\n\n.drift .state-filter-dropdown {\n  min-width: 160px; }\n\n.drift .state-filter-checkbox {\n  padding-left: 10px; }\n\n.drift .baseline-header {\n  background: #F0AB00;\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .system-header {\n  background: rgba(57, 165, 220, 0.1);\n  padding: 10px;\n  padding-top: 30px;\n  text-align: center;\n  position: relative;\n  height: 170px; }\n\n.drift .add-system-header {\n  background-color: #F5F5F5;\n  padding: 20px 20px;\n  text-align: center;\n  height: 170px; }\n\n.drift .system-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.drift .system-updated svg {\n  margin-right: 5px; }\n\n.drift .cluster-icon-large {\n  font-size: 2em; }\n\n.drift .drift-table {\n  border-collapse: separate; }\n\n.drift .drift-table-wrapper {\n  overflow: auto;\n  width: 100%;\n  height: 100%; }\n\n.drift .sticky-column {\n  position: sticky;\n  background-color: white;\n  background-clip: padding-box;\n  z-index: 1; }\n\n.drift .fixed-column-1 {\n  left: 0;\n  width: 250px;\n  min-width: 250px;\n  max-width: 250px;\n  word-wrap: break-word; }\n\n.drift .fixed-column-2 {\n  left: 250px;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px; }\n\n.drift .nested-fact {\n  border-left: 3px solid #39A5DC; }\n\n.drift .child-row {\n  margin-left: 2em; }\n\n.drift .drift-table-scroller {\n  overflow-x: scroll;\n  overflow-y: visible;\n  margin-left: 410px; }\n\n.drift .add-system-icon {\n  font-size: 3em;\n  color: grey;\n  margin-bottom: 20px; }\n\n.drift .pf-c-modal-box__body {\n  min-width: 900px;\n  max-width: 1200px;\n  max-height: 600px; }\n\n.drift .remove-system-icon {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.drift .pf-c-alert {\n  margin-bottom: 30px; }\n\n.drift .button-margin {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.drift .display-margin {\n  margin-left: 30px;\n  margin-right: 60%; }\n\n.drift .margin-right {\n  margin-right: 30px; }\n",""])},28:function(e,t,n){"use strict";t.a={OPEN_ADD_SYSTEM_MODAL:"OPEN_ADD_SYSTEM_MODAL",SELECT_ACTIVE_TAB:"SELECT_ACTIVE_TAB"}},5:function(e,t,n){"use strict";t.a={FETCH_BASELINE_LIST:"FETCH_BASELINE_LIST",SELECT_BASELINE:"SELECT_BASELINE",SET_SELECTED_BASELINES:"SET_SELECTED_BASELINES",CLEAR_SELECTED_BASELINES:"CLEAR_SELECTED_BASELINES",FETCH_BASELINE_DATA:"FETCH_BASELINE_DATA",ADD_BASELINE_UUID:"ADD_BASELINE_UUID",CLEAR_BASELINE_DATA:"CLEAR_BASELINE_DATA",CREATE_BASELINE:"CREATE_BASELINE",PATCH_BASELINE:"PATCH_BASELINE",SET_ID_DELETE:"SET_ID_DELETE",DELETE_BASELINE:"DELETE_BASELINE"}},7:function(e,t,n){"use strict";t.a={SELECT_ENTITY:"SELECT_ENTITY",FETCH_COMPARE:"FETCH_COMPARE",SET_SELECTED_SYSTEM_IDS:"SET_SELECTED_SYSTEM_IDS",TOGGLE_FACT_SORT:"TOGGLE_FACT_SORT",ADD_STATE_FILTER:"ADD_STATE_FILTER",TOGGLE_STATE_SORT:"TOGGLE_STATE_SORT",FILTER_BY_FACT:"FILTER_BY_FACT",UPDATE_PAGINATION:"UPDATE_PAGINATION",CLEAR_STATE:"CLEAR_STATE",EXPORT_TO_CSV:"EXPORT_TO_CSV",EXPAND_ROW:"EXPAND_ROW",REVERT_COMPARE_DATA:"REVERT_COMPARE_DATA",TOGGLE_ACTIVE_SORT:"TOGGLE_ACTIVE_SORT"}}});
//# sourceMappingURL=../sourcemaps/App.js.map