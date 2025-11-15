import { Field, Input } from '@fidely-ui/react'

export const FieldHelper = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="fidelyui@example.com" />
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}
