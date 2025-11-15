import { defineRecipe } from '@pandacss/dev'

export const commandInputRecipe = defineRecipe({
  className: 'fidely-command-input',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    w: 'full',
    borderWidth: '1px',
    borderColor: 'border.default',
    bg: 'bg.subtle',
    rounded: 'md',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    _hover: {
      bg: 'bg.surface',
    },
  },
  variants: {
    size: {
      '2xs': {
        h: '7',
        minH: '7',
        textStyle: 'xs',
        px: '2',
      },
      xs: {
        h: '8',
        minH: '8',
        textStyle: 'xs',
        px: '2',
      },
      sm: {
        h: '9',
        minH: '9',
        textStyle: 'sm',
        px: '2.3',
      },
      md: {
        h: '10',
        minH: '10',
        textStyle: 'sm',
        px: '3',
      },
      lg: {
        h: '11',
        minH: '11',
        textStyle: 'md',
        px: '4',
      },
      xl: {
        h: '12',
        minH: '12',
        textStyle: 'md',
        px: '4.6',
      },
      '2xl': {
        h: '16',
        minH: '16',
        textStyle: 'lg',
        px: '5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
