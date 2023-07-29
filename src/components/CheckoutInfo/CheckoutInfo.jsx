import './CheckoutInfo.scss';
import { useForm } from "react-hook-form";

const CheckoutInfo = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="checkout-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="address-wrapper">
                            <h3>Delivery Information:</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="address-form">
                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input type='text' placeholder='Full Name' className="form-control" {...register("fullName")} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Email address *</label>
                                            <input type='email' placeholder='Email Address' className="form-control" {...register("Email")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Phone *</label>
                                            <input type='phone' placeholder= 'Phone' className="form-control" {...register("Phone")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Country / Region</label>
                                    <input type='Country' placeholder= 'Country' className="form-control" {...register("Country")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address *</label>
                                    <input type='text' placeholder= 'Address' className="form-control" {...register("Address")} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Town / City</label>
                                            <input type='City' placeholder= 'City' className="form-control" {...register("City")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-label">Zip Code</label>
                                            <input type='Zip Code' placeholder= 'Zip Code' className="form-control" {...register("Zip")} />
                                        </div>
                                    </div>
                                </div>
                                {/* <input type="submit" value="Save Informtion" className="btn btn-primary px-5"/> */}
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="checkout-summary">
                            <h3>Your Order</h3>

                            <ul>
                                <li className='checkout-total'>
                                    <p>Sub Total</p><span>$1500</span>
                                </li>
                                <li>
                                    <div className="checkout-payment">
                                        <span className="payment-option">
                                            <input type="radio" name="cash"/>
                                            <label htmlFor="cash">Cash on Delivery</label>
                                        </span>
                                        <span className="payment-option">
                                            <input type="radio" name="cart"/>
                                            <label htmlFor="card">Stripe / Card</label>
                                        </span>

                                        <button className="order-btn">Place Order</button>
                                    </div>
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