import { defineSlotRecipe } from '@pandacss/dev'
import { tableAnatomy } from '../../anatomy'

export const tableSlotRecipe = defineSlotRecipe({
  className: 'fidely-table',
  description: 'Styles for the Fidely UI Table component',
  slots: tableAnatomy.keys(),
  base: {
    root: {
      width: 'full',
      borderCollapse: 'collapse',
    },
    body: {
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
    },
    caption: {
      color: 'fg.subtle',
      fontSize: 'sm',
    },
    cell: {
      verticalAlign: 'middle',
    },
    footer: {
      fontWeight: 'medium',
      borderTopWidth: '1px',
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
    },
    header: {
      color: 'fg.muted',
      fontWeight: 'medium',
      verticalAlign: 'middle',
    },
    headCell: {
      bg: 'transparent',
      textAlign: 'start',
    },
    row: {
      borderBottomWidth: '1px',
      transitionProperty: 'background, color',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
    },
    scrollArea: {
      display: 'block',
      whiteSpace: 'nowrap',
      WebkitOverflowScrolling: 'touch',
      overflowX: 'auto',
      maxWidth: '100%',
    },
  },

  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: '1px',
          borderColor: 'border.default',
          borderRadius: 'md',
          overflow: 'hidden',
        },
        header: {
          bg: 'bg.subtle',
        },
      },
      striped: {
        row: {
          '&:nth-of-type(even)': { bg: 'bg.subtle' },
        },
      },
      subtle: {
        headCell: { bg: 'bg.subtle' },
      },
    },
    hoverable: {
      true: {
        row: {
          _hover: { bg: 'bg.subtle' },
        },
      },
      false: {},
    },

    size: {
      sm: {
        root: { textStyle: 'sm' },
        caption: { mt: '4' },
        cell: { height: '7', px: '3', py: '2' },
        headCell: { height: '7', px: '3', py: '2' },
      },
      md: {
        root: { textStyle: 'sm' },
        caption: { mt: '4' },
        cell: { height: '9', px: '4', py: '3' },
        headCell: { height: '9', px: '4', py: '3' },
      },
      lg: {
        root: { textStyle: 'md' },
        caption: { mt: '5' },
        cell: { height: '12', px: '5', py: '4' },
        headCell: { height: '12', px: '5', py: '4' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'subtle',
    hoverable: false,
  },
})
