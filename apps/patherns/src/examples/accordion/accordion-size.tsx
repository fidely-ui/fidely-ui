import { Accordion, Span, Stack, Text } from '@fidely-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const AccordionSize = () => {
  return (
    <Stack gap="8">
      {sizes.map((size) => (
        <Stack key={size} gap="3">
          <Text fontWeight="medium">{size}</Text>

          <Accordion.Root size={size} collapsible>
            {items.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  <Span>{item.title}</Span>
                  <Accordion.ItemIndicator>
                    <BiChevronDown />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>

                <Accordion.ItemContent>{item.text}</Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>
      ))}
    </Stack>
  )
}

const sizes = ['sm', 'md', 'lg'] as const

const items = [
  { value: 'a', title: 'First Item', text: 'Some value 1...' },
  { value: 'b', title: 'Second Item', text: 'Some value 2...' },
  { value: 'c', title: 'Third Item', text: 'Some value 3...' },
]
