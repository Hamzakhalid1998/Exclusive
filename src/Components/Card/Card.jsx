import React from "react";
import Button from "../Button/Button";
import HeartIcon from "../../assets/heart small.png";
import CartIcon from "../../assets/Cart.png";
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

    addToCart,
  } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const handleLikeButton = (name) => {
    dispatch(addLike(name));
  };

  const handleCartButton = (name) => {
    const obj = products.find((pro) => pro.title == name);
    dispatch(addCart(obj));
  };

  return (
    <div>
      <div className="w-[260px] h-[240px] flex justify-center items-center bg-[#F5F5F5] relative">
        <img src={productImg} alt="" className="bg-[#F5F5F5]" />
        {productDiscount > 0 ? (
          <p className="bg-[#DB4444] py-1 px-2 rounded-md text-white absolute top-2 left-3">
            {productDiscount}%
          </p>
        ) : (
          ""
        )}

        <Button
          className="bg-white rounded-full flex items-center p-1 absolute top-2 right-3"
          child={HeartIcon}
          alt="Add to Cart"
          onClick={() => handleLikeButton(ProductName)}
        />

        {addToCart === true ? (
          <button
            className="flex space-x-2 absolute bottom-0 py-2 bg-black w-full text-white justify-center"
            onClick={() => handleCartButton(ProductName)}
          >
            <span>Add To Cart</span>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="py-2">
        <h1 className=" text-base font-medium">{ProductName}</h1>
        <div className="flex space-x-2 text-base">
          <p className="text-[#DB4444]">${newPrice}</p>
          <p className="line-through ">${oldPrice}</p>
        </div>
      </div>
      <button>Cart</button>
    </div>
  );
}

export default Card;