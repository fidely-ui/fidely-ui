import { Tabs } from '@fidely-ui/react/tabs'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'

export const TabsDisabled = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks" disabled>
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
  )
}
