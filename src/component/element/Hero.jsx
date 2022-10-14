import React from "react";
import Par from "./Par";



export default function Hero() {
  return (
    
    <div className="container1 img-fluid position-relative ">
      <div className=" particals postion-absolute">

      <Par />
      </div>


      <div className="counter px-5 my-5 fw-bold" id="hero">

        <div className="row">
          <div className="col-md-6  ms-12 lead text-white jumbo col-lg-6 col-xs-12 pt-lg-5 mt-lg-4 jumbo ">
            <h1>Decentralized Spot and Futures Trading on BSC</h1>
            <p className="text-white">
              Automated market maker powered, taking De-Fi game to the next
              level. Make instant spot exchange, leveraged trades, provide
              liquidity to earn returns and rewards.
            </p>

            <p className="lead" style={{width:"100"}}>
            <a href=""   className="btn btn-warning btn-lg pl-4 pr-4 shadow btn-block w-100"  >Spoart Trading Platform Launched</a>
            <hr />

            
            </p>
            <div className="mt-3">
<a href="" className="btn btn-danger shadow btn-block col bg-danger text-white text-decoration-none">Earn PSWAP</a>
<a href="" className=" btn btn-danger shadow btn-block col  mx-1 bg-danger text-white text-decoration-none">Trade on PCS</a>
<a href="" className=" btn btn-danger shadow btn-block col bg-danger text-white text-decoration-none ">Governance</a>


            </div>
          </div>
          <div className="col-md-6 text-center d-none  d-md-block">
          <img src="assets/pig.png" alt=" " width={400} />


          

          </div>


        </div>
      </div>
    </div>
  );
}
