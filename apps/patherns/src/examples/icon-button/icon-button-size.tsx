import { IconButton, HStack } from '@fidely-ui/react'
import { FaRegUser } from 'react-icons/fa6'

export const IconButtonSize = () => {
  return (
    <HStack gap="6">
      <IconButton size="xs">
        <FaRegUser />
      </IconButton>
      <IconButton size="sm">
        <FaRegUser />
      </IconButton>
      <IconButton size="md">
        <FaRegUser />
      </IconButton>
      <IconButton size="lg">
        <FaRegUser />
      </IconButton>
      <IconButton size="xl">
        <FaRegUser />
      </IconButton>
    </HStack>
  )
}
