(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[886],{5826:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},14779:(n,t,e)=>{var r=e(5826);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(t,e,o):function(n,t,e){return p(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],p=e[1],h=e.index;if(c+=n.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var E=null!=v&&null!=d&&d!==v,b="+"===w||"*"===w,C="?"===w||"*"===w,P=e[2]||l,k=y||g;r.push({name:m||i++,prefix:v||"",delimiter:P,optional:C,repeat:b,partial:E,asterisk:!!x,pattern:k?s(k):x?".*":"[^"+u(P)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function p(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}},50886:(n,t,e)=>{"use strict";e.r(t),e.d(t,{BrowserRouter:()=>wn,HashRouter:()=>xn,Link:()=>An,MemoryRouter:()=>J,NavLink:()=>Tn,Prompt:()=>z,Redirect:()=>nn,Route:()=>on,Router:()=>q,StaticRouter:()=>fn,Switch:()=>pn,generatePath:()=>Y,matchPath:()=>rn,useHistory:()=>vn,useLocation:()=>mn,useParams:()=>yn,useRouteMatch:()=>gn,withRouter:()=>hn});var r=e(14665);function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,(0,r.Z)(n,t)}var i=e(25558),a=e.n(i),c=e(45697),u=e.n(c),s=e(22122);function l(n){return"/"===n.charAt(0)}function f(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}function p(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}const h=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));if("object"==typeof t||"object"==typeof e){var r=p(t),o=p(e);return r!==t||o!==e?n(r,o):Object.keys(Object.assign({},t,e)).every((function(r){return n(t[r],e[r])}))}return!1};const d=function(n,t){if(!n)throw new Error("Invariant failed")};function v(n){return"/"===n.charAt(0)?n:"/"+n}function m(n){return"/"===n.charAt(0)?n.substr(1):n}function y(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function g(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function w(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function x(n,t,e,r){var o;"string"==typeof n?(o=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n)).state=t:(void 0===(o=(0,s.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],o=t&&t.split("/")||[],i=n&&l(n),a=t&&l(t),c=i||a;if(n&&l(n)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var s=0,p=o.length;p>=0;p--){var h=o[p];"."===h?f(o,p):".."===h?(f(o,p),s++):s&&(f(o,p),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&l(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function E(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var b=!("undefined"==typeof window||!window.document||!window.document.createElement);function C(n,t){t(window.confirm(n))}var P="popstate",k="hashchange";function A(){try{return window.history.state||{}}catch(n){return{}}}function R(n){void 0===n&&(n={}),b||d(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=n,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,l=void 0===u?C:u,f=i.keyLength,p=void 0===f?6:f,h=n.basename?g(v(n.basename)):"";function m(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=y(i,h)),x(i,r,e)}function R(){return Math.random().toString(36).substr(2,p)}var O=E();function T(n){(0,s.Z)($,n),$.length=e.length,O.notifyListeners($.location,$.action)}function L(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||M(m(n.state))}function U(){M(m(A()))}var S=!1;function M(n){S?(S=!1,T()):O.confirmTransitionTo(n,"POP",l,(function(t){t?T({action:"POP",location:n}):function(n){var t=$.location,e=_.indexOf(t.key);-1===e&&(e=0);var r=_.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(S=!0,B(o))}(n)}))}var Z=m(A()),_=[Z.key];function j(n){return h+w(n)}function B(n){e.go(n)}var H=0;function N(n){1===(H+=n)&&1===n?(window.addEventListener(P,L),o&&window.addEventListener(k,U)):0===H&&(window.removeEventListener(P,L),o&&window.removeEventListener(k,U))}var I=!1,$={length:e.length,action:"POP",location:Z,createHref:j,push:function(n,t){var o="PUSH",i=x(n,t,R(),$.location);O.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,u=i.state;if(r)if(e.pushState({key:a,state:u},null,t),c)window.location.href=t;else{var s=_.indexOf($.location.key),l=_.slice(0,s+1);l.push(i.key),_=l,T({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=x(n,t,R(),$.location);O.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,u=i.state;if(r)if(e.replaceState({key:a,state:u},null,t),c)window.location.replace(t);else{var s=_.indexOf($.location.key);-1!==s&&(_[s]=i.key),T({action:o,location:i})}else window.location.replace(t)}}))},go:B,goBack:function(){B(-1)},goForward:function(){B(1)},block:function(n){void 0===n&&(n=!1);var t=O.setPrompt(n);return I||(N(1),I=!0),function(){return I&&(I=!1,N(-1)),t()}},listen:function(n){var t=O.appendListener(n);return N(1),function(){N(-1),t()}}};return $}var O="hashchange",T={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+m(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:m,decodePath:v},slash:{encodePath:v,decodePath:v}};function L(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function U(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function S(n){window.location.replace(L(window.location.href)+"#"+n)}function M(n){void 0===n&&(n={}),b||d(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,o=void 0===r?C:r,i=e.hashType,a=void 0===i?"slash":i,c=n.basename?g(v(n.basename)):"",u=T[a],l=u.encodePath,f=u.decodePath;function p(){var n=f(U());return c&&(n=y(n,c)),x(n)}var h=E();function m(n){(0,s.Z)(I,n),I.length=t.length,h.notifyListeners(I.location,I.action)}var P=!1,k=null;function A(){var n,t,e=U(),r=l(e);if(e!==r)S(r);else{var i=p(),a=I.location;if(!P&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(k===w(i))return;k=null,function(n){if(P)P=!1,m();else{h.confirmTransitionTo(n,"POP",o,(function(t){t?m({action:"POP",location:n}):function(n){var t=I.location,e=_.lastIndexOf(w(t));-1===e&&(e=0);var r=_.lastIndexOf(w(n));-1===r&&(r=0);var o=e-r;o&&(P=!0,j(o))}(n)}))}}(i)}}var R=U(),M=l(R);R!==M&&S(M);var Z=p(),_=[w(Z)];function j(n){t.go(n)}var B=0;function H(n){1===(B+=n)&&1===n?window.addEventListener(O,A):0===B&&window.removeEventListener(O,A)}var N=!1,I={length:t.length,action:"POP",location:Z,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=L(window.location.href)),e+"#"+l(c+w(n))},push:function(n,t){var e="PUSH",r=x(n,void 0,void 0,I.location);h.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=l(c+t);if(U()!==o){k=t,function(n){window.location.hash=n}(o);var i=_.lastIndexOf(w(I.location)),a=_.slice(0,i+1);a.push(t),_=a,m({action:e,location:r})}else m()}}))},replace:function(n,t){var e="REPLACE",r=x(n,void 0,void 0,I.location);h.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=l(c+t);U()!==o&&(k=t,S(o));var i=_.indexOf(w(I.location));-1!==i&&(_[i]=t),m({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=h.setPrompt(n);return N||(H(1),N=!0),function(){return N&&(N=!1,H(-1)),t()}},listen:function(n){var t=h.appendListener(n);return H(1),function(){H(-1),t()}}};return I}function Z(n,t,e){return Math.min(Math.max(n,t),e)}function _(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,u=void 0===c?6:c,l=E();function f(n){(0,s.Z)(y,n),y.length=y.entries.length,l.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,u)}var h=Z(a,0,o.length-1),d=o.map((function(n){return x(n,void 0,"string"==typeof n?p():n.key||p())})),v=w;function m(n){var t=Z(y.index+n,0,y.entries.length-1),r=y.entries[t];l.confirmTransitionTo(r,"POP",e,(function(n){n?f({action:"POP",location:r,index:t}):f()}))}var y={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(n,t){var r="PUSH",o=x(n,t,p(),y.location);l.confirmTransitionTo(o,r,e,(function(n){if(n){var t=y.index+1,e=y.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),f({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=x(n,t,p(),y.location);l.confirmTransitionTo(o,r,e,(function(n){n&&(y.entries[y.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(n){var t=y.index+n;return t>=0&&t<y.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return y}var j=1073741823,B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function H(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}const N=a().createContext||function(n,t){var e,r,a,c="__create-react-context-"+((B[a="__global_unique_id__"]=(B[a]||0)+1)+"__"),s=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).emitter=H(t.props.value),t}o(e,n);var r=e.prototype;return r.getChildContext=function(){var n;return(n={})[c]=this.emitter,n},r.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):j,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},r.render=function(){return this.props.children},e}(i.Component);s.childContextTypes=((e={})[c]=u().object.isRequired,e);var l=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}o(e,t);var r=e.prototype;return r.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?j:t},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?j:n},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():n},r.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(i.Component);return l.contextTypes=((r={})[c]=u().object,r),{Provider:s,Consumer:l}};var I=e(14779),$=e.n(I),W=(e(59864),e(19756)),D=e(8679),F=e.n(D),K=function(n){var t=N();return t.displayName="Router-History",t}(),V=function(n){var t=N();return t.displayName="Router",t}(),q=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._isMounted?e.setState({location:n}):e._pendingLocation=n}))),e}o(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return a().createElement(V.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(K.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a().Component),J=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=_(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},t}(a().Component),G=function(n){function t(){return n.apply(this,arguments)||this}o(t,n);var e=t.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(n){this.props.onUpdate&&this.props.onUpdate.call(this,this,n)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},t}(a().Component);function z(n){var t=n.message,e=n.when,r=void 0===e||e;return a().createElement(V.Consumer,null,(function(n){if(n||d(!1),!r||n.staticContext)return null;var e=n.history.block;return a().createElement(G,{onMount:function(n){n.release=e(t)},onUpdate:function(n,r){r.message!==t&&(n.release(),n.release=e(t))},onUnmount:function(n){n.release()},message:t})}))}var Q={},X=0;function Y(n,t){return void 0===n&&(n="/"),void 0===t&&(t={}),"/"===n?n:function(n){if(Q[n])return Q[n];var t=$().compile(n);return X<1e4&&(Q[n]=t,X++),t}(n)(t,{pretty:!0})}function nn(n){var t=n.computedMatch,e=n.to,r=n.push,o=void 0!==r&&r;return a().createElement(V.Consumer,null,(function(n){n||d(!1);var r=n.history,i=n.staticContext,c=o?r.push:r.replace,u=x(t?"string"==typeof e?Y(e,t.params):(0,s.Z)({},e,{pathname:Y(e.pathname,t.params)}):e);return i?(c(u),null):a().createElement(G,{onMount:function(){c(u)},onUpdate:function(n,t){var e,r,o=x(t.to);e=o,r=(0,s.Z)({},u,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&h(e.state,r.state)||c(u)},to:e})}))}var tn={},en=0;function rn(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=tn[e]||(tn[e]={});if(r[n])return r[n];var o=[],i={regexp:$()(n,o,t),keys:o};return en<1e4&&(r[n]=i,en++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var l=u[0],f=u.slice(1),p=n===l;return i&&!p?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:p,params:a.reduce((function(n,t,e){return n[t.name]=f[e],n}),{})}}),null)}var on=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(V.Consumer,null,(function(t){t||d(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?rn(e.pathname,n.props):t.match,o=(0,s.Z)({},t,{location:e,match:r}),i=n.props,c=i.children,u=i.component,l=i.render;return Array.isArray(c)&&0===c.length&&(c=null),a().createElement(V.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?a().createElement(u,o):l?l(o):null:"function"==typeof c?c(o):null)}))},t}(a().Component);function an(n){return"/"===n.charAt(0)?n:"/"+n}function cn(n,t){if(!n)return t;var e=an(n);return 0!==t.pathname.indexOf(e)?t:(0,s.Z)({},t,{pathname:t.pathname.substr(e.length)})}function un(n){return"string"==typeof n?n:w(n)}function sn(n){return function(){d(!1)}}function ln(){}var fn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).handlePush=function(n){return t.navigateTo(n,"PUSH")},t.handleReplace=function(n){return t.navigateTo(n,"REPLACE")},t.handleListen=function(){return ln},t.handleBlock=function(){return ln},t}o(t,n);var e=t.prototype;return e.navigateTo=function(n,t){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=t,a.location=function(n,t){return n?(0,s.Z)({},t,{pathname:an(n)+t.pathname}):t}(o,x(n)),a.url=un(a.location)},e.render=function(){var n=this.props,t=n.basename,e=void 0===t?"":t,r=n.context,o=void 0===r?{}:r,i=n.location,c=void 0===i?"/":i,u=(0,W.Z)(n,["basename","context","location"]),l={createHref:function(n){return an(e+un(n))},action:"POP",location:cn(e,x(c)),push:this.handlePush,replace:this.handleReplace,go:sn(),goBack:sn(),goForward:sn(),listen:this.handleListen,block:this.handleBlock};return a().createElement(q,(0,s.Z)({},u,{history:l,staticContext:o}))},t}(a().Component),pn=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(V.Consumer,null,(function(t){t||d(!1);var e,r,o=n.props.location||t.location;return a().Children.forEach(n.props.children,(function(n){if(null==r&&a().isValidElement(n)){e=n;var i=n.props.path||n.props.from;r=i?rn(o.pathname,(0,s.Z)({},n.props,{path:i})):t.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},t}(a().Component);function hn(n){var t="withRouter("+(n.displayName||n.name)+")",e=function(t){var e=t.wrappedComponentRef,r=(0,W.Z)(t,["wrappedComponentRef"]);return a().createElement(V.Consumer,null,(function(t){return t||d(!1),a().createElement(n,(0,s.Z)({},r,t,{ref:e}))}))};return e.displayName=t,e.WrappedComponent=n,F()(e,n)}var dn=a().useContext;function vn(){return dn(K)}function mn(){return dn(V).location}function yn(){var n=dn(V).match;return n?n.params:{}}function gn(n){var t=mn(),e=dn(V).match;return n?rn(t.pathname,n):e}var wn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=R(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},t}(a().Component),xn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=M(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},t}(a().Component),En=function(n,t){return"function"==typeof n?n(t):n},bn=function(n,t){return"string"==typeof n?x(n,null,null,t):n},Cn=function(n){return n},Pn=a().forwardRef;void 0===Pn&&(Pn=Cn);var kn=Pn((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,i=(0,W.Z)(n,["innerRef","navigate","onClick"]),c=i.target,u=(0,s.Z)({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||c&&"_self"!==c||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return u.ref=Cn!==Pn&&t||e,a().createElement("a",u)})),An=Pn((function(n,t){var e=n.component,r=void 0===e?kn:e,o=n.replace,i=n.to,c=n.innerRef,u=(0,W.Z)(n,["component","replace","to","innerRef"]);return a().createElement(V.Consumer,null,(function(n){n||d(!1);var e=n.history,l=bn(En(i,n.location),n.location),f=l?e.createHref(l):"",p=(0,s.Z)({},u,{href:f,navigate:function(){var t=En(i,n.location);(o?e.replace:e.push)(t)}});return Cn!==Pn?p.ref=t||c:p.innerRef=c,a().createElement(r,p)}))})),Rn=function(n){return n},On=a().forwardRef;void 0===On&&(On=Rn);var Tn=On((function(n,t){var e=n["aria-current"],r=void 0===e?"page":e,o=n.activeClassName,i=void 0===o?"active":o,c=n.activeStyle,u=n.className,l=n.exact,f=n.isActive,p=n.location,h=n.sensitive,v=n.strict,m=n.style,y=n.to,g=n.innerRef,w=(0,W.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(V.Consumer,null,(function(n){n||d(!1);var e=p||n.location,o=bn(En(y,e),e),x=o.pathname,E=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),b=E?rn(e.pathname,{path:E,exact:l,sensitive:h,strict:v}):null,C=!!(f?f(b,e):b),P=C?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(u,i):u,k=C?(0,s.Z)({},m,{},c):m,A=(0,s.Z)({"aria-current":C&&r||null,className:P,style:k,to:o},w);return Rn!==On?A.ref=t||g:A.innerRef=g,a().createElement(An,A)}))}))}}]);
//# sourceMappingURL=../sourcemaps/886.6acf51f582c1d022232d.js.map