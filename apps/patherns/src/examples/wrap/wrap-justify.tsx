import { Center, Wrap } from '@fidely-ui/react'

export const WrapJustify = () => {
  return (
    <Wrap gap="30px" justify={'center'}>
      {Array.from({ length: 7 }).map((_, index) => (
        <Center w="180px" h="80px" bg="bg.subtle" key={index}>
          Box {index + 1}
        </Center>
      ))}
    </Wrap>
  )
}
