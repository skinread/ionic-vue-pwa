if(!self.define){let i,e={};const s=(s,n)=>(s=new URL(s+".js",n).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(n,u)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const c=i=>s(i,o),r={module:{uri:o},exports:l,require:c};e[o]=Promise.all(n.map((i=>r[i]||c(i)))).then((i=>(u(...i),l)))}}define(["./workbox-4f586afe"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ionic-vue-pwa"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"ionic-vue-pwa/assets/icon/favicon.png",revision:"988be98f12b400c41a22b59b82cfeab6"},{url:"ionic-vue-pwa/assets/icon/icon.png",revision:"69e6f162abf8c9f65d6d8c73d7813f3e"},{url:"ionic-vue-pwa/assets/shapes.svg",revision:"e535ce83da20a4b7719ca3d45195ebd5"},{url:"ionic-vue-pwa/css/224.f740a5fb.css",revision:null},{url:"ionic-vue-pwa/css/515.f740a5fb.css",revision:null},{url:"ionic-vue-pwa/css/647.f740a5fb.css",revision:null},{url:"ionic-vue-pwa/css/app.b2af4829.css",revision:null},{url:"ionic-vue-pwa/index.html",revision:"30f726a1b9852edfd13cf1f9c4782c12"},{url:"ionic-vue-pwa/js/168.d45d53d2.js",revision:null},{url:"ionic-vue-pwa/js/224.44a06469.js",revision:null},{url:"ionic-vue-pwa/js/261.53a9cb2e.js",revision:null},{url:"ionic-vue-pwa/js/338.221c1e7b.js",revision:null},{url:"ionic-vue-pwa/js/456.a166c917.js",revision:null},{url:"ionic-vue-pwa/js/515.7d14a7cd.js",revision:null},{url:"ionic-vue-pwa/js/541.fc9c2c76.js",revision:null},{url:"ionic-vue-pwa/js/544.36381f57.js",revision:null},{url:"ionic-vue-pwa/js/576.04029422.js",revision:null},{url:"ionic-vue-pwa/js/647.ab64b208.js",revision:null},{url:"ionic-vue-pwa/js/753.05b3b433.js",revision:null},{url:"ionic-vue-pwa/js/775.2f627a98.js",revision:null},{url:"ionic-vue-pwa/js/78.7cd09ee2.js",revision:null},{url:"ionic-vue-pwa/js/880.da24978a.js",revision:null},{url:"ionic-vue-pwa/js/980.7d6309db.js",revision:null},{url:"ionic-vue-pwa/js/app.4279b35a.js",revision:null},{url:"ionic-vue-pwa/manifest.json",revision:"d436c4571f3e0e6084a62837f4f2a426"},{url:"ionic-vue-pwa/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
