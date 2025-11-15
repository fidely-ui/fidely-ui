import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Avatar',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { AvatarBasics as Basics } from 'patherns/examples/avatar/avatar-basics'
export { AvatarFallback as Fallback } from 'patherns/examples/avatar/avatar-fallback'
export { AvatarGroupBasics as GroupBasics } from 'patherns/examples/avatar/avatar-group-basics'
export { AvatarGroupSpace as GroupSpace } from 'patherns/examples/avatar/avatar-group-space'
export { AvatarSizes as Sizes } from 'patherns/examples/avatar/avatar-sizes'
