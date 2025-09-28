import cream3 from "../assets/cream3.jpg";
import cream2 from "../assets/cream2.jpg";
import cream4 from "../assets/cream4.jpg";
import { TbShoppingCartOff } from "react-icons/tb";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, img: cream3, name: "Cream 3", price: 10, qty: 1 },
    { id: 2, img: cream2, name: "Cream 2", price: 12, qty: 1 },
    { id: 3, img: cream4, name: "Cream 4", price: 8, qty: 1 },
  ]);

  function reduceQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const itemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const shipping = subTotal > 30 ? 0 : 5;
  const taxes = parseFloat((subTotal * 0.05).toFixed(2));
  const discount = subTotal > 300 ? (subTotal * 0.03).toFixed(2) : 0;
  const total = subTotal + shipping + taxes - discount;

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col lg:flex-row gap-8">
      {/* Products Section */}
      {cart.length == 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500 w-full">
          <TbShoppingCartOff className="w-full" />

          <p className="text-lg font-medium">Your cart is empty</p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <a href="index.html">Start Shopping</a>
          </button>
        </div>
      ) : (
        <section className="bg-white rounded-xl shadow-md flex-1 p-6">
          <h2 className="text-xl font-semibold mb-6 border-b pb-3">
            Shopping Cart
          </h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg shadow-sm flex items-center justify-between px-3 py-5 sm:py-4 flex-col sm:flex-row"
              >
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white px-1.5 bg-red-500 hover:opacity-85 cursor-pointer"
                  >
                    remove
                  </button>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <p className="font-medium text-gray-800">{item.name}</p>
                </div>

                {/* Right Side: Price + Qty + Subtotal */}
                <div className="flex items-center gap-8">
                  <div className="flex-col">
                    <p className="font-semibold">Price</p>
                    <p className="text-gray-700 font-mono">${item.price}</p>
                  </div>

                  <div className="flex items-center flex-col gap-3 mt-2.5 sm:mt-0">
                    <p className="font-semibold">Quantity</p>
                    <div>
                      <button
                        onClick={() => reduceQty(item.id)}
                        className="px-3 py-1 bg-red-400 rounded-lg hover:text-white transition-colors duration-300 font-mono mr-2.5"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 rounded-lg hover:text-white transition-colors duration-300 bg-green-600 font-mono ml-2.5"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold">Amount</p>
                    <p className="font-mono text-gray-800">
                      ${item.price * item.qty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Summary Section */}
      <section className="bg-white rounded-xl shadow-md w-full lg:w-96 p-6">
        <h2 className="text-xl font-semibold mb-6 border-b pb-3">
          Order Summary
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <p>Items</p>
            <p>{itemsCount}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Subtotal</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Taxes (5%)</p>
            <p>${taxes}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Discount</p>
            <p>${discount}</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 w-full py-3 text-white font-semibold rounded-lg transition">
          Proceed to Checkout
        </button>
      </section>
    </main>
  );
}

export default Cart;
