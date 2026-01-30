/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ee2bad",
        "secondary": "#00ffff",
        "tertiary": "#ffff00",
        "background-light": "#f8f6f7",
        "background-dark": "#0f0a0d",
        "background-dark-alt": "#22101c",
        "surface-dark": "#1f151b",
        "surface-dark-alt": "#2d1b27",
        "surface-dark-hover": "#2d1f28",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px"
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(238,43,173,0.15) 0%, rgba(34,211,238,0.15) 50%, rgba(253,224,71,0.1) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(31, 21, 27, 0.6) 0%, #1f151b 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(238, 43, 173, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
        'neon-hover': '0 0 30px rgba(238, 43, 173, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)',
        'card-3d': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 6s infinite',
        'bounce-slower': 'bounce 7s infinite',
        'bounce-slowest': 'bounce 8s infinite',
      }
    },
  },
  plugins: [],
}
