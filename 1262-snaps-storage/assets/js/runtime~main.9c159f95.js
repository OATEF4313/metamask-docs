(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",520:"cb2c0fed",528:"9cea254b",531:"52198f09",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",1196:"72342e4f",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1588:"8145e54e",1595:"0929cc71",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2324:"55cd0004",2358:"a767f895",2416:"63b87658",2445:"c23d85eb",2520:"82c9c8ff",2675:"486ba757",2700:"d3bb2b22",2782:"3ee3d2fe",2844:"f8f7b6b2",2884:"3aa89498",2894:"3e112a3e",2971:"47fa8f02",2980:"3925c87d",3050:"5ca3871e",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3349:"c90162c2",3374:"f8a3ce18",3394:"b727baee",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3794:"d5f74ffe",3860:"ba7d2542",3967:"4ecdda4a",3984:"3583f8ee",4022:"6721d267",4050:"66ba7e9e",4057:"56aa118c",4081:"2150471b",4090:"e2728c97",4123:"c5900670",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4300:"fe7415f5",4520:"2a5de1af",4583:"1df93b7f",4662:"ee8e5690",4687:"c5e4f5c1",4698:"2e39c2b3",4787:"3720c009",4878:"d567f1f0",4900:"ef99a96d",4929:"6b469630",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5151:"55960ee5",5188:"37285b91",5246:"cf946124",5312:"19fab523",5351:"12c1839a",5354:"078c54a9",5484:"4c2d8e7b",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5892:"11b7fc92",5902:"da5317ac",6023:"a2353af7",6040:"b099eb42",6041:"94590018",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6832:"31bfc0a5",6875:"e1aa5429",6937:"5625bc05",6940:"090107f6",6969:"14eb3368",7441:"ab85252c",7540:"d70a1ef5",7553:"a850d815",7682:"015fe5e8",7775:"5e56b9d4",7785:"68c12626",8050:"0b387740",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8326:"5f3bb597",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8581:"935f2afb",8638:"037997aa",8691:"8329f30e",8705:"577b8b2a",8714:"1be78505",8738:"08d58aa6",8760:"ab3b18fd",8873:"fd49626c",8957:"652081cc",9071:"4ad67257",9175:"d2011f4f",9296:"674fb9f5",9329:"ef8d09aa",9355:"95c87532",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{53:"7f646f77",242:"4d270ee9",257:"67047443",289:"49f374ec",296:"43e51b67",416:"cd044015",520:"5e316f76",528:"2e3e3a47",531:"11f0388c",736:"fee94539",785:"f6cb3ef1",792:"31c6dd95",910:"73fb0c47",1196:"bd3f7538",1245:"4b021537",1266:"e58ed071",1273:"1aa82908",1343:"f49f4edf",1588:"10739ce7",1595:"73286665",1660:"89f43f67",1697:"ed0003d5",1717:"04390cc1",1733:"d41db444",1774:"93445f1c",1784:"4039a3ab",1874:"f7fba140",1891:"42cedcf3",1926:"16a39992",1930:"65aedce4",1969:"8e96a428",2138:"55088491",2146:"8ad845cb",2166:"03e48613",2169:"3477c3b2",2324:"88af2b02",2358:"8fc06970",2416:"43d51fc7",2445:"35b3f7fb",2520:"ce4a070b",2675:"37655b3a",2700:"6627b31b",2782:"d2972397",2844:"0472bcab",2884:"e71a0932",2894:"1a288974",2971:"d50ce862",2980:"9a606a34",3050:"66c9d022",3056:"f7da7498",3102:"9d533ff3",3235:"659e243a",3241:"b8ba4949",3349:"ded8ec52",3374:"964900aa",3394:"a59ca003",3442:"d94ee275",3499:"702da669",3523:"ee3f560a",3557:"190ebd63",3582:"81dba38d",3623:"f68bacaa",3692:"dbcf753a",3794:"56c343da",3860:"3bd7a9a2",3967:"e6151f41",3984:"f8c21d13",4022:"acffe326",4050:"ca879e83",4057:"a597662c",4081:"4e204d31",4090:"ac274525",4123:"747f5ab6",4151:"f4ad923c",4209:"f72dacfc",4279:"986e0bde",4300:"472efc2f",4520:"8bc48c74",4583:"ed2eab5e",4662:"fcc069f4",4687:"6c0813c8",4698:"7ffe6207",4787:"6d6c9908",4878:"02a55d72",4900:"1ff78d31",4929:"fef14469",4933:"97abb76a",4939:"3a14551f",4961:"2407a5de",5044:"ddc3cd4c",5151:"86d7d23b",5188:"99eef14e",5246:"9d79e302",5312:"376f0057",5351:"e4d978da",5354:"db57b49d",5484:"8a38b294",5569:"455f35fe",5586:"cae5f39b",5593:"99880ae0",5685:"edbbd94e",5690:"9b62f904",5693:"5ba9caa1",5892:"ba5b2a6f",5902:"ae508b69",6023:"40438104",6040:"8a184a8e",6041:"b4b726cb",6095:"fa327539",6213:"53275bed",6286:"38975ad8",6325:"ee9ea439",6333:"d581c255",6373:"9a4067d1",6433:"6780dfbb",6594:"195bdd98",6694:"397a217d",6744:"de69487c",6764:"e9317596",6832:"33d18067",6875:"16b1af80",6937:"0cfe6ae1",6940:"442edac2",6969:"016c2881",7113:"79b61b81",7195:"b658c23d",7441:"cfa3fc36",7540:"34de2ceb",7553:"467a345c",7682:"d61d44d7",7775:"b0847d73",7785:"b7371b62",7996:"a6d5cceb",8050:"cca19ab9",8055:"b5cceacb",8228:"5687ef59",8280:"541415a7",8298:"acb7e211",8317:"ea66d02a",8326:"d796d1c9",8401:"f9349c4c",8428:"cf998df7",8483:"1781a8c8",8581:"64747941",8638:"d716dffe",8691:"8fa1448f",8705:"53dfd835",8714:"b5daaf67",8738:"db231405",8760:"2429e86c",8873:"cb237158",8913:"a65b2f19",8957:"11e1bbf9",9071:"037deab4",9175:"1bf18e09",9296:"3efef497",9329:"149f3579",9355:"e1e1b280",9375:"d0623ee5",9400:"b2c11427",9462:"1e733e84",9477:"091736c8",9545:"614629f8",9566:"34345908",9588:"474216bb",9594:"0934b2b1",9631:"304b7fda",9664:"0dac39ed",9703:"39f17df5",9944:"b6bfb390",9987:"83e02d60"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="metamask-docs:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==d+f){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/1262-snaps-storage/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296",cb2c0fed:"520","9cea254b":"528","52198f09":"531",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910","72342e4f":"1196","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","8145e54e":"1588","0929cc71":"1595","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169","55cd0004":"2324",a767f895:"2358","63b87658":"2416",c23d85eb:"2445","82c9c8ff":"2520","486ba757":"2675",d3bb2b22:"2700","3ee3d2fe":"2782",f8f7b6b2:"2844","3aa89498":"2884","3e112a3e":"2894","47fa8f02":"2971","3925c87d":"2980","5ca3871e":"3050","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235",c90162c2:"3349",f8a3ce18:"3374",b727baee:"3394","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692",d5f74ffe:"3794",ba7d2542:"3860","4ecdda4a":"3967","3583f8ee":"3984","6721d267":"4022","66ba7e9e":"4050","56aa118c":"4057","2150471b":"4081",e2728c97:"4090",c5900670:"4123","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",fe7415f5:"4300","2a5de1af":"4520","1df93b7f":"4583",ee8e5690:"4662",c5e4f5c1:"4687","2e39c2b3":"4698","3720c009":"4787",d567f1f0:"4878",ef99a96d:"4900","6b469630":"4929",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","55960ee5":"5151","37285b91":"5188",cf946124:"5246","19fab523":"5312","12c1839a":"5351","078c54a9":"5354","4c2d8e7b":"5484",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693","11b7fc92":"5892",da5317ac:"5902",a2353af7:"6023",b099eb42:"6040",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","31bfc0a5":"6832",e1aa5429:"6875","5625bc05":"6937","090107f6":"6940","14eb3368":"6969",ab85252c:"7441",d70a1ef5:"7540",a850d815:"7553","015fe5e8":"7682","5e56b9d4":"7775","68c12626":"7785","0b387740":"8050",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317","5f3bb597":"8326",f5000f06:"8428","78eb1577":"8483","935f2afb":"8581","037997aa":"8638","8329f30e":"8691","577b8b2a":"8705","1be78505":"8714","08d58aa6":"8738",ab3b18fd:"8760",fd49626c:"8873","652081cc":"8957","4ad67257":"9071",d2011f4f:"9175","674fb9f5":"9296",ef8d09aa:"9329","95c87532":"9355","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={2973:0,1869:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|2973)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();