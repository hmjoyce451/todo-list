(()=>{"use strict";var e,n,t,r,o,a,i,c,s,u,l={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".hello {\n    color: red;\n}\nbody {\n    margin: 0px;\n    font-family: Arial;\n  }\n.nav {\n    background: white;\n    overflow: hidden;\n    border-bottom: solid black 2px;\n  }\n  \n.nav a {\n    color: black;\n    float: left;\n    text-align: center;\n    padding: 10px 20px;\n    text-decoration: none;\n    font-size: 25px;\n  }\n  \n.nav a:hover {\n    background-color: rgba(201, 195, 195, 0.74);\n  }\n  \n.nav a.active {\n    background-color: #262429;\n    color: white;\n  }",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:d,updater:o(p,r),references:1}),i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},d={};function f(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={id:e,exports:{}};return l[e](t,t.exports,f),t.exports}f.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return f.d(n,{a:n}),n},f.d=(e,n)=>{for(var t in n)f.o(n,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},f.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=f(379),n=f.n(e),t=f(795),r=f.n(t),o=f(695),a=f.n(o),i=f(216),c=f.n(i),s=f(426),(u={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=f.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=a()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}}).domAPI=r(),u.insertStyleElement=c(),n()(s.Z,u),s.Z&&s.Z.locals&&s.Z.locals})();