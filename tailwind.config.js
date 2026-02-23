/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        

        /* Marquee Right → Left */
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        /* Marquee Left → Right */
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },

        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      animation: {
        gradientMove: "gradientMove 12s ease infinite",

        /* Marquee Animations */
        marqueeLeft: "marqueeLeft 20s linear infinite",
        marqueeRight: "marqueeRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};