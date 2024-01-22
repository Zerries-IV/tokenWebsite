import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slideIn": "1s ease-in slideIn",
        "scaleIn": "1s ease-in scaleIn",
        "popUp": "1s ease-in popUp",
        "slideInAlt": "1s ease-in slideInAlt",
        "slideUp": "1s ease-in slideUp",
      },
      backgroundImage: {},
      colors: {
        "pink": "#FF527C",
        "green": "#D7FC70",
        "gray": "#303030"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
