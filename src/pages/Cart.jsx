import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  itemsNumber,
  shipping,
  taxes,
  subTotal,
  total,
  discount,
  clearCart,
}) {
  return (
    <main className="bg-zinc-50 min-h-screen px-4 sm:px-8 lg:px-16 pt-10 flex flex-col lg:flex-row gap-8">
      {/* Products Section */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 w-full text-gray-400">
          <TbShoppingCartOff className="text-6xl mb-4 opacity-40" />
          <p className="text-xl font-semibold mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <section className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-bold border-b pb-3">Shopping Cart</h2>

          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-4 gap-4 hover:shadow-lg transition-shadow"
                >
                  {/* Left: Image + Name + Remove */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </div>

                  {/* Middle: Quantity */}
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-red-200 text-red-700 rounded-full hover:bg-red-400 hover:text-white transition"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 rounded-full">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-green-200 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Right: Price + Remove */}
                  <div className="flex flex-col items-end gap-2 mt-3 sm:mt-0">
                    <p className="font-semibold text-gray-800">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={clearCart}
            className="self-start mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Clear Cart
          </button>
        </section>
      )}

      {/* Summary Section */}
      {cart.length > 0 && (
        <section className="bg-white rounded-xl shadow-md w-full lg:w-96 p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold border-b pb-3">Order Summary</h2>

          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Items</span>
              <span>{itemsNumber}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Taxes (5%)</span>
              <span>${taxes}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>${discount}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <Link to="/checkout" className="mt-6 text-center bg-green-500 hover:bg-green-600 w-full py-3 text-white font-semibold rounded-lg transition">
            Proceed to Checkout
          </Link>
        </section>
      )}
    </main>
  );
}
