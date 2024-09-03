import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyCheckoutForm from './checkoutForm';

const stripePromise = loadStripe('STRIPE TEST KEY');

function App() {


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>STRIPE CHECK PAGE</h1>
      <Elements stripe={stripePromise}>
        <MyCheckoutForm />
    </Elements>
    </>
  )
}

export default App
