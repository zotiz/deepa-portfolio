/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2cbce9',
        red: '#dc4492',
        yellow: '#fdcc49',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg,#00B%EE 7.21%, #FF45A4 45.05%,#FFBA00 78.07% )',
        'gradient-rainblue':
          'linear-gradient(90deg,#24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73% )',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
      },
    },
    screens: {
      
      sm: '600px', // Small screens (e.g., mobile)
      md: '768px', // Medium screens (e.g., tablets)
      lg: '1024px', // Large screens (e.g., laptops)
    },
  },
  plugins: [],
}
