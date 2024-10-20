import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const OrderConfirmationPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Show order confirmation message
    alert('Order Confirmed!');

    // Automatically log out after 1 minute
    const logoutTimer = setTimeout(() => {
      alert('Session expired. You will be logged out.');
      Cookies.remove('fbToken'); // Remove the session token
      history.push('/signin'); // Redirect to the sign-in page
    }, 60000); // 1 minute = 60000 milliseconds

    return () => clearTimeout(logoutTimer); // Cleanup timer
  }, [history]);

  return (
    <div>
      <h1>Order Confirmed!</h1>
      <p>Your order is being processed. You will be logged out in 1 minute.</p>
    </div>
  );
};

export default OrderConfirmationPage;
