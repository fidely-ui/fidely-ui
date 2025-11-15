import { Box, Center, Image } from '@fidely-ui/react'

export const CenterWithImage = () => {
  return (
    <Center>
      <Box>
        <Image
          boxSize="200px"
          fit="cover"
          src="https://i.pravatar.cc/250?img=10"
          alt="John Doe"
        />
      </Box>
    </Center>
  )
}
