/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'org': '#E77D6A',
      'textColor': '#F9F8FF',
      'textHot': '#F9F871',
      'textCold': '#006892',
      'placeColor': '#8C8AB1',
      'boxesColor': '#244365',
      'boxesText': '#1B6787',
      'boxes': '#8A87AB',
      'gradient1': '#45278B',
      'gradient2': '#333075',
      'gradient3': '#2e335a',
    },
    extend: {
      backgroundImage: theme => (
        {
          'background': "url('https://source.unsplash.com/collection/977392/1600x900')",
        
          'grad': "url('./src/assets/grad.png')",
          'day': "url('./src/assets/as.jpg')",
          'night': "url('./src/assets/esi.jpg')",
          'rect': "url('./src/assets/rect.png')",
        }
      ) ,
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
