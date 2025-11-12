import { Checkbox, VStack } from '@snaps-ui/react'

export const CheckboxSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <VStack gap={3}>
      {sizes.map((size) => (
        <Checkbox.Root size={size} key={size}>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Terms and Conditions</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </VStack>
  )
}
