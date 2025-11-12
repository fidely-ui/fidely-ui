import { defineRecipe } from '@pandacss/dev'

export const floatLabelRecipe = defineRecipe({
  className: 'snaps-float-label',
  description: 'Recipe for floating input labels',
  base: {
    position: 'absolute',
    px: '1',
    top: '50%',
    insetStart: '3',
    pointerEvents: 'none',
    fontWeight: 'normal',
    transform: 'translateY(-50%)',
    color: 'fg.muted',
    transition: 'all 0.2s ease',
    borderRadius: 'sm',
  },
  variants: {
    float: {
      true: {
        top: '0',
        insetStart: '2',
        color: 'fg.defailt',
        fontSize: 'xs',
        bg: 'bg.default',
        transform: 'translateY(-50%) scale(0.9)',
      },
    },
    size: {
      '2xs': {
        textStyle: 'xs',
      },
      xs: {
        textStyle: 'xs',
      },
      sm: {
        textStyle: 'sm',
      },
      md: {
        textStyle: 'sm',
      },
      lg: {
        textStyle: 'md',
      },
      xl: {
        textStyle: 'md',
      },
      '2xl': {
        textStyle: 'lg',
      },
    },
  },
})
