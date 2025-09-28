import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";

function Product(prop) {
  const [cartItem, setCartItem] = useState(()=> {
   try { 
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return [];
  }
  });

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])

  function addToCart(productToAdd) {
    setCartItem(prevItem => {
      const existingItem = prevItem.find(item => item.id === productToAdd)
      if (existingItem ) {
        return prevItem.map(item => item.id === productToAdd ? {...item, quantity: item.quantity + 1} : item)
      } else {
        return [...prevItem, {...productToAdd, quantity: 1}]
      }
    });
  }
/* const cartItems = cart.reduce((accumulator, item)=> {
  return accumulator + item.quantity
 }, 0)*/

 //console.log(cartItems)
 
  return (
    <div>
      <div className="relative w-auto h-72">
        <img src={prop.img} alt="" className="w-full h-full rounded-3xl" />
        <div className="absolute top-5 left-5 bg-green-800 px-2 rounded-xl text-white sm:text-sm text-xl">
          {prop.discount}% Off
        </div>
      </div>
      <div className="py-3 w-auto leading-loose bg-white px-4">
        <div className="flex justify-between items-center mx-7">
          <p>
            {prop.category
              ? prop.category.charAt(0).toUpperCase() + prop.category.slice(1)
              : ""}
          </p>
          <p className="text-amber-300 flex">
            {" "}
            <FaStar />
            <span className="text-black">{prop.rating}</span>
          </p>
        </div>
        <div className="font-semibold">
          <p className="text-[1.3rem]">
            {prop.productName.charAt(0).toUpperCase() +
              prop.productName.slice(1)}
          </p>
        </div>
        <div className="flex items-start">
          <p className="text-orange-400 mr-6 text-base font-semibold">
            ${prop.price}
          </p>
          <p className="text-stone-600  text-base font-semibold">
            $<del>{prop.oldPrice}</del>
          </p>
        </div>

        <div className="flex justify-evenly items-center flex-wrap gap-4">
          <div>
            <button className="bg-green-700 px-3 text-white rounded-full hover:opacity-85 flex items-center gap-2">
              <BiPurchaseTagAlt />
              Purchase
            </button>
          </div>
          <div>
            <button
              className="border-green-700 border-solid flex items-center gap-2 border-2 px-2 rounded-full hover:bg-green-500 hover:text-white hover:opacity-85 transition-colors duration-300"
              onClick={() => addToCart(prop)} 
            >
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
