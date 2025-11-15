import { Button, Clipboard } from '@fidely-ui/react'

export const ClipboardWithStatusText = () => {
  return (
    <Clipboard.Root value="https://fidely-ui.vercel.app/">
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <Button>
            <Clipboard.Indicator />
            <Clipboard.Status />
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
