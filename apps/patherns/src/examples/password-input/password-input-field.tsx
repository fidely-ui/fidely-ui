import { Field, PasswordInput } from '@fidely-ui/react'

export const PasswordInputField = () => {
  return (
    <Field.Root>
      <PasswordInput.Root>
        <PasswordInput.Label>Password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator />
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
      <Field.HelperText>Enter your password</Field.HelperText>
      <Field.Error>Password is required</Field.Error>
    </Field.Root>
  )
}
