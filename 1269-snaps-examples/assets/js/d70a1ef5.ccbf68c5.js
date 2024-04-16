"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7540],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(g,s(s({ref:n},u),{},{components:t})):a.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_position:6},s="Debug a Snap",i={unversionedId:"how-to/debug-a-snap/index",id:"how-to/debug-a-snap/index",title:"Debug a Snap",description:"To debug your Snap, use console.log and inspect the MetaMask background process.",source:"@site/snaps/how-to/debug-a-snap/index.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/",permalink:"/1269-snaps-examples/snaps/how-to/debug-a-snap/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"snapsSidebar",previous:{title:"Test a Snap",permalink:"/1269-snaps-examples/snaps/how-to/test-a-snap"},next:{title:"Troubleshoot common issues",permalink:"/1269-snaps-examples/snaps/how-to/debug-a-snap/common-issues"}},p={},l=[],u={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"debug-a-snap"},"Debug a Snap"),(0,o.yg)("p",null,"To debug your Snap, use ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You can also see the ",(0,o.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/how-to/debug-a-snap/common-issues"},"common issues")," encountered by Snap developers.")),(0,o.yg)("p",null,"You can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,o.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/cli/subcommands#m-manifest"},(0,o.yg)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,o.yg)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,o.yg)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,o.yg)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go to ",(0,o.yg)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,o.yg)("li",{parentName:"ol"},"Toggle ",(0,o.yg)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,o.yg)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,o.yg)("strong",{parentName:"li"},"Details"),"."),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("strong",{parentName:"li"},"Inspect views"),", select ",(0,o.yg)("inlineCode",{parentName:"li"},"background.html"),".")),(0,o.yg)("p",null,"The log output displays in the console that pops up."))}m.isMDXComponent=!0}}]);