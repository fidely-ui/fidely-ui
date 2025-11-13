import { Box, Wrap } from '@snaps-ui/react'

export const WrapRowGap = () => {
  return (
    <Wrap rowGap={['0px', '24px']} columnGap={['4px', '12px']}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Box key={index} w="12" h="12" bg={'bg.muted'} />
      ))}
    </Wrap>
  )
}
