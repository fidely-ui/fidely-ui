import { Clipboard } from '@fidely-ui/react/clipboard'

export const ClipboardBasics = () => {
  return (
    <Clipboard.Root value="https://fidely-ui.vercel.app/">
      <Clipboard.Control>
        <Clipboard.Trigger>
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
