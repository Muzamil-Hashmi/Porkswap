import React from "react";

export default function Pswap() {
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
            <h1 className="text-center">$PSWAP <span className="text-danger"> Utilities </span></h1>
          <div className="col-md-4 mt-5 ">
          <img src="assets/10007.png" alt=" " width={100} />

            <h5>Governance</h5>
            <p>

              Vote to modify underlying protocol, change in pricing oracle,
              futures funding rate, platform fees, list/de-list tokens, new
              features
            </p>
          </div>
          <div className="col-md-4 mt-5 ">
          <img src="assets/10008.png" alt=" " width={100} />

            <h5>Incentives</h5>
            <p>

            Liquidity providers will be incentivized in $PSWAP for their participation in spot and leverage liquidity pools, and LP tokens can be staked for ARR of around 125%
            </p>
          </div>
          <div className="col-md-4 mt-5 ">
          <img src="assets/10009.png" alt=" " width={100} />

            <h5>Deflaction</h5>
            <p>
            With a fixed supply of 1 million tokens, and only 200,000 in circulation, $PSWAP token will increase in value overtime since it'll be scarce and the team will buy back and burn tokens from platform revenue generated through spot and futures trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
