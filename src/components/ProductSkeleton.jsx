import { motion } from "framer-motion";

const shimmer = {
  animate: {
    x: [0, 300],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 1.2, ease: "easeInOut" },
    },
  },
};

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image */}
      <div className="relative h-64 bg-zinc-100 rounded-t-2xl overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 bg-green-100 opacity-50"
          variants={shimmer}
          animate="animate"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="h-4 bg-zinc-100 rounded w-1/3"></div>
        <div className="h-6 bg-zinc-100 rounded w-3/4"></div>
        <div className="h-6 bg-zinc-100 rounded w-1/2"></div>
        <div className="flex gap-3 pt-2">
          <div className="flex-1 h-10 bg-zinc-100 rounded-full"></div>
          <div className="w-12 h-12 bg-zinc-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
