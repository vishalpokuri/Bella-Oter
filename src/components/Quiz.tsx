import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeartIconRed from "../Svg/HeartIconRed";
import HeartIcon from "../Svg/HeartIcon";

type Option = "grounding" | "softness" | "energy" | "freedom";

interface ProductResult {
  archetype: string;
  productName: string;
  description: string;
  fabricTag: string;
  bgColor: string;
  imgUrl: string;
}

const productResults: Record<Option, ProductResult> = {
  grounding: {
    archetype: "The Rooted One",
    productName: "Foundation Bodysuit",
    imgUrl: "products/bodysuit.png",
    description: "A grounding embrace that connects you to your center.",
    fabricTag: "Organic Cotton Blend",
    bgColor: "bg-stone-100",
  },
  softness: {
    archetype: "The Gentle Soul",
    productName: "Cotton Bathrobe",
    imgUrl: "products/bathrobe.png",
    description: "Whisper-soft comfort that nurtures your tender moments.",
    fabricTag: "TENCEL™ Soft",
    bgColor: "bg-rose-50",
  },
  energy: {
    archetype: "The Vibrant Spirit",
    productName: "Flow Movement Bra",
    imgUrl: "products/bra.png",
    description: "Dynamic support that moves with your inner fire.",
    fabricTag: "Recycled Performance Mesh",
    bgColor: "bg-amber-50",
  },
  freedom: {
    archetype: "The Unbound",
    productName: "Liberation Slip Dress",
    imgUrl: "products/slipdress.png",
    description: "Effortless elegance that lets your spirit soar.",
    fabricTag: "Bamboo Silk",
    bgColor: "bg-sky-50",
  },
};

function Quiz() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [welcomeAnimation, setWelcomeAnimation] = useState<
    "entering" | "visible" | "exiting" | "hidden"
  >("hidden");

  useEffect(() => {
    const saved = localStorage.getItem("bellaSelection");
    if (saved) {
      setShowWelcomeBack(true);
      setWelcomeAnimation("entering");

      // After animation completes, set to visible
      setTimeout(() => {
        setWelcomeAnimation("visible");
      }, 500);

      // After 3 seconds of being visible, start exit animation
      setTimeout(() => {
        setWelcomeAnimation("exiting");
      }, 3000);

      // After exit animation completes, hide completely
      setTimeout(() => {
        setWelcomeAnimation("hidden");
        setShowWelcomeBack(false);
      }, 4000);
    }
  }, []);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    localStorage.setItem("bellaSelection", option);
  };

  const handleStartOver = () => {
    setSelectedOption(null);
    setShowWelcomeBack(false);
  };

  return (
    <AnimatePresence mode="wait">
      {selectedOption ? (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen px-6 py-8 max-w-lg mx-auto"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200/50"
          >
            {/* Heading part */}
            <div className="text-center mb-6">
              <HeartIcon />
              <h2 className="text-3xl font-light text-stone-800 mt-4 mb-2">
                {productResults[selectedOption].archetype}
              </h2>
              <p className="text-stone-500 text-sm">Your perfect match</p>
            </div>

            <div className="space-y-6">
              {/* Product Image */}
              <div className="relative w-full max-w-[260px] mx-auto aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={productResults[selectedOption].imgUrl}
                  alt={productResults[selectedOption].productName}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-stone-600 border border-stone-200">
                    {productResults[selectedOption].fabricTag}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-medium text-stone-800">
                  {productResults[selectedOption].productName}
                </h3>
                <p className="text-stone-600 leading-relaxed max-w-sm mx-auto">
                  {productResults[selectedOption].description}
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
      ) : (
        <motion.div
          key="quiz"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen px-6 py-8 max-w-lg mx-auto"
        >
          {/* Welcome back notification */}
          {showWelcomeBack && (
            <div
              className={`fixed top-0 left-0 right-0 text-center bg-gradient-to-r from-rose-100 via-stone-50 to-amber-100 backdrop-blur-sm p-4 z-50 border-b border-stone-200/50 shadow-sm transition-transform duration-500 ease-in-out ${
                welcomeAnimation === "visible"
                  ? "translate-y-0"
                  : "-translate-y-full"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <HeartIconRed />
                <p className="text-stone-700 font-medium">
                  Welcome back to your inner journey
                </p>
                <span className="text-lg">✨</span>
              </div>
            </div>
          )}

          {/* quiz div */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50"
          >
            <div className="text-center mb-8">
              <HeartIcon />
              <h1 className="text-[28px] leading-7 font-light text-stone-800 mt-4 mb-2">
                What does your body
              </h1>
              <h1 className="text-[28px] leading-7 font-light text-stone-800 italic">
                crave today?
              </h1>
              <p className="text-stone-500 mt-4 leading-relaxed text-base">
                Take a moment to listen within <br /> Choose what calls to you
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(["grounding", "softness", "energy", "freedom"] as Option[]).map(
                (option) => {
                  const imageMap = {
                    grounding: "/tones/grounding.png",
                    softness: "/tones/softness.png",
                    energy: "/tones/energy.png",
                    freedom: "/tones/freedom.png",
                  };

                  const descriptions = {
                    grounding: "Stability and connection \n to your center",
                    softness: "Gentle comfort and nurturing touch",
                    energy: "Vitality and dynamic movement",
                    freedom: "Liberation and\neffortless flow",
                  };

                  return (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="relative aspect-square rounded-2xl overflow-hidden border-[2px] border-stone-300 hover:border-stone-400 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-lg transform"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageMap[option]})` }}
                      />
                      {/* Dark Mask gradient  */}
                      <div className="absolute inset-0 bg-gradient-to-t from-0% via-45% to-100% from-black/80 via-black/20 to-transparent" />
                      {/* Hover overlay animation */}
                      <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300" />

                      <div className="relative h-full flex flex-col justify-end p-3">
                        <h3 className="text-white font-medium text-lg capitalize drop-shadow-lg">
                          {option}
                        </h3>
                        <p className="text-[#f5f4f0]/90 text-xs mt-1 drop-shadow-md leading-relaxed mx-auto whitespace-pre-wrap">
                          {descriptions[option]}
                        </p>
                      </div>

                      <div className="absolute top-3 left-3 w-3 h-3 rounded-full border-2 border-white/70 group-hover:border-white group-hover:bg-white/20 transition-all duration-300"></div>
                    </button>
                  );
                }
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Quiz;
