import { HStack } from '@fidely-ui/react'
import { Button } from '@fidely-ui/react/button'

export const ButtonSpinnerPlacement = () => {
  return (
    <HStack gap={3}>
      <Button isLoading spinnerPlacement="start">
        start
      </Button>

      <Button isLoading spinnerPlacement="end">
        end
      </Button>
    </HStack>
  )
}
