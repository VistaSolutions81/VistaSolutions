import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'outline-variant': 'var(--color-outline-variant)',
        accent: 'var(--color-accent)',
        'primary-container': 'var(--color-primary-container)',
        'secondary-container': 'var(--color-secondary-container)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container-lowest': 'var(--color-surface-container-lowest)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'surface-container-highest': 'var(--color-surface-container-highest)',
        'on-secondary-container': 'var(--color-on-secondary-container)',
        secondary: 'var(--color-secondary)',
        outline: 'var(--color-outline)',
        'on-primary': 'var(--color-on-primary)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius-default)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        full: '9999px',
      },
      spacing: {
        'container-max': '1440px',
        'margin-desktop': '64px',
        'margin-mobile': 'var(--spacing-margin-mobile)',
        gutter: 'var(--spacing-gutter)',
        unit: 'var(--spacing-unit)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        hanken: ['var(--font-hanken)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
