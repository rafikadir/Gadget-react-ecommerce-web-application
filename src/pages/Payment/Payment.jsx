import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import PaymentForm from "./PaymentForm";
import "./Payment.scss";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const stripePromise = await loadStripe("pk_test_51HudH6KhSDYVMKMnPwZecMbHokm2AAkPL3aZ1J33Uhlm7Qx83mgPyx6mMgm8pL8cRB9tczC0BZ5RyuRSF5XBBDdr00FHFjgv2X");

const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");

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
  
    return (
      <>
          <Navbar/>
          <section className="payment-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  {
                    clientSecret && stripePromise && (
                    <Elements stripe={stripePromise}  options={options}>
                      <PaymentForm />
                    </Elements>
                    )
                  }
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

export default Payment;