import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './html/PromoCodesPageStyle.css'
import imglogo3 from './html/KidzieLogo3.png'
import { useGlobalContext } from '../Context';

export default function CouponsList() {
    
const {isEditing,setIsEditing,couponsList,setcouponsList,editID,setEditID,setAlert}=useGlobalContext();
    const couponsListAsync=async ()=>{
        const couponsList=await axios.get("http://localhost:4230/app/v1/sales/allCoupons");
        console.log(couponsList.data.data.salesCoupons);
        return couponsList.data.data.salesCoupons;
      }
      const removeItem = (id) => {
       //showAlert(true, 'danger', 'item removed');
        //setList(list.filter((item) => item.id !== id));
        console.log(id,'removed');
      };
      const editItem = (id) => {
        setIsEditing(true);
        // const specificItem = list.find((item) => item.id === id);
        // setIsEditing(true);
        // setEditID(id);
        // setName(specificItem.title);
        console.log(id,'edit item');
      };

      useEffect(() => {
        couponsListAsync()
         .then(resp => setcouponsList(resp))
        }, []) 

        const tableData = couponsList.map((coupon)=>{
            const {_id,status,code}=coupon;
            return <tr key={_id}><td><b>{code}</b></td><td>{status}</td><td>{code}</td><td>{status}</td><td>{code}</td><td>{status}</td><td>{code}</td><td><div className='btn-container'>
            <button
              type='button'
              className='edit-btn'
              onClick={() => editItem(_id)}
            >
              <FaEdit />
            </button>
            <button
              type='button'
              className='delete-btn'
              onClick={() => removeItem(_id)}
            >
              <FaTrash />
            </button>
          </div></td></tr>
        } );

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('handeled click!');
    
      setEditID(1);
      setIsEditing(!isEditing);
      
         };
        
          const showAlert = (show = false, type = '', msg = '') => {
            setAlert({ show, type, msg });
          };

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
     
      <form  onSubmit={handleSubmit}>
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
            <tbody>{tableData}</tbody>
            
          </table>
        </div>
        <br/><br/><br/>
        <button type='submit' className='button button1 button3' style={{position: "relative; left: 1150px" }}>
            {isEditing ? 'Edit Coupon' : 'Add Coupon'}
          </button>
        
        <br/><br/><br/>
        </form>
    </div>
  )
}
