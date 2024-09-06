/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e74545",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Kufi Arabic", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities({
        ".rtl": {
          direction: "rtl",
        },
      });
    },
    require("tailwindcss-filters"),
  ],
};
