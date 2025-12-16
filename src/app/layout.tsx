import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LCO-Partners | Cabinet de chasse de têtes IT & Conseil',
  description: 'Cabinet de chasse de têtes spécialisé dans les métiers du Conseil et du Système d\'Information : Architecture IT, Cloud, DevOps, Data & Intelligence Artificielle.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
