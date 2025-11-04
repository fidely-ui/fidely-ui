import { Accordion } from '@snaps-ui/react/accordion'
import { BiChevronDown } from 'react-icons/bi'

export const AccordionDefaultValue = () => {
  return (
    <Accordion.Root defaultValue={['React']}>
      {['React', 'Solid', 'Vue', 'Svelte'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <BiChevronDown />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
