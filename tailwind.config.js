/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaDemiBold: "Dana DemiBold",
        DanaMedium: "Dana Medium",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", ["& > *:hover"]);
    },
  ],
};
