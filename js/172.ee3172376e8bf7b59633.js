(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[172],{63172:(e,t,n)=>{var o,r=n(34760),a=n(47529),i=(o=[],{activateTrap:function(e){if(o.length>0){var t=o[o.length-1];t!==e&&t.pause()}var n=o.indexOf(e);-1===n||o.splice(n,1),o.push(e)},deactivateTrap:function(e){var t=o.indexOf(e);-1!==t&&o.splice(t,1),o.length>0&&o[o.length-1].unpause()}});function c(e){return setTimeout(e,0)}e.exports=function(e,t){var n=document,o="string"==typeof e?n.querySelector(e):e,u=a({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),s={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d={activate:function(e){if(!s.active){w(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:u.onActivate;return t&&t(),l(),d}},deactivate:f,pause:function(){!s.paused&&s.active&&(s.paused=!0,v())},unpause:function(){s.paused&&s.active&&(s.paused=!1,l())}};return d;function f(e){if(s.active){v(),s.active=!1,s.paused=!1,i.deactivateTrap(d);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:u.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:u.returnFocusOnDeactivate)&&c((function(){N(s.nodeFocusedBeforeActivation)})),d}}function l(){if(s.active)return i.activateTrap(d),w(),c((function(){N(b())})),n.addEventListener("focusin",m,!0),n.addEventListener("mousedown",h,!0),n.addEventListener("touchstart",h,!0),n.addEventListener("click",E,!0),n.addEventListener("keydown",y,!0),d}function v(){if(s.active)return n.removeEventListener("focusin",m,!0),n.removeEventListener("mousedown",h,!0),n.removeEventListener("touchstart",h,!0),n.removeEventListener("click",E,!0),n.removeEventListener("keydown",y,!0),d}function p(e){var t=u[e],o=t;if(!t)return null;if("string"==typeof t&&!(o=n.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(o=t()))throw new Error("`"+e+"` did not return a node");return o}function b(){var e;if(!(e=null!==p("initialFocus")?p("initialFocus"):o.contains(n.activeElement)?n.activeElement:s.firstTabbableNode||p("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return e}function h(e){o.contains(e.target)||(u.clickOutsideDeactivates?f({returnFocus:!r.isFocusable(e.target)}):e.preventDefault())}function m(e){o.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),N(s.mostRecentlyFocusedNode||b()))}function y(e){if(!1!==u.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void f();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(w(),e.shiftKey&&e.target===s.firstTabbableNode)return e.preventDefault(),void N(s.lastTabbableNode);e.shiftKey||e.target!==s.lastTabbableNode||(e.preventDefault(),N(s.firstTabbableNode))}(e)}function E(e){u.clickOutsideDeactivates||o.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function w(){var e=r(o);s.firstTabbableNode=e[0]||b(),s.lastTabbableNode=e[e.length-1]||b()}function N(e){e!==n.activeElement&&(e&&e.focus?(e.focus(),s.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):N(b()))}}},34760:e=>{var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(e,t){t=t||{};var r,i,c,d=[],l=[],v=new f(e.ownerDocument||e),p=e.querySelectorAll(n);for(t.includeContainer&&o.call(e,n)&&(p=Array.prototype.slice.apply(p)).unshift(e),r=0;r<p.length;r++)a(i=p[r],v)&&(0===(c=u(i))?d.push(i):l.push({documentOrder:r,tabIndex:c,node:i}));return l.sort(s).map((function(e){return e.node})).concat(d)}function a(e,t){return!(!i(e,t)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||u(e)<0)}function i(e,t){return t=t||new f(e.ownerDocument||e),!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||t.isUntouchable(e))}r.isTabbable=function(e,t){if(!e)throw new Error("No node provided");return!1!==o.call(e,n)&&a(e,t)},r.isFocusable=function(e,t){if(!e)throw new Error("No node provided");return!1!==o.call(e,c)&&i(e,t)};var c=t.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function s(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function d(e){return"INPUT"===e.tagName}function f(e){this.doc=e,this.cache=[]}f.prototype.hasDisplayNone=function(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=function(t,n){for(var o=0,r=t.length;o<r;o++)if(t[o]===e)return t[o]}(this.cache);if(n)return n[1];var o=!1;return"none"===(t=t||this.doc.defaultView.getComputedStyle(e)).display?o=!0:e.parentNode&&(o=this.hasDisplayNone(e.parentNode)),this.cache.push([e,o]),o},f.prototype.isUntouchable=function(e){if(e===this.doc.documentElement)return!1;var t=this.doc.defaultView.getComputedStyle(e);return!!this.hasDisplayNone(e,t)||"hidden"===t.visibility},e.exports=r},47529:e=>{e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var o=arguments[n];for(var r in o)t.call(o,r)&&(e[r]=o[r])}return e};var t=Object.prototype.hasOwnProperty}}]);
//# sourceMappingURL=../sourcemaps/172.aa838ac53a9af42aee8c.js.map