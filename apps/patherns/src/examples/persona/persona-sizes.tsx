import { Persona, Tabs } from '@snaps-ui/react'

export const PersonaSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Tabs.Root defaultValue="md" variant="outline">
      <Tabs.List>
        {sizes.map((size) => (
          <Tabs.Trigger
            key={size}
            value={size}
            _selected={{ color: 'orange.9' }}
          >
            {size}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {sizes.map((size) => (
        <Tabs.Content key={size} value={size}>
          <Persona
            name="Kurtis Weissna"
            title="generate enterprise e-tailers"
            img="http://bit.ly/47jPX1D"
            imgSize={size}
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
