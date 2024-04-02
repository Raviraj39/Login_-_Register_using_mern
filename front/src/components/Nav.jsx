import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as  Link } from 'react-router-dom'

const Nav = () => {
  return (
	<div>
		<nav className="navbar navbar-expand-lg text-white fixed-top">
          <div className="container ">
            <a href="/home" className='text-white navbar-brand'>Employes Data</a>
          </div>
        </nav>
	</div>
  )
}

export default Nav