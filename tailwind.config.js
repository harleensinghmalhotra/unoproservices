/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Uno Pro Services (logo-matched palette)
          primary: '#B51E1E',   // main red (buttons, top bar, highlights)
          secondary: '#7A0F0F', // deep red (hover, dark accents)
          accent: '#D86B1F',    // orange leaf accent (small highlights)
          green: '#2E8B57',     // optional leaf green (use sparingly)
          light: '#F5F1E8',     // soft off-white background (optional)
        },
      },
    },
  },
  plugins: [],
};
