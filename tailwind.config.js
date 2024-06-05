/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'figma-green': "#F6F8EC",
        'figma-letter': "#0A5F36",
        'figma-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      fontFamily: {
        lregular: ["Lato-Regular", "sans-serif"],
        lbold: ["Lato-Bold", "sans-serif"],
        lblack: ["Lato-Black", "sans-serif"]
      }

    },
  },
  plugins: [],
}

