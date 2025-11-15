import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Clipboard',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ClipboardBasics as Basics } from 'patherns/examples/clipboard/clipboard-basics'
export { ClipboardWithInput as WithInput } from 'patherns/examples/clipboard/clipboard-with-input'
export { ClipboardWithTimer as WithTimer } from 'patherns/examples/clipboard/clipboard-with-timer'
export { ClipboardWithStatusText as WithStatusText } from 'patherns/examples/clipboard/clipboard-with-status-text'
export { ClipboardWithStore as WithStore } from 'patherns/examples/clipboard/clipboard-with-store'
export { ClipboardRootProvider as RootProvider } from 'patherns/examples/clipboard/clipboard-root-provider'
