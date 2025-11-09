import { Field, Input } from '@snaps-ui/react'

export const InputHelperText = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Comment <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Start typing..." variant="subtle" />
      <Field.HelperText>Additional text.</Field.HelperText>
    </Field.Root>
  )
}
