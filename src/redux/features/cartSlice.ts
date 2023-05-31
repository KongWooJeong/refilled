import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface Tag {
  color: string;
  text: string;
}

interface ProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Product {
  id: number;
  name: string;
  originPrice: number;
  price: number;
  discountPercent: number;
  tagInfo: Tag | "";
  description: string;
  imageUrl: string;
  selectedOption: ProductOption | null;
}

interface CartState {
  cartItem: {
    [key: string]: Product;
  };
  totalItemCount: number;
  totalItemPrice: number;
}

const initialState = {
  cartItem: {},
  totalItemCount: 0,
  totalItemPrice: 0,
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      const id = nanoid();

      state.cartItem[id] = action.payload;
      state.totalItemCount += 1;
      state.totalItemPrice += action.payload.price;
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.totalItemCount -= 1;
      state.totalItemPrice -= state.cartItem[id].price;
      delete state.cartItem[id];
    },
  },
});

export const { addCartItem, removeCartItem } = cart.actions;
export default cart.reducer;
