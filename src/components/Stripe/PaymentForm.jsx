import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import ThemeBtn from "../ThemeButton/ThemeBtn";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };
  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
      <>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement options={paymentElementOptions}/>
          <button disabled={isLoading || !stripe || !elements} id="submit">
              <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Place Order"}
              </span>
          </button>
        </form>
      </>
  );
};

export default PaymentForm;