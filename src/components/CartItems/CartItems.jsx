import { useContext, useEffect, useState} from 'react';
import './CartItems.scss';
import { CartContext } from '../../App';
import productData from '../../data/products.json';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const CartItems = () => {

    const {cartProducts, deleteItem} = useContext(CartContext);
    const [productsInCart, setProductsInCart] = useState();
    const [getCoupon, setGetCoupon] = useState(false);
    const [coupon, setCoupon] = useState(0);
    const [subTotal, SetSubTotal] = useState();
    const [grandTotal, SetGrandTotal] = useState();

    // Cart Prducts
    useEffect(() =>{
        const pdId = cartProducts.map(pd =>{
            const filterdPd = productData.find(product => product.id === pd);
            return {...filterdPd, quantity: 1};
        });
        setProductsInCart(pdId);
    },[cartProducts]);    

    // Calculate Total
    useEffect(()=>{
        if (productsInCart) {
            const itemTotalCal = productsInCart.reduce((acc, item)=> acc + item.price * item.quantity, 0);
            SetSubTotal(itemTotalCal);
        }
    },[productsInCart])
    

    // Handle Coupon
    const handleInput = (e) => {
        if(productsInCart) {
            if (e.target.value === "test20" || e.target.value === "TEST20") {
                setGetCoupon(true);
            }
        }
    }
    const handleCoupon = (e) => {
        if(getCoupon === true){
            const couponAmount = 20;
            setCoupon(couponAmount);
        }

        else {
            alert("Invalid")
        }
        e.preventDefault();
    }

    // Sub Total
    useEffect(()=>{
        SetGrandTotal(subTotal - coupon); 
    },[coupon, subTotal])

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
                <h2 className='title'>Cart</h2>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
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
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button onClick={()=>handleDecrease(index)} disabled={item.quantity === 1}>-</button>
                                                    <input type="number" value={item.quantity} readOnly/>
                                                    <button onClick={()=> handleIncrease(index)}>+</button>
                                                </td>
                                                <td>{item.price * item.quantity}</td>
                                                <td>
                                                    <button onClick={()=>deleteItem(item.id)} className='delete-cart'><AiOutlineDelete/></button>
                                                </td>
                                            </tr>
                                    )}                                  
                                </tbody>
                            </table>

                            <div className="cart-coupon">
                                <form onSubmit={handleCoupon}>
                                    <span>* use <code>TEST20</code> to apply coupon</span>
                                    <div className='input-box'>
                                        <input type="text" onChange={handleInput} placeholder='TEST20' className="coupon-input" required/>
                                        <button className='coupon-btn' type='submit'>Apply Coupon</button>
                                    </div>    
                                    <span className="invaild-coupon">Invalid Coupon</span>               
                                </form>
                            </div>
                        </div>

                        <div className="cart-total">
                            <ul>
                                <li>Sub Total: <span>${subTotal}</span></li>
                                <li>Coupon:<span>${coupon}</span></li>
                                <li>Grand Total: <span>${grandTotal}</span></li>
                            </ul>

                            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartItems;