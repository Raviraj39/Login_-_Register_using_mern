const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmpModel = require('./models/Employee')

const app = express();
app.use(cors(
    {
        origin: ["https://login-register-using-mern.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb://ravirajrb39:Ravi5050@cluster0.vrnncuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.get("/", (req, res) => {
    res.json("Hello");
})

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