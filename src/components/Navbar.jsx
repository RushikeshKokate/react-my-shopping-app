import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {  LoginOutlined ,UserOutlined, MenuOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [open, setOpen] = useState(false)
 
  const Carts = useSelector((state)=>state.Cart.Carts);
 
  
  return (
    <div >
     <div className='nav'>
  <Link className='nav-link' to='/' style={{ border: "3px solid black", padding: "2px" }}>
    MART
  </Link>
  <Link to='/store' className='nav-link'>
    Store
  </Link>
  <div className='right-div'>
    <input type="text" className='input' placeholder='search here ...' />
    
 
   
    <Link to='/Cart' className='nav-link'>
  <ShoppingCartOutlined style={{ fontSize: '35px', cursor: "pointer" }} />
  {Carts.length > 0 && (
    <span className='cart-count'>
      {/* Display the number of items that have a name and quantity > 0 */}
      {Carts.filter(item => item.name && item.quantity > 0).length}
    </span>
  )}
</Link>
  
    
    <LoginOutlined style={{ fontSize: '28px', cursor: "pointer" }} />
    <UserOutlined style={{ fontSize: '28px', cursor: "pointer" }} />
  </div>
</div>

     
     
     
  <div className='small-nav'>
      <Link className='nav-link' style={{border:"3px solid black", padding: "2px,"}}>MART </Link>
      <div className='menu-box'>
      <MenuOutlined style={{ fontSize: '28px', cursor:"pointer"}} onClick={()=>{setOpen(!open)}}/>
    </div>
      </div>
      {open &&
         <div className='menu'>
           <Link to='/' 
              className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
               Home
            </Link>
           <Link 
           to='/store'
              className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
              Store
            </Link>
           <Link 
            to='/Cart' 
                className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
              Cart
            </Link>
           <LoginOutlined 
             className='link' 
              style={{ fontSize: '28px', cursor:"pointer"}} 
              onClick={()=>{setOpen(!open)}}/>
          <UserOutlined 
             className='link' 
              style={{ fontSize: '28px', cursor:"pointer"}} 
              onClick={()=>{setOpen(!open)}}/>
            <span className='nav-link link'  onClick={()=>{setOpen(!open)}}>Close</span>
        </div>
        }
    </div>
    
  )
}

export default Navbar