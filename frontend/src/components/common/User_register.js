import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import "./common.css"
import { paperClasses } from "@mui/material";



const UserRegister = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContact] = useState(" ");
    const [age, setAge] = useState(" ");
    const [batch, setBatch] = useState(" ");
    const [password, setPass]=useState("");
    const [date, setDate] = useState(null);


    const onChangeUsername = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeContact = (event) => {
        setContact(event.target.value);
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


    const resetInputs = () => {
        setName("");
        setEmail("");
        setContact("");
        setAge("");
        setBatch("");
        setPass("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const NUser = {
            name: name,
            email: email,
            contactNumber: contactNumber,
            age: age,
            batch: batch,
            password: password,
            date: Date.now(),
        };

        axios
            .post("http://localhost:4000/user/userregister", NUser)
            .then((response) => {
                alert("Created\t" + response.data.name);
                console.log(response.data);
            });

        resetInputs();
    };

    return (
        <div><Navbar/>
            <h3  className="center"> Buyer Registration </h3>
            <div  style={{marginTop:40}} >
                <Grid container align={"center"} spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={onChangeUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
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
                            label="Age"
                            variant="outlined"
                            value={age}
                            onChange={onChangeAge}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Batch"
                            variant="outlined"
                            value={batch}
                            onChange={onChangebatch}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            
                            label="Password"
                            variant="outlined"
                            value={password}
                            type="password"
                            onChange={onChangePassword}
                        />
                     </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onSubmit}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default UserRegister;
