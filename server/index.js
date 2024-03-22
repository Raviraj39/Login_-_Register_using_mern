const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmpModel = require('./models/Employee')

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/sign-up',(req,res)=>{
	EmpModel.create(req.body)
	.then(employee=>res.json(employee))
	.catch(err=>res.json(err))
})


app.post('/sign-in',(req,res)=>{
	const {email,password} = req.body;
	EmpModel.findOne({email:email})
	.then(user =>{
		if(user){
			if(user.password === password){
				res.json("Success")
			}else{
				res.json("password is incorrect")
			}
		}
		else{
				res.json("No Record Found")
			}

	})
	.catch(err=>res.json(err))
})

app.get('/home',(req,res)=>{
	EmpModel.find()
	.then(users =>{res.json(users)})
	.catch(err=>res.json(err))
})

app.listen(3001,()=>{
	console.log("listening on");
})