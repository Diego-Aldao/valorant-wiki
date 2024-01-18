import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "main-red":"#fe4655",
        "secondary-red":"#ff7864",
        "main-black":"#302732",
        "secondary-black":"#8c818a",
        "terciary-black":"#3c323e",
        "main-white":"#ece8e1",
        "secondary-white":"#b9b0b8",
      },
      fontFamily:{
        sans: "var(--raleway-font)",
        bebas: "var(--bebas-font)",
      },
    },
  },
  plugins: [],
}
export default config
