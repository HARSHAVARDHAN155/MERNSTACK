const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MyOrdersSchema = new Schema({
    food_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        // required: true
    },
    buyer_email: {
        type: String,
        required: true
    },
    vendor_email: {
        type: String,
        required: true
    },
    CanteenName: {
        type: String,
        // required : true
    },
    ManagerName: {
        type: String,
        // required : true
    },
    ManagerContact: {
        type: String,
        // required : true
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
        type: String,
    }

});

module.exports = Myorders = mongoose.model("Myorders", MyOrdersSchema);