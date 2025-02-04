import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      xs:"300px",
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      ["2xl"]:"1530px",
    },
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'integral-cf': ['Integral CF', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
