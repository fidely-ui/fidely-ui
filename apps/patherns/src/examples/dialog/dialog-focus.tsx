'use client'

import { useRef } from 'react'
import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
} from '@snaps-ui/react'

export const DialogFocus = () => {
  const ref = useRef<HTMLInputElement | null>(null)

  return (
    <Dialog.Root initialFocusEl={() => ref.current}>
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
              <Dialog.Title>Login Form</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap="4">
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="Enter email Address" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Password</Field.Label>
                  <Input
                    ref={ref}
                    placeholder="Enter password"
                    type="password"
                  />
                </Field.Root>
              </Stack>
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
