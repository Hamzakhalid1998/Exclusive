import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const HomeProducts = () => {
  const [viewAllProduct, setViewAllProduct] = useState(false);
  const products = useSelector((state) => state.product);

  const ProductDetails = viewAllProduct ? products : products.slice(0, 4);

  return (
    <div className=" w-full mt-10 flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div class="grid grid-cols-4 gap-4  justify-center items-center">
          {ProductDetails.map((product, index) => (
            <Card
              key={index}
              productImg={product.image}
              productDiscount={product.discountInPercentage}
              ProductName={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-5 rounded-md">
          <button
            className="py-5 px-10 bg-[#DB4444] text-white rounded-sm"
            onClick={() => setViewAllProduct(!viewAllProduct)}
          >
            {viewAllProduct ? "View Less Products" : "View More Products"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
