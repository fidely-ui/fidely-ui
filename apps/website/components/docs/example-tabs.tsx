import { Box } from '@snaps-ui/react/box'
import { Tabs } from '@snaps-ui/react/tabs'

import { ExamplePreview } from '~/components/docs/example-preview'
import { ExampleCode } from '~/components/docs/example-code'

export interface ExampleProps {
  name: string
  scope?: string
}

export const ExampleTabs = ({ name, scope }: ExampleProps) => (
  <Tabs.Root defaultValue="preview">
    <Tabs.List>
      <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
      <Tabs.Trigger value="code">Code</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="preview" mt="0!">
      <Box
        borderWidth={'1px'}
        borderColor={'border.subtle'}
        padding={{ base: '7', sm: '10' }}
        rounded={'s3'}
      >
        <ExamplePreview name={name} scope={scope} />
      </Box>
    </Tabs.Content>

    <Tabs.Content value="code">
      <ExampleCode name={name} scope={scope} />
    </Tabs.Content>
  </Tabs.Root>
)
