import { HStack, Image } from '@fidely-ui/react'

export const ImageCircular = () => {
  return (
    <HStack gap={3}>
      <Image
        boxSize="150px"
        borderRadius="full"
        fit="cover"
        src="https://i.pravatar.cc/250?img=10"
        alt="John Doe"
      />

      <Image
        boxSize="150px"
        rounded={'full'}
        fit="cover"
        src="https://i.pravatar.cc/250?img=12"
        alt="John Doe"
      />
    </HStack>
  )
}
