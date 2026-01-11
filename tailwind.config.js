/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-rgb))",
        secondary: "rgb(var(--secondary-rgb))",
        accent: "rgb(var(--accent-rgb))",
        "background-light": "rgb(var(--background-light-rgb))",
        "background-dark": "rgb(var(--background-dark-rgb))",
        "border-light": "rgb(var(--border-light-rgb))",
        "border-dark": "rgb(var(--border-dark-rgb))",
        "card-light": "rgb(var(--card-light-rgb))",
        "card-dark": "rgb(var(--card-dark-rgb))",
        success: "rgb(var(--success-rgb))",
        error: "rgb(var(--error-rgb))",
        warning: "rgb(var(--warning-rgb))",
        info: "rgb(var(--info-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        "deep-oak": "#1b140d",
        clay: "#9a734c",
        cream: "#f3ede7",
        // Stone colors for compatibility
        stone: {
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
