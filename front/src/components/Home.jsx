import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import axios from 'axios';


const Home = () => {
	const [user ,setUser] = useState([]);
	useEffect(()=>{
		axios.get('https://login-register-using-mern-hcgp.vercel.app/home')
		.then(user => 
		{
			setUser(user.data)
			console.log(user);
		}
		)
		.catch(err => console.log(err));
	},[]);
  return (
	<div >
		<Nav />
		<div className='w-100 vh-100 d-flex  justify-content-center align-items-center'>
			<div className='w-75'>
		<table className='table text-center'>
			<tr>
				<th>#</th>
				<th>name</th>
				<th>date</th>
				<th>email</th>
				<th>password</th>
			</tr>
			<tbody>
				{	
					user.map((users ,index)=>{
					
					
						return (
						<tr key={index+1}>
							<th>{index+1}</th>
							<td>{users.name}</td>
							<td>{users.date}</td>
							<td>{users.email}</td>
							<td>{users.password}</td>
						</tr>

					)
					
					})
					
				}
			</tbody>
			
		</table>
		</div>
		</div>

		
	</div>
  )
}

export default Home