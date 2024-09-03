/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function MyCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret= 'seti_1P5cTRKz34Nc3BYWUXh0uGYW_secret_PvTQOqqxwkyiTFnxg79GlZxSaiHfHH1'
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
        console.log("Stripe is loading")
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: card,
        // billing_details: {
        //   // Include any billing details here
        //   name: 'Jenny Rosen',
        // },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // The setup has succeeded. The payment method is now attached to the customer.
      console.log('Setup succeeded:', result.setupIntent.payment_method);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Save Card
      </button>
    </form>
  );
}
