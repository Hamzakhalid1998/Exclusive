import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Store/Slices/AddToCart";
import Card from "../../Components/Card/Card";

const ProductCardGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const handleAllToCart = () => {
    products.map((pro) => dispatch(addCart(pro)));
  };
  return (
    <div className="max-w-6xl mx-auto mt-[50px]">
      <div className="flex justify-between items-center">
        <h1 className=" text-xl">{`Total Products (${products.length})`}</h1>
        <button
          className="font-medium px-10 py-3 bg-transparent border border-gray-400 rounded-sm"
          onClick={handleAllToCart}
        >
          Move All To Cart
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-8 py-5">
        {products.map((product, index) => (
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
    </div>
  );
};

export default ProductCardGrid;
