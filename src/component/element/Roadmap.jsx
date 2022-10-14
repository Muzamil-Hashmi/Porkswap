import React from "react";

export default function Roadmap() {
  return (
    <div>
      <div className="container-fluid  mt-5 bg-white">
        <div className="row">
          <div className="col-md-12  ms-12 text-center">
            <h1>Product <span className="text-danger fw-bold"> Roadmap </span></h1>
            <div className="container-fluid" id="map">
              <img className="my-5 w-100" src="assets/map.png" alt=" "  />
            </div>
          </div>
          <hr />
          <div className="row my-5">
            <div className="col-md-8  ">
              <img className="w-100" src="assets/laptop.png" alt=" "  />
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h2>Governance Platform</h2>
                <a href="" className="bg-warning text-dark fw-bold">
                  Lauched, Start Votting Now
                </a>
              </div>
              <div>
                <ul className="">
                  <span className="fw-bold"> You'll be able to vote for:</span>
                  <li>Change in underlying protocol</li>
                  <li>Change in pricing oracle</li>
                  <li>Change in futures funding rate</li>
                  <li>Change in platform fees</li>
                  <li>Change inlist/de-list tokens</li>
                  <li>Propose new features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
