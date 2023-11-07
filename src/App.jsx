import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/Products",
    element: (
      <div>
        <Navbar />
        <Product />
      </div>
    ),
  },
  {
    path: "/Cart",
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
