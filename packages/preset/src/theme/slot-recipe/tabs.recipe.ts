import { defineSlotRecipe } from '@pandacss/dev'
import { tabsAnatomy } from '@ark-ui/react/anatomy'

export const tabsSlotRecipe = defineSlotRecipe({
  className: 'snaps-tabs',
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      width: 'full',
      _horizontal: { flexDirection: 'column' },
      _vertical: { flexDirection: 'row' },
    },
    list: {
      display: 'flex',
      flexShrink: '0',
      overflow: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
      _horizontal: { flexDirection: 'row' },
      _vertical: { flexDirection: 'column' },
    },
    trigger: {
      alignItems: 'center',
      color: 'text.muted',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      fontWeight: 'semibold',
      gap: '2',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      transitionProperty: 'color, background, border-color',
      transitionDuration: 'normal',
      zIndex: '1',
      _hover: { color: 'text.default' },
      _selected: {
        color: 'fg.muted',
        _hover: { color: 'fg.default' },
      },
      _disabled: {
        color: 'text.disabled',
        cursor: 'not-allowed',
        _hover: { color: 'text.disabled' },
      },
      _vertical: { justifyContent: 'flex-start' },
    },
    indicator: {
      width: 'var(--width)',
      height: 'var(--height)',
      borderRadius: 's2',
      bg: 'colorPalette.subtle',
      shadow: 'shadow.xs',
      zIndex: -1,
    },
  },

  variants: {
    variant: {
      underline: {
        list: {
          _horizontal: {
            boxShadow: '0 -1px 0 0 inset var(--colors-border-default)',
            gap: '4',
          },
          _vertical: {
            boxShadow: '1px 0 0 0 inset var(--colors-border-default)',
            gap: '1',
          },
        },
        indicator: {
          background: 'colorPalette.default',
          _horizontal: {
            bottom: '0',
            height: '2px',
            width: 'var(--width)',
          },
          _vertical: {
            height: 'var(--height)',
            left: '0',
            width: '2px',
          },
        },
        content: {
          pt: '4.2',
        },
        trigger: {
          _horizontal: {
            pb: '2.6',
          },
          _selected: {
            borderTop: 'none',
            borderRight: 'none',
            borderLeft: 'none',
            borderBottomColor: 'fg.subtle',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
          },
        },
      },

      outline: {
        list: {
          _horizontal: {
            mb: '-1px',
          },
          _vertical: {
            mr: '-1px',
          },
        },
        trigger: {
          borderColor: 'transparent',
          borderWidth: '1px',
          _horizontal: {
            borderTopRadius: 's2',
          },
          _vertical: {
            borderTopLeftRadius: 's2',
            borderBottomLeftRadius: 's2',
          },
          _selected: {
            background: 'bg.default',
            borderColor: 'border.subtle',
            _horizontal: {
              borderBottomColor: 'transparent',
            },
            _vertical: {
              borderRightColor: 'transparent',
            },
          },
        },
        content: {
          borderWidth: '1px',
          borderColor: 'border.subtle',
          background: 'bg.default',
          width: 'full',
        },
      },
    },

    size: {
      sm: { trigger: { '& svg': { w: '4', h: '4' } } },
      md: { trigger: { '& svg': { w: '5', h: '5' } } },
      lg: { trigger: { '& svg': { w: '6', h: '6' } } },
    },
  },

  compoundVariants: [
    {
      size: 'sm',
      variant: 'outline',
      css: {
        trigger: { h: '9', minW: '9', textStyle: 'sm', px: '3.5' },
        content: { p: '3.5' },
      },
    },
    {
      size: 'md',
      variant: 'outline',
      css: {
        trigger: { h: '10', minW: '10', textStyle: 'sm', px: '4' },
        content: { p: '4' },
      },
    },
    {
      size: 'lg',
      variant: 'outline',
      css: {
        trigger: { h: '11', minW: '11', textStyle: 'md', px: '4.5' },
        content: { p: '4.5' },
      },
    },

    {
      size: 'sm',
      variant: 'underline',
      css: {
        trigger: { fontSize: 'sm', h: '9', minW: '9', px: '2.5' },
        content: { pt: '3' },
      },
    },
    {
      size: 'md',
      variant: 'underline',
      css: {
        trigger: { fontSize: 'md', h: '10', minW: '10', px: '3' },
        content: { pt: '4' },
      },
    },
    {
      size: 'lg',
      variant: 'underline',
      css: {
        trigger: { fontSize: 'md', h: '11', minW: '11', px: '3.5' },
        content: { pt: '5' },
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    variant: 'underline',
  },
})
