import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    background: 'bg.surface',
    color: 'fg.default',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*::placeholder, *[data-placeholder]': {
    color: 'fg.muted/80',
  },
  '*::selection': {
    bg: 'colorPalette.emphasized/80',
    color: 'white',
  },
})
