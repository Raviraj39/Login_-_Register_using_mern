import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as  Link } from 'react-router-dom'

const Nav = () => {
  return (
	<div>
		<nav className="navbar navbar-expand-lg text-white fixed-top">
          <div className="container ">
            <Link className="navbar-brand text-white " to={'/home'}>Employes Data</Link>
            
          </div>
        </nav>
	</div>
  )
}

export default Nav