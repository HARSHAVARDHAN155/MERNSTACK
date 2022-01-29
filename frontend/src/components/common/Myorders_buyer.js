import { blue } from "@mui/material/colors";
import { Box, fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useNavigate, useLocation } from "react-router";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Myorders_buyer = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [users, setUsers] = useState([]);
    const [respon, setres] = useState("");
    const [total, setTotal] = useState(0);
    const Nuser = {
        email: email,
    }
    useEffect(() => {
        axios
            .post('http://localhost:4000/user/xxx', Nuser)
            .then((response) => {
                // console.log(response.data);
                if (response.data.val == 1) {

                    setTotal(response.data.wallet);

                }
            })
            .catch((error) => {
                console.log(error);
            }
            );          // setc(response.contactNumber)
    }, [])
    console.log(email);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/buyer_orders", Nuser)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    if (users.length !== 0) {

        return (
            <div>
                <div> <Buyer_Navbar></Buyer_Navbar></div>
                {/* <div> <Wallet /> </div> */}
                <h3 className="center"> My Orders</h3>
                <div>
                    <Box>
                        <Grid container>

                            <Grid item xs={12} md={9} lg={19}>
                                <Paper>
                                    {
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell> Sr No.</TableCell>

                                                    <TableCell>Orderd Date</TableCell>
                                                    <TableCell>Time Of Order</TableCell>
                                                    <TableCell>Item</TableCell>
                                                    <TableCell>price</TableCell>
                                                    <TableCell>Veg/Non-veg</TableCell>
                                                    <TableCell>Canteen</TableCell>
                                                    <TableCell>Quantity</TableCell>
                                                    <TableCell>Vendor_Name</TableCell>
                                                    <TableCell>Vendor_email</TableCell>
                                                    <TableCell>Vendor_Contact </TableCell>
                                                    <TableCell>Status</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {(users).map((user, ind) => (
                                                    <TableRow key={ind}>
                                                        <TableCell>{ind + 1}</TableCell>

                                                        {/* <TableCell>{user.date}</TableCell> */}
                                                        <TableCell>{user.date}</TableCell>
                                                        <TableCell>{user.time}</TableCell>
                                                        <TableCell>{user.food_name}</TableCell>
                                                        <TableCell>{user.price}</TableCell>
                                                        <TableCell>{user.FoodDiscription}</TableCell>
                                                        <TableCell>{user.CanteenName}</TableCell>
                                                        <TableCell>{user.quantity}</TableCell>
                                                        <TableCell>{user.ManagerName}</TableCell>
                                                        <TableCell>{user.vendor_email}</TableCell>
                                                        <TableCell>{user.ManagerContact}</TableCell>
                                                        <TableCell>

                                                            <Button variant="contained" color="secondary" >
                                                                { user.status }
                                                            
                                                            </Button>
                                                        </TableCell>
                                                        {
                                                            // (() => {
                                                            //     if (user.status == "REJECTED") {
                                                            //         axios.post("http://localhost:4000/user/buyer_wallet", { email: email, wallet: parseInt(total) + parseInt(user.quantity * user.price) }).then((res) => {
                                                            //             console.log(total)
                                                            //             console.log(res);
                                                            //             // Ontotal();
                                                            //         })
                                                            //     }
                                                            // })
                                                        }


                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    }
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </div>


            </div>

        );
    }
    else {
        return (
            <div>
                <div> <Buyer_Navbar></Buyer_Navbar></div>
                {/* <div> <Wallet /> </div> */}
                <h3 className="center"> My Orders</h3>
                <h1 > <center> No Orders Placed </center></h1>


            </div>

        );
    }
}
export default Myorders_buyer;
