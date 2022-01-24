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



const Vendor_edit = (props) => {
    const navigate = useNavigate();

    let location = useLocation();
    const [MangerName, setMangerName] = useState("");
    const [contactNumber, setc] = useState("");
    const [CanteenName, setAge] = useState("");
    const [Address, setAddress] = useState("");
    const [opening, setopen] = useState("");
    const [closing, setclose] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState(localStorage.getItem("email"));

    const onChangeMangerName = (event) => {
        setMangerName(event.target.value);
    };

    const onChangeEmail = (event) => {
        // setEmail(event.target.value);
    };
    const onChangeContact = (event) => {
        setc(event.target.value);
    };
    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
    const onChangeopen = (event) => {
        setopen(event.target.value);
    };
    const onChangeclose = (event) => {
        setclose(event.target.value);
    };
    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const onChangePassword = (event) => {
        setPass(event.target.value);
    };

    const Nuser = {
        email: email,

    }

    useEffect(() => {

        axios
            .post('http://localhost:4000/user/vendor', Nuser)
            .then((response) => {
                console.log(response.data);
                if (response.data.val == 1) {
                    console.log(response.data);
                    setMangerName(response.data.Managername);
                    setAge(response.data.canteenname);
                    setc(response.data.contactNumber);
                    setAddress(response.data.Address);
                    setclose(response.data.closing);
                    setopen(response.data.opening);
                    console.log(response.data);
                    console.log("here");

                }
                else {
                    alert("no fetch looking");
                }
            })
            .catch((error) => {
                console.log(error);
            }
            );          // setc(response.contactNumber)
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();

        const NUser = {
            MangerName:MangerName,
            contactNumber :contactNumber,
            CanteenName :CanteenName,
            Address : Address,
            // password: password,
            date: Date.now(),
        };

        axios
            .post("http://localhost:4000/user/buyer_edit", NUser)
            .then((response) => {
                alert("sucessfully edited\t" + response.data.name);
                console.log(response.data);
            });

    };

    return (
        <div>
            <div> <Buyer_Navbar></Buyer_Navbar></div>
            {/* <div> <Wallet /> </div> */}
            <h3 className="center"> Profile edit </h3>
            <div style={{ marginTop: 40 }} >
                <Grid container align={"center"} spacing={3}>

                    <Grid item xs={12}>
                        <TextField
                            label="MangerName"
                            variant="outlined"
                            value={MangerName}
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
                            value={CanteenName}
                            onChange={onChangeAge}
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
                            label="Open Time (eg: 10.00 am)"
                            variant="outlined"
                            value={opening}
                            onChange={onChangeopen}
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
                            label="close time (eg: 5.00 pm)_"
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
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onSubmit}>
                            Save Profile
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </div>

    );
};
export default Vendor_edit;
