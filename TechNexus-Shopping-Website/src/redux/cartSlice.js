
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      } else {
        itemInCart.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
