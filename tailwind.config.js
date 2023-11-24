/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        sweetpurple: '#18163c',
        luminous: '#0ACF11',
      },
      gridTemplateColumns: {
        'spacing': 'repeat(5, 1fr)',
      },
      gridTemplateRows: {
        'spacing': 'repeat(5, 1fr)',
      }, 
      gridArea: {
      }, 
    },
  },
  plugins: [],
};

export default tailwindConfig;


