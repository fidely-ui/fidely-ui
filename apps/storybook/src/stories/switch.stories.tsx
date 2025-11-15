import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Switch',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { SwitchBasics as Basics } from 'patherns/examples/switch/switch-basics'
export { SwitchSizes as Size } from 'patherns/examples/switch/switch-sizes'
export { SwitchWithColors as Colors } from 'patherns/examples/switch/switch-with-colors'
export { SwitchWithControl as Control } from 'patherns/examples/switch/switch-with-control'
