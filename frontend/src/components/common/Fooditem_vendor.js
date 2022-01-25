import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Vendor_Navbar from "../templates/Vendor_Navbar";
import { useNavigate, useLocation } from "react-router";
import "./common.css"


const Fooditem_vendor = (props) => {
    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const navigate = useNavigate();
    const Nuser = {
        email: email,
    }
    useEffect(() => {
        axios
            .post("http://localhost:4000/vendor/fooding", Nuser)
            .then((response) => {
                setUsers(response.data);
                setSortedUsers(response.data);
                setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const sortChange = () => {
        let usersTemp = users;
        const flag = sortName;
        usersTemp.sort((a, b) => {
            if (a.date != undefined && b.date != undefined) {
                return (1 - flag * 2) * (new Date(a.date) - new Date(b.date));
            } else {
                return 1;
            }
        });
        setUsers(usersTemp);
        setSortName(!sortName);
    };

    const customFunction = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    };


    const update = (id) => {

        const Newname = prompt("enter new name");
        if(Newname == null){
            return;
        }
        const Newprice = prompt("enter new price");
        if(Newprice == null){
            return;
        }
        axios.put("http://localhost:4000/vendor/update", { Newname: Newname, Newprice: Newprice, id: id }).then(() => {
          
            setUsers(users.map((user) => {
                return user._id == id ? { _id: id, name: Newname,rating:user.rating, price: Newprice, date: user.data, FoodDiscription: user.FoodDiscription, add_ons: user.add_ons} : user;
            }))
            alert("edited successfully");
        })

    };
    const ondelete = (id) => {
        axios.delete(`http://localhost:4000/vendor/delete/${id}`).then((response) => {
            setUsers(
                users.filter((user) => {
                    return user._id != id;
                })
            )
            
            alert("item deleted sucessfully");

        })
        // event.preventDefault();

        // console.log(props.name);
        // console.log(props.email);
        // const newItem = {
        //     email:props.email,
        //     name : props.name
        // };
        // axios
        //     .post("http://localhost:4000/vendor/item_delete", Nuser)
        //     .then((response) => {
        //        alert("item deleted sucessfully");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });


    }


    return (
        <div>
            <Vendor_Navbar />
            <h3 className="profile"> Food Menu of Canteeen</h3>
            <div style={{ marginTop: 40 }}>
                <Grid container align={"center"} spacing={2}>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={() => navigate("/addingFood")}>
                            Add Food Item
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginTop: 50 }}>
                <Grid container>
                    {/* <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem text>
                                <h1>Filters</h1>
                            </ListItem>
                        </List>
                    </Grid> */}
                    <Grid item xs={12} md={9} lg={12}>
                        <List component="nav" aria-label="mailbox folders">
                            <TextField
                                id="standard-basic"
                                label="Search"
                                fullWidth={true}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            // onChange={customFunction}
                            />
                        </List>
                    </Grid>
                </Grid>
                <Grid container>
                    {/* <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        Salary
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="standard-basic"
                                            label="Enter Min"
                                            fullWidth={true}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="standard-basic"
                                            label="Enter Max"
                                            fullWidth={true}
                                        />
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider />
                            <ListItem divider>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={users}
                                    getOptionLabel={(option) => option.name}
                                    fullWidth
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Names"
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </ListItem>
                        </List>
                    </Grid> */}
                    <Grid item xs={12} md={9} lg={18}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Sr No.</TableCell>
                                        <TableCell>
                                            {" "}
                                            <Button onClick={sortChange}>
                                                {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                            </Button>
                                            Date
                                        </TableCell>
                                        <TableCell>Name</TableCell>
                                        {/* <TableCell>Email</TableCell> */}
                                        <TableCell>price</TableCell>
                                        <TableCell>Veg/Non-veg</TableCell>
                                        <TableCell>Rating</TableCell>
                                        <TableCell>Add ONs</TableCell>
                                        <TableCell>EDIT</TableCell>
                                        <TableCell>DELETE</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user, ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{ind}</TableCell>
                                            <TableCell>{user.date}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            {/* <TableCell>{user.email}</TableCell> */}
                                            <TableCell>{user.price}</TableCell>
                                            <TableCell>{user.FoodDiscription}</TableCell>
                                            <TableCell>{user.rating}</TableCell>
                                            <TableCell>{user.add_ons}</TableCell>
                                            <TableCell><Button variant="contained" color="success" onClick={() => { update(user._id); }}>
                                                EDIT
                                            </Button></TableCell>
                                            <TableCell><Button variant="contained" color="error" onClick={() => { ondelete(user._id); }}>
                                                Delete
                                            </Button></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>


            </div>
        </div>
    );
};

export default Fooditem_vendor;
