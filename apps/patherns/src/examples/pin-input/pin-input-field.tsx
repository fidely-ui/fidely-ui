import { Field, PinInput } from '@fidely-ui/react'

export const PinInputField = () => {
  return (
    <Field.Root>
      <PinInput.Root>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
          {[0, 1, 2, 3].map((id, index) => (
            <PinInput.Input key={id} index={index} />
          ))}
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
    </Field.Root>
  )
}
