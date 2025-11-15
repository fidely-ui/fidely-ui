import { defineSlotRecipe } from '@pandacss/dev'
import { fieldAnatomy } from '@ark-ui/react/anatomy'

export const fieldSlotRecipe = defineSlotRecipe({
  className: 'fidely-field',
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '1.6',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      color: 'fg.default',
      textStyle: 'sm',
      fontWeight: 'medium',
      gap: '1',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    errorText: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'medium',
      fontSize: 'xs',
      gap: '1',
      color: 'fg.error',
    },
    helperText: {
      color: 'fg.muted',
      fontSize: 'xs',
    },
    requiredIndicator: {
      color: 'fg.error',
      lineHeight: 1,
    },
  },
})
