import { createAnatomy } from '@ark-ui/react/anatomy'
export { accordionAnatomy } from '@ark-ui/react/accordion'
export { avatarAnatomy } from '@ark-ui/react/avatar'
// export { comboboxAnatomy } from '@ark-ui/react/combobox'
export { checkboxAnatomy } from '@ark-ui/react/checkbox'
export { clipboardAnatomy } from '@ark-ui/react/clipboard'
// export { collapsibleAnatomy } from '@ark-ui/react/collapsible'
// export { colorPickerAnatomy } from '@ark-ui/react/color-picker'
import { dialogAnatomy as arkDialogAnatomy } from '@ark-ui/react/dialog'
// export { editableAnatomy } from '@ark-ui/react/editable'
export { fieldAnatomy } from '@ark-ui/react/field'
// export { fieldsetAnatomy } from '@ark-ui/react/fieldset'
// export { fileUploadAnatomy } from '@ark-ui/react/file-upload'
// export { hoverCardAnatomy } from '@ark-ui/react/hover-card'
// export { listboxAnatomy } from '@ark-ui/react/listbox'
// export { menuAnatomy } from '@ark-ui/react/menu'
// export { popoverAnatomy } from '@ark-ui/react/popover'
// export { radioGroupAnatomy } from '@ark-ui/react/radio-group'
export { switchAnatomy } from '@ark-ui/react/switch'
export { selectAnatomy } from '@ark-ui/react/select'
// export { sliderAnatomy } from '@ark-ui/react/slider'
// export { treeViewAnatomy } from '@ark-ui/react/tree-view'
// export { numberInputAnatomy } from '@ark-ui/react/number-input'
export { pinInputAnatomy } from '@ark-ui/react/pin-input'
// export { progressAnatomy } from '@ark-ui/react/progress'
// export { scrollAreaAnatomy } from '@ark-ui/react/scroll-area'
// export { tooltipAnatomy } from '@ark-ui/react/tooltip'
// export { tagsInputAnatomy } from '@ark-ui/react/tags-input'
export { tabsAnatomy } from '@ark-ui/react/tabs'

export const alertAnatomy = createAnatomy('alert').parts(
  'title',
  'description',
  'root',
  'indicator',
  'content'
)

export const cardAnatomy = createAnatomy('card').parts(
  'root',
  'header',
  'body',
  'footer',
  'title',
  'description'
)

export const tableAnatomy = createAnatomy('table').parts(
  'root',
  'body',
  'header',
  'headCell',
  'row',
  'cell',
  'footer',
  'caption',
  'scrollArea'
)

export const dialogAnatomy = arkDialogAnatomy.extendWith(
  'header',
  'body',
  'footer'
)
