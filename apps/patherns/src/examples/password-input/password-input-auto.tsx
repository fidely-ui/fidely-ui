import { PasswordInput } from '@fidely-ui/react/password-input'

export const PasswordInputAuto = () => {
  return (
    <PasswordInput.Root autoComplete="new-password">
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="enter password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
