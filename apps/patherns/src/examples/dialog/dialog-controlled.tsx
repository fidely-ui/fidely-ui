'use client'

import { useState } from 'react'
import { Button, CloseButton, Dialog, Portal, Text } from '@snaps-ui/react'

export const DialogControlled = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} lazyMount>
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
            <Dialog.Body>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
                ullam? Delectus, minus! Incidunt laudantium, cum quae maiores
                dolore ducimus illo animi, deserunt optio facere dignissimos.
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
    </Dialog.Root>
  )
}
