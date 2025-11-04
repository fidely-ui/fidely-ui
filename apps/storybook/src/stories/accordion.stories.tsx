import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Disclosure/Accordion',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { AccordionBasics as Basics } from 'patherns/examples/accordion/accordion-basics'
export { AccordionCollapsible as Collapsible } from 'patherns/examples/accordion/accordion-collapsible'
export { AccordionDefaultValue as DefaultValue } from 'patherns/examples/accordion/accordion-default-value'
export { AccordionMultiple as Multiple } from 'patherns/examples/accordion/accordion-multiple'
export { AccordionSize as Sizes } from 'patherns/examples/accordion/accordion-size'
export { AccordioVariant as Variants } from 'patherns/examples/accordion/accordion-variant'
