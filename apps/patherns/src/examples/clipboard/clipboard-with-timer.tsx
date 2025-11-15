import { Clipboard } from '@fidely-ui/react'

export const ClipboardWithTimer = () => {
  return (
    <Clipboard.Root value="https://fidely-ui.vercel.app/" timeout={2000}>
      <Clipboard.Control>
        <Clipboard.Trigger>
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
