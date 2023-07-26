/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'neon-green': '#52ffa8',
      'light-cyan': '#cee3e9',
      'grayish-blue': '#4e5d73',
      'dark-grayish-blue': '#323a49',
      'dark-blue': '#1f2632',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#fafafa',
      'silver': '#9095a7',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      sans: ['var(--font-Manropef)']
    },
    boxShadow: {
      '3xl': '0 0px 20px 0px rgba(0, 0, 0, 0.3)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}