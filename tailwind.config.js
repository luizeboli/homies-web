/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: ({theme}) => ({
        'arrow-gradient': `radial-gradient(circle at bottom left, transparent 65%, ${theme('colors.neutral.600')} 65%);`
      }),
      fontSize: {
        xxs: ".625rem",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("autoprefixer"),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities, theme }) =>
      addUtilities({
        ".custom-scroll": {
          "&::-webkit-scrollbar": {
            width: 12,
          },

          "&::-webkit-scrollbar-thumb": {
            border: "2px solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
            borderRadius: "9999px",
            backgroundColor: theme("colors.gray.500"),
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
            border: "1px solid",
            borderColor: theme("colors.zinc.700"),
            borderRadius: "9999px",
          },
          scrollbarColor: "transparent transparent",
          scrollbarWidth: "thin",
        },
      }),
  ],
};
