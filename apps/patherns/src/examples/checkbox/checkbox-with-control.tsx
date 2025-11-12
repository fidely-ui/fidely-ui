'use client'

import { useState } from 'react'
import { Checkbox } from '@snaps-ui/react'

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
      <Checkbox.Label>Snaps UI Checkbox</Checkbox.Label>
    </Checkbox.Root>
  )
}
