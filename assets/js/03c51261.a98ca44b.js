"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3582],{54922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),i=r(19365);const o={description:"Get the base fee history."},l="Get the base fee history",c={id:"gas-api/api-reference/basefeehistory",title:"Get the base fee history",description:"Get the base fee history.",source:"@site/services/gas-api/api-reference/basefeehistory.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/basefeehistory",permalink:"/services/gas-api/api-reference/basefeehistory",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/basefeehistory.md",tags:[],version:"current",frontMatter:{description:"Get the base fee history."},sidebar:"servicesSidebar",previous:{title:"API reference",permalink:"/services/gas-api/api-reference/"},next:{title:"Get the base fee percentile",permalink:"/services/gas-api/api-reference/basefeepercentile"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-the-base-fee-history",children:"Get the base fee history"}),"\n",(0,n.jsx)(t.p,{children:"Returns the base fee history of the specified blockchain network for the previous 500 blocks."}),"\n",(0,n.jsx)(t.p,{children:"The base fee is a part of the EIP-1559 upgrade to the Ethereum network, and it represents the\nminimum price a user must pay for their transaction to be included in a block."}),"\n",(0,n.jsx)(t.p,{children:"This method can be useful for applications that need to display or analyze the historical base fee\ndata for a specific blockchain network."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GET"})," ",(0,n.jsx)(t.code,{children:"https://gas.api.infura.io/networks/${chainId}/baseFeeHistory"})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Path"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"chainId"}),": ",(0,n.jsx)(t.code,{children:"string"})," - ID of the chain to query"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Array of historical base fees."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.p,{children:["Include your ",(0,n.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"API key"}),"\nand optional ",(0,n.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"\nto authorize your account to use the APIs."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can call the API with only an API key, and ",(0,n.jsx)(t.a,{href:"/services/gas-api/api-reference/#supported-api-request-formats",children:"include it as a path parameter"}),"\ninstead of using the cURL authentication option (",(0,n.jsx)(t.code,{children:"-u"}),")."]})}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"cURL",label:"cURL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  -u <API_KEY>:<API_KEY_SECRET> \\\n  \"https://gas.api.infura.io/networks/1/baseFeeHistory\"\n"})})}),(0,n.jsx)(i.A,{value:"JavaScript",label:"Javascript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const axios = require("axios");\n\nconst apiKey = "<API-KEY>"; // Replace with your API key.\nconst apiKeySecret = "<API-KEY-SECRET>"; // Replace with your API key secret.\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/baseFeeHistory`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      }\n    );\n    console.log("Base fee history:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n  "14.585610312",\n  "16.407222984",\n  "16.687763116",\n  "16.357094117",\n  "15.82929799",\n  "15.21546789",\n  "17.113938208",\n  "16.92324819",\n  ...\n]\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),a=r(18215),s=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);