import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../../assets/Search.svg";
import WishListLogo from "../../assets/heart small.svg";
import CartLogo from "../../assets/Cart.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const dispatch = useDispatch();
  const inputRef = useRef();
  const likes = useSelector((state) => state.like);
  const addToCart = useSelector((state) => state.cart);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-30 top-0 left-0 dark:border-gray-600">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200 ">
        <Link to={"/"}>
          <h2 className="text-dark">Exclusive</h2>
        </Link>
        <div className="flex md:order-2">
          <div className="flex space-x-7">
            <div className="flex items-center bg-[#F5F5F5] px-3 space-x-3 rounded-md">
              <input
                className=" bg-transparent outline-none w-60"
                type="text"
                placeholder="What are you looking for?"
              />
              <Button child={Search} alt="Search Icon" />
            </div>
            <div className="flex items-center space-x-7">
              <div className=" relative">
                <Button child={WishListLogo} alt="Heart Icon" width={32} />
                <p className="bg-[#afb0b1] text-xs rounded-full flex justify-center text-white absolute top-0 right-0 px-1">
                  {likes.length}
                </p>
              </div>
              <div className=" relative">
                <Link to={"/cart"}>
                  {" "}
                  <Button child={CartLogo} alt="Cart Icon" />
                </Link>
                <p
                  className="bg-[#afb0b1] text-xs rounded-full  flex justify-center text-white absolute 
top-0 right-0 px-1"
                >
                  {addToCart.length}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
