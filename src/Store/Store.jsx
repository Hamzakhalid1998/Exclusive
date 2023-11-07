import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/Products";
import LikeSlice from "./Slices/Like";
import AddCartSlice from "./Slices/AddToCart";
import Total from "./Slices/Total";

const store = configureStore({
  reducer: {
    product: ProductsSlice,
    like: LikeSlice,
    cart: AddCartSlice,
    subtotal: Total,
  },
});
export default store;
