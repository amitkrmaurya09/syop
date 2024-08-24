/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7': '7px',  // Example custom value
        '250': '250px',  // Example custom value
        '96': '24rem',  // Example custom value
        '100': '100px', // Custom px value
        '128': '128px', // Another custom px value
      },
    },
  },
  plugins: [],
}