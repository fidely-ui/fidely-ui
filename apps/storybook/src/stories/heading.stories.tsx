import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Typography',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { HeadingBasic as Basics } from 'patherns/examples/heading/heading-basic'
export { HeadingSize as Size } from 'patherns/examples/heading/heading-size'
export { HeadingWithAs as As } from 'patherns/examples/heading/heading-with-as'
