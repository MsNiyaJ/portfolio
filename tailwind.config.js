module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '280px',
      'm-sm': '320px',
      'm-md': '375px',
      'm-lg': '425px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      'x-lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        laptop: "url('../public/images/laptop2.jpeg')",
      },
    },
  },
  plugins: [],
};
