import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Feedback/IconButton',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { IconButtonBasics as Basics } from 'patherns/examples/icon-button/icon-button-basics'
export { IconButtonVariant as Variant } from 'patherns/examples/icon-button/icon-button-variant'
export { IconButtonSize as Size } from 'patherns/examples/icon-button/icon-button-size'
