import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from "react-router-dom";

function Cart({
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
    <main className="bg-gray-100 min-h-screen sm:pt-5 pt-23  px-4 flex flex-col lg:flex-row gap-8">
      {/* Products Section */}
      {cart.length == 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500 w-full">
          <TbShoppingCartOff className="w-full" />

          <p className="text-lg font-medium">Your cart is empty</p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Link to="/">Start Shopping</Link>
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
                key={cart.indexOf(item)}
                className="bg-gradient-to-r from-slate-50 to-green-200  rounded-lg shadow-sm flex items-center justify-between px-3 py-5 sm:py-4 flex-col sm:flex-row "
              >
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white px-1.5 text-sm py-1 bg-red-500 hover:opacity-85 cursor-pointer rounded-md"
                  >
                    remove
                  </button>
                  <img
                    src={item.img}
                    alt={item.productName}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <p className="font-medium text-gray-800">
                    {item.productName}
                  </p>
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
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-red-400 rounded-lg hover:text-white transition-colors duration-300 font-mono mr-2.5"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.quantity}</span>
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
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center align-center mt-2">
              <button
                onClick={clearCart}
                className="bg-red-600 text-bold px-2 rounded-lg text-white py-2"
              >
                Clear Cart
              </button>
            </div>
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
            <p>{itemsNumber}</p>
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
