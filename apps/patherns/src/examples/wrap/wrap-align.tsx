import { Center, Wrap } from '@snaps-ui/react'

export const WrapAlign = () => {
  return (
    <Wrap gap="30px" align="center">
      {Array.from({ length: 7 }).map((_, index) => (
        <Center w="180px" h="80px" bg="bg.emphasized" key={index}>
          Box {index + 1}
        </Center>
      ))}
    </Wrap>
  )
}
