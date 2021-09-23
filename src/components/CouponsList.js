import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './html/PromoCodesPageStyle.css'
import imglogo3 from './html/KidzieLogo3.png'

export default function CouponsList() {
    const [couponsList,setcouponsList]=useState([]);
    const couponsListAsync=async ()=>{
        const couponsList=await axios.get("http://localhost:4230/app/v1/sales/allCoupons");
        console.log(couponsList.data.data.salesCoupons);
        return couponsList.data.data.salesCoupons;
      }

      useEffect(() => {
        couponsListAsync()
         .then(resp => setcouponsList(resp))
        }, []) 
  return (
    <div style={{backgroundColor: "#F5F5DC;" }}>
        hello from CouponsList
      <div class="row">
        <div class="column1 " style={{backgroundColor: "#F5F5DC;" }}>
          <a href="Home.html">
            <img data-v-0df74896="" id="kidzieLogo" src={imglogo3}  style={{width: "2.5%;" ,height:"20%" ,textAlign:"left top"}}/>
            </a>
        </div>

        <div class="column2 left" style={{backgroundColor:"#be9428"}}>
        </div>

      </div>
      <p class= "form"> Promo Codes </p>
     
      <form >
      <div style={{overflowX:"auto;", position: "relative; left: 200px;" }} >
          <table>
            <tr>
              <th>Code</th>
              <th>Status</th>
              <th>Starts</th>
              <th>Ends</th>
              <th>Percentage</th>
              <th>Emails</th>
              <th>Criteria </th>
              <th>Action </th>
            </tr>
            <tr>
              <td><h2><b>HappyDay1</b></h2></td>
              <td>Active</td>
              <td>Jan 29,2020</td>
              <td>Jan 29,2022</td>
              <td>5%</td>
              <td>None</td>
              <td><a href="">Criteria</a></td>
              <td><a href="">Edit</a> <br/> <a href="">Stop</a></td>
            </tr>
            <tr>
              <td><h2><b>HappyDay2</b></h2></td>
              <td>Active</td>
              <td>Jan 29,2020</td>
              <td>Jan 29,2022</td>
              <td>10%</td>
              <td><a href="">Emails</a></td>
              <td>None</td>
              <td><a href="">Edit</a> <br/> <a href="">Stop</a></td>
            </tr>
            <tr>
              <td><h2><b>HappyDay3</b></h2></td>
              <td>Inactive</td>
              <td>Jan 29,2020</td>
              <td>Feb 29,2020</td>
              <td>20%</td>
              <td>None</td>
              <td>None</td>
              <td><a href="">Edit</a> <br/> <a href="">Stop</a></td>
            </tr>
            <tr>
              <td><h2><b>HappyDay4</b></h2></td>
              <td>Inactive</td>
              <td>Feb 29,2020</td>
              <td>Mar 20,2020</td>
              <td>15%</td>
              <td><a href="">Emails</a></td>
              <td><a href="">Criteria</a></td>
              <td><a href="">Edit</a> <br/> <a href="">Stop</a></td>
            </tr>
          </table>
        </div>
        <br/><br/><br/>
        <input class="button button1 button3" type="submit" id="button" target="_parent" value="Add Promo Code" style={{position: "relative; left: 1150px" }}/>
        <br/><br/><br/>
        </form>
    </div>
  )
}
