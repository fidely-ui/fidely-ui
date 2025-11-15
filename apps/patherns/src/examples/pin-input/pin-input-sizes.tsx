import { PinInput, Stack } from '@fidely-ui/react'

export const PinInputSizes = () => {
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Stack gap={2}>
      {sizes.map((size) => (
        <PinInput.Root key={size} size={size}>
          <PinInput.HiddenInput />
          <PinInput.Control>
            <PinInput.Input index={0} />
            <PinInput.Input index={1} />
            <PinInput.Input index={2} />
            <PinInput.Input index={3} />
          </PinInput.Control>
        </PinInput.Root>
      ))}
    </Stack>
  )
}
