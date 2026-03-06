import { defineSlotRecipe } from '@pandacss/dev'

import { menuAnatomy } from '../../anatomy/index'

export const menuSlotRecipe = defineSlotRecipe({
  className: 'fidely-menu',
  jsx: ['Menu', /Menu$/],
  description: 'Styles for the Fidely UI Menu component',
  slots: menuAnatomy.keys,

  base: {
    content: {
      '--menu-bg': 'colors.bg.default',
      outline: 0,
      bg: 'var(--menu-bg)',
      color: 'fg.default',
      borderRadius: 's2',
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 'dropdown',
      boxShadow: 'md',
      p: '1',

      _open: {
        animationStyle: 'fade-in',
        animationDuration: 'fast',
      },

      _closed: {
        animationStyle: 'fade-out',
        animationDuration: 'fastest',
      },
    },
    indicator: {},
    itemGroupLabel: {
      alignItems: 'flex-start',
      fontWeight: 'medium',
      color: 'fg.muted',
      mb: '1',
    },
    itemIndicator: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: 1,
    },
    item: {
      userSelect: 'none',
      display: 'flex',
      textAlign: 'start',
      alignItems: 'center',
      textDecoration: 'none',
      flex: 1,
      borderRadius: 's1',
      width: '100%',

      _hover: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },

      _disabled: {
        opacity: 0.3,
        pointerEvents: 'none',
      },

      _highlighted: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },
    },
    itemText: {
      flex: '1',
    },
    triggerItem: {
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'start',
      textDecoration: 'none',
      width: '100%',
      borderRadius: 's1',

      _hover: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },

      _disabled: {
        opacity: 0.3,
        pointerEvents: 'none',
      },

      _highlighted: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },
    },
    separator: {
      height: '1px',
      bg: 'bg.muted',
      my: '1',
    },

    trigger: {
      _focusVisible: {
        focusVisibleRing: 'outside',
      },
    },

    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--menu-bg)',
    },
    arrowTip: {
      borderTopWidth: '0.5px',
      borderLeftWidth: '0.5px',
    },
  },

  variants: {
    size: {
      sm: {
        content: {
          minW: '8rem',
          scrollPadding: '1',
        },
        item: {
          py: '1',
          px: '1.4',
          gap: '1',
          textStyle: 'xs',
        },
        triggerItem: {
          py: '1',
          px: '1.4',
          gap: '1',
          textStyle: 'xs',
        },
        itemGroupLabel: {
          gap: '1',
          textStyle: 'xs',
          px: '1.4',
          py: '1',
        },
      },
      md: {
        content: {
          minW: '8rem',
          scrollPadding: '1.4',
        },
        item: {
          py: '1.5',
          px: '2',
          gap: '2',
          textStyle: 'sm',
        },
        triggerItem: {
          py: '1.5',
          px: '2',
          gap: '2',
          textStyle: 'sm',
        },
        itemGroupLabel: {
          gap: '2',
          textStyle: 'sm',
          px: '2',
          py: '1.4',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
