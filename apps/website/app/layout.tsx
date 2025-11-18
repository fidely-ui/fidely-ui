import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import { AppProvider } from '~/app/proider'
import { NavBar } from '~/components/navbar'
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
  title: 'Fidely  UI',
  description:
    'Fidely UI is a modern, beautifully crafted React design system powered by Ark UI and Panda CSS, delivering accessible and themeable components for building exceptional web apps',
  authors: [
    { name: 'Justice Chimobi', url: 'https://github.com/chimobi-justice' },
  ],
  applicationName: 'Fidely  UI',
  keywords: [
    'fidely-ui',
    'react',
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
  twitter: {
    creator: '@chimobijustice_',
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
          <NavBar />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
