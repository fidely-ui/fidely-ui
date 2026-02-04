import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import { AppProvider } from '~/app/proider'
import { Banner } from '~/components/banner'

import './global.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fidely-ui.vercel.app'),
  title: {
    default: 'Fidely UI',
    template: '%s – Fidely UI',
  },
  description:
    'Fidely UI is a modern, beautifully crafted React design system powered by Ark UI and Panda CSS, delivering accessible and themeable components for building exceptional web apps.',
  applicationName: 'Fidely UI',
  authors: [
    { name: 'Justice Chimobi', url: 'https://justice-chimobi.vercel.app' },
  ],
  keywords: [
    'fidely-ui',
    'react',
    'fidely ui',
    'ui',
    'ark ui',
    'panda css',
    'design-system',
    'react-components',
    'accessible',
    'uikit',
    'components',
    'library',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      'max-snippet': -1,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Fidely UI',
    url: 'https://fidely-ui.vercel.app',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Fidely UI – React Design System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@chimobijustice',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <AppProvider>
          <Banner /> 
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
