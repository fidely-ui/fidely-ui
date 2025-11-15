import { Flex, Tabs } from '@fidely-ui/react'

export const TabsVariants = () => {
  const variants = ['outline', 'underline'] as const

  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={3}>
      {variants.map((variant) => (
        <Tabs.Root key={variant} variant={variant} defaultValue="teams">
          <Tabs.List>
            <Tabs.Trigger value="teams">Teams</Tabs.Trigger>
            <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="teams">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
          <Tabs.Content value="overview">
            Manage your teams overview
          </Tabs.Content>
        </Tabs.Root>
      ))}
    </Flex>
  )
}
