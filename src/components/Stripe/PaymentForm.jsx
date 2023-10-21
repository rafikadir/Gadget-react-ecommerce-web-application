import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
          return;
        }
      },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: "http://localhost:3000",
          },
    });

    const paymentElementOptions = {
        layout: "tabs"
    }
    

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
          
                <PaymentElement id="payment-element" options={paymentElementOptions}/>
                <button disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
            </form>
        </>
    );
};

export default PaymentForm;