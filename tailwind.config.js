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
        'spacing': 'repeat(4, 1fr)',
        // 'spacing-lg': 'repeat(3, 1fr) repeat(2, 1fr)',
      },
      gridTemplateRows: {
        'spacing': 'repeat(4, 1fr)',
        // 'spacing-lg': '1fr repeat(2, 1fr) 1fr',
      }, 
    },
  },
  plugins: [],
};

export default tailwindConfig;


