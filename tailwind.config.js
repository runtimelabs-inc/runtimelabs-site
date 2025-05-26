// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        },
        colors: {
          runtime: {
            blue: '#3B82F6',
            gray: '#4B5563',
            light: '#F3F4F6',
            dark: '#111827'
          }
        }
      }
    },
    plugins: []
  }
  