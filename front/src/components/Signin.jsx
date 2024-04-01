import React , { useState }from 'react'
import Nav from './Nav';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Signin = () => {
	const [email,setEmail]=useState();
	const [password,setPassword]=useState();
	const navigate = useNavigate();


	const handleSubmit = (e)=>{
		e.preventDefault();
		axios.post('https://login-register-using-mern-2.onrender.com/sign-in',{email,password})
		.then(result => {console.log(result)
			if(result.data === "Success"){
				navigate('/home' )

			}
		})
		.catch(err => console.log(err))
	}

  return (
	<div className='auth-inner mt-5'>
		{/* <Nav/> */}
		 <form className='' onSubmit={handleSubmit}>
                <h3>Sign In</h3>

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
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
		</div>
  )
}

export default Signin