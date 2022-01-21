import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useLocation } from "react-router";

function Buyer_Home() {
  let location = useLocation();
  return <div>
    <div> <Buyer_Navbar></Buyer_Navbar></div>
    <div> <Wallet/> </div>
    <h1><center>Welcome {location.state}</center></h1>
  </div>;
}

export default Buyer_Home;
