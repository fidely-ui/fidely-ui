'use client'

import { IconButton } from '@fidely-ui/react/icon-button'
import { Clipboard } from '@fidely-ui/react/clipboard'

export function CopyButton({ code }: { code?: string }) {
  return (
    <Clipboard.Root value={code}>
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <IconButton variant="ghost" size="sm">
            <Clipboard.Indicator />
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
