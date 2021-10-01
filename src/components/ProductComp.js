import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./html/SalesPartnerPageStyle.css";
import imglogo3 from "./html/KidzieLogo3.png";
import { useGlobalContext } from "../Context";

export default function ProductComp() {
  //copied from CouponsList
  const {
    isEditing,
    setIsEditing,
    couponsList,
    setcouponsList,
    editID,
    setEditID,
    setAlert,
    isAdding,
    setIsAdding,
  } = useGlobalContext();

  return <div>hello from Product Component</div>;
}
