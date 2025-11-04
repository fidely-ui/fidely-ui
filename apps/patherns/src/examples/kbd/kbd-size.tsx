import { Kbd, Flex } from '@snaps-ui/react'

export const KbdSize = () => {
  return (
    <Flex gap={2}>
      <Kbd size={'sm'}>F12</Kbd>
      <Kbd size={'md'}>F5</Kbd>
      <Kbd size={'lg'}>F11</Kbd>
    </Flex>
  )
}
