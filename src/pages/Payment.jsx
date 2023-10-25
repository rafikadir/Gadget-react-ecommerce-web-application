import { useState } from 'react';
import { BsCreditCard, BsBoxSeam } from "react-icons/bs";
import PaymentContainer from "../components/Stripe/PaymentContainer";

const Payment = () => {
    const [isStripeSelected, setIsStripeSelected] = useState(false);

    const handleSelect = (e) => {
        if (e.target.value === "stripe") {
            setIsStripeSelected(true);
        }
        else {
            setIsStripeSelected(false);
        }
    }

    return (
        <>
            <div className="payment-info">
                <h3>Select Payment Option</h3>
                <div className="payment-list">       
                    <label  className="payment-option" htmlFor="cod">
                        <div>
                            <BsBoxSeam/>
                            <span>Cash On Delivery</span>
                        </div>                                     
                        <input type="radio" name="paymentMethod" id="cod" value="cod" onChange={handleSelect}/>
                    </label> 

                    <label className="payment-option" htmlFor="stripe">
                        <div>
                            <BsCreditCard/>
                            <span>Stripe / Card</span>
                        </div>                                      
                        <input type="radio" name="paymentMethod" id="stripe" value="stripe" onChange={handleSelect}/>
                    </label>
                </div>

                {isStripeSelected ? <PaymentContainer/> : ""}                                                                                                                                                                                                                                                                                                                                     
            </div>   
        </>
    );
};

export default Payment;