import { useContext } from "react";
import { CartContext } from "../../App";
import "./OrderSummary.scss";

const OrderSummary = () => {
    const {orderInfo} = useContext(CartContext);   

    return (
        <div className="checkout-summary">
        <h3>Order Summary</h3>

        <ul className='order-info'>
            {
                orderInfo?.map((singleOrder, index) => 
                <li key={index} className='single-order'>
                    <div className='pd-info'>
                        <div className='pd-img'>
                            <img src={singleOrder.img} alt="product" />
                        </div>
                        <span>{singleOrder.title}</span>
                        <span className='quantity'>x {singleOrder.quantity}</span>
                    </div>
                    
                    <span className='price'>${singleOrder.price * singleOrder.quantity}</span>
                </li>)
            }
        </ul>
    </div>
    );
};

export default OrderSummary;