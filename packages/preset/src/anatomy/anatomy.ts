import { anatomy } from './anatomy-factory'

export const accordionAnatomy = anatomy('accordion').parts(
  'root',
  'item',
  'itemTrigger',
  'itemContent',
  'itemIndicator'
)

export const avatarAnatomy = anatomy('avatar').parts(
  'root',
  'image',
  'fallback'
)

export const checkboxAnatomy = anatomy('checkbox').parts(
  'root',
  'control',
  'label',
  'indicator',
  'group'
)

export const clipboardAnatomy = anatomy('clipboard').parts(
  'root',
  'control',
  'label',
  'indicator',
  'input',
  'trigger'
)

export const cardAnatomy = anatomy('card').parts(
  'root',
  'header',
  'body',
  'footer',
  'title',
  'description'
)

export const comboboxAnatomy = anatomy('combobox').parts(
  'root',
  'item',
  'itemIndicator',
  'content',
  'trigger',
  'indicatorGroup',
  'positioner',
  'list',
  'itemGroup',
  'control',
  'label',
  'input',
  'clearTrigger',
  'itemGroupLabel',
  'itemText',
  'empty'
)

export const dialogAnatomy = anatomy('dialog').parts(
  'title',
  'description',
  'content',
  'header',
  'body',
  'footer',
  'trigger',
  'backdrop',
  'positioner',
  'closeTrigger',
  'header',
  'body',
  'footer'
)

export const fieldAnatomy = anatomy('field').parts(
  'root',
  'select',
  'label',
  'input',
  'errorText',
  'helperText',
  'textarea',
  'requiredIndicator'
)

export const hoverCardAnatomy = anatomy('hover-card').parts(
  'content',
  'trigger',
  'positioner',
  'arrowTip',
  'arrow'
)

export const marqueeAnatomy = anatomy('marquee').parts(
  'root',
  'item',
  'content',
  'viewport',
  'edge'
)

export const menuAnatomy = anatomy('menu').parts(
  'item',
  'content',
  'indicator',
  'itemGroup',
  'itemGroupLabel',
  'itemIndicator',
  'itemText',
  'triggerItem',
  'separator',
  'positioner',
  'contextTrigger',
  'arrowTip',
  'arrow',
  'triggerItem',
  'trigger'
)

export const tableAnatomy = anatomy('table').parts(
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

export const tabsAnatomy = anatomy('tabs').parts(
  'root',
  'indicator',
  'content',
  'trigger',
  'list'
)

export const passwordInputAnatomy = anatomy('password-input').parts(
  'root',
  'control',
  'label',
  'input',
  'indicator',
  'visibilityTrigger'
)

export const pinInputAnatomy = anatomy('pin-input').parts(
  'root',
  'control',
  'label',
  'input',
  'separator',
  'group'
)

export const popoverAnatomy = anatomy('popover').parts(
  'anchor',
  'trigger',
  'closeTrigger',
  'positioner',
  'title',
  'content',
  'description',
  'arrowTip',
  'arrow',
  'indicator'
)

export const profileAnatomy = anatomy('profile').parts(
  'root',
  'avatarWrapper',
  'details',
  'name',
  'title'
)

export const selectAnatomy = anatomy('select').parts(
  'root',
  'item',
  'itemIndicator',
  'indicator',
  'content',
  'trigger',
  'indicatorGroup',
  'itemGroupLabel',
  'positioner',
  'list',
  'itemGroup',
  'control',
  'label',
  'clearTrigger',
  'itemGroupLabel',
  'itemText',
  'control',
  'valueText'
)

export const switchAnatomy = anatomy('switch').parts(
  'root',
  'control',
  'label',
  'thumb'
)
