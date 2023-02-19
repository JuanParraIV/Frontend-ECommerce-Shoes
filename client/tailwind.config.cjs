/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 500s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
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
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
}
