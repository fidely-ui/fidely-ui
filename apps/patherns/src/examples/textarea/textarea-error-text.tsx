import { Field, Textarea } from '@fidely-ui/react'

export const TextareaErrorText = () => {
  return (
    <Field.Root invalid>
      <Field.Label>
        Comment <Field.RequiredIndicator />
      </Field.Label>
      <Textarea placeholder="Start typing..." variant="subtle" />
      <Field.Error>Field is required</Field.Error>
    </Field.Root>
  )
}
