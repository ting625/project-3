import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import './OrderConfirmation.scss';


const OrderConfirmationPage = () => {
  const history = useHistory();
  const cart = useSelector((state) => state?.cart?.cart);
    const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    // Show order confirmation message
    alert("Order Confirmed!");

    // Automatically log out after 1 minute
    const logoutTimer = setTimeout(() => {
      alert("Session expired. You will be logged out.");
      Cookies.remove("fbToken"); // Remove the session token
      history.push("/signin"); // Redirect to the sign-in page
    }, 60000); // 1 minute = 60000 milliseconds

    return () => clearTimeout(logoutTimer); // Cleanup timer
  }, [history]);

  return (
  <div className="order-confirmation-page">
    <h1>Order Confirmed!</h1>
    <p>Your order is being processed.</p>
    <div className="back-button">
      <button onClick={() => history.push('/')}>Go Back To Home</button>
    </div>
    <div className="cart-items">
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.name} - ${item.price} x {item.quantity}</span>
        </div>
      ))}
      <div className="cart-total">Total: ${total}</div>
    </div>
  </div>
);

};

export default OrderConfirmationPage;
