import { Field, Input } from '@snaps-ui/react'

export const InputErrorText = () => {
  return (
    <Field.Root invalid>
      <Field.Label>
        Comment <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Start typing..." variant="subtle" />
      <Field.Error>Field is required</Field.Error>
    </Field.Root>
  )
}
