import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import { useLocation } from "react-router";
import React from 'react';

function Vendor_Home() {
    let location = useLocation();
    return <div>
        <Vendor_Navbar />
        <div><h1><center>Canteen Food menu </center></h1></div>
    </div>;
}

export default Vendor_Home;


