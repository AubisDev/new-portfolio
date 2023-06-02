/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appbg: '#2f2e36',
        lightbg: '#35343c',
        strong_yellow: '#faa002',
        white_text: '#d9d9db',
        lightgray: '#35343c',
        skyblue: '#7bfaf6'
      },
      fontFamily: {
        title: ['Rajdhani', 'sans-serif'],
        normal: ['Source Sans Pro', 'sans-serif']
      },
      backgroundImage: {
        projectbg: "url('/src/assets/projectbg.svg')"
      },
      boxShadow: {
        glowingUnderline: '0px 0px 2px 2px yellow',
        titleShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
      },
      dropShadow: {
        '3xl': '0 0 100px rgba(123,250,246,0.55)'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
