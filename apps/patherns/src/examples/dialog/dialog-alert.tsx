import { Button, CloseButton, Dialog, Portal, Text } from '@snaps-ui/react'

export const DialogAlert = () => {
  return (
    <Dialog.Root role="alertdialog" size={'sm'}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton size={'sm'} />
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Are you sure?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Text>This action cannot be undone.</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseAction asChild>
                <Button variant={'outline'}>Cancel</Button>
              </Dialog.CloseAction>
              <Button colorPalette={'red'}>Save</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
