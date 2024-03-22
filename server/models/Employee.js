const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
	name:String,
	date:Date,
	email:String,
	password:String,
});

const EmpModel= mongoose.model("register",EmpSchema);
module.exports = EmpModel