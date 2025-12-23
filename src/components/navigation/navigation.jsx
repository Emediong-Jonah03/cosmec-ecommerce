import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose, IoMdHome } from "react-icons/io";
import {  FaHeart, FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar({ choice, toggleLiked, itemsNumber }) {
  const [open, setOpen] = useState(false);

  const likedIcon = (
    <FaHeart
      className={`w-5 h-5 cursor-pointer transition-colors ${
        choice ? "text-red-400" : "text-gray-500 hover:text-red-400"
      }`}
    />
  );

  return (
    <nav className="fixed top-5 left-0 w-full bg-zinc-50/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-green-700">
          Cosmec
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6">
          <li className="hover:text-green-600 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600 transition">
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-4">
          <button onClick={toggleLiked} aria-label="Like">
            {likedIcon}
          </button>

          <div className="relative">
            <Link to="/cart">
              <AiOutlineShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 transition" />
            </Link>
            {itemsNumber > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
              >
                {itemsNumber}
              </motion.div>
            )}
          </div>

          <Link to="/signup">
            <FaUser className="w-6 h-6 text-gray-700 hover:text-green-600 transition" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IoMdClose /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-zinc-50 px-6 pb-4 flex flex-col gap-4 shadow-md"
          >
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-green-600 transition"
              onClick={() => setOpen(false)}
            >
              <IoMdHome /> Home
            </Link>
            <Link
              to="/about"
              className="hover:text-green-600 transition"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={toggleLiked}
              className="flex items-center gap-2 text-gray-700 hover:text-red-400 transition"
            >
              {likedIcon} Like
            </button>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-green-600 transition flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
              {itemsNumber > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                >
                  {itemsNumber}
                </motion.div>
              )}
              Cart
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setOpen(false)}
            >
              <FaUser /> Account
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
