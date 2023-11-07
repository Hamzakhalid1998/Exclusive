import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../../assets/Search.svg";
import WishListLogo from "../../assets/heart small.svg";
import CartLogo from "../../assets/Cart.svg";
import "../../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const likes = useSelector((state) => state.like);
  const addToCart = useSelector((state) => state.cart);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 dark:border-gray-600 border-b border-gray-200 ">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto py-4  ">
        <Link to={"/"}>
          <h2 className="text-black font-bold text-lg pt-2">Exclusive</h2>
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
                <p className="bg-[#DB4444] text-xs rounded-full flex justify-center text-white absolute top-0 right-0 px-1">
                  {likes.length}
                </p>
              </div>
              <div className=" relative">
                <Link to={"/cart"}>
                  {" "}
                  <Button child={CartLogo} alt="Cart Icon" />
                </Link>
                <p
                  className="bg-[#DB4444] text-xs rounded-full  flex justify-center text-white absolute 
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
              <NavLink
                to={"/"}
                className="block pt-2  text-gray-900  hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>

            {/* Products Link */}
            <li>
              <NavLink
                to={"/products"}
                className="block pt-2  text-gray-900  hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
