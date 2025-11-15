import { Button, HStack } from '@fidely-ui/react'
import { BeatLoader, DotLoader } from 'react-spinners'

export const ButtonCustomSpinner = () => {
  return (
    <HStack gap={3}>
      <Button isLoading spinner={<BeatLoader size={8} color="white" />}>
        Loader 1
      </Button>

      <Button isLoading spinner={<DotLoader size={15} color="white" />}>
        Loader 2
      </Button>
    </HStack>
  )
}
