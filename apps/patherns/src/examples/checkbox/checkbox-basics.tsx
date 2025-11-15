import { Checkbox } from '@fidely-ui/react/checkbox'

export const CheckboxBasics = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Terms and Conditions</Checkbox.Label>
    </Checkbox.Root>
  )
}
