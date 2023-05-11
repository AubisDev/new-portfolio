/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appbg: '#2f2e36',
        lightbg: '#35343c',
        yellow: '#e3aa46',
        white_text: '#d9d9db'
      },
      fontFamily: {
        title: ['Rajdhani', 'sans-serif'],
        normal: ['Source Sans Pro', 'sans-serif']
      }
    }
  },
  plugins: []
}
