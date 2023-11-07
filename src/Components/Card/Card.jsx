import React from "react";
import Button from "../Button/Button";
import HeartIcon from "../../assets/heart small.png";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../../Store/Slices/Like";
import { addCart } from "../../Store/Slices/AddToCart";

function Card(props) {
  const {
    productImg,
    productDiscount,
    ProductName,
    oldPrice,
    newPrice,
    showButton,
  } = props;
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  // console.log(products);

  const handleLikeButton = (name) => {
    dispatch(addLike(name));
  };

  const handleAddToCart = (ProductName) => {
    // console.log(products);
    const product = products.find((pro) => pro.title == ProductName);
    dispatch(addCart(product));
  };

  return (
    <div>
      <div className="w-[280px] h-[240px] flex justify-center items-center bg-[#F5F5F5] relative">
        <img src={productImg} alt="" className="bg-[#F5F5F5]" />
        {productDiscount > 0 ? (
          <p className="bg-[#DB4444] py-1 px-2 rounded-md text-white absolute top-2 left-3">
            {productDiscount}%
          </p>
        ) : (
          ""
        )}

        {showButton && (
          <Button
            className="bg-white rounded-full flex items-center p-1 absolute top-2 right-3"
            child={HeartIcon}
            alt="Add to Cart"
            onClick={() => handleLikeButton(ProductName)}
          />
        )}
      </div>
      <div className="py-2">
        <h1 className=" text-xl font-semibold">{ProductName}</h1>
        <div className="flex space-x-2 text-lg">
          <p className="text-[#DB4444] font-bold">${newPrice}</p>
          <p className="line-through text-[#808080] ">${oldPrice}</p>
        </div>
      </div>
      {showButton && (
        <button
          className="bg-[#000000] text-white rounded-sm py-2 px-4 mt-2 w-[280px] mb-5"
          onClick={() => handleAddToCart(ProductName)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Card;
