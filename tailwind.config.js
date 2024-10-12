// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// tailwind.config.js
// const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'], // Use DM Sans and Inter globally for sans-serif
      },
      colors: {
        black: {
          800: 'var(--color-black-800)',
          700: 'var(--color-black-700)',
          600: 'var(--color-black-600)',
          500: 'var(--color-black-500)',
        },
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        orange: 'var(--color-orange)',
        gray: {
          300: 'var(--color-gray-300)',
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
    },
  },
  darkMode: "class",
  plugins: [
   
  ],
};





