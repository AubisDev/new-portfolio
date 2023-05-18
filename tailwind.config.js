/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appbg: '#2f2e36',
        lightbg: '#35343c',
        yellow: '#e3aa46',
        strong_yellow: '#faa002',
        white_text: '#d9d9db',
        lightgray: '#35343c'
      },
      fontFamily: {
        title: ['Rajdhani', 'sans-serif'],
        normal: ['Source Sans Pro', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bgpattern.svg')"
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
