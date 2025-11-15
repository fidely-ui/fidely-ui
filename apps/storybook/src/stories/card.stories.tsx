import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Card',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { CardDemo as Demo } from 'patherns/examples/card/card-demo'
export { CardWithAvatar as WithAvatar } from 'patherns/examples/card/card-with-avatar'
export { CardForm as Form } from 'patherns/examples/card/card-form'
