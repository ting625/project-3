import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CheckoutContainer, CheckoutWrapper, CheckoutTitle, CheckoutItem, CheckoutTotal, ConfirmButton
} from '../components/CheckoutElements';

const Checkout = () => {
  const location = useLocation();
  const history = useHistory();
  const { cart, total } = location.state || { cart: [], total: 0 };

  useEffect(() => {
    const fbToken = Cookies.get('fbToken');
    if (!fbToken) {
      history.push('/signin');
    }
  }, [history]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <CheckoutContainer>
        <CheckoutTitle>Order Summary</CheckoutTitle>
        <CheckoutWrapper>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <CheckoutItem key={index}>
                  {item.name} - ${item.price} x {item.quantity}
                </CheckoutItem>
              ))}
              <CheckoutTotal>Total: ${total}</CheckoutTotal>
              <ConfirmButton onClick={() => history.push('/order-confirmation')}>
                Proceed to Order Confirmation
              </ConfirmButton>
            </>
          )}
        </CheckoutWrapper>
      </CheckoutContainer>
      <Footer />
    </>
  );
};

export default Checkout;
