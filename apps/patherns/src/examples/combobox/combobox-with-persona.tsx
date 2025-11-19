'use client'

import {
  Combobox,
  Persona,
  Portal,
  useFilter,
  useListCollection,
} from '@fidely-ui/react'

export const ComboboxWithPersona = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems: persons,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
      openOnClick
    >
      <Combobox.Label>Select a person</Combobox.Label>

      <Combobox.Control>
        <Combobox.Input placeholder="Type a name…" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No person found.</Combobox.Empty>

            {collection.items.map((item) => (
              <Combobox.Item key={item.id} item={item}>
                <Persona
                  title={item.role}
                  name={item.name}
                  img={item.avatar}
                  imgSize="xs"
                />
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const persons = [
  {
    id: '1',
    name: 'Sarah Thompson',
    role: 'UI/UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'David Johnson',
    role: 'Frontend Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: '3',
    name: 'Amelia Brown',
    role: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    id: '4',
    name: 'James Carter',
    role: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: '5',
    name: 'Emily Wilson',
    role: 'Mobile Developer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '6',
    name: 'Michael Anderson',
    role: 'DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '7',
    name: 'Sophia Martinez',
    role: 'QA Analyst',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    id: '8',
    name: 'Liam Roberts',
    role: 'Full Stack Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: '9',
    name: 'Olivia Parker',
    role: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    id: '10',
    name: 'Noah Davis',
    role: 'AI Researcher',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
]
