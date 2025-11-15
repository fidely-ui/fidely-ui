'use client'

import { CommandInput } from '@fidely-ui/react/command-input'

export const CommandInputShortcut = () => {
  return (
    <CommandInput
      onOpen={() => console.log('Shortcut triggered')}
      shortcut="Ctrl + Shift + P"
    />
  )
}
