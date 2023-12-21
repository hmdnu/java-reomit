import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        carousel1: "url('/images/carousel1.png')",
        carousel2: "url('/images/carousel2.png')",
        carousel3: "url('/images/carousel3.jpeg')",
        quoteImg: "url('/images/quoteImg.png')",
      },
      fontSize: {
        h1: ["40px", { lineHeight: "120%" }],
        h2: ["32px", { lineHeight: "150%" }],
        h3: ["24px", { lineHeight: "120%" }],
        h4: ["20px", { lineHeight: "120%" }],
        h5: ["16px", { lineHeight: "150%" }],
        h6: ["14px", { lineHeight: "150%" }],
        h7: ["12px", { lineHeight: "150%" }],
        h8: ["10px", { lineHeight: "120%" }],
      },
    },
    colors: {
      ...colors,
      fontPrimary: "#0F0F0F",
      fontSecondary: "#969696",
      themePrimary: "#2B3467",
      themeSecondary: "#BAD7E9",
      themeGray: "#323232",
      themeRed: "#CA4459",
      fontGray: "#D8D8D8",
      fontBlue: "#2B3467",
    },
    screens: {
      xxs: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1450px",
      xl: "1700px",
    },
  },
  plugins: [],
};

export default config;
