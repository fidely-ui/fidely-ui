import { defineSlotRecipe } from '@pandacss/dev'
import { accordionAnatomy } from '@ark-ui/react/anatomy'

export const accordionSlotRecipe = defineSlotRecipe({
  className: 'fidely-accordion',
  slots: accordionAnatomy.keys(),

  base: {
    root: {
      width: '100%',
      '--accordion-radius': 'radii.s2',
      borderRadius: 'var(--accordion-radius)',
    },

    item: {
      borderBottomWidth: '1px',
      borderColor: 'border.default',
      overflowAnchor: 'none',
      _last: {
        borderBottomWidth: '0',
      },
    },

    itemTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      px: '4',
      py: '3',
      fontWeight: 'medium',
      textAlign: 'start',
      color: 'fg.default',
      cursor: 'pointer',
      borderRadius: 'var(--accordion-radius)',
      transitionProperty: 'background, color',
      transitionDuration: 'fast',
      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
      },
    },

    itemContent: {
      overflow: 'hidden',
      px: '4',
      py: '3',
      color: 'fg.muted',
      fontSize: 'sm',
      borderRadius: 'var(--accordion-radius)',
      transitionProperty: 'padding-bottom',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      _open: {
        animation: 'collapse-in',
      },
      _closed: {
        animation: 'collapse-out',
      },
    },

    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease',
      color: 'fg.muted',
      _open: {
        transform: 'rotate(-180deg)',
      },
      _icon: {
        width: '1.25em',
        height: '1.25em',
      },
    },
  },

  variants: {
    variant: {
      subtle: {
        item: {
          borderBottomColor: 'transparent',
        },
        itemTrigger: {
          _hover: {
            bg: 'bg.subtle',
          },
        },
      },
      outline: {
        item: {
          borderWidth: '1px',
          borderColor: 'border.default',
          borderRadius: 'var(--accordion-radius)',
          mb: '2',
        },
      },
      flush: {
        root: {
          borderWidth: '0',
        },
        item: {
          borderBottomWidth: '0',
        },
        itemTrigger: {
          px: '0',
        },
        itemContent: {
          px: '0',
        },
      },
    },
    size: {
      sm: {
        itemTrigger: { py: '2', fontSize: 'sm' },
      },
      md: {
        itemTrigger: { py: '3', fontSize: 'md' },
      },
      lg: {
        itemTrigger: { py: '4', fontSize: 'lg' },
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
})
