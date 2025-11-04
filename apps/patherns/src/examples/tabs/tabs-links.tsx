import { Tabs } from '@snaps-ui/react/tabs'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'

export const TabsLinks = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members" asChild>
          <a href="#members">
            <LuUser />
            Members
          </a>
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" asChild>
          <a href="#projects">
            <LuFolder />
            Projects
          </a>
        </Tabs.Trigger>
        <Tabs.Trigger value="settings" asChild>
          <a href="#settings">
            <LuSquareCheck />
            Settings
          </a>
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      {/* contents */}
    </Tabs.Root>
  )
}
