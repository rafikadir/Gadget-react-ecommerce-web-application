import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';
import Checkout from './pages/Checkout';
import Signin from './pages/Signin/Signin';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import User from './pages/User/User';
import Payment from './pages/Payment/Payment';

export const CartContext = createContext();

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [userInfo, SetUserInfo] = useState();
  const [orderInfo, SetOrderInfo] = useState();

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
    <CartContext.Provider value={{
      cartProducts, 
      updateCart, 
      deleteItem, 
      SetIsLoggedIn, 
      isLoggedIn, 
      userInfo, 
      SetUserInfo,
      SetOrderInfo,
      orderInfo,
    }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/*" element={<PrivateOutlet/>}>  */}
          <Route path="checkout" element={<Checkout />} />
          <Route path="user" element={<User />}/>
          <Route path="payment" element={<Payment />}/>
          <Route path="user/:url" element={<User />}/>
        {/* </Route> */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App;
