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

    let location = useLocation();
    const [name, setUser] = useState("");
    const [contactNumber, setc] = useState("");
    const [age, setAge] = useState("");
    const [batch, setBatch] = useState("");
    const [password, setPass] = useState("");
    const [wallet, setWallet] = useState(0);
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [type, setType] = useState(localStorage.getItem("type"));
    
    const onChangeUsername = (event) => {
        setUser(event.target.value);
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
    const onChangebatch = (event) => {
        setBatch(event.target.value);
    };
    const onChangePassword = (event) => {
        setPass(event.target.value);
    };

    const Nuser = {
        email: email,

    }

    useEffect(() => {

        axios
            .post('http://localhost:4000/user/xxx', Nuser)
            .then((response) => {
                console.log(response.data);
                if (response.data.val == 1) {
                    console.log(response.data);
                    setUser(response.data.name);
                    setAge(response.data.age);
                    setc(response.data.contactNumber);
                    setBatch(response.data.batch);
                    setWallet(response.data.wallet);
                    console.log(response.data);
                    console.log("here");

                }
                else {
                    alert("no fetch");
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
            name: name,
            email: email,
            contactNumber: contactNumber,
            age: age,
            batch: batch,
            wallet:wallet,
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
            <h3  className="center"> My Orders</h3>
           
           
             </div>

    );
};
export default Myorders_buyer;
