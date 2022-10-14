import React from "react";

export default function Tooken() {
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-12  mt-5">
            <h1 className="my-5">
              Tooker <span className="text-danger  fw-bold">Distribution</span>
            </h1>
          </div>
        </div>
        <div className="row text-center ">
          <div className="col-md-4">

          </div>
          <div className="col-md-1 mt-5 ms-2">
            <h3 className="fs-6">10% <br /> Lequdity</h3>
            
          </div>

          <div className="col-md-2 ms-2">
            <h5>
              {" "}
              <strong>50%</strong>
            </h5>
            <strong>Liquidity Rewards</strong>
            <br />
            <strong>(Locked)</strong>
          </div>

          <div className="col-md-2 mt-5 pe-5 ms-2">
            <h3 className="fs-6">10% <br /> Team_Locked</h3>
          </div>
        </div>

        <div className="tooken" >
          <div className="tooken1 ">

          <div className="row ">
            <div className="col-md-6 mt-5">
            <h3 className="me-5 pt-3 ps-5 fs-6">10%  <br /> Growth hacking</h3>

            </div>
            <div className="col-md-6 ms-6 ps-5">
              <h3 className="pt-5 ps-5 fs-6">20%  <br /> Public Sales</h3>
              {/* <strong className="ps-5 fs-6">Public Sales</strong> */}
            </div>
          </div>

          </div>
          {/* <img src="assets/plate.png" alt=" " width={500} /> */}
          {/* <img src="assets/line.png" alt=" " width={500} /> */}
          
        </div>
      </div>
    </div>
  );
}
