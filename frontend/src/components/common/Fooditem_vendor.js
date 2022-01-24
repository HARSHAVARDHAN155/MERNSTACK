import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import { useNavigate, useLocation } from "react-router";
import "./common.css"


const Fooditem_vendor = (props) => {
    const navigate = useNavigate();
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
            <Vendor_Navbar/>
            <h3  className="profile"> Food Menu of Canteeen</h3>
            <div  style={{marginTop:40}}>
                <Grid container align={"center"} spacing={2}>
                   
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={() => navigate("/addingFood")}>
                            Add Food Item
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Fooditem_vendor;
