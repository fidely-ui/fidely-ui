import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Field',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { FieldBasics as Basics } from 'patherns/examples/field/field-basics'
export { FieldDisabled as Disabled } from 'patherns/examples/field/field-disabled'
export { FieldError as ErrorText } from 'patherns/examples/field/field-error'
export { FieldHelper as HelperText } from 'patherns/examples/field/field-helper'
export { FieldTextarea as Textarea } from 'patherns/examples/field/field-textarea'
