import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Layout/Paper',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { PaperBasics as Basics } from 'patherns/examples/paper/paper-basics'
export { PaperVariant as Variant } from 'patherns/examples/paper/paper-variant'
export { PaperElevation as Elevation } from 'patherns/examples/paper/paper-elevation'
