import { Field, Input } from '@fidely-ui/react'

export const FieldDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      <Input placeholder="fidelyui@example.com" />
    </Field.Root>
  )
}
