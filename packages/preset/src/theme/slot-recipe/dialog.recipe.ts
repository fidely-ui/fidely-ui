import { defineSlotRecipe } from '@pandacss/dev'

import { dialogAnatomy } from '../../anatomy'

export const dialogSlotRecipe = defineSlotRecipe({
  className: 'snaps-dialog',
  slots: dialogAnatomy.keys(),
  base: {
    content: {
      display: 'flex',
      flexDirection: 'column',
      background: 'bg.default',
      boxShadow: 'lg',
      position: 'relative',
      bg: 'bg.default',
      borderRadius: 's2',
      width: '100%',
      maxH: '100dvh',
      textStyle: 'sm',
      _open: {
        animation: 'dialog-in',
      },
      _close: {
        animation: 'dialog-out',
      },
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'lg',
    },
    description: {
      color: 'fg.muted',
    },
    closeTrigger: {
      position: 'absolute',
      top: '2',
      right: '2',
    },
    backdrop: {
      backdropFilter: 'blur(3px)',
      background: {
        _light: 'white.alpha9',
        _dark: 'black.alpha9',
      },
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: 'overlay',
      left: 0,
      top: 0,
      _open: {
        animation: 'backdrop-in',
      },
      _close: {
        animation: 'backdrop-out',
      },
    },
    positioner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      overflow: 'auto',
      width: '100vw',
      height: '100vh',
      zIndex: 'modal',
      top: 0,
      left: 0,
    },
    body: {
      flex: '1',
      px: '4',
      pt: '3',
      pb: '4',
    },
    header: {
      display: 'flex',
      flex: 0,
      px: '4',
      pt: '3',
      pb: '3',
      gap: '2',
    },
    footer: {
      width: 'full',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      px: '4',
      pt: '2',
      pb: '3',
      gap: '2',
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          maxW: 'sm',
        },
      },
      sm: {
        content: {
          maxW: 'md',
        },
      },
      md: {
        content: {
          maxW: 'lg',
        },
      },
      lg: {
        content: {
          maxW: '2xl',
        },
      },
      xl: {
        content: {
          maxW: '4xl',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
