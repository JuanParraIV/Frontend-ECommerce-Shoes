/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    }
    /* colors: {
      primary: "#2B4570", // Dark Corn
      secondary: "#5497A7", // Blue Munsell
      tertiary: "#50858B", // gray
      background: "#FOF7F4", // white
      highlight: "#62A8AC", // Cadet Blue
      orange: '#D7D9CE',
      transparent: "transparent", // transparent
      darkconrflower: "#2B4570",
      mintcream: "#F0F7F4",
      cadetblue: "#62A8AC",
      bluemunsell: "#5497A7",
      steelteal: "#50858B",
      dark: "black",
      white: "white",
      blur: "rgba(0,0,0,0.5)",
      orange: colors.orange,
      yellow: "#FFE800",
    }, */
  },
  plugins: [],
}