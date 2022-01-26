import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import "./common.css"


const VendorRegister = (props) => {
    const [MangerName, setName] = useState("");
    const [CanteenName, setCanteen] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState(" ");
    const [opening, setopen] = useState(" ");
    const [closing, setclose] = useState(" ");
    const [Address, setAD] = useState(" ");
    const [password, setPass]=useState("");
    const [date, setDate] = useState(null);


    const onChangeUsername = (event) => {
        setName(event.target.value);
    };
    const onChangeCanteen = (event) => {
        setCanteen(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeContact = (event) => {
        setContact(event.target.value);
    };
    const onChangeAD = (event) => {
        setAD(event.target.value);
    };
    const onChangeop = (event) => {
        setopen(event.target.value);
    };
    const onChangeclose = (event) => {
        setclose(event.target.value);
    };
    const onChangePassword = (event) => {
        setPass(event.target.value);
    };


    const resetInputs = () => {
        setName("");
        setCanteen("");
        setEmail("");
        setContact("");
        setAD("");
        setopen("");
        setclose("");
        setPass("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const NUser = {
            MangerName: MangerName,
            CanteenName: CanteenName,
            email: email,
            contact: contact,
            opening : opening,
            closing : closing,
            Address: Address,
            password: password,
            date: Date.now(),
        };

        axios
            .post("http://localhost:4000/vendor/vendorregister", NUser)
            .then((response) => {
                alert("Created\t" + response.data.CanteenName);
                console.log(response.data);
            });

        resetInputs();
    };

    return (
        <div>
            <Navbar/>
            <h3  className="center"> Vendor Registration </h3>
            <div  style={{marginTop:40}}>
                <Grid container align={"center"} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Manger Name"
                            variant="outlined"
                            value={MangerName}
                            onChange={onChangeUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Canteen Name"
                            variant="outlined"
                            value={CanteenName}
                            onChange={onChangeCanteen}
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
                            value={contact}
                            onChange={onChangeContact}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Open Time (HH:MM:SS)"
                            variant="outlined"
                            value={opening}
                            onChange={onChangeop}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="close time (HH:MM:SS)"
                            variant="outlined"
                            value={closing}
                            onChange={onChangeclose}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            variant="outlined"
                            value={Address}
                            onChange={onChangeAD}
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

export default VendorRegister;
