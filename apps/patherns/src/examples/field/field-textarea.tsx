import { Field, Textarea } from '@fidely-ui/react'

export const FieldTextarea = () => {
  return (
    <Field.Root>
      <Field.Label>Password</Field.Label>
      <Textarea placeholder="Enter Bio..." />
    </Field.Root>
  )
}
