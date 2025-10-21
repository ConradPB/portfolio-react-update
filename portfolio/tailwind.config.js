/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','Poppins','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'],
      },
      
    }
  },
  plugins: [],
}
