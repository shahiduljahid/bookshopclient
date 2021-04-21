import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitCard from './SplitCard';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IibuNHxHRot2xSgaYd8am09RGQRVwnaviReukuu4u42yAMgKO9MR3KtD8SDzPfdWWUDbtvI45fEhjKHoj7Po60100C6tE6kav');

const Payment = ({handlePayment}) => {

    return (
        <div>
             <Elements stripe={stripePromise}>
                 <SplitCard handlePayment={handlePayment}></SplitCard>
            
    </Elements>
            
        </div>
    );
};

export default Payment;