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
}

const initialState = {
  cartItem: {},
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      const id = nanoid();

      state.cartItem[id] = action.payload;
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      delete state.cartItem[id];
    },
  },
});

export const { addCartItem, removeCartItem } = cart.actions;
export default cart.reducer;
