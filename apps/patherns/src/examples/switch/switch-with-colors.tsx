import { HStack, Stack, Switch, Typography } from '@snaps-ui/react'

export const SwitchWithColors = () => {
  return (
    <Stack gap={5}>
      <HStack gap={6} alignItems="center">
        <Typography fontWeight="medium" textTransform="capitalize">
          green
        </Typography>

        <Switch.Root colorPalette={'green'} defaultChecked>
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>

        <Typography fontWeight="medium" textTransform="capitalize">
          orange
        </Typography>

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
