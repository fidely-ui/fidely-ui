import { Tabs } from '@snaps-ui/react/tabs'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'

export const TabsManual = () => {
  return (
    <Tabs.Root defaultValue="members" activationMode="manual">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      {/* contents */}
    </Tabs.Root>
  )
}
