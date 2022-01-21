const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
   MangerName:{
        type:String,
        required:true
    },
    CanteenName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: false,
        unique:true
    },
    password:{
		type:String,
		required : true
        
	},
    contact:{
        type:String,
        required: false
    },
    Address:{
        type:String,
        required: false
    },

});
module.exports = Vendor= mongoose.model("Vendors", VendorSchema);