/** @type {import('tailwindcss').Config} */
module.exports = {
    themes: [
      {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
        },
        colors: {
          primary: "#4F4789",

          secondary: "#5299D3",

          dark: "#242219",

          white: "#FFFFFF",

          black: "#000000",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
        fontfamily:{
        }
      },
    ],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
