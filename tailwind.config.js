/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)))",
          },
          "100%": {
            transform:
              "rotate(calc(360deg + var(--angle))) translateX(var(--radius)) rotate(calc(-360deg - var(--angle)))",
          },
        },
      },
      animation: {
        orbit: "orbit var(--duration)s linear infinite",
      },
    },
  },
  plugins: [],
};
