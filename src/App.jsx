import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { createContext } from 'react';

const CartContext = createContext();

function App() {

  return (
      <CartContext.Provider value='hello cart'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CartContext.Provider>
  )
}

export default App;
