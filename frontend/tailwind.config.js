/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      "desktop" : {'max' : '4000px'},
      'tablet' : {'max' : '1042px'},
      'mobile' : {'max' : '805px'}
    },
    extend: {
      colors: {
        main: "#121c26",
        "pale-green": "#72a580",
      },
    },
  },
  plugins: [],
};
