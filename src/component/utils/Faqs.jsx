import React, { Component } from "react";
import Faq from "react-faq-component";

const data = {
 
  rows: [
    {
      title: "What is PorkSwap?",
      content:
        "PorkSwap is a decentralized platform for spot and futures trading. You can trade any BEP-20 tokens on Binance Smart Chain. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Porkswap will be open-source under GPL license. ",
    },
    
    {
      title: "How do I use PorkSwap?",
      content:
        "First you’ll need a Binance Smart Chain Wallet and some BNB. Once completed, head over to the app to start using the platform to provide liquidity to spot or leverage pool and place orders. Remember that each transaction on BSC costs BNB (this is called the “gas fee” and it’s paid to miners to keep the network running).",
    },
    {
      title: "How to participate in the PSWAP token airdrop?",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
    {
      title: "Where will the PSWAP token be listed?",
      content: "PorkSwap uses oracles for determining real-time price of tokens, which then can be leveraged by borrowing liquidity from the lending pool. You can leverage a trade up to 5X, when you use leverage, you're given Proxy tokens which can later be exchanged to real underlying tokens when you close a leveraged trade.",
    },
    {
      title: "How will the token sale funds be used?",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
    {
      title: "How does Spot Trading Work?",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
    {
      title: "How 50% reserved tokens will be distributed?",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
    {
      title: "What are the platform fees??",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
    {
      title: "What is the insurance fund?",
      content:
        "In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.",
    },
  ],
};

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid py-5" id="faq" >

<div className="container text-center  fw-bold" >
        <h1>FAQs</h1>
        <div className="row">
          <div className="col-md-12">
            <Faq data={data} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
