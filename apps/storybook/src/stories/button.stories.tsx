import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Feedback/Button',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ButtonBasics as Basics } from 'patherns/examples/button/button-basics'
export { ButtonVariant as Variant } from 'patherns/examples/button/button-variant'
export { ButtonSize as Size } from 'patherns/examples/button/button-size'
export { ButtonRipple as Ripple } from 'patherns/examples/button/button-ripple'
export { ButtonAsLink as AsLink } from 'patherns/examples/button/button-as-link'
export { ButtonCustomSpinner as CustomSpinner } from 'patherns/examples/button/button-custom-spinner'
export { ButtonSpinnerPlacement as SpinnerPlacement } from 'patherns/examples/button/button-spinner-placement'
