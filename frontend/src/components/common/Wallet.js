import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Buyer_Navbar from "../templates/Buyer_Navbar";
export default function Wallet() {

  const [a, b] = useState(0);
  const [c, d] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeAmount = (event) => {
    b(event.target.value);
  };
  const Ontotal = (event) => {
    setTotal(parseInt(total) + parseInt(a));
  }
  const onSubmit = (event) => {
    event.preventDefault();
    Ontotal();

  }

  return <div>
    <h1><center> Wallet</center></h1>
    <div> <center>Wallet amount : {total}</center>
    </div>
    <div style={{ marginTop: 40 }} >
      <Grid container align={"center"} spacing={3}>

        <Grid item xs={12}>
          <TextField
            label="enter amount"
            variant="outlined"
            value={a}
            onChange={onChangeAmount}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            add to wallet
          </Button>
        </Grid>
      </Grid>
    </div>
  </div>;
}

