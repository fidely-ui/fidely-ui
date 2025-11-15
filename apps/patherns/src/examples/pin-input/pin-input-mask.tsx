import { PinInput } from '@fidely-ui/react'

export const PinInputMask = () => {
  return (
    <PinInput.Root mask>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.HiddenInput />
      <PinInput.Control>
        {[0, 1, 2, 3].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
    </PinInput.Root>
  )
}
