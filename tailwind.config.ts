import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "24px",
        h4: "20px",
        h5: "16px",
        h6: "14px",
        h7: "12px",
        h8: "10px",
      },
    },
    colors: {
      fontPrimary: "#0F0F0F",
      fontSecondary: "#969696",
      themePrimary: "#2B3467",
      themeSecondary: "#BAD7E9",
      themeRed: "#CA4459",
    },
  },
  plugins: [],
};

export default config;
