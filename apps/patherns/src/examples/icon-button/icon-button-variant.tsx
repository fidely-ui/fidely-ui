import { IconButton, HStack } from '@fidely-ui/react'
import { FaRegUser } from 'react-icons/fa6'

export const IconButtonVariant = () => {
  return (
    <HStack gap="6">
      <IconButton variant={'solid'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'subtle'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'ghost'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'outline'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'plain'}>
        <FaRegUser />
      </IconButton>
    </HStack>
  )
}
