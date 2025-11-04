'use client'

import { CommandInput } from '@snaps-ui/react/command-input'

export const CommandInputDemo = () => {
  return (
    <CommandInput
      placeholder="Search...."
      onOpen={() => alert('Open Command')}
    />
  )
}
