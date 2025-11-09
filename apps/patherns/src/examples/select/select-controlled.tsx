'use client'

import { useState } from 'react'
import { createListCollection, Portal, Select } from '@snaps-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>([])

  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  })

  return (
    <Select.Root
      collection={collection}
      positioning={{ sameWidth: true }}
      maxW={'350px'}
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Select.Label>Framework</Select.Label>
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
  )
}
