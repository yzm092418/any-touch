(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1c0431a3":"38283c82","chunk-2d20fb2a":"b8a31576","chunk-2d22277b":"9253f717","chunk-3a6c4070":"22b67196"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-1c0431a3":1,"chunk-3a6c4070":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1c0431a3":"6d8aad9e","chunk-2d20fb2a":"31d6cfe0","chunk-2d22277b":"31d6cfe0","chunk-3a6c4070":"995ac5f3"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],i={name:"App"},c=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"ovh"},[n("header",[t._m(0),n("a",{staticClass:"link",attrs:{target:"_new",href:"https://github.com/any86/any-touch"}},[t._v("文档")]),n("router-link",{staticClass:"link",attrs:{to:"/topology"}},[t._v("SVG")]),n("a",{staticClass:"link",attrs:{href:"https://any86.github.io/photo-touch"}},[t._v("canvas")])],1),n("article",{ref:"panel",staticClass:"panel"},t._l(t.styles,(function(e,r){var a=e.top,o=e.left,i=e.zIndex,c=e.scale,u=e.angle;return n("div",{key:r,ref:"circle",refInFor:!0,class:["circle"],style:{top:a,left:o,zIndex:i,transform:"scale("+c+") rotate("+u+"deg)"},attrs:{index:r},on:{at:t.onTouch,"at:after":function(e){return t.onAfter(e,r)},panstart:function(e){return t.onPanstart(e,r)},panmove:function(e){return t.onPanmove(e,r)},pandown:function(e){return t.onPandown(e,r)},swipe:function(e){return t.onSwipe(e,r)},pinch:function(e){e.match()&&t.onPinch(e,r)},rotate:function(e){e.match()&&t.onRotate(e,r)},transitionend:function(e){return t.onTransitionend(e,r)}}},[n("p",{staticStyle:{"font-size":"16px","border-bottom":"1px dashed #fff"}},[t._v("👋可拖拽 / 缩放等...")]),n("p",[t._v("Top: "+t._s(a))]),n("p",[t._v("Left: "+t._s(o))]),n("p",[t._v("Scale: "+t._s(c))]),n("p",[t._v("Angle: "+t._s(u))])])})),0),n("article",{staticClass:"info p-2 mt-6"},[t.data.type?[n("h1",[t._v(t._s(t.data.type))]),n("table",[t._m(1),t._l(t.map,(function(e){var r=e.key,a=e.desc;return[t.data[r]?n("tr",{key:r},[n("td",[t._v(t._s(r))]),n("td",[t._v(t._s(t.data[r]))]),n("td",[t._v(t._s(a))])]):t._e()]}))],2)]:n("div",{staticClass:"info__tip"},[n("b",{staticClass:"mb-1"},[t._v("👋 支持:")]),n("span",[t._v("tap(点击)")]),n("span",[t._v("press(按)")]),n("span",[t._v("pan(拖拽)")]),n("span",[t._v("swipe(划)")]),n("span",[t._v("pinch(捏合)")]),n("span",[t._v("rotate(旋转)")])]),n("span",{staticClass:"btn-add",on:{click:t.add}},[t._v("添加一个(第"+t._s(t.styles.length+1)+"个)")])],2)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{target:"_new",href:"https://github.com/any86/any-touch"}},[n("img",{attrs:{width:"100",src:"https://img.shields.io/github/stars/any86/any-touch?style=social"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{align:"left"}},[n("th",[t._v("键值")]),n("th",[t._v("值")]),n("th",[t._v("说明")])])}],p=(n("99af"),n("caad"),n("d81d"),n("b0c0"),n("2532"),n("bc3a"),n("b047"),n("e02c")),h=n.n(p);function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff";console.log("%c".concat(t),"color:".concat(n,";background-color:").concat(e,";padding:2px 6px;border-radius:4px;"))}var m={name:"Home",data:function(){return{map:[{key:"baseType",desc:"基础事件名"},{key:"x",desc:"触点中心X坐标"},{key:"y",desc:"触点中心Y坐标"},{key:"deltaX",desc:"X轴位移增量"},{key:"deltaY",desc:"Y轴位移增量"},{key:"displacementX",desc:"X轴位移(矢量)"},{key:"displacementY",desc:"Y轴位移(矢量)"},{key:"distanceX",desc:"X轴移动距离"},{key:"distanceY",desc:"Y轴移动距离"},{key:"distance",desc:"X轴Y轴的合距离"},{key:"speedX",desc:"X轴移动速度(矢量)"},{key:"speedY",desc:"Y轴移动速度(矢量)"},{key:"velocityX",desc:"X轴移动速率"},{key:"velocityY",desc:"Y轴移动速率"},{key:"deltaScale",desc:"每次触发pinch的缩放增量"},{key:"scale",desc:"一个识别周期pinch的累计缩放量"},{key:"deltaAngle",desc:"每次触发rotate的选装增量"},{key:"angle",desc:"一个识别周期rotate的累计选装量"}],action:"",data:{},styles:[{left:"50px",top:"160px",zIndex:1,scale:1,angle:0},{left:"50px",top:"320px",zIndex:1,scale:1,angle:0},{left:"50px",top:"480px",zIndex:1,scale:1,angle:0}]}},mounted:function(){var t=h()(this.$refs.panel,{preventDefault:!0});t.use(h.a.Tap,{name:"doubletap",tapTimes:2});var e=null;t.beforeEach((function(n,r){"tap"===n.name?(clearTimeout(e),e=setTimeout((function(){var e=[h.a.STATUS_POSSIBLE,h.a.STATUS_FAILED].includes(t.map.doubletap.status);e&&r()}),300)):r()})),t.on("at:after",this.afterEach),t.on("doubletap",(function(t){console.log("doubletap")})),t.on("tap",(function(t){console.log("tap")}))},methods:{add:function(){var t={left:"50px",top:"160px",zIndex:1,scale:1,angle:0};this.styles.push(t)},onAfter:function(t){t.currentTarget.setAttribute("at",t.name)},onTouch:function(t){"start"===t.stage&&t.currentTarget.setAttribute("at",""),t.currentTarget.setAttribute("at-stage",t.stage)},afterEach:function(t){this.action=t.name,this.$set(this,"data",t)},onRotate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.styles[e].angle+=t.deltaAngle},onPinch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.styles[e].scale=Math.round(this.styles[e].scale*t.deltaScale*100)/100},onRotate1:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.styles[e].angle+=t.deltaAngle},onPinch1:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.styles[e].scale=Math.round(this.styles[e].scale*t.deltaScale*100)/100},onTransitionend:function(t,e){},onTap:function(t){E(t.type,"#f10")},onPress:function(t){E(t.type,"#710")},onSwipe:function(t,e){var n=t.speedX,r=t.speedY;this.styles[e].top=Math.round(parseInt(this.styles[e].top)+120*r)+"px",this.styles[e].left=Math.round(parseInt(this.styles[e].left)+120*n)+"px"},onPanstart:function(t,e){for(var n in this.styles)this.styles[n].zIndex=n==e?2:1},onPanmove:function(t,e){this.styles[e].top=parseInt(this.styles[e].top)+t.deltaY+"px",this.styles[e].left=parseInt(this.styles[e].left)+t.deltaX+"px"},onPandown:function(t,e){}}},y=m,g=(n("21bb"),Object(u["a"])(y,d,v,!1,null,null,null)),b=g.exports;r["a"].use(f["a"]);var T=[{path:"/",name:"home",component:b},{path:"/target",name:"target",component:function(){return n.e("chunk-2d20fb2a").then(n.bind(null,"b578"))}},{path:"/p",name:"p",component:function(){return n.e("chunk-1c0431a3").then(n.bind(null,"2db2"))}},{path:"/use",name:"use",component:function(){return n.e("chunk-2d22277b").then(n.bind(null,"cf79"))}},{path:"/topology",name:"Topology",component:function(){return n.e("chunk-3a6c4070").then(n.bind(null,"2c4c"))}}],_=new f["a"]({routes:T}),L=_;n("b7b3");r["a"].config.productionTip=!1,new r["a"]({router:L,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},e02c:function(t,e,n){var r,a;n("a4d3"),n("e01a"),n("d28b"),n("a623"),n("c740"),n("4160"),n("a630"),n("caad"),n("c975"),n("d81d"),n("13d5"),n("a434"),n("b0c0"),n("a9e3"),n("aff5"),n("dca8"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var o=n("7037");(function(i,c){"object"===o(e)&&"undefined"!==typeof t?t.exports=c():(r=c,a="function"===typeof r?r.call(e,n,e,t):r,void 0===a||(t.exports=a))})(0,(function(){"use strict";
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var t=function(){return t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},t.apply(this,arguments)};function e(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}function n(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,a,o=n.call(t),i=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)i.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(a)throw a.error}}return i}function a(){var t={},e=function(e,r,a){var o,i,c=Array.isArray(e)?e:[e];try{for(var u=n(c),s=u.next();!s.done;s=u.next()){var l=s.value;void 0===t[l]&&(t[l]=[]),r.beforeEmit=a,t[l].push(r)}}catch(f){o={error:f}}finally{try{s&&!s.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}},r=function(e,r){var a,o,i=t[e];if(void 0!==i&&0<i.length)try{for(var c=n(i),u=c.next();!u.done;u=c.next()){var s=u.value;void 0===s.beforeEmit?s(r):void 0!==r&&s.beforeEmit(r)&&s(r)}}catch(l){a={error:l}}finally{try{u&&!u.done&&(o=c.return)&&o.call(c)}finally{if(a)throw a.error}}},a=function(e,n){var r=t[e];if(void 0!==r)if(void 0===n)delete t[e];else{var a=r.findIndex((function(t){return t===n}));r.splice(a,1)}};function o(){t={}}return[e,a,r,o]}var o=Object.prototype.toString;function i(t){return"[object RegExp]"===o.call(t)}function c(t){return"[object Function]"===o.call(t)}var u,s,l,f,d,v=!!window.wx,p="clientX",h="clientY",E=16;function m(t){return Math.round(100*t)/100}(function(t){t["START"]="start",t["MOVE"]="move",t["END"]="end",t["CANCEL"]="cancel"})(u||(u={})),function(t){t["LEFT"]="left",t["RIGHT"]="right",t["UP"]="up",t["DOWN"]="down"}(s||(s={})),function(t){t["START"]="touchstart",t["MOVE"]="touchmove",t["END"]="touchend",t["CANCEL"]="touchcancel"}(l||(l={})),function(t){t["UP"]="mouseup",t["MOVE"]="mousemove",t["DOWN"]="mousedown"}(f||(f={})),function(t){t[t["POSSIBLE"]=0]="POSSIBLE",t[t["START"]=1]="START",t[t["MOVE"]=2]="MOVE",t[t["END"]=3]="END",t[t["RECOGNIZED"]=4]="RECOGNIZED",t[t["FAILED"]=5]="FAILED",t[t["CANCELLED"]=6]="CANCELLED"}(d||(d={}));var y=!1;try{var g={};null===Object||void 0===Object||Object.defineProperty(g,"passive",{get:function(){y=!0}}),window.addEventListener("_",(function(){}),g)}catch(P){}var b=function(){return y};function T(){var e,n,r,a,o=0;return function(i){if(e=n,void 0!==i){o=Number.MAX_SAFE_INTEGER>o?++o:1;var c=L(i,o);n=c;var u=c.isStart,s=c.pointLength;return u&&(r=c,e=void 0,a=1<s?c:void 0),t(t({},c),{prevInput:e,startMultiInput:a,startInput:r})}}}function _(t){var e=t.length;if(0<e){if(1===e){var n=t[0],r=n.clientX,a=n.clientY;return{x:Math.round(r),y:Math.round(a)}}var o=t.reduce((function(t,e){return t.x+=e[p],t.y+=e[h],t}),{x:0,y:0});return{x:Math.round(o.x/e),y:Math.round(o.y/e)}}}function L(t,e){var n=t.stage,r=t.points,a=t.changedPoints,o=t.nativeEvent,i=r.length,c=u.START===n,s=u.END===n&&0===i||u.CANCEL===n,l=Date.now(),f=_(r)||_(a),d=f.x,v=f.y,p=o.currentTarget;return Object.assign(t,{id:e,x:d,y:v,timestamp:l,isStart:c,isEnd:s,pointLength:i,currentTarget:p,getOffset:function(t){void 0===t&&(t=p);var e=t.getBoundingClientRect();return{x:d-Math.round(e.left),y:v-Math.round(e.top)}}})}function O(){var t,e=!1,n=null,r=T();return function(a){var o,i=a.clientX,c=a.clientY,s=a.type,l=a.button,d=a.target,v=[{clientX:i,clientY:c,target:d}];f.DOWN===s&&0===l?(n=d,e=!0,o=u.START):e&&(f.MOVE===s?o=u.MOVE:f.UP===s&&(v=[],o=u.END,e=!1));var p=t||[{clientX:i,clientY:c,target:d}];if(t=[{clientX:i,clientY:c,target:d}],void 0!==o)return r({stage:o,changedPoints:p,points:v,target:n,targets:[n],nativeEvent:a})}}function x(t){var e=T();return function(n){var r=[],a=[];Array.from(n.touches).forEach((function(e){var n=e.clientX,o=e.clientY,i=e.target;(null===t||void 0===t?void 0:t.contains(i))&&(r.push(i),a.push({clientX:n,clientY:o,target:i}))}));var o=Array.from(n.changedTouches).map((function(t){var e=t.clientX,n=t.clientY,r=t.target;return{clientX:e,clientY:n,target:r}}));return e({stage:n.type.replace("touch",""),changedPoints:o,points:a,nativeEvent:n,target:n.target,targets:r})}}function A(t,n,r){n.target,n.currentTarget;var a,o=n.type,i=e(n,["target","currentTarget","type"]);return document.createEvent?(a=document.createEvent("HTMLEvents"),a.initEvent(o,null===r||void 0===r?void 0:r.bubbles,null===r||void 0===r?void 0:r.cancelable)):a=new Event(o,r),Object.assign(a,i,{match:function(){return n.targets.every((function(t){return a.currentTarget.contains(t)}))}}),t.dispatchEvent(a)}function S(t,e,n,r){if(void 0!==r&&null!==t&&!1!==n)for(var a in e)A(t,e[a],n)}function D(t,e){if(!e.isPreventDefault)return!1;var n=!0;if(null!==t.target){var r=e.preventDefaultExclude;if(i(r)){if("tagName"in t.target){var a=t.target.tagName;n=!r.test(a)}}else c(r)&&(n=!r(t))}return n}var C=[l.START,l.MOVE,l.END,l.CANCEL];function N(t,e,n){return C.forEach((function(r){t.addEventListener(r,e,n)})),v||(t.addEventListener(f.DOWN,e,n),window.addEventListener(f.MOVE,e,n),window.addEventListener(f.UP,e,n)),function(){C.forEach((function(n){t.removeEventListener(n,e)})),v||(t.removeEventListener(f.DOWN,e,n),window.removeEventListener(f.MOVE,e,n),window.removeEventListener(f.UP,e,n))}}var M={domEvents:{bubbles:!0,cancelable:!0},preventDefault:!0,preventDefaultExclude:/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/},w="at";function I(e){void 0===e&&(e=[]);var o=function(o,i){var c,u,s=r(a(),4),d=s[0],v=s[1],p=s[2],h=s[3],E=t(t({},M),i),m={},y=[],g={};e.forEach((function(t){A(t)}));var T=x(o),_=O(),L=(c={},c[l.START]=T,c[l.MOVE]=T,c[l.END]=T,c[l.CANCEL]=T,c[f.DOWN]=_,c[f.MOVE]=_,c[f.UP]=_,c);function A(t,e){var n=t(e);y.push(n);var r=n[0].name,a=n[2];g[r]=n[0],a.forEach((function(t){var e=t._id;m[e]=t()}))}function C(t){u=t}function I(e){var a,i;D(e,E)&&e.preventDefault();var c=L[e.type](e);if(void 0!==c){var s=w+":"+c.stage;p(w,c),p(w+":"+c.stage,c);var l=e.target,f=E.domEvents;S(l,[t(t({},c),{type:w}),t(t({},c),{type:s})],f,o);var d=c;for(var v in m){var h=m[v];Object.assign(d,h(d))}var g=function(e,n){var r=e.name;n(d,(function(n){var a=t(t({},d),{type:n,name:r});null===Object||void 0===Object||Object.freeze(a),void 0===u?P(n,a):u(e,(function(){P(n,a)}))}))};try{for(var b=n(y),T=b.next();!T.done;T=b.next()){var _=r(T.value,2),O=_[0],x=_[1];g(O,x)}}catch(A){a={error:A}}finally{try{T&&!T.done&&(i=b.return)&&i.call(b)}finally{if(a)throw a.error}}}}function P(e,n){var r=w+":after",a=n.target;p(e,n),p(r,n),S(a,[n,t(t({},n),{_type:n.type,type:r})],E.domEvents,o)}function k(t){return{on:function(e,n){d(e,n,(function(e){var n=e.targets;return e.target===t&&n.every((function(e){return t.contains(e)}))}))}}}function V(t){return g[t]}function R(e){E=t(t({},E),e)}function j(t){var e,a;if(void 0===t)y=[],g={};else try{for(var o=n(y.entries()),i=o.next();!i.done;i=o.next()){var c=r(i.value,2),u=c[0],s=r(c[1],1),l=s[0];if(t===l.name){y.splice(u,1),delete g[t];break}}}catch(f){e={error:f}}finally{try{i&&!i.done&&(a=o.return)&&a.call(o)}finally{if(e)throw e.error}}}function X(){p("unbind"),h()}return void 0!==o&&(o.style.webkitTapHighlightColor="rgba(0,0,0,0)",d("unbind",N(o,I,!(E.preventDefault||!b())&&{passive:!0}))),{target:k,destroy:X,use:A,get:V,set:R,beforeEach:C,removeUse:j,map:g,catchEvent:I,on:d,off:v}};return o.version="0.8.0",o}I();var P,k=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},V=function(t,e){return t.x*e.x+t.y*e.y},R=function(t,e){var n=k(t)*k(e);if(0===n)return 0;var r=V(t,e)/n;return r>1&&(r=1),Math.acos(r)},j=function(t,e){return t.x*e.y-e.x*t.y},X=function(t){return t/Math.PI*180},Y=function(t,e){var n=R(t,e);return j(t,e)>0&&(n*=-1),X(n)};function F(t,e){return Math.abs(t)>Math.abs(e)?0<t?s.RIGHT:s.LEFT:Math.abs(t)<Math.abs(e)?0<e?s.DOWN:s.UP:void 0}function U(t){return{x:t.points[1][p]-t.points[0][p],y:t.points[1][h]-t.points[0][h]}}function B(t){var e=t.prevInput,n=t.startMultiInput;if(void 0!==n&&void 0!==e&&t.id!==n.id&&1<e.pointLength&&1<t.pointLength)return{startV:U(n),prevV:U(e),activeV:U(t)}}function G(){return function(t){var e=(null===t||void 0===t?void 0:t._vs)||B(t);if(void 0!==e&&e.activeV){var n=e.prevV,r=e.startV,a=e.activeV,o=Math.round(Y(a,n)),i=Math.round(Y(a,r));return{angle:i,deltaAngle:o,_vs:e}}}}function Z(){return function(t){var e=t.prevInput,n=0,r=0,a=0;if(void 0!==e&&(n=t.x-e.x,r=t.y-e.y,0!==n||0!==r)){var o=Math.sqrt(Math.pow(n,2)+Math.pow(r,2));a=Math.round(X(Math.acos(Math.abs(n)/o)))}return{deltaX:n,deltaY:r,deltaXYAngle:a}}}function z(){var t,e=0,n=0,r=0,a=0,o=0;return function(i){var c=i.stage,s=i.startInput;return u.START===c?(e=0,n=0,r=0,a=0,o=0):u.MOVE===c&&(e=Math.round(i.points[0][p]-s.points[0][p]),n=Math.round(i.points[0][h]-s.points[0][h]),r=Math.abs(e),a=Math.abs(n),o=Math.round(k({x:r,y:a})),t=F(e,n)),{displacementX:e,displacementY:n,distanceX:r,distanceY:a,distance:o,overallDirection:t}}}function $(){var t=0;return function(e){var n=e.stage;return u.START===n&&(t=e.pointLength),{maxPointLength:t}}}function W(){return function(t){var e=(null===t||void 0===t?void 0:t._vs)||B(t);if(void 0!==e&&e.activeV){var n=e.prevV,r=e.startV,a=e.activeV,o=m(k(a)/k(n)),i=m(k(a)/k(r));return{scale:i,deltaScale:o,_vs:e}}}}function H(){var t,e,n=0,r=0,a=0,o=0;return function(i){if(void 0!==i){var c=i.stage;e=e||i.startInput;var s=i.timestamp-e.timestamp;if(u.MOVE===c&&E<s){var l=i.x-e.x,f=i.y-e.y;a=Math.round(l/s*100)/100,o=Math.round(f/s*100)/100,n=Math.abs(a),r=Math.abs(o),t=F(l,f)||t,e=i}}return{velocityX:n,velocityY:r,speedX:a,speedY:o,direction:t}}}G._id="__ComputeAngle__",Z._id="__ComputeDeltaXY__",z._id="__ComputeDistance__",$._id="__ComputeMaxLength__",W._id="__ComputeScale__",H._id="__ComputeVAndDir__";var q=(P={},P[d.START]=u.START,P[d.MOVE]=u.MOVE,P[d.END]=u.END,P[d.CANCELLED]=u.CANCEL,P);function J(t,e,n){var r,a,o,i,c,s,l,f={1:(r={},r[d.POSSIBLE]=(a={},a[u.MOVE]=d.START,a[u.END]=d.FAILED,a[u.CANCEL]=d.FAILED,a),r[d.START]=(o={},o[u.MOVE]=d.MOVE,o[u.END]=d.END,o[u.CANCEL]=d.CANCELLED,o),r[d.MOVE]=(i={},i[u.MOVE]=d.MOVE,i[u.END]=d.END,i[u.CANCEL]=d.CANCELLED,i),r),0:(c={},c[d.START]=(s={},s[u.MOVE]=d.FAILED,s[u.END]=d.FAILED,s[u.CANCEL]=d.CANCELLED,s),c[d.MOVE]=(l={},l[u.START]=d.FAILED,l[u.MOVE]=d.FAILED,l[u.END]=d.END,l[u.CANCEL]=d.CANCELLED,l),c)},v=f[Number(t)][e];return void 0!==v&&v[n]||e}function K(t,e,n,r,a,o){var i=e(t),c=J(i,r,t.stage),u=[d.START,d.MOVE].includes(c);return o([u,c]),u&&a(n),(u||[d.END,d.CANCELLED].includes(c))&&a(n+q[c]),i}function Q(t){return[d.END,d.CANCELLED,d.RECOGNIZED,d.FAILED].includes(t)?d.POSSIBLE:t}function tt(t,e){var n=Object.assign({},t,e,{status:d.POSSIBLE,set:function(t,e){n[t]=e}});return n}var et={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function nt(e){var n,r,a,o=tt(et,e),i=0;function c(t){var e=t.startInput,n=t.pointLength,r=t.timestamp-e.timestamp,a=t.maxPointLength,i=t.distance;return a===o.pointLength&&0===n&&o.maxDistance>=i&&o.maxPressTime>r}function s(){var t=performance.now();if(void 0===r)return r=t,!0;var e=t-r;return r=t,e<o.waitNextTapTime}function l(){a=setTimeout((function(){o.status=d.FAILED,v()}),o.waitNextTapTime)}function f(){clearTimeout(a)}function v(){i=0,n=void 0,r=void 0}function p(t){if(void 0!==n){var e=k({x:t.x-n.x,y:t.y-n.y});return n=t,o.maxDistanceFromPrevTap>=e}return n=t,!0}function h(e,n){var r=e.stage,a=e.x,h=e.y;o.status=d.POSSIBLE,u.END===r&&(c(e)?(f(),p({x:a,y:h})&&s()?i++:i=1,0===i%o.tapTimes?(o.status=d.RECOGNIZED,n(o.name,t(t({},e),{tapCount:i})),v()):l()):(v(),o.status=d.FAILED))}return[o,h,[z,$]]}var rt={name:"pan",threshold:10,pointLength:1};function at(t){var e=tt(rt,t),n=!1;function a(t){var r=t.pointLength,a=t.distance;return(n||e.threshold<=a)&&e.pointLength===r}function o(t,o){e.status=Q(e.status);var i=void 0!==t.direction&&K(t,a,e.name,e.status,o,(function(t){var a=r(t,2),o=a[0],i=a[1];e.status=i,n=o}));i&&void 0!==t.direction&&o(e.name+t.direction)}return[e,o,[H,z,Z]]}var ot={name:"swipe",threshold:10,velocity:.3,pointLength:1};function it(t){var e=tt(ot,t);function n(t){if(u.END!==t.stage)return!1;var n=t.velocityX,r=t.velocityY,a=t.maxPointLength,o=t.distance;return e.pointLength===a&&e.threshold<o&&e.velocity<Math.max(n,r)}function r(t,r){e.status=d.POSSIBLE,n(t)&&(e.status=d.RECOGNIZED,r(e.name),r(e.name+t.direction))}return[e,r,[z,H,$]]}var ct={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function ut(t){var e,n=tt(ct,t);function r(t,r){var i=t.stage,c=t.startInput,l=t.pointLength;if(u.START===i&&n.pointLength===l)n.status=d.POSSIBLE,o(),e=setTimeout((function(){n.status=d.RECOGNIZED,r(n.name)}),n.minPressTime);else if(u.END===i&&d.RECOGNIZED===n.status)r(""+n.name+s.UP);else if(d.RECOGNIZED!==n.status){var f=t.timestamp-c.timestamp;(!a(t)||n.minPressTime>f&&[u.END,u.CANCEL].includes(i))&&(o(),n.status=d.FAILED)}}function a(t){var e=t.distance;return n.maxDistance>e}function o(){clearTimeout(e)}return[n,r,[z]]}var st={name:"pinch",threshold:0,pointLength:2};function lt(t){var e=tt(st,t),n=!1;function a(t){var r=t.pointLength,a=t.scale;return e.pointLength===r&&void 0!==a&&(e.threshold<Math.abs(a-1)||n)}function o(t,o){e.status=Q(e.status),K(t,a,e.name,e.status,o,(function(t){var a=r(t,2),o=a[0],i=a[1];e.status=i,n=o}))}return[e,o,[W]]}var ft={name:"rotate",threshold:0,pointLength:2};function dt(t){var e=tt(ft,t),n=!1;function a(t){var r=t.pointLength,a=t.angle;return e.pointLength===r&&(e.threshold<Math.abs(a)||n)}function o(t,o){e.status=Q(e.status),K(t,a,e.name,e.status,o,(function(t){var a=r(t,2),o=a[0],i=a[1];e.status=i,n=o}))}return[e,o,[G]]}function vt(){var t=I([nt,at,it,ut,lt,dt]);return t.Tap=nt,t.Pan=at,t.Swipe=it,t.Press=ut,t.Pinch=lt,t.Rotate=dt,t.STATUS_POSSIBLE=d.POSSIBLE,t.STATUS_START=d.START,t.STATUS_MOVE=d.MOVE,t.STATUS_END=d.END,t.STATUS_CANCELLED=d.CANCELLED,t.STATUS_FAILED=d.FAILED,t.STATUS_RECOGNIZED=d.RECOGNIZED,t}var pt=vt();return pt}))}});
//# sourceMappingURL=app.812424f9.js.map