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
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Fav = (props) => {
    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [email, setEmail] = useState(localStorage.getItem("email"));

    useEffect(() => {
        axios
            .post("http://localhost:4000/user/buyerdetails", { email: email })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (
        <div>
            <Buyer_Navbar />
            <center><h1>This is are favourites</h1></center>
            {/* {
                users.map((user, ind) => (

                    <h2> {user}</h2>



                ))
            } */}
            <div>
                <center>
                <Grid item xs={12} md={9} lg={30}>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                  <h1>  <TableCell> Sr No.</TableCell> </h1>
                                    
                                    <TableCell>Food Name</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, ind) => (
                                    <TableRow key={ind}>
                                        <TableCell>{ind}</TableCell>
                                        <TableCell>{user}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                </center>

            </div>
        </div>



    );
};
export default Fav;
