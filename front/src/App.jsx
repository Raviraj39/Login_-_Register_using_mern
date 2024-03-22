import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Main from './components/Main';
function App() {

  return (
    <div>
       <Router>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/sign-up" element={<Signup />} />
               <Route path="/home" element={<Home />} />
            </Routes>
          
    </Router>

    </div>
  )
}

export default App
