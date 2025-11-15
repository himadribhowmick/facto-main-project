module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow:{
        shadow1:"0 0 14px 0 rgba(0, 0, 0, 0.03)"
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1472px",
      },
    },
    screens: {
      xs: "0px",      // custom breakpoint
      sm: "640px",    // default sm
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
