import { Box, Grid, GridItem } from '@snaps-ui/react'

export const GridSpans = () => {
  return (
    <Grid columns={4} gap="6">
      <GridItem colSpan={2}>
        <Box h="20" bg={'orange.9'} />
      </GridItem>
      <GridItem colSpan={1}>
        <Box h="20" bg={'orange.9'} />
      </GridItem>
      <GridItem colSpan={1} bg={'orange.9'}>
        <Box h="20" />
      </GridItem>
    </Grid>
  )
}
