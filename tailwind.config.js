module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#000080",
        },
        ind: {
          saffron: "#FF9933",
          green: "#138808",
        },
      },
      fontFamily: {
        body: ["Open Sans"],
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
    },
  },
  plugins: [],
};
