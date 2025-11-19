import { useState } from "react";
import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function NavBar({ choice, toggleLiked, itemsNumber }) {
  const [open, setOpen] = useState(false);

  // itemsNumber > 0 && window.alert("Item added to cart")

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
    <nav className="fixed top-5 left-0 w-full bg-zinc-50 shadow-sm shadow-green-100  z-30 mx-auto ">
      <div className="container flex items-center justify-between px-4 py-3 sm:py-3 sm:px-8  mx-auto ">
        <div className="font-bold text-lg">Cosmec</div>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <IoMdClose />
          ) : (
            <div className="relative">
              
              <CiMenuBurger />
             {itemsNumber > 0 &&  <div className="absolute -top-2 -right-3 bg-red-400 w-5 rounded-full h-5 px-2"></div>}
            </div>
          )}
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
          <button onClick={toggleLiked} title="Like button">
            {choice ? liked : Notliked}
          </button>

          <div className="relative">
            <li
              className="hover:text-green-500 cursor-pointer transition-colors duration-300"
              title="Cart"
            >
              <Link to="/cart">
                <AiOutlineShoppingCart className="w-5 h-5" />
              </Link>
            </li>
            <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -right-2.5 absolute px-1.5">
              {itemsNumber > 0 && itemsNumber}
            </div>
          </div>
          <li
            className="hover:text-green-600 cursor-pointer transition-colors duration-300"
            title="User Account"
          >
            <Link to="/auth">
              <FaUser className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <IoMdHome className="w-7 h-7" />
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <Link to="/about">About Us</Link>
            </li>
            <button onClick={toggleLiked}>{choice ? liked : Notliked}</button>


            <div className="relative">
              <li className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                <Link to="/cart">
                  {" "}
                  <AiOutlineShoppingCart className="w-6 h-6" />
                </Link>
              </li>
              <div className="text-white text-sm bg-red-500 rounded-full -top-2.5 -left-1.5 absolute px-1.5">
                {itemsNumber > 0 && itemsNumber}
              </div>
            </div>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">
              <Link to="/auth">
                <FaUser className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
