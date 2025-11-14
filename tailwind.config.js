/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Templates.tsx",
  ],
  // Add this safelist to ensure Tailwind classes typed in the editor are available
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a1a',
        darkPrimaryText: '#ffffff',
        secondary: '#007bff',
        blackish: '#333333',
        tirtiary: '#6c757d',
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.75rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'p1': '1rem',
        'p2': '0.875rem',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #e2e8f0, #f8fafc)',
        'text-gradient': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
