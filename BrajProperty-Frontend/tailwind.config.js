// tailwind.config.js
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    // Paths to your components and pages
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add Flowbite content
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('https://th.bing.com/th/id/OIP.sUP3zFgZw-4XV_KeUXNHaAHaE6?w=275&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7')", // Correctly formatted URL
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Ensure the font family is correctly defined
      },
    },
  },
  plugins: [
    // Add Flowbite plugin
    flowbite.plugin(),
  ],
};
