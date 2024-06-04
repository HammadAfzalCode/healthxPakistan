/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "0.8rem", // Custom small font size
      md: "1rem", // Custom medium font size
      lg: "1.2rem", // Custom large font size
      h1: "2rem",
    },
    colors: {
      lightBlue: "#1F8B7B",
      orange: "#E9501D",
      darkBlue: "#2D4755",
      yellow: "#EBC662",
    },
  },
  plugins: [],
};
