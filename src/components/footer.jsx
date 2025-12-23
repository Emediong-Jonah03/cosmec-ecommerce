import { FaWallet, FaShippingFast, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-100 to-zinc-50 pt-12 pb-6 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-around">
          <div className="flex items-center gap-3 bg-white rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition">
            <FaWallet className="text-green-600 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Flexible Payment</p>
              <p className="text-sm text-gray-500">Multiple secure payment options</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition">
            <FaShippingFast className="text-green-600 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Free Shipping</p>
              <p className="text-sm text-gray-500">Free shipping for orders above $30</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition">
            <IoIosTime className="text-green-600 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">24/7 Support</p>
              <p className="text-sm text-gray-500">Online support all day</p>
            </div>
          </div>
        </div>

        {/* Newsletter + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-2/3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-lg transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-600 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-green-600 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-green-600 transition"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EmeTech Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
