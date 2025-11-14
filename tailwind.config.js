const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Templates.tsx",
  ],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5400",
        secondary: "#FDBD01",
        tirtiary: "#FF8600",
        darkPrimaryText: "#CFD0D8",
        blackish: "#1E1E1E",
        darkBackground: "#2C2C2C",
        darkSecondaryBackground: "#1F1F1F",
        tagLightModeBg: "#F0F0F0",
        borderLightMode: "#666666",
      },
      outline: {
        secondary: "1px solid #FDBD01", // Custom outline style using your secondary color
      },
      boxShadow: {
        primaryCardShadow: "0 6px 24px rgba(17, 24, 39,0.3)",
        lightPrimaryCardShadow: "0 6px 8px rgba(17, 24, 39, 0.08)",
      },
      fontSize: {
        h1: "52px",
        h2: "40px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "18px",
        p1: "16px",
        p2: "14px",
        p3: "12px",
        p4: "9px",
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(90deg, #FF8600 0%, #FDBD01 100%)",
        "gradient-dark": "linear-gradient(to right, #121212 0%, #121212 100%)",
        "gradient-spot":
          "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 84, 0, 0.15) 0%, rgba(255, 84, 0, 0) 60%)",
        "orange-gold-gradient":
          "linear-gradient(to bottom, rgba(139, 76, 0, 0.4) 0%, rgba(253, 189, 1, 0.2) 100%)",
      },
      animation: {
        "blink-cursor": "blink 1s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "fade-in-scale": "fadeInScale 0.8s ease-out",
        "stagger-fade-in": "staggerFadeIn 0.6s ease-out",
      },
      keyframes: {
        blink: {
          "0%": { "caret-color": "transparent" },
          "50%": { "caret-color": "#FF8600" },
          "100%": { "caret-color": "transparent" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        staggerFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Static custom utilities
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".animate-blink-cursor": {
          animation: "blink 1s infinite",
          fontWeight: "bold",
          caretColor: "#FF8600",
          fontSize: "20px",
        },
        ".text-gradient": {
          color: theme("colors.blackish"),
        },
        ".dark .text-gradient": {
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage: theme("backgroundImage.gradient-light"),
        },
        ".border-secondary": {
          borderColor: theme("colors.tirtiary"),
        },
        ".dark .border-secondary": {
          borderColor: theme("colors.secondary"),
        },
        ".accent-secondary": {
          accentColor: theme("colors.tirtiary"),
        },
        ".dark .accent-secondary": {
          accentColor: theme("colors.secondary"),
        },
        ".icon-gradient": {
          filter: "hue-rotate(15deg) saturate(1.2) brightness(1.1)",
          color: "#FF8600",
          backgroundImage: "linear-gradient(90deg, #FF8600 0%, #FDBD01 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          "-webkit-mask-image":
            "linear-gradient(90deg, #FF8600 0%, #FDBD01 100%)",
          maskImage: "linear-gradient(90deg, #FF8600 0%, #FDBD01 100%)",
        },
        ".icon-gradient-mask": {
          color: "#FF8600",
          background: "linear-gradient(90deg, #FF8600 0%, #FDBD01 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          "& svg": {
            fill: "url(#iconGradient)",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};