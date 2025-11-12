import { Checkbox } from '@snaps-ui/react/checkbox'
import { GiCheckMark } from 'react-icons/gi'

export const CheckboxWithIcon = () => {
  return (
    <Checkbox.Root defaultChecked>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>
          <GiCheckMark />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Snaps UI Checkbox</Checkbox.Label>
    </Checkbox.Root>
  )
}
