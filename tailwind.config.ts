import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "illu_003" : 'url("/assets/Hiroko/BTU_Website_Illus003_BG.png")',
        "illu_001" : 'url("/assets/Illus001/Illu01BG.png")'
      },
      screens:{
        xs:"400px"
      },
      colors:{
        'skyBlue': '#24fed2'
      }
    },
  },
  plugins: [],
};
export default config;
