!function e(n,t,r){function o(c,i){if(!t[c]){if(!n[c]){var a="function"==typeof require&&require;if(!i&&a)return a(c,!0);if(s)return s(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[c]={exports:{}};n[c][0].call(l.exports,function(e){var t=n[c][1][e];return o(t||e)},l,l.exports,e,n,t,r)}return t[c].exports}for(var s="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,n,t){"use strict";function r(e,n){return caches.open(n).then(function(n){return n.match(e).then(function(n){return n?(i("Response found in cache "+n+"."),n):fetch(e)})})}function o(e,n){return new Promise(function(t,r){var o=setTimeout(r,n);fetch(e).then(function(e){i("Response found from network "+e+"."),clearTimeout(o),t(e)},r)})}var s=e(2),c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(s),i=e(3)("am:sw"),a={font:"font-cache-v3",css:"css-cache-v3",html:"html-cache-v3",img:"img-cache-v3",js:"js-cache-v3"};self.addEventListener("install",function(e){i("in the install event"),e.waitUntil(Object.keys(a).forEach(function(e){caches.open(a[e]).then(function(n){return n.addAll(c[e])}).then(function(){return self.skipWaiting()})}))}),self.addEventListener("fetch",function(e){i("Handling fetch event for "+e.request.url);var n=void 0;switch(e.request.url.split(".")[e.request.url.split(".").length-1]){case"http://localhost:3000/":case"http://localhost:8080/":case"com/":case"io/arcade-mode/":n="html";break;case"ttf":n="font";break;case"css":n="css";break;case"svg":case"png":case"jpeg":case"jpg":n="img";break;case"js":n="js";break;default:n="not found"}if("not found"===n)return i("Requested type, "+e.request.url+", is not in the cache"),i(e.request.url.split(".")[e.request.url.split(".").length-1]),fetch(e.request);e.respondWith(o(e.request,400).catch(function(){return r(e.request,a[n])}))}),self.addEventListener("activate",function(e){i("[activate]: Activating Service Worker.");var n=Object.keys(a).map(function(e){return a[e]});e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return i("Deleting out of date cache: "+e),caches.delete(e)}))}).then(function(){return self.clients.claim()}))})},{2:2,3:3}],2:[function(e,n,t){n.exports={html:["/"],js:["public/js/index.bundle.js","public/js/main.bundle.js","public/js/sw.bundle.js","public/js/ww.bundle.js","public/js/wwBenchmark.bundle.js"],json:["public/json/appconfig.json","public/json/challenges-algorithms.json","public/json/challenges-arcade.json","public/json/challenges-combined.json","public/json/challenges-data-structures.json"],font:["public/font/Kalam/Kalam-Regular.ttf","public/font/Lato/Lato-Black.ttf","public/font/Roboto/Roboto-Bold.ttf","public/font/Roboto/Roboto-Medium.ttf","public/font/Roboto/Roboto-Regular.ttf"],img:["public/img/FCCfire.svg","public/img/FCClogo.svg","public/img/favicon.ico","public/img/challenges/pexels-photo-127556.jpeg","public/img/challenges/pexels-photo-358717.jpeg"],css:["public/css/style.css","public/css/vendor/bootswatch/bootstrap.min.css","public/css/vendor/codemirror/monokai.min.css","public/css/vendor/codemirror/codemirror.min.css"]}},{}],3:[function(e,n,t){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function s(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,r)}}function c(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}t=n.exports=e(4),t.log=c,t.formatArgs=s,t.save=i,t.load=a,t.useColors=o,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())}).call(this,e(6))},{4:4,6:6}],4:[function(e,n,t){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(u||r);e.diff=o,e.prev=u,e.curr=r,u=r;for(var s=new Array(arguments.length),c=0;c<s.length;c++)s[c]=arguments[c];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var i=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;i++;var o=t.formatters[r];if("function"==typeof o){var c=s[i];n=o.call(e,c),s.splice(i,1),i--}return n}),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function c(){t.enable("")}function i(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function a(e){return e instanceof Error?e.stack||e.message:e}t=n.exports=o.debug=o.default=o,t.coerce=a,t.disable=c,t.enable=s,t.enabled=i,t.humanize=e(5),t.names=[],t.skips=[],t.formatters={};var u},{5:5}],5:[function(e,n,t){function r(e){if(e=String(e),!(e.length>100)){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(n){var t=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return t*f;case"days":case"day":case"d":return t*l;case"hours":case"hour":case"hrs":case"hr":case"h":return t*u;case"minutes":case"minute":case"mins":case"min":case"m":return t*a;case"seconds":case"second":case"secs":case"sec":case"s":return t*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function o(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function s(e){return c(e,l,"day")||c(e,u,"hour")||c(e,a,"minute")||c(e,i,"second")||e+" ms"}function c(e,n,t){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}var i=1e3,a=60*i,u=60*a,l=24*u,f=365.25*l;n.exports=function(e,n){n=n||{};var t=typeof e;if("string"===t&&e.length>0)return r(e);if("number"===t&&!1===isNaN(e))return n.long?s(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],6:[function(e,n,t){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(n){try{return f.call(null,e,0)}catch(n){return f.call(this,e,0)}}}function c(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function i(){g&&p&&(g=!1,p.length?m=p.concat(m):v=-1,m.length&&a())}function a(){if(!g){var e=s(i);g=!0;for(var n=m.length;n;){for(p=m,m=[];++v<n;)p&&p[v].run();v=-1,n=m.length}p=null,g=!1,c(e)}}function u(e,n){this.fun=e,this.array=n}function l(){}var f,d,h=n.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,m=[],g=!1,v=-1;h.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new u(e,n)),1!==m.length||g||s(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.prependListener=l,h.prependOnceListener=l,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}]},{},[1]);