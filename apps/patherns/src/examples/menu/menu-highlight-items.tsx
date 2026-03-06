import { Button, Flex, HStack, Menu, Portal } from '@fidely-ui/react'
import { CiGrid42, CiSettings, CiViewList } from 'react-icons/ci'
import { MdKeyboardCommandKey } from 'react-icons/md'

export const MenuHighlightItems = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Highlight Items</Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="160px">
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Workspace</Menu.ItemGroupLabel>
              <Menu.Separator />

              <Menu.Item
                value="dashboard"
                _highlighted={{ bg: 'amber.5', color: 'white' }}
              >
                <Flex justify="space-between" align="center" width="full">
                  <HStack>
                    <CiGrid42 /> Dashboard
                  </HStack>
                  <HStack gap="0">
                    <MdKeyboardCommandKey /> D
                  </HStack>
                </Flex>
              </Menu.Item>

              <Menu.Item
                value="projects"
                _highlighted={{ bg: 'amber.5', color: 'white' }}
              >
                <HStack>
                  <CiViewList /> Projects
                </HStack>
              </Menu.Item>

              <Menu.Item
                value="preferences"
                _highlighted={{ bg: 'amber.5', color: 'white' }}
              >
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
