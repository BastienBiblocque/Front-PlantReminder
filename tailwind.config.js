/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    "primary": "#75a083",
    "secondary": "#d0ff8e",
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#75a083",
          "secondary": "#d0ff8e",
        },
      },
    ],
  },
}
