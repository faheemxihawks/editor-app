/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Add this safelist to ensure Tailwind classes typed in the editor are available
  safelist: [{
    // This pattern is a lot more comprehensive. It includes:
    // - Variants: hover, focus, etc.
    // - Properties: bg, text, border, font, p, m, w, h, etc.
    // - Colors: A wide range of Tailwind's default colors.
    // - Numbers: For spacing, sizing, and shades.
    pattern: /^(hover:|focus:|sm:|md:|lg:|xl:)?(bg|text|border|ring|fill|stroke|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent)-?([1-9]00)?$/,
  }, {
    // Safelist for flexbox, grid, spacing, typography, and sizing
    pattern: /^(flex|grid|gap|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|w|h|min-h|max-w|rounded|shadow|text|font|items|justify|leading|tracking|border|ring|outline)-.+/,
  }, {
    // Safelist for specific keywords like 'text-transparent' and 'bg-clip-text' for gradients
    pattern: /(bg-clip-text|text-transparent|bg-gradient-to-r)/,
  },
],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
