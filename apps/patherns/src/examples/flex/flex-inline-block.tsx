import { Box, Flex } from '@snaps-ui/react'

export const FlexInlineBlock = () => {
  return (
    <Flex display={'inline-block'}>
      <Box bg={'green'} boxSize={'200px'} p={'10px'}>
        Box One
      </Box>
      <Box bg={'blue'} boxSize={'200px'} p={'10px'}>
        Box Two
      </Box>
    </Flex>
  )
}
