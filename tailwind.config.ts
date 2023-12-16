import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(#001DFA, #8996FF)',
      },
      colors: {
        'primary-orange': '#FF5A05',
        'secondary-orange': '#FDEEE7',
        'primary-blue': '#1F37FF',
        'secondary-blue': '#000848',
        'primary-purple': '#4252CF'
      }
    },
  },
  plugins: [],
}
export default config
