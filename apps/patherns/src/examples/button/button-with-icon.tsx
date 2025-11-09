import { Button, HStack } from '@snaps-ui/react'
import { RiArrowRightLine, RiMailLine } from 'react-icons/ri'

export const ButtonWithIcon = () => {
  return (
    <HStack gap={3}>
      <Button colorPalette="orange" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="orange" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
  )
}
