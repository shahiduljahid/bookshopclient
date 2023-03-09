import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {
    
  
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:'16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCard = ({handlePayment}) => {
    
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError , setPaymentError] =useState(null);
  const [paymentSuccess , setPaymentSuccess] =useState(null);
  const[paymentSuccessId , setPaymentSuccessId] =useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
 

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log( payload);
    if(payload.error){
        setPaymentError(payload.error.message)
        setPaymentSuccess(null)
    }
    else{
        setPaymentSuccess(payload.paymentMethod.id)
        setPaymentError(null)
        setPaymentSuccessId(payload.paymentMethod.id)
        handlePayment(payload.paymentMethod.id)
        
        
    
    }
  };

  return (
    <form   className="ml-5" onSubmit={handleSubmit}>
      <label >
      {`Card number(4242 4242 4242 4242)`}
        <CardNumberElement
      
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br/>
      <button  className=" mt-3 btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p  className=" mt-2 text-danger text-center" >{paymentError}</p>
      }
         {
          paymentSuccess && <p  className=" mt-2 text-success text-center">Your payment was successfully</p>
      }

    </form>
  );
};

export default SplitCard;
