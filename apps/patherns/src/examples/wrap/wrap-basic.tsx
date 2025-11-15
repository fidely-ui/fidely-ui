import { Center, Wrap } from '@fidely-ui/react'

export const WrapBasic = () => {
  return (
    <Wrap>
      {Array.from({ length: 10 }).map((_, index) => (
        <Center key={index} bg="orange.9" boxSize="100px" color="black.alpha11">
          {index}
        </Center>
      ))}
    </Wrap>
  )
}
