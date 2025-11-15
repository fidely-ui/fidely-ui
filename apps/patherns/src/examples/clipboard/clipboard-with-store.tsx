'use client'

import { Button, useClipboard } from '@fidely-ui/react'

export const ClipboardWithStore = () => {
  const clipboard = useClipboard({ value: 'https://fidely-ui.vercel.app/' })

  return (
    <Button size="sm" onClick={clipboard.copy}>
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
