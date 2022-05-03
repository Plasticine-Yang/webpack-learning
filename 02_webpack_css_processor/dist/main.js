(()=>{"use strict";var n={711:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(117),o=t.n(r),a=t(488),c=t.n(a)()(o());c.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 64px;\n  height: 100%;\n  width: 100%;\n  background-color: #1d3557;\n}\n.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n  width: 500px;\n  border-radius: 20px;\n  box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);\n  background-color: #a8dadc;\n}\n.box p {\n  font-size: 48px;\n  font-weight: 700;\n  color: #8d99ae;\n}\n",""]);const i=c},374:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(117),o=t.n(r),a=t(488),c=t.n(a)()(o());c.push([n.id,":-webkit-full-screen {\n  padding: 10px;\n  background-color: cyan;\n}\n:-ms-fullscreen {\n  padding: 10px;\n  background-color: cyan;\n}\n:fullscreen {\n  padding: 10px;\n  background-color: cyan;\n}\n",""]);const i=c},702:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(117),o=t.n(r),a=t(488),c=t.n(a)()(o());c.push([n.id,".circle{height:300px;width:300px;background-color:#f1faee;border-radius:50%}",""]);const i=c},488:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},117:n=>{n.exports=function(n){return n[1]}},590:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},804:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},980:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},98:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},937:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},776:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(590),e=t.n(n),r=t(937),o=t.n(r),a=t(804),c=t.n(a),i=t(98),s=t.n(i),d=t(980),l=t.n(d),u=t(776),p=t.n(u),f=t(711),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var h=t(702),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var y=t(374),b={};function g(n,e){const t=document.createElement(n);return t.className=e,t}b.styleTagTransform=p(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,(()=>{const n=g("div","box");n.innerHTML="\n    <p>Hello Webpack!</p>\n  ";const e=g("div","circle"),t=g("div","circle");document.body.appendChild(e),document.body.appendChild(n),document.body.appendChild(t)})()})()})();