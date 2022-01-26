import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import React from 'react';

const Vendor_Home = (props) => {
  const navigate = useNavigate();

  let location = useLocation();
  const [Managername, setUser] = useState("");
  const [contactNumber, setc] = useState("");
  // const [Manager, setAge] = useState("");
  const [Canteen, setBatch] = useState("");
  const [opening, setopen] = useState("");
  const [closing, setclose] = useState("");
  const [Address, setAdd] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [type, setType] = useState(localStorage.getItem("type"));

  const onChangeMangerName = (event) => {
    setUser(event.target.value);
  };

  const onChangeEmail = (event) => {
    // setEmail(event.target.value);
  };
  const onChangeContact = (event) => {
    setc(event.target.value);
  };
  const onChangeCanteen = (event) => {
    setBatch(event.target.value);
  };
  const onChangeopen = (event) => {
    setopen(event.target.value);
  };
  const onChangeclose = (event) => {
    setclose(event.target.value);
  };
  const onChangeAddress = (event) => {
    setAdd(event.target.value);
  };
  const onChangePassword = (event) => {
    // setPass(event.target.value);
  };

  const Nuser = {
    email: email,

  }
  const onSubmit = (event) => {
    event.preventDefault();

    const NUser = {
        name: Managername,
        email: email,
        contactNumber: contactNumber,
        Canteen:Canteen,
        opening : opening,
        closing :closing,
        Address:  Address,
   
        // password: password,
        date: Date.now(),
    };

    axios
        .post("http://localhost:4000/user/vendor_edit", NUser)
        .then((response) => {
            alert("sucessfully edited\t");
            console.log(response.data);
        });

  };
  useEffect(() => {

      if (type !== "vendor") {

        alert("You do not have permission to access this page");
        navigate("/")
      }
    axios
      .post('http://localhost:4000/user/vendor', Nuser)
      .then((response) => {
        console.log(response.data);
        if (response.data.val == 1) {
          console.log(response.data);
          setUser(response.data.Managername);
          setc(response.data.contactNumber);
          setBatch(response.data.canteenname);
          setAdd(response.data.Address);
          setclose(response.data.closing);
          setopen(response.data.opening);

          console.log(response.data);
          console.log("here");

        }
        else {
          alert("no fetch here im searching");
        }
      })
      .catch((error) => {
        console.log(error);
      }
      );          // setc(response.contactNumber)
  }, [])

  return <div>
    <Vendor_Navbar />
    <div><h1><center>Welcome to vendor page Mr/Mrs {Managername} </center></h1></div>
    <div><h2><center>This is your Profile</center></h2></div>
    <div className="profile">
      <div><h2>Manager Name: {Managername} </h2></div>
      <div><h2>Canteen Name: {Canteen} </h2></div>
      <div><h2>Opening Time: {opening} </h2></div>
      <div><h2>closing Time: {closing} </h2></div>
      <div><h2>contact Number: {contactNumber} </h2></div>
      <div><h2>Address: {Address}</h2></div>
    </div>
    <h3 className="center">You can edit your  Profile below </h3>
    <div style={{ marginTop: 40 }} >
      <Grid container align={"center"} spacing={3}>

        <Grid item xs={12}>
          <TextField
            label="MangerName"
            variant="outlined"
            value={Managername}
            onChange={onChangeMangerName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="You can't edit Email"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="CanteenName"
            variant="outlined"
            value={Canteen}
            onChange={onChangeCanteen}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            variant="outlined"
            value={contactNumber}
            onChange={onChangeContact}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Open Time (HH:MM:SS)"
            variant="outlined"
            value={opening}
            onChange={onChangeopen}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="close time (HH:MM:SS)_"
            variant="outlined"
            value={closing}
            onChange={onChangeclose}
          />
        </Grid>
        <Grid item xs={12}>
                        <TextField

                            label="Address"
                            variant="outlined"
                            value={Address}
                            onChange={onChangeAddress}
                            
                        />
                     </Grid>
        {/* <Grid item xs={12}>
                        <TextField
                            
                            label="Password"
                            variant="outlined"
                            value={password}
                            type="password"
                            onChange={onChangePassword}
                        />
                     </Grid> */}
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </div>


  </div>;
}

export default Vendor_Home;


