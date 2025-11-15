import { Flex, Grid, GridItem } from '@fidely-ui/react'

export const GridSpanColumns = () => {
  return (
    <Grid
      h="250px"
      gridTemplateRows="repeat(2, 1fr)"
      gridTemplateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg={'bg.emphasized'}>
        <Flex align={'center'} justify={'center'} h={'100%'}>
          rowSpan=2
        </Flex>
      </GridItem>
      <GridItem colSpan={2} bg={'bg.emphasized'}>
        <Flex align={'center'} justify={'center'} h={'100%'}>
          colSpan=2
        </Flex>
      </GridItem>
      <GridItem colSpan={2} bg={'bg.emphasized'}>
        <Flex align={'center'} justify={'center'} h={'100%'}>
          colSpan=2
        </Flex>
      </GridItem>
      <GridItem colSpan={4} bg={'bg.emphasized'}>
        <Flex align={'center'} justify={'center'} h={'100%'}>
          colSpan=4
        </Flex>
      </GridItem>
    </Grid>
  )
}
