import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Button from '../../components/Button/Button';
import "./Checkout.scss";
import { CartContext } from "../../App";
import { useContext, useEffect, useState } from "react";

const Checkout = () => {
    const {orderInfo} = useContext(CartContext);  
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState();
    const [orderNumber, setOrderNumber] = useState();

    const getOrderNumber =()=>{
        const min = 1000;
        const max = 9999;
        return setOrderNumber(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    useEffect(() => {
       const updateOrder = orderInfo?.map((order) =>({
        ...order,
        orderNo: orderNumber
       }))

       setOrderData(updateOrder);
    }, [orderInfo]);

    // Handle form Submission
    const onSubmit = (data,e) => {
        e.preventDefault();
        localStorage.setItem('shipping', JSON.stringify(data));
        console.log(orderData)
        // localStorage.setItem('order', JSON.stringify(orderInfo));

        navigate("/payment");
    };

    return (
        <>
            <Navbar/>
            <section className="checkout-wrapper"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                                <div className="address-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <Button name="Save & Go to Payemnt" type="submit"/>
                                </form>   
                            </div> 
                        </div>
                        <div className="col-lg-5">
                            <OrderSummary/>
                        </div>
                    </div>  
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Checkout;