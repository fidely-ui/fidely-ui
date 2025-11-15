'use client'

import { useState } from 'react'
import { Switch } from '@fidely-ui/react/switch'

export const SwitchWithControl = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Fidely UI Switch</Switch.Label>
    </Switch.Root>
  )
}
