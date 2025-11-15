import { defineRecipe } from '@pandacss/dev'

export const paperRecipe = defineRecipe({
  className: 'fidely-paper',
  base: {
    borderRadius: 's3',
    p: 4,
  },

  variants: {
    variant: {
      filled: {
        bg: 'bg.default',
        borderWidth: '1px',
        borderColor: 'border.subtle',
        color: 'fg.default',
      },
      outline: {
        bg: 'transparent',
        borderWidth: '1px',
        borderColor: 'border.subtle',
      },
    },
    elevation: {
      0: { boxShadow: 'none' },
      1: { boxShadow: 'sm' },
      2: { boxShadow: 'md' },
      3: { boxShadow: 'lg' },
      4: { boxShadow: 'xl' },
    },
  },

  defaultVariants: {
    elevation: 1,
    variant: 'filled',
  },
})
