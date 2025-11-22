import { defineSlotRecipe } from '@pandacss/dev'
import { comboboxAnatomy } from '../../anatomy'

import { inputRecipe } from '../recipe/input.recipe'

export const comboboxSlotRecipe = defineSlotRecipe({
  className: 'fidely-combobox',
  slots: comboboxAnatomy.keys(),
  description: 'Styles for the Fidely UI Combobox component',

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },

    label: {
      color: 'fg.default',
      textStyle: 'sm',
      fontWeight: 'medium',
    },

    control: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      px: '1.5',

      borderWidth: '1px',
      borderColor: 'border.default',
      borderRadius: 's2',
      bg: 'bg.surface',

      _focusWithin: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },

    input: {
      ...inputRecipe.base,
      flex: 1,
      minWidth: 0,

      minH: 'var(--combobox-input-height)',
      '--input-height': 'var(--combobox-input-height)',

      bg: 'bg.surface',
      border: 'none',

      _focus: {
        border: 'none',
        boxShadow: 'none',
      },

      _invalid: {
        border: 'none',
      },
    },

    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      cursor: 'pointer',
      gap: '1.5',

      userSelect: 'none',
      flex: 1,

      py: 'var(--combobox-item-padding-y)',
      px: 'var(--combobox-item-padding-x)',
      borderRadius: 's1',

      _hover: {
        bg: 'gray.alpha2',
      },

      _highlighted: {
        bg: 'gray.alpha3',
      },

      _disabled: {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
    },

    itemText: {
      flex: 1,
      textStyle: 'sm',
    },

    itemIndicator: {
      color: 'colorPalette.default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    itemGroupLabel: {
      px: '3',
      py: '2',
      fontWeight: 'medium',
      textStyle: 'xs',
      color: 'fg.muted',
    },

    clearTrigger: {
      color: 'fg.muted',
      rounded: 's1',
      cursor: 'pointer',

      _hover: {
        bg: 'gray.alpha2',
      },
    },

    content: {
      bg: 'bg.default',
      display: 'flex',
      flexDirection: 'column',

      borderRadius: 's2',
      outline: 0,
      boxShadow: 'md',

      maxH: '64',
      overflowY: 'auto',
      zIndex: 'dropdown',

      _open: {
        animation: 'fadeIn 0.2s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },

    empty: {
      textStyle: 'sm',
      px: '3',
      py: '2',
      color: 'fg.muted',
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1',
      textStyle: 'sm',

      '[data-disabled] &': {
        opacity: 0.4,
      },
    },
  },

  variants: {
    size: {
      xs: {
        root: {
          '--combobox-input-height': 'sizes.8',
          '--combobox-item-padding-y': '2',
          '--combobox-item-padding-x': '3.4',
        },
        input: {
          textStyle: 'xs',
        },
        content: {
          '--combobox-item-padding-x': 'spacing.1.5',
          '--combobox-item-padding-y': 'spacing.1',
          p: '1',
          textStyle: 'xs',
        },
      },

      sm: {
        root: {
          '--combobox-input-height': 'sizes.9',
          '--combobox-item-padding-y': '2.5',
          '--combobox-item-padding-x': '3.9',
        },
        input: {
          textStyle: 'sm',
        },
        content: {
          '--combobox-item-padding-x': 'spacing.2',
          '--combobox-item-padding-y': 'spacing.1.5',
          p: '1',
          textStyle: 'sm',
        },
      },

      md: {
        root: {
          '--combobox-input-height': 'sizes.10',
          '--combobox-item-padding-y': '3',
          '--combobox-item-padding-x': '4',
        },
        input: {
          textStyle: 'sm',
        },
        content: {
          '--combobox-item-padding-x': 'spacing.2',
          '--combobox-item-padding-y': 'spacing.1.5',
          p: '1',
          textStyle: 'sm',
        },
      },

      lg: {
        root: {
          '--combobox-input-height': 'sizes.12',
          '--combobox-item-padding-y': '3',
          '--combobox-item-padding-x': '4.9',
        },
        input: {
          textStyle: 'md',
        },
        content: {
          '--combobox-item-padding-y': 'spacing.2',
          '--combobox-item-padding-x': 'spacing.3',
          p: '1.5',
          textStyle: 'md',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
