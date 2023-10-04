import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";


const stripePromise = loadStripe('pk_test_51HudH6KhSDYVMKMnPwZecMbHokm2AAkPL3aZ1J33Uhlm7Qx83mgPyx6mMgm8pL8cRB9tczC0BZ5RyuRSF5XBBDdr00FHFjgv2X');

const StripeForm = () => {
    const options = {
        // passing the client secret obtained from the Stripe Dashboard
        clientSecret: '{{CLIENT_SECRET}}',
    };
    
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements> 
    );
};

export default StripeForm;