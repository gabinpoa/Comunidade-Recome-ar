/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../media/background.jpg')",
        homeSmall: "url('../media/background-small.jpg')",
        darkenHome:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), url('../media/background.jpg')",
        gradientLayer:
          "linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);",
        headerGradient:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.56) 65.62%, rgba(1, 1, 1, 0) 99.96%, rgba(30, 30, 30, 0) 99.97%, rgba(30, 30, 30, 0) 99.98%);",
      },
      backgroundPosition: {
        semiRight: "right -250px top 0",
      },
      fontFamily: {
        urbanist: "Urbanist, sans-serif",
        workSans: "Work Sans, sans-serif",
      },
      colors: {
        green1: "#485D70",
      },
    },
  },
  plugins: [],
};
