module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0096D6",
        },
      },
      fontFamily: {
        body: ["Open Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
