import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ShopContainer,
  ShopWrapper,
  ShopCard,
  ShopIcon,
  ShopH1,
  ShopH2,
  ShopP,
  AddToCartButton,
  RemoveFromCartButton,
  CartSummaryContainer,
  CartTitle,
  CartItemsList,
  CartItem,
  RemoveItemButton,
  CartTotal,
} from "../components/ShopElements";
import { useHistory } from "react-router-dom";

import Icon1 from "../images/laptop.png";
import Icon2 from "../images/camera.png";
import Icon3 from "../images/pro-video.png";
import Icon4 from "../images/smartwatch.png";
import Icon5 from "../images/smart-phone.png";
import Icon6 from "../images/tablet.png";

const products = [
  { id: 1, name: "LAPTOP", image: Icon1, price: 1200 },
  { id: 2, name: "CAMERA", image: Icon2, price: 800 },
  { id: 3, name: "PRO VIDEO", image: Icon3, price: 1500 },
  { id: 4, name: "SMART WATCH", image: Icon4, price: 300 },
  { id: 5, name: "SMART PHONE", image: Icon5, price: 1000 },
  { id: 6, name: "TABLETS", image: Icon6, price: 700 },
];

const Shop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const proceedToCheckout = () => {
    history.push("/checkout", { cart, total });
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <ShopContainer>
        <ShopH1>Shop Our Products</ShopH1>
        <ShopWrapper>
          {products.map((product) => (
            <ShopCard key={product.id}>
              <ShopIcon src={product.image} />
              <ShopH2>{product.name}</ShopH2>
              <ShopP>Price: ${product.price}</ShopP>
              <AddToCartButton onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </AddToCartButton>
            </ShopCard>
          ))}
        </ShopWrapper>

        <CartSummaryContainer>
          <CartTitle>Cart Summary</CartTitle>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <CartItemsList>
                {cart.map((item, index) => (
                  <CartItem key={index}>
                    {item.name} - ${item.price} x {item.quantity}
                    <RemoveItemButton
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </RemoveItemButton>
                  </CartItem>
                ))}
              </CartItemsList>
              <CartTotal>Total: ${total}</CartTotal>
              <AddToCartButton onClick={proceedToCheckout}>
                Proceed to Checkout
              </AddToCartButton>
            </>
          )}
          
        </CartSummaryContainer>
      </ShopContainer>
      <Footer />
    </>
  );
};

export default Shop;
