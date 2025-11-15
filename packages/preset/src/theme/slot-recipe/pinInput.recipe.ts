import { defineSlotRecipe } from '@pandacss/dev'
import { pinInputAnatomy } from '@ark-ui/react/anatomy'

import { inputRecipe } from '../recipe/input.recipe'
import { mapEntries } from '../../utils/entries'

const { variants, defaultVariants } = inputRecipe

export const pinInputSlotRecipe = defineSlotRecipe({
  className: 'fidely-pin-input',
  slots: pinInputAnatomy.keys(),

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.6',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
    input: {
      ...inputRecipe.base,
      textAlign: 'center',
      alignItems: 'center',
      width: 'var(--input-height)',
    },
    label: {
      color: 'fg.default',
      textStyle: 'sm',
      fontWeight: 'medium',
    },
  },

  variants: {
    variant: mapEntries(variants!.variant, (key, value) => [
      key,
      { input: value },
    ]),
    size: mapEntries(variants!.size, (key, value) => [
      key,
      { input: { ...value, px: '1' } },
    ]),
  },

  defaultVariants,
})
