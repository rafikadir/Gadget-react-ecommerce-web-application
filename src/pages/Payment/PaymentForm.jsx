import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();

  const elements = useElements();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
  };
  
  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
      <>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement options={paymentElementOptions}/>
          <button type="submit">Confirm Order</button>
        </form>
      </>
  );
};

export default PaymentForm;