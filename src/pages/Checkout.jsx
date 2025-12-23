import { FaLock } from "react-icons/fa";
import { useState } from "react";

import Header from "../components/header";
import NavBar from "../components/navigation/navigation";
import Footer from "../components/footer";

export default function Checkout({
  shipping,
  subTotal,
  total,
  itemsNumber,
  taxes,
}) {
  const [valid, setValid] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 px-2">
      <Header />
      <NavBar />
      <div className="max-w-6xl pt-12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT — CUSTOMER DETAILS */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Checkout</h2>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="font-medium mb-3 text-gray-700">
              Contact Information
            </h3>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Shipping */}
          <div className="mb-8">
            <h3 className="font-medium mb-3 text-gray-700">Shipping Address</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="First name" />
              <input className="input" placeholder="Last name" />
            </div>

            <input className="input mt-4" placeholder="Street address" />
            <input className="input mt-4" placeholder="City" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input className="input" placeholder="State" />
              <input className="input" placeholder="Postal code" />
            </div>
          </div>

          {/* Payment Placeholder */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Payment</h3>
            <div className="border border-dashed rounded-xl p-6 text-center text-gray-400">
              Payment method will appear here
            </div>
          </div>
        </section>

        {/* RIGHT — ORDER SUMMARY */}
        <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit">
          <h3 className="text-lg font-semibold mb-6">Order Summary</h3>

          {/* Product */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">{}</p>
              <p className="text-sm text-gray-500">Qty: {itemsNumber}</p>
            </div>
            <p className="font-semibold">{}</p>
          </div>

          <div className="border-t my-4"></div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${taxes}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {valid ? (
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
              Place Order
            </button>
          ) : (
            <button className="mt-6 w-full bg-green-600 opacity-70 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
              <FaLock />
              Place Order
            </button>
          )}

          <p className="text-xs text-center text-gray-400 mt-4">
            Secure checkout · No real payment
          </p>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
