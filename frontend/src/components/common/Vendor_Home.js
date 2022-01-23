import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect} from "react";
import Navbar from "../templates/Navbar";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import React from 'react';

const Vendor_Home = (props) => 
    {
        const navigate = useNavigate();
      
        let location = useLocation();
        const [Managername, setUser] = useState("");
        const [contactNumber, setc] = useState("");
        // const [Manager, setAge] = useState("");
        const [Canteen, setBatch] = useState("");
        const [opening, setopen] = useState("");
        const [closing, setclose] = useState("");
        const [Address,setAdd] = useState("");
        const [email, setEmail] = useState(localStorage.getItem("email"));
        const [type, setType] = useState(localStorage.getItem("type"));
      
        const Nuser = {
          email: email,
      
        }
        useEffect(() => {
      
        //   if (type !== "vendor") {
      
        //     alert("You do not have permission to access this page");
        //     navigate("/")
        //   }
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
        <div><h2><center>Manager Name: {Managername} </center></h2></div>
        <div><h2><center>Canteen Name: {Canteen} </center></h2></div>
        <div><h2><center>Opening Time: {opening} </center></h2></div>
        <div><h2><center>closing Time: {closing} </center></h2></div>
        <div><h2><center>contact Number: {contactNumber} </center></h2></div>
        <div><h2><center>Address: {Address} </center></h2></div>
        
     
    </div>;
}

export default Vendor_Home;


