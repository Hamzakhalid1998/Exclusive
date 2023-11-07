import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="w-full mt-6">
      <div className="max-w-6xl  mx-auto">
        <div className="flex gap-80">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
        </div>
        <div>
          {cartProducts.map((product, index) => (
            <li key={index} className="grid grid-cols-4 gap-4 mt-3 shadow-md ">
              <div className="flex items-center">
                <img src={product.image} alt="" width={50} />
                <h1 className="ml-2">{product.title}</h1>
              </div>
              <div className="flex items-center ml-24">${product.newPrice}</div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
