// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',   // ← scan your components/pages
  ],
  theme: {
    extend: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
    },
      colors: {
        brand: {
          'gold': 'var(--ga-gold)',
          'ink': 'var(--ga-ink)',
          'inkWeak': 'var(--ga-ink-weak)',
          'blue': 'var(--ga-blue)',
          'silver': 'var(--ga-silver)',
          'frostBG': 'var(--ga-frost-bg)',
          'frostBorder': 'var(--ga-frost-border)',
        },
      },

      /* font sizes (utility: text-font-header, etc.) */
      fontSize: {
        'font-header': ['40px', { lineHeight: '1.1', letterSpacing: '0.08em' }],
        'font-navbar': ['14px', { letterSpacing: '0.12em' }],
        'font-label':  ['12px', { letterSpacing: '0.08em' }],
      },

      /* optional: fonts (utility: font-brand) */
      fontFamily: {
        brand: ['"mason-sans"', 'sans-serif'],
      },

      width: {
        card: 'var(--ga-card-w)',          // w-card
      },
      borderRadius: {
        card: 'var(--ga-card-r)',          // rounded-card
      },
      blur: {
        glass: 'var(--ga-blur)',           // backdrop-blur-glass
      },
      spacing: {
        header: 'var(--ga-header-h)',      // pt-header, mt-header
        cardGap: 'var(--ga-card-gap)',     // gap-y-cardGap, space-y-cardGap
      },
      boxShadow: {
        card: 'var(--ga-shadow-card)',     // shadow-card
      },
    },
  },
  plugins: [],
} satisfies Config
