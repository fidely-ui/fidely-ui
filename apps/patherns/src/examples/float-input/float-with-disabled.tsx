import { Field } from '@fidely-ui/react'
import { FloatInput } from '@fidely-ui/react/float-input'

export const FloatWithDisabled = () => {
  return (
    <Field.Root disabled>
      <FloatInput label="fidelyui@example.com" />
    </Field.Root>
  )
}
