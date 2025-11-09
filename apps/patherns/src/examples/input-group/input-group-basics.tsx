import { Input, InputGroup } from '@snaps-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupBasics = () => {
  return (
    <InputGroup startAddon={<BiUser />}>
      <Input />
    </InputGroup>
  )
}
