import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll } from "../../Store/Slices/AddToCart";
// import updateQuantity from '../../Store/Slices/Total'
const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);
  console.log(cartProducts);

  const dispatch = useDispatch();

  const handleQuantityChange = (index, newQuantity) => {
    // Dispatch the action to update the quantity in the Redux store
    dispatch(
      updateQuantity({ productId: cartProducts[index].id, newQuantity })
    );
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="w-full mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-80">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
        </div>
        <div>
          {cartProducts.map((product, index) => (
            <li key={index} className="grid grid-cols-4 gap-4 mt-3 shadow-md">
              <div className="flex items-center p-5">
                <img src={product.image} alt="" width={50} />
                <h1 className="ml-2">{product.title}</h1>
              </div>
              <div className="flex items-center ml-20">${product.newPrice}</div>
              <div className="flex items-center ml-36">
                <input
                  type="number"
                  value={product.quantity}
                  className="border border-gray-300 w-14"
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10);
                    handleQuantityChange(index, newQuantity);
                  }}
                />
              </div>
              <div className="flex items-center ml-56">
                ${product.newPrice * product.quantity}
              </div>
            </li>
          ))}
        </div>
        <div className="flex justify-between mt-5">
          <Link to={"/Products"}>
            <button className="border border-[1px solid rgba(0, 0, 0, 0.50)] p-2">
              Return To Products
            </button>
          </Link>
          <button
            className="border border-[1px solid rgba(0, 0, 0, 0.50)] p-2"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
