/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBgMain: '#F6F1F1',
        lightBgSecondary: '#146C94',
        lightTextMain: '#164863',
        lightTextSecondary: '#19A7CE',
        darkBgMain: '#1D1D1D',
        darkBgSecondary: '#2C3E50',
        darktextMain: '#D3D3D3',
        darkTextSecondary: '#3498DB',
      },
    },
  },
  plugins: [],
};
