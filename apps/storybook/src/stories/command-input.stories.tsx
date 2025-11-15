import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/CommandInput',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { CommandInputDemo as Basics } from 'patherns/examples/command-input/command-input-demo'
export { CommandInputIcon as Icon } from 'patherns/examples/command-input/command-input-icon'
export { CommandInputShortcut as Shortcut } from 'patherns/examples/command-input/command-input-shortcut'
