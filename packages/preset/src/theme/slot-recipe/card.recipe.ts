import { defineSlotRecipe } from '@pandacss/dev'

import { cardAnatomy } from '../../anatomy'

export const cardSlotRecipe = defineSlotRecipe({
  className: 'snaps-card',
  slots: cardAnatomy.keys(),
  base: {
    root: {
      background: 'bg.default',
      borderRadius: 's3',
      boxShadow: 'sm',
      position: 'relative',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      px: '5',
      py: '5',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2',
      gap: '2',
    },
    title: {
      color: 'fg.default',
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '2',
      gap: '2',
    },
  },
})
