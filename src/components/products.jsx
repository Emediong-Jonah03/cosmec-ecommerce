import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { motion } from "framer-motion";

function Product({
  discount,
  rating,
  name,
  price,
  product_type,
  image_link,
  addToCart,
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <motion.div
        className="relative h-64 overflow-hidden rounded-t-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image_link}
          alt={name}
          className="w-full h-full object-cover"
        />

        {discount && (
          <div className="absolute top-4 left-4 bg-green-400/90 text-black text-sm font-semibold px-3 py-1 rounded-full">
            {discount}% off
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <p className="text-black/50 uppercase tracking-wide">{product_type}</p>
          <div className="flex items-center gap-1 text-amber-400">
            <FaStar />
            <span className="text-black text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold leading-snug">{name}</h3>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-black">${price}</span>
        
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 bg-green-400 hover:bg-green-300 transition rounded-full py-2 font-semibold flex items-center justify-center gap-2"
          >
            <BiPurchaseTagAlt />
            Buy now
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={addToCart}
            className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-zinc-50 transition"
          >
            <FaCartPlus />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
