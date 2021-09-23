import React from 'react'
import { Link } from 'react-router-dom'
import './html/PromoCodesPageStyle.css'
export default function CouponsAdd() {
  return (
    <div>
        hello from Coupons Add
        <p class= "form"> Adding Promo Code </p>
        <br />
               <form action="#" method="POST" class="form1" style={{backgroundColor: "#F5F5DC;"}} >
                 <br />
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Product Group &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="required">*</span></label>
                 <select name="on sale" style={{backgroundColor:"#F5F5DC;" }}>
                 <option value="">Please Select</option>
                     <option value="1">Yes</option>
                 <option value="2">No</option>
                 </select> &nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                 <label class="label"> Promo Starts <span class="required">*</span></label>
                 <input  placeholder="From" style={{backgroundColor:"#F5F5DC",width: "180px;"}} class="textbox-n" type="text" onfocus="(this.type='date')" id="date" />
                <br /><br />
        
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Designer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="required">*</span></label>
                 <select name="product group" style={{backgroundColor:"#F5F5DC;"}} >
                 <option value="">Please Select</option>
                 <option value="1">-</option>
                 <option value="2">-</option>
                 </select>
        
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                 <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo Ends &nbsp; <span class="required">*</span></label>
                 <input  placeholder="To" style={{backgroundColor:"#F5F5DC;" ,width: "180px;"}} class="textbox-n" type="text" onfocus="(this.type='date')" id="date" />
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
                <select name="sale" style={{backgroundColor:"#F5F5DC;" }}>
                    <option value="">Please Select</option>
                    <option value="1">5%</option>
                    <option value="2">10%</option>
                    <option value="3">15%</option>
                    <option value="4">20%</option>
                </select><br/><br/> 
        
            <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="required">*</span></label>
                <select name="on sale" style={{backgroundColor:"#F5F5DC;"}} >
            <option value="">Please Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
                </select><br/> &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label class="label"> &nbsp;&nbsp;&nbsp;&nbsp; Promo Code &nbsp; <span class="required">*</span></label>
                <input type="text" style={{backgroundColor:"#F5F5DC;"}} pattern="[A-Za-z0-9]+" name="general search" required/>   
                <br/><br/>
        
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
                <label class="label"> &nbsp;&nbsp;&nbsp; Customer Email <span class="required">*</span></label>
                <input type="text" style={{backgroundColor:"#F5F5DC;" }} pattern="[A-Za-z0-9]+" name="general search" required/>   
                <br /><br /><br />
            <input class="button button1 button3" type="submit" value="Save"/><br/><br/><br /><br/>
            
            <input class="button button1 button2" type="submit" value="Cancel"/>
        </form>
    </div>
  )
}
