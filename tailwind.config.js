export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#FF69B4',
        dark: '#1a1a1a',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF69B4 100%)',
      }
    },
  },
  plugins: [],
}