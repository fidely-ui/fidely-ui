'use client'

import { Box } from '@snaps-ui/react/box'
import { Center } from '@snaps-ui/react/center'
import { Typography } from '@snaps-ui/react/typography'

export const Banner = () => {
  return (
    <Box
      bg="linear-gradient(90deg, #f76b15, #ec9455)"
      p="2"
      boxShadow="md"
      border="1px solid"
      borderColor="orange.300"
      w="full"
    >
      <Center>
        <Typography variant="body1" fontWeight="bold" color="white">
          Snaps UI is still in development mode. 🚀
        </Typography>
      </Center>
    </Box>
  )
}
