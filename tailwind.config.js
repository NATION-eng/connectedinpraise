/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'maroon-deep': '#180708',
        'maroon-dark': '#3A0808',
        'midnight-950': '#180708',
        'midnight-900': '#2B0909',
        crimson: '#65130E',
        gold: '#F2A900',
        'gold-bright': '#FFC400',
        'gold-deep': '#D86A00',
        neon: '#F2760A',
        'brown-light': '#B65B20',
        ivory: '#FFF7DD',
        cream: '#F5E7BC',
      },
      fontFamily: {
        script: ['Pacifico', 'cursive'],
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        waveform: 'waveform 1.2s ease-in-out infinite',
        'slow-pan': 'slow-pan 20s ease-in-out infinite alternate',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1) translate(0)' },
          '100%': { transform: 'scale(1.1) translate(-2%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
