(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,r){},24:function(t,e,r){t.exports=r(66)},32:function(t,e,r){},34:function(t,e,r){},36:function(t,e,r){},62:function(t,e,r){},64:function(t,e,r){},66:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(20),c=r.n(o),i=(r(32),r(34),r(3)),u=r(2),l=(r(36),function(t){var e=t.body,r=t.classStyle,n=t.callback,o=t.id;return a.a.createElement("button",{id:o,className:r,onClick:n},e)}),s=r(23),f=(r(10),function(t){var e=t.type,r=t.placeholder,n=t.classStyle,o=t.value,c=t.callback,i=Object(s.a)(t,["type","placeholder","classStyle","value","callback"]);return a.a.createElement("input",Object.assign({onChange:c,type:e,placeholder:r,className:n,value:o},i))}),h=r(21),p=r.n(h).a.create({baseURL:"https://my-app-backend-todo.herokuapp.com"});function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(S){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var v={};i(v,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(L([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=p.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(a,o){function c(){return new e(function(n,c){!function n(a,o,c,i){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){s.value=t,c(s)},function(t){return n("throw",t,c,i)})}i(u.arg)}(a,o,n,c)})}return n=n?n.then(c,c):c()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,i(g,"constructor",p),i(p,"constructor",h),h.displayName=i(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),i(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},b(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var v=function(t){var e=t.todo,r=t.deleteTask,o=t.checkTask,c=t.getTodos,s=Object(n.useState)(!0),h=Object(u.a)(s,2),v=h[0],y=h[1],m=Object(n.useState)(""),g=Object(u.a)(m,2),b=g[0],w=g[1],k=function(){var t=Object(i.a)(d().mark(function t(e){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.patch("/patchTask/?uuid=".concat(e),{name:b});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:c();case 9:case"end":return t.stop()}},t,null,[[0,5]])}));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=e.name;return w(t),t},E=function(t,e){"Enter"===t.key||"blur"===t.type?(t.target.value&&k(e),y(!v)):"Escape"===t.key&&y(!v)};return a.a.createElement("li",{id:e.uuid},a.a.createElement(f,{checked:e.done,todo:e,callback:function(t){return o(t,e.uuid)},type:"checkbox"}),!0===v?a.a.createElement("span",{onDoubleClick:function(){y(function(t){return!t}),x()},id:e.uuid}," ",e.name," "):a.a.createElement("input",{autoFocus:!0,className:"input-li",value:b,onBlur:function(t){return E(t,e.uuid)},onChange:function(t){return function(t){w(t.target.value)}(t,e.uuid)},onKeyDown:function(t){return E(t,e.uuid)}}),a.a.createElement(l,{body:"DEL",classStyle:"btn-del",callback:function(){return r(e.uuid)}}))},y=r(22),m=(r(8),function(t){var e=t.addTodoHandler,r=t.inputValue,n=t.getValue,o=t.sortByDate,c=t.statusFilter;return a.a.createElement("div",{className:"add-task"},a.a.createElement(f,{onKeyDown:function(t){"Enter"===t.key&&e()},type:"text",value:r,placeholder:"New Task..",classStyle:"from-control",callback:n}),a.a.createElement(l,{body:"Add",classStyle:"btn-add",callback:e}),a.a.createElement("div",{className:"block-sort"},"Sort By Date",a.a.createElement(l,{body:c,callback:o,classStyle:"btn-swap"})))}),g=function(t){var e=t.check,r=t.deleteTasks,n=t.setCurrentPage,o=t.checkAll,c=t.setFilter,i=t.filter;return a.a.createElement("div",{className:"buttons"},a.a.createElement("div",{className:"check-del"},a.a.createElement(f,{type:"checkbox",classStyle:"check-all",callback:o,checked:e}),a.a.createElement("p",null,"Check All"),a.a.createElement(l,{callback:r,body:"Delete-ALL",classStyle:"btn-delete"})),a.a.createElement("div",{className:"sort-btn"},a.a.createElement(l,{body:"Active",callback:function(){c("undone"),n(0)},classStyle:"undone"===i?"button-active":"btn-active"}),a.a.createElement(l,{body:"Done",callback:function(){c("done"),n(0)},classStyle:"done"===i?"button-active":"btn-done"}),a.a.createElement(l,{body:"All",callback:function(){c(""),n(0)},classStyle:""===i?"button-active":"btn-all"})))},b=(r(62),function(t){var e=t.countButtons,r=t.selectPage,n=t.currentPage,o=t.setCurrentPage,c=t.totalPage;return a.a.createElement("div",{className:"block-pagin"},a.a.createElement(l,{body:"Begining",callback:function(){return o(function(t){return 0})}}),a.a.createElement(l,{body:"<<",callback:function(){return n>=1&&o(n-1)},classStyle:"pagins-l"}),e.map(function(t){return a.a.createElement(l,{item:t,callback:r,classStyle:n===t?"button-pgn-active":"",id:t,body:t+1,key:Math.random()})}),a.a.createElement(l,{body:">>",callback:function(){return n+1<c&&o(n+1)},classStyle:"pagins-r"}),a.a.createElement(l,{body:"In The End",callback:function(){return o(function(t){return c-1})}}))});r(64);function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(S){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};i(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,a)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(a,o){function c(){return new e(function(n,c){!function n(a,o,c,i){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){s.value=t,c(s)},function(t){return n("throw",t,c,i)})}i(u.arg)}(a,o,n,c)})}return n=n?n.then(c,c):c()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,i(m,"constructor",p),i(p,"constructor",h),h.displayName=i(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),i(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},g(m),i(m,c,"Generator"),i(m,a,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var k=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],o=e[1],c=Object(n.useState)(!0),l=Object(u.a)(c,2),s=l[0],f=l[1],h=Object(n.useState)(""),d=Object(u.a)(h,2),k=d[0],x=d[1],E=Object(n.useState)(0),O=Object(u.a)(E,2),L=O[0],j=O[1],S=Object(n.useState)(""),T=Object(u.a)(S,2),N=T[0],_=T[1],P=Object(n.useState)("asc"),F=Object(u.a)(P,2),G=F[0],A=F[1],D=Object(n.useState)(0),C=Object(u.a)(D,2),B=C[0],I=C[1],V=Object(n.useState)("OLD"),Y=Object(u.a)(V,2),H=Y[0],J=Y[1],K=Object(n.useState)([]),M=Object(u.a)(K,2),R=M[0],W=M[1],U=Object(n.useState)(0),q=Object(u.a)(U,2),z=q[0],Q=q[1],X=function(){var t=Object(i.a)(w().mark(function t(){var e;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("/getTask?page=".concat(L+1,"&order=").concat(G,"&allPerPage=5&filterBy=").concat(N));case 3:e=t.sent,console.log(e),o(e.data.arrFilterTasks),I(Math.ceil(e.data.countTasks/5)),Q(e.data.countTasks),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){if(r.length>0){var t=r.every(function(t){return t.done});f(t)}},[r]),Object(n.useEffect)(function(){0===r.length&&L>0&&j(L-1)},[z]),Object(n.useEffect)(function(){X()},[L,N,G]),Object(n.useEffect)(function(){W(Object(y.a)(new Array(B).keys()))},[B,r]);var Z=function(){var t=Object(i.a)(w().mark(function t(e){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.post("/postTask",e);case 3:return alert("\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),t.next=6,X();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430");case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=Object(i.a)(w().mark(function t(e){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.delete("/deleteTask/?uuid=".concat(e));case 3:if(!(r.length>1)){t.next=8;break}return t.next=6,X();case 6:t.next=9;break;case 8:j(L-1);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}(),tt=function(){var t=Object(i.a)(w().mark(function t(e){var n,a;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target,t.prev=1,f(n.checked),t.next=5,r.map(function(t){return p.patch("/patchTask/?uuid=".concat(t.uuid),{done:n.checked})});case 5:return a=t.sent,t.next=8,Promise.all(a);case 8:if(""!==N&&0!==L){t.next=13;break}return t.next=11,X();case 11:t.next=14;break;case 13:0!==L&&j(L-1);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}},t,null,[[1,16]])}));return function(e){return t.apply(this,arguments)}}(),et=function(){var t=Object(i.a)(w().mark(function t(){var e;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.length){t.next=18;break}return e=r.map(function(t){return p.delete("/deleteTask/?uuid=".concat(t.uuid))}),t.prev=2,t.next=5,Promise.all(e);case 5:if(!(L>0&&L===B-1)){t.next=10;break}return t.next=8,j(function(t){return t-1});case 8:t.next=13;break;case 10:if(0!==L&&L===B-1){t.next=13;break}return t.next=13,X();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0);case 18:case"end":return t.stop()}},t,null,[[2,15]])}));return function(){return t.apply(this,arguments)}}(),rt=function(){var t=Object(i.a)(w().mark(function t(e,n){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.patch("/patchTask/?uuid=".concat(n),{done:e.target.checked});case 3:if(t.sent,!(r.length>1)){t.next=9;break}return t.next=7,X();case 7:t.next=10;break;case 9:j(L-1);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e,r){return t.apply(this,arguments)}}();return a.a.createElement("div",{id:"Todos"},a.a.createElement(m,{statusFilter:H,addTodoHandler:function(){k.trim()&&Z({name:k,done:!1}),x("")},inputValue:k,getValue:function(t){var e=t.target.value;x(e),t.preventDefault()},sortByDate:function(){J("NEW"),"NEW"===H&&J("OLD"),A("desc"),"desc"===G&&A("asc")}}),a.a.createElement(g,{setCheck:f,check:s,setCurrentPage:j,filter:N,setFilter:_,checkAll:tt,todos:r,deleteTasks:et}),a.a.createElement("ul",{className:"todo-items"},r.map(function(t){return a.a.createElement(v,{getTodos:X,id:t.uuid,checkTask:rt,key:t.uuid,todo:t,deleteTask:$})})),a.a.createElement(b,{countButtons:R,totalPage:B,currentPage:L,setCurrentPage:j,selectPage:function(t){return j(Number(t.target.id))}}))};var x=function(){return a.a.createElement("div",{className:"body-app"},a.a.createElement("h1",{style:{textAlign:"center"}},"todo"),a.a.createElement(k,null))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(x,null))},8:function(t,e,r){}},[[24,2,1]]]);
//# sourceMappingURL=main.88db25e6.chunk.js.map