import { defineSlotRecipe } from '@pandacss/dev'
import { passwordInputAnatomy } from '@ark-ui/react/anatomy'

import { inputRecipe } from '../recipe/input.recipe'
import { mapEntries } from '../../utils/entries'

const { variants } = inputRecipe

export const passwordInputSlotRecipe = defineSlotRecipe({
  className: 'fidely-password-input',
  slots: passwordInputAnatomy.keys(),
  description: 'Styles for the Fidely UI Password Input component',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.6',
    },
    control: {
      display: 'flex',
      borderWidth: '1px',
      borderColor: 'border.default',
      borderRadius: 's2',

      _focusWithin: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },
    input: {
      ...inputRecipe.base,
      flex: '1',
      minWidth: '0',
      bg: 'bg.surface',

      border: 'none',
      _focus: {
        borderColor: 'transparent',
        boxShadow: 'none',
      },

      _invalid: {
        color: 'fg.error',
        border: 'none',
        _focus: {
          borderColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    label: {
      color: 'fg.default',
      textStyle: 'sm',
      fontWeight: 'medium',
    },
    visibilityTrigger: {
      cursor: 'pointer',
      height: 'var(--input-height)',
      display: 'inline-flex',
      alignItems: 'center',
      color: 'colorPalette.text',

      borderRadius: '0',
      borderTopRightRadius: 's2',
      borderBottomRightRadius: 's2',

      _hover: {
        background: 'colorPalette.alpha3',
      },

      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          background: 'transparent',
          color: 'fg.disabled',
        },
      },
      _focusVisible: {
        outline: 'none',
      },
    },
  },
  variants: {
    size: mapEntries(variants!.size, (key, value) => [
      key,
      {
        input: { ...value, px: '3' },
        visibilityTrigger: { ...value, px: '3' },
      },
    ]),
  },
  defaultVariants: {
    size: 'md',
  },
})
