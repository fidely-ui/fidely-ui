import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Data Display/Kbd',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { KbdBasics as Basics } from 'patherns/examples/kbd/kbd-basics'
export { KbdSizes as Sizes } from 'patherns/examples/kbd/kbd-size'
export { KbdVarinats as Varinats } from 'patherns/examples/kbd/kbd-variant'
