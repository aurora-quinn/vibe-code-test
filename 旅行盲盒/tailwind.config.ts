/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. 这里是给颜色起名字
      colors: {
        "aurora-green": "#4ade80",
      },
      // 2. 这里是定义“怎么动”
      keyframes: {
        "mesh-move": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "33%": { transform: "translate(10%, -10%) scale(1.2)", opacity: "0.6" },
          "66%": { transform: "translate(-5%, 5%) scale(0.9)", opacity: "0.4" },
        },
        "breath": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        }
      },
      // 3. 这里是把动作分配给名字
      animation: {
        "mesh-slow": "mesh-move 10s ease-in-out infinite",
        "breath": "breath 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};