import { Input, InputGroup } from '@snaps-ui/react'

export const InputGroupBothAddon = () => {
  return (
    <InputGroup startAddon="https://" endAddon=".com">
      <Input placeholder="www.google" />
    </InputGroup>
  )
}
