import { Input, InputGroup, Kbd } from '@snaps-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupWithKbd = () => {
  return (
    <InputGroup startAddon={<BiUser />} endAddon={<Kbd>⌘K</Kbd>}>
      <Input placeholder="search dashboard..." />
    </InputGroup>
  )
}
