import { Input, InputGroup } from '@snaps-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupEndAddon = () => {
  return (
    <InputGroup endAddon={<BiUser />}>
      <Input />
    </InputGroup>
  )
}
