(self.webpackChunkdrift_frontend=self.webpackChunkdrift_frontend||[]).push([[1355],{60817:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=void 0;var r=n(37282),o=i(n(72837)),a=n(53446);t.NotificationPortal=(0,r.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,a.removeNotification)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,a.clearNotifications)())}}}))(o.default);var c=n(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return i(c).default}}),t.default=t.NotificationPortal},72871:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}}),r(n(60817),t)},72837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var i=n(92950),r=n.n(i),o=n(12181),a=n(14938),c=n(52017),l=function(){return l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};const u=function(e){var t=e.description,n=e.dismissable,o=void 0===n||n,u=e.onDismiss,s=e.dismissDelay,f=void 0===s?8e3:s,d=e.title,p=e.sentryId,I=e.requestId,O=e.autoDismiss,N=void 0===O||O,y=e.id,m=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),v=(0,i.useRef)(),T=function(){u(y)},A=function(){N&&(v.current=setTimeout((function(){return T()}),f))},_=function(){v.current&&clearTimeout(v.current)};return(0,i.useEffect)((function(){return A(),function(){_()}}),[]),r().createElement(a.Alert,l({className:"notification-item",id:"".concat(y),title:"string"==typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d},m,{actionClose:o?r().createElement(a.AlertActionCloseButton,{"aria-label":"close-notification",variant:"plain",onClick:T},r().createElement(c.CloseIcon,null)):null,onMouseEnter:_,onMouseLeave:A}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,p&&r().createElement(a.TextContent,null,r().createElement(a.Text,{component:a.TextVariants.small},"Tracking Id: ",p)),I&&r().createElement(a.TextContent,null,r().createElement(a.Text,{component:a.TextVariants.small},"Request Id: ",I)))},s=function(e){var t=e.page,n=void 0===t?1:t,i=e.onSetPage,o=e.onClearAll,c=e.count,l=void 0===c?0:c;return r().createElement(a.Card,{className:"notification-item"},r().createElement(a.CardBody,null,r().createElement(a.Level,null,r().createElement(a.LevelItem,null,r().createElement(a.Button,{variant:a.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:o},"Clear all")),r().createElement(a.LevelItem,null,r().createElement(a.Pagination,{itemCount:l,variant:a.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:n,onSetPage:i})))))};var f=function(){return f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)};const d=function(e){var t=e.notifications,n=void 0===t?[]:t,a=e.removeNotification,c=void 0===a?function(){}:a,l=e.rootId,d=e.onClearAll,p=(0,i.useState)({page:1}),I=p[0],O=p[1],N=I.page,y=n&&n.length<=5?n:n&&n.slice(5*(N-1),5*N);return 0===n.length?null:(0,o.createPortal)(r().createElement("div",{className:"notifications-portal"},n.length>5&&r().createElement(s,{onSetPage:function(e,t){O((function(e){return f(f({},e),{page:t})}))},count:n.length,page:N,onClearAll:d}),y.map((function(e){return r().createElement(u,f({onDismiss:c,key:"".concat(e.id)},e))}))),l&&document.getElementById(l)||document.body)}},51712:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createNotificationsMiddleware:()=>p,default:()=>I,notificationsMiddleware:()=>I});var i=n(27361),r=n.n(i),o=n(18721),a=n.n(o),c="@@INSIGHTS-CORE/NOTIFICATIONS/",l="".concat(c,"ADD_NOTIFICATION");"".concat(c,"REMOVE_NOTIFICATION"),"".concat(c,"CLEAR_NOTIFICATIONS");var u=function(e){return{type:l,payload:e}},s=n(14938),f=function(){return f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)},d=function(e,t,n){if("string"==typeof e)return{title:"Error",description:e};var i=t;Array.isArray(t)&&(i=t.find((function(t){return a()(e,t)})));var o=n;return Array.isArray(n)&&(o=n.find((function(t){return a()(e,t)}))),{title:r()(e,i)||"Error",description:r()(e,o),sentryId:null==e?void 0:e.sentryId,requestId:null==e?void 0:e.requestId}},p=function(e){var t=f(f({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),e),n=function(e){return Boolean(e.match(new RegExp("^.*".concat(t.rejectedSuffix,"$"))))},i={dismissable:!t.autoDismiss,dismissDelay:t.dismissDelay};return function(e){var o=e.dispatch;return function(e){return function(c){var l=c.meta,p=c.type;if(l&&l.notifications){var I=l.notifications;(function(e){return Boolean(e.match(new RegExp("^.*".concat(t.pendingSuffix,"$"))))})(p)&&I.pending?("function"==typeof I.pending&&(I.pending=I.pending(c.payload)),o(u(f(f({},i),I.pending)))):function(e){return Boolean(e.match(new RegExp("^.*".concat(t.fulfilledSuffix,"$"))))}(p)&&I.fulfilled?("function"==typeof I.fulfilled&&(I.fulfilled=I.fulfilled(c.payload)),o(u(f(f({},i),I.fulfilled)))):n(p)&&I.rejected&&("function"==typeof I.rejected&&(I.rejected=I.rejected(c.payload)),o(u(f(f(f({},i),I.rejected),{sentryId:c.payload&&c.payload.sentryId,requestId:c.payload&&c.payload.requestId}))))}if(function(e){return e.isRejected&&!e.hasCustomNotification&&!e.noErrorOverride&&e.dispatchDefaultFailure}({isRejected:n(p),hasCustomNotification:l&&l.notifications&&l.notifications.rejected,noErrorOverride:l&&l.noError,dispatchDefaultFailure:t.dispatchDefaultFailure}))if(t.useStatusText)o(u(f({variant:s.AlertVariant.danger,dismissable:!0},d(c.payload,t.errorTitleKey,"statusText"))));else{var O=Array.isArray(t.errorNamespaceKey)&&t.errorNamespaceKey.find((function(e){return a()(c.payload,e)}));O?r()(c.payload,O).map((function(e){o(u(f({variant:s.AlertVariant.danger,dismissable:!0},d(e,t.errorTitleKey,t.errorDescriptionKey))))})):Array.isArray(c.payload)?c.payload.map((function(e){o(u(f({variant:s.AlertVariant.danger,dismissable:!0},d(e,t.errorTitleKey,t.errorDescriptionKey))))})):o(u(f({variant:s.AlertVariant.danger,dismissable:!0},d(c.payload,t.errorTitleKey,t.errorDescriptionKey))))}e(c)}}}};const I=p},71355:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var r=n(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return i(r).default}});var o=n(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return i(o).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var a=n(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return a.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return a.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return a.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var l=n(51712);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return i(l).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var i=n(68129);t.addNotification=function(e){return{type:i.ADD_NOTIFICATION,payload:e}},t.removeNotification=function(e){return{type:i.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:i.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=n(68129);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case o.ADD_NOTIFICATION:return a=e,c=n.payload,r(r([],a,!0),[i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},c)],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,i=e.findIndex((function(e){return e.id===n}));return r(r([],e.slice(0,i),!0),e.slice(i+1),!0)}(e,n);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var a,c},t.notifications=t.notificationsReducers,t.default=t.notifications},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},18721:(e,t,n)=>{var i=n(78565),r=n(222);e.exports=function(e,t){return null!=e&&r(e,t,i)}}}]);
//# sourceMappingURL=../sourcemaps/1355.e23e993c88f4ec69aee67f31f24a4858.js.map