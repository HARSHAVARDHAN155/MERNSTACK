const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MyOrdersSchema = new Schema({
    food_name: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    rating: {
        type: String,
        default: 0,
        // required: false
    },
    buyer_email: {
        type: String,
        required: false
    },
    vendor_email: {
        type: String,
        required: false
    },
    CanteenName: {
        type: String,
        // required : false
    },
    ManagerName: {
        type: String,
        // required : false
    },
    ManagerContact: {
        type: String,
        // required : false
    },
    status: {
        type: String,
        required: false
    },
    add_ons: {
        type: String,
    },
    FoodDiscription: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
    },
    quantity :{
        type: Number,
    }

});

module.exports = Myorders = mongoose.model("Myorders", MyOrdersSchema);