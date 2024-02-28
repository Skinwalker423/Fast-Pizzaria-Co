import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "../../types";
import { RootState } from "../../app/store";

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
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuanity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuanity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      if (item.quantity === 1) {
        cartSlice.caseReducers.removeFromCart(state, action);
      } else {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
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

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
export const getCartTotalPrice = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getCart = (state: RootState) => state.cart.cart;

export const getItemQuantityWithId = (id: string) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;
