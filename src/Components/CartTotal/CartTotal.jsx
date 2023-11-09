import React from "react";

export const CartTotal = () => {
  return (
    <div className="w-full mt-10 flex justify-start">
      <div className=" max-w-6xl ml-24 pl-3 ">
        <div className="border border-black p-5 pt-2 ">
          <h1 className="font-bold">Cart Total</h1>
          <div className="flex gap-32 border-b border-gray-300 pt-4">
            <h2>Sub Total</h2>
            <h2>Price</h2>
          </div>

          <div className="flex gap-32 border-b border-gray-300 pt-4">
            <h2>Shipping</h2>
            <h2 className="pl-1">Free</h2>
          </div>

          <div className="flex gap-36 border-b border-gray-300 pt-4">
            <h2>Total</h2>
            <h2 className="pl-3">Price</h2>
          </div>

          <div className="flex justify-center pt-4">
            <button className="bg-[#DB4444] text-white p-1 rounded-sm">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
