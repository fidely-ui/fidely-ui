'use client'

import { Clipboard, IconButton, Input, useClipboard } from '@fidely-ui/react'
import { FaRegCopy } from 'react-icons/fa6'

export const ClipboardRootProvider = () => {
  const clipboard = useClipboard({ value: 'https://fidely-ui.vercel.app/' })

  return (
    <Clipboard.RootProvider value={clipboard}>
      <Clipboard.Label>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="subtle">
            <Clipboard.Indicator>
              <FaRegCopy />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.RootProvider>
  )
}
