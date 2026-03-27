/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // scans all your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",    // deep indigo
        secondary: "#10B981",  // green accent
        accent: "#F59E0B",     // orange accent
        card: "#F3F4F6",       // light gray card background
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};