import { PasswordInput } from '@fidely-ui/react/password-input'
import { FaEyeSlash, FaRegFaceRollingEyes } from 'react-icons/fa6'

export const PasswordInputIcon = () => {
  return (
    <PasswordInput.Root>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="enter password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<FaEyeSlash />}>
            <FaRegFaceRollingEyes />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
