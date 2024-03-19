import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-red": "#fe4655",
        "secondary-red": "#ff7864",
        "main-black": "#302732",
        "secondary-black": "#8c818a",
        "terciary-black": "#3c323e",
        "main-white": "#ece8e1",
        "secondary-white": "#b9b0b8",
      },
      fontFamily: {
        sans: "var(--raleway-font)",
        unbounded: "var(--unbounded-font)",
      },
    },
  },
  plugins: [],
};
export default config;
