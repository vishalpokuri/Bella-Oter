import { motion } from "framer-motion";
import HeartIcon from "../Svg/HeartIcon";
import WelcomeBlimp from "./WelcomeBlimp";
import type { AnimationState, Option } from "../types/QuizTypes";
import { imageMap, descriptions } from "../data/ProductResults";

interface QuizSection {
  showWelcomeBack: boolean;
  welcomeAnimation: AnimationState;
  handleOptionSelect: (value: Option) => void;
}

function QuizSection({
  showWelcomeBack,
  welcomeAnimation,
  handleOptionSelect,
}: QuizSection) {
  return (
    <motion.div
      key="quiz"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-8 max-w-lg mx-auto"
    >
      {/* Welcome back notification */}
      {showWelcomeBack && <WelcomeBlimp welcomeAnimation={welcomeAnimation} />}

      {/* quiz div */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
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
  );
}

export default QuizSection;
