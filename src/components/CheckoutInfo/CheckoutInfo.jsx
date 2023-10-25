import { useContext } from 'react';
import './CheckoutInfo.scss';
import { useForm } from "react-hook-form";
import { CartContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const CheckoutInfo = () => {
    const {orderInfo} = useContext(CartContext);    
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        navigate("/payment")
    };

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

                            <button type='submit' className='address-btn'>
                               Continue to Payment
                            </button>  
                        </form>            
                    </div>

                    <div className="col-lg-5">
                        <div className="checkout-summary">
                            <h3>Your Order</h3>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutInfo;