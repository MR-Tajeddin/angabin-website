/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f8f1",
          100: "#dcefdc",
          200: "#bbdfbc",
          500: "#2f7d46",
          600: "#236339",
          700: "#1c4e2f",
          800: "#183f28",
          900: "#143421"
        },
        charcoal: "#24302b",
        mist: "#f6faf7"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(20, 52, 33, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
