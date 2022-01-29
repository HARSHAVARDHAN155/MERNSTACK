const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Create Schema
const Buyer = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
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
	},
	password:{
		type:String,
		required : true
	},
	wallet:{
		type:Number,
		default:0,
	},
	date:{
		type: Date,
		required: false
	},
	fav :{
		type:Array,
		required:false
	}
});

// //PASS ENCRYPT
// Buyer.pre('save', function(next) {Welcome
// 	var user = this;
// 	if (user.isModified("password")) {
// 	  bcrypt.genSalt(saltRounds, function(err, salt) {
// 		if (err) return next(err);
// 		bcrypt.hash(user.password, salt, function(err, hash) {
// 		  if (err) return next(err);
// 		  user.password = hash;
// 		  next();
// 		});
// 	  });
// 	}
// 	else{
// 		console.log(err)
// 		next();
// 	}
//   });
  
// Buyer.methods.comparePassword = function(candidatePassword, cb) {
// 	  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
// 		  if (err) return cb(err);
// 		  cb(null, isMatch);
// 	  });
//   };

module.exports = mongoose.model("Buyer",Buyer);
