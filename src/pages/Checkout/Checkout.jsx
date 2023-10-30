import "./Checkout.scss";
import { useContext } from 'react';
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { Elements,
        useElements,
        useStripe,
        PaymentElement
    } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from '../../App';
import PaymentForm from "../../components/Stripe/PaymentForm";


const stripePromise = await loadStripe("pk_test_51HudH6KhSDYVMKMnPwZecMbHokm2AAkPL3aZ1J33Uhlm7Qx83mgPyx6mMgm8pL8cRB9tczC0BZ5RyuRSF5XBBDdr00FHFjgv2X");


const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {orderInfo} = useContext(CartContext);    
    const { register, handleSubmit } = useForm();

    // Getting Res from Stripe Server Side
    useEffect(() => {
        fetch("http://localhost:3000/create-payment-intent",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
    const appearance = {
        theme: 'stripe'
    };
    const options = {
        clientSecret,
        appearance
    };


    // Handle form Submission
    const onSubmit = async (data,e) => {
        e.preventDefault();

        console.log(data);
    };

    return (
        <>
            <Navbar/>
            <section className="checkout-wrapper"> 
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-7">
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
                            </div>

                            <div className="col-lg-5">
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

                                <div className="payment-form">
                                    <h3>Payment Option</h3>
                                    
                                    {
                                        clientSecret && stripePromise && ( 
                                            <Elements stripe={stripePromise} options={options}>     
                                                <PaymentForm/>
                                                {/* <button>Pay Now</button> */}
                                            </Elements>
                                        )
                                    }

                                    <button>
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>  
                    </form>   
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Checkout;