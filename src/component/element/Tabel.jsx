import React from "react";
import {BsCheckLg} from 'react-icons/bs'
import {GiCheckMark} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'


export default function Tabel() {
  return (
    <div className="container-fluid " id="tabel">
      <div className="container">
        <h1 className="text-center mt-5 fw-bold">Comparison Table</h1>
        <h3 className="text-center ">We are building whole ecosystem tools for future identities and data.</h3>
        <div className="row">
          <div className="col-md1-12 ">

          <table className="table caption-top mt-5">
 
  <thead>
    {/* <tr>
      <th scope="col"></th>
      <th className="w-1" scope="col"><img src="assets/logo.png" alt=" " /></th>
      <th className="w-1" scope="col"><img className="" src="assets/hot.png" alt=" "  />
</th>
<th className="w-1" scope="col"><img src="assets/base.png" alt=" " /></th>

    </tr> */}
  </thead>
  <tbody>
    <tr className="bg-white" >
      <th scope="row ">Automated Market Maker</th>
      <td><BsCheckLg color="green"/></td>
      <td><GiCheckMark color="green"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
    <tr className="table-active bg-white ">
      <th scope="row">Spot Trading</th>
      <td><BsCheckLg color="green"/></td>
      <td><BsCheckLg color="green"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
    <tr className="bg-white">
      <th scope="row">Futures Trading</th>
      <td><ImCross color="red"/></td>
      <td><ImCross color="red"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
    <tr className="table-active bg-white">
      <th scope="row">Governance</th>
      <td><BsCheckLg color="green"/></td>
      <td><BsCheckLg color="green"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
    <tr className="bg-white">
      <th scope="row">Leveraged Trading</th>
      <td><ImCross color="red"/></td>
      <td><ImCross color="red"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr >
    <tr className="table-active bg-white">
      <th scope="row">Gas Fees</th>
      <td className="text-danger fw-bold">$71.53</td>
      <td className="text-danger fw-bold">$0.42</td>
      <td className="text-success fw-bold">$0.42</td>
    </tr>
    <tr className="bg-white">
      <th scope="row">Inflationary</th>
      <td><BsCheckLg color="red"/></td>
      <td><BsCheckLg color="red"/></td>
      <td><ImCross color="red"/></td>
    </tr>
    <tr className="table-active bg-white">
      <th scope="row">Deflationary</th>
      <td><ImCross color="red"/></td>
      <td><ImCross color="red"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
    <tr className="bg-white">
      <th scope="row">Fixed Supply</th>
      <td><BsCheckLg color="green"/></td>
      <td><ImCross color="red"/></td>
      <td><BsCheckLg color="green"/></td>
    </tr>
  </tbody>
</table>

          </div>
        </div>
      </div>
    </div>
  );
}
