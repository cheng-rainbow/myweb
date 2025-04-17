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
        'black-0': '#000000',
        'black-100': '#2E3039',
        'black-200': '#1F2028',
        'black-300': '#A9ADC1',
        'black-400': '#4B4C53',
        'dark-hg': '#FFD543',

        'white-0': '#FFFFFF',
        'white-100': '#F7F7F7',
        'white-200': '#E7E9ED',
        'light-hg': '#846901',
      },
      transitionDelay: {
        normal: '300ms',
      },
      transitionDuration: {
        normal: '350ms',
        quick: '200ms',
      },
      width: {
        '5vw': '5vw',
        '8vw': '8vw',
      },
      padding: {
        '5vw': '5vw',
        '8vw': '8vw',
      },
    },
  },
  plugins: [],
}
