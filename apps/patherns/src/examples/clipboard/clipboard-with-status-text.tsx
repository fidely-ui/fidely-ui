import { Button, Clipboard } from '@snaps-ui/react'

export const ClipboardWithStatusText = () => {
  return (
    <Clipboard.Root value="https://snaps-ui.vercel.app/">
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
