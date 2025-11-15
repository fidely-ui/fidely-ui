import { Group } from '@fidely-ui/react'
import { PinInput } from '@fidely-ui/react/pin-input'

export const PinInputAttached = () => {
  return (
    <PinInput.Root>
      <PinInput.Label>Enter Otp</PinInput.Label>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <Group attached>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </Group>
      </PinInput.Control>
    </PinInput.Root>
  )
}
