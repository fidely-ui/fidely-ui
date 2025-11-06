'use client'

import { Box } from '@snaps-ui/react/box'
import { Center } from '@snaps-ui/react/center'
import { Typography } from '@snaps-ui/react/typography'

export const Banner = () => {
  return (
    <Box bg="orange.9" p="2" w="full">
      <Center>
        <Typography variant="body1" fontWeight="bold" color="white">
          Snaps UI is still in development mode. 🚀
        </Typography>
      </Center>
    </Box>
  )
}
