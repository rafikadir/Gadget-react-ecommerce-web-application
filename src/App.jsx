import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Signin from './pages/Signin/Signin';

export const CartContext = createContext();

function App() {

  const [cartProducts, setCartProducts] = useState([]);

  const updateCart = (id) => {
    const checkProduct = cartProducts.includes(id);
    if (!checkProduct) {
      setCartProducts([id, ...cartProducts]);
    }
  };

  const deleteItem = (id) => {
    const removeCart = cartProducts.filter(cart => cart !== id);
    setCartProducts(removeCart);
  };

  return ( 
    <CartContext.Provider value={{cartProducts, updateCart, deleteItem}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App;
