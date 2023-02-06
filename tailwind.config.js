/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        gloria: ["Gloria Hallelujah", "cursive"],
        josefin: ["Josefin Slab", "serif"],
      },
      // fontFamily: {
      //   gloria: ["Gloria Hallelujah", cursive],
      //   josefin: ["Josefin Slab", serif],
      // },

      colors: {
        "deym-bej": "#FEFAEE",
        "deym-grey": "#F5F5F5",
        "deym-brown": "#441813",
        "deym-pink": "#ffc6b3",
        "deym-bej-2": "#fff1d8",
        "deym-pink-2": "#FFCBDB",
        "deym-twitter": "#1DA1F2",
        "deym-instagram": "#F70173",
      },

      spacing: {
        "50px": "50px",
      },

      height: {
        "280px": "280px",
      },

      margin: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
