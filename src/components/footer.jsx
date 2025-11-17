import { FaWallet } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-50 shadow-lg shadow-green-700 flex flex-col sm:flex-row justify-around items-center mt-5 pt-4 gap-4 sm:gap-0 w-full">
      <div>
        <p className="font-bold text-base flex gap-2"><FaWallet className="text-green-600" />Flexible payment</p>

        <p className="text-base text-stone-700">Multiple sucure payment options</p>
      </div>
      <div>
        <p className="font-bold text-base flex gap-2"><FaShippingFast className="text-green-600" />Free shipping</p>
        <p className="text-base text-stone-700">Free shipping for order above $30</p>
      </div>
      <div>
        <p className="font-bold text-base flex gap-2"><IoIosTime className="text-green-600" />24/7 support</p>
        <p className="text-base text-stone-700">We support onlline all day</p>
      </div>
    </footer>
  );
}

export default Footer
