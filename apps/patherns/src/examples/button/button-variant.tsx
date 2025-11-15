import { Button, HStack } from '@fidely-ui/react'

export const ButtonVariant = () => {
  return (
    <HStack gap="6">
      <Button variant={'solid'}>solid</Button>
      <Button variant={'subtle'}>subtle</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'plain'}>plain</Button>
    </HStack>
  )
}
