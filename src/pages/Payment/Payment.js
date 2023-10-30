import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import './Payment.scss';

const stripePromise = await loadStripe("process.env.PK_TEST");


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
            {
                clientSecret && stripePromise && (
                <Elements stripe={stripePromise}  options={options}>
                    <PaymentForm />
                </Elements>
                )
            }
        </>
    );
};

export default Payment;