import React from 'react'

export default function Roadmap() {
  return (
    <div>

        <div className="container  mt-5 bg-white">
            <div className="row">
                <div className="col-md-12 text-center">
<h1>Product Roadmap</h1>
<div className="container" >
<img className="my-5" src="assets/map.png" alt=" " width={700} />
</div>

                </div>
                <hr />
                <div className="row my-5">

                    <div className="col-md-8 ">
                    <img src="assets/laptop.png" alt=" " width={500} />

                    </div>
                    <div className="col-md-4">


                       <div  className="text-center">
                       <h2>Governance Platform</h2>
                        <a href="" className="bg-warning text-dark fw-bold">Lauched, Start Votting Now</a>
                       </div>
                       <div>
                        <ul className="">
                           <span className="fw-bold"> You'll be able to vote for:</span>
                            <li>Change in underlying protocol</li>
                            <li>Change in pricing oracle
</li>
<li>Change in futures funding rate
</li>
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
  )
}
