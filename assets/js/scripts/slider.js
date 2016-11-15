/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );

(function(){var t,e,n,r,i,o,s,a,l,u,f,h,c,p,m,d,g,y,v,b,w,x,M,k,S,T,C,F,H,R,q,X,Y,j,z,I,A,G,V,Z,E,O,L,D,P,W,N,$,B,U,K,J,Q,_,te,ee,ne=function(t,e){return function(){return t.apply(e,arguments)}};H=function(){return"visible"===document.visibilityState||null!=T.tests},j=function(){var t;return t=[],"undefined"!=typeof document&&null!==document&&document.addEventListener("visibilitychange",function(){var e,n,r,i;for(i=[],n=0,r=t.length;r>n;n++)e=t[n],i.push(e(H()));return i}),function(e){return t.push(e)}}(),x=function(t){var e,n,r;n={};for(e in t)r=t[e],n[e]=r;return n},b=function(t){var e;return e={},function(){var n,r,i,o,s;for(r="",o=0,s=arguments.length;s>o;o++)n=arguments[o],r+=n.toString()+",";return i=e[r],i||(e[r]=i=t.apply(this,arguments)),i}},Y=function(t){return function(e){var n,r,i;return e instanceof Array||e instanceof NodeList||e instanceof HTMLCollection?i=function(){var i,o,s;for(s=[],r=i=0,o=e.length;o>=0?o>i:i>o;r=o>=0?++i:--i)n=Array.prototype.slice.call(arguments,1),n.splice(0,0,e[r]),s.push(t.apply(this,n));return s}.apply(this,arguments):t.apply(this,arguments)}},d=function(t,e){var n,r,i;i=[];for(n in e)r=e[n],i.push(null!=t[n]?t[n]:t[n]=r);return i},g=function(t,e){var n,r,i;if(null!=t.style)return y(t,e);i=[];for(n in e)r=e[n],i.push(t[n]=r.format());return i},y=function(t,e){var n,r,i,o,s;e=z(e),o=[],n=R(t);for(r in e)s=e[r],_.contains(r)?o.push([r,s]):(s=null!=s.format?s.format():""+s+ee(r,s),n&&B.contains(r)?t.setAttribute(r,s):t.style[A(r)]=s);return o.length>0?n?(i=new l,i.applyProperties(o),t.setAttribute("transform",i.decompose().format())):(s=o.map(function(t){return te(t[0],t[1])}).join(" "),t.style[A("transform")]=s):void 0},R=function(t){var e,n;return"undefined"!=typeof SVGElement&&null!==SVGElement&&"undefined"!=typeof SVGSVGElement&&null!==SVGSVGElement?t instanceof SVGElement&&!(t instanceof SVGSVGElement):null!=(e=null!=(n=T.tests)&&"function"==typeof n.isSVG?n.isSVG(t):void 0)?e:!1},Z=function(t,e){var n;return n=Math.pow(10,e),Math.round(t*n)/n},u=function(){function t(t){var e,n,r;for(this.obj={},n=0,r=t.length;r>n;n++)e=t[n],this.obj[e]=1}return t.prototype.contains=function(t){return 1===this.obj[t]},t}(),Q=function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})},G=new u("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")),S=new u("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")),_=new u("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")),B=new u("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")),ee=function(t,e){return"number"!=typeof e?"":G.contains(t)?"px":S.contains(t)?"deg":""},te=function(t,e){var n,r;return n=(""+e).match(/^([0-9.-]*)([^0-9]*)$/),null!=n?(e=n[1],r=n[2]):e=parseFloat(e),e=Z(parseFloat(e),10),(null==r||""===r)&&(r=ee(t,e)),""+t+"("+e+r+")"},z=function(t){var e,n,r,i,o,s,a,l;r={};for(i in t)if(o=t[i],_.contains(i))if(n=i.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/),n&&n[2].length>0)r[i]=o;else for(l=["X","Y","Z"],s=0,a=l.length;a>s;s++)e=l[s],r[n[1]+e]=o;else r[i]=o;return r},k=function(t){var e;return e="opacity"===t?1:0,""+e+ee(t,e)},C=function(t,e){var n,r,i,o,s,u,f,h,c,p,m;if(o={},n=R(t),null!=t.style)for(s=window.getComputedStyle(t,null),f=0,c=e.length;c>f;f++)r=e[f],_.contains(r)?null==o.transform&&(i=n?new l(null!=(m=t.transform.baseVal.consolidate())?m.matrix:void 0):a.fromTransform(s[A("transform")]),o.transform=i.decompose()):(u=s[r],null==u&&B.contains(r)&&(u=t.getAttribute(r)),(""===u||null==u)&&(u=k(r)),o[r]=M(u));else for(h=0,p=e.length;p>h;h++)r=e[h],o[r]=M(t[r]);return o},M=function(t){var e,n,a,l,u;for(a=[i,r,o,s],l=0,u=a.length;u>l;l++)if(n=a[l],e=n.create(t),null!=e)return e;return null},o=function(){function t(t){this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this),this.obj=t}return t.prototype.interpolate=function(e,n){var r,i,o,s,a;s=this.obj,r=e.obj,o={};for(i in s)a=s[i],o[i]=null!=a.interpolate?a.interpolate(r[i],n):a;return new t(o)},t.prototype.format=function(){return this.obj},t.create=function(e){var n,r,i;if(e instanceof Object){r={};for(n in e)i=e[n],r[n]=M(i);return new t(r)}return null},t}(),s=function(){function t(t,e,n){this.prefix=e,this.suffix=n,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this),this.value=parseFloat(t)}return t.prototype.interpolate=function(e,n){var r,i;return i=this.value,r=e.value,new t((r-i)*n+i,e.prefix||this.prefix,e.suffix||this.suffix)},t.prototype.format=function(){return null==this.prefix&&null==this.suffix?Z(this.value,5):this.prefix+Z(this.value,5)+this.suffix},t.create=function(e){var n;return"string"!=typeof e?new t(e):(n=(""+e).match("([^0-9.+-]*)([0-9.+-]+)([^0-9.+-]*)"),null!=n?new t(n[2],n[1],n[3]):null)},t}(),r=function(){function t(t,e){this.values=t,this.sep=e,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n){var r,i,o,s,a,l;for(s=this.values,r=e.values,o=[],i=a=0,l=Math.min(s.length,r.length);l>=0?l>a:a>l;i=l>=0?++a:--a)o.push(null!=s[i].interpolate?s[i].interpolate(r[i],n):s[i]);return new t(o,this.sep)},t.prototype.format=function(){var t;return t=this.values.map(function(t){return null!=t.format?t.format():t}),null!=this.sep?t.join(this.sep):t},t.createFromArray=function(e,n){var r;return r=e.map(function(t){return M(t)||t}),r=r.filter(function(t){return null!=t}),new t(r,n)},t.create=function(e){var n,r,i,o,s;if(e instanceof Array)return t.createFromArray(e,null);if("string"==typeof e){for(i=[" ",",","|",";","/",":"],o=0,s=i.length;s>o;o++)if(r=i[o],n=e.split(r),n.length>1)return t.createFromArray(n,r);return null}},t}(),t=function(){function t(t,e){this.rgb=null!=t?t:{},this.format=e,this.toRgba=ne(this.toRgba,this),this.toRgb=ne(this.toRgb,this),this.toHex=ne(this.toHex,this)}return t.fromHex=function(e){var n,r;return n=e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i),null!=n&&(e="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),r=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),null!=r?new t({r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16),a:1},"hex"):null},t.fromRgb=function(e){var n,r;return n=e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/),null!=n?new t({r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(null!=(r=n[4])?r:1)},null!=n[4]?"rgba":"rgb"):null},t.componentToHex=function(t){var e;return e=t.toString(16),1===e.length?"0"+e:e},t.prototype.toHex=function(){return"#"+t.componentToHex(this.rgb.r)+t.componentToHex(this.rgb.g)+t.componentToHex(this.rgb.b)},t.prototype.toRgb=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},t.prototype.toRgba=function(){return"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", "+this.rgb.a+")"},t}(),i=function(){function e(t){this.color=t,this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return e.prototype.interpolate=function(n,r){var i,o,s,a,l,u,f,h;for(a=this.color,i=n.color,s={},h=["r","g","b"],u=0,f=h.length;f>u;u++)o=h[u],l=Math.round((i.rgb[o]-a.rgb[o])*r+a.rgb[o]),s[o]=Math.min(255,Math.max(0,l));return o="a",l=Z((i.rgb[o]-a.rgb[o])*r+a.rgb[o],5),s[o]=Math.min(1,Math.max(0,l)),new e(new t(s,i.format))},e.prototype.format=function(){return"hex"===this.color.format?this.color.toHex():"rgb"===this.color.format?this.color.toRgb():"rgba"===this.color.format?this.color.toRgba():void 0},e.create=function(n){var r;if("string"==typeof n)return r=t.fromHex(n)||t.fromRgb(n),null!=r?new e(r):null},e}(),n=function(){function t(t){this.props=t,this.applyRotateCenter=ne(this.applyRotateCenter,this),this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n){var r,i,o,s,a,l,u,f,h,c,p,m;for(o={},c=["translate","scale","rotate"],s=0,f=c.length;f>s;s++)for(i=c[s],o[i]=[],r=a=0,p=this.props[i].length;p>=0?p>a:a>p;r=p>=0?++a:--a)o[i][r]=(e.props[i][r]-this.props[i][r])*n+this.props[i][r];for(r=l=1;2>=l;r=++l)o.rotate[r]=e.props.rotate[r];for(m=["skew"],u=0,h=m.length;h>u;u++)i=m[u],o[i]=(e.props[i]-this.props[i])*n+this.props[i];return new t(o)},t.prototype.format=function(){return"translate("+this.props.translate.join(",")+") rotate("+this.props.rotate.join(",")+") skewX("+this.props.skew+") scale("+this.props.scale.join(",")+")"},t.prototype.applyRotateCenter=function(t){var e,n,r,i,o,s;for(n=v.createSVGMatrix(),n=n.translate(t[0],t[1]),n=n.rotate(this.props.rotate[0]),n=n.translate(-t[0],-t[1]),r=new l(n),i=r.decompose().props.translate,s=[],e=o=0;1>=o;e=++o)s.push(this.props.translate[e]-=i[e]);return s},t}(),v="undefined"!=typeof document&&null!==document?document.createElementNS("http://www.w3.org/2000/svg","svg"):void 0,l=function(){function t(t){this.m=t,this.applyProperties=ne(this.applyProperties,this),this.decompose=ne(this.decompose,this),this.m||(this.m=v.createSVGMatrix())}return t.prototype.decompose=function(){var t,e,r,i,o;return i=new f([this.m.a,this.m.b]),o=new f([this.m.c,this.m.d]),t=i.length(),r=i.dot(o),i=i.normalize(),e=o.combine(i,1,-r).length(),new n({translate:[this.m.e,this.m.f],rotate:[180*Math.atan2(this.m.b,this.m.a)/Math.PI,this.rotateCX,this.rotateCY],scale:[t,e],skew:r/e*180/Math.PI})},t.prototype.applyProperties=function(t){var e,n,r,i,o,s,a,l;for(e={},o=0,s=t.length;s>o;o++)r=t[o],e[r[0]]=r[1];for(n in e)i=e[n],"translateX"===n?this.m=this.m.translate(i,0):"translateY"===n?this.m=this.m.translate(0,i):"scaleX"===n?this.m=this.m.scale(i,1):"scaleY"===n?this.m=this.m.scale(1,i):"rotateZ"===n?this.m=this.m.rotate(i):"skewX"===n?this.m=this.m.skewX(i):"skewY"===n&&(this.m=this.m.skewY(i));return this.rotateCX=null!=(a=e.rotateCX)?a:0,this.rotateCY=null!=(l=e.rotateCY)?l:0},t}(),f=function(){function t(t){this.els=t,this.combine=ne(this.combine,this),this.normalize=ne(this.normalize,this),this.length=ne(this.length,this),this.cross=ne(this.cross,this),this.dot=ne(this.dot,this),this.e=ne(this.e,this)}return t.prototype.e=function(t){return 1>t||t>this.els.length?null:this.els[t-1]},t.prototype.dot=function(t){var e,n,r;if(e=t.els||t,r=0,n=this.els.length,n!==e.length)return null;for(n+=1;--n;)r+=this.els[n-1]*e[n-1];return r},t.prototype.cross=function(e){var n,r;return r=e.els||e,3!==this.els.length||3!==r.length?null:(n=this.els,new t([n[1]*r[2]-n[2]*r[1],n[2]*r[0]-n[0]*r[2],n[0]*r[1]-n[1]*r[0]]))},t.prototype.length=function(){var t,e,n,r,i;for(t=0,i=this.els,n=0,r=i.length;r>n;n++)e=i[n],t+=Math.pow(e,2);return Math.sqrt(t)},t.prototype.normalize=function(){var e,n,r,i,o;r=this.length(),i=[],o=this.els;for(n in o)e=o[n],i[n]=e/r;return new t(i)},t.prototype.combine=function(e,n,r){var i,o,s,a;for(o=[],i=s=0,a=this.els.length;a>=0?a>s:s>a;i=a>=0?++s:--s)o[i]=n*this.els[i]+r*e.els[i];return new t(o)},t}(),e=function(){function t(){this.toMatrix=ne(this.toMatrix,this),this.format=ne(this.format,this),this.interpolate=ne(this.interpolate,this)}return t.prototype.interpolate=function(e,n,r){var i,o,s,a,l,u,f,h,c,p,m,d,g,y,v,b,w,x;for(null==r&&(r=null),s=this,o=new t,w=["translate","scale","skew","perspective"],d=0,b=w.length;b>d;d++)for(f=w[d],o[f]=[],a=g=0,x=s[f].length-1;x>=0?x>=g:g>=x;a=x>=0?++g:--g)o[f][a]=null==r||r.indexOf(f)>-1||r.indexOf(""+f+["x","y","z"][a])>-1?(e[f][a]-s[f][a])*n+s[f][a]:s[f][a];if(null==r||-1!==r.indexOf("rotate")){if(h=s.quaternion,c=e.quaternion,i=h[0]*c[0]+h[1]*c[1]+h[2]*c[2]+h[3]*c[3],0>i){for(a=y=0;3>=y;a=++y)h[a]=-h[a];i=-i}for(i+1>.05?1-i>=.05?(m=Math.acos(i),u=1/Math.sin(m),p=Math.sin(m*(1-n))*u,l=Math.sin(m*n)*u):(p=1-n,l=n):(c[0]=-h[1],c[1]=h[0],c[2]=-h[3],c[3]=h[2],p=Math.sin(piDouble*(.5-n)),l=Math.sin(piDouble*n)),o.quaternion=[],a=v=0;3>=v;a=++v)o.quaternion[a]=h[a]*p+c[a]*l}else o.quaternion=s.quaternion;return o},t.prototype.format=function(){return this.toMatrix().toString()},t.prototype.toMatrix=function(){var t,e,n,r,i,o,s,l,u,f,h,c,p,m,d,g;for(t=this,i=a.I(4),e=p=0;3>=p;e=++p)i.els[e][3]=t.perspective[e];for(o=t.quaternion,f=o[0],h=o[1],c=o[2],u=o[3],s=t.skew,r=[[1,0],[2,0],[2,1]],e=m=2;m>=0;e=--m)s[e]&&(l=a.I(4),l.els[r[e][0]][r[e][1]]=s[e],i=i.multiply(l));for(i=i.multiply(new a([[1-2*(h*h+c*c),2*(f*h-c*u),2*(f*c+h*u),0],[2*(f*h+c*u),1-2*(f*f+c*c),2*(h*c-f*u),0],[2*(f*c-h*u),2*(h*c+f*u),1-2*(f*f+h*h),0],[0,0,0,1]])),e=d=0;2>=d;e=++d){for(n=g=0;2>=g;n=++g)i.els[e][n]*=t.scale[e];i.els[3][e]=t.translate[e]}return i},t}(),a=function(){function t(t){this.els=t,this.toString=ne(this.toString,this),this.decompose=ne(this.decompose,this),this.inverse=ne(this.inverse,this),this.augment=ne(this.augment,this),this.toRightTriangular=ne(this.toRightTriangular,this),this.transpose=ne(this.transpose,this),this.multiply=ne(this.multiply,this),this.dup=ne(this.dup,this),this.e=ne(this.e,this)}return t.prototype.e=function(t,e){return 1>t||t>this.els.length||1>e||e>this.els[0].length?null:this.els[t-1][e-1]},t.prototype.dup=function(){return new t(this.els)},t.prototype.multiply=function(e){var n,r,i,o,s,a,l,u,f,h,c,p,m;for(p=e.modulus?!0:!1,n=e.els||e,"undefined"==typeof n[0][0]&&(n=new t(n).els),h=this.els.length,l=h,u=n[0].length,i=this.els[0].length,o=[],h+=1;--h;)for(s=l-h,o[s]=[],c=u,c+=1;--c;){for(a=u-c,m=0,f=i,f+=1;--f;)r=i-f,m+=this.els[s][r]*n[r][a];o[s][a]=m}return n=new t(o),p?n.col(1):n},t.prototype.transpose=function(){var e,n,r,i,o,s,a;for(a=this.els.length,e=this.els[0].length,n=[],o=e,o+=1;--o;)for(r=e-o,n[r]=[],s=a,s+=1;--s;)i=a-s,n[r][i]=this.els[i][r];return new t(n)},t.prototype.toRightTriangular=function(){var t,e,n,r,i,o,s,a,l,u,f,h,c,p;for(t=this.dup(),a=this.els.length,i=a,o=this.els[0].length;--a;){if(n=i-a,0===t.els[n][n])for(r=f=c=n+1;i>=c?i>f:f>i;r=i>=c?++f:--f)if(0!==t.els[r][n]){for(e=[],l=o,l+=1;--l;)u=o-l,e.push(t.els[n][u]+t.els[r][u]);t.els[n]=e;break}if(0!==t.els[n][n])for(r=h=p=n+1;i>=p?i>h:h>i;r=i>=p?++h:--h){for(s=t.els[r][n]/t.els[n][n],e=[],l=o,l+=1;--l;)u=o-l,e.push(n>=u?0:t.els[r][u]-t.els[n][u]*s);t.els[r]=e}}return t},t.prototype.augment=function(e){var n,r,i,o,s,a,l,u,f;if(n=e.els||e,"undefined"==typeof n[0][0]&&(n=new t(n).els),r=this.dup(),i=r.els[0].length,u=r.els.length,a=u,l=n[0].length,u!==n.length)return null;for(u+=1;--u;)for(o=a-u,f=l,f+=1;--f;)s=l-f,r.els[o][i+s]=n[o][s];return r},t.prototype.inverse=function(){var e,n,r,i,o,s,a,l,u,f,h,c,p;for(f=this.els.length,a=f,e=this.augment(t.I(f)).toRightTriangular(),l=e.els[0].length,o=[],f+=1;--f;){for(i=f-1,r=[],h=l,o[i]=[],n=e.els[i][i],h+=1;--h;)c=l-h,u=e.els[i][c]/n,r.push(u),c>=a&&o[i].push(u);for(e.els[i]=r,s=p=0;i>=0?i>p:p>i;s=i>=0?++p:--p){for(r=[],h=l,h+=1;--h;)c=l-h,r.push(e.els[s][c]-e.els[i][c]*e.els[s][i]);e.els[s]=r}}return new t(o)},t.I=function(e){var n,r,i,o,s;for(n=[],o=e,e+=1;--e;)for(r=o-e,n[r]=[],s=o,s+=1;--s;)i=o-s,n[r][i]=r===i?1:0;return new t(n)},t.prototype.decompose=function(){var t,n,r,i,o,s,a,l,u,h,c,p,m,d,g,y,v,b,w,x,M,k,S,T,C,F,H,R,q,X,Y,j,z,I,A,G,V,Z;for(s=this,x=[],v=[],b=[],h=[],l=[],t=[],n=q=0;3>=q;n=++q)for(t[n]=[],i=X=0;3>=X;i=++X)t[n][i]=s.els[n][i];if(0===t[3][3])return!1;for(n=Y=0;3>=Y;n=++Y)for(i=j=0;3>=j;i=++j)t[n][i]/=t[3][3];for(u=s.dup(),n=z=0;2>=z;n=++z)u.els[n][3]=0;if(u.els[3][3]=1,0!==t[0][3]||0!==t[1][3]||0!==t[2][3]){for(p=new f(t.slice(0,4)[3]),r=u.inverse(),M=r.transpose(),l=M.multiply(p).els,n=I=0;2>=I;n=++I)t[n][3]=0;t[3][3]=1}else l=[0,0,0,1];for(n=A=0;2>=A;n=++A)x[n]=t[3][n],t[3][n]=0;for(d=[],n=G=0;2>=G;n=++G)d[n]=new f(t[n].slice(0,3));if(v[0]=d[0].length(),d[0]=d[0].normalize(),b[0]=d[0].dot(d[1]),d[1]=d[1].combine(d[0],1,-b[0]),v[1]=d[1].length(),d[1]=d[1].normalize(),b[0]/=v[1],b[1]=d[0].dot(d[2]),d[2]=d[2].combine(d[0],1,-b[1]),b[2]=d[1].dot(d[2]),d[2]=d[2].combine(d[1],1,-b[2]),v[2]=d[2].length(),d[2]=d[2].normalize(),b[1]/=v[2],b[2]/=v[2],a=d[1].cross(d[2]),d[0].dot(a)<0)for(n=V=0;2>=V;n=++V)for(v[n]*=-1,i=Z=0;2>=Z;i=++Z)d[n].els[i]*=-1;g=function(t,e){return d[t].els[e]},m=[],m[1]=Math.asin(-g(0,2)),0!==Math.cos(m[1])?(m[0]=Math.atan2(g(1,2),g(2,2)),m[2]=Math.atan2(g(0,1),g(0,0))):(m[0]=Math.atan2(-g(2,0),g(1,1)),m[1]=0),w=g(0,0)+g(1,1)+g(2,2)+1,w>1e-4?(y=.5/Math.sqrt(w),C=.25/y,F=(g(2,1)-g(1,2))*y,H=(g(0,2)-g(2,0))*y,R=(g(1,0)-g(0,1))*y):g(0,0)>g(1,1)&&g(0,0)>g(2,2)?(y=2*Math.sqrt(1+g(0,0)-g(1,1)-g(2,2)),F=.25*y,H=(g(0,1)+g(1,0))/y,R=(g(0,2)+g(2,0))/y,C=(g(2,1)-g(1,2))/y):g(1,1)>g(2,2)?(y=2*Math.sqrt(1+g(1,1)-g(0,0)-g(2,2)),F=(g(0,1)+g(1,0))/y,H=.25*y,R=(g(1,2)+g(2,1))/y,C=(g(0,2)-g(2,0))/y):(y=2*Math.sqrt(1+g(2,2)-g(0,0)-g(1,1)),F=(g(0,2)+g(2,0))/y,H=(g(1,2)+g(2,1))/y,R=.25*y,C=(g(1,0)-g(0,1))/y),h=[F,H,R,C],c=new e,c.translate=x,c.scale=v,c.skew=b,c.quaternion=h,c.perspective=l,c.rotate=m;for(S in c){k=c[S];for(o in k)T=k[o],isNaN(T)&&(k[o]=0)}return c},t.prototype.toString=function(){var t,e,n,r,i;for(n="matrix3d(",t=r=0;3>=r;t=++r)for(e=i=0;3>=i;e=++i)n+=Z(this.els[t][e],10),(3!==t||3!==e)&&(n+=",");return n+=")"},t.matrixForTransform=b(function(t){var e,n,r,i,o,s;return e=document.createElement("div"),e.style.position="absolute",e.style.visibility="hidden",e.style[A("transform")]=t,document.body.appendChild(e),r=window.getComputedStyle(e,null),n=null!=(i=null!=(o=r.transform)?o:r[A("transform")])?i:null!=(s=T.tests)?s.matrixForTransform(t):void 0,document.body.removeChild(e),n}),t.fromTransform=function(e){var n,r,i,o,s,a;for(o=null!=e?e.match(/matrix3?d?\(([-0-9,e \.]*)\)/):void 0,o?(n=o[1].split(","),n=n.map(parseFloat),r=6===n.length?[n[0],n[1],0,0,n[2],n[3],0,0,0,0,1,0,n[4],n[5],0,1]:n):r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s=[],i=a=0;3>=a;i=++a)s.push(r.slice(4*i,4*i+4));return new t(s)},t}(),I=b(function(t){var e,n,r,i,o,s,a,l,u,f;if(void 0!==document.body.style[t])return"";for(i=t.split("-"),o="",s=0,l=i.length;l>s;s++)r=i[s],o+=r.substring(0,1).toUpperCase()+r.substring(1);for(f=["Webkit","Moz","ms"],a=0,u=f.length;u>a;a++)if(n=f[a],e=n+o,void 0!==document.body.style[e])return n;return""}),A=b(function(t){var e;return e=I(t),"Moz"===e?""+e+(t.substring(0,1).toUpperCase()+t.substring(1)):""!==e?"-"+e.toLowerCase()+"-"+Q(t):Q(t)}),V="undefined"!=typeof window&&null!==window?window.requestAnimationFrame:void 0,p=[],m=[],P=!1,W=1,"undefined"!=typeof window&&null!==window&&window.addEventListener("keyup",function(t){return 68===t.keyCode&&t.shiftKey&&t.ctrlKey?T.toggleSlow():void 0}),null==V&&(q=0,V=function(t){var e,n,r;return e=Date.now(),r=Math.max(0,16-(e-q)),n=window.setTimeout(function(){return t(e+r)},r),q=e+r,n}),O=!1,E=!1,$=function(){return O?void 0:(O=!0,V(L))},L=function(t){var e,n,r,i;if(E)return void V(L);for(n=[],r=0,i=p.length;i>r;r++)e=p[r],c(t,e)||n.push(e);return p=p.filter(function(t){return-1===n.indexOf(t)}),0===p.length?O=!1:V(L)},c=function(t,e){var n,r,i,o,s,a,l,u;if(null==e.tStart&&(e.tStart=t),o=(t-e.tStart)/e.options.duration,s=e.curve(o),r={},o>=1)r=e.curve.initialForce?e.properties.start:e.properties.end;else{u=e.properties.start;for(n in u)i=u[n],r[n]=F(i,e.properties.end[n],s)}return g(e.el,r),"function"==typeof(a=e.options).change&&a.change(e.el),o>=1&&"function"==typeof(l=e.options).complete&&l.complete(e.el),1>o},F=function(t,e,n){return null!=t&&null!=t.interpolate?t.interpolate(e,n):null},N=function(t,e,n,r){var i,o,u,f,h,c,d,g;if(null!=r&&(m=m.filter(function(t){return t.id!==r})),T.stop(t,{timeout:!1}),!n.animated)return T.css(t,e),void("function"==typeof n.complete&&n.complete(this));e=z(e),h=C(t,Object.keys(e)),i={},c=[];for(u in e)d=e[u],_.contains(u)?c.push([u,d]):(i[u]=M(d),i[u]instanceof s&&null!=t.style&&(i[u].prefix="",null==(g=i[u]).suffix&&(g.suffix=ee(u,0))));return c.length>0&&(o=R(t),o?(f=new l,f.applyProperties(c)):(d=c.map(function(t){return te(t[0],t[1])}).join(" "),f=a.fromTransform(a.matrixForTransform(d))),i.transform=f.decompose(),o&&h.transform.applyRotateCenter([i.transform.props.rotate[1],i.transform.props.rotate[2]])),p.push({el:t,properties:{start:h,end:i},options:n,curve:n.type.call(n.type,n)}),$()},J=[],K=0,D=function(t){return H()?t.realTimeoutId=setTimeout(function(){return t.fn(),w(t.id)},t.delay):void 0},h=function(t,e){var n;return K+=1,n={id:K,tStart:Date.now(),fn:t,delay:e,originalDelay:e},D(n),J.push(n),K},w=function(t){return J=J.filter(function(e){return e.id===t&&clearTimeout(e.realTimeoutId),e.id!==t})},X=function(t,e){var n;return null!=t?(n=t-e.tStart,e.originalDelay-n):e.originalDelay},"undefined"!=typeof window&&null!==window&&window.addEventListener("unload",function(){}),U=null,j(function(t){var e,n,r,i,o,s,a,l,u,f;if(E=!t,t){if(O)for(n=Date.now()-U,o=0,l=p.length;l>o;o++)e=p[o],null!=e.tStart&&(e.tStart+=n);for(s=0,u=J.length;u>s;s++)r=J[s],r.delay=X(U,r),D(r);return U=null}for(U=Date.now(),f=[],i=0,a=J.length;a>i;i++)r=J[i],f.push(clearTimeout(r.realTimeoutId));return f}),T={},T.linear=function(){return function(t){return t}},T.spring=function(t){var e,n,r,i,o,s;return null==t&&(t={}),d(t,arguments.callee.defaults),i=Math.max(1,t.frequency/20),o=Math.pow(20,t.friction/100),s=t.anticipationSize/1e3,r=Math.max(0,s),e=function(e){var n,r,i,o,a;return n=.8,o=s/(1-s),a=0,i=(o-n*a)/(o-a),r=(n-i)/o,r*e*t.anticipationStrength/100+i},n=function(t){return Math.pow(o/10,-t)*(1-t)},function(t){var r,o,a,l,u,f,h,c;return f=t/(1-s)-s/(1-s),s>t?(c=s/(1-s)-s/(1-s),h=0/(1-s)-s/(1-s),u=Math.acos(1/e(c)),a=(Math.acos(1/e(h))-u)/(i*-s),r=e):(r=n,u=0,a=1),o=r(f),l=i*(t-s)*a+u,1-o*Math.cos(l)}},T.bounce=function(t){var e,n,r,i;return null==t&&(t={}),d(t,arguments.callee.defaults),r=Math.max(1,t.frequency/20),i=Math.pow(20,t.friction/100),e=function(t){return Math.pow(i/10,-t)*(1-t)},n=function(t){var n,i,o,s;return s=-1.57,i=1,n=e(t),o=r*t*i+s,n*Math.cos(o)},n.initialForce=!0,n},T.gravity=function(t){var e,n,r,i,o,s,a;return null==t&&(t={}),d(t,arguments.callee.defaults),n=Math.min(t.bounciness/1250,.8),i=t.elasticity/1e3,a=100,r=[],e=function(){var r,i;for(r=Math.sqrt(2/a),i={a:-r,b:r,H:1},t.initialForce&&(i.a=0,i.b=2*i.b);i.H>.001;)e=i.b-i.a,i={a:i.b,b:i.b+e*n,H:i.H*n*n};return i.b}(),s=function(n,r,i,o){var s,a;return e=r-n,a=2/e*o-1-2*n/e,s=a*a*i-i+1,t.initialForce&&(s=1-s),s},function(){var o,s,l,u;for(s=Math.sqrt(2/(a*e*e)),l={a:-s,b:s,H:1},t.initialForce&&(l.a=0,l.b=2*l.b),r.push(l),o=e,u=[];l.b<1&&l.H>.001;)o=l.b-l.a,l={a:l.b,b:l.b+o*n,H:l.H*i},u.push(r.push(l));return u}(),o=function(e){var n,i,o;for(i=0,n=r[i];!(e>=n.a&&e<=n.b)&&(i+=1,n=r[i]););return o=n?s(n.a,n.b,n.H,e):t.initialForce?0:1},o.initialForce=t.initialForce,o},T.forceWithGravity=function(t){return null==t&&(t={}),d(t,arguments.callee.defaults),t.initialForce=!0,T.gravity(t)},T.bezier=function(){var t,e,n;return e=function(t,e,n,r,i){return Math.pow(1-t,3)*e+3*Math.pow(1-t,2)*t*n+3*(1-t)*Math.pow(t,2)*r+Math.pow(t,3)*i},t=function(t,n,r,i,o){return{x:e(t,n.x,r.x,i.x,o.x),y:e(t,n.y,r.y,i.y,o.y)}},n=function(t,e,n){var r,i,o,s,a,l,u,f,h,c;for(r=null,h=0,c=e.length;c>h&&(i=e[h],t>=i(0).x&&t<=i(1).x&&(r=i),null===r);h++);if(!r)return n?0:1;for(f=1e-4,s=0,l=1,a=(l+s)/2,u=r(a).x,o=0;Math.abs(t-u)>f&&100>o;)t>u?s=a:l=a,a=(l+s)/2,u=r(a).x,o+=1;return r(a).y},function(e){var r,i,o;return null==e&&(e={}),i=e.points,o=!1,r=function(){var e,n,o;r=[],o=function(e,n){var i;return i=function(r){return t(r,e,e.cp[e.cp.length-1],n.cp[0],n)},r.push(i)};for(e in i){if(n=parseInt(e),n>=i.length-1)break;o(i[n],i[n+1])}return r}(),function(t){return 0===t?0:1===t?1:n(t,r,o)}}}(),T.easeInOut=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:.92-e/1e3,y:0}]},{x:1,y:1,cp:[{x:.08+e/1e3,y:1}]}]})},T.easeIn=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:.92-e/1e3,y:0}]},{x:1,y:1,cp:[{x:1,y:1}]}]})},T.easeOut=function(t){var e,n;return null==t&&(t={}),e=null!=(n=t.friction)?n:arguments.callee.defaults.friction,T.bezier({points:[{x:0,y:0,cp:[{x:0,y:0}]},{x:1,y:1,cp:[{x:.08+e/1e3,y:1}]}]})},T.spring.defaults={frequency:300,friction:200,anticipationSize:0,anticipationStrength:0},T.bounce.defaults={frequency:300,friction:200},T.forceWithGravity.defaults=T.gravity.defaults={bounciness:400,elasticity:200},T.easeInOut.defaults=T.easeIn.defaults=T.easeOut.defaults={friction:500},T.css=Y(function(t,e){return y(t,e,!0)}),T.animate=Y(function(t,e,n){var r;return null==n&&(n={}),n=x(n),d(n,{type:T.easeInOut,duration:1e3,delay:0,animated:!0}),n.duration=Math.max(0,n.duration*W),n.delay=Math.max(0,n.delay),0===n.delay?N(t,e,n):(r=T.setTimeout(function(){return N(t,e,n,r)},n.delay),m.push({id:r,el:t}))}),T.stop=Y(function(t,e){return null==e&&(e={}),null==e.timeout&&(e.timeout=!0),e.timeout&&(m=m.filter(function(n){return n.el!==t||null!=e.filter&&!e.filter(n)?!1:(T.clearTimeout(n.id),!0)})),p=p.filter(function(e){return e.el!==t})}),T.setTimeout=function(t,e){return h(t,e*W)},T.clearTimeout=function(t){return w(t)},T.toggleSlow=function(){return P=!P,W=P?3:1,"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log("dynamics.js: slow animations "+(P?"enabled":"disabled")):void 0},"object"==typeof module&&"object"==typeof module.exports?module.exports=T:"function"==typeof define&&define.amd?define(T):window.dynamics=T}).call(this);

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */ 
;(function(window) {

	'use strict';

	var bodyEl = document.body, 
		docElem = window.document.documentElement,
		support = { transitions: Modernizr.csstransitions },
		// transition end event name
		transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		onEndTransition = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		},
		// window sizes
		win = {width: window.innerWidth, height: window.innerHeight},
		// some helper vars to disallow scrolling
		lockScroll = false, xscroll, yscroll,
		scrollContainer = document.querySelector('.container'),
		// the main slider and its items
		sliderEl = document.querySelector('.classy-slider'),
		items = [].slice.call(sliderEl.querySelectorAll('.slide')),
		// total number of items
		itemsTotal = items.length,
		// navigation controls/arrows
		navRightCtrl = sliderEl.querySelector('.button--nav-next'),
		navLeftCtrl = sliderEl.querySelector('.button--nav-prev'),
		zoomCtrl = sliderEl.querySelector('.button--zoom'),
		// the main content element
		contentEl = document.querySelector('.content'),
		// close content control
		closeContentCtrl = contentEl.querySelector('button.slider-button--close'),
		// index of current item
		current = 0,
		// check if an item is "open"
		isOpen = false,
		isFirefox = typeof InstallTrigger !== 'undefined',
		// scale body when zooming into the items, if not Firefox (the performance in Firefox is not very good)
		bodyScale = isFirefox ? false : 3;

	// some helper functions:
	function scrollX() { return window.pageXOffset || docElem.scrollLeft; }
	function scrollY() { return window.pageYOffset || docElem.scrollTop; }
	// from http://www.sberry.me/articles/javascript-event-throttling-debouncing
	function throttle(fn, delay) {
		var allowSample = true;

		return function(e) {
			if (allowSample) {
				allowSample = false;
				setTimeout(function() { allowSample = true; }, delay);
				fn(e);
			}
		};
	}

	function init() {
		initEvents();
	}

	// event binding
	function initEvents() {
		// open items
		zoomCtrl.addEventListener('click', function() {
			openItem(items[current]);
		});

		// close content
		closeContentCtrl.addEventListener('click', closeContent);

		// navigation
		navRightCtrl.addEventListener('click', function() { navigate('right'); });
		navLeftCtrl.addEventListener('click', function() { navigate('left'); });

    var container = document.getElementById('sliderContainer') 
    var hammertime = new Hammer(container);
    hammertime.on('swipeleft', function() { navigate('right'); });
    hammertime.on('swiperight', function() { navigate('left'); });
    hammertime.on('tap', function() {openItem(items[current]);});
		// window resize
		window.addEventListener('resize', throttle(function(ev) {
			// reset window sizes
			win = {width: window.innerWidth, height: window.innerHeight};

			// reset transforms for the items (slider items)
			items.forEach(function(item, pos) {
				if( pos === current ) return;
				var el = item.querySelector('.slide__mover');
				dynamics.css(el, { translateX: el.offsetWidth });
			});
		}, 10));

		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			if( isOpen ) return; 
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		} );
	}

	// opens one item
	function openItem(item) {
		if( isOpen ) return;
		isOpen = true;

		// the element that will be transformed
		var zoomer = item.querySelector('.zoomer');
		// slide screen preview
		classie.add(zoomer, 'zoomer--active');
		// disallow scroll
		scrollContainer.addEventListener('scroll', noscroll);
		// apply transforms
		applyTransforms(zoomer);
		// also scale the body so it looks the camera moves to the item.
		if( bodyScale ) {
			dynamics.animate(bodyEl, { scale: bodyScale }, { type: dynamics.easeInOut, duration: 500 });
		}
		// after the transition is finished:
		onEndTransition(zoomer, function() {
			// reset body transform
			if( bodyScale ) {
				dynamics.stop(bodyEl);
				dynamics.css(bodyEl, { scale: 1 });
				
				// fix for safari (allowing fixed children to keep position)
				bodyEl.style.WebkitTransform = 'none';
				bodyEl.style.transform = 'none';
			}
			// no scrolling
			classie.add(bodyEl, 'noscroll');
			classie.add(contentEl, 'content--open');
			var contentItem = document.getElementById(item.getAttribute('data-content'))
			classie.add(contentItem, 'content__item--current');
			classie.add(contentItem, 'content__item--reset');


			// reset zoomer transform - back to its original position/transform without a transition
			classie.add(zoomer, 'zoomer--notrans');
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
		});
	}

	// closes the item/content
	function closeContent() {
		var contentItem = contentEl.querySelector('.content__item--current'),
			zoomer = items[current].querySelector('.zoomer');

		classie.remove(contentEl, 'content--open');
		classie.remove(contentItem, 'content__item--current');
		classie.remove(bodyEl, 'noscroll');
				
		if( bodyScale ) {
			// reset fix for safari (allowing fixed children to keep position)
			bodyEl.style.WebkitTransform = '';
			bodyEl.style.transform = '';
		}

		/* fix for safari flickering */
		var nobodyscale = true;
		applyTransforms(zoomer, nobodyscale);
		/* fix for safari flickering */

		// wait for the inner content to finish the transition
		onEndTransition(contentItem, function(ev) {
			classie.remove(this, 'content__item--reset');
			
			// reset scrolling permission
			lockScroll = false;
			scrollContainer.removeEventListener('scroll', noscroll);

			/* fix for safari flickering */
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			/* fix for safari flickering */
			
			// scale up - behind the scenes - the item again (without transition)
			applyTransforms(zoomer);
			
			// animate/scale down the item
			setTimeout(function() {	
				classie.remove(zoomer, 'zoomer--notrans');
				classie.remove(zoomer, 'zoomer--active');
				zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
				zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			}, 25);

			if( bodyScale ) {
				dynamics.css(bodyEl, { scale: bodyScale });
				dynamics.animate(bodyEl, { scale: 1 }, {
					type: dynamics.easeInOut,
					duration: 500
				});
			}

			isOpen = false;
		});
	}

	// applies the necessary transform value to scale the item up
	function applyTransforms(el, nobodyscale) {
		// zoomer area and scale value
		var zoomerArea = el.querySelector('.zoomer__area'), 
			zoomerAreaSize = {width: zoomerArea.offsetWidth, height: zoomerArea.offsetHeight},
			zoomerOffset = zoomerArea.getBoundingClientRect(),
			scaleVal = zoomerAreaSize.width/zoomerAreaSize.height < win.width/win.height ? win.width/zoomerAreaSize.width : win.height/zoomerAreaSize.height;

		if( bodyScale && !nobodyscale ) {
			scaleVal /= bodyScale; 
		}

		// apply transform
		el.style.WebkitTransform = 'translate3d(' + Number(win.width/2 - (zoomerOffset.left+zoomerAreaSize.width/2)) + 'px,' + Number(win.height/2 - (zoomerOffset.top+zoomerAreaSize.height/2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
		el.style.transform = 'translate3d(' + Number(win.width/2 - (zoomerOffset.left+zoomerAreaSize.width/2)) + 'px,' + Number(win.height/2 - (zoomerOffset.top+zoomerAreaSize.height/2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
	}

	// navigate the slider
	function navigate(dir) {
		var itemCurrent = items[current],
			currentEl = itemCurrent.querySelector('.slide__mover'),
			currentTitleEl = itemCurrent.querySelector('.slide__title');

		// update new current value
		if( dir === 'right' ) {
			current = current < itemsTotal-1 ? current + 1 : 0;
		}
		else {
			current = current > 0 ? current - 1 : itemsTotal-1;
		}

		var itemNext = items[current],
			nextEl = itemNext.querySelector('.slide__mover'),
			nextTitleEl = itemNext.querySelector('.slide__title');
		
		// animate the current element out
		dynamics.animate(currentEl, { opacity: 0, translateX: dir === 'right' ? -1*currentEl.offsetWidth/2 : currentEl.offsetWidth/2, rotateZ: dir === 'right' ? -10 : 10 }, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
			complete: function() {
				dynamics.css(itemCurrent, { opacity: 0, visibility: 'hidden' });
			}
		});

		// animate the current title out
		dynamics.animate(currentTitleEl, { translateX: dir === 'right' ? -250 : 250, opacity: 0 }, {
			type: dynamics.bezier,
			points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
			duration: 450
		});

		// set the right properties for the next element to come in
		dynamics.css(itemNext, { opacity: 1, visibility: 'visible' });
		dynamics.css(nextEl, { opacity: 0, translateX: dir === 'right' ? nextEl.offsetWidth/2 : -1*nextEl.offsetWidth/2, rotateZ: dir === 'right' ? 10 : -10 });

		// animate the next element in
		dynamics.animate(nextEl, { opacity: 1, translateX: 0 }, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
			complete: function() {
				items.forEach(function(item) { classie.remove(item, 'slide--current'); });
				classie.add(itemNext, 'slide--current');
			}
		});

		// set the right properties for the next title to come in
		dynamics.css(nextTitleEl, { translateX: dir === 'right' ? 250 : -250, opacity: 0 });
		// animate the next title in
		dynamics.animate(nextTitleEl, { translateX: 0, opacity: 1 }, {
			type: dynamics.bezier,
			points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
			duration: 650
		});
	}

	// disallow scrolling (on the scrollContainer)
	function noscroll() {
		if(!lockScroll) {
			lockScroll = true;
			xscroll = scrollContainer.scrollLeft;
			yscroll = scrollContainer.scrollTop;
		}
		scrollContainer.scrollTop = yscroll;
		scrollContainer.scrollLeft = xscroll;
	}

	init();

})(window);