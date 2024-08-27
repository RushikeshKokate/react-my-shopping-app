import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Details from './components/Details';
import ProccedToPay from './components/ProccedToPay';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/Store' element={<Store/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Details' element={<Details/>}/>
       <Route path='/ProccedToPay' element={<ProccedToPay/>}/>
       <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
