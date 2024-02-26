import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "../../types";

interface CartState {
  cart: CartItemProps[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      console.log(action.payload);
      const isItemInCart = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (isItemInCart) {
        return;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuanity: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.unitPrice,
          };
        }
      });
    },
    decreaseItemQuanity: (state, action: PayloadAction<CartItemProps>) => {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    clearCart: (state, action: PayloadAction<CartItemProps>) => {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart, increaseItemQuanity } = cartSlice.actions;
export default cartSlice.reducer;
