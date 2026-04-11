'use client'

import { CommandInput } from '@fidely-ui/react/command-input'

export const CommandInputShortcut = () => {
  return (
    <CommandInput
      onOpen={() => alert('Shortcut triggered')}
      shortcut="Ctrl + P"
    />
  )
}
