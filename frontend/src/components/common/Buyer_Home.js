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
  // USERS LIST
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortName, setSortName] = useState(true);
  const [searchText, setSearchText] = useState("");

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
        <div>
          <div style={{ backgroundColor: "#FAE03B", padding: 30, textAlign: "center", marginTop: 100, fontSize: 30 }}>
            <h1><center>Welcome {username}</center></h1>
            {/* <h1><center>email: {email}</center></h1>
        <h1><center>contactNumber: {contactNumber}</center></h1>
        <h1><center>age:{age}</center></h1>
        <h1><center>Batch: {batch}</center></h1> */}
          </div>
          <div style={{ marginTop: 30 }}>
            <h1 style={{ marginTop: 30, fontSize: 50,textAlign: "center",color:"orange"  }}> FOOD </h1>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
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
                        <TableCell>Order_Now</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user, ind) => (
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
