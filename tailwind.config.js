/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,*}"],
  daisyui: {
    themes: ["light", "dark", "dracula", "pastel", "emerald"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
