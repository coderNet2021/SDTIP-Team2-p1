import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import './html/PromoCodesPageStyle.css'
import axios from "axios";
import { useGlobalContext } from '../Context';

export default function CouponsAdd() {
  const {isEditing,setIsEditing,couponsList,setcouponsList,editID,setEditID,setAlert,isAdding,setIsAdding}=useGlobalContext();
  
  const [state,setState]=useState({code:'',status:'active',startDate:'',endDate:'',percentage:'',productGroup:'',designer:''});
  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name)
    const value = e.target.value;
    console.log(value)
    setState({ ...state, [name]: value });
  };
  const handleCancel=(e)=>{
    e.preventDefault();
    setIsAdding(false);
    setIsEditing(false);
  }
  const handleSaveSubmit=(e)=>{
    e.preventDefault();
      const newCoupon = { ...state };
      setcouponsList([...couponsList, newCoupon]);
     console.log(newCoupon);
    console.log("hello from save!");
    
    //send the registered to the backend
    axios
      .post("http://localhost:4230/app/v1/sales/saveCoupon", newCoupon)
      .then((response) => console.log(response.data));

    //window.location(./home);

    // this.setState({
    //   fullName: "",
    //   username: "",
    //   password: "",
    //   email: "",
    // });
  }
  
  return (isAdding &&
    <div>
        hello from Coupons Add
        <p class= "form"> Adding Promo Code </p>
        <br />
               <form onSubmit={handleSaveSubmit} class="form1" style={{backgroundColor: "#F5F5DC;"}} >
                 <br />
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Product Group &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="required">*</span></label>
                 <select name="productGroup" style={{backgroundColor:"#F5F5DC;" }} value={state.productGroup} onChange={handleChange} >
                 <option value="">Please Select</option>
                     <option value="1">Product Group 1</option>
                 <option value="2">Product Group 2</option>
                 </select> &nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                 <label class="label"> Promo Starts <span class="required">*</span></label>
                 <input  placeholder="From" style={{backgroundColor:"#F5F5DC",width: "180px;"}} class="textbox-n" type="date" onfocus="(this.type='date')" id="date" name ="startDate" value={state.startDate} onChange={handleChange}/>
                <br /><br />
        
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Designer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="required">*</span></label>
                 <select name="designer" style={{backgroundColor:"#F5F5DC;"}} value={state.productGroup} onChange={handleChange} >
                 <option value="">Please Select</option>
                 <option value="1">Designer 1</option>
                 <option value="2">Designer 2</option>
                 </select>
        
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo Ends &nbsp; <span class="required">*</span></label>
                 <input  placeholder="To" style={{backgroundColor:"#F5F5DC;" ,width: "180px;"}} class="textbox-n" type="date" onfocus="(this.type='date')" id="date" name="endDate" value={state.endDate} onChange={handleChange}/>
                <br /><br />
        
                <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp; <span class="required">*</span></label>
                    <div id="list1" class="dropdown-check-list" tabindex="100">
                        <span class="anchor">Please Select</span>
                        <ul class="items">
                          <li><input type="checkbox" style={{position: "relative;right: 110px;"}}/>Shirts </li>
                          <li><input type="checkbox" style={{position: "relative;right: 110px;"}}/>Polos</li>
                          <li><input type="checkbox" style={{position: "relative;right: 110px;"}}/>T-Shirts</li>
                          <li><input type="checkbox" style={{position: "relative;right: 110px;"}}/>Graphics</li>
                          <li><input type="checkbox" style={{position: "relative;right: 110px;"}}/>Blouses</li>
                        </ul>
                      </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <label class="label">  Promo % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="required">*</span></label>
                <select name="percentage" style={{backgroundColor:"#F5F5DC;" }}value={state.percentage} onChange={handleChange}>
                    <option value="">Please Select</option>
                    <option value="1">5%</option>
                    <option value="2">10%</option>
                    <option value="3">15%</option>
                    <option value="4">20%</option>
                </select><br/><br/> 
        
            <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="required">*</span></label>
                <select name="status" style={{backgroundColor:"#F5F5DC;"}} value={state.status} onChange={handleChange}>
            <option value="">Please Select</option>
                <option value="1">active</option>
                <option value="2">stopped</option>
                </select><br/> &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo Code &nbsp; <span class="required">*</span></label>
                <input type="text" style={{backgroundColor:"#F5F5DC;"}} pattern="[A-Za-z0-9]+" name="code" value={state.code} onChange={handleChange} required/>   
                <br/><br/>
        
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
                <label class="label"> &nbsp;&nbsp;&nbsp; Customer Email <span class="required">*</span></label>
                <input type="text" style={{backgroundColor:"#F5F5DC;" }} pattern="[A-Za-z0-9]+" name="email" required/>   
                <br /><br /><br />
            <input class="button button1 button3" type="submit" value="Save"/><br/><br/><br /><br/>
            
            <input class="button button1 button2" type="button" onclick={handleCancel} value="Cancel"/>
        </form>
    </div>
  )
}
