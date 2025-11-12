import { defineRecipe } from '@pandacss/dev'

export const kbdRecipe = defineRecipe({
  className: 'snaps-kbd',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: '0',
    whiteSpace: 'nowrap',
    fontWeight: 'normal',
    userSelect: 'none',
    px: '1',
    borderRadius: 's2',
  },
  variants: {
    variant: {
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.alpha7',
        color: 'colorPalette.text',
      },
      subtle: {
        background: 'colorPalette.alpha3',
        color: 'colorPalette.text',
      },
      face: {
        background: 'bg.subtle',
        color: 'colorPalette.default',
        borderWidth: '1px',
        borderBottomWidth: '2px',
        borderColor: 'border.muted',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        minHeight: '5',
      },
      md: {
        textStyle: 'sm',
        minHeight: '7',
      },
      lg: {
        textStyle: 'md',
        minHeight: '9',
      },
    },
  },
  defaultVariants: {
    variant: 'face',
    size: 'md',
  },
})
