import { Box } from '@fidely-ui/react/box'
import { Tabs } from '@fidely-ui/react/tabs'
import { Grid, GridItem } from '@fidely-ui/react/grid'

import {
  TeamMembers,
  PaymentMethod,
  BillingAddress,
  TabsExample,
  ProcessingCard,
  MoreComponents,
} from '~/components/examples/examples'
import { AuthenticationExample } from '~/components/examples/authentication'
import { DashboardExample } from '~/components/examples/dashboard-example'
import { Heading, Text } from '@fidely-ui/react'

const exampleComponents = [
  BillingAddress,
  PaymentMethod,
  MoreComponents,
  ProcessingCard,
  TabsExample,
  TeamMembers,
]

export const ExampleSection = () => {
  return (
    <Box minH="auto" width={'90%'} mx={'auto'} mt="6" mb="3">
      <Box mb="5">
        <Heading
          as="h4"
          textStyle={{ base: '2xl', md: '3xl' }}
          mb="5px"
          fontWeight="semibold"
        >
          Components built for modern React apps
        </Heading>

        <Text color={'fg.muted'}>
          Accessible, theme ready, and designed to scale with your product
        </Text>
      </Box>

      <Tabs.Root variant="underline" defaultValue="authentication">
        <Tabs.List>
          {['authentication', 'dashboard', 'examples'].map((tab) => (
            <Tabs.Trigger
              key={tab}
              value={tab}
              _selected={{ color: 'orange.9' }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="authentication" width={'100%'}>
          <AuthenticationExample />
        </Tabs.Content>

        <Tabs.Content value="dashboard">
          <DashboardExample />
        </Tabs.Content>

        <Tabs.Content value="examples">
          <Grid
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={{ base: '2', md: '3' }}
          >
            {exampleComponents.map((Component, i) => (
              <GridItem
                key={i}
                height="min-content"
                width={{ base: '90%', md: '100%' }}
              >
                <Component />
              </GridItem>
            ))}
          </Grid>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
