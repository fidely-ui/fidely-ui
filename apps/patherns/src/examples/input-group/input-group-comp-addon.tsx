import { Input, InputGroup, InputAddon } from '@snaps-ui/react'
import { BiUser } from 'react-icons/bi'

export const InputGroupCompAddon = () => {
  return (
    <InputGroup>
      <InputAddon placement={'left'}>
        <BiUser />
      </InputAddon>
      <Input placeholder="www.google" />

      <InputAddon placement={'right'}>24 results</InputAddon>
    </InputGroup>
  )
}
