import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'fidely-input',
  jsx: ['Input', 'FloatInput'],
  base: {
    appearance: 'none',
    borderWidth: '1px',
    background: 'none',
    borderRadius: 's2',
    borderColor: 'border.default',
    color: 'fg.default',
    outline: '0',
    position: 'relative',
    width: '100%',
    height: 'var(--input-height)',
    minW: 'var(--input-height)',
    minWidth: '0',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    textAlign: 'start',
    _disabled: {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
    _invalid: {
      borderColor: 'fg.error',
      _focus: {
        borderColor: 'fg.error',
        boxShadow: '0 0 0 1px var(--colors-border-error)',
      },
    },
  },
  variants: {
    variant: {
      outline: {
        bg: 'bg.surface',
        _focus: {
          borderColor: 'colorPalette.default',
          boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
        },
      },
      flushed: {
        bg: 'transparent',
        borderRadius: '0',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        _focus: {
          borderTop: '0',
          borderLeft: '0',
          borderRight: '0',
          borderColor: 'colorPalette.default',
        },
      },
      subtle: {
        bg: 'bg.subtle',
        _focus: {
          borderColor: 'colorPalette.default',
          boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
        },
      },
    },
    size: {
      '2xs': {
        '--input-height': 'sizes.7',
        textStyle: 'xs',
        px: '2',
      },
      xs: {
        '--input-height': 'sizes.8',
        textStyle: 'xs',
        px: '2',
      },
      sm: {
        '--input-height': 'sizes.9',
        textStyle: 'sm',
        px: '2.3',
      },
      md: {
        '--input-height': 'sizes.10',
        textStyle: 'sm',
        px: '3',
      },
      lg: {
        '--input-height': 'sizes.11',
        textStyle: 'md',
        px: '4',
      },
      xl: {
        '--input-height': 'sizes.12',
        textStyle: 'md',
        px: '4.6',
      },
      '2xl': {
        '--input-height': 'sizes.16',
        textStyle: 'lg',
        px: '5',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})
