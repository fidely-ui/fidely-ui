import { PinInput } from '@fidely-ui/react/pin-input'

export const PinInputAlphanumeric = () => {
  return (
    <PinInput.Root type="alphanumeric">
      <PinInput.Label>Enter Otp</PinInput.Label>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
