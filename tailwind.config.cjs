/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      'org': '#E77D6A',
      'textColor': '#F9F8FF',
      'textHot': '#F9F871',
      'textCold': '#006892',
      'placeColor': '#8C8AB1',
      'boxesColor': '#244365',
      'boxesText': '#1B6787',
      'boxes': '#8A87AB',
      'cardBack': '#062126',
      'cardTemp': '#111213',
      'textDate': '#398989',
    },
    fontFamily: {
        'syneFont' : ['Syne', 'sans-serif']
      },
    backgroundImage: theme => (
        {
          'background': "url('./src/assets/background.jpg')",
        }
      )
    },
    
  },
  plugins: [],
};


