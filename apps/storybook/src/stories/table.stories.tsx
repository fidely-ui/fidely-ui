import type { Meta } from '@storybook/react-vite'
import { Box } from '@snaps-ui/react'

export default {
  title: 'Data Display/Table',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { TableBasics as Basics } from 'patherns/examples/table/table-basics'
export { TableSizes as Size } from 'patherns/examples/table/table-sizes'
export { TableVariants as Variant } from 'patherns/examples/table/table-variants'
export { TableHoverable as Hoverable } from 'patherns/examples/table/table-hoverable'
export { TableStrollArea as StrollArea } from 'patherns/examples/table/table-scroll-area'
export { TableWithCaption as WithCaption } from 'patherns/examples/table/table-with-caption'
