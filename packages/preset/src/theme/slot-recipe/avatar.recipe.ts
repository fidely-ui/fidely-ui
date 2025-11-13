import { defineSlotRecipe } from '@pandacss/dev'
import { avatarAnatomy } from '@ark-ui/react/anatomy'

export const avatarSlotRecipe = defineSlotRecipe({
  className: 'snaps-avatar',
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'medium',
      position: 'relative',
      verticalAlign: 'top',
      flexShrink: '0',
      userSelect: 'none',
      w: 'var(--avatar-size)',
      h: 'var(--avatar-size)',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
      background: 'colorPalette.alpha7',
    },
    image: {
      w: '100%',
      h: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--avatar-radius)',
    },
    fallback: {
      lineHeight: '1',
      textTransform: 'uppercase',
      fontWeight: 'medium',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
      color: 'colorPalette.text',
    },
  },

  variants: {
    size: {
      full: {
        root: {
          '--avatar-size': '100%',
          '--avatar-font-size': '100%',
        },
      },
      '2xs': {
        root: {
          '--avatar-font-size': '{fontSizes.2xs}',
          '--avatar-size': '{sizes.6}',
        },
      },
      xs: {
        root: {
          '--avatar-font-size': '{fontSizes.xs}',
          '--avatar-size': '{sizes.8}',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': '{fontSizes.sm}',
          '--avatar-size': '{sizes.9}',
        },
      },
      md: {
        root: {
          '--avatar-font-size': '{fontSizes.md}',
          '--avatar-size': '{sizes.10}',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': '{fontSizes.md}',
          '--avatar-size': '{sizes.11}',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': '{fontSizes.lg}',
          '--avatar-size': '{sizes.12}',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': '{fontSizes.xl}',
          '--avatar-size': '{sizes.16}',
        },
      },
    },

    shape: {
      square: {
        root: { '--avatar-radius': '{radii.none}' },
      },
      rounded: {
        root: { '--avatar-radius': '{radii.lg}' },
      },
      full: {
        root: { '--avatar-radius': '{radii.full}' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    shape: 'full',
  },
})
