import { defineRecipe } from '@pandacss/dev'

export const toastRecipe = defineRecipe({
  className: 'fidely-toast',
  base: {
    display: 'flex',
    borderRadius: 's3',
    overflow: 'hidden',
    width: '100%',
    shadow: 'sm',
    zIndex: '9999',
    bg: 'bg.default',
  },
  variants: {
    status: {
      success: {
        '--status-color': '#039855',
      },
      error: {
        '--status-color': '#EF4444',
      },
      warning: {
        '--status-color': '#FACC15',
      },
    },
  },
  defaultVariants: {
    status: 'success',
  },
})
