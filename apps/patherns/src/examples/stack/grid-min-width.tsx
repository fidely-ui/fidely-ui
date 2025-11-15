import { Grid, GridItem } from '@fidely-ui/react'

export const GridMinWidth = () => {
  return (
    <Grid color="white" w="100%" minChildWidth="100px">
      <GridItem bg={'orange.9'} p={2} color="black">
        1
      </GridItem>
      <GridItem bg={'black.alpha10'} p={2}>
        2
      </GridItem>
      <GridItem bg={'blue.10'} p={2}>
        3
      </GridItem>
      <GridItem bg={'purple.9'} p={2} color="black">
        1
      </GridItem>
      <GridItem bg={'red.10'} p={2}>
        2
      </GridItem>
      <GridItem bg={'green.9'} p={2}>
        3
      </GridItem>
      <GridItem bg={'orange.9'} p={2} color="black">
        1
      </GridItem>
      <GridItem bg={'blue.9'} p={2}>
        2
      </GridItem>
      <GridItem bg={'purple.9'} p={2}>
        3
      </GridItem>
    </Grid>
  )
}
