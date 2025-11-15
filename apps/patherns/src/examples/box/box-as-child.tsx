import { Box, Text } from '@fidely-ui/react'

export const BoxAsChild = () => {
  return (
    <Box asChild background={'bg.emphasized'} padding={'10px'}>
      <Text>Hey child element</Text>
    </Box>
  )
}
