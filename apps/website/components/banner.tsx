'use client'

import { Box } from '@snaps-ui/react/box'
import { Center } from '@snaps-ui/react/center'
import { Text } from '@snaps-ui/react/text'

export const Banner = () => {
  return (
    <Box bg="orange.9" p="2" w="full">
      <Center>
        <Text fontWeight="bold" color="white">
          Snaps UI is still in development mode. 🚀
        </Text>
      </Center>
    </Box>
  )
}
