'use client'

import { createListCollection, Portal, Select, Stack } from '@snaps-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const SelectVariant = () => {
  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  })

  const variants = ['outline', 'subtle'] as const

  return (
    <Stack gap={3}>
      {variants.map((variant) => (
        <Select.Root
          collection={collection}
          positioning={{ sameWidth: true }}
          maxW={'350px'}
          variant={variant}
          key={variant}
        >
          <Select.Label>{variant}</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a Framework" />
              <Select.Indicator>
                <BiChevronDown />
              </Select.Indicator>
            </Select.Trigger>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      ))}
    </Stack>
  )
}
