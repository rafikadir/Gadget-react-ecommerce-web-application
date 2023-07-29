import './CheckoutInfo.scss';
import { useForm } from "react-hook-form";

const CheckoutInfo = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="checkout-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="address-wrapper">
                            <h3>Delivery Information:</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="address-form">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type='text' placeholder='Full Name' className="form-control" {...register("fullName")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email address</label>
                                    <input type='email' placeholder='Email Address' className="form-control" {...register("Email")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <input type='text' placeholder= 'Address' className="form-control" {...register("Address")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input type='phone' placeholder= 'Phone' className="form-control" {...register("Phone")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input type='City' placeholder= 'City' className="form-control" {...register("City")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Zip Code</label>
                                    <input type='Zip Code' placeholder= 'Zip Code' className="form-control" {...register("Zip")} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <input type='Country' placeholder= 'Country' className="form-control" {...register("Country")} />
                                </div>
                                <input type="submit" />
                            </form>
                        </div>

                        <div className="payment-wrapper">
                            <ul>
                                <li>paypal</li>
                                <li>paypal</li>
                                <li>paypal</li>
                                <li>paypal</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h3>Order Summary</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutInfo;