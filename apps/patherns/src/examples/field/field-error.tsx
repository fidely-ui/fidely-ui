import { Field, Input } from '@fidely-ui/react'

export const FieldError = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="fidelyui@example.com" />
      <Field.Error>This is an error text</Field.Error>
    </Field.Root>
  )
}
