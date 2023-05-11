/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blog-pattern': "url('./src/images/Image-dark.jpg')",
        'arrow': "url('./src/images/arrow.svg')",
      },
      gridTemplateColumns: {
        'catalog': '20% 74%',
        'columCard': '268px 340px 220px',
      }
    },
  },
  plugins: [],
}

