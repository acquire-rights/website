/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'loud': '#0D0D12',
        'indigo': '#2F3349',
        'muted': '#36394A',
        'subdued': '#818898',
        'primary-beige': '#FEF3DF',
        'secondary-beige': '#D7C49E',
        'primary-green': '#E0F1F1',
        'secondary-green': '#BDDFDF',
        'mold-green': '#E6EBE4'
      }
    },
  },
  plugins: [],
}

