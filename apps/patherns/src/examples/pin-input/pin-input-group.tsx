import { PinInput } from '@fidely-ui/react'

export const PinInputGroup = () => {
  return (
    <PinInput.Root>
      <PinInput.Label>Enter OTP</PinInput.Label>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Group>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
        </PinInput.Group>
        <PinInput.Separator />
        <PinInput.Group>
          <PinInput.Input index={3} />
          <PinInput.Input index={4} />
          <PinInput.Input index={5} />
        </PinInput.Group>
      </PinInput.Control>
    </PinInput.Root>
  )
}
