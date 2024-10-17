
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CheckoutContainer, CheckoutWrapper, CheckoutTitle, CheckoutItem, CheckoutTotal, ConfirmButton
} from '../components/CheckoutElements';

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <>
      <Sidebar />
      <Navbar />
      <CheckoutContainer>
        <CheckoutTitle>Order Summary</CheckoutTitle>
        <CheckoutWrapper>
          {cart.map((item, index) => (
            <CheckoutItem key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </CheckoutItem>
          ))}
          <CheckoutTotal>Total: ${total}</CheckoutTotal>
          <ConfirmButton onClick={() => alert('Order Confirmed!')}>Confirm Order</ConfirmButton>
        </CheckoutWrapper>
      </CheckoutContainer>
      <Footer />
    </>
  );
};

export default Checkout;
