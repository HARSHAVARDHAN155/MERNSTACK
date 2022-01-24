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