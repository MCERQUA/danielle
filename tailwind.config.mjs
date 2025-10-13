/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        glass: {
          50: 'rgba(255, 255, 255, 0.1)',
          100: 'rgba(255, 255, 255, 0.2)',
          200: 'rgba(255, 255, 255, 0.3)',
        },
        feminine: {
          pink: '#F8BBD9',
          rose: '#E4A0C7',
          lavender: '#C8A2C8',
          sage: '#B8C5B8',
          cream: '#FFF8F0',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(248, 187, 217, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(248, 187, 217, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}