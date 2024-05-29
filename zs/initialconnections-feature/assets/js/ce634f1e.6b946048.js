"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3102],{6682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const i={description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},r="Sign data",o={id:"how-to/sign-data/index",title:"Sign data",description:"Sign data using eth_signTypedData_v4 and personal_sign.",source:"@site/wallet/how-to/sign-data/index.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/",permalink:"/zs/initialconnections-feature/wallet/how-to/sign-data/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Send transactions",permalink:"/zs/initialconnections-feature/wallet/how-to/send-transactions"},next:{title:"Sign in with Ethereum",permalink:"/zs/initialconnections-feature/wallet/how-to/sign-data/siwe"}},d={},c=[{value:"Use <code>eth_signTypedData_v4</code>",id:"use-eth_signtypeddata_v4",level:2},{value:"Example",id:"example",level:3},{value:"Use <code>personal_sign</code>",id:"use-personal_sign",level:2},{value:"Example",id:"example-1",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sign-data",children:"Sign data"}),"\n",(0,s.jsx)(n.p,{children:"You can use the following RPC methods to request cryptographic signatures from users:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#use-eth_signtypeddata_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})})," - Use this method to request the most human-readable\nsignatures that are efficient to process on-chain.\nWe recommend this for most use cases."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#use-personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})})," - Use this method for the easiest way to request human-readable\nsignatures that don't need to be efficiently processed on-chain."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zs/initialconnections-feature/wallet/concepts/signing-methods#eth_sign",children:(0,s.jsx)(n.code,{children:"eth_sign"})})," is deprecated."]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["MetaMask supports signing transactions using Trezor and Ledger hardware wallets.\nThese wallets only support signing data using ",(0,s.jsx)(n.code,{children:"personal_sign"}),".\nIf you can't log in to a dapp when using a Ledger or Trezor, the dapp might be requesting you to\nsign data using an unsupported method, in which case we recommend using your standard MetaMask account."]})}),"\n",(0,s.jsxs)(n.h2,{id:"use-eth_signtypeddata_v4",children:["Use ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/wallet/reference/eth_signTypedData_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"\nprovides the most human-readable signatures that are efficient to process on-chain.\nIt follows the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"})," specification to allow users to sign\ntyped structured data that can be verified on-chain.\nIt renders the structured data as usefully as possible to the user (for example, displaying known\naccount names in place of addresses)."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"eth_signTypedData_v4",src:t(61525).A+"",width:"472",height:"732"})})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})," payload uses a standard format of encoding structs, but has a different\nformat for the top-level struct that is signed, which includes some metadata about the verifying\ncontract to provide replay protection of these signatures between different contract instances."]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/eth-sig-util",children:(0,s.jsx)(n.code,{children:"eth-sig-util"})})," to generate and\nvalidate signatures.\nYou can use ",(0,s.jsx)(n.a,{href:"https://github.com/danfinlay/eip712-codegen#readme",children:(0,s.jsx)(n.code,{children:"eip712-codegen"})})," to generate most\nof the Solidity required to verify these signatures on-chain.\nIt currently doesn't generate the top-level struct verification code, so you must write that part manually.\nSee\n",(0,s.jsx)(n.a,{href:"https://github.com/delegatable/delegatable-sol/blob/fb34bb259890417285f7185bc6500fb0ab8bf86f/contracts/Delegatable.sol#L80",children:"this example implementation"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Since the top-level struct type's name and the ",(0,s.jsx)(n.code,{children:"domain.name"})," are presented to the user prominently\nin the confirmation, consider your contract name, the top-level struct name, and the struct keys to\nbe a user-facing security interface.\nEnsure your contract is as readable as possible to the user."]})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following is an example of using ",(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})," with MetaMask:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'signTypedDataV4Button.addEventListener("click", async function (event) {\n  event.preventDefault();\n\n  // eth_signTypedData_v4 parameters. All of these parameters affect the resulting signature.\n  const msgParams = JSON.stringify({\n    domain: {\n      // This defines the network, in this case, Mainnet.\n      chainId: 1,\n      // Give a user-friendly name to the specific contract you\'re signing for.\n      name: "Ether Mail",\n      // Add a verifying contract to make sure you\'re establishing contracts with the proper entity.\n      verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",\n      // This identifies the latest version.\n      version: "1",\n    },\n\n    // This defines the message you\'re proposing the user to sign, is dapp-specific, and contains\n    // anything you want. There are no required fields. Be as explicit as possible when building out\n    // the message schema.\n    message: {\n      contents: "Hello, Bob!",\n      attachedMoneyInEth: 4.2,\n      from: {\n        name: "Cow",\n        wallets: [\n          "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",\n          "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF",\n        ],\n      },\n      to: [\n        {\n          name: "Bob",\n          wallets: [\n            "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",\n            "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",\n            "0xB0B0b0b0b0b0B000000000000000000000000000",\n          ],\n        },\n      ],\n    },\n    // This refers to the keys of the following types object.\n    primaryType: "Mail",\n    types: {\n      // This refers to the domain the contract is hosted on.\n      EIP712Domain: [\n        { name: "name", type: "string" },\n        { name: "version", type: "string" },\n        { name: "chainId", type: "uint256" },\n        { name: "verifyingContract", type: "address" },\n      ],\n      // Not an EIP712Domain definition.\n      Group: [\n        { name: "name", type: "string" },\n        { name: "members", type: "Person[]" },\n      ],\n      // Refer to primaryType.\n      Mail: [\n        { name: "from", type: "Person" },\n        { name: "to", type: "Person[]" },\n        { name: "contents", type: "string" },\n      ],\n      // Not an EIP712Domain definition.\n      Person: [\n        { name: "name", type: "string" },\n        { name: "wallets", type: "address[]" },\n      ],\n    },\n  });\n\n  var from = await web3.eth.getAccounts();\n\n  var params = [from[0], msgParams];\n  var method = "eth_signTypedData_v4";\n\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .sendAsync(\n      {\n        method,\n        params,\n        from: from[0],\n      },\n      function (err, result) {\n        if (err) return console.dir(err);\n        if (result.error) {\n          alert(result.error.message);\n        }\n        if (result.error) return console.error("ERROR", result);\n        console.log("TYPED SIGNED:" + JSON.stringify(result.result));\n\n        const recovered = sigUtil.recoverTypedSignature_v4({\n          data: JSON.parse(msgParams),\n          sig: result.result,\n        });\n\n        if (ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)) {\n          alert("Successfully recovered signer as " + from);\n        } else {\n          alert("Failed to verify signer when comparing " + result + " to " + from);\n        }\n      }\n    );\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following HTML displays a sign button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<h3>Sign typed data v4</h3>\n<button type="button" id="signTypedDataV4Button">eth_signTypedData_v4</button>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://metamask.github.io/test-dapp/#signTypedDataV4",children:"live example"})," and\n",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/test-dapp",children:"test dapp source code"})," for more information."]}),"\n",(0,s.jsxs)(n.h2,{id:"use-personal_sign",children:["Use ",(0,s.jsx)(n.code,{children:"personal_sign"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/wallet/reference/personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})})," is the\neasiest way to request human-readable signatures that don't need to be efficiently processed on-chain.\nIt's often used for signature challenges that are authenticated on a web server, such as\n",(0,s.jsx)(n.a,{href:"/zs/initialconnections-feature/wallet/how-to/sign-data/siwe",children:"Sign-In with Ethereum"}),"."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"personal_sign",src:t(88595).A+"",width:"472",height:"732"})})}),"\n",(0,s.jsxs)(n.p,{children:["Some other signers implement ",(0,s.jsx)(n.code,{children:"personal_sign"})," as ",(0,s.jsx)(n.code,{children:"eth_sign"}),", because the Go Ethereum client changed\nthe behavior of their ",(0,s.jsx)(n.code,{children:"eth_sign"})," method.\nBecause MetaMask supports existing applications, MetaMask implements both ",(0,s.jsx)(n.code,{children:"personal_sign"})," and ",(0,s.jsx)(n.code,{children:"eth_sign"}),".\nYou might need to check what method your supported signers use for a given implementation."]}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Don't use this method to display binary data, because the user wouldn't be able to understand what\nthey're agreeing to."}),"\n",(0,s.jsx)(n.li,{children:"If using this method for a signature challenge, think about what would prevent a phisher from\nreusing the same challenge and impersonating your site.\nAdd text referring to your domain, or the current time, so the user can easily verify if this\nchallenge is legitimate."}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following is an example of using ",(0,s.jsx)(n.code,{children:"personal_sign"})," with MetaMask:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'personalSignButton.addEventListener("click", async function (event) {\n  event.preventDefault();\n  const exampleMessage = "Example `personal_sign` message.";\n  try {\n    const from = accounts[0];\n    // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.\n    // This uses a Node.js-style buffer shim in the browser.\n    const msg = `0x${Buffer.from(exampleMessage, "utf8").toString("hex")}`;\n    const sign = await ethereum.request({\n      method: "personal_sign",\n      params: [msg, from],\n    });\n    personalSignResult.innerHTML = sign;\n    personalSignVerify.disabled = false;\n  } catch (err) {\n    console.error(err);\n    personalSign.innerHTML = `Error: ${err.message}`;\n  }\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following HTML displays a sign button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<h3>Personal sign</h3>\n<button type="button" id="personalSignButton">personal_sign</button>\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"personal_sign"})," prepends the message with ",(0,s.jsx)(n.code,{children:"\\x19Ethereum Signed Message:\\n<length of message>"})," before\nhashing and signing it."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://metamask.github.io/test-dapp/#personalSign",children:"live example"})," and\n",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/test-dapp",children:"test dapp source code"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},88595:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/personal_sign-d816d3f7b4c78b5bf5f31dfb3e167775.png"},61525:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/signTypedData-e0bc49cef93b62a1275a0302134e86c4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);