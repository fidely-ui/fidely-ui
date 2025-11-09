import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

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

export { TypographyBasics as Basics } from 'patherns/examples/typography/typography-basics'
export { TypographyWithVariants as Variants } from 'patherns/examples/typography/typography-with-variants'
