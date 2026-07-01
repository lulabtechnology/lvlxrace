/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020815",
        navy: "#03183b",
        cyanx: "#19c8ff",
        cyanDeep: "#0476ff",
        ice: "#eaf8ff"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(25, 200, 255, 0.38)",
        card: "0 22px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
