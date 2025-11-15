import { Stack, Tabs } from '@fidely-ui/react'

export const TabsSizes = () => {
  const sizes = ['sm', 'md', 'lg'] as const

  return (
    <Stack gap={6}>
      {sizes.map((size) => (
        <Tabs.Root key={size} size={size} defaultValue="teams">
          <Tabs.List bg={'bg.muted'} rounded={'s2'}>
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
    </Stack>
  )
}
