import { Checkbox } from '@fidely-ui/react/checkbox'
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
      <Checkbox.Label>Fidely UI Checkbox</Checkbox.Label>
    </Checkbox.Root>
  )
}
