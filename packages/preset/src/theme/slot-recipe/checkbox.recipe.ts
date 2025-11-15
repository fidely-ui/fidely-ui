import { defineSlotRecipe } from '@pandacss/dev'
import { checkboxAnatomy } from '@ark-ui/react/anatomy'

export const checkboxSlotRecipe = defineSlotRecipe({
  className: 'fidely-checkbox',
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2',
      position: 'relative',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: '1px',
      borderColor: 'border.default',
      borderRadius: 's1',
      background: 'bg.default',
      color: 'colorPalette.fg',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      cursor: 'pointer',
      _hover: {
        background: 'bg.subtle',
      },
      _checked: {
        background: 'colorPalette.default',
        borderColor: 'colorPalette.default',
        _hover: {
          background: 'colorPalette.default',
        },
      },
      _indeterminate: {
        background: 'colorPalette.default',
        borderColor: 'colorPalette.default',
        _hover: {
          background: 'colorPalette.default',
        },
      },
      _invalid: {
        borderColor: 'fg.error',
        _focus: {
          borderColor: 'fg.error',
          boxShadow: '0 0 0 1px var(--colors-border-error)',
        },
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _icon: {
        boxSize: 'full',
      },
      '&:has(+ :focus-visible)': {
        outlineOffset: '2px',
        outline: '1.5px solid',
        outlineColor: 'border.outline',
        _checked: {
          outlineColor: 'colorPalette.default',
        },
      },
    },
    label: {
      color: 'fg.default',
      userSelect: 'none',
      fontWeight: 'medium',
      _disabled: { opacity: 0.4 },
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'full',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
  },
  variants: {
    size: {
      xs: {
        control: { boxSize: '3' },
        label: { textStyle: 'xs' },
        root: { gap: '1.5' },
      },
      sm: {
        control: { boxSize: '4' },
        label: { textStyle: 'sm' },
        root: { gap: '2' },
      },
      md: {
        control: { boxSize: '5' },
        label: { textStyle: 'sm' },
        root: { gap: '2.5' },
      },
      lg: {
        control: { boxSize: '6' },
        label: { textStyle: 'md' },
        root: { gap: '3' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
