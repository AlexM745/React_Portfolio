/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#b6dffe",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
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
