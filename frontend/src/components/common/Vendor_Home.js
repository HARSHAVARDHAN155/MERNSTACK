import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Vendor_Navbar from "../templates/Vendor_Navbar";


export class Vendor_Home extends Component {
  render() {
    return <div>
      <div> <Vendor_Navbar/> </div>
        <h1> <center> Welcome to Vendor page </center> </h1>
    </div>
  }
}

export default Vendor_Home;


