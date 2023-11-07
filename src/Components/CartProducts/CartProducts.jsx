import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartProducts];
    updatedCart[index].quantity = newQuantity;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Cart Details", 10, 10);

    let yOffset = 30;

    cartProducts.forEach((product, index) => {
      const total = product.newPrice * product.quantity;
      doc.text(`Product: ${product.title}`, 10, yOffset);
      doc.text(`Price: $${product.newPrice}`, 10, yOffset + 10);
      doc.text(`Quantity: ${product.quantity}`, 10, yOffset + 20);
      doc.text(`Total: $${total}`, 10, yOffset + 30);
      yOffset += 40;
    });

    doc.save("cart_details.pdf");
  };

  return (
    <div className="w-full mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-72 px-12">
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
              <div className="flex items-center ml-32">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-20 border border-gray-800"
                />
              </div>
              <div className="flex items-center ml-44">
                ${product.newPrice * product.quantity}
              </div>
            </li>
          ))}
        </div>
      </div>

      <div>
        <button onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default CartPage;
