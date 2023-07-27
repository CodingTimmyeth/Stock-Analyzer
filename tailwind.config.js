/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: '#171C27',
        secondaryBG: '#212936',
        textWhite: '#F7F7F7',
        primaryAccent: '#00C806',
        secondaryAccent: '#FF4848',
        neutral: '#A5A5A5',
        positive: '#39C33E',
        negative: '#F34336',
        neutralDark: '#3E495D'
      },
    },
  },
  plugins: [],
}

