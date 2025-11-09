import { defineRecipe } from '@pandacss/dev'

import { headingRecipe } from './heading.recipe'
import { mapEntries } from '../../utils/entries'

const { variants } = headingRecipe

export const textRecipe = defineRecipe({
  className: 'snaps-text',
  jsx: ['Text'],
  description: 'Snaps UI Text',

  variants: {
    size: mapEntries(variants!.size, (key, value) => [key, { ...value }]),
  },
})
