'use client'

import { Button, CloseButton, Dialog, Portal } from '@fidely-ui/react'

export const DialogWithContext = () => {
  return (
    <Dialog.Root>
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
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Context>
              {(dialog) => (
                <Dialog.Body pt={6} spaceY={'3'}>
                  <p>Dialog is open: {dialog.open ? 'true' : 'false'}</p>
                  <p>click the button below to close</p>
                  <Button onClick={() => dialog.setOpen(false)}>Close</Button>
                </Dialog.Body>
              )}
            </Dialog.Context>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
