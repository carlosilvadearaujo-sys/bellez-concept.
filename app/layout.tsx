import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bellez Estética Integrativa — Conceito',
  description: 'Conceito demonstrativo não oficial para Bellez Estética Integrativa.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
