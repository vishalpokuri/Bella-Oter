import HeartIconRed from "../Svg/HeartIconRed";

function WelcomeBlimp({ welcomeAnimation }: { welcomeAnimation: string }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 text-center bg-gradient-to-r from-rose-100 via-stone-50 to-amber-100 backdrop-blur-sm p-4 z-50 border-b border-stone-200/50 shadow-sm transition-transform duration-500 ease-in-out ${
        welcomeAnimation === "visible" ? "translate-y-0" : "-translate-y-full"
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
  );
}

export default WelcomeBlimp;
