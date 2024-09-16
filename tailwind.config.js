/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./constants.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'monogram-bezier': 'cubic-bezier(0.5, 0, 0, 1)',
      },
    },
    screens: {
      md: "768px",
      lg: "1020px",
    },
    colors: {
      "orange-bg": "#FBA127",
      "orange-text": "#7D520A",
      "blue-bg": "#6475A9",
      "blue-text": "#191919",
      "red-bg": "#6F191A",
      "red-text": "#DA612D",
      "green-bg": "#605A26",
      "green-text": "#B8C468",
      "tan-bg": "#F0E0B5",
      "tan-text": "#191919",
      "brown-bg": "#3D271E",
      "brown-text": "#F0E0B5",
    },
    fontFamily: {
      brunswick: ["var(--font-brunswick)"],
      alpina: ["var(--font-alpina)"],
      "alpina-italic": ["var(--font-alpina-italic)"],
    },
  },
  plugins: [],
};
