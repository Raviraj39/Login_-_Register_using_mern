import React, { useState } from 'react'
import Nav from './Nav';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
	const [name,setName] =useState();
	const [date,setDate]=useState();
	const [email,setEmail]=useState();
	const [password,setPassword]=useState();
	const navigate = useNavigate();

	const handleSubmit = (e)=>{
		e.preventDefault();
		axios.post('http://localhost:3001/sign-up',{name,date,email,password})
		.then(result => {console.log(result)
		navigate('/sign-in')
		})
		.catch(err => console.log(err))
	}




  return (
	<div className='auth-inner mt-5' >
		{/* <Nav/> */}
		<form className='mt-5' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
						onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Date Of Birth</label>
                    <input type='date' className="form-control"
					 onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
						onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
						onChange={(e)=>setPassword(e.target.value)}

                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
        </form>



	</div>
  )
}

export default Signup