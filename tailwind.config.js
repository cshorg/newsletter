/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"]
    },
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      charcoal: "hsl(235, 18%, 26%)",
      slate: "hsl(234, 29%, 20%)",
      brightRed: "#ff5869",
      brightOrange: "#ff6448"
    }
  },
  plugins: []
}
