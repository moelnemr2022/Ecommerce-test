// App.js
import './App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Slider from './components/Slider';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer.jsx';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react';
// import Cart from './components/Cart';
// import Cart2 from './components/Cart2';


function App() {

  const [cartItem2,setCartItem2] = useState([])
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<>
        <Slider />
        <Products cartItem2={cartItem2} setCartItem2={setCartItem2}/>
        </>} />
        <Route path="/About" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetails />
      }/>
      {/* <Route path="/Cart2" element={<Cart2 cartItem2={cartItem2} setCartItem2={setCartItem2} />} /> */}
      </Routes>
      
      <Footer /> {/* This line includes the Footer component */}
     
    </>
  );
}

export default App;
