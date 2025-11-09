import { HStack, Stack, Switch, Text } from '@snaps-ui/react'

export const SwitchWithColors = () => {
  return (
    <Stack gap={5}>
      <HStack gap={6} alignItems="center">
        <Text fontWeight="medium" textTransform="capitalize">
          green
        </Text>

        <Switch.Root colorPalette={'green'} defaultChecked>
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>

        <Text fontWeight="medium" textTransform="capitalize">
          orange
        </Text>

        <Switch.Root colorPalette={'orange'} defaultChecked>
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label></Switch.Label>
        </Switch.Root>
      </HStack>
    </Stack>
  )
}
