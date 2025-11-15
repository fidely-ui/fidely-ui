import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Utilities/formats',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { FormatBytes as Bytes } from 'patherns/examples/format/format-bytes'
export { FormatNumber as Number } from 'patherns/examples/format/format-number'
export { FormatRelativeTime as RelativeTime } from 'patherns/examples/format/format-relative-time'
