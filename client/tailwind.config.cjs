/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        marquee: 'marquee 10s linear infinite;',
        marquee2: 'marquee 15s linear infinite;'
      },
      keyframes:{
        marquee: {
          "0%":{transform: 'translateX(0%)'},
          "-50%":{transform: 'translateX(-50%)'},
        }
      },
      transform: {
        'scale-1': 'scale(1, 1)',
        'scale-1.1': 'scale(1.1, 1.1)',

      },
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
