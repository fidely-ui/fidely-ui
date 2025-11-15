'use client'

import { CommandInput } from '@fidely-ui/react/command-input'

export const CommandInputDemo = () => {
  return (
    <CommandInput
      placeholder="Search...."
      onOpen={() => alert('Open Command')}
    />
  )
}
