import { Link } from 'react-router-dom';
import './CheckoutInfo.scss';
import { useForm } from "react-hook-form";
import { FiLogIn } from 'react-icons/fi';
import {useState} from 'react';

const CheckoutInfo = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const handleSelect = (e) => {
        console.log(e.target.value);
    }

    const handleAccountCreate = () => {
        setIsChecked(!isChecked);
    }

    return (
        <section className="checkout-area">
            <div className="container">
                <div className="return-user">
                    <p><FiLogIn/> Returning customer? <Link to="/signin">Click here to Sign In</Link></p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="address-form">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="address-wrapper">
                                <h3>Delivery Information:</h3>

                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input type='text' placeholder='Full Name' className="form-control" {...register("fullName")} required/>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Email address *</label>
                                            <input type='email' placeholder='Email Address' className="form-control" {...register("Email")} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Phone *</label>
                                            <input type='phone' placeholder= 'Phone' className="form-control" {...register("Phone")} required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Country / Region</label>
                                    <input type='Country' placeholder= 'Country' className="form-control" {...register("Country")} required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address *</label>
                                    <input type='text' placeholder= 'Address' className="form-control" {...register("Address")} required/>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Town / City *</label>
                                            <input type='City' placeholder= 'City' className="form-control" {...register("City")} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Zip Code *</label>
                                            <input type='Zip Code' placeholder= 'Zip Code' className="form-control" {...register("Zip")} required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group create-account">
                                    <input type="checkbox" name="create-account" id="create-account" onChange={handleAccountCreate} checked={isChecked}/>
                                    <label htmlFor="create-account">Create an Account</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="checkout-summary">
                                <h3>Your Order</h3>
                                <ul>
                                    <li className='checkout-total'>
                                        <p>Sub Total</p><span>$1500</span>
                                    </li>
                                </ul>
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
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckoutInfo;