export type Option = "grounding" | "softness" | "energy" | "freedom";

export type AnimationState = "entering" | "visible" | "exiting" | "hidden";

export interface ProductResult {
  archetype: string;
  productName: string;
  description: string;
  fabricTag: string;
  bgColor: string;
  imgUrl: string;
}
