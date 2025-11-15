import { Field, Textarea } from '@fidely-ui/react'

export const TextareaHelperText = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Comment <Field.RequiredIndicator />
      </Field.Label>
      <Textarea placeholder="Start typing..." variant="subtle" />
      <Field.HelperText>Additional text.</Field.HelperText>
    </Field.Root>
  )
}
