'use client'

import { Clipboard, useClipboard } from '@fidely-ui/react'

export const ClipboardRootProvider = () => {
  const clipboard = useClipboard({ value: 'https://fidely-ui.vercel.app/' })

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
