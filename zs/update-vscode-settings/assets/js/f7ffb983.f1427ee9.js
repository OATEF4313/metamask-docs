"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:s,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905)),r=n(84287);const o={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},p="Snaps quickstart",i={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.mdx",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/zs/update-vscode-settings/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/zs/update-vscode-settings/snaps/get-started/install-flask"},next:{title:"How to",permalink:"/zs/update-vscode-settings/snaps/how-to"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,s.kt)("p",null,"Get started creating your own Snap.\nUse the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,s.kt)(r.Z,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"YoutubeEmbed"}),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,s.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,s.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 18.16 or later"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,s.kt)("h2",{id:"create-the-project"},"Create the project"),(0,s.kt)("p",null,"Create a new Snap project using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap your-snap-name\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/snaps/concepts/files"},"Snaps files")," to learn about your Snap project files."),(0,s.kt)("h2",{id:"start-the-snap"},"Start the Snap"),(0,s.kt)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,s.kt)("p",null,"Start the development server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,s.kt)("p",null,"You are now serving the Snap at ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end dapp at ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,s.kt)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,s.kt)("p",null,"On the front-end dapp, select the ",(0,s.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,s.kt)("p",null,"Once connected, select the ",(0,s.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\nscreen in MetaMask Flask."),(0,s.kt)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,s.kt)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,s.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/snaps/reference/snaps-api#snapdialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { getMessage } from './message';\n\nexport const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return snap.request({\n        method: 'snap_dialog',\n        params: {\n          type: 'Confirmation',\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text('This custom confirmation is just for display purposes.'),\n            text(\n              'But you can edit the Snap source code to make it do something, if you want to!',\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,s.kt)("p",null,"Edit the text in any ",(0,s.kt)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,s.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request\nfor them.")),(0,s.kt)("p",null,"The next time you select the ",(0,s.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation screen."),(0,s.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!"),(0,s.kt)("h2",{id:"next-steps"},"Next steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To learn more about the Snaps system, review fundamental concepts including the Snaps\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/concepts/overview"},"overview"),", ",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/concepts/apis"},"APIs"),", and\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/concepts/files"},"project files"),"."),(0,s.kt)("li",{parentName:"ul"},"To implement advanced features and use cases, see the\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/#what-can-you-do-with-a-snap"},"Snaps features list")," or follow the tutorials for\ncreating a ",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/tutorials/gas-estimation"},"gas estimation")," or\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/tutorials/transaction-insights"},"transaction insights")," Snap."),(0,s.kt)("li",{parentName:"ul"},"To ensure your Snap installation flow is accessible to all users, read the\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/concepts/design-guidelines"},"Snaps design guidelines"),"."),(0,s.kt)("li",{parentName:"ul"},"To ensure your Snap is safe for users, read the\n",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/concepts/security-guidelines"},"Snaps security guidelines"),"."),(0,s.kt)("li",{parentName:"ul"},"To test, debug, and publish, your Snap, read about how to ",(0,s.kt)("a",{parentName:"li",href:"/zs/update-vscode-settings/snaps/how-to/develop-a-snap"},"develop a Snap"),".")))}m.isMDXComponent=!0},84287:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const s={wrapper:"wrapper_iojS"};function r(e){return a.createElement("div",{className:s.wrapper},a.createElement("iframe",{src:e.url,allowFullScreen:!0}))}}}]);