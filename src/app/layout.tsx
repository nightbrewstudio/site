import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['700'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nightbrew.com.br'),
  title: 'Nightbrew Studio',
  description: 'Estúdio independente que cria apps para iOS e Android. Criador do Cada Fase.',
  openGraph: {
    title: 'Nightbrew Studio',
    description: 'Estúdio independente que cria apps para iOS e Android.',
    url: 'https://nightbrew.com.br',
    siteName: 'Nightbrew Studio',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1E120D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body className="min-h-screen bg-noite font-sans text-label">{children}</body>
    </html>
  )
}
