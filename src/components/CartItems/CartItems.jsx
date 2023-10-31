import { useContext, useEffect, useState} from 'react';
import './CartItems.scss';
import { CartContext } from '../../App';
import productData from '../../data/products.json';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const CartItems = () => {

    const {cartProducts, deleteItem, SetOrderInfo} = useContext(CartContext);
    const [productsInCart, setProductsInCart] = useState();
    const [grandTotal, SetGrandTotal] = useState();

    // Cart Prducts
    useEffect(() =>{
        const pdId = cartProducts.map(pd =>{
            const filterdPd = productData.find(product => product.id === pd);
            return {...filterdPd, quantity: 1};
        });
        setProductsInCart(pdId);
        SetOrderInfo(pdId);
    },[cartProducts]);    

    // Calculate Total
    useEffect(()=>{
        if (productsInCart) {
            const itemTotalCal = productsInCart.reduce((acc, item)=> acc + item.price * item.quantity, 0);
            SetGrandTotal(itemTotalCal);
        }
    },[productsInCart])

    // Cart Quantity
    const handleDecrease = (index) => {
        const latestCart = [...productsInCart];
        if (latestCart[index].quantity >1) {
            latestCart[index].quantity -= 1;
            setProductsInCart(latestCart);
        }
    }
    const handleIncrease = (index) => {
        const latestCart = [...productsInCart];
        latestCart[index].quantity += 1;
        setProductsInCart(latestCart);
    }
    
    
    return (
        <section className='cart-section'>
            <div className="container">
                <h2 className='title'>Shopping Cart</h2>

                <div className="row">
                    <div className="col-lg-9">
                        <div className="cart-box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Item Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>                                  
                                    {
                                        productsInCart?.map((item, index) =>
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.img} alt="product" className='pd-img'/>
                                                    {item.title}
                                                </td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <div className='cart-quantity'>
                                                        <button className='quantity-btn' onClick={()=>handleDecrease(index)} disabled={item.quantity === 1}>-</button>
                                                        <input type="number" value={item.quantity} readOnly/>
                                                        <button className='quantity-btn' onClick={()=> handleIncrease(index)}>+</button>
                                                    </div>
                                                </td>
                                                <td>{item.price * item.quantity}</td>
                                                <td>
                                                    <button onClick={()=>deleteItem(item.id)} className='delete-cart'><AiOutlineDelete/></button>
                                                </td>
                                            </tr>
                                    )}                                  
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-lg-3">             
                        <div className="cart-total">
                            <h3>Cart Summary</h3>
                            <p>Total: <span>${grandTotal}</span></p>
                            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartItems;