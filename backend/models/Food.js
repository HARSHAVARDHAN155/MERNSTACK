const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FoodSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String ,
        required: true
    },
    rating:{
        type:Number,
        default:0,
        required: true
    },
    FoodDiscription:{
        type:String,
        required:false
    }   

});

module.exports = Food = mongoose.model("Food", FoodSchema);