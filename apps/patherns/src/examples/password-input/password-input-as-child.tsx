import { PasswordInput } from '@fidely-ui/react/password-input'

export const PasswordInputAsChild = () => {
  return (
    <PasswordInput.Root>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input asChild>
          <input type="text" placeholder="enter password" />
        </PasswordInput.Input>
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
