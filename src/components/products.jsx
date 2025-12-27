import { FaStar, FaCartPlus } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { motion } from "framer-motion";

function Product({
  discount,
  rating,
  reviewCount = 0,
  name,
  price,
  product_type,
  image_link,
  addToCart,
  onBuyNow,
  stock = null, // "low", "in_stock", "out_of_stock", or null
  hasFreeShipping = false,
  variants = [], // Array of color variants if available
}) {
  // Calculate original price if there's a discount
  const originalPrice = discount 
    ? (price / (1 - discount / 100)).toFixed(2)
    : null;

  // Stock badge configuration
  const stockConfig = {
    low: { text: "Only few left", bg: "bg-orange-500", textColor: "text-white" },
    in_stock: { text: "In Stock", bg: "bg-green-600", textColor: "text-white" },
    out_of_stock: { text: "Out of Stock", bg: "bg-gray-500", textColor: "text-white" },
  };

  return (
    <motion.article
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5 }}
      role="group"
      aria-label={`${name} product card`}
    >
      {/* Image */}
      <motion.div
        className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-100"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image_link}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
            e.target.alt = "Product image not available";
          }}
        />

        {/* Badges Container */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discount && (
            <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
              {discount}% OFF
            </div>
          )}
          
          {stock && stockConfig[stock] && (
            <div className={`${stockConfig[stock].bg} ${stockConfig[stock].textColor} text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
              {stockConfig[stock].text}
            </div>
          )}
        </div>

        {/* Free Shipping Badge */}
        {hasFreeShipping && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Free Shipping
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-600 uppercase tracking-wide font-medium">
            {product_type}
          </p>
          <div className="flex items-center gap-1.5">
            <FaStar className="text-amber-400 text-base" aria-hidden="true" />
            <span className="text-gray-900 text-sm font-semibold">
              {rating}
            </span>
            {reviewCount > 0 && (
              <span className="text-gray-500 text-sm">
                ({reviewCount.toLocaleString()})
              </span>
            )}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold leading-snug text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>

        {/* Color Variants Preview */}
        {variants.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex gap-1.5">
              {variants.slice(0, 5).map((color, idx) => (
                <div
                  key={idx}
                  className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                  aria-label={`Color variant ${color}`}
                />
              ))}
              {variants.length > 5 && (
                <span className="text-xs text-gray-500 self-center">
                  +{variants.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${typeof price === 'number' ? price.toFixed(2) : price}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          {/* Buy Now Button */}
          <motion.button
            whileHover={{ scale: stock === "out_of_stock" ? 1 : 1.03 }}
            whileTap={{ scale: stock === "out_of_stock" ? 1 : 0.97 }}
            onClick={onBuyNow}
            disabled={stock === "out_of_stock"}
            className={`flex-1 ${
              stock === "out_of_stock"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500"
            } transition rounded-full py-2.5 font-semibold flex items-center justify-center gap-2 text-gray-900`}
            aria-label={`Buy ${name} now`}
          >
            <BiPurchaseTagAlt className="text-lg" aria-hidden="true" />
            {stock === "out_of_stock" ? "Out of Stock" : "Buy Now"}
          </motion.button>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: stock === "out_of_stock" ? 1 : 1.1 }}
            whileTap={{ scale: stock === "out_of_stock" ? 1 : 0.95 }}
            onClick={addToCart}
            disabled={stock === "out_of_stock"}
            className={`w-12 h-12 border-2 ${
              stock === "out_of_stock"
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-gray-200 hover:border-green-400 hover:bg-green-50"
            } rounded-full flex items-center justify-center transition`}
            aria-label={`Add ${name} to cart`}
          >
            <FaCartPlus className="text-lg" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default Product;