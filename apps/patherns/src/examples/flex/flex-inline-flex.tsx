import { Box, Flex, Image } from '@snaps-ui/react'

export const FlexInlineFlex = () => {
  return (
    <Flex display={'inline-flex'} justifyContent={'space-between'}>
      <Box>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://i.pravatar.cc/250?img=10"
          alt="John Doe"
        />
      </Box>
      <Box>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://i.pravatar.cc/250?img=12"
          alt="John Doe"
        />
      </Box>
      <Box>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://i.pravatar.cc/250?img=10"
          alt="John Doe"
        />
      </Box>
    </Flex>
  )
}
