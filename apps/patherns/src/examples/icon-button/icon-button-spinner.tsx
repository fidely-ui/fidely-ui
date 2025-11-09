import { HStack } from '@snaps-ui/react'
import { IconButton } from '@snaps-ui/react/icon-button'
import {
  BeatLoader,
  DotLoader,
  BounceLoader,
  ClockLoader,
} from 'react-spinners'

export const IconButtonSpinner = () => {
  return (
    <HStack gap={3}>
      <IconButton aria-label="spinner" isLoading colorPalette={'orange'} />
      <IconButton
        aria-label="spinner"
        isLoading
        spinner={<BeatLoader size={8} color="green" />}
      />
      <IconButton
        aria-label="spinner"
        isLoading
        spinner={<DotLoader size={18} color="white" />}
      />

      <IconButton
        aria-label="spinner"
        isLoading
        spinner={<BounceLoader size={18} color="purple" />}
      />
      <IconButton
        aria-label="spinner"
        isLoading
        spinner={<ClockLoader size={18} color="white" />}
      />
      <IconButton aria-label="spinner" isLoading />
    </HStack>
  )
}
