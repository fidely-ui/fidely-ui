import { Input, InputGroup, Kbd } from '@fidely-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupWithKbd = () => {
  return (
    <InputGroup startAddon={<BiUser />} endAddon={<Kbd>⌘K</Kbd>}>
      <Input placeholder="search dashboard..." />
    </InputGroup>
  )
}
