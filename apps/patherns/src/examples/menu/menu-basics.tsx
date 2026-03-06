import { Button, Flex, HStack, Menu, Portal } from '@fidely-ui/react'
import { CiGrid42, CiSettings, CiViewList } from 'react-icons/ci'
import { MdKeyboardCommandKey } from 'react-icons/md'

export const MenuBasics = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Open menu <Menu.Indicator />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="160px">
            <Menu.Arrow>
              <Menu.ArrowTip />
            </Menu.Arrow>

            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Workspace</Menu.ItemGroupLabel>
              <Menu.Separator />

              <Menu.Item value="dashboard">
                <Flex justify="space-between" align="center" width="full">
                  <HStack>
                    <CiGrid42 /> Dashboard
                  </HStack>
                  <HStack gap="0">
                    <MdKeyboardCommandKey /> D
                  </HStack>
                </Flex>
              </Menu.Item>

              <Menu.Item value="projects">
                <HStack>
                  <CiViewList /> Projects
                </HStack>
              </Menu.Item>

              <Menu.Item value="preferences">
                <Flex justify="space-between" align="center" width="full">
                  <HStack>
                    <CiSettings /> Preferences
                  </HStack>
                  <HStack gap="0">
                    <MdKeyboardCommandKey /> P
                  </HStack>
                </Flex>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
