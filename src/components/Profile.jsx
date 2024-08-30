import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'; 
import { signOut } from 'firebase/auth';  
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user}) => {
  console.log(user);

  const navigate = useNavigate()

 const handleSignOut = async() =>{
  try {
    await signOut(auth)
    alert('Do you want to logout')
    alert('logout successfully !')
    navigate('/Store')
  }
  catch(error){
    console.error('Sign out error')
  }
 }

  return (
    <div>
      {user ? (
        <div className="profile-container">
             
          <img
            src={user.profileImage || './Profile.png'}  
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-email">{user.email}</h2>
          <Link to='/Wishlist' className="profile-wishlist-link">Wishlist</Link> 
          <button className="button12" onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <h3 className="profile-container" style={{gap:"20px"}}>Please Login To Continue<Link to='/Login' className="profile-wishlist-link">Login</Link> </h3>
      )}
    </div>
  );
};

export default Profile;
