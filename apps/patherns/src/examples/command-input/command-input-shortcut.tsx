'use client'

import { CommandInput } from '@snaps-ui/react/command-input'

export const CommandInputShortcut = () => {
  return (
    <CommandInput
      onOpen={() => console.log('Shortcut triggered')}
      shortcut="Ctrl + Shift + P"
    />
  )
}
