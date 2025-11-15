'use client'

import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Portal,
  Text,
  useDialog,
} from '@fidely-ui/react'

export const DialogWithStore = () => {
  const dialog = useDialog()

  return (
    <HStack gap={3}>
      <Button onClick={() => dialog.setOpen(true)}>Open outside</Button>

      <Dialog.RootProvider value={dialog}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open Dialog within</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger asChild>
                <CloseButton size={'sm'} />
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque, ullam? Delectus, minus! Incidunt laudantium, cum quae
                  maiores dolore ducimus illo animi, deserunt optio facere
                  dignissimos.
                </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.CloseAction asChild>
                  <Button variant={'outline'}>Cancel</Button>
                </Dialog.CloseAction>
                <Button>Save</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>
    </HStack>
  )
}
