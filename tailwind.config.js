/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner':"url('src/img/banner.png')",
        'venados-shop':"url('src/img/banner-venados.png')"
      }
    },
  },
  plugins: [],
}