import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Vendor_Navbar from '../templates/Vendor_Navbar';
export default function Vendor_Statiscits() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [users, setUsers] = useState([]);
    const [Ordersplaced, SetOrders] = useState(0);
    const [Pendingplaced, Setpending] = useState(0);
    const [Completed, setCompleted] = useState(0);
    const [reject, setReject] = useState(0);
    const [status, setStatus] = useState("");
    const Nuser = {
        email: email,
    }
    console.log(email);
    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vendor_orders", Nuser)
            .then((response) => {
                // console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        fun();



    }, []);

    useEffect(() => {
        fun();
    }, [])

    var count = 0;
    function top() {
        // var arr = [];
        const arr = [0,0]

        for (let i = 0; i < users.length; i++) {

            for (let j = 0; j < users.length; j++) {

                // arr[i][j] = 0;
            }
        }
        for (let i = 0; i < users.length; i++) {

            for (let j = 0; j < users.length; j++) {

                if (users[i].name === users[j].name) {
                    console.log("coming")
                    arr[i][j]=1;
                }
            }
        }
        for (let i = 0; i < users.length; i++) {

            for (let j = 0; j < users.length; j++) {

                if (users[i].name === users[j].name) {
                    console.log(arr[i][j])
                }
            }
        }
        console.log(count);

    }


    function fun() {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        for (let i = 0; i < users.length; i++) {

            // making(users[i].status);

            if (users[i].status === "COMPLETED") {
                b++;

            }
            else if (users[i].status === "REJECTED") {
                d++;
            }
            else {
                c++;

            }

        }
        // console.log(a, b, c);
        SetOrders(users.length);
        setCompleted(b);
        Setpending(c);
        setReject(d);
    }

    // }, [])



    return <div >
        <Vendor_Navbar />
        <h1><center> Statistics</center></h1>
        <h1><center> Placed Orders: {Ordersplaced}</center></h1>
        <h1><center> Pendig : {Pendingplaced}</center></h1>
        <h1><center> Completed: {Completed}</center></h1>
        <h1><center> Rejected Orders: {reject}</center></h1>
        <center><Button variant="contained" color="success" onClick={() => { fun(); }}>
            statistics refresh
        </Button></center>
        {/* <Button variant="contained" color="success" onClick={() => { top(); }}>
            top
        </Button> */}

    </div>;
}

