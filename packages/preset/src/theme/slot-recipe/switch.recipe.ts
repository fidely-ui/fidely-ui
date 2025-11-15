import { defineSlotRecipe } from '@pandacss/dev'
import { switchAnatomy } from '@ark-ui/react/anatomy'

export const switchSlotRecipe = defineSlotRecipe({
  className: 'fidely-switch',
  slots: switchAnatomy.keys(),
  jsx: ['Switch'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2',
      cursor: 'pointer',
    },
    label: {
      userSelect: 'none',
      fontWeight: 'medium',
      fontSize: 'sm',
      color: 'fg.default',
      _disabled: { opacity: 0.4 },
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      borderRadius: 'full',
      background: 'bg.emphasized',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      transitionProperty: 'background',
      transitionDuration: 'normal',
      cursor: 'pointer',
      _checked: {
        background: 'colorPalette.default',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
    thumb: {
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: 'calc(var(--switch-height) - 4px)',
      height: 'calc(var(--switch-height) - 4px)',
      borderRadius: 'full',
      background: 'bg.default',
      transitionProperty: 'transform, background',
      transitionDuration: 'normal',
      _checked: {
        transform:
          'translateX(calc(var(--switch-width) - var(--switch-height)))',
        background: { _light: 'bg.default', _dark: 'colorPalette.fg' },
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: { '--switch-width': 'sizes.6', '--switch-height': 'sizes.3' },
      },
      sm: {
        root: { '--switch-width': 'sizes.8', '--switch-height': 'sizes.4' },
      },
      md: {
        root: { '--switch-width': 'sizes.10', '--switch-height': 'sizes.5' },
      },
      lg: {
        root: { '--switch-width': 'sizes.12', '--switch-height': 'sizes.6' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
