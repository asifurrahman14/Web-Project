/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'off': 'rgb(242, 230, 255)',
        'primary': '#7F57F1',
        'secondary': "#FF5151",
        'danger': '#FF5151',
        'warning': '#FF9437',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },

  },
  plugins: [],
}

