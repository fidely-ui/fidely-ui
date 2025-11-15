import { Input, InputGroup } from '@fidely-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupBasics = () => {
  return (
    <InputGroup startAddon={<BiUser />}>
      <Input />
    </InputGroup>
  )
}
