import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Utilities/ClientOnly',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ClientOnlyBasics as Basics } from 'patherns/examples/client-only/client-only-basics'
export { ClientOnlyFallback as Fallback } from 'patherns/examples/client-only/client-only-fallback'
