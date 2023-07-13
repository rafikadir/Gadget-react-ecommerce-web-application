import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import CartItems from "../components/CartItems/CartItems";
import { useContext } from "react";
import CartContext from "../App";

const Cart = () => {

    const cart = useContext(CartContext);
    console.log(cart);

    return (
        <>
            <Navbar/>
            <CartItems/>
            <Footer/>
        </>
    );
};

export default Cart;