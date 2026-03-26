import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aegis: {
          bg: "#050B14",
          panel: "rgba(10, 15, 25, 0.75)",
          border: "rgba(0, 255, 204, 0.2)",
          cyan: "#00FFCC",
          magenta: "#FF00FF",
          green: "#39FF14",
          red: "#FF3333",
          yellow: "#FFFF33"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
