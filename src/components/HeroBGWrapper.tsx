import React from "react";
function HeroBGWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-amber-50/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/upscaledGradient.png')] bg-cover bg-center opacity-70 "></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default HeroBGWrapper;
