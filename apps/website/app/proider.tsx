'use client'

import { ThemeProvider } from 'next-themes'

export const AppProvider = (props: { children: React.ReactNode }) => {
  const scriptProps =
    typeof window === 'undefined'
      ? undefined
      : ({ type: 'application/json' } as const)

  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      scriptProps={scriptProps}
    >
      {props.children}
    </ThemeProvider>
  )
}
