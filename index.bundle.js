(()=>{"use strict";var e={11:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([e.id,'.toggle{display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:18px}.toggle span.switcher{position:relative;width:200px;height:50px;border-radius:25px;margin:20px 0}.toggle span.switcher input{appearance:none;position:relative;width:200px;height:50px;border-radius:25px;background-color:#1e1e1e;outline:none;font-family:"Oswald",sans-serif}.toggle span.switcher input:before,.toggle span.switcher input:after{z-index:2;position:absolute;top:50%;transform:translateY(-50%);color:#fff}.toggle span.switcher input:before{content:"°C";left:20px}.toggle span.switcher input:after{content:"°F";right:20px}.toggle span.switcher label{z-index:1;position:absolute;top:10px;bottom:10px;border-radius:20px}.toggle span.switcher.switcher-1 input{transition:.25s -0.1s}.toggle span.switcher.switcher-1 input:checked{background-color:#fff}.toggle span.switcher.switcher-1 input:checked:before{color:#fff;transition:color .5s .2s}.toggle span.switcher.switcher-1 input:checked:after{color:#ccc;transition:color .5s}.toggle span.switcher.switcher-1 input:checked+label{left:10px;right:100px;background:#1e1e1e;transition:left .5s,right .4s .2s}.toggle span.switcher.switcher-1 input:not(:checked){background:#1e1e1e;transition:background .5s -0.1s}.toggle span.switcher.switcher-1 input:not(:checked):before{color:#ccc;transition:color .5s}.toggle span.switcher.switcher-1 input:not(:checked):after{color:#1e1e1e;transition:color .5s .2s}.toggle span.switcher.switcher-1 input:not(:checked)+label{left:100px;right:10px;background:#fff;transition:left .4s .2s,right .5s,background .35s -0.1s}.toggle span.switcher.switcher-2{overflow:hidden}.toggle span.switcher.switcher-2 input{transition:background-color 0s .5s}.toggle span.switcher.switcher-2 input:before{color:#1e1e1e}.toggle span.switcher.switcher-2 input:after{color:#fff}.toggle span.switcher.switcher-2 input:checked{background-color:#fff}.toggle span.switcher.switcher-2 input:checked+label{background:#fff;animation:turn-on .5s ease-out}@keyframes turn-on{0%{left:100%}100%{left:0%}}.toggle span.switcher.switcher-2 input:not(:checked){background:#1e1e1e}.toggle span.switcher.switcher-2 input:not(:checked)+label{background:#1e1e1e;animation:turn-off .5s ease-out}@keyframes turn-off{0%{right:100%}100%{right:0%}}.toggle span.switcher.switcher-2 label{top:0px;width:200px;height:50px;border-radius:25px}',""]);const c=a},208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center; \n  background-color: #222831;\n}\n\n.condition{\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.container{\n  width: 80vw;\n  height: 90vh;\n  /* background-color: grey; */\n  display: grid; \n  grid-template-columns: 3fr 1fr; \n  /* align-items: center; */\n  /* justify-items: center; */\n  /* background-image: url('./images/sunny.jpg'); */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size:cover; \n  padding: 0 3%;\n  border-radius: 20px;\n}\n\n.mainContent{\n  /* background-color: brown; */\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  /* align-items: center;  */\n  /* align-content: space-between; */\n  gap: 10%;\n  width: 100%;\n  height: 100%; \n  padding-right: 5%;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.upperDiv{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: start;\n  width: 100%;\n}\n\n.tempInfo{\n  /* background-color: white; */\n  padding: 5%;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  text-transform: uppercase; \n}\n\n.upperDiv .temp{\n   display: flex; \n  }\n\n.upperDiv .tempNo{ \n  font-size: 8rem;\n  font-weight: 800; \n  padding: 0;  \n  margin: 0;\n}\n.upperDiv .degree{\n  margin-top: 20px;\n  font-size: 2rem;\n  font-weight: 800; \n  /* padding-top:20px; */\n  } \n\n.upperDiv .name{\n  font-size: 2em;\n  font-weight: 800; \n}\n \n.lowerdiv{\n  display: flex; \n  width: 100%;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: white;\n  opacity: 90%;\n  border-radius: 15px;\n  height: 15%;\n   \n}\n\n.lowerdiv span{\n  display: flex;\n  flex-direction: column; \n  align-items: center; \n  gap: 15px;\n}\n.input{\n  display: flex; \n  gap: 10px;\n}\n\n.input > input {\n  padding: 10px;\n  border: none;\n  border-radius: 10px; \n  font-size: 18px;\n}\n\n.lowerdiv > span > h1 {\n  text-transform: uppercase;\n  font-weight: 600\n}\n\n.input > button{\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: #222831;\n  color: whitesmoke;\n  text-transform: uppercase;\n  font-weight: 800;\n}\n\n.extraContent{\n  /* background-color: gold; */\n  display: flex;\n  justify-content: center; \n  padding: 2% 0;\n\n}  \n \n#content{\n  /* background-color: red; */\n  display: flex;  \n  flex-direction: column-reverse;  \n  gap: 4%;\n  width: 100%;\n  height: 100%;\n}\n\n.card{ \n  padding: 5%;\n  background-color: white;\n  opacity: 95%;\n  height: 100%;\n  width: 100%; \n  border: 1px solid white;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; \n\n  }\n\n.cityContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n}\n\n.city-data div{\n  display: flex;\n  /* justify-content: space-between; */\n  align-items: center;\n  line-height: 10px;\n  justify-content: space-between;\n  width: 100%;\n  gap: 15px;\n}\n\n.city-data div span{\n  /* justify-self: start; */\n  line-height: 13px;\n  width: 80px;\n \n}\n\n.city-data div img{\n  /* justify-self: start; */\n  height: 6.5vh;\n  width: 3vw;\n}\n\n\n.card .temperature{\n  text-transform: uppercase;\n  /* font-weight: 600; */\n  font-size: 4rem;\n}\n\n.card .city-name{\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 1rem;\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var g=i(h,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:g,references:1})}a.push(l)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=t(o[a]);n[c].references--}for(var s=r(e,i),d=0;d<o.length;d++){var p=t(o[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=class{constructor(){}async callApi(e){try{let n=await fetch(`https://api.weatherapi.com/v1/current.json?key=${e.nothing}&q=${e.location}`);if(!n.ok)throw new Error(`Error fetching data: ${n.statusText}`);return await n.json()}catch(e){return console.error("API Error:",e),null}}async getData(e){const n={nothing:"ffba2972a8024ab081765340240405",location:e};return await this.callApi(n)}},n=t.p+"5317c2100fa27eda648f.png",r=t.p+"c4651c3ad46622c48866.png",i=t.p+"2645d6367995feb06ec6.jpg",o=t.p+"c4b457e1c740d51781b1.jpg",a=class{constructor(e,n){this.location=e,this.tempUnit=n}display(){const e=this.location,t=this.tempUnit,a="F"===t?e.temp_f:e.temp_c,c=document.createElement("div");if(c.className="card",3!==e.obj_index){{const t=document.createElement("div");t.className="city-name",t.innerText=e.city_name;const i=document.createElement("div");i.className="temperature",i.innerText=`${Math.round(a)}°`;const o=document.createElement("div");o.className="city-data";const s=document.createElement("div");s.className="cond";const d=document.createElement("span");d.innerText=`${e.condition.text}`;const p=document.createElement("img");p.src=`${e.condition.icon}`,s.appendChild(p),s.appendChild(d);const l=document.createElement("div");l.className="wind";const u=document.createElement("span");u.innerText=`${e.wind_mph} mph`;const h=document.createElement("img");h.src=n,l.appendChild(h),l.appendChild(u);const g=document.createElement("div");g.className="humidity";const f=document.createElement("span");f.innerText=`${e.humidity} %`;const m=document.createElement("img");m.src=r,g.appendChild(m),g.appendChild(f),o.appendChild(s),o.appendChild(l),o.appendChild(g),c.appendChild(t);const y=document.createElement("div");y.className="cityContainer",y.appendChild(i),y.appendChild(o),c.appendChild(y)}return c}{const n=document.querySelector(".container");let r=i;e.condition.text.includes("rain")&&(r=o),n.style.backgroundImage=`url('${r}')`,document.querySelector(".name").innerText=e.city_name,document.querySelector(".tempNo").innerText=`${Math.round(a)}`,document.querySelector(".degree").innerText=`°${t}`,document.querySelector(".condition").innerText=`${e.condition.text}`,document.querySelector(".mainWind").innerText=`${e.wind_mph} mph`,document.querySelector(".mainHumidity").innerText=`${e.humidity} %`,document.querySelector(".mainRain").innerText=`${e.precip} %`}}};var c=t(72),s=t.n(c),d=t(825),p=t.n(d),l=t(659),u=t.n(l),h=t(56),g=t.n(h),f=t(540),m=t.n(f),y=t(113),w=t.n(y),x=t(208),b={};b.styleTagTransform=w(),b.setAttributes=g(),b.insert=u().bind(null,"head"),b.domAPI=p(),b.insertStyleElement=m(),s()(x.A,b),x.A&&x.A.locals&&x.A.locals;var v=t(11),k={};k.styleTagTransform=w(),k.setAttributes=g(),k.insert=u().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=m(),s()(v.A,k),v.A&&v.A.locals&&v.A.locals,(new class{constructor(){this.locations=["Abbotsford, BC","Hope, BC","Calgary, AB","Makhu"],this.tempUnit="F"}addLocation(e){this.locations.includes(e)?console.log("Location already exists in the list."):(this.locations.shift(),this.locations.push(e),console.log(`Location '${e}' added.`))}toggleTempUnit(){"C"===this.tempUnit?this.tempUnit="F":this.tempUnit="C"}async create(){await this.render(),this.processInput(),this.processTempToggle()}async render(){let e=await this.getWeatherData();this.displayData(e)}displayData(e){const n=document.getElementById("content");n.innerText="",e.forEach((e=>{let t=new a(e,this.tempUnit).display();t&&n.appendChild(t)}))}getUserInput(){return document.getElementById("location").value}processInput(){document.getElementById("submitButton").addEventListener("click",(async e=>{let n=this.getUserInput();this.addLocation(n),this.render()}))}processTempToggle(){document.getElementById("switcher-2").addEventListener("click",(async e=>{this.toggleTempUnit(),this.render()}))}async getWeatherData(){let e=this.locations,n=[];for(const t of e){let e=await this.addToWeatherData(t);e&&n.push(e)}return n}async addToWeatherData(e){let n=await this.getWeatherResults(e);if(n)return this.createCityWeatherObj(n,e)}createCityWeatherObj(e,n){return{city_name:e.location.name,city_region:e.location.region,local_time:e.location.localtime,country:e.location.country,temp_c:e.current.temp_c,temp_f:e.current.temp_f,condition:e.current.condition,last_updated:e.current.last_updated,wind_mph:e.current.wind_mph,humidity:e.current.humidity,precip:e.current.precip_mm,obj_index:this.getIndex(n)}}getIndex(e){return this.locations.indexOf(e)}async getWeatherResults(n){const t=new e;return await t.getData(n)}}).create()})()})();