/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        color:{
            themyellow: "#f5a60d",
            thempurple: "#502ec3",
        }
    },
  },
  plugins: [],
};
