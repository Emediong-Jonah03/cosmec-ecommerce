import { FaWallet } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-white shadow-2xl flex flex-col sm:flex-row justify-around items-center mt-5 pt-2 gap-4 sm:gap-0 w-full">
      <div>
        <p className="font-bold text-base flex gap-2"><FaWallet />Flexible payment</p>

        <p className="text-base text-stone-700">Multiple sucure payment options</p>
      </div>
      <div>
        <p className="font-bold text-base flex gap-2"><FaShippingFast />Free shipping</p>
        <p className="text-base text-stone-700">Free shipping for order above $30</p>
      </div>
      <div>
        <p className="font-bold text-base flex gap-2"><IoIosTime />24/7 support</p>
        <p className="text-base text-stone-700">We support onlline all day</p>
      </div>
    </footer>
  );
}

export default Footer
