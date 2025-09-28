import { useState } from "react";
import { Link } from "react-dom"

import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function NavBar({ choice, toggleLiked, toggleSearch }) {
  const [open, setOpen] = useState(false);

  const liked = (
    <li>
      <FaHeart className="w-7 h-7 text-red-400 cursor-pointer" />
    </li>
  );
  const Notliked = (
    <li>
      <FaHeart className="w-7 h-7 cursor-pointer" />
    </li>
  );

  return (
    <nav className="fixed top-5 left-0 w-full bg-white shadow z-30 mx-auto ">
      <div className="container flex items-center justify-between px-4 py-3 sm:py-3 sm:px-8  mx-auto ">
        <div className="font-bold text-lg">Cosmec</div>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <CiMenuBurger />
        </button>
        <ul className="hidden sm:flex items-center gap-6">
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            <a href="index.html">Home</a>
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            Shop
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            Skin Care
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            Hair Care
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            About Us
          </li>
        </ul>
        <ul className="hidden sm:flex items-center gap-6">
          <button onClick={toggleLiked} title="Like button">{choice ? liked : Notliked}</button>

          <li
            className="hover:text-green-500 cursor-pointer transition-colors duration-300"
            onClick={toggleSearch}
            title="Search bar"
          >
            <FaSearch className="w-5 h-5" />
          </li>
          <div className="relative">
            <li className="hover:text-green-500 cursor-pointer transition-colors duration-300"
                  title="Cart">
              <a href="cart.html">
                <AiOutlineShoppingCart className="w-5 h-5" />
              </a>
            </li>
            <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -right-2 absolute px-1.5">
              1
            </div>
          </div>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"
              title="User Account">
            <FaUser className="w-6 h-6" />
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <IoMdHome className="w-7 h-7" />
             <link rel="stylesheet" href="" />
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <FaShoppingBag className="w-7 h-7" />
              Shop
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              Skin Care
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              Hair Care
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              About Us
            </li>
            <button onClick={toggleLiked}>{choice ? liked : Notliked}</button>

            <li
              className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"
              onClick={toggleSearch}
            >
              <FaSearch className="w-7 h-7" />
            </li>

            <div className="relative">
              <li className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                <a href="cart.html">
                  <AiOutlineShoppingCart className="w-7 h-7" />
                </a>
              </li>
              <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -left-1.5 absolute px-1.5">
                1
              </div>
            </div>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <FaUser className="w-7 h-7" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
