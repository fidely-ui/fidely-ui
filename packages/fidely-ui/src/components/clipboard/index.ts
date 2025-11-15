export {
  ClipboardRoot,
  ClipboardRootProvider,
  ClipboardControl,
  ClipboardIndicator,
  ClipboardTrigger,
  ClipboardLabel,
  ClipboardInput,
  ClipboardStatus,
  ClipboardContext,
} from './clipboard'

export type {
  ClipboardRootProps,
  ClipboardRootProviderProps,
  ClipboardControlProps,
  ClipboardIndicatorProps,
  ClipboardTriggerProps,
  ClipboardLabelProps,
  ClipboardInputProps,
  ClipboardCopyStatusDetails,
} from './clipboard'

export { useClipboard, useClipboardContext } from '@ark-ui/react/clipboard'

export type {
  UseClipboardProps,
  UseClipboardReturn,
} from '@ark-ui/react/clipboard'

export * as Clipboard from './namespace'
