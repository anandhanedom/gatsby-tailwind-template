module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3098f3",
        secondary: "#ffcc00",
        tertiary: "#fe6571",
        alpha: "#05051e",
        beta: "#082c4e",
        gamma: "#072c4e",
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
