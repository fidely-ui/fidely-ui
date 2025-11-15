'use client'

import { Stack, Text, Tabs, useTabs } from '@fidely-ui/react'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'

export const TabsStore = () => {
  const tabs = useTabs({ defaultValue: 'teams' })

  return (
    <Stack alignItems="flex-start">
      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="teams">
            <LuUser />
            Teams
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <LuSquareCheck />
            Tasks
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="teams">Manage your team members</Tabs.Content>
        <Tabs.Content value="projects">Manage your projects</Tabs.Content>
        <Tabs.Content value="tasks">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.RootProvider>
      <Text>selected: {tabs.value}</Text>
    </Stack>
  )
}
