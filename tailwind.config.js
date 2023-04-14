/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("autoprefixer"),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) =>
      addUtilities({
        ".custom-scroll": {
          "&:hover": {
            "&::-webkit-scrollbar": {
              width: 18,
            },

            "&::-webkit-scrollbar-thumb": {
              border: "6px solid rgba(0, 0, 0, 0)",
              backgroundClip: "padding-box",
              borderRadius: "9999px",
              backgroundColor: "#AAAAAA",
            },
          },

          "&::-webkit-scrollbar": {
            width: 18,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
            borderRadius: 6,
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "none",
            margin: "0",
          },
          scrollbarColor: "transparent transparent",
          scrollbarWidth: "thin",
        },
      }),
  ],
};
