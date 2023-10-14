/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,*}"],
  daisyui: {
    themes: ["dark", "light"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
