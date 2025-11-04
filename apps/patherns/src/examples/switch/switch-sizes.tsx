import { HStack, Switch } from '@snaps-ui/react'

export const SwitchSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <HStack gap={3}>
      {sizes.map((size) => (
        <Switch.Root key={size} size={size}>
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      ))}
    </HStack>
  )
}
