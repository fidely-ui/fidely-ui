import { Box, Grid } from '@fidely-ui/react'

export const GridBasic = () => {
  return (
    <Grid columns={4}>
      <Box boxSize={'100px'} bg={'bg.emphasized'} />
      <Box boxSize={'100px'} bg={'bg.emphasized'} />
      <Box boxSize={'100px'} bg={'bg.emphasized'} />
      <Box boxSize={'100px'} bg={'bg.emphasized'} />
    </Grid>
  )
}
