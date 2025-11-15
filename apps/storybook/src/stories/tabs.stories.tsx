import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Disclosure/Tabs',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { TabsBasics as Basics } from 'patherns/examples/tabs/tabs-basics'
export { TabsVariants as Variant } from 'patherns/examples/tabs/tabs-variants'
export { TabsSizes as Size } from 'patherns/examples/tabs/tabs-sizes'
export { TabsDisabled as Disabled } from 'patherns/examples/tabs/tabs-disabled'
export { TabsControlled as Controlled } from 'patherns/examples/tabs/tabs-controlled'
export { TabsLinks as Link } from 'patherns/examples/tabs/tabs-links'
export { TabsStore as Store } from 'patherns/examples/tabs/tabs-store'
