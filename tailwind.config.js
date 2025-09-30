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
        'sn-primary': '#122918',
        'sn-primary-light': '#1a3d2a',
        'sn-primary-dark': '#0f1f15',
      },
    },
  },
  plugins: [],
}
