(()=>{"use strict";var e,a,f,c,b,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=d,e=[],r.O=(a,f,c,b)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,c,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(b,d),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({111:"76ce5f9e",124:"7aec09c3",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",456:"53c5b6f9",520:"cb2c0fed",528:"9cea254b",531:"52198f09",555:"0d37097f",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",1088:"124521d0",1218:"95833ba0",1251:"e4a6d165",1266:"7d4adaa7",1273:"b91521d0",1521:"8c3a73e8",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1904:"645d7edb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2358:"a767f895",2416:"63b87658",2445:"c23d85eb",2520:"82c9c8ff",2675:"486ba757",2700:"d3bb2b22",2782:"3ee3d2fe",2844:"f8f7b6b2",2894:"3e112a3e",2971:"47fa8f02",2980:"3925c87d",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3349:"c90162c2",3374:"f8a3ce18",3405:"bffa6a82",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3726:"344514b0",3794:"d5f74ffe",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4057:"56aa118c",4081:"2150471b",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4300:"fe7415f5",4416:"ae96ae55",4520:"2a5de1af",4583:"1df93b7f",4607:"37abd818",4687:"c5e4f5c1",4698:"2e39c2b3",4787:"3720c009",4849:"c26c8f1e",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5151:"55960ee5",5188:"37285b91",5246:"cf946124",5312:"19fab523",5542:"aaa9d0a2",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5892:"11b7fc92",5996:"c219c238",6023:"a2353af7",6040:"b099eb42",6041:"94590018",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6333:"cd301271",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6832:"31bfc0a5",6875:"e1aa5429",6937:"5625bc05",6969:"14eb3368",7441:"ab85252c",7520:"0c33a535",7540:"d70a1ef5",7682:"015fe5e8",7775:"5e56b9d4",7785:"68c12626",7906:"67be8ad2",8050:"0b387740",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8581:"935f2afb",8638:"037997aa",8691:"8329f30e",8705:"577b8b2a",8714:"1be78505",8760:"ab3b18fd",8873:"fd49626c",8957:"652081cc",9071:"4ad67257",9099:"118ec0b0",9175:"d2011f4f",9329:"ef8d09aa",9355:"95c87532",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{111:"5c970387",124:"94b75dee",242:"670223a3",257:"fff5efdc",289:"0f3ffe7c",296:"5cf1187f",416:"cd044015",456:"5bbde69a",520:"ed798056",528:"2e3e3a47",531:"276d9c68",555:"8e21a336",736:"f229b309",785:"d01ab1c0",792:"eaaebd07",910:"f8929a17",1088:"22a40bf5",1095:"ed08fe72",1218:"c321b191",1245:"4b021537",1251:"79719c78",1266:"99d41622",1273:"4f20a8fa",1521:"8f7140af",1588:"c7a761bc",1660:"dcdc65cf",1697:"3d75ed3b",1717:"dec27b7a",1733:"23ee7697",1774:"93445f1c",1784:"b71fab0c",1874:"1721abf0",1891:"98bab1b2",1904:"768670a5",1926:"fe1efa1e",1930:"e05f2b52",1969:"f1cfa88b",2138:"55088491",2146:"2e2a4b7a",2166:"f6a066e6",2169:"88b669b1",2358:"95d93be6",2416:"8dd664e4",2445:"e2735892",2520:"a6230a54",2675:"ea7355bc",2700:"6627b31b",2782:"4b41fab4",2844:"a7ecd599",2894:"4c34ebba",2971:"91930d08",2980:"427862df",3056:"b7cb39ee",3102:"acca5385",3235:"93db82c6",3241:"b8ba4949",3349:"d7934853",3374:"a7985b50",3405:"b1348887",3442:"d1ef01bf",3499:"5a5c26b2",3523:"86e6e67f",3557:"1e076cd8",3582:"fd6f8be2",3623:"bd7a4ca8",3692:"8401cade",3726:"d4ee1672",3794:"1123c2d6",3860:"d9c34e26",3967:"945f51c1",4022:"76ad9a28",4050:"65f9d010",4057:"a597662c",4081:"4e204d31",4151:"3fec3fd0",4209:"fe993525",4279:"986e0bde",4300:"472efc2f",4416:"9f307def",4520:"d550d9b7",4583:"ed2eab5e",4607:"905f35bb",4687:"5e151164",4698:"5e58642e",4787:"6d6c9908",4849:"2c78bc10",4933:"5590fb30",4939:"e9f8673a",4961:"875c960d",5044:"436216d3",5151:"6a21a70e",5188:"5e0e8671",5246:"d7de69b5",5312:"7c6349d8",5542:"0f36464c",5569:"0d91a5ca",5586:"f6979b2f",5593:"4b0f6ecd",5685:"3e713201",5690:"5049a639",5693:"8fdc70c0",5892:"209337eb",5996:"44a630cf",6023:"1c33ec8d",6040:"8a184a8e",6041:"b4b726cb",6095:"005741a0",6213:"22f982f5",6286:"d3994ec0",6325:"0ac69fb6",6333:"a7319096",6373:"ab04e86b",6433:"ece00770",6594:"b1853c17",6694:"4a980db7",6744:"139242ca",6764:"be396286",6832:"01ae295c",6875:"c6af6e29",6937:"f7666388",6969:"016c2881",7113:"79b61b81",7195:"b658c23d",7441:"aaa19435",7520:"5b35b765",7540:"ccbf68c5",7682:"97edfc5b",7775:"a5094a57",7785:"d976f951",7906:"991df7b4",7996:"a6d5cceb",8050:"cca19ab9",8055:"b5cceacb",8228:"69a59ecf",8280:"8b9da836",8298:"d0eec0c0",8317:"3a3dfccc",8401:"f9349c4c",8428:"68010c2c",8483:"62a9ec28",8581:"149bafab",8638:"50eaf533",8691:"b6025108",8705:"53dfd835",8714:"b5daaf67",8760:"07de6571",8873:"694b73a6",8913:"a65b2f19",8957:"995060b9",9071:"afeac5f1",9099:"922a8da8",9175:"2690ccc3",9329:"5639d456",9355:"de2d58f1",9375:"5bf9416b",9400:"ef52e566",9462:"1e733e84",9477:"9be8dd0a",9545:"7875ff0a",9566:"04ce19da",9588:"fb6f0694",9594:"032ba910",9631:"59c3f983",9664:"18f9a0f0",9703:"20e2f14f",9944:"da8cb4b6",9987:"118aa707"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="metamask-docs:",r.l=(e,a,f,d)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==b+f){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(u);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/1269-snaps-examples/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","76ce5f9e":"111","7aec09c3":"124",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296","53c5b6f9":"456",cb2c0fed:"520","9cea254b":"528","52198f09":"531","0d37097f":"555",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910","124521d0":"1088","95833ba0":"1218",e4a6d165:"1251","7d4adaa7":"1266",b91521d0:"1273","8c3a73e8":"1521","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","645d7edb":"1904","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169",a767f895:"2358","63b87658":"2416",c23d85eb:"2445","82c9c8ff":"2520","486ba757":"2675",d3bb2b22:"2700","3ee3d2fe":"2782",f8f7b6b2:"2844","3e112a3e":"2894","47fa8f02":"2971","3925c87d":"2980","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235",c90162c2:"3349",f8a3ce18:"3374",bffa6a82:"3405","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692","344514b0":"3726",d5f74ffe:"3794",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","56aa118c":"4057","2150471b":"4081","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",fe7415f5:"4300",ae96ae55:"4416","2a5de1af":"4520","1df93b7f":"4583","37abd818":"4607",c5e4f5c1:"4687","2e39c2b3":"4698","3720c009":"4787",c26c8f1e:"4849",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","55960ee5":"5151","37285b91":"5188",cf946124:"5246","19fab523":"5312",aaa9d0a2:"5542",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693","11b7fc92":"5892",c219c238:"5996",a2353af7:"6023",b099eb42:"6040",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325",cd301271:"6333","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","31bfc0a5":"6832",e1aa5429:"6875","5625bc05":"6937","14eb3368":"6969",ab85252c:"7441","0c33a535":"7520",d70a1ef5:"7540","015fe5e8":"7682","5e56b9d4":"7775","68c12626":"7785","67be8ad2":"7906","0b387740":"8050",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","78eb1577":"8483","935f2afb":"8581","037997aa":"8638","8329f30e":"8691","577b8b2a":"8705","1be78505":"8714",ab3b18fd:"8760",fd49626c:"8873","652081cc":"8957","4ad67257":"9071","118ec0b0":"9099",d2011f4f:"9175",ef8d09aa:"9329","95c87532":"9355","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>c=e[a]=[f,b]));f.push(c[2]=b);var d=r.p+r.u(a),t=new Error;r.l(d,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,b,d=f[0],t=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();