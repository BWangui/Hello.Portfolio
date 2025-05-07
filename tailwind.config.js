/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f9fafb",      // Light background color
        surface: "#1f2937",   // Dark text or surface color
        accent: "#3b82f6",    // Blue accent color for links and buttons
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Use Inter or system fonts
      },
    },
  },
  plugins: [],
}
