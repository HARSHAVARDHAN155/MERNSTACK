import { blue } from "@mui/material/colors";
import { Box, fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import React, { Component } from 'react';
import Buyer_Navbar from "../templates/Buyer_Navbar";
import axios from "axios";
import Wallet from "./Wallet";
import { useNavigate, useLocation } from "react-router";
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
// import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function Buyer_Home() {
  const navigate = useNavigate();
  // USERS LIST
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortName, setSortName] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchInput, setinput] = useState("");



  useEffect(() => {
    axios
      .get("http://localhost:4000/vendor/food")
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

  // BUYER CODE
  let location = useLocation();
  /// Myorder Scema
  const [Foodname, setFood] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [buyer_email, setbuyer] = useState("");
  const [vendor_email, setvendor] = useState("");
  const [CanteenName, setcanteen] = useState("");
  const [ManagerName, setManager] = useState("");
  const [ManagerContact, setManagerContact] = useState("");
  const [status, setStatus] = useState("");
  const [FoodDiscription, setFoodDiscription] = useState("");
  const [date, setDate] = useState("");
  const [time, settime] = useState("");
  const [quantity, setquantity] = useState(1);

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
        // console.log(response.data);
        if (response.data.val == 1) {
          // console.log(response.data);
          setUser(response.data.name);
          setAge(response.data.age);
          setc(response.data.contactNumber);
          setBatch(response.data.batch);
          // console.log(response.data);
          console.log("here");

        }
      })
      .catch((error) => {
        console.log(error);
      }
      );          // setc(response.contactNumber)
  }, [])

  const [filteredData, setFilter] = useState([]);
  const [newfilter, setNewfilter] = useState([]);
  const [Quantity, setQ] = useState(1);


  // Quantity Edit Need to edit more
  //   const update = (id) => {

  //     const NewQunatity = prompt("enter Qunatity");
  //     if(NewQunatity == null){
  //         return;
  //     }

  //     axios.put("http://localhost:4000/vendor/updateQunatity", { NewQunatity: NewQunatity, id: id }).then(() => {

  //         // setUsers(users.map((user) => {
  //         //     return user._id == id ? { _id: id, name: Newname,rating:user.rating, price: Newprice, date: user.data, FoodDiscription: user.FoodDiscription, add_ons: user.add_ons} : user;
  //         // }))
  //         alert("Quantity updated successfully");
  //     })

  // };
  const onChangeSearch = (event) => {
    setinput(event.target.value);
  }

  // function search(users) {

  //   return users.filter((rows) => rows.name.toLowercase().indexOf(searchInput) > -1);
  // }
  // const NewOrder = {

  // }


  const today = new Date();
  const Addtoorders = (id) => {



    axios.post("http://localhost:4000/vendor/addtoorders", { id: id }).then((res) => {

      setFood(res.data.name)
      setprice(res.data.price);
      setrating(res.data.rating);
      setbuyer(email);
      setvendor(res.data.email);
      setcanteen(res.data.CanteenName);
      setManager(res.data.ManagerName);
      setManagerContact(res.data.ManagerContact);
      setStatus("Confirm Order");
      setFoodDiscription(res.data.FoodDiscription);
      settime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
      setDate(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`)
      // console.log(res);

    })


  };
  // console.log(NewFood);
  const AddtoSchema = () => {
    // event.preventDefault();

    const NewFood = {
      Foodname: Foodname,
      price: price,
      rating: rating,
      buyer_email: buyer_email,
      vendor_email: vendor_email,
      CanteenName: CanteenName,
      ManagerName: ManagerName,
      ManagerContact: ManagerContact,
      status: status,
      FoodDiscription: FoodDiscription,
      date: date,
      time: time,
      quantity: quantity
    }


    axios.post("http://localhost:4000/user/myorder", NewFood).then((res) => {

      alert("added to schema");

      // console.log(res);

    })


  };

  // if (searchInput === "") {
  //   setFilter(users);
  // }
  // else {
  //   setFilter(newfilter);
  // }

  console.log(searchInput);

  return (
    <div>
      <div> <Buyer_Navbar></Buyer_Navbar></div>
      <div> <Wallet /> </div>
      <Box>
        <div>
          <div style={{ backgroundColor: "#FAE03B", padding: 30, textAlign: "center", marginTop: 100, fontSize: 30 }}>
            <h1><center>Welcome {username}</center></h1>
            {/* <h1><center>email: {email}</center></h1>
        <h1><center>contactNumber: {contactNumber}</center></h1>
        <h1><center>age:{age}</center></h1>
        <h1><center>Batch: {batch}</center></h1> */}
          </div>
          <div style={{ marginTop: 30 }}>
            <h1 style={{ marginTop: 30, fontSize: 50, textAlign: "center", color: "orange" }}> FOOD </h1>
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <List component="nav" aria-label="mailbox folders">
                  <ListItem text>
                    <h1>Filters</h1>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <List component="nav" aria-label="mailbox folders">

                  <TextField
                    id="standard-basic"
                    label="Search"
                    fullWidth={true}
                    value={searchInput}
                    onChange={onChangeSearch}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton  >
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
              <Grid item xs={12} md={3} lg={2}>
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
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Paper>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell> Sr No.</TableCell>
                        {/* <TableCell>
                          {" "}
                          <Button onClick={sortChange}>
                            {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                          </Button>
                          Date
                        </TableCell> */}
                        <TableCell>Item</TableCell>
                        <TableCell>price</TableCell>
                        <TableCell>Veg/Non-veg</TableCell>
                        <TableCell>Canteen</TableCell>
                        <TableCell>ManagerName</TableCell>
                        <TableCell>Vendor email</TableCell>
                        <TableCell>Vendor Contact</TableCell>
                        <TableCell>Canteen Open Time</TableCell>
                        <TableCell>Canteen Close Time</TableCell>
                        <TableCell>Canteen Address</TableCell>
                        {/* <TableCell>Quantity</TableCell>
                        <TableCell>Enter_Quantity</TableCell> */}
                        <TableCell>Order_Now</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(users).map((user, ind) => (
                        <TableRow key={ind}>
                          <TableCell>{ind}</TableCell>
                          {/* <TableCell>{user.date}</TableCell> */}
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.price}</TableCell>
                          <TableCell>{user.FoodDiscription}</TableCell>
                          <TableCell>{user.CanteenName}</TableCell>
                          <TableCell>{user.ManagerName}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.ManagerContact}</TableCell>
                          <TableCell>{user.opening}</TableCell>
                          <TableCell>{user.closing}</TableCell>
                          <TableCell>{user.Address}</TableCell>
                          {/* <TableCell><Grid item xs={12}>
                            <TextField
                              label="Quantity"
                              variant="outlined"
                              value={user.Quantity}
                            // onChange={onChangeQ(user._id)}
                            />
                          </Grid></TableCell> */}
                          {/* <TableCell><Button variant="contained" color="success" onClick={() => { { update(user._id) } }}>
                            Enter_Quantity
                          </Button></TableCell> */}
                          <TableCell><Button variant="contained" color="success" onClick={() => {
                            { Addtoorders(user._id) }; {
                              AddtoSchema()
                            };
                            { navigate("/myorders") }
                          }}>
                            order_now
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
      </Box>  </div>

  );
};
export default Buyer_Home;
