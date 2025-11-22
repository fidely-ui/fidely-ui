'use client'

import { useRef } from 'react'
import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from '@fidely-ui/react'

export const ComboboxLimits = () => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const { startsWith } = useFilter({ sensitivity: 'base' })

  const { collection, filter, reset } = useListCollection({
    initialItems: frameworks,
    filter: startsWith,
    limit: 2,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger onClick={reset} />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content ref={contentRef}>
            <Combobox.Empty>Nothing found.</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Remix', value: 'remix' },
  { label: 'Laravel', value: 'laravel' },
]
