import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
// import { useHistory } from "react-router-dom";

import "./common.css"
import { paperClasses } from "@mui/material";
// import React, { Component } from 'react';


// export class Login extends Component {
//     // navigate { useNavigate(); }
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             type: ""
//         };
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//     }

//     onChangeEmail(event) {
//         this.setState({ email: event.target.value })
//     }
//     onChangePassword(event) {
//         this.setState({ password: event.target.value })
//     };

//     onSubmit(event) {
//         event.preventDefault();

//         const NUser = {

//             email: this.state.email,

//             password: this.state.password,
//             date: Date.now(),
//         };

//         axios
//             .post("http://localhost:4000/user/login", NUser)
//             .then((response) => {
//                 if (response.data.val == 1) {

//                     alert("Login Successful");

//                     if (response.data.typeof_login == "buyer") {
//                         //    this.props.history.push("/buyer_home")
//                         navigate("/buyer_home")
//                     }
//                     else {
//                         // navigate("/buyer_home")
//                     }

//                 }
//                 else {
//                     alert("login fail");
//                 }


//                 console.log(response.data);
//             });
//         this.setState({
//             //name: '',
//             email: '',
//             password: '',
//         });
//     }
//     render() {
//         return (

//             <div><Navbar />
//                 <h3 className="center"> Login Page </h3>
//                 <div style={{ marginTop: 40 }} >
//                     <Grid container align={"center"} spacing={3}>

//                         <Grid item xs={12}>
//                             <TextField
//                                 label="email id"
//                                 variant="outlined"
//                                 value={this.state.email}
//                                 onChange={this.onChangeEmail}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField

//                                 label="Password"
//                                 variant="outlined"
//                                 type="password"
//                                 value={this.state.password}
//                                 onChange={this.onChangePassword}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Button variant="contained" onClick={this.onSubmit.bind(this)}>
//                                 Login
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Login;


const Login = (props) => {
    // let history = useHistory();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [date, setDate] = useState(null);



    const onChangeEmail = (event) => {
        setEmail(event.target.value);

    };
    const onChangePassword = (event) => {
        setPass(event.target.value);
    };


    const resetInputs = () => {

        setEmail("");

        setPass("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const NUser = {

            email: email,

            password: password,
            date: Date.now(),
        };

        axios
            .post("http://localhost:4000/user/login", NUser)
            .then((response) => {
                if (response.data.val == 1) {

                    alert("Login Successful");
                    localStorage.removeItem("email");
                    localStorage.removeItem("type");
                    localStorage.setItem("email", response.data.email);


                    if (response.data.typeof_login == "buyer") {
                        localStorage.setItem("type", "buyer");
                        navigate("/buyer_home", { state: email })

                    }
                    else {
                        localStorage.setItem("type", "vendor");
                        navigate("/vendor_home", { state: email })
                    }

                }
                else {
                    alert("login fail");
                }


                console.log(response.data);
            });

        resetInputs();
    }

    return (
        <div><Navbar />
            <h2 > <center>Login Page </center> </h2>
            <div style={{ marginTop: 40 }} >
                <Grid container align={"center"} spacing={3}>

                    <Grid item xs={12}>
                        <TextField
                            label="email id"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField

                            label="Password"
                            variant="outlined"
                            value={password}
                            // type="password"
                            onChange={onChangePassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onSubmit}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Login;
