"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9107],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,u=f["".concat(p,".").concat(m)]||f[m]||y[m]||s;return t?i.createElement(u,r(r({ref:n},c),{},{components:t})):i.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[f]="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(58168),a=(t(96540),t(15680));const s={description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},r="Notifications",o={unversionedId:"features/notifications",id:"features/notifications",title:"Notifications",description:"Notify users directly in MetaMask, or natively in their OS.",source:"@site/snaps/features/notifications.md",sourceDirName:"features",slug:"/features/notifications",permalink:"/1260-txn-insights/snaps/features/notifications",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/notifications.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},sidebar:"snapsSidebar",previous:{title:"Non-EVM networks",permalink:"/1260-txn-insights/snaps/features/non-evm-networks"},next:{title:"Signature insights",permalink:"/1260-txn-insights/snaps/features/signature-insights"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to notify users",id:"1-request-permission-to-notify-users",level:3},{value:"2. Create a notification",id:"2-create-a-notification",level:3},{value:"Example",id:"example",level:2}],c={toc:l},f="wrapper";function y(e){let{components:n,...s}=e;return(0,a.yg)(f,(0,i.A)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"notifications"},"Notifications"),(0,a.yg)("p",null,"You can display notifications directly in MetaMask or natively in a user's operating system (OS)\nusing the ",(0,a.yg)("a",{parentName:"p",href:"/1260-txn-insights/snaps/reference/snaps-api#snap_notify"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_notify"))," API method."),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("h3",{id:"1-request-permission-to-notify-users"},"1. Request permission to notify users"),(0,a.yg)("p",null,"Request the ",(0,a.yg)("a",{parentName:"p",href:"/1260-txn-insights/snaps/reference/snaps-api#snap_notify"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_notify"))," permission.\nAdd the following to your Snap's manifest file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_notify": {}\n}\n')),(0,a.yg)("h3",{id:"2-create-a-notification"},"2. Create a notification"),(0,a.yg)("p",null,"Create a notification by calling ",(0,a.yg)("a",{parentName:"p",href:"/1260-txn-insights/snaps/reference/snaps-api#snap_notify"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_notify")),", which takes\na notification ",(0,a.yg)("inlineCode",{parentName:"p"},"type")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"message"),".\nSpecify ",(0,a.yg)("inlineCode",{parentName:"p"},'type: "inApp"')," to display the notification in the MetaMask UI, or ",(0,a.yg)("inlineCode",{parentName:"p"},'type: "native"')," to\ndisplay the notification in the user's OS."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"We recommend using ",(0,a.yg)("inlineCode",{parentName:"p"},'type: "inApp"')," because there's no guarantee that native notifications are\ndisplayed to the user.\nYou can also call ",(0,a.yg)("inlineCode",{parentName:"p"},"snap_notify")," twice, which each notification type, to trigger both an in-app and\nnative notification.")),(0,a.yg)("p",null,'The following example displays a notification in MetaMask, with the message "Hello, world!":'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'await snap.request({\n  method: "snap_notify",\n  params: {\n    type: "inApp",\n    message: "Hello, world!",\n  },\n});\n')),(0,a.yg)("div",{class:"row"},(0,a.yg)("div",{class:"column"},(0,a.yg)("img",{src:t(30911).A,width:"250px",alt:"Notification alert",style:{border:"1px solid #DCDCDC"}})),(0,a.yg)("div",{class:"column"},(0,a.yg)("img",{src:t(45636).A,width:"300px",alt:"Notification message",style:{border:"1px solid #DCDCDC"}}))),(0,a.yg)("admonition",{title:"Notification rate limits",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Each Snap can trigger up to:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Five in-app notifications per minute."),(0,a.yg)("li",{parentName:"ul"},"Two native notifications per five minutes."))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"See the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/notifications"},(0,a.yg)("inlineCode",{parentName:"a"},"@metamask/notifications-example-snap")),"\npackage for a full example of implementing notifications using\n",(0,a.yg)("a",{parentName:"p",href:"/1260-txn-insights/snaps/reference/snaps-api#snap_notify"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_notify")),".\nThis example exposes a ",(0,a.yg)("a",{parentName:"p",href:"/1260-txn-insights/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to display in-app and native notifications."))}y.isMDXComponent=!0},30911:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/notifications-1-124974c2b537df6987224a2ce123fc48.png"},45636:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/notifications-2-a31a9c479c1713aabe039d2945a79210.png"}}]);