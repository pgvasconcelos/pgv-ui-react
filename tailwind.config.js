/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'trasparentgray': 'rgba(0, 0, 0 ,0.05)',
      'green': '#BCBC94',
      'light-green': '#EBEBDF',
      'dark-green': '#4C4C3E',
      'light-gray': '#F0F0F0',
      'gray': '#A8A8A8',
      'darkgray': '#666',
      'red': '#ff0000'
        },
    extend: {
        backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}