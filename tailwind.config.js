export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05040c",
        surface: "rgba(255,255,255,0.08)",
        gold: "#f2c87d",
        goldSoft: "#f7d6a4",
        pinkSoft: "#f7c9d9",
        warm: "#ffaf57",
        beige: "#e6d4c1",
      },
      boxShadow: {
        luxe: "0 40px 120px rgba(0,0,0,0.35)",
        glow: "0 0 32px rgba(242,200,125,0.3)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(242,200,125,0.12), transparent 24%), radial-gradient(circle at 84% 10%, rgba(255, 147, 203, 0.12), transparent 20%)",
      },
      fontFamily: {
        sans: ["Tajawal", "ui-sans-serif", "system-ui"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
