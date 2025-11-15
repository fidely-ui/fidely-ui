import { Input, InputGroup } from '@fidely-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupEndAddon = () => {
  return (
    <InputGroup endAddon={<BiUser />}>
      <Input />
    </InputGroup>
  )
}
