/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dash/**/*.{html,js}"
    ,        "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        font:["Oswald"]
      }
    },
  },
  plugins: [       require('flowbite/plugin')

  ],
}

