import { defineRecipe } from '@pandacss/dev'

export const skeletonRecipe = defineRecipe({
  className: 'fidely-skeleton',
  base: {
    animation: 'skeleton-pulse',
    backgroundClip: 'padding-box',
    backgroundColor: 'gray.alpha4',
    borderRadius: 's3',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
})
