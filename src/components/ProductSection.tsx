import { motion } from "framer-motion";
import HeartIcon from "../Svg/HeartIcon";

interface ProductSectionProps {
  handleStartOver: () => void;
  selectedOption: string;
}

import { productResults } from "../data/ProductResults";

function ProductSection({
  handleStartOver,
  selectedOption,
}: ProductSectionProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-screen px-6 max-w-lg mx-auto"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200/50"
      >
        {/* Heading part */}
        <div className="text-center mb-6">
          <HeartIcon />
          <h2 className="text-3xl font-light text-stone-800 mt-4 mb-2">
            {
              productResults[selectedOption as keyof typeof productResults]
                .archetype
            }
          </h2>
          <p className="text-stone-500 text-sm">Your perfect match</p>
        </div>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative w-full max-w-[260px] mx-auto aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={
                productResults[selectedOption as keyof typeof productResults]
                  .imgUrl
              }
              alt={
                productResults[selectedOption as keyof typeof productResults]
                  .productName
              }
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-stone-600 border border-stone-200">
                {
                  productResults[selectedOption as keyof typeof productResults]
                    .fabricTag
                }
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-medium text-stone-800">
              {
                productResults[selectedOption as keyof typeof productResults]
                  .productName
              }
            </h3>
            <p className="text-stone-600 leading-relaxed max-w-sm mx-auto">
              {
                productResults[selectedOption as keyof typeof productResults]
                  .description
              }
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={handleStartOver}
            className="w-full py-3 bg-stone-700 text-white rounded-xl font-medium hover:bg-stone-800 transition-all duration-200 hover:shadow-md"
          >
            Start Over
          </button>
          <p className="text-xs text-stone-400 text-center">
            Discover what your body craves next
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductSection;
