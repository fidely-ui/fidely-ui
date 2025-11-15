import { Checkbox, VStack } from '@fidely-ui/react'

export const CheckboxWithState = () => {
  return (
    <VStack gap={3}>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label fontWeight="medium" textTransform="capitalize">
          Disabled
        </Checkbox.Label>
      </Checkbox.Root>
    </VStack>
  )
}
