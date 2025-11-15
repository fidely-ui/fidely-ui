import { Clipboard, IconButton, Input } from '@fidely-ui/react'
import { FaCheckDouble } from 'react-icons/fa6'
import { IoCopyOutline } from 'react-icons/io5'

export const ClipboardWithInput = () => {
  return (
    <Clipboard.Root value="https://fidely-ui.vercel.app/">
      <Clipboard.Label>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<FaCheckDouble />}>
              <IoCopyOutline />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
