// import './styles/tokens.css'
import { plugin } from 'postcss'
import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/styles/tokens.css.{vue,js,ts}'],

    theme: {
        extend: {
            // colors
            colors: { brand: {
                gold: 'var(--ga-gold)', 
                ink: 'var(--ga-ink)',
                inkWeak: 'var(--ga-ink-weak)',
                blue: 'var(--ga-blue)',
                silver: 'var(--ga-silver)',
                frostBG: 'var(--ga-frost-bg)',
                frostBorder: 'var(--ga-frost-border)',
            } },

            // fonts and sizes 
            font: {
                header: 'var(--ga-header-fontSize)',
                navBar: 'var(--ga-navbar-fontSize)',
                label: 'var(--ga-label-fontSize)',
            },


            width: { 
                card: 'var(--ga-card-w'},
                borderRadius: { card: 'var(--ga-card-r)'},
                blur: { glass: 'var(--ga-blur)',
                gap: 'var(--ga-card-gap)'
                }
        },
    },

    plugins: [],
} satisfies Config

