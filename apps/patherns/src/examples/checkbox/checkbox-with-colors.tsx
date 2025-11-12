import { Checkbox, HStack, Stack } from '@snaps-ui/react'

export const CheckboxWithColors = () => {
  return (
    <Stack gap={2}>
      <HStack gap={3} alignItems="center">
        <Checkbox.Root colorPalette={'green'} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label fontWeight="medium" textTransform="capitalize">
            green
          </Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root colorPalette={'orange'} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label fontWeight="medium" textTransform="capitalize">
            orange
          </Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root colorPalette={'purple'} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label fontWeight="medium" textTransform="capitalize">
            purple
          </Checkbox.Label>
        </Checkbox.Root>

        <Checkbox.Root colorPalette={'blue'} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label fontWeight="medium" textTransform="capitalize">
            blue
          </Checkbox.Label>
        </Checkbox.Root>
      </HStack>
    </Stack>
  )
}
