
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Makepayment from './components/Makepayment';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import GamingChatbot from './components/GamingChatbot';

function App() {
  return (
    <BrowserRouter>

      <div className="App full-height">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Getproduct />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproduct" element={<Addproducts />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
      <GamingChatbot/>
    </BrowserRouter>
  );
}

export default App;
