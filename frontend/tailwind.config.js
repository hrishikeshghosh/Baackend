module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path depending on your source file structure
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
         "window-gray":"#222831"
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
