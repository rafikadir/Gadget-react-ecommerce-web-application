import { useContext, useEffect, useState} from 'react';
import './CartItems.scss';
import { CartContext } from '../../App';
import productData from '../../data/products.json';

const CartItems = () => {

    const {cartProducts, deleteItem} = useContext(CartContext);
    const [productsInCart, setProductsInCart] = useState([]);

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
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>                                  
                                    {productsInCart?.map((item, index) => <tr key={index}>
                                            <td><img src={item.img} alt="product" className='pd-img'/></td>
                                            <td>TH</td>
                                            <td>1</td>
                                            <td>2500</td>
                                            <td><button onClick={()=>deleteItem(item)}>Remove</button></td>
                                        </tr>
                                    )}                                  
                                </tbody>
                            </table>

                            <div className="cart-coupon">
                                <form>
                                    <input type="text"  placeholder='TEST20' className="coupon-input"/>
                                    <button className='coupon-btn' disabled>Apply Coupon</button>
                                </form>
                            </div>
                        </div>

                        <div className="cart-total">
                            <ul>
                                <li>Total: <span>$2500</span></li>
                                <li>Shipping Cost: <span>$2500</span></li>
                                <li>Coupon:<span>- $2500</span></li>
                                <li>Grand Total: <span>$1500</span></li>
                            </ul>

                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartItems;