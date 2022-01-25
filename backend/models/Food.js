const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FoodSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type:Number,
        default:0,
        // required: true
    },
   email:{
        type:String,
        required : true
    },
    CanteenName:{
        type:String,
        // required : true
    },
    ManagerName:{
        type:String,
        // required : true
    },
    ManagerContact:{
        type:String,
        // required : true
    },
    opening: {
        type: String,
        required: false
    },
    closing: {
        type: String,
        required: false
    },


    Address: {
        type: String,
        required: false
    },
    
    add_ons:{
        type:String,
    },
    FoodDiscription:{
        type:String,
        required:false
    },
    date:{
		type: Date,
		required: false
	}   

});

module.exports = Food = mongoose.model("Food", FoodSchema);