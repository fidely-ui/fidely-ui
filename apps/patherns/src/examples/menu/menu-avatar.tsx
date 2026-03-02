import { Avatar, Menu, Portal } from '@fidely-ui/react'

export const MenuAvatar = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        rounded="full"
        focusRing="outside"
        focusRingColor="orange.9"
      >
        <Avatar.Root>
          <Avatar.Fallback name="Justice Chimobi" />
          <Avatar.Image src="/justice-chimobi.jpeg" />
        </Avatar.Root>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="profile">View profile</Menu.Item>
            <Menu.Item value="preferences">Preferences</Menu.Item>
            <Menu.Item value="appearance">Appearance</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="help">Help & support</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
