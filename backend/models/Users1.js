const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	
	contactNumber:{
		type:String,
		required:true
	},
	age:{
		type:String,
		required:true
	},
	batch:{
		type:String,
		required:true
	},date:{
		type: Date,
		required: false
	}
});

module.exports = Buyer = mongoose.model("Buyer",BuyerSchema);
