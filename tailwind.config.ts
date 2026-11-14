import type { Config } from 'tailwindcss'

// Paleta da madrugada do site do Cada Fase (lemne-web, `globals.css`), fixa: o estúdio é noturno.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        barro: '#C46A42',
        ambar: '#F49A44',
        label: '#ECE1CC',
        surface: '#2C2420',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bricolage)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        noite: 'linear-gradient(135deg, #321E16 0%, #1E120D 50%, #120B08 100%)',
      },
    },
  },
  plugins: [],
}

export default config
