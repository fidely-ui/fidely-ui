import { Input } from '@snaps-ui/react'

export const InputPlaceholder = () => {
  return (
    <Input
      color="orange.9"
      placeholder="custom placeholder"
      _placeholder={{ color: 'inherit' }}
    />
  )
}
