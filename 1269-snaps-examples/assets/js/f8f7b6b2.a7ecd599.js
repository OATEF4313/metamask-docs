"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2844],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:a},t)}},4865:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(58168),r=a(96540),o=a(20053),s=a(23104),i=a(47751),l=a(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(m(t),l(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},s,{className:(0,o.A)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,i.u)(e);return r.createElement("div",{className:(0,o.A)("tabs-container",p.tabList)},r.createElement(u,(0,n.A)({},e,t)),r.createElement(c,(0,n.A)({},e,t)))}function d(e){const t=(0,l.A)();return r.createElement(m,(0,n.A)({key:String(t)},e))}},47751:(e,t,a)=>{a.d(t,{u:()=>m});var n=a(96540),r=a(56347),o=a(57485),s=a(31682),i=a(89466);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const s=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,d]=c({queryString:a,groupId:r}),[g,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=m??g;return u({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,o]),tabValues:o}}},78328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),o=a(4865),s=a(19365);const i={sidebar_label:"React UI",sidebar_position:1,description:"Set up the SDK in your React dapp using the React UI package.",tags:["JavaScript SDK"]},l="Use MetaMask SDK with React UI",p={unversionedId:"how-to/use-sdk/javascript/react/react-ui",id:"how-to/use-sdk/javascript/react/react-ui",title:"Use MetaMask SDK with React UI",description:"Set up the SDK in your React dapp using the React UI package.",source:"@site/wallet/how-to/use-sdk/javascript/react/react-ui.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/react-ui",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/react/react-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/react-ui.md",tags:[{label:"JavaScript SDK",permalink:"/1269-snaps-examples/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React UI",sidebar_position:1,description:"Set up the SDK in your React dapp using the React UI package.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/react/"},next:{title:"Pure JavaScript",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/pure-js"}},u={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with <code>MetaMaskUIProvider</code>",id:"3-wrap-your-project-with-metamaskuiprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"5. Use the <code>MetaMaskButton</code> component",id:"5-use-the-metamaskbutton-component",level:3},{value:"Example",id:"example",level:2}],m={toc:c},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-metamask-sdk-with-react-ui"},"Use MetaMask SDK with React UI"),(0,r.yg)("p",null,"Import ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/concepts/sdk/"},"MetaMask SDK")," into your React dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui")," package not only exports hooks from ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/react/"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/sdk-react")),",\nbut also provides wrappers around ",(0,r.yg)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a basic UI button component\nfor connecting to MetaMask."),(0,r.yg)("p",null,"By combining the functions of ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui"),", you can use both\nthe core functionality and the pre-styled UI components to streamline the integration of MetaMask\ninto your React dapp."),(0,r.yg)("p",null,"The SDK for React has the ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.yg)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react-ui\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react-ui\n")),(0,r.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.yg)("p",null,"In your project script, add the following to import the SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n')),(0,r.yg)("h3",{id:"3-wrap-your-project-with-metamaskuiprovider"},"3. Wrap your project with ",(0,r.yg)("inlineCode",{parentName:"h3"},"MetaMaskUIProvider")),(0,r.yg)("p",null,"Wrap your root component in a ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskUIProvider"),".\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskUIProvider\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React UI Dapp",\n                    url: window.location.href,\n                },\n                infuraAPIKey: process.env.INFURA_API_KEY,\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskUIProvider>\n    </React.StrictMode>\n);\n')),(0,r.yg)("p",null,"For the full list of options you can set for ",(0,r.yg)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),".\nImportant options include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#dappmetadata"},(0,r.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," - Use this to display information\nabout your dapp in the MetaMask connection modal."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," - Use this to\n",(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#modals"},(0,r.yg)("inlineCode",{parentName:"a"},"modals"))," - Use this to ",(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,r.yg)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.yg)("p",null,"Use the SDK by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nSee the ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/react/#4-use-the-sdk"},"instructions for ",(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/sdk-react")),"."),(0,r.yg)("h3",{id:"5-use-the-metamaskbutton-component"},"5. Use the ",(0,r.yg)("inlineCode",{parentName:"h3"},"MetaMaskButton")," component"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/sdk-react-ui")," package provides a pre-styled button, ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskButton"),", to initiate a\nconnection to MetaMask.\nYou can use it as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { MetaMaskButton } from "@metamask/sdk-react-ui";\nimport React, { useState } from "react";\n\nexport const App = () => {\n    return (\n        <div className="App">\n            <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>\n        </div>\n    );\n};\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"MetaMaskButton properties"),(0,r.yg)("p",null,(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"theme"),": Set to ",(0,r.yg)("inlineCode",{parentName:"li"},"light")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"dark")," to adapt to your dapp's theme."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"color"),": The color of the button. Accepts any valid CSS color string.")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"You can copy the full React UI example to get started:"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Root component",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskUIProvider } from "@metamask/sdk-react-ui";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskUIProvider\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React UI Dapp",\n                    url: window.location.href,\n                },\n                infuraAPIKey: process.env.INFURA_API_KEY,\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskUIProvider>\n    </React.StrictMode>\n);\n'))),(0,r.yg)(s.A,{value:"React component",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.js"',title:'"App.js"'},'import {\n    MetaMaskButton,\n    useAccount,\n    useSDK,\n    useSignMessage,\n} from "@metamask/sdk-react-ui";\nimport "./App.css";\n\nfunction AppReady() {\n    const {\n        data: signData,\n        isError: isSignError,\n        isLoading: isSignLoading,\n        isSuccess: isSignSuccess,\n        signMessage,\n    } = useSignMessage({\n        message: "gm wagmi frens",\n    });\n\n    const { isConnected } = useAccount();\n\n    return (\n        <div className="App">\n            <header className="App-header">\n                <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>\n                {isConnected && (\n                    <>\n                        <div style={{ marginTop: 20 }}>\n                            <button\n                                disabled={isSignLoading}\n                                onClick={() => signMessage()}\n                            >\n                                Sign message\n                            </button>\n                            {isSignSuccess && <div>Signature: {signData}</div>}\n                            {isSignError && <div>Error signing message</div>}\n                        </div>\n                    </>\n                )}\n            </header>\n        </div>\n    );\n}\n\nfunction App() {\n    const { ready } = useSDK();\n\n    if (!ready) {\n        return <div>Loading...</div>;\n    }\n\n    return <AppReady />;\n}\n\nexport default App;\n')))),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-metamask-button"},"example React UI dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}g.isMDXComponent=!0}}]);