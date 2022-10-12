import React from "react";

function Cards() {
  return (
    <div>
      <div className="container text-center mt-5 ">
        <div className="row">
          <div className="col-md-4 ">
            <img src="assets/10001.png" alt=" " width={100} />

            <h1>Deflationary</h1>
            <p>
              While other spot platform tokens mint 750,000 tokens per day,
              we're aiming to burn 10% everyday through the revenue generated
              from the platform. Increasing the value of token over 30X within a
              year
            </p>
          </div>

          <div className="col-md-4  card " id="card">
            <img src="assets/10002.png" alt=" " width={100} />

            <h1>Community Governance</h1>
            <p>
              We believe in democratizing access to finance, what else can be a
              better way to give entire power to the community. Create custom
              polls, vote for good ones, bring new ideas to the table, change
              the world for better.F
            </p>
          </div>
          <div className="col-md-4 ">
            <img src="assets/10003.png" alt=" " width={100} />

            <h1>Future Trading</h1>
            <p>
              Bringing forward the true meaning of De-Fi that's decentralizing
              current financial products, bringing derivatives through futures
              trading so you can increase your returns on profit. Buy long or
              sell short, it's on you
            </p>
          </div>
          <div className="col-md-4 " id="card">
            <img src="assets/10004.png" alt=" " width={100} />

            <h1>Spot Trading</h1>
            <p>
              Improved automated market maker to provide instant fulfillment of
              orders with less slippage, exchange your favourite tokens with 10
              times less gas than Ethereum.
            </p>
          </div>
          <div className="col-md-4 ">
            <img src="assets/10005.png" alt=" " width={100} />

            <h1>Lottery</h1>
            <p>
              While other spot platform tokens mint 750,000 tokens per day,
              we're aiming to burn 10% everyday through the revenue generated
              from the platform. Increasing the value of token over 30X within a
              year
            </p>
          </div>
          <div className="col-md-4 " id="card">
            <img src="assets/10006.png" alt=" " width={100} />

            <h1>Security</h1>
            <p>
              While other projects are getting DNS hijacked, we ensure the
              security of our platform from DNS all the way to Smart Contract
              are state-of-the-art secured
            </p>
          </div>
        </div>

        <div className="my-5">
        <img src="assets/logo.png" alt=" " width={200} />
        <img  className="mx-5" src="assets/cap.png" alt=" " width={200} />
        <img src="assets/base.png" alt=" " width={200} />
        <img className="mx-5" src="assets/hot.png" alt=" " width={200} />



        </div>
      </div>
    </div>
  );
}

export default Cards;
