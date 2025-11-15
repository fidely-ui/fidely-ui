import { Box, Flex } from '@fidely-ui/react'

export const FlexAround = () => {
  return (
    <Flex justify={'space-around'}>
      <Box bg={'green'} boxSize={'200px'} p={'10px'}>
        Box One
      </Box>
      <Box bg={'blue'} boxSize={'200px'} p={'10px'}>
        Box Two
      </Box>
    </Flex>
  )
}
