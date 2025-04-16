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
        'dark-bg-100': '#2E3039', // 暗模式背景色 100
        'dark-bg-200': '#1F2028', // 暗模式背景色 200
        'dark-tt': '#FFFFFF', // 暗模式标题色
        'dark-tx': '#A9ADC1', // 暗模式文本色
        'dark-tx-hg': '#FFD543', // 暗模式高亮色

        'light-bg-100': '#FFFFFF', // 亮模式背景色 100
        'light-bg-200': '#F7F7F7', // 亮模式背景色 200
        'light-tt': '#000000', // 亮模式标题色
        'light-tx': '#4B4C53', // 亮模式文本色
        'light-tx-hg': '#846901', // 亮模式高亮色
      },
      borderColor: {
        dark: '#4B4C53', // 暗模式边框色
        'dark-hg': '#FFD543', // 暗模式高亮边框色
        light: '#E7E9ED', // 亮模式边框色
        'light-hg': '#846901', // 亮模式高亮边框色
      },
      transitionDelay: {
        normal: '300ms',
      },
      transitionDuration: {
        normal: '350ms',
        quick: '200ms',
      },
      padding: {
        '5vw': '6vw',
      },
    },
  },
  plugins: [],
}
