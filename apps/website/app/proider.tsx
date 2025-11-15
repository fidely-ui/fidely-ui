'use client'

import { ThemeProvider } from 'next-themes'
// import { Toaster } from '@fidely-ui/react/toaster'

export const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {/* <Toaster position="top-right" /> */}
      {props.children}
    </ThemeProvider>
  )
}
