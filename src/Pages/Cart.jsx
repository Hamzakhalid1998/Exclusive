import React from "react";
import CartPage from "../Components/CartProducts/CartProducts";
import { CartTotal } from "../Components/CartTotal/CartTotal";

const Cart = () => {
  return (
    <div>
      <CartPage />
      <CartTotal />
    </div>
  );
};

export default Cart;
