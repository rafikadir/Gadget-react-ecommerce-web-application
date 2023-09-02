import { useContext } from 'react';
import './CheckoutInfo.scss';
import { useForm } from "react-hook-form";
import { CartContext } from '../../App';
import products from '../../data/products.json';

const CheckoutInfo = () => {
    const {cartProducts,orderInfo} = useContext(CartContext);
    console.log(orderInfo);
    const filtered = products.filter((pd, index) => pd.id === cartProducts[index]);
 

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const handleSelect = (e) => {
        console.log(e.target.value);
    }

    return (
        <section className="checkout-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="address-form">
                                <h3>Shipping Information</h3>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type='text' placeholder='Full Name' className="form-control" {...register("fullName")} required/>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Email address</label>
                                            <input type='email' placeholder='Email Address' className="form-control" {...register("Email")} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Phone</label>
                                            <input type='phone' placeholder= 'Phone' className="form-control" {...register("Phone")} required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Country / Region</label>
                                    <input type='Country' placeholder= 'Country' className="form-control" {...register("Country")} required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <input type='text' placeholder= 'Address' className="form-control" {...register("Address")} required/>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Town / City</label>
                                            <input type='City' placeholder= 'City' className="form-control" {...register("City")} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Zip Code</label>
                                            <input type='Zip Code' placeholder= 'Zip Code' className="form-control" {...register("Zip")} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-info">
                                <h3>Select Payment Option</h3>

                                <ul className="payment-list">
                                    <li>
                                        <input type="radio" name="select-payment" id="cod" value="cod" onChange={handleSelect}/>
                                        <label htmlFor="cod">Cash On Delivery</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="select-payment" id="bank-transfar" value="bank" onChange={handleSelect}/>
                                        <label htmlFor="bank-transfar">Bank Transfar</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="select-payment" id="stripe" value="strpe" onChange={handleSelect}/>
                                        <label htmlFor="stripe">Stripe / Credit Card / VISA</label>
                                    </li>
                                </ul>

                                <button type='submit' className="payment-btn">
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="checkout-summary">
                            <h3>Your Order</h3>
                            <ul>
                                {

                                }
                                <li className='checkout-total'>
                                    <p>Sub Total</p><span>$1500</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutInfo;