import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },
      colors: {
        gray: {
          light: "#EFEFEF",
          text: "#9B9B9B",
        },
      },
    },
  },
  plugins: [],
};
export default config;