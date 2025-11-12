import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Portal,
  Text,
} from '@snaps-ui/react'

export const DialogSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <HStack gap={3}>
      {sizes.map((size) => (
        <Dialog.Root size={size} key={size}>
          <Dialog.Trigger asChild>
            <Button variant="outline" size={size}>
              Open Dialog ({size})
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
        </Dialog.Root>
      ))}
    </HStack>
  )
}
