import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
 
  return (
    <div className='nav'>
      <Link to='/' className='nav-link'>Home</Link>
      <Link to='/store' className='nav-link'>Store</Link>
      <Link to='/Cart' className='nav-link'>Cart</Link>
      <div className='dropdown'>
        
      </div>
    </div>
    
  )
}

export default Navbar