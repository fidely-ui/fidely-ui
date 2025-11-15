'use client'

import { PinInput } from '@fidely-ui/react/pin-input'
import { useState } from 'react'

export const PinInputControlled = () => {
  const [value, setValue] = useState(['', '', '', ''])

  return (
    <PinInput.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <PinInput.Label>Enter Otp</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  )
}
