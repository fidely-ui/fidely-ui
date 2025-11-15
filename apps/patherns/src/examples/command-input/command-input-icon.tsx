'use client'

import { CommandInput } from '@fidely-ui/react/command-input'
import { LuUserRoundSearch } from 'react-icons/lu'

export const CommandInputIcon = () => {
  return (
    <CommandInput
      placeholder="Search docs...."
      leftElement={<LuUserRoundSearch />}
    />
  )
}
