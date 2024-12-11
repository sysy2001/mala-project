/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: 'rgb(255, 245, 215)',
          },

        fontFamily: {
        editor: ['TerzaEditorLightItalic', 'sans-serif'],
        reader: ['TerzaReaderLightItalic', 'serif'],
      },
    },
  },
  plugins: [],
}
