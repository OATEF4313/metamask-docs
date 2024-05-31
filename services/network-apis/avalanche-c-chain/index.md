---
description: Avalanche C-Chain
---
# Avalanche (C-Chain)

import CardList from '@site/src/components/CardList'

Avalanche is a Proof of Stake (PoS), layer 1 platform that features 3 built-in blockchains: [Exchange Chain (X-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform-overview#exchange-chain-x-chain), [Platform Chain (P-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform-overview#platform-chain-p-chain), and [Contract Chain (C-Chain)](https://docs.avax.network/overview/getting-started/avalanche-platform-overview#contract-chain-c-chain). Infura provides access to the C-Chain only.

The C-Chain supports the Ethereum Virtual Machine (EVM), allowing Ethereum developers to deploy Solidity smart contract
dapps onto the C-Chain. Dapps can run on both Avalanche and Ethereum. Avalanche Platform's C-Chain is EVM-compatible, but
it is not identical. 

:::info See also

- View the [official Avalanche C-Chain documentation](https://docs.avax.network/build/dapp/c-chain-evm) for more information about building on
    the Avalanche C-Chain.
- View the [differences between developing on Ethereum versus Avalanche C-Chain](https://docs.avax.network/build/dapp/launch-dapp#gotchas-and-things-to-look-out-for). 

:::

Select one of the following options to get started with the Avalanche C-Chain network:

<CardList
  items={[
    {
      href: "./avalanche-c-chain/quickstart",
      title: "Quickstart",
      description: "Learn how to quickly connect to Avalanche C-Chain and make calls to the network."
    },
    {
      href: "./avalanche-c-chain/json-rpc-methods",
      title: "JSON-RPC APIs",
      description: "View the APIs available for communicating with the Avalanche C-Chain network."
    },
    {
      href: "../../dashboard/create-api",
      title: "Create an API key",
      description: "Learn how to create an API key and secure and share it with your team."
    }
  ]}
/>