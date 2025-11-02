import { defineSlotRecipe } from '@pandacss/dev'
import { selectAnatomy } from '@ark-ui/react/anatomy'

export const selectSlotRecipe = defineSlotRecipe({
  className: 'snaps-select',
  slots: selectAnatomy.keys(),
  description: 'Styles for the Snaps UI Select component',
  base: {
    root: {},
    label: {},
    positioner: {},
    trigger: {},
    indicator: {},
    item: {},
    content: {},
    control: {},
    clearTrigger: {},
    itemText: {},
    itemGroup: {},
    itemGroupLabel: {},
    itemIndicator: {},
    valueText: {},
    list: {},
  },

  variants: {},
  defaultVariants: {},
})
