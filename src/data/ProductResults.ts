import type { Option, ProductResult } from "../types/QuizTypes";

export const productResults: Record<Option, ProductResult> = {
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

export const imageMap = {
  grounding: "/tones/grounding.png",
  softness: "/tones/softness.png",
  energy: "/tones/energy.png",
  freedom: "/tones/freedom.png",
};

export const descriptions = {
  grounding: "Stability and deep connection",
  softness: "Gentle comfort and nurturing touch",
  energy: "Vitality and dynamic movement",
  freedom: "Liberation and\neffortless flow",
};
