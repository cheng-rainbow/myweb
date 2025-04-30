/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // 扫描 src 下的文件
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow: '#C2993A',
        green: '#2BC17F',
        red: '#ef4b78',
        'dark-bg': '#171717',
        'dark-text': '#D1D5DB',
        'black-19': '#191919',
        'black-21': '#212121',
        'black-23': '#232323',
        'black-24': '#242424',
        'black-28': '#282828',
        'black-2A': '#2B2B2B',
        'black-2B': '#333333',
        'black-2C': '#444444',

        'gray-44': '#444444',
        'gray-99': '#DDD',

        'light-bg': '#FDFDFD',
        'light-text': '#444444',
        'white-19': '#F9F9F9',
        'white-21': '#F6F6F6',
        'white-24': '#F3F3F3',
        'white-28': '#eeeeee',
        'white-2A': '#EBEBEB',
        'white-2B': '#DBDBDB',

        'dark-hg': '#FEC207',
        'light-hg': '#846901',
        red0: '#FF4545',
        blue0: '#36A3FF',
        yellow: '#C29939',
      },
      transitionDuration: {
        normal: '300ms',
        quick: '200ms',
      },
      width: {
        '5vw': '5vw',
        '8vw': '8vw',
        '100vw': '100vw',
      },
      padding: {
        '2vw': '2vw',
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
        '12vw': '12vw',
        '15vw': '15vw',
      },
      margin: {
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
      },
      boxShadow: {
        'dark-box': '0 0 0 3px #1f2028,0 0 0 5px #ffd543',
        'light-box': '0 0 0 3px #ffffff,0 0 0 5px #846901',
      },
      fontFamily: {
        MyFont: ['MyFont'],
      },
      inset: {
        '10vw': '10vw',
        '12vw': '12vw',
        '15vw': '15vw',
        '18vw': '18vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
      },
    },
  },
  plugins: [],
}
