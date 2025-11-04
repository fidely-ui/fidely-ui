import { Clipboard } from '@snaps-ui/react/clipboard'

export const ClipboardBasics = () => {
  return (
    <Clipboard.Root value="https://snaps-ui.vercel.app/">
      <Clipboard.Control>
        <Clipboard.Trigger>
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
