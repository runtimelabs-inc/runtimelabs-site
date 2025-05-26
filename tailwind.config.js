/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          runtime: {
            primary: '#3B82F6',
            accent: '#4ADE80',
            dark: '#111827'
          }
        },
        fontFamily: {
          sans: ['JetBrains Mono', 'ui-monospace', 'system-ui']
        }
      }
    },
    darkMode: 'class',
    plugins: []
  }
  