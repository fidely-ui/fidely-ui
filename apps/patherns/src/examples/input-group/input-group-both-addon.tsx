import { Input, InputGroup } from '@fidely-ui/react'

export const InputGroupBothAddon = () => {
  return (
    <InputGroup startAddon="https://" endAddon=".com">
      <Input placeholder="www.google" />
    </InputGroup>
  )
}
