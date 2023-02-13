/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   screens: {
      'mobile': '300px',
      'tablet': '750px',
      'desktop': '1200px',
    },
    extend: {
      colors:{
        'primary':'#ffffff',
        'secondary':'#000000',
        'third':'#111827',
        'fourth':'#e5e7eb',
    },
    },
  },
  plugins: [],
}