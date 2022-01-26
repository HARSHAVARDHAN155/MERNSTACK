import { blue } from "@mui/material/colors";
import { Box, fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useNavigate, useLocation } from "react-router";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Myorders_buyer = (props) => {
    const navigate = useNavigate();

    


    return (
        <div>
            <div> <Buyer_Navbar></Buyer_Navbar></div>
            {/* <div> <Wallet /> </div> */}
            <h3  className="center"> My Orders</h3>
           
           
             </div>

    );
};
export default Myorders_buyer;
