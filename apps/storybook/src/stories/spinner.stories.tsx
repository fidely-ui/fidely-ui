import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Feedback/Spinner',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { SpinnerBasics as Basics } from 'patherns/examples/spinner/spinner-basics'
export { SpinnerWithSizes as Size } from 'patherns/examples/spinner/spinner-with-sizes'
export { SpinnerWithColor as Color } from 'patherns/examples/spinner/spinner-with-color'
