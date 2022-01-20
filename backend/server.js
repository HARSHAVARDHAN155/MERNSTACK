const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "Harshavardhan_2020101106"
var bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12;
// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var VendorRouter =  require("./routes/Vendor");
// var Buyerdata = require("./routes/Users.js/userregister");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
    console.log(DB_NAME);
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/vendor", VendorRouter);
// app.use("/buyer",Buyerdata)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
