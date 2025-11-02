import { defineRecipe } from '@pandacss/dev'

export const badgeRecipes = defineRecipe({
  className: 'snaps-badge',
  base: {
    colorPalette: 'gray',
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    borderWidth: '1px',
    borderRadius: 's2',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      outline: {
        borderColor: 'colorPalette.alpha7',
        color: 'colorPalette.text',
      },
      subtle: {
        background: 'bg.subtle',
        borderColor: 'border.subtle',
        color: 'colorPalette.text',
      },
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        px: '2.5',
        h: '5',
      },
      md: {
        textStyle: 'sm',
        px: '3',
        h: '6',
      },
      lg: {
        textStyle: 'md',
        px: '4',
        h: '7',
      },
      xl: {
        textStyle: 'md',
        px: '4.3',
        h: '8',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
