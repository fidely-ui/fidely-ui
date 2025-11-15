import { Field } from '@fidely-ui/react'
import { FloatInput } from '@fidely-ui/react/float-input'

export const FloatWithError = () => {
  return (
    <Field.Root invalid>
      <FloatInput label="Email address" />
      <Field.Error>This is an error text</Field.Error>
    </Field.Root>
  )
}
