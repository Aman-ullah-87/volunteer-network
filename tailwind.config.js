/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontSize: {
        '10xl': ['12rem', { lineHeight: '1' }],
      },
    
    },
  },
  plugins: [],
}

