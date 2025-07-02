import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { AnimationState, Option } from "../types/QuizTypes";
import ProductSection from "./ProductSection";
import QuizSection from "./QuizSection";

function QuizContainer() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [welcomeAnimation, setWelcomeAnimation] =
    useState<AnimationState>("hidden");

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
        <ProductSection
          handleStartOver={handleStartOver}
          selectedOption={selectedOption}
        />
      ) : (
        <motion.div
          key="quiz"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen px-6 py-8 max-w-lg mx-auto"
        >
          {/* quiz div */}
          <QuizSection
            handleOptionSelect={handleOptionSelect}
            showWelcomeBack={showWelcomeBack}
            welcomeAnimation={welcomeAnimation}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default QuizContainer;
