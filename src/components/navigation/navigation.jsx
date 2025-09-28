import { useState } from "react";
import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function NavBar({ choice, toggleLiked, toggleSearch}) {
  const [open, setOpen] = useState(false);

  const liked = (
    <li>
      <FaHeart className="w-5 h-5 text-red-400 cursor-pointer" />
    </li>
  );
  const Notliked = (
    <li>
      <FaHeart className="w-5 h-5 cursor-pointer" />
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
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">
            <Link to="/about">About Us</Link>
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
              <Link to="/cart">
                <AiOutlineShoppingCart className="w-5 h-5" />
              </Link>
            </li>
            <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -right-2.5 absolute px-1.5">
              1
            </div>
          </div>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"
              title="User Account">
                <Link to="/auth"><FaUser className="w-5 h-5" /></Link>            
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <IoMdHome className="w-7 h-7" />
             <Link to="/home">Home</Link>
            </li>
           
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
             <Link to="/about">About Us</Link>
            </li>
            <button onClick={toggleLiked}>{choice ? liked : Notliked}</button>

            <li
              className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"
              onClick={toggleSearch}
            >
              <FaSearch className="w-6 h-6" />
            </li>

            <div className="relative">
              <li className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                <Link to="/cart"> <AiOutlineShoppingCart className="w-6 h-6" /></Link>
              </li>
              <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -left-1.5 absolute px-1.5">
                1
              </div>
            </div>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <Link to="/auth"><FaUser className="w-6 h-6" /></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
