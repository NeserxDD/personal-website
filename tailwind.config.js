/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,tsx,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        gray: {
          50: '#fafafa', 100: '#f5f5f5', 200: '#e9e9e9',
          300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373',
          600: '#636363', 700: '#525252', 800: '#464646',
          900: '#3a3a3a', 950: '#2a2a2a',
        },
      },
      fontFamily: {
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-geist-pixel)', 'var(--font-geist-mono)', 'monospace'],
        serif: ['var(--font-source-serif-4)', 'Georgia', 'serif'],
      },
      spacing: {
        'section': '3.5rem',
        'half-section': '1.75rem',
        'component-gap': '0.75rem',
        'grid-gap': '0.75rem',
        'grid-gap-lg': '1.5rem',
        'sidebar': '14rem',
        'content-max': '42rem',
        'content-max-wide': '56rem',
        'card-padding': '1.25rem',
        'page-padding-mobile': '1rem',
        'page-padding-desktop': '1.5rem',
      },
      maxWidth: {
        'content-narrow': '42rem',
        'content-wide': '56rem',
      },
      boxShadow: {
        card: '0 8px 22px -14px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 18px 36px -20px rgba(0, 0, 0, 0.40)',
        modal: '0 40px 90px -20px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        card: '16px',
        'card-md': '12px',
        'card-sm': '8px',
        input: '6px',
        full: '9999px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 1.8s infinite',
      },
      keyframes: {
        fadeInUp: {
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 },
        },
      },
    },
  },
  plugins: [],
};
