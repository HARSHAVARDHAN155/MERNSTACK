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
import Vendor_Navbar from "../templates/Vendor_Navbar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Vendor_Order = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [users, setUsers] = useState([]);
    const status = ["PLACED", "ACCEPTED", "COOKING", "READY FOR PICK UP", "COMPLETED"];
    const Nuser = {
        email: email,
    }
    console.log(email);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vendor_orders", Nuser)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [currentstatus, setstatus] = useState("");
    const [newstatus, setnew] = useState("");
    const [reject, setreject] = useState("");
    const [total, setTotal] = useState("");
    const [quantity, setQ] = useState(0);
    const [price, setprice] = useState(0);
    const [buyer_email, setbuyer] = useState("");
    const [maxorders, setmax] = useState(0);


    useEffect(() => {
        var b = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].status == "ACCEPTED" || users[i].status === "COOKING") {
                b++;
            }
        }
        // console.log(b);
        setmax(b);

    }, [])


    const Findstatus = (id) => {
        // console.log(id);
        const item = {
            id: id,
        }
        axios.post("http://localhost:4000/vendor/findstatus", item).then((response) => {
            setstatus(response.data.status);
        }).then(() => {
            status_update(id);
        })
        console.log(currentstatus);


    }

    const details = (id) => {
        const item = {
            id: id,
        }
        axios.post("http://localhost:4000/vendor/findstatus", item).then((response) => {
            setQ(response.data.quantity);
            setbuyer(response.data.buyer_email);
            setprice(response.data.price);
            console.log(response.data);
        }).then(() => {
            axios
                .post('http://localhost:4000/user/xxx', { email: buyer_email })
                .then((response) => {
                    // console.log(response.data);
                    if (response.data.val == 1) {

                        setTotal(response.data.wallet);
                        console.log(response.data.wallet);

                    }
                }).then(() => {
                    axios.post("http://localhost:4000/user/buyer_wallet", { email: buyer_email, wallet: parseInt(total) + parseInt(quantity) * parseInt(price) }).then((res) => {
                        console.log(total)
                        alert("amount refunded successfully");
                        window.location.reload(false);
                        console.log(res);

                    })

                })
                .catch((error) => {
                    console.log(error);
                }
                );
            // status_update(id);
        })
    }


    const rejecting = (id) => {
        details(id);
        setreject("REJECTED");


    }
    console.log("max orders",maxorders);

    const status_update = (id) => {

        console.log(reject);
        if (reject === "REJECTED") {
            console.log("coming");
            setnew("REJECTED");
            setreject("");


        }
        else if (currentstatus === "PLACED") {

            if (maxorders > 2) {
                alert("can't take any more orders")
            }
            else {
                console.log("coming");

                setnew("ACCEPTED");
            }

        }
        else if (currentstatus === "ACCEPTED") {
            setnew("COOKING");
        }
        else if (currentstatus === "COOKING") {
            setnew("READY FOR PICKUP");
        }
        else if (currentstatus === "READY FOR PICKUP") {
            setnew("COMPLETED");
        }
        else if (currentstatus === "REJECTED") {
            alert("order REJECTED already")
        }
        else if (currentstatus === "COMPLETED") {
            alert("order COMPLETED already")
        }

        const updating = {
            id: id,
            status: newstatus

        }

        if (newstatus !== "") {
            console.log(updating);
            axios.put("http://localhost:4000/vendor/update-status", updating).then((response) => {
                window.location.reload(false);

            })
        }


    }

    if (users.length !== 0) {
        return (
            <div>
                <div> <Vendor_Navbar /> </div>
                {/* <div> <Wallet /> </div> */}
                <h3 className="center"> Recived Orders</h3>
                <div>
                    <Box>
                        <Grid container>

                            <Grid item xs={12} md={9} lg={19}>
                                <Paper>
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
                                                <TableCell>Buyer_email</TableCell>
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
                                                    <TableCell>{user.buyer_email}</TableCell>
                                                    <TableCell>{user.ManagerContact}</TableCell>
                                                    <TableCell>
                                                        <Button variant="contained" color="secondary" >
                                                            {user.status}

                                                        </Button>



                                                    </TableCell>
                                                    <TableCell><Button variant="contained" color="success" onClick={() => {
                                                        Findstatus(user._id);
                                                        // console.log();
                                                        // status_update(user._id);
                                                    }}>
                                                        MOVE_TO_NEXT_STAGE
                                                    </Button></TableCell>

                                                    <TableCell>
                                                        {(() => {

                                                            if (user.status == "PLACED") {


                                                                return (
                                                                    <Button variant="contained" color="error" onClick={() => {
                                                                        rejecting(user._id); status_update(user._id);

                                                                    }}>
                                                                        reject
                                                                    </Button>

                                                                )
                                                            }

                                                        })()}


                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
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
                <div> <Vendor_Navbar /></div>
                {/* <div> <Wallet /> </div> */}
                <h3 className="center"> Orders Recived</h3>
                <h1 > <center>----- No Orders ----- </center></h1>


            </div>

        );
    }
};
export default Vendor_Order;
