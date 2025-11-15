import { Switch } from '@fidely-ui/react/switch'

export const SwitchBasics = () => {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Fidely UI Switch</Switch.Label>
    </Switch.Root>
  )
}
