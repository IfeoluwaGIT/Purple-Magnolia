/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-purple': '#f1e7fe',
        'custom2-deep-purple': '#3f1c77',
      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
};
