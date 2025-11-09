import { Input, InputGroup, InputAddon } from '@snaps-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupStyleAddon = () => {
  return (
    <InputGroup>
      <InputAddon placement={'left'} bg={'bg.emphasized'}>
        <BiUser />
      </InputAddon>
      <Input placeholder="style addon" />

      <InputAddon placement={'right'} bg={'bg.emphasized'}>
        24 results
      </InputAddon>
    </InputGroup>
  )
}
