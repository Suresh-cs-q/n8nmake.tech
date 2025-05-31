/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        },
        colors: {
          primary: {
            DEFAULT: '#0D9488',
            light: '#2DD4BF',
            dark: '#0F766E',
            lighter: '#F0FDFA'
          },
          secondary: {
            DEFAULT: '#F59E0B',
            dark: '#D97706',
          },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-out',
          slideUpEnter: 'slideUpEnter 0.8s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUpEnter: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };
  