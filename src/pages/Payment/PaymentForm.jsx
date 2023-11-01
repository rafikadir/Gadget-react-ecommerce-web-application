import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useEffect} from "react";
import Button from "../../components/Button/Button";

const PaymentForm = () => {
  const stripe = useStripe();

  const elements = useElements();

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
      console.log(error);
    }
  };
  
  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
      <>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement options={paymentElementOptions}/>
          <Button name="Place Order"/>
        </form>
      </>
  );
};

export default PaymentForm;