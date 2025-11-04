import { Accordion } from '@snaps-ui/react/accordion'
import { BiChevronDown } from 'react-icons/bi'

export const AccordionMultiple = () => {
  return (
    <Accordion.Root defaultValue={['React']} multiple>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            What is {item.title}?
            <Accordion.ItemIndicator>
              <BiChevronDown />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item.text} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  {
    value: 'a',
    title: 'Snaps UI',
    text: 'A beautifully crafted React design system powered by Ark UI and Panda CSS, providing accessible, themeable, and production-ready components.',
  },
  {
    value: 'b',
    title: 'Chakra UI',
    text: 'Chakra UI is a component system for building SaaS products with speed ⚡️',
  },
  {
    value: 'c',
    title: 'MUI',
    text: "Material UI: Comprehensive React component library that implements Google's Material Design. ",
  },
  {
    value: 'd',
    title: 'Ant Design',
    text: 'An enterprise-class UI design language and React UI library',
  },
  {
    value: 'e',
    title: 'Mantime',
    text: 'A fully featured React components library',
  },
]
