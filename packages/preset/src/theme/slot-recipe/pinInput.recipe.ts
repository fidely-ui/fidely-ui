import { defineSlotRecipe } from '@pandacss/dev'

import { pinInputAnatomy } from '../../anatomy/index'
import { inputRecipe } from '../recipe/input.recipe'
import { mapEntries } from '../../utils/entries'

const { variants, defaultVariants } = inputRecipe

export const pinInputSlotRecipe = defineSlotRecipe({
  className: 'fidely-pin-input',
  slots: pinInputAnatomy.keys,
  description: 'Styles for the Fidely UI PinInput component',

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
    group: {
      display: 'flex',
      alignItems: 'center',
      verticalAlign: 'middle',
      gap: '0',

      '& > input': {
        borderRadius: '0',
        marginLeft: '-1px',
        _focusVisible: {
          zIndex: '1',
        },
        '&:first-of-type': {
          borderStartRadius: 's2',
        },
        '&:last-of-type': {
          borderEndRadius: 's2',
        },
      },
    },
    separator: {
      display: 'block',
      border: 'none',
      bg: 'border.default',
      height: '1.5px',
      width: '4',
      mx: '1',
      alignSelf: 'center',
      flexShrink: 0,
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
