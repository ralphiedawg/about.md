/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#FFFCF2',
        customGray: '#CCC5B9',
        customDark: '#403D39',
        customDarker: '#252422',
        customAccent: '#EB5E28',
      },
    },
  },
  plugins: [],
};
