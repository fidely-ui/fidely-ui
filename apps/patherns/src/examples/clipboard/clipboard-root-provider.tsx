'use client'

import { Clipboard, useClipboard } from '@snaps-ui/react'

export const ClipboardRootProvider = () => {
  const clipboard = useClipboard({ value: 'https://snaps-ui.vercel.app/' })

  return (
    <Clipboard.RootProvider value={clipboard}>
      <Clipboard.Label>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input />
        <Clipboard.Trigger>
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.RootProvider>
  )
}
