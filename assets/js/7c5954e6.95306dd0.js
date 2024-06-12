"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6373],{6272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var c=t(74848),s=t(28453);const o={description:"Access a user's accounts and handle changed accounts.",sidebar_position:3},a="Access a user's accounts",r={id:"how-to/connect/access-accounts",title:"Access a user's accounts",description:"Access a user's accounts and handle changed accounts.",source:"@site/wallet/how-to/connect/access-accounts.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/access-accounts",permalink:"/wallet/how-to/connect/access-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/access-accounts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Access a user's accounts and handle changed accounts.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/wallet/how-to/connect/"},next:{title:"Manage networks",permalink:"/wallet/how-to/manage-networks"}},i={},u=[{value:"Create a connect button",id:"create-a-connect-button",level:2},{value:"Handle accounts",id:"handle-accounts",level:2},{value:"Disconnect a user&#39;s accounts",id:"disconnect-a-users-accounts",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"access-a-users-accounts",children:"Access a user's accounts"}),"\n",(0,c.jsxs)(n.p,{children:["User accounts are used in a variety of contexts in Ethereum, including as identifiers and for\n",(0,c.jsx)(n.a,{href:"/wallet/how-to/sign-data/",children:"signing transactions"}),".\nTo request a signature from a user or have a user approve a transaction, your dapp can\naccess the user's accounts using the\n",(0,c.jsx)(n.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,c.jsx)(n.code,{children:"eth_requestAccounts"})})," RPC method."]}),"\n",(0,c.jsx)(n.admonition,{title:"note",type:"info",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"eth_requestAccounts"})," internally calls ",(0,c.jsx)(n.a,{href:"/wallet/reference/wallet_requestPermissions",children:(0,c.jsx)(n.code,{children:"wallet_requestPermissions"})}),"\nto ",(0,c.jsx)(n.a,{href:"/wallet/how-to/manage-permissions",children:"request permission"})," to call the restricted\n",(0,c.jsx)(n.a,{href:"/wallet/reference/eth_accounts",children:(0,c.jsx)(n.code,{children:"eth_accounts"})})," method."]})}),"\n",(0,c.jsx)(n.p,{children:"When accessing a user's accounts:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Only"})," initiate a connection request in response to direct user action, such as\nselecting a ",(0,c.jsx)(n.a,{href:"#create-a-connect-button",children:"connect button"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Always"})," disable the connect button while the connection request is pending."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Never"})," initiate a connection request on page load."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"create-a-connect-button",children:"Create a connect button"}),"\n",(0,c.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,c.jsxs)(n.p,{children:["This section describes how to create a single connect button.\nWhen connecting to multiple wallets, use the ",(0,c.jsx)(n.a,{href:"/wallet/how-to/connect/",children:"Connect to MetaMask"})," guide to create\nmultiple connect buttons."]})}),"\n",(0,c.jsxs)(n.p,{children:["We recommend providing a button to allow users to connect MetaMask to your dapp.\nSelecting this button should call ",(0,c.jsx)(n.code,{children:"eth_requestAccounts"})," to access the user's accounts."]}),"\n",(0,c.jsx)(n.p,{children:"For example, the following JavaScript code accesses the user's accounts when they select a connect\nbutton:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'// You should only attempt to request the user\'s account in response to user interaction, such as\n// selecting a button. Otherwise, you pop-up spam the user like it\'s 1999. If you fail to retrieve\n// the user\'s account, you should encourage the user to initiate the attempt.\nconst ethereumButton = document.querySelector(".enableEthereumButton");\nconst showAccount = document.querySelector(".showAccount");\n\nethereumButton.addEventListener("click", () => {\n  getAccount();\n});\n\n// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can\n// select to initiate the request. MetaMask rejects any additional requests while the first is still\n// pending.\nasync function getAccount() {\n  const accounts = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({ method: "eth_requestAccounts" })\n      .catch((err) => {\n        if (err.code === 4001) {\n          // EIP-1193 userRejectedRequest error.\n          // If this happens, the user rejected the connection request.\n          console.log("Please connect to MetaMask.");\n        } else {\n          console.error(err);\n        }\n      });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"The following HTML code displays the button and the current account:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'\x3c!-- Display a connect button and the current account --\x3e\n<button class="enableEthereumButton">Enable Ethereum</button>\n<h2>Account: <span class="showAccount"></span></h2>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"handle-accounts",children:"Handle accounts"}),"\n",(0,c.jsxs)(n.p,{children:["Use the ",(0,c.jsx)(n.a,{href:"/wallet/reference/eth_accounts",children:(0,c.jsx)(n.code,{children:"eth_accounts"})}),"\nRPC method to handle user accounts.\nListen to the ",(0,c.jsx)(n.a,{href:"/wallet/reference/provider-api#accountschanged",children:(0,c.jsx)(n.code,{children:"accountsChanged"})})," provider event to\nbe notified when the user changes accounts."]}),"\n",(0,c.jsx)(n.p,{children:"The following code handles user accounts and detects when the user changes accounts:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'let currentAccount = null;\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({ method: "eth_accounts" })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    // Some unexpected error.\n    // For backwards compatibility reasons, if no accounts are available, eth_accounts returns an\n    // empty array.\n    console.error(err);\n  });\n\n// Note that this event is emitted on page load. If the array of accounts is non-empty, you\'re\n// already connected.\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handleAccountsChanged);\n\n// eth_accounts always returns an array.\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    // MetaMask is locked or the user has not connected any accounts.\n    console.log("Please connect to MetaMask.");\n  } else if (accounts[0] !== currentAccount) {\n    // Reload your interface with accounts[0].\n    currentAccount = accounts[0];\n    // Update the account displayed (see the HTML for the connect button)\n    showAccount.innerHTML = currentAccount;\n  }\n}\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"eth_accounts"})," now returns the full list of accounts for which the user has permitted access to.\nPreviously, ",(0,c.jsx)(n.code,{children:"eth_accounts"})," returned at most one account in the ",(0,c.jsx)(n.code,{children:"accounts"}),' array.\nThe first account in the array will always be considered the user\'s "selected" account.']})}),"\n",(0,c.jsx)(n.h2,{id:"disconnect-a-users-accounts",children:"Disconnect a user's accounts"}),"\n",(0,c.jsxs)(n.p,{children:["Since ",(0,c.jsx)(n.code,{children:"eth_requestAccounts"})," internally calls ",(0,c.jsx)(n.code,{children:"wallet_requestPermissions"})," for permission to call\n",(0,c.jsx)(n.code,{children:"eth_accounts"}),", you can use ",(0,c.jsx)(n.a,{href:"/wallet/reference/wallet_revokePermissions",children:(0,c.jsx)(n.code,{children:"wallet_revokePermissions"})}),"\nto revoke this permission, revoking your dapp's access to the user's accounts."]}),"\n",(0,c.jsxs)(n.p,{children:["This is useful as a method for users to log out (or disconnect) from your dapp.\nYou can then use ",(0,c.jsx)(n.a,{href:"/wallet/reference/wallet_getPermissions",children:(0,c.jsx)(n.code,{children:"wallet_getPermissions"})})," to determine\nwhether the user is connected or disconnected to your dapp."]}),"\n",(0,c.jsxs)(n.p,{children:["See ",(0,c.jsx)(n.a,{href:"/wallet/how-to/manage-permissions#revoke-permissions-example",children:"how to revoke permissions"})," for an example."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var c=t(96540);const s={},o=c.createContext(s);function a(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);