import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Buyer_Navbar from "../templates/Buyer_Navbar";


export class Buyer_Home extends Component {
  render() {
    return <div>
      <div><Buyer_Navbar></Buyer_Navbar></div>
        <h1> <center> Welcome </center> </h1>
    </div>
  }
}

export default Buyer_Home;


