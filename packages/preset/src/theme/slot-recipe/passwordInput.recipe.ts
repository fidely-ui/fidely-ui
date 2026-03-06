import { defineSlotRecipe } from '@pandacss/dev'

import { inputRecipe } from '../recipe/input.recipe'
import { mapEntries } from '../../utils/entries'
import { passwordInputAnatomy } from '../../anatomy/index'

const { variants } = inputRecipe

export const passwordInputSlotRecipe = defineSlotRecipe({
  className: 'fidely-password-input',
  slots: passwordInputAnatomy.keys,
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
      '--default-color': 'colors.colorPalette.default',
      '--error-color': 'colors.border.error',

      _focusWithin: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--default-color)',
      },

      '&:has(input[data-invalid])': {
        borderColor: 'border.error',
        boxShadow: '0 0 0 1px var(--error-color)',
      },
    },
    input: {
      ...inputRecipe.base,
      flex: '1',
      minWidth: '0',
      border: 'none',
      _focus: {
        borderColor: 'transparent',
        boxShadow: 'none',
      },

      _invalid: {
        border: 'none',
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
      bg: 'transparent',
      borderTopRightRadius: 's2',
      borderBottomRightRadius: 's2',

      _hover: {
        background: 'colorPalette.alpha4',
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

      _icon: {
        width: '3.5',
        height: '3.5',
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
