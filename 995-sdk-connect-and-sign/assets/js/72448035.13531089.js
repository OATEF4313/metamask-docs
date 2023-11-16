"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:1},o="Connect and sign",s={unversionedId:"how-to/sign-data/connect-and-sign",id:"how-to/sign-data/connect-and-sign",title:"Connect and sign",description:"Use MetaMask SDK to connect and sign in a single interaction.",source:"@site/wallet/how-to/sign-data/connect-and-sign.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/connect-and-sign",permalink:"/995-sdk-connect-and-sign/wallet/how-to/sign-data/connect-and-sign",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/connect-and-sign.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Sign data",permalink:"/995-sdk-connect-and-sign/wallet/how-to/sign-data/"},next:{title:"Sign in with Ethereum",permalink:"/995-sdk-connect-and-sign/wallet/how-to/sign-data/siwe"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the connectAndSign method",id:"use-the-connectandsign-method",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-and-sign"},"Connect and sign"),(0,r.kt)("p",null,"You can connect to MetaMask and sign data in a single interaction from your JavaScript or iOS dapp\nwith ",(0,r.kt)("a",{parentName:"p",href:"/995-sdk-connect-and-sign/wallet/concepts/sdk/"},"MetaMask SDK")," installed."),(0,r.kt)("p",null,"The SDK provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method, which is a streamlined approach for dapps to interact\nwith MetaMask.\nThis method combines the ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," and ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," RPC methods, executing them sequentially.\n",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign")," takes one parameter, the message string to be signed, and passes the message and\nthe output of ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," directly to ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign")),"."),(0,r.kt)("p",null,"This streamlined method improves dapp user experience, especially on mobile platforms, since it\nrequests the user to connect to MetaMask and sign a message in a single interaction, requiring only\none switch between the mobile dapp and MetaMask Mobile."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"350",controls:!0},(0,r.kt)("source",{src:"/995-sdk-connect-and-sign/connect-and-sign.mp4",type:"video/mp4"}))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MetaMask SDK set up in your ",(0,r.kt)("a",{parentName:"p",href:"/995-sdk-connect-and-sign/wallet/how-to/connect/set-up-sdk/javascript/"},"JavaScript")," or\n",(0,r.kt)("a",{parentName:"p",href:"/995-sdk-connect-and-sign/wallet/how-to/connect/set-up-sdk/mobile/ios"},"iOS")," dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."))),(0,r.kt)("h2",{id:"use-the-connectandsign-method"},"Use the connectAndSign method"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn(`failed to connect..`, err);\n  }\n};\n')),(0,r.kt)("p",null,"To invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure the ",(0,r.kt)("inlineCode",{parentName:"li"},"MetaMaskSDK")," instance (",(0,r.kt)("inlineCode",{parentName:"li"},"sdk")," in this context) is properly initialized and available."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"connectAndSign")," with the message to be signed."),(0,r.kt)("li",{parentName:"ol"},"Handle the promise to process the response or catch any errors.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following is an example of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method in a React dapp, integrating it\ninto a functional component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React, { useState } from "react";\nimport { useSDK } from "@metamask/sdk-react";\n\nfunction MyComponent() {\n  const { sdk } = useSDK();\n  const [signedMessage, setSignedMessage] = useState("");\n\n  const handleConnectAndSign = async () => {\n    try {\n      const message = "Your message here";\n      const signature = await sdk.connectAndSign({ msg: message });\n      setSignedMessage(signature);\n    } catch (error) {\n      console.error("Error in signing:", error);\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={handleConnectAndSign}>Connect and Sign</button>\n      {signedMessage && <p>Signed Message: {signedMessage}</p>}\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"For a comprehensive React example, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/create-react-app/src/App.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"App.tsx")),"\nfile of the example React dapp."),(0,r.kt)("p",null,"For examples of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectAndSign")," function in Next.js and Vue.js, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nextjs-demo"},"example Next.js dapp"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/vuejs"},"example Vue.js dapp"),"\nin the JavaScript SDK GitHub repository."))}m.isMDXComponent=!0}}]);