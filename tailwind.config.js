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
    },
  },
  plugins: [],
};

export default tailwindConfig;


