'use client'

import { useState } from 'react'
import { Checkbox } from '@fidely-ui/react'

export const CheckboxWithControl = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Fidely UI Checkbox</Checkbox.Label>
    </Checkbox.Root>
  )
}
