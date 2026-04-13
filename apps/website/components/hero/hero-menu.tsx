'use client'

import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { HStack, Stack } from '@fidely-ui/react/stack'
import { Menu } from '@fidely-ui/react/menu'
import { Portal } from '@fidely-ui/react/portal'
import { Text } from '@fidely-ui/react/text'
import { CiGrid42, CiSettings, CiViewList } from 'react-icons/ci'
import { MdKeyboardCommandKey } from 'react-icons/md'

export const HeroMenu = () => {
  return (
    <Stack>
      <Text>Menu</Text>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Open menu</Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="160px">
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Workspace</Menu.ItemGroupLabel>
                <Menu.Separator />

                <Menu.Item value="dashboard">
                  <Flex justify="space-between" width="full" align="center">
                    <HStack>
                      <CiGrid42 /> Dashboard
                    </HStack>
                    <MdKeyboardCommandKey />
                  </Flex>
                </Menu.Item>

                <Menu.Item value="projects">
                  <HStack>
                    <CiViewList /> Projects
                  </HStack>
                </Menu.Item>

                <Menu.Item value="preferences">
                  <Flex justify="space-between" width="full" align="center">
                    <HStack>
                      <CiSettings /> Preferences
                    </HStack>
                    <MdKeyboardCommandKey />
                  </Flex>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Stack>
  )
}
