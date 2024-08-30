import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import {  LoginOutlined ,UserOutlined, MenuOutlined, ShoppingCartOutlined,LogoutOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import {auth} from '../firebase'

const Navbar = ({user,  onData}) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState("")
 
  const Carts = useSelector((state)=>state.Cart.Carts);
  const navigate = useNavigate()
  
  const navToLogin = ()=>{
    navigate('/Signup')
  }

 const sendDataToParent = (e) =>{
  setData(e.target.value)
  onData(data)
 }

  const handleSignOut = async () => {
    
    try {
      await signOut(auth);
      alert('Do you want to logout')
      alert('logout successfully !')
      navigate('/Store');  
     
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };
  
  const gotoProfile = () =>{
    navigate('/Profile')
  }
  
  return (
    <div >
     <div className='nav'>
  <Link className='nav-link' to='/' style={{ border: "3px solid black", padding: "2px" }}>
    MART
  </Link>
  <Link to='/Store' className='nav-link'>
    Store
  </Link>
  <div className='right-div'>
    <input type="text" 
    className='input' 
    placeholder='search here ...' 
    value={data}
    onChange={(e)=>sendDataToParent(e)}/>
    
 
   
    <Link to='/Cart' className='nav-link'>
  <ShoppingCartOutlined style={{ fontSize: '35px', cursor: "pointer" }} />
  {Carts.length > 0 && (
    <span className='cart-count'>
  
      {Carts.filter(item => item.name && item.quantity > 0).length}
    </span>
  )}
</Link>
  
    {user ? (
      <LogoutOutlined 
      style={{ fontSize: '28px', cursor: "pointer" }} 
      onClick={handleSignOut}/>
    ):(
       <LoginOutlined 
       style={{ fontSize: '28px', cursor: "pointer" }} 
       onClick={navToLogin}/>)}
   
    <UserOutlined style={{ fontSize: '28px', cursor: "pointer" }} onClick={gotoProfile}/>
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
           to='/Store'
              className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
              Store
            </Link>
            <Link 
           to='/Wishlist'
              className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
              Wishlist
            </Link>
           <Link 
            to='/Cart' 
                className='nav-link link' 
                onClick={()=>{setOpen(!open)}}>
              Cart
            </Link>
            {user ? (<Link 
           to='/Signout' 
           className='nav-link link' 
           onClick={handleSignOut} >  
             Sign out 
             </Link>):
             (<Link to='/Login' className='nav-link link' 
             onClick={()=>{setOpen(!open)}}>
             Sign In
             </Link>)}
              <Link to='/Profile'
               className='nav-link link'   
               onClick={()=>{setOpen(!open)}}>
                Profile
            </Link>
            <span className='nav-link link'  onClick={()=>{setOpen(!open)}}>Close</span>
        </div>
        }
    </div>
    
  )
}

export default Navbar