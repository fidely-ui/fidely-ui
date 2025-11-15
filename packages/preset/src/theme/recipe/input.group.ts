import { defineRecipe } from '@pandacss/dev'

import { inputRecipe } from '../recipe/input.recipe'
import { mapEntries } from '../../utils/entries'

const { variants, defaultVariants } = inputRecipe

export const inputGroupRecipe = defineRecipe({
  className: 'fidely-input-group',
  jsx: ['InputGroup'],
  base: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    width: '100%',

    '& > input, & > .fidely-input': {
      flex: 1,
      borderRadius: '0',
      borderWidth: '1px',
      borderColor: 'border.default',
      background: 'bg.surface',
      _focusWithin: {
        zIndex: 1,
      },
      _invalid: {
        borderColor: 'fg.error',
        _focus: {
          borderColor: 'fg.error',
          boxShadow: '0 0 0 1px var(--colors-border-error)',
        },
      },
    },

    '& > :first-child': {
      borderTopLeftRadius: 's2',
      borderBottomLeftRadius: 's2',
    },
    '& > :last-child': {
      borderTopRightRadius: 's2',
      borderBottomRightRadius: 's2',
    },
  },

  variants: {
    variant: mapEntries(variants!.variant, (key, value) => [
      key,
      { input: value },
    ]),
    size: mapEntries(variants!.size, (key, value) => [
      key,
      { input: { ...value, px: '0' } },
    ]),
  },

  defaultVariants,
})
