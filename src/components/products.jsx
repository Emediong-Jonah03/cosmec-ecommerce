import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";

function Product({
  discount,
  rating,
  productName,
  oldPrice,
  price,
  category,
  img,
  addToCart,
}) {
  return (
    <div className=" bg-gradient-to-b from-green-400 to-zinc-50 px-5 py-4 shadow-lg rounded-lg hover:-translate-y-4 transition-all hover:bg-zinc-100">
      <div className="relative w-auto container h-60 max-h-auto sm:h-72">
        <img src={img} alt="" className="w-full sm:w-65 h-full rounded-3xl" />
        <div className="absolute top-5 left-5 bg-green-700 px-2 rounded-xl text-white sm:text-sm text-xl">
          {discount}% Off
        </div>
      </div>
      <div className="py-3 w-auto leading-loose px-4">
        <div className="flex justify-between items-center mx-7">
          <p>
            {category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : ""}
          </p>
          <p className="text-amber-300 flex items-center gap-1.5">
            {" "}
            <FaStar />
            <span className="text-black">{rating}</span>
          </p>
        </div>
        <div className="font-semibold flex items-center gap-2 justify-between">
          <p className="text-[1.3rem]">
            {productName.charAt(0).toUpperCase() + productName.slice(1)}
          </p>

          <div className="flex items-center gap-2.5">
            <p className="text-orange-400 text-base font-semibold">${price}</p>
            <p className="text-stone-600  text-base font-semibold">
              $<del>{oldPrice}</del>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-green-700 px-3 text-white rounded-full hover:opacity-85 flex items-center gap-2">
            <BiPurchaseTagAlt />
            Purchase
          </button>

          <button
            className="border-green-700 border-2 px-3 rounded-lg hover:bg-green-500 hover:text-white hover:opacity-85 transition-colors duration-300 flex items-center gap-2 justify-between "
            onClick={addToCart}
          >
            <FaCartPlus />
             Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
