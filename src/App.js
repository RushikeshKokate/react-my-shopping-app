import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Details from './components/Details';
import ProccedToPay from './components/ProccedToPay';
import PaymentSuccess from './components/PaymentSuccess';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Wishlist from './components/Wishlist';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data);
    console.log(childData);
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('User logged in:', currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Navbar user={user} onData={handleDataFromChild}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store user={user}  childData={childData} />} />
        <Route path="/Cart" element={<Cart user={user}/>} />
        <Route path="/Details" element={<Details />} />
        <Route path="/ProccedToPay" element={<ProccedToPay />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile user={user}/>} />
        <Route path='/Wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
