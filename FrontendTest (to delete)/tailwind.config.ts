import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        maxWidth:{
            '8xl':'90rem',
          },
          fontFamily: {
            sans: ['var(--font-quicksand)']
          },
      height: {
        'hero': '75vh',
      },
      // Add your other custom extensions here
      colors:{
        backgroundDark: '#1B1B1B',
        backgroundLight: '#FAFAFA',
        fontDark:'#F5F5F5',
        fontLight:'#1B1B1B'
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}

export default config