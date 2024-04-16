"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1717],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>h});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||s;return a?t.createElement(h,o(o({ref:n},m),{},{components:a})):t.createElement(h,o({ref:n},m))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13804:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const s={description:"See the Jest API and options reference.",sidebar_position:7},o="Jest API and options",i={unversionedId:"reference/jest",id:"reference/jest",title:"Jest API and options",description:"See the Jest API and options reference.",source:"@site/snaps/reference/jest.md",sourceDirName:"reference",slug:"/reference/jest",permalink:"/1269-snaps-examples/snaps/reference/jest",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/jest.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"See the Jest API and options reference.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Chain Methods API",permalink:"/1269-snaps-examples/snaps/reference/keyring-api/chain-methods"},next:{title:"Resources",permalink:"/1269-snaps-examples/snaps/reference/resources"}},p={},l=[{value:"API methods",id:"api-methods",level:2},{value:"<code>installSnap</code>",id:"installsnap",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>request</code>",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>onTransaction</code>",id:"ontransaction",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>onCronjob</code>",id:"oncronjob",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>onHomePage</code>",id:"onhomepage",level:3},{value:"<code>getInterface</code>",id:"getinterface",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Jest matchers",id:"jest-matchers",level:2},{value:"Options",id:"options",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"Example",id:"example-5",level:4}],m={toc:l},c="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jest-api-and-options"},"Jest API and options"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," package for ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/how-to/test-a-snap"},"end-to-end Snaps testing"),".\nThis reference describes the available ",(0,r.yg)("a",{parentName:"p",href:"#api-methods"},"API methods"),", ",(0,r.yg)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),",\nand ",(0,r.yg)("a",{parentName:"p",href:"#options"},"options"),"."),(0,r.yg)("h2",{id:"api-methods"},"API methods"),(0,r.yg)("h3",{id:"installsnap"},(0,r.yg)("inlineCode",{parentName:"h3"},"installSnap")),(0,r.yg)("p",null,"Installs a Snap in the execution environment.\nWe recommend using this function in each test to ensure that it starts with a clean slate."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"By default, if the built-in server is enabled, ",(0,r.yg)("inlineCode",{parentName:"p"},"installSnap")," installs the Snap from the built-in server.\nOtherwise, you must specify a Snap ID to install."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,"An object with functions that can be used to interact with the Snap."),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n    it("should do something", async () => {\n        await installSnap(/* optional Snap ID */);\n        // ...\n    });\n});\n')),(0,r.yg)("h3",{id:"request"},(0,r.yg)("inlineCode",{parentName:"h3"},"request")),(0,r.yg)("p",null,"Sends a JSON-RPC request to the Snap."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"A JSON-RPC request object with an addition optional ",(0,r.yg)("inlineCode",{parentName:"p"},"origin")," property."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,"A promise that resolves to the response from the ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/entry-points#onrpcrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point,\nwhich can be checked using ",(0,r.yg)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),"."),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n    it("should respond to foo with bar", async () => {\n        const { request } = await installSnap(/* optional snap ID */);\n        const response = await request({\n            origin: "http://localhost:8080",\n            method: "foo",\n            params: [],\n        });\n    \n        /* Check the response using Jest matchers. Since the response is a standard JSON-RPC response,\n         * you can use any standard Jest matchers to check it, including snapshot matchers. */\n        expect(response).toRespondWith("bar");\n        expect(response).not.toRespondWithError("baz");\n        expect(response).toMatchSnapshot();\n    });\n});\n')),(0,r.yg)("h3",{id:"ontransaction"},(0,r.yg)("inlineCode",{parentName:"h3"},"onTransaction")),(0,r.yg)("p",null,"Sends a transaction to the Snap."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"A transaction object with the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"origin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"from")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"to")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"value")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"gasLimit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"maxFeePerGas")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"maxPriorityFeePerGas")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nonce"))),(0,r.yg)("p",null,"All properties are optional.\nThe addresses are randomly generated by default.\nMost values can be specified as a hex string or a decimal number."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,"An object with the user interface that was shown by the Snap, in the\n",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction"))," entry point."),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { installSnap } from "@metamask/snaps-jest";\nimport { panel, text } from "@metamask/snaps-sdk";\n\ndescribe("MySnap", () => {\n    it("should return insights", async () => {\n        const { onTransaction } = await installSnap(/* optional Snap ID */);\n        const response = await onTransaction({\n            value: "0x0",\n            data: "0x",\n            gasLimit: "0x5208",\n            maxFeePerGas: "0x5208",\n            maxPriorityFeePerGas: "0x5208",\n            nonce: "0x0",\n        });\n    \n        expect(response).toRender(panel([text("Hello, world!")]));\n    });\n});\n')),(0,r.yg)("h3",{id:"oncronjob"},(0,r.yg)("inlineCode",{parentName:"h3"},"onCronjob")),(0,r.yg)("p",null,"Runs a cronjob in the Snap.\nThe request is normally specified in the Snap manifest file under the\n",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/permissions#endowmentcronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission, but this method allows you to\nrun cronjobs that are not specified in the manifest as well."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"A JSON-RPC request object."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,"A promise that resolves to the response from the ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/entry-points#oncronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"onCronjob"))," entry point,\nwhich can be checked using ",(0,r.yg)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),"."),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n    it("should end foo cronjobs with response bar", async () => {\n        const { onCronjob } = await installSnap(/* optional snap ID */);\n        const response = await onCronjob({\n            method: "foo",\n            params: [],\n        });\n    \n        // Check the response using Jest matchers.\n        expect(response).toRespondWith("bar");\n        expect(response).not.toRespondWithError("baz");\n    });\n});\n')),(0,r.yg)("h3",{id:"onhomepage"},(0,r.yg)("inlineCode",{parentName:"h3"},"onHomePage")),(0,r.yg)("p",null,"Requests the home page of the Snap. It\ntakes no arguments, and returns a promise that resolves to the response from the\n",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage")),"\nentry point."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { installSnap } from "@metamask/snaps-jest";\nimport { panel, text } from "@metamask/snaps-sdk";\n\ndescribe("MySnap", () => {\n    it("should render the home page", async () => {\n        const { onHomePage } = await installSnap(/* optional snap ID */);\n        const response = await onHomePage();\n    \n        expect(response).toRender(panel([text("Hello, world!")]));\n    });\n});\n')),(0,r.yg)("h3",{id:"getinterface"},(0,r.yg)("inlineCode",{parentName:"h3"},"getInterface")),(0,r.yg)("p",null,"If your Snap uses ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog"))," to show user interfaces, you can use the\n",(0,r.yg)("inlineCode",{parentName:"p"},"request.getInterface")," method to interact with the user interfaces.\nThis method is present on the return value of the ",(0,r.yg)("a",{parentName:"p",href:"#request"},(0,r.yg)("inlineCode",{parentName:"a"},"request"))," method."),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,"This method waits for the user interface to be shown, and returns an object with functions that can\nbe used to interact with the user interface."),(0,r.yg)("h4",{id:"example-4"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { installSnap } from "@metamask/snaps-jest";\nimport { text } from "@metamask/snaps-sdk";\nimport { assert } from "@metamask/utils";\n\ndescribe("MySnap", () => {\n    it("should render an alert with hello world", async () => {\n        const { request } = await installSnap(/* optional Snap ID */);\n    \n        // Note: You cannot resolve the promise yet!\n        const response = request({\n            method: "foo",\n        });\n    \n        const ui = await response.getInterface();\n    \n        // This is useful if you\'re using TypeScript, since it infers the type of the user interface.\n        assert(ui.type === "alert");\n        expect(ui).toRender(text("Hello, world!"));\n    \n        // Select the OK button.\n        await ui.ok();\n    \n        // Now you can resolve the promise.\n        const result = await response;\n        expect(result).toRespondWith("bar");\n    });\n});\n')),(0,r.yg)("h2",{id:"jest-matchers"},"Jest matchers"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," includes the following Jest matchers that you can use to assert that a\nresponse from a Snap matches an expected value:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"toRespondWith(expectedResponse)")," - Checks if a response matches an expected response.\nThis matcher checks the ",(0,r.yg)("inlineCode",{parentName:"li"},"result")," property of the response.\nIf the response is an error, this matcher fails."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"toRespondWithError(expectedError)")," - Checks if a response matches an expected error.\nThis matcher checks the ",(0,r.yg)("inlineCode",{parentName:"li"},"error")," property of the response.\nIf the response is not an error, this matcher fails."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"toSendNotification(notificationText)")," - Checks if a Snap sent a notification."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"toRender(expectedInterface)")," - Checks if a Snap rendered an interface.\nThis is useful for testing the user interface of a Snap, either for a ",(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),"\nor a user interface rendered by the ",(0,r.yg)("a",{parentName:"li",href:"/1269-snaps-examples/snaps/reference/entry-points#ontransaction"},"transaction insights API"),".")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("p",null,"You can pass the following options when ",(0,r.yg)("a",{parentName:"p",href:"/1269-snaps-examples/snaps/how-to/test-a-snap#2-configure-metamasksnaps-jest"},"configuring ",(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")),".\nAll options are optional."),(0,r.yg)("h3",{id:"server"},(0,r.yg)("inlineCode",{parentName:"h3"},"server")),(0,r.yg)("p",null,"Options for the built-in HTTP server included with this package.\nThis server serves the execution environment, simulator, and the Snap bundle during tests."),(0,r.yg)("p",null,"The server options are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"enabled")," - Enables or disables the built-in HTTP server.\nSet to ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," to use your own HTTP server, which you can specify when calling ",(0,r.yg)("a",{parentName:"li",href:"#installsnap"},(0,r.yg)("inlineCode",{parentName:"a"},"installSnap")),", e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},'installSnap("local:http://my-server")'),".\nThe default is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"port")," - The port to use for the built-in HTTP server.\nThe default is a random available (unprivileged) port."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"root")," - The path to the root directory to serve the Snap files from.\nThis is useful if you want to serve the Snap files from a different directory than the one Jest is\nrunning from.\nThe default is the current working directory.")),(0,r.yg)("h4",{id:"example-5"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="jest.config.js"',title:'"jest.config.js"'},'module.exports = {\n    preset: "@metamask/snaps-jest",\n    testEnvironmentOptions: {\n        server: {\n            port: 8080,\n            root: "/path/to/snap/files",\n        },\n    },\n};\n')))}d.isMDXComponent=!0}}]);