/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        hoverColor: "#000000",
        brightColor: "#a2a29f",
        backgroundColor: "#FFF8E3",
        PrimaryColor: "#f5ebe0",
        SecondaryColor: "#e3d5ca",
        ExtraDarkColor: "#d2aa7b",
        DarkColor: "#f4e5d4",
      },
    },
  },
  plugins: [],
};
