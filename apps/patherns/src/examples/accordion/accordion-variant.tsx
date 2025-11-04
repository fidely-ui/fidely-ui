import { Accordion, Stack, Typography } from '@snaps-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const AccordionVariant = () => {
  return (
    <Stack gap="8">
      {variants.map((variant) => (
        <Stack key={variant} gap="3">
          <Typography variant="body2" fontWeight="medium">
            {variant}
          </Typography>

          <Accordion.Root variant={variant}>
            {items.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  <Typography as="span">{item.title}</Typography>
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

const variants = ['subtle', 'outline', 'flush'] as const

const items = [
  { value: 'a', title: 'First Item', text: 'Some value 1...' },
  { value: 'b', title: 'Second Item', text: 'Some value 2...' },
  { value: 'c', title: 'Third Item', text: 'Some value 3...' },
]
