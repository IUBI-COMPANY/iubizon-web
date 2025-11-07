import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        scalePulse: "scalePulse 1.5s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      animationDelay: {
        "100": "0.1s",
        "200": "0.2s",
        "300": "0.3s",
        "500": "0.5s",
        "700": "0.7s",
        "800": "0.8s",
        "1000": "1s",
        "1200": "1.2s",
        "1500": "1.5s",
        "1800": "1.8s",
      },
    },
  },
  plugins: [],
};

export default config;
