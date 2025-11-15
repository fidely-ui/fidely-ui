import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Persona',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { PersonaBasics as Basics } from 'patherns/examples/persona/persona-basics'
export { PersonaSizes as Size } from 'patherns/examples/persona/persona-sizes'
export { PersonaHorizontal as Horinzontal } from 'patherns/examples/persona/persona-horizontal'
export { PersonaVertical as Vertical } from 'patherns/examples/persona/persona-vertical'
