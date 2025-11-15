import { Box, Flex } from '@fidely-ui/react'

export const FlexBetween = () => {
  return (
    <Flex justify={'space-between'}>
      <Box bg={'orange.9'} boxSize={'200px'} p={'10px'}>
        Box One
      </Box>
      <Box bg={'purple.alpha11'} boxSize={'200px'} p={'10px'}>
        Box Two
      </Box>
    </Flex>
  )
}
