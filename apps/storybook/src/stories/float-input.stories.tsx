import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Form/FloatInput',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { FloatInputBasics as Basics } from 'patherns/examples/float-input/float-input-basics'
export { FloatWithSize as Size } from 'patherns/examples/float-input/float-with-size'
export { FloatWithDisabled as Disabled } from 'patherns/examples/float-input/float-with-disabled'
export { FloatWithError as ErrorText } from 'patherns/examples/float-input/float-with-error'
export { FloatWithHelper as HelperText } from 'patherns/examples/float-input/float-with-helper'
