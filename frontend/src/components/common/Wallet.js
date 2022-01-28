import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Buyer_Navbar from "../templates/Buyer_Navbar";
export default function Wallet() {

  const [a, b] = useState(0);
  const [c, d] = useState(0);
  const [wallet, setwallet] = useState(0);
  const [total, setTotal] = useState(0);
  const[id,setId]=useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const Nuser = {
    email: email,

  }
  useEffect(() => {
    axios
      .post('http://localhost:4000/user/xxx', Nuser)
      .then((response) => {
        // console.log(response.data);
        if (response.data.val == 1) {

          setwallet(response.data.wallet);
          setId(response.data.id);

        }
      })
      .catch((error) => {
        console.log(error);
      }
      );          // setc(response.contactNumber)
  }, [])
  console.log(wallet,id);
  // setTotal(wallet);

  const onChangeAmount = (event) => {
    b(event.target.value);
  };
  const Ontotal = (event) => {
    setTotal(parseInt(total) + parseInt(a));
  }
 
  const onSubmit = (event) => {
    const updating ={
      wallet :total,
      id:id
    }
    event.preventDefault();
    Ontotal();
    axios.put("http://localhost:4000/vendor/wallet_update", updating).then((response) => {
          alert("updted");
    })

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

