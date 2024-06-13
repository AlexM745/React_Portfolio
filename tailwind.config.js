/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#b6dffe",
        tertiary: "#655CF0",
        "grey-90": "#191919",
        "grey-95": "#0D0D0D",
        "purple-100": "#6D8DFF",
      },
      screens: {
        xs: "450px",
      },

      // background image
      backgroundImage: {
        "heroBanner": "url('/src/assets/blacksand.jpg')",
      },
    },
  },
  plugins: [],
};
