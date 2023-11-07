import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "Cart Slice",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeAll(state, action) {
      return [];
    },
    cancelProduct(state, action) {
      state = state.filter((pro) => pro.title != action.payload);
      return state;
    },
  },
});

export const { addCart, removeAll, cancelProduct } = addToCart.actions;

export default addToCart.reducer;
