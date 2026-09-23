import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://bellez-concept.vercel.app'),
  title: 'Bellez Estética Integrativa | Estética, Massoterapia e Bem-estar',
  description: 'Estética, massoterapia, nutrição e bem-estar em um só espaço. Conheça os serviços da Bellez Estética Integrativa e agende seu horário.',
  openGraph: {
    title: 'Bellez Estética Integrativa',
    description: 'Estética, massoterapia, nutrição e bem-estar em um só espaço.',
    url: 'https://bellez-concept.vercel.app',
    siteName: 'Bellez Estética Integrativa',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/bellez-real/1516F68B-F65B-4656-B648-96BC0542BE09.png',
        width: 1200,
        height: 630,
        alt: 'Bellez Estética Integrativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bellez Estética Integrativa',
    description: 'Estética, massoterapia, nutrição e bem-estar em um só espaço.',
    images: ['/bellez-real/1516F68B-F65B-4656-B648-96BC0542BE09.png'],
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
