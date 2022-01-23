import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useLocation } from "react-router";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Buyer_Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      contactNumber: 22222,
      age: "",
      batch: "",
      wallet: 0,
    }
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangename = this.onChangename.bind(this);
    // this.onChngeContactNumber = this.onChngeContactNumber.bind(this);
    // this.onChangeage = this.onChangeage.bind(this);
    // this.onChangebatch = this.onChangename.bind(this);
    // this.onChangewallet = this.onChangewallet.bind(this);

  }
  componentDidMount() {
    const Nuser = {
      email: localStorage.getItem("email"),
    }
    this.setState({
      email: Nuser.email
    })
    console.log(Nuser.email);
    axios
      .post("https://localhost:4000/user/xxx", Nuser)
      .then((res) => {
        alert("coming into")
        if (res.data.val == 1) {
          console.log(res.data);
          this.setState({
            name: res.data.name,
            contactNumber: res.data.contactNumber,
          })

        }
      })
  }
  render() {
    return <div>
      <div> <Buyer_Navbar></Buyer_Navbar></div>
      <div> <Wallet /> </div>
      <h1><center>Welcome {this.state.email} {this.state.contactNumber} </center></h1>

    </div>;
  }
}

// export default Buyer_Home;











// const Buyer_Home = (props) => {

//   let location = useLocation();
//   const [username, setUser] = useState([]);
//   const [contact, setc] = useState("");
//   const [emai, setEmail] = useState("");


//   // useEffect(() => {
//   //   {
//   //     axios.get("http://localhost:4000/user/buyer", {
//   //       params: {
//   //         email: location.state
//   //       }
//   //     })
//   //       .then((response) => {
//   //         setUser(response.data.name);
//   //         console.log(response.data);
//   //         console.log("here");
//   //       })          // setc(response.contactNumber)
//   //       .catch((error) => {
//   //         console.log(error);

//   //       })
//   //   }
//   // })
//   // const username = {
//   //   email: location.state,
//   //   data: ""
//   // };
//   // axios
//   //   .post("http://localhost:4000/user/buyer", NUser)
//   //   .then((response) => {
//   //     alert("data came")

//   //   }
//   return (
//     <div>
//       <div> <Buyer_Navbar></Buyer_Navbar></div>
//       <div> <Wallet /> </div>
//       <h1><center>Welcome {location.state} {username}</center></h1>
//     </div>

//   );
// };
// export default Buyer_Home;
