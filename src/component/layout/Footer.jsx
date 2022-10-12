import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container-fluid pt-2   " id='foot'>

<div className="container  mt-5 " >


<div className="row">

  <div className=" col-6 col-md-3   ">
  <a className="navbar-brand" href="#"><img src="assets/logo.png" alt=" "width={200} /></a>

  <p>Decentralized Spot and Futures Trading on Binance Smart Chain</p>


  </div>
  <div className="col-6 col-md-3  ">

  </div>
  <div className="col-6 col-md-3  ">



  </div>
  
  <div className="col-6 col-md-3 ">

  <div className="col-md-12">

<AiFillTwitterCircle size={30} color="blue" />

<AiFillLinkedin size={30} color="black"/>
<AiFillTwitterCircle size={30} color="red" />

<AiFillLinkedin size={30} color="yellow"/>
<AiFillTwitterCircle size={30} color="blue" />

<AiFillLinkedin size={30} color="black"/>
<br />
<p>exchange@porkswap.finance</p>


</div>

  </div>
<hr />
<div className="row">

<div className="col-md-12 text-center">

<div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
</div> 




</div>
</div>
</div>
    </div>
  )
}

export default Footer
