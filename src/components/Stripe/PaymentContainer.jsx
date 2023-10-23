import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = await loadStripe("pk_test_51HudH6KhSDYVMKMnPwZecMbHokm2AAkPL3aZ1J33Uhlm7Qx83mgPyx6mMgm8pL8cRB9tczC0BZ5RyuRSF5XBBDdr00FHFjgv2X");

export default function PaymentContainer() {
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
}