import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "brigth" : "#f0ead2",
        "bright-green" : "#e9f5db",
        "primary-green" : "#adc178",
        "brigth-brown" : "#a98467",
        "dark-brown" : "#6c584c",
        "brand" : "#A5D039",
      }
    },
  },
  plugins: [],
};
export default config;
