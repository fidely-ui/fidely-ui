import { defineRecipe } from '@pandacss/dev'

export const spinnerRecipe = defineRecipe({
  className: 'fidely-spinner',
  base: {
    display: 'inline-block',
    borderStyle: 'solid',
    borderRadius: 'full',
    borderWidth: '2px',
    width: 'var(--size)',
    height: 'var(--size)',
    borderColor: 'colorPalette.default',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    animation: 'spin 0.6s linear infinite',
  },
  variants: {
    size: {
      xs: { '--size': 'sizes.3' },
      sm: { '--size': 'sizes.4' },
      md: { '--size': 'sizes.6' },
      lg: { '--size': 'sizes.8' },
      xl: { '--size': 'sizes.12' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
