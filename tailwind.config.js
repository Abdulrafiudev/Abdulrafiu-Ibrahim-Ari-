/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F4F0",
        card: "#FFFFFF",
        ink: "#1A1A1A",
        muted: "#6B6B6B",
        subtle: "#A8A8A0",
        accent: "#D97B4F",
        "accent-light": "#F5E8DF",
        border: "#E8E6E0",
      },
      fontFamily: {
        serif: ['"DM Sans"', "sans-serif"], // Re-mapping serif to sans to unify typography
        sans: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutal-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
