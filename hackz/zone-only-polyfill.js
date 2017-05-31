performance.measure('ionic:download-init', 'ionic:download-init-start')
performance.mark('ionic:polyfills-start');


!function(e){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,n){!function(e,t){t()}(0,function(){function e(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function n(t,n){for(var r=t.constructor.name,o=0;o<n.length;o++)!function(o){var a=n[o],i=t[a];i&&(t[a]=function(t){var n=function(){return t.apply(this,e(arguments,r+"."+a))};return d(n,t),n}(i))}(o)}function r(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(!r&&n){Object.getOwnPropertyDescriptor(n,t)&&(r={enumerable:!0,configurable:!0})}if(r&&r.configurable){delete r.writable,delete r.value;var o=r.get,a=t.substr(2),i=z("_"+t);r.set=function(t){var n=this;if(n||e!==S||(n=S),n){var r=n[i];if(r&&n.removeEventListener(a,r),"function"==typeof t){var o=function(e){var n=t.apply(this,arguments);return void 0==n||n||e.preventDefault(),n};n[i]=o,n.addEventListener(a,o,!1)}else n[i]=null}},r.get=function(){var n=this;if(n||e!==S||(n=S),!n)return null;if(n.hasOwnProperty(i))return n[i];if(o){var a=o&&o.apply(this);if(a)return r.set.apply(this,[a]),"function"==typeof n.removeAttribute&&n.removeAttribute(t),a}return null},Object.defineProperty(e,t,r)}}function o(e,t,n){if(t)for(var o=0;o<t.length;o++)r(e,"on"+t[o],n);else{var a=[];for(var i in e)"on"==i.substr(0,2)&&a.push(i);for(var s=0;s<a.length;s++)r(e,a[s],n)}}function a(e,t){return!!("boolean"==typeof e?e:"object"==typeof e&&(e&&e.capture))==!!("boolean"==typeof t?t:"object"==typeof t&&t&&t.capture)}function i(e,t,n,r,o){var i=e[M];if(i)for(var s=0;s<i.length;s++){var c=i[s],u=c.data,l=u.handler;if((u.handler===t||l.listener===t)&&a(u.options,r)&&u.eventName===n)return o&&i.splice(s,1),c}return null}function s(e,t,n){var r=e[M];r||(r=e[M]=[]),n?r.unshift(t):r.push(t)}function c(e,t,n,r,o,a){function c(e){var t=e.data;return s(t.target,e,o),t.invokeAddFunc(l,e)}function u(e){var t=e.data;return i(t.target,e.invoke,t.eventName,t.options,!0),t.invokeRemoveFunc(p,e)}void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===a&&(a=F);var l=z(e),p=z(t),h=!n&&void 0;return function(t,n){var o=a(t,n);o.options=o.options||h;var s=null;"function"==typeof o.handler?s=o.handler:o.handler&&o.handler.handleEvent&&(s=function(e){return o.handler.handleEvent(e)});var p=!1;try{p=o.handler&&"[object FunctionWrapper]"===o.handler.toString()}catch(e){return o.crossContext=!0,o.invokeAddFunc(l,o.handler)}if(!s||p)return o.invokeAddFunc(l,o.handler);if(!r){var f=i(o.target,o.handler,o.eventName,o.options,!1);if(f)return o.invokeAddFunc(l,f)}var d=Zone.current,v=o.target.constructor.name+"."+e+":"+o.eventName;d.scheduleEventTask(v,s,o,c,u)}}function u(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=F);var r=z(e),o=!t&&void 0;return function(e,t){var a=n(e,t);a.options=a.options||o;var s=null;"function"==typeof a.handler?s=a.handler:a.handler&&a.handler.handleEvent&&(s=function(e){return a.handler.handleEvent(e)});var c=!1;try{c=a.handler&&"[object FunctionWrapper]"===a.handler.toString()}catch(e){return a.crossContext=!0,a.invokeRemoveFunc(r,a.handler)}if(!s||c)return a.invokeRemoveFunc(r,a.handler);var u=i(a.target,a.handler,a.eventName,a.options,!0);u?u.zone.cancelTask(u):a.invokeRemoveFunc(r,a.handler)}}function l(e,t,n,r){return void 0===t&&(t=I),void 0===n&&(n=L),void 0===r&&(r=F),!(!e||!e[t])&&(h(e,t,function(){return c(t,n,!0,!1,!1,r)}),h(e,n,function(){return u(n,!0,r)}),!0)}function p(t){var n=S[t];if(n){S[z(t)]=n,S[t]=function(){var r=e(arguments,t);switch(r.length){case 0:this[H]=new n;break;case 1:this[H]=new n(r[0]);break;case 2:this[H]=new n(r[0],r[1]);break;case 3:this[H]=new n(r[0],r[1],r[2]);break;case 4:this[H]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},d(S[t],n);var r,o=new n(function(){});for(r in o)"XMLHttpRequest"===t&&"responseBlob"===r||function(e){"function"==typeof o[e]?S[t].prototype[e]=function(){return this[H][e].apply(this[H],arguments)}:Object.defineProperty(S[t].prototype,e,{set:function(n){"function"==typeof n?(this[H][e]=Zone.current.wrap(n,t+"."+e),d(this[H][e],n)):this[H][e]=n},get:function(){return this[H][e]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(S[t][r]=n[r])}}function h(e,t,n){for(var r=e;r&&!r.hasOwnProperty(t);)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,a=z(t);if(r&&!(o=r[a])){o=r[a]=r[t];var i=n(o,a,t);r[t]=function(){return i(this,arguments)},d(r[t],o)}return o}function f(e,t){var n=e[z("eventTasks")],r=[];if(n)for(var o=0;o<n.length;o++){var a=n[o],i=a.data,s=i&&i.eventName;s===t&&r.push(a)}return r}function d(e,t){e[z("OriginalDelegate")]=t}function v(e,t,n,r){function o(t){function n(){try{t.invoke.apply(this,arguments)}finally{"number"==typeof r.handleId&&delete c[r.handleId]}}var r=t.data;return r.args[0]=n,r.handleId=i.apply(e,r.args),"number"==typeof r.handleId&&(c[r.handleId]=t),t}function a(e){return"number"==typeof e.data.handleId&&delete c[e.data.handleId],s(e.data.handleId)}var i=null,s=null;t+=r,n+=r;var c={};i=h(e,t,function(n){return function(i,s){if("function"==typeof s[0]){var c=Zone.current,u={handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?s[1]||0:null,args:s},l=c.scheduleMacroTask(t,s[0],u,o,a);if(!l)return l;var p=l.data.handleId;return p&&p.ref&&p.unref&&"function"==typeof p.ref&&"function"==typeof p.unref&&(l.ref=p.ref.bind(p),l.unref=p.unref.bind(p)),l}return n.apply(e,s)}}),s=h(e,n,function(t){return function(n,r){var o="number"==typeof r[0]?c[r[0]]:r[0];o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}function g(){Object.defineProperty=function(e,t,n){if(k(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=m(e,t,n)),_(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=m(e,n,t[n])}),q(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=x(e,t);return k(e,t)&&(n.configurable=!1),n}}function y(e,t,n){var r=n.configurable;return n=m(e,t,n),_(e,t,n,r)}function k(e,t){return e&&e[A]&&e[A][t]}function m(e,t,n){return n.configurable=!0,n.configurable||(e[A]||R(e,A,{writable:!0,value:{}}),e[A][t]=!0),n}function _(e,t,n,r){try{return R(e,t,n)}catch(a){if(!n.configurable)throw a;void 0===r?delete n.configurable:n.configurable=r;try{return R(e,t,n)}catch(r){var o=null;try{o=JSON.stringify(n)}catch(e){o=o.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+o+"' on object '"+e+"' and got error, giving up: "+r)}}}function b(e){var t=[];e.wtf?t=B.split(",").map(function(e){return"HTML"+e+"Element"}).concat(X):e[N]?t.push(N):t=X;for(var n=0;n<t.length;n++){var r=e[t[n]];l(r&&r.prototype)}}function T(e){var t=e.WebSocket;e.EventTarget||l(t.prototype),e.WebSocket=function(e,n){var r,a=arguments.length>1?new t(e,n):new t(e),i=Object.getOwnPropertyDescriptor(a,"onmessage");return i&&!1===i.configurable?(r=Object.create(a),["addEventListener","removeEventListener","send","close"].forEach(function(e){r[e]=function(){return a[e].apply(a,arguments)}})):r=a,o(r,["close","error","message","open"]),r};for(var n in t)e.WebSocket[n]=t[n]}function w(e){if(!P||C){var t="undefined"!=typeof WebSocket;if(E()){if(j){o(window,ie,Object.getPrototypeOf(window)),o(Document.prototype,ie),void 0!==window.SVGElement&&o(window.SVGElement.prototype,ie),o(Element.prototype,ie),o(HTMLElement.prototype,ie),o(HTMLMediaElement.prototype,K),o(HTMLFrameSetElement.prototype,G.concat(te)),o(HTMLBodyElement.prototype,G.concat(te)),o(HTMLFrameElement.prototype,ee),o(HTMLIFrameElement.prototype,ee);var n=window.HTMLMarqueeElement;n&&o(n.prototype,ne)}o(XMLHttpRequest.prototype,re);var r=e.XMLHttpRequestEventTarget;r&&o(r&&r.prototype,re),"undefined"!=typeof IDBIndex&&(o(IDBIndex.prototype,oe),o(IDBRequest.prototype,oe),o(IDBOpenDBRequest.prototype,oe),o(IDBDatabase.prototype,oe),o(IDBTransaction.prototype,oe),o(IDBCursor.prototype,oe)),t&&o(WebSocket.prototype,ae)}else D(),p("XMLHttpRequest"),t&&T(e)}}function E(){if((j||C)&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}var t=Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"onreadystatechange");if(t){Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}});var n=new XMLHttpRequest,r=!!n.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",t||{}),r}Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return this[z("fakeonreadystatechange")]},set:function(e){this[z("fakeonreadystatechange")]=e}});var n=new XMLHttpRequest,o=function(){};n.onreadystatechange=o;var r=n[z("fakeonreadystatechange")]===o;return n.onreadystatechange=null,r}function D(){for(var e=0;e<ie.length;e++)!function(e){var t=ie[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][se]&&(t=Zone.current.wrap(o[n],r),t[se]=o[n],o[n]=t),o=o.parentElement},!0)}(e)}function Z(e){if((j||C)&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,r){return r&&r.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(r.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(r.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),y(r.prototype,e,n)):r.prototype[e]=Zone.current.wrap(r.prototype[e],t)}else r.prototype[e]&&(r.prototype[e]=Zone.current.wrap(r.prototype[e],t))}),t.apply(document,[e,r])},d(document.registerElement,t)}}!function(e){function t(e){s&&s.mark&&s.mark(e)}function n(e,t){s&&s.measure&&s.measure(e,t)}function r(t){0===j&&0===v.length&&(e[f]?e[f].resolve(0)[d](o):e[h](o,0)),t&&v.push(t)}function o(){if(!g){for(g=!0;v.length;){var e=v;v=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(e){S.onUnhandledError(e)}}}c[i("ignoreConsoleErrorUncaughtError")];S.microtaskDrainDone(),g=!1}}function a(){}function i(e){return"__zone_symbol__"+e}var s=e.performance;if(t("Zone"),e.Zone)throw new Error("Zone already loaded.");var c=function(){function r(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,t)}return r.assertZonePatched=function(){if(e.Promise!==z.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(r,"root",{get:function(){for(var e=r.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(r,"current",{get:function(){return O.zone},enumerable:!0,configurable:!0}),Object.defineProperty(r,"currentTask",{get:function(){return P},enumerable:!0,configurable:!0}),r.__load_patch=function(o,a){if(z.hasOwnProperty(o))throw Error("Already loaded patch: "+o);if(!e["__Zone_disable_"+o]){var i="Zone:"+o;t(i),z[o]=a(e,r,S),n(i,i)}},Object.defineProperty(r.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),r.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},r.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},r.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},r.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},r.prototype.run=function(e,t,n,r){void 0===t&&(t=void 0),void 0===n&&(n=null),void 0===r&&(r=null),O={parent:O,zone:this};try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{O=O.parent}},r.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),O={parent:O,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{O=O.parent}},r.prototype.runTask=function(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||y).name+"; Execution: "+this.name+")");if(e.state!==k||e.type!==Z){var r=e.state!=b;r&&e._transitionTo(b,_),e.runCount++;var o=P;P=e,O={parent:O,zone:this};try{e.type==D&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{e.state!==k&&e.state!==w&&(e.type==Z||e.data&&e.data.isPeriodic?r&&e._transitionTo(_,b):(e.runCount=0,this._updateTaskCount(e,-1),r&&e._transitionTo(k,b,k))),O=O.parent,P=o}}},r.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(m,k);var n=[];e._zoneDelegates=n,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(t){throw e._transitionTo(w,m,k),this._zoneDelegate.handleError(this,t),t}return e._zoneDelegates===n&&this._updateTaskCount(e,1),e.state==m&&e._transitionTo(_,m),e},r.prototype.scheduleMicroTask=function(e,t,n,r){return this.scheduleTask(new p(E,e,t,n,r,null))},r.prototype.scheduleMacroTask=function(e,t,n,r,o){return this.scheduleTask(new p(D,e,t,n,r,o))},r.prototype.scheduleEventTask=function(e,t,n,r,o){return this.scheduleTask(new p(Z,e,t,n,r,o))},r.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||y).name+"; Execution: "+this.name+")");e._transitionTo(T,_,b);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(w,T),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(k,T),e.runCount=0,e},r.prototype._updateTaskCount=function(e,t){var n=e._zoneDelegates;-1==t&&(e._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(e.type,t)},r}();c.__symbol__=i;var u={name:"",onHasTask:function(e,t,n,r){return e.hasTask(n,r)},onScheduleTask:function(e,t,n,r){return e.scheduleTask(n,r)},onInvokeTask:function(e,t,n,r,o,a){return e.invokeTask(n,r,o,a)},onCancelTask:function(e,t,n,r){return e.cancelTask(n,r)}},l=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask,o=t&&t._hasTaskZS;(r||o)&&(this._hasTaskZS=r?n:u,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=u,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=u,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=u,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new c(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),(n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t))||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=E)throw new Error("Task is missing scheduleFn.");r(t)}return n},e.prototype.invokeTask=function(e,t,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n},e.prototype.hasTask=function(e,t){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(t){this.handleError(e,t)}},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};this.hasTask(this.zone,a)}},e}(),p=function(){function e(e,t,n,r,a,i){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=e,this.source=t,this.data=r,this.scheduleFn=a,this.cancelFn=i,this.callback=n;var s=this;this.invoke=function(){j++;try{return s.runCount++,s.zone.runTask(s,this,arguments)}finally{1==j&&o(),j--}}}return Object.defineProperty(e.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),e.prototype.cancelScheduleRequest=function(){this._transitionTo(k,m)},e.prototype._transitionTo=function(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=e,e==k&&(this._zoneDelegates=null)},e.prototype.toString=function(){return this.data&&void 0!==this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,invoke:this.invoke,scheduleFn:this.scheduleFn,cancelFn:this.cancelFn,runCount:this.runCount,callback:this.callback}},e}(),h=i("setTimeout"),f=i("Promise"),d=i("then"),v=[],g=!1,y={name:"NO ZONE"},k="notScheduled",m="scheduling",_="scheduled",b="running",T="canceling",w="unknown",E="microTask",D="macroTask",Z="eventTask",z={},S={symbol:i,currentZoneFrame:function(){return O},onUnhandledError:a,microtaskDrainDone:a,scheduleMicroTask:r,showUncaughtError:function(){return!c[i("ignoreConsoleErrorUncaughtError")]},patchEventTargetMethods:function(){return!1},patchOnProperties:a},O={parent:null,zone:new c(null,null)},P=null,j=0;n("Zone","Zone"),e.Zone=c}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||t);Zone.__load_patch("ZoneAwarePromise",function(e,t,n){function r(e){n.onUnhandledError(e);try{var r=t[h("unhandledPromiseRejectionHandler")];r&&"function"==typeof r&&r.apply(this,[e])}catch(e){}}function o(e){return e&&e.then}function a(e){return e}function i(e){return E.reject(e)}function s(e,t){return function(n){try{c(e,t,n)}catch(t){c(e,!1,t)}}}function c(e,r,o){var a=w();if(e===o)throw new TypeError("Promise resolved with itself");if(e[g]===m){var i=null;try{"object"!=typeof o&&"function"!=typeof o||(i=o&&o.then)}catch(t){return a(function(){c(e,!1,t)})(),e}if(r!==b&&o instanceof E&&o.hasOwnProperty(g)&&o.hasOwnProperty(y)&&o[g]!==m)u(o),c(e,o[g],o[y]);else if(r!==b&&"function"==typeof i)try{i.apply(o,[a(s(e,r)),a(s(e,!1))])}catch(t){a(function(){c(e,!1,t)})()}else{e[g]=r;var p=e[y];e[y]=o,r===b&&o instanceof Error&&(o[h("currentTask")]=t.currentTask);for(var d=0;d<p.length;)l(e,p[d++],p[d++],p[d++],p[d++]);if(0==p.length&&r==b){e[g]=T;try{throw new Error("Uncaught (in promise): "+o+(o&&o.stack?"\n"+o.stack:""))}catch(r){var v=r;v.rejection=o,v.promise=e,v.zone=t.current,v.task=t.currentTask,f.push(v),n.scheduleMicroTask()}}}}return e}function u(e){if(e[g]===T){try{var n=t[h("rejectionHandledHandler")];n&&"function"==typeof n&&n.apply(this,[{rejection:e[y],promise:e}])}catch(e){}e[g]=b;for(var r=0;r<f.length;r++)e===f[r].promise&&f.splice(r,1)}}function l(e,t,n,r,o){u(e);var s=e[g]?"function"==typeof r?r:a:"function"==typeof o?o:i;t.scheduleMicroTask(k,function(){try{c(n,!0,t.run(s,void 0,[e[y]]))}catch(e){c(n,!1,e)}})}function p(e){var t=e.prototype,n=t.then;t[v]=n,e.prototype.then=function(e,t){var r=this;return new E(function(e,t){n.call(r,e,t)}).then(e,t)},e[Z]=!0}var h=n.symbol,f=[],d=h("Promise"),v=h("then");n.onUnhandledError=function(e){if(n.showUncaughtError()){var t=e&&e.rejection;t&&console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0),console.error(e)}},n.microtaskDrainDone=function(){for(;f.length;)for(;f.length;)!function(){var e=f.shift();try{e.zone.runGuarded(function(){throw e})}catch(e){r(e)}}()};var g=h("state"),y=h("value"),k="Promise.then",m=null,_=!0,b=!1,T=0,w=function(){var e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},E=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[g]=m,n[y]=[];try{t&&t(s(n,_),s(n,b))}catch(e){c(n,!1,e)}}return e.toString=function(){return"function ZoneAwarePromise() { [native code] }"},e.resolve=function(e){return c(new this(null),_,e)},e.reject=function(e){return c(new this(null),b,e)},e.race=function(e){function t(e){i&&(i=r(e))}function n(e){i&&(i=a(e))}for(var r,a,i=new this(function(e,t){n=[e,t],r=n[0],a=n[1];var n}),s=0,c=e;s<c.length;s++){var u=c[s];o(u)||(u=this.resolve(u)),u.then(t,n)}return i},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),a=0,i=[],s=0,c=e;s<c.length;s++){var u=c[s];o(u)||(u=this.resolve(u)),u.then(function(e){return function(n){i[e]=n,--a||t(i)}}(a),n),a++}return a||t(i),r},e.prototype.then=function(e,n){var r=new this.constructor(null),o=t.current;return this[g]==m?this[y].push(o,r,e,n):l(this,o,r,e,n),r},e.prototype.catch=function(e){return this.then(null,e)},e}();E.resolve=E.resolve,E.reject=E.reject,E.race=E.race,E.all=E.all;var D=e[d]=e.Promise;e.Promise=E;var Z=h("thenPatched");if(D){p(D);var z=e.fetch;"function"==typeof z&&(e.fetch=function(e){return function(){var t=e.apply(this,arguments);if(t instanceof E)return t;var n=t.constructor;return n[Z]||p(n),t}}(z))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=f,E});var z=function(e){return"__zone_symbol__"+e},S="object"==typeof window&&window||"object"==typeof self&&self||t,O="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,P=!("nw"in S)&&void 0!==S.process&&"[object process]"==={}.toString.call(S.process),j=!P&&!O&&!("undefined"==typeof window||!window.HTMLElement),C=void 0!==S.process&&"[object process]"==={}.toString.call(S.process)&&!O&&!("undefined"==typeof window||!window.HTMLElement),M=z("eventTasks"),I="addEventListener",L="removeEventListener",F=function(e,t){return{options:t[2],eventName:t[0],handler:t[1],target:e||S,name:t[0],crossContext:!1,invokeAddFunc:function(e,t){if(!this.crossContext)return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.options):this.target[e](this.eventName,t,this.options);try{return this.target[e](this.eventName,t,this.options)}catch(e){}},invokeRemoveFunc:function(e,t){if(!this.crossContext)return t&&t.invoke?this.target[e](this.eventName,t.invoke,this.options):this.target[e](this.eventName,t,this.options);try{return this.target[e](this.eventName,t,this.options)}catch(e){}}}},H=z("originalInstance");Zone.__load_patch("toString",function(e,t,n){var r=Function.prototype.toString;Function.prototype.toString=function(){if("function"==typeof this){if(this[z("OriginalDelegate")])return r.apply(this[z("OriginalDelegate")],arguments);if(this===Promise){var t=e[z("Promise")];if(t)return r.apply(t,arguments)}if(this===Error){var n=e[z("Error")];if(n)return r.apply(n,arguments)}}return r.apply(this,arguments)};var o=Object.prototype.toString;Object.prototype.toString=function(){return this instanceof Promise?"[object Promise]":o.apply(this,arguments)}});var R=Object[z("defineProperty")]=Object.defineProperty,x=Object[z("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,q=Object.create,A=z("unconfigurables"),B="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",X="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),N="EventTarget",W=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","transitioncancel","transitionend","waiting","wheel"],U=["afterscriptexecute","beforescriptexecute","DOMContentLoaded","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange"],G=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],V=["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],K=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],J=["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"],Q=["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],Y=["autocomplete","autocompleteerror"],$=["toggle"],ee=["load"],te=["blur","error","focus","load","resize","scroll"],ne=["bounce","finish","start"],re=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],oe=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],ae=["close","error","open","message"],ie=W.concat(Q,Y,$,U,G,V,J),se=z("unbound");Zone.__load_patch("timers",function(e,t,n){v(e,"set","clear","Timeout"),v(e,"set","clear","Interval"),v(e,"set","clear","Immediate"),v(e,"request","cancel","AnimationFrame"),v(e,"mozRequest","mozCancel","AnimationFrame"),v(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t,n){for(var r=["alert","prompt","confirm"],o=0;o<r.length;o++){h(e,r[o],function(n,r,o){return function(r,a){return t.current.run(n,e,a,o)}})}}),Zone.__load_patch("EventTarget",function(e,t,n){b(e);var r=e.XMLHttpRequestEventTarget;r&&r.prototype&&l(r.prototype),p("MutationObserver"),p("WebKitMutationObserver"),p("FileReader")}),Zone.__load_patch("on_property",function(e,t,n){w(e),g(),Z(e)}),Zone.__load_patch("XHR",function(e,t,n){!function(e){function n(e){return e[r]}function s(e){XMLHttpRequest[i]=!1;var t=e.data,n=t.target[a];n&&t.target.removeEventListener("readystatechange",n);var o=t.target[a]=function(){t.target.readyState===t.target.DONE&&!t.aborted&&XMLHttpRequest[i]&&"scheduled"===e.state&&e.invoke()};return t.target.addEventListener("readystatechange",o),t.target[r]||(t.target[r]=e),p.apply(t.target,t.args),XMLHttpRequest[i]=!0,e}function c(){}function u(e){var t=e.data;return t.aborted=!0,
f.apply(t.target,t.args)}var l=h(e.XMLHttpRequest.prototype,"open",function(){return function(e,t){return e[o]=0==t[2],l.apply(e,t)}}),p=h(e.XMLHttpRequest.prototype,"send",function(){return function(e,n){var r=t.current;if(e[o])return p.apply(e,n);var a={target:e,isPeriodic:!1,delay:null,args:n,aborted:!1};return r.scheduleMacroTask("XMLHttpRequest.send",c,a,s,u)}}),f=h(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,t){var r=n(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn||r.data&&r.data.aborted)return;r.zone.cancelTask(r)}}})}(e);var r=z("xhrTask"),o=z("xhrSync"),a=z("xhrListener"),i=z("xhrScheduled")}),Zone.__load_patch("geolocation",function(e,t,r){e.navigator&&e.navigator.geolocation&&n(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t,n){function r(t){return function(n){f(e,t).forEach(function(r){var o=e.PromiseRejectionEvent;if(o){var a=new o(t,{promise:n.promise,reason:n.rejection});r.invoke(a)}})}}e.PromiseRejectionEvent&&(t[z("unhandledPromiseRejectionHandler")]=r("unhandledrejection"),t[z("rejectionHandledHandler")]=r("rejectionhandled"))}),Zone.__load_patch("util",function(e,t,n){n.patchEventTargetMethods=l,n.patchOnProperties=o})})});e.__moduleExports=n}(this.MyBundle=this.MyBundle||{});

performance.measure('ionic:polyfills', 'ionic:polyfills-start');

performance.mark('ionic:main.js-start');
performance.mark('ionic:main.js-compile-start');