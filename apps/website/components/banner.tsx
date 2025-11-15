'use client'

import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Text } from '@fidely-ui/react/text'

export const Banner = () => {
  return (
    <Box bg="orange.9" p="2" w="full">
      <Center>
        <Text fontWeight="bold" color="white">
          Fidely UI v1 beta is now available!. 🚀
        </Text>
      </Center>
    </Box>
  )
}
