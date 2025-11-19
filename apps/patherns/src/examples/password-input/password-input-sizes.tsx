import { PasswordInput, Stack } from '@fidely-ui/react'

export const PasswordInputSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap={2}>
      {sizes.map((size) => (
        <PasswordInput.Root size={size} key={size}>
          <PasswordInput.Label>Password</PasswordInput.Label>
          <PasswordInput.Control>
            <PasswordInput.Input placeholder="enter password" />
            <PasswordInput.VisibilityTrigger>
              <PasswordInput.Indicator />
            </PasswordInput.VisibilityTrigger>
          </PasswordInput.Control>
        </PasswordInput.Root>
      ))}
    </Stack>
  )
}
