/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       fontFamily: {
          'poppins': ['Poppins'],
       },
       backgroundImage: {
        'bg-boost-desktop': "url('src/assets/images/bg-boost-desktop.svg')",
        'bg-shorten-desktop': "url('src/assets/images/bg-shorten-desktop.svg')",
        'bg-working': "url('src/assets/images/illustration-working.svg')",

      }
    }
 },
  plugins: [],
}

