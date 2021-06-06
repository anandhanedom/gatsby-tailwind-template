module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0096D6",
        secondary: {
          100: "#a7a7a7",
          200: "#101212",
          300: "#0d0c10",
          400: "#fafafa",
          500: "#c1c1c1",
        },
        tertiary: "#ad6edd",
      },
      fontFamily: {
        body: ["DM Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
