/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sn-primary': '#1a4d2a', // 더 밝은 녹색으로 변경 (AA 대비 개선)
        'sn-primary-light': '#2d6b3f', // 더 밝은 색상
        'sn-primary-dark': '#0f2a1a', // 더 어두운 색상
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}