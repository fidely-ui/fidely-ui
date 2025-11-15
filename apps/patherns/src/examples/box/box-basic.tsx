import { Box } from '@fidely-ui/react/box'

export const BoxBasic = () => {
  return (
    <Box
      boxSize={'200px'}
      bg={'orange.9'}
      padding={'10px'}
      textAlign={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      display={'flex'}
    >
      I'm a Box
    </Box>
  )
}
