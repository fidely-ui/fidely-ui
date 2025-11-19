'use client'

import { useState } from 'react'
import { Em, PasswordInput } from '@fidely-ui/react'

export const PasswordInputControlled = () => {
  const [visible, setVisible] = useState(false)

  return (
    <PasswordInput.Root
      visible={visible}
      onVisibilityChange={(e) => setVisible(e.visible)}
    >
      <PasswordInput.Label>
        Password is{' '}
        <Em color={'orange.9'}>{visible ? 'visible' : 'hidden'}</Em>{' '}
      </PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="enter password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
