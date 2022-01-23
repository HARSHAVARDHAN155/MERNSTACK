import { blue } from "@mui/material/colors";
import { Box, fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useNavigate, useLocation } from "react-router";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// export default class Buyer_Home extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       pass: "",
//       name: "",
//       contactNumber: 22222,
//       age: "",
//       batch: "",
//       wallet: 0,
//     }
//     // this.onChangeEmail = this.onChangeEmail.bind(this);
//     // this.onChangename = this.onChangename.bind(this);
//     // this.onChngeContactNumber = this.onChngeContactNumber.bind(this);
//     // this.onChangeage = this.onChangeage.bind(this);
//     // this.onChangebatch = this.onChangename.bind(this);
//     // this.onChangewallet = this.onChangewallet.bind(this);

//   }
//   componentDidMount() {
//     const Nuser = {
//       email: localStorage.getItem("email"),
//       pass: localStorage.getItem("pass"),

//     }
//     this.setState({
//       email: Nuser.email,
//       pass: Nuser.pass
//     })
//     console.log(Nuser.email);
//     axios
//       .post('https://localhost:4000/user/login', Nuser)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.val == 1) {
//           console.log(res.data);
//           // this.setState({
//           //   name: res.data.name,
//           //   contactNumber: res.data.contactNumber,
//           // })

//         }
//       })
//   }
//   render() {
//     return <div>
//       <div> <Buyer_Navbar></Buyer_Navbar></div>
//       <div> <Wallet /> </div>
//       <h1><center>Welcome {this.state.email}</center></h1>

//     </div>;
//   }
// }

// export default Buyer_Home;











const Buyer_Home = (props) => {
  const navigate = useNavigate();

  let location = useLocation();
  const [username, setUser] = useState("");
  const [contactNumber, setc] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");

  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [type, setType] = useState(localStorage.getItem("type"));

  const Nuser = {
    email: email,

  }
  useEffect(() => {

    if (type !== "buyer") {

      alert("You do not have permission to access this page");
      navigate("/")
    }
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

  return (
    <div>
      <div> <Buyer_Navbar></Buyer_Navbar></div>
      <div> <Wallet /> </div>
      <Box>
      <div tyle={{ backgroundColor: "#FAE03B", padding: 100, textAlign: "center", marginTop: 100, fontSize: 30 }}>
        <h1><center>Welcome {username}</center></h1>
        <h1><center>email: {email}</center></h1>
        <h1><center>contactNumber: {contactNumber}</center></h1>
        <h1><center>age:{age}</center></h1>
        <h1><center>Batch: {batch}</center></h1>
      </div>
      </Box>  </div>

  );
};
export default Buyer_Home;
