'use client'

import { Button, useClipboard } from '@snaps-ui/react'

export const ClipboardWithStore = () => {
  const clipboard = useClipboard({ value: 'https://snaps-ui.vercel.app/' })

  return (
    <Button size="sm" onClick={clipboard.copy}>
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
