import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

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
export { FormatRelativeTimeExample as RelativeTime } from 'patherns/examples/format/format-relative-time'
