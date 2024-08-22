import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Cart from './components/Cart';
import Details from './components/Details';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/Store' element={<Store/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Details' element={<Details/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
