import { useState , useEffect} from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import { useNavigate, useLocation } from "react-router";
import "./common.css"


const AddFooditem = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setprice] = useState("");
    const [vendor_email, setEmail] = useState(localStorage.getItem("email"));
    const [rating, setrating] = useState(" ");
    const [FoodDiscription, setdiscription] = useState(" ");
    const [add_ons, setaddon] = useState(" ");
    const [Managername, setUser] = useState("");
    const [contactNumber, setc] = useState("");
    // const [Manager, setAge] = useState("");
    const [Canteen, setBatch] = useState("");
    const [opening, setopen] = useState("");
    const [closing, setclose] = useState("");
    const [Address, setAdd] = useState("");

    const onChangename = (event) => {
        setName(event.target.value);
    };
    const onChangeprice = (event) => {
        setprice(event.target.value);
    };

    // const onChangeEmail = (event) => {
    //     setEmail(event.target.value);
    // };
    const onChangeFoodDiscription = (event) => {
        setdiscription(event.target.value);
    };
    const onChangeAddons = (event) => {
        setaddon(event.target.value);
    };

    const Nuser = {
        email: vendor_email,
    
      }
    useEffect(() => {
        
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

    const resetInputs = () => {
        setName("");
        setprice("");
        setdiscription("");
        setaddon("");
    };
    const current = new Date();
    const onSubmit = (event) => {
        event.preventDefault();

        const NUser = {
            name: name,
            price: price,
            email: vendor_email,
            FoodDiscription: FoodDiscription,
            CanteenName : Canteen,
            MangerName: Managername,
            ManagerContact: contactNumber,
            opening:opening,
            closing:closing,
            Address:Address,
            add_ons: add_ons,
            date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
            // date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        };
        console.log(NUser);
        axios
            .post("http://localhost:4000/vendor/addingfood", NUser)
            .then((response) => {
                alert("Food Added Successfully\t");
                console.log(response.data);
            });

        resetInputs();
    };

    return (
        <div>
            <Vendor_Navbar />
            <h3 className="profile"> Adding Food Items to Canteen</h3>
            <div style={{ marginTop: 40 }}>
                <Grid container align={"center"} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Food Item Name"
                            variant="outlined"
                            value={name}
                            onChange={onChangename}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="price"
                            variant="outlined"
                            value={price}
                            onChange={onChangeprice}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Veg or NonVeg"
                            variant="outlined"
                            value={FoodDiscription}
                            onChange={onChangeFoodDiscription}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="add on Details"
                            variant="outlined"
                            value={add_ons}
                            onChange={onChangeAddons}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onSubmit}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AddFooditem;
