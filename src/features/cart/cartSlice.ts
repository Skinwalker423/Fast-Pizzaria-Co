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
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuanity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.unitPrice,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    },
    decreaseItemQuanity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.unitPrice,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseItemQuanity,
  decreaseItemQuanity,
  clearCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
