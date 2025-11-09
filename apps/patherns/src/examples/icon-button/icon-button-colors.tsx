import { IconButton, HStack } from '@snaps-ui/react'
import { FaRegUser } from 'react-icons/fa6'

export const IconButtonColors = () => {
  return (
    <HStack gap="6">
      <IconButton variant={'solid'} colorPalette={'orange'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'subtle'} colorPalette={'blue'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'ghost'} colorPalette={'purple'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'outline'} colorPalette={'green'}>
        <FaRegUser />
      </IconButton>
      <IconButton variant={'solid'} colorPalette={'red'}>
        <FaRegUser />
      </IconButton>
    </HStack>
  )
}
