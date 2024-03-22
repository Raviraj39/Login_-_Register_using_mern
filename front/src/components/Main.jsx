import React from 'react'
import { BrowserRouter as  Link } from 'react-router-dom'


const Main = () => {
  return (
	<div className='d-flex align-items-end justify-content-center w-100 h-100 flex-coloumn text-column text-center'>
		<div className='main-container'>
			<h2>Welcome</h2>

		<button type="submit" className="btn btn-primary px-3 py-4 ">
			<Link className=" text-white " to={'/sign-up'}>Sign Up For New User</Link>

        </button>
		</div>	
	</div>
  )
}

export default Main