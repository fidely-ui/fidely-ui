import { defineRecipe } from '@pandacss/dev'

export const inputAddonRecipe = defineRecipe({
  className: 'fidely-input-addon',
  jsx: ['InputAddon'],
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'bg.surface',
    color: 'fg.muted',
    borderWidth: '1px',
    borderColor: 'border.default',
    px: '3',
    height: 'var(--input-height)',
    whiteSpace: 'nowrap',
    textStyle: 'sm',
    transition: 'background 0.2s, border-color 0.2s',
  },
  variants: {
    placement: {
      left: {
        borderRightWidth: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      },
      right: {
        borderLeftWidth: '0',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
      },
    },
  },
  defaultVariants: {
    placement: 'left',
  },
})
